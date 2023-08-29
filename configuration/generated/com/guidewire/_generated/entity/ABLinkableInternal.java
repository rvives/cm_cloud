package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABLinkable.eti;ABLinkable.eix;ABLinkable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABLinkableInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal, com.guidewire.pl.system.bundle.InsertCallback, gw.ab.addressbook.entity.ABLinkable {
  /**
   * Gets the value of the LinkID field.
   * Represents the ID used by client applications to link with the Address Book.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLinkID();
  
  
  /**
   * Sets the value of the LinkID field.
   */
  public void setLinkID(java.lang.String value);
  
  
  
}