package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactAddress.eti;ABContactAddress.eix;ABContactAddress.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactAddressInternal extends com.guidewire._generated.entity.CommonContactAddressInternal, com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.domain.contact.impl.CommonContactAddressImplCallback, gw.ab.addressbook.entity.ABContactAddress {
  /**
   * Gets the value of the Address field.
   * Associated address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getAddress();
  
  
  public gw.pl.persistence.core.Key getAddressID();
  
  
  /**
   * Gets the value of the Contact field.
   * Associated contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getContact();
  
  
  public gw.pl.persistence.core.Key getContactID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(entity.Address value);
  
  
  public void setAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.ABContact value);
  
  
  public void setContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}