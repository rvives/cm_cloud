package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactContact.eti;ABContactContact.eix;ABContactContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactContactInternal extends com.guidewire._generated.entity.CommonContactContactInternal, com.guidewire._generated.entity.ValidatableInternal, com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.VersionableInternal, com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal, com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.RemoveCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.ab.addressbook.entity.ABContactContact {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Rel field.
   * Role
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactRel getRel();
  
  
  /**
   * Gets the value of the RelABContact field.
   * Second contact in the relationship.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getRelABContact();
  
  
  public gw.pl.persistence.core.Key getRelABContactID();
  
  
  /**
   * Gets the value of the RelatedContactPID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRelatedContactPID();
  
  
  /**
   * Gets the value of the SourceRelatedContactPID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSourceRelatedContactPID();
  
  
  /**
   * Gets the value of the SrcABContact field.
   * First contact in the relationship.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getSrcABContact();
  
  
  public gw.pl.persistence.core.Key getSrcABContactID();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Rel field.
   */
  public void setRel(typekey.ContactRel value);
  
  
  /**
   * Sets the value of the RelABContact field.
   */
  public void setRelABContact(entity.ABContact value);
  
  
  public void setRelABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RelatedContactPID field.
   */
  public void setRelatedContactPID(java.lang.String value);
  
  
  /**
   * Sets the value of the SourceRelatedContactPID field.
   */
  public void setSourceRelatedContactPID(java.lang.String value);
  
  
  /**
   * Sets the value of the SrcABContact field.
   */
  public void setSrcABContact(entity.ABContact value);
  
  
  public void setSrcABContactID(gw.pl.persistence.core.Key value);
  
  
  
}