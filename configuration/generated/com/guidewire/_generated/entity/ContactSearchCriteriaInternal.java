package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContactSearchCriteria.eti;ContactSearchCriteria.eix;ContactSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContactSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods, com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaInternalMethods, com.guidewire.pl.system.service.search.CommonContactSearchCriteria, com.guidewire.pl.system.service.search.CommonContactSearchCriteriaInternal {
  /**
   * Gets the value of the Address field.
   * The address of the contact.  Supercedes the separate fields of City, State, and PostalCode.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getAddress();
  
  
  public gw.pl.persistence.core.Key getAddressID();
  
  
  /**
   * Gets the value of the ContactSubtype field.
   * Contact class, like Person, Company, and Venue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Contact getContactSubtype();
  
  
  /**
   * Gets the value of the FirstName field.
   * First Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName();
  
  
  /**
   * Gets the value of the FirstNameKanji field.
   * First name in kanji (used only for Japanese names)
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
   * KeywordKanji is the general term for NameKanji (Companies and Places) and LastNameKanji (for Persons)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeywordKanji();
  
  
  /**
   * Gets the value of the MatchType field.
   * Match type requirement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactMatchResultType getMatchType();
  
  
  /**
   * Gets the value of the OfficialId field.
   * Field matched against the OfficialIDValue of the OfficialID objects associated with Contacts.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOfficialId();
  
  
  /**
   * Gets the value of the OrganizationName field.
   * Matched against Contacts belonging to an Organization (such as of person's employer) matching this name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrganizationName();
  
  
  /**
   * Gets the value of the ProximitySearchCenter field.
   * The center for a proximity search. Ignored if location fields are set on the Proximity Search Parameters.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getProximitySearchCenter();
  
  
  public gw.pl.persistence.core.Key getProximitySearchCenterID();
  
  
  /**
   * Gets the value of the ProximitySearchParameters field.
   * The parameters for a proximity search.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProximitySearchParameters getProximitySearchParameters();
  
  
  public gw.pl.persistence.core.Key getProximitySearchParametersID();
  
  
  /**
   * Gets the value of the SearchType field.
   * External search type (external search only)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactSearchType getSearchType();
  
  
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
   * Gets the value of the ExternalSearchEnabled field.
   * Whether or not external search is enabled. True for "picker" searches; false otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExternalSearchEnabled();
  
  
  /**
   * Gets the value of the PreferredVendors field.
   * Preferred Vendors
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPreferredVendors();
  
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(entity.Address value);
  
  
  public void setAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ContactSubtype field.
   */
  public void setContactSubtype(typekey.Contact value);
  
  
  /**
   * Sets the value of the ExternalSearchEnabled field.
   */
  public void setExternalSearchEnabled(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameKanji field.
   */
  public void setFirstNameKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the Keyword field.
   */
  public void setKeyword(java.lang.String value);
  
  
  /**
   * Sets the value of the KeywordKanji field.
   */
  public void setKeywordKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the MatchType field.
   */
  public void setMatchType(typekey.ContactMatchResultType value);
  
  
  /**
   * Sets the value of the OfficialId field.
   */
  public void setOfficialId(java.lang.String value);
  
  
  /**
   * Sets the value of the OrganizationName field.
   */
  public void setOrganizationName(java.lang.String value);
  
  
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
   * Sets the value of the SearchType field.
   */
  public void setSearchType(typekey.ContactSearchType value);
  
  
  /**
   * Sets the value of the TaxID field.
   */
  public void setTaxID(java.lang.String value);
  
  
  /**
   * Sets the value of the VendorType field.
   */
  public void setVendorType(typekey.VendorType value);
  
  
  
}