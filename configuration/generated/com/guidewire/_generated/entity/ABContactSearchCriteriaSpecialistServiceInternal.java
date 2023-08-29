package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactSearchCriteriaSpecialistService.eti;ABContactSearchCriteriaSpecialistService.eix;ABContactSearchCriteriaSpecialistService.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactSearchCriteriaSpecialistServiceInternal extends com.guidewire._generated.entity.VersionableInternal, gw.ab.addressbook.entity.ABContactSearchCriteriaSpecialistService {
  /**
   * Gets the value of the ABContactSearchCriteria field.
   * ABContactSearchCriteria
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteria getABContactSearchCriteria();
  
  
  public gw.pl.persistence.core.Key getABContactSearchCriteriaID();
  
  
  /**
   * Gets the value of the SpecialistService field.
   * SpecialistService
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.SpecialistService getSpecialistService();
  
  
  public gw.pl.persistence.core.Key getSpecialistServiceID();
  
  
  /**
   * Sets the value of the ABContactSearchCriteria field.
   */
  public void setABContactSearchCriteria(entity.ABContactSearchCriteria value);
  
  
  public void setABContactSearchCriteriaID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SpecialistService field.
   */
  public void setSpecialistService(entity.SpecialistService value);
  
  
  public void setSpecialistServiceID(gw.pl.persistence.core.Key value);
  
  
  
}