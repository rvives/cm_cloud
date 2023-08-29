package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactSearchCriteria.eti;ABContactSearchCriteria.eix;ABContactSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal, com.guidewire.pl.system.service.search.CommonContactSearchCriteria, gw.ab.addressbook.entity.ABContactSearchCriteria {
  /**
   * Adds the given element to the OfficialIDs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOfficialIDs(entity.ABContactSearchCriteriaOfficialID element);
  
  
  /**
   * Adds the given element to the SpecialistServices array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSpecialistServices(entity.ABContactSearchCriteriaSpecialistService element);
  
  
  /**
   * Adds the given element to the Tags array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTags(entity.ABContactSearchCriteriaTag element);
  
  
  /**
   * Gets the value of the Address field.
   * The address of the contact.  Supercedes the separate fields of City, State, and PostalCode.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getAddress();
  
  
  public gw.pl.persistence.core.Key getAddressID();
  
  
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
   * Gets the value of the CityDenorm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityDenorm();
  
  
  /**
   * Gets the value of the ContactSubtype field.
   * ABContact class, like ABPerson, ABCompany, and ABVenue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ABContact getContactSubtype();
  
  
  /**
   * Gets the value of the CountryDenorm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountryDenorm();
  
  
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
   * Gets the value of the FirstNameKanji field.
   * First Name in kanji.  Used only for Japanese names and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanji();
  
  
  /**
   * Gets the value of the Keyword field.
   * Keyword is the general term for Name (Companies and Places) and LastName (for Persons)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeyword();
  
  
  /**
   * Gets the value of the KeywordKanji field.
   * Company/Last Name in kanji.  Used only for Japanese names and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeywordKanji();
  
  
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
   * Gets the value of the OfficialIDs field.
   * List of ABContactSearchCriteriaOfficialIDs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteriaOfficialID[] getOfficialIDs();
  
  
  /**
   * Gets the value of the OrganizationName field.
   * Name of person's employer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrganizationName();
  
  
  /**
   * Gets the value of the PostalCodeDenorm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeDenorm();
  
  
  /**
   * Gets the value of the ProximitySearchCenter field.
   * The center for a proximity search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getProximitySearchCenter();
  
  
  public gw.pl.persistence.core.Key getProximitySearchCenterID();
  
  
  /**
   * Gets the value of the ProximitySearchParameters field.
   * The parameters for a proximity search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProximitySearchParameters getProximitySearchParameters();
  
  
  public gw.pl.persistence.core.Key getProximitySearchParametersID();
  
  
  /**
   * Gets the value of the RelatedABContactSearchCriteria field.
   * The criteria for related contacts
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RelatedABContactSearchCriteria getRelatedABContactSearchCriteria();
  
  
  public gw.pl.persistence.core.Key getRelatedABContactSearchCriteriaID();
  
  
  /**
   * Gets the value of the Score field.
   * Minimum Score for returned Contacts
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScore();
  
  
  /**
   * Gets the value of the SpecialistServices field.
   * List of ABContactSearchCriteriaSpecialistServices.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteriaSpecialistService[] getSpecialistServices();
  
  
  /**
   * Gets the value of the StateDenorm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getStateDenorm();
  
  
  /**
   * Gets the value of the Tags field.
   * List of ABContactSearchCriteriaTags.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteriaTag[] getTags();
  
  
  /**
   * Gets the value of the TaxID field.
   * Tax ID for the contact (SSN or EIN).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTaxID();
  
  
  /**
   * Gets the value of the VendorAvailability field.
   * The contact's vendor availability type for example, available, unavailable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorAvailabilityType getVendorAvailability();
  
  
  /**
   * Gets the value of the VendorType field.
   * The contact's vendor type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorType getVendorType();
  
  
  /**
   * Gets the value of the AllTagsRequired field.
   * If true, Contacts must have all the tags to match, if false, Contacts must have at least one of the tags to match.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAllTagsRequired();
  
  
  /**
   * Gets the value of the IgnoreCountry field.
   * Set on remote searches via SOAP if Country should actually be null, as the SOAP deserialization of Address.Country treats Null as the default Country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIgnoreCountry();
  
  
  /**
   * Gets the value of the PreferredVendors field.
   * Preferred vendors only
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPreferredVendors();
  
  
  /**
   * Removes the given element from the OfficialIDs array. This is achieved by marking the element for removal.
   */
  public void removeFromOfficialIDs(entity.ABContactSearchCriteriaOfficialID element);
  
  
  /**
   * Removes the given element from the OfficialIDs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOfficialIDs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the SpecialistServices array. This is achieved by marking the element for removal.
   */
  public void removeFromSpecialistServices(entity.ABContactSearchCriteriaSpecialistService element);
  
  
  /**
   * Removes the given element from the SpecialistServices array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSpecialistServices(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Tags array. This is achieved by marking the element for removal.
   */
  public void removeFromTags(entity.ABContactSearchCriteriaTag element);
  
  
  /**
   * Removes the given element from the Tags array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTags(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(entity.Address value);
  
  
  public void setAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AdjudicativeDomain field.
   */
  public void setAdjudicativeDomain(typekey.AdjudicativeDomain value);
  
  
  /**
   * Sets the value of the AllTagsRequired field.
   */
  public void setAllTagsRequired(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AttorneySpecialty field.
   */
  public void setAttorneySpecialty(typekey.LegalSpecialty value);
  
  
  /**
   * Sets the value of the CityDenorm field.
   */
  public void setCityDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the ContactSubtype field.
   */
  public void setContactSubtype(typekey.ABContact value);
  
  
  /**
   * Sets the value of the CountryDenorm field.
   */
  public void setCountryDenorm(typekey.Country value);
  
  
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
   * Sets the value of the FirstNameKanji field.
   */
  public void setFirstNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the IgnoreCountry field.
   */
  public void setIgnoreCountry(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Keyword field.
   */
  public void setKeyword(java.lang.String value);
  
  
  /**
   * Sets the value of the KeywordKanji field.
   */
  public void setKeywordKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the LawFirmSpecialty field.
   */
  public void setLawFirmSpecialty(typekey.LegalSpecialty value);
  
  
  /**
   * Sets the value of the MedicalOrgSpecialty field.
   */
  public void setMedicalOrgSpecialty(typekey.SpecialtyType value);
  
  
  /**
   * Sets the value of the OfficialIDs field.
   */
  public void setOfficialIDs(entity.ABContactSearchCriteriaOfficialID[] value);
  
  
  /**
   * Sets the value of the OrganizationName field.
   */
  public void setOrganizationName(java.lang.String value);
  
  
  /**
   * Sets the value of the PostalCodeDenorm field.
   */
  public void setPostalCodeDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the PreferredVendors field.
   */
  public void setPreferredVendors(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ProximitySearchCenter field.
   */
  public void setProximitySearchCenter(entity.Address value);
  
  
  public void setProximitySearchCenterID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProximitySearchParameters field.
   */
  public void setProximitySearchParameters(entity.ProximitySearchParameters value);
  
  
  public void setProximitySearchParametersID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RelatedABContactSearchCriteria field.
   */
  public void setRelatedABContactSearchCriteria(entity.RelatedABContactSearchCriteria value);
  
  
  public void setRelatedABContactSearchCriteriaID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SpecialistServices field.
   */
  public void setSpecialistServices(entity.ABContactSearchCriteriaSpecialistService[] value);
  
  
  /**
   * Sets the value of the StateDenorm field.
   */
  public void setStateDenorm(typekey.State value);
  
  
  /**
   * Sets the value of the Tags field.
   */
  public void setTags(entity.ABContactSearchCriteriaTag[] value);
  
  
  /**
   * Sets the value of the TaxID field.
   */
  public void setTaxID(java.lang.String value);
  
  
  /**
   * Sets the value of the VendorAvailability field.
   */
  public void setVendorAvailability(typekey.VendorAvailabilityType value);
  
  
  /**
   * Sets the value of the VendorType field.
   */
  public void setVendorType(typekey.VendorType value);
  
  
  
}