package edge.metadata.annotation
/**
 * Multi-value metadata factory. Very similar to IMetaFactory, but could provide multiple metadata aspects. For example,
 * it could provide display label, validation and mask at the same time.
 */
interface IMetaMultiFactory extends IAnnotation {
  /**
   * Returns a representation of the metadata aspects generated by this metadata factory.
   * Note that type of the each object in the array is used as the metadata type for that item.
   * Metadata is serialized as a value of "simple web metadata" (i.e. all properties are serialized on the object).
   * @returns list of metadata items.
   */
  public function getState() : Object[]
}
