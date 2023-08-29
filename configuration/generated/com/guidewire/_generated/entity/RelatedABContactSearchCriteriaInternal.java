package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RelatedABContactSearchCriteria.eti;RelatedABContactSearchCriteria.eix;RelatedABContactSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RelatedABContactSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, gw.ab.addressbook.entity.RelatedABContactSearchCriteria {
  /**
   * Gets the value of the AdjudicativeDomain field.
   * Adjudicative Domain
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AdjudicativeDomain getAdjudicativeDomain();
  
  
  /**
   * Gets the value of the AttorneySpecialty field.
   * Attorney's specialty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LegalSpecialty getAttorneySpecialty();
  
  
  /**
   * Gets the value of the ContactSubtype field.
   * ABContact class, like ABPerson, ABCompany, and ABVenue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ABContact getContactSubtype();
  
  
  /**
   * Gets the value of the DoctorSpecialty field.
   * Doctor's specialty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialtyType getDoctorSpecialty();
  
  
  /**
   * Gets the value of the EmployeeNumber field.
   * Employee ID number. Applies to UserContacts.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmployeeNumber();
  
  
  /**
   * Gets the value of the FirstName field.
   * First Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName();
  
  
  /**
   * Gets the value of the Keyword field.
   * Keyword is the general term for Name (Companies and Places) and LastName (for Persons)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeyword();
  
  
  /**
   * Gets the value of the LawFirmSpecialty field.
   * Law firm Specialty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LegalSpecialty getLawFirmSpecialty();
  
  
  /**
   * Gets the value of the MedicalOrgSpecialty field.
   * Medical specialty type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialtyType getMedicalOrgSpecialty();
  
  
  /**
   * Gets the value of the OrganizationName field.
   * Name of person's employer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrganizationName();
  
  
  /**
   * Gets the value of the RelatedContact field.
   * The related contact, if known.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getRelatedContact();
  
  
  public gw.pl.persistence.core.Key getRelatedContactID();
  
  
  /**
   * Gets the value of the RoleOfRelatedContact field.
   * Role of related contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactBidiRel getRoleOfRelatedContact();
  
  
  /**
   * Gets the value of the Score field.
   * Minimum Score for returned Contacts
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScore();
  
  
  /**
   * Gets the value of the TaxID field.
   * Tax ID for the contact (SSN or EIN).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTaxID();
  
  
  /**
   * Gets the value of the VendorType field.
   * The company's vendor type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorType getVendorType();
  
  
  /**
   * Gets the value of the PreferredVendors field.
   * Preferred vendors only
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPreferredVendors();
  
  
  /**
   * Sets the value of the AdjudicativeDomain field.
   */
  public void setAdjudicativeDomain(typekey.AdjudicativeDomain value);
  
  
  /**
   * Sets the value of the AttorneySpecialty field.
   */
  public void setAttorneySpecialty(typekey.LegalSpecialty value);
  
  
  /**
   * Sets the value of the ContactSubtype field.
   */
  public void setContactSubtype(typekey.ABContact value);
  
  
  /**
   * Sets the value of the DoctorSpecialty field.
   */
  public void setDoctorSpecialty(typekey.SpecialtyType value);
  
  
  /**
   * Sets the value of the EmployeeNumber field.
   */
  public void setEmployeeNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value);
  
  
  /**
   * Sets the value of the Keyword field.
   */
  public void setKeyword(java.lang.String value);
  
  
  /**
   * Sets the value of the LawFirmSpecialty field.
   */
  public void setLawFirmSpecialty(typekey.LegalSpecialty value);
  
  
  /**
   * Sets the value of the MedicalOrgSpecialty field.
   */
  public void setMedicalOrgSpecialty(typekey.SpecialtyType value);
  
  
  /**
   * Sets the value of the OrganizationName field.
   */
  public void setOrganizationName(java.lang.String value);
  
  
  /**
   * Sets the value of the PreferredVendors field.
   */
  public void setPreferredVendors(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the RelatedContact field.
   */
  public void setRelatedContact(entity.ABContact value);
  
  
  public void setRelatedContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RoleOfRelatedContact field.
   */
  public void setRoleOfRelatedContact(typekey.ContactBidiRel value);
  
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.lang.Integer value);
  
  
  /**
   * Sets the value of the TaxID field.
   */
  public void setTaxID(java.lang.String value);
  
  
  /**
   * Sets the value of the VendorType field.
   */
  public void setVendorType(typekey.VendorType value);
  
  
  
}