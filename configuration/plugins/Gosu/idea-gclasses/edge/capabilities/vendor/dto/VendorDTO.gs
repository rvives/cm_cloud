package edge.capabilities.vendor.dto

uses edge.capabilities.address.dto.AddressDTO
uses edge.capabilities.address.dto.SpatialPointDTO
uses edge.jsonmapper.JsonProperty
uses java.lang.Integer

class VendorDTO {

  @JsonProperty
  var _addressBookUID : String as AddressBookUID

  @JsonProperty
  var _vendorName : String as VendorName

  @JsonProperty
  var _vendorNameKanji : String as VendorNameKanji

  @JsonProperty
  var _primaryAddress : AddressDTO as PrimaryAddress

  @JsonProperty
  var _score : Integer as Score

  @JsonProperty
  var _geocode : SpatialPointDTO as Geocode

  @JsonProperty
  var _proximateDistance: String as ProximateDistance

  @JsonProperty
  var _email : String as Email

  @JsonProperty
  var _phone : String as Phone

}
