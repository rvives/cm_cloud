package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AddressBookLinkable.eti;AddressBookLinkable.eix;AddressBookLinkable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AddressBookLinkableInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the AddressBookUID field.
   * The system uses this value when it is integrated with ContactManager and the related contact is linked.  In this case, the ID represents the ID of the corresponding entity in ContactManager. This value is null if the object is not linked.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressBookUID();
  
  
  /**
   * Sets the value of the AddressBookUID field.
   */
  public void setAddressBookUID(java.lang.String value);
  
  
  
}