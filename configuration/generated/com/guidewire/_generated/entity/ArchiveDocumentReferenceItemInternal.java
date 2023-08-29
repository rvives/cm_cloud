package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ArchiveDocumentReferenceItem.eti;ArchiveDocumentReferenceItem.eix;ArchiveDocumentReferenceItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ArchiveDocumentReferenceItemInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire.pl.domain.extract.ArchiveDocumentReferenceItemPublicMethods {
  /**
   * Gets the value of the ReferencedEntity field.
   * Name of the entity of the referenced object. For instances of subtypes, this is always the subtype root entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReferencedEntity();
  
  
  /**
   * Gets the value of the ReferencedEntityPublicID field.
   * PublicID of the referenced object.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReferencedEntityPublicID();
  
  
  /**
   * Gets the value of the Root field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArchiveDocumentReferences getRoot();
  
  
  public gw.pl.persistence.core.Key getRootID();
  
  
  /**
   * Sets the value of the ReferencedEntity field.
   */
  public void setReferencedEntity(java.lang.String value);
  
  
  /**
   * Sets the value of the ReferencedEntityPublicID field.
   */
  public void setReferencedEntityPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the Root field.
   */
  public void setRoot(entity.ArchiveDocumentReferences value);
  
  
  public void setRootID(gw.pl.persistence.core.Key value);
  
  
  
}