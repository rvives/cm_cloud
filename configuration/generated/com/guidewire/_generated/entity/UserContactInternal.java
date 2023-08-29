package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserContact.eti;UserContact.eix;UserContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserContactInternal extends com.guidewire._generated.entity.PersonInternal, com.guidewire.pl.domain.contact.impl.ContactInternalMethods, gw.api.obfuscation.Obfuscator {
  /**
   * Gets the value of the EmployeeNumber field.
   * Employee ID number. Applies to user contacts.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmployeeNumber();
  
  
  /**
   * Sets the value of the EmployeeNumber field.
   */
  public void setEmployeeNumber(java.lang.String value);
  
  
  
}