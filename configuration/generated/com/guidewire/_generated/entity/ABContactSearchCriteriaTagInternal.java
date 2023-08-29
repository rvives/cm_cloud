package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactSearchCriteriaTag.eti;ABContactSearchCriteriaTag.eix;ABContactSearchCriteriaTag.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactSearchCriteriaTagInternal extends com.guidewire._generated.entity.VersionableInternal, gw.ab.addressbook.entity.ABContactSearchCriteriaTag {
  /**
   * Gets the value of the ABContactSearchCriteria field.
   * ABContactSearchCriteria
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteria getABContactSearchCriteria();
  
  
  public gw.pl.persistence.core.Key getABContactSearchCriteriaID();
  
  
  /**
   * Gets the value of the Type field.
   * Type of this ContactTag.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactTagType getType();
  
  
  /**
   * Sets the value of the ABContactSearchCriteria field.
   */
  public void setABContactSearchCriteria(entity.ABContactSearchCriteria value);
  
  
  public void setABContactSearchCriteriaID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.ContactTagType value);
  
  
  
}