package edge.metadata.typeinfo.util.dto

uses edge.jsonmapper.JsonProperty
uses edge.metadata.typeinfo.dto.TypedDTO

/**
 * Named metadata defined on the class. This one is usually generated by the "property methods" on the class.
 */
class NamedMetadataDTO {
  /** Name of the metadata. */
  @JsonProperty
  private var _name : String as Name

  /** Metadata elements associated with the name. */
  @JsonProperty
  private var _metadata : TypedDTO as Metadata

  construct(nm : String, meta : TypedDTO) {
    this._name = nm
    this.Metadata = meta
  }
}