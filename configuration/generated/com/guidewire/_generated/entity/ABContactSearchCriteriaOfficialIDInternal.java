package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactSearchCriteriaOfficialID.eti;ABContactSearchCriteriaOfficialID.eix;ABContactSearchCriteriaOfficialID.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactSearchCriteriaOfficialIDInternal extends com.guidewire._generated.entity.VersionableInternal, gw.ab.addressbook.entity.ABContactSearchCriteriaOfficialID {
  /**
   * Gets the value of the ABContactSearchCriteria field.
   * ABContactSearchCriteria
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteria getABContactSearchCriteria();
  
  
  public gw.pl.persistence.core.Key getABContactSearchCriteriaID();
  
  
  /**
   * Gets the value of the OfficialIDType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OfficialIDType getOfficialIDType();
  
  
  /**
   * Gets the value of the OfficialIDValue field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOfficialIDValue();
  
  
  /**
   * Gets the value of the State field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Sets the value of the ABContactSearchCriteria field.
   */
  public void setABContactSearchCriteria(entity.ABContactSearchCriteria value);
  
  
  public void setABContactSearchCriteriaID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OfficialIDType field.
   */
  public void setOfficialIDType(typekey.OfficialIDType value);
  
  
  /**
   * Sets the value of the OfficialIDValue field.
   */
  public void setOfficialIDValue(java.lang.String value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  
}