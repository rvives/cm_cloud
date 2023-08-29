package edge.capabilities.vendor.dto

uses edge.aspects.validation.annotations.Range
uses edge.aspects.validation.annotations.Required
uses edge.capabilities.address.dto.AddressDTO
uses edge.capabilities.address.dto.SpatialPointDTO
uses edge.jsonmapper.JsonProperty
uses java.lang.Integer

class ProximitySearchCriteriaDTO {
  /**
   * Proximity search is performed for this geocode.
   */
  @JsonProperty
  var _proximitySearchGeocode : SpatialPointDTO as ProximitySearchGeocode

  /**
   * Proximity search is performed for this address. Ignored if proximitySearchGeocode is set.
   */
  @JsonProperty
  var _proximitySearchAddress : AddressDTO as ProximitySearchAddress
  
  /**
   * Unit of distance, get default unit from config if not specified
   * Unit is determined by 'UseMetricDistancesByDefault' parameter in config.xml
   */
  @JsonProperty
  var _unitOfDistance : typekey.UnitOfDistance as UnitOfDistance

  /**
   * Represents value of search radius
   */
  @JsonProperty
  @Required
  @Range(1,300)
  var _searchRadius : Integer as SearchRadius

  /**
   * Maximum number of returned results, returns all if not specified
   */
  @JsonProperty
  var _maxNumberOfResults : Integer as MaxNumberOfResults

  /**
   * Represents contact type.
   */
  @JsonProperty
  var _contactType : typekey.ABContact as ContactType

  /**
   * It filter results for specific types of service, returns all if not specified
   * Service codes are stored in database
   * Diamond platform doesn't support services so parameter is ignored
   */
  @JsonProperty
  var _specialistServiceCodes : String[] as SpecialistServiceCodes

}
