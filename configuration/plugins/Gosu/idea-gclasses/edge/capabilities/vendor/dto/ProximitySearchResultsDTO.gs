package edge.capabilities.vendor.dto

uses edge.capabilities.address.dto.SpatialPointDTO
uses edge.jsonmapper.JsonProperty

class ProximitySearchResultsDTO {
  /**
   * Geocode for which proximity search was performed - exactly from proximitySearchGeocode or calculated for proximitySearchAddress
   */
  @JsonProperty
  var _searchCenter : SpatialPointDTO as SearchCenter

  /**
   * List of found vendors
   */
  @JsonProperty
  var _vendors : VendorDTO[] as Vendors

}
