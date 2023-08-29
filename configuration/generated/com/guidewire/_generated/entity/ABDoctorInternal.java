package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABDoctor.eti;ABDoctor.eix;ABDoctor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABDoctorInternal extends com.guidewire._generated.entity.ABPersonVendorInternal {
  /**
   * Gets the value of the DoctorSpecialty field.
   * Doctor's medical specialty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialtyType getDoctorSpecialty();
  
  
  /**
   * Gets the value of the MedicalLicense field.
   * Doctor's medical license number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMedicalLicense();
  
  
  /**
   * Sets the value of the DoctorSpecialty field.
   */
  public void setDoctorSpecialty(typekey.SpecialtyType value);
  
  
  /**
   * Sets the value of the MedicalLicense field.
   */
  public void setMedicalLicense(java.lang.String value);
  
  
  
}