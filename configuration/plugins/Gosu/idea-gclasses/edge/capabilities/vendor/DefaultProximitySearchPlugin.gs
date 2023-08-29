package edge.capabilities.vendor

uses edge.PlatformSupport.Bundle
uses edge.capabilities.address.IAddressPlugin
uses edge.capabilities.address.dto.SpatialPointDTO
uses edge.capabilities.vendor.dto.ProximitySearchCriteriaDTO
uses edge.capabilities.vendor.dto.ProximitySearchResultsDTO
uses edge.capabilities.vendor.dto.VendorDTO
uses edge.di.annotations.ForAllGwNodes
uses gw.api.database.Queries
uses gw.api.database.Query
uses gw.api.database.spatial.SpatialPoint
uses gw.api.geocode.GeocodeUtils
uses gw.api.webservice.addressbook.contactapi.ABContactSearchExecutor
uses gw.api.webservice.addressbook.contactapi.ABContactSearchSpec
uses gw.plugin.Plugins
uses gw.plugin.geocode.GeocodePlugin
uses java.lang.IllegalArgumentException

class DefaultProximitySearchPlugin implements IProximitySearchPlugin {

  private final var _geocodePlugin: GeocodePlugin
  private final var _addressPlugin: IAddressPlugin

  @ForAllGwNodes
  construct(addressPlugin: IAddressPlugin) {
    this._addressPlugin = addressPlugin
    this._geocodePlugin = Plugins.get(GeocodePlugin)
  }

  override function search(searchCriteria: ProximitySearchCriteriaDTO) : ProximitySearchResultsDTO {
    if( searchCriteria.ContactType == null) {
      searchCriteria.ContactType = typekey.ABContact.TC_ABAUTOREPAIRSHOP
    }
    if( searchCriteria.UnitOfDistance == null) {
      searchCriteria.UnitOfDistance = GeocodeUtils.getDefaultUnitOfDistance()
    }

    final var criteria = createSearchCriteria(searchCriteria)
    final var spec = createSearchSpec(searchCriteria)

    final var searchResults = new ProximitySearchResultsDTO()

    if(searchCriteria.ProximitySearchGeocode !== null) {
      prepareSearchByGeocode(criteria, searchCriteria)
    } else if (searchCriteria.ProximitySearchAddress !== null) {
      prepareSearchByAddress(criteria, searchCriteria)
    } else {
      throw new IllegalArgumentException("Insufficient number of parameters. " +
          "You need to specify proximitySearchAddress or proximitySearchGeocode in search criterias.")
    }

    searchResults.Vendors = searchVendors(criteria, spec).map(\contact ->
        toVendorDTO(contact, criteria)
    )
    searchResults.SearchCenter = toSpatialPointDto(criteria.ProximitySearchCenter.SpatialPoint)

    return searchResults
  }

  private function createSearchSpec(searchCriteria: ProximitySearchCriteriaDTO): ABContactSearchSpec {
    var chunkSize = searchCriteria.MaxNumberOfResults == null || searchCriteria.MaxNumberOfResults > 100
        ? 100
        : searchCriteria.MaxNumberOfResults

    return new ABContactSearchSpec() {
        :ChunkSize = chunkSize
    }
  }

  private function prepareSearchByGeocode(criteria: ABContactSearchCriteria, searchCriteria: ProximitySearchCriteriaDTO) {
    criteria.ProximitySearchCenter.GeocodeStatus = GeocodeStatus.TC_EXACT
    criteria.ProximitySearchCenter.SpatialPoint = createSpatialPointFromDto(searchCriteria.ProximitySearchGeocode)
    criteria.ProximitySearchParameters.SpatialPoint = createSpatialPointFromDto(searchCriteria.ProximitySearchGeocode)
  }

  private function prepareSearchByAddress(criteria: ABContactSearchCriteria, searchCriteria: ProximitySearchCriteriaDTO) {
    _addressPlugin.updateFromDTO(criteria.ProximitySearchCenter, searchCriteria.ProximitySearchAddress)
    _geocodePlugin.geocodeAddressBestMatch(criteria.ProximitySearchCenter)
  }

  private function createSpatialPointFromDto(dto: SpatialPointDTO) : SpatialPoint{
    return new SpatialPoint(dto.Longitude, dto.Latitude)
  }

  private function searchVendors(criteria: ABContactSearchCriteria, spec: ABContactSearchSpec): ABContact[] {
    return ABContactSearchExecutor.executeSearch(criteria, spec).Results
  }

  private function toVendorDTO(contact: ABContact, searchCriteria: ABContactSearchCriteria): VendorDTO {
    final var vendor = new VendorDTO()
    vendor.AddressBookUID = contact.PublicID
    vendor.VendorName = contact.Name
    vendor.VendorNameKanji = contact.NameKanji
    vendor.PrimaryAddress = _addressPlugin.toDto(contact.PrimaryAddress)
    vendor.Score = contact.Score
    vendor.Geocode = toSpatialPointDto(contact.PrimaryAddress.SpatialPoint)
    vendor.ProximateDistance = contact.PrimaryAddress
        .getDistanceFromAsString(searchCriteria.ProximitySearchCenter, searchCriteria.ProximitySearchParameters.UnitOfDistance)
    vendor.Email = contact.EmailAddress1
    vendor.Phone = contact.PrimaryPhoneValue

    return vendor
  }

  private function createSearchCriteria(searchCriteria: ProximitySearchCriteriaDTO): ABContactSearchCriteria {
    return Bundle.resolveInTransaction(\b -> {
      var abCriteria = new ABContactSearchCriteria(b.PlatformBundle)
      fillCriteriaFields(abCriteria, searchCriteria)
      filterBySpecialistServices(abCriteria, searchCriteria.SpecialistServiceCodes)
      return abCriteria
    })
  }

  private function filterBySpecialistServices(criteria: ABContactSearchCriteria, specialistServiceCodes: String[]) {
    for (specialistServiceCode in specialistServiceCodes) {
      var service = findSpecialistServiceByCode(specialistServiceCode)

      if (service == null)
        throw new IllegalArgumentException("Wrong service code " + specialistServiceCode)
      if (service.Children.Count > 0)
        throw new IllegalArgumentException("Only leaf services may appear in the search criteria " + specialistServiceCode)

      criteria.addToSpecialistServices(new ABContactSearchCriteriaSpecialistService() {
          :SpecialistService = service
          })
    }
  }

  private function findSpecialistServiceByCode(code : String) : SpecialistService {
    var query : Query<SpecialistService> = Queries.createQuery(SpecialistService)
    query.compare(SpecialistService#Code.PropertyInfo.Name, Equals, code)

    return query.select().FirstResult
  }

  private function fillCriteriaFields(criteria: ABContactSearchCriteria, dto: ProximitySearchCriteriaDTO): void {
    criteria.ProximitySearchParameters.GeocodeStatus = GeocodeStatus.TC_EXACT
    criteria.ProximitySearchParameters.DistanceBasedSearch = true
    criteria.ProximitySearchParameters.Number = dto.SearchRadius
    criteria.ProximitySearchParameters.UnitOfDistance = dto.UnitOfDistance
    criteria.ContactSubtype = dto.ContactType
    criteria.PreferredVendors = true
  }

  private function toSpatialPointDto(spatialPoint: SpatialPoint) : SpatialPointDTO {
    return new SpatialPointDTO() {
        :Latitude = spatialPoint.Latitude,
        :Longitude = spatialPoint.Longitude
    }
  }
}
