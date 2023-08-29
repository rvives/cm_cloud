package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContactAddressHistory.eti;ContactAddressHistory.eix;ContactAddressHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContactAddressHistoryInternal extends com.guidewire._generated.entity.ContactHistoryInternal, gw.ab.history.entity.ContactAddressHistory {
  /**
   * Gets the value of the ContactAddress field.
   * The related contact-associated address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getContactAddress();
  
  
  public gw.pl.persistence.core.Key getContactAddressID();
  
  
  /**
   * Sets the value of the ContactAddress field.
   */
  public void setContactAddress(entity.Address value);
  
  
  public void setContactAddressID(gw.pl.persistence.core.Key value);
  
  
  
}