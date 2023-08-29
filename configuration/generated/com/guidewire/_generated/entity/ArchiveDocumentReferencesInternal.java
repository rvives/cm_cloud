package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ArchiveDocumentReferences.eti;ArchiveDocumentReferences.eix;ArchiveDocumentReferences.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ArchiveDocumentReferencesInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire.pl.domain.extract.ArchiveDocumentReferencesPublicMethods {
  /**
   * Adds the given element to the ReferenceItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToReferenceItems(entity.ArchiveDocumentReferenceItem element);
  
  
  /**
   * Gets the value of the ReferenceItems field.
   * Beans in database referenced by beans in an archive document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArchiveDocumentReferenceItem[] getReferenceItems();
  
  
  /**
   * Gets the value of the RootPublicID field.
   * The PublicID of the root of an archive document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRootPublicID();
  
  
  /**
   * Removes the given element from the ReferenceItems array. This is achieved by marking the element for removal.
   */
  public void removeFromReferenceItems(entity.ArchiveDocumentReferenceItem element);
  
  
  /**
   * Removes the given element from the ReferenceItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromReferenceItems(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ReferenceItems field.
   */
  public void setReferenceItems(entity.ArchiveDocumentReferenceItem[] value);
  
  
  /**
   * Sets the value of the RootPublicID field.
   */
  public void setRootPublicID(java.lang.String value);
  
  
  
}