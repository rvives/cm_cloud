package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactDocumentLink.eti;ABContactDocumentLink.eix;ABContactDocumentLink.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactDocumentLinkInternal extends com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.domain.document.DocumentJoiningBean, com.guidewire.pl.system.bundle.CommitCallback, gw.ab.contact.entity.ABContactDocumentLink {
  /**
   * Gets the value of the ABContact field.
   * ABContact the Document is associated to in this ABContactDocumentLink
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the Document field.
   * Associated Document. Warning: even though there is always a Document associated with this entity, this field may be null when the IDocumentMetadataSource plugin is enabled. To reliably get the associated Document, use the LinkedDocument property.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Document getDocument();
  
  
  public gw.pl.persistence.core.Key getDocumentID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Document field.
   */
  public void setDocument(entity.Document value);
  
  
  public void setDocumentID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}