package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABMedicalCareOrg.eti;ABMedicalCareOrg.eix;ABMedicalCareOrg.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABMedicalCareOrgInternal extends com.guidewire._generated.entity.ABCompanyVendorInternal {
  /**
   * Gets the value of the MedicalOrgSpecialty field.
   * Medical specialty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialtyType getMedicalOrgSpecialty();
  
  
  /**
   * Sets the value of the MedicalOrgSpecialty field.
   */
  public void setMedicalOrgSpecialty(typekey.SpecialtyType value);
  
  
  
}