package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactSpecialistService.eti;ABContactSpecialistService.eix;ABContactSpecialistService.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactSpecialistServiceInternal extends com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.ab.addressbook.entity.ABContactSpecialistService {
  /**
   * Gets the value of the ABContact field.
   * ABContact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the SpecialistService field.
   * SpecialistService
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.SpecialistService getSpecialistService();
  
  
  public gw.pl.persistence.core.Key getSpecialistServiceID();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SpecialistService field.
   */
  public void setSpecialistService(entity.SpecialistService value);
  
  
  public void setSpecialistServiceID(gw.pl.persistence.core.Key value);
  
  
  
}