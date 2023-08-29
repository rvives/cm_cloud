package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactTag.eti;ABContactTag.eix;ABContactTag.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactTagInternal extends com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.VersionableInternal, gw.ab.addressbook.entity.ABContactTag {
  /**
   * Gets the value of the ABContact field.
   * ABContact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Type field.
   * Type of this ContactTag.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactTagType getType();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.ContactTagType value);
  
  
  
}