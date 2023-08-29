package entity;

/**
 * ABContactSearchCriteria
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactSearchCriteria.eti;ABContactSearchCriteria.eix;ABContactSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ABContactSearchCriteria")
public class ABContactSearchCriteria extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable, com.guidewire.pl.system.service.search.CommonContactSearchCriteria {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ABContactSearchCriteria> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ABContactSearchCriteria>("entity.ABContactSearchCriteria");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ADDRESS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Address");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ADJUDICATIVEDOMAIN_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AdjudicativeDomain");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ALLTAGSREQUIRED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AllTagsRequired");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ATTORNEYSPECIALTY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AttorneySpecialty");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CONTACTSUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ContactSubtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COUNTRYDENORM_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CountryDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DOCTORSPECIALTY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DoctorSpecialty");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EMPLOYEENUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EmployeeNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> IGNORECOUNTRY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IgnoreCountry");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> KEYWORD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Keyword");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> KEYWORDKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "KeywordKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LAWFIRMSPECIALTY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LawFirmSpecialty");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> MEDICALORGSPECIALTY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "MedicalOrgSpecialty");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> OFFICIALIDS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "OfficialIDs");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORGANIZATIONNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OrganizationName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCodeDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREFERREDVENDORS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PreferredVendors");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PROXIMITYSEARCHCENTER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ProximitySearchCenter");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PROXIMITYSEARCHPARAMETERS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ProximitySearchParameters");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RELATEDABCONTACTSEARCHCRITERIA_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RelatedABContactSearchCriteria");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SCORE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Score");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SPECIALISTSERVICES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "SpecialistServices");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATEDENORM_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "StateDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TAGS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Tags");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TAXID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TaxID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> VENDORAVAILABILITY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "VendorAvailability");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> VENDORTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "VendorType");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ABContactSearchCriteriaInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ABContactSearchCriteria()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ABContactSearchCriteria(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ABContactSearchCriteria(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ABContactSearchCriteriaInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.ABContactSearchCriteriaInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the OfficialIDs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOfficialIDs(entity.ABContactSearchCriteriaOfficialID element) {
    __getInternalInterface().addArrayElement(OFFICIALIDS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the SpecialistServices array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSpecialistServices(entity.ABContactSearchCriteriaSpecialistService element) {
    __getInternalInterface().addArrayElement(SPECIALISTSERVICES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Tags array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTags(entity.ABContactSearchCriteriaTag element) {
    __getInternalInterface().addArrayElement(TAGS_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the Address field.
   * The address of the contact.  Supercedes the separate fields of City, State, and PostalCode.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getAddress() {
    return (entity.Address)__getInternalInterface().getFieldValue(ADDRESS_PROP.get());
  }
  
  /**
   * Gets the value of the AdjudicativeDomain field.
   * Adjudicative Domain
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AdjudicativeDomain getAdjudicativeDomain() {
    return (typekey.AdjudicativeDomain)__getInternalInterface().getFieldValue(ADJUDICATIVEDOMAIN_PROP.get());
  }
  
  /**
   * Gets the value of the AttorneySpecialty field.
   * Attorney's specialty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LegalSpecialty getAttorneySpecialty() {
    return (typekey.LegalSpecialty)__getInternalInterface().getFieldValue(ATTORNEYSPECIALTY_PROP.get());
  }
  
  /**
   * 
   * @param requiredContactType the required type
   * @return the available subtypes that may be searched for, given the required type.
   */
  public typekey.ABContact[] getAvailableSubtypes(gw.lang.reflect.IType requiredContactType) {
    return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).getAvailableSubtypes(requiredContactType);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CityDenorm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the ContactSubtype field.
   * ABContact class, like ABPerson, ABCompany, and ABVenue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ABContact getContactSubtype() {
    return (typekey.ABContact)__getInternalInterface().getFieldValue(CONTACTSUBTYPE_PROP.get());
  }
  
  /**
   * 
   * @return the contact subtype as an intrinsic type
   */
  public gw.lang.reflect.IType getContactSubtypeType() {
    return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).getContactSubtypeType();
  }
  
  /**
   * Gets the value of the CountryDenorm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountryDenorm() {
    return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRYDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the DoctorSpecialty field.
   * Doctor's specialty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialtyType getDoctorSpecialty() {
    return (typekey.SpecialtyType)__getInternalInterface().getFieldValue(DOCTORSPECIALTY_PROP.get());
  }
  
  /**
   * Gets the value of the EmployeeNumber field.
   * Employee ID number. Applies to UserContacts.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmployeeNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EMPLOYEENUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the FirstName field.
   * First Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAME_PROP.get());
  }
  
  /**
   * Gets the value of the FirstNameKanji field.
   * First Name in kanji.  Used only for Japanese names and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Keyword field.
   * Keyword is the general term for Name (Companies and Places) and LastName (for Persons)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeyword() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KEYWORD_PROP.get());
  }
  
  /**
   * Gets the value of the KeywordKanji field.
   * Company/Last Name in kanji.  Used only for Japanese names and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeywordKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KEYWORDKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the LawFirmSpecialty field.
   * Law firm Specialty
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LegalSpecialty getLawFirmSpecialty() {
    return (typekey.LegalSpecialty)__getInternalInterface().getFieldValue(LAWFIRMSPECIALTY_PROP.get());
  }
  
  /**
   * Gets the value of the MedicalOrgSpecialty field.
   * Medical specialty type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialtyType getMedicalOrgSpecialty() {
    return (typekey.SpecialtyType)__getInternalInterface().getFieldValue(MEDICALORGSPECIALTY_PROP.get());
  }
  
  /**
   * Gets the value of the OfficialIDs field.
   * List of ABContactSearchCriteriaOfficialIDs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteriaOfficialID[] getOfficialIDs() {
    return (entity.ABContactSearchCriteriaOfficialID[])__getInternalInterface().getFieldValue(OFFICIALIDS_PROP.get());
  }
  
  /**
   * Gets the value of the OrganizationName field.
   * Name of person's employer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrganizationName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ORGANIZATIONNAME_PROP.get());
  }
  
  /**
   * Gets the value of the PostalCodeDenorm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the ProximitySearchCenter field.
   * The center for a proximity search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getProximitySearchCenter() {
    return (entity.Address)__getInternalInterface().getFieldValue(PROXIMITYSEARCHCENTER_PROP.get());
  }
  
  /**
   * Gets the value of the ProximitySearchParameters field.
   * The parameters for a proximity search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProximitySearchParameters getProximitySearchParameters() {
    return (entity.ProximitySearchParameters)__getInternalInterface().getFieldValue(PROXIMITYSEARCHPARAMETERS_PROP.get());
  }
  
  /**
   * The external ID for this entity.
   * <p>
   * PublicID values are automatically created during the commit, if not previously set. The format is random, meeting security requirements based on current industry standards. For example:
   * <ul>
   *   <li>pc:SYinDB2XTOgNZFs1NpxU8
   *   <li>pc:Sf8QS4N5RBS-h8_pj-Oy_
   *   <li>pc:SBwBzylneecSNr6_Ub4IO
   * </ul>
   * Your configuration code must not assume any particular format for PublicID values, in either the prefix or body portion of the string, or even assume the existence of a prefix. Do not make any assumptions at all about the content of a PublicID value, including expectations that values are sequential, numeric, or prefixed.
   * <p>
   * You can subclass and override {@link gw.transaction.AbstractBundleTransactionCallback#afterSetIds(gw.pl.persistence.core.Bundle)} if you need to see the value
   * in the same commit.
   *    <pre>{@code
   *  var note = new Note(bundle)
   *  bundle.addBundleTransactionCallback(new AbstractBundleTransactionCallback() {
   *     override function afterSetIds(b : Bundle) {
   *       log.info("Created Note " + note.PublicID)
   *     }
   *  })
   *  }</pre>
   * @return the external id.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RelatedABContactSearchCriteria field.
   * The criteria for related contacts
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RelatedABContactSearchCriteria getRelatedABContactSearchCriteria() {
    return (entity.RelatedABContactSearchCriteria)__getInternalInterface().getFieldValue(RELATEDABCONTACTSEARCHCRITERIA_PROP.get());
  }
  
  /**
   * Gets the value of the Score field.
   * Minimum Score for returned Contacts
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScore() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(SCORE_PROP.get());
  }
  
  /**
   * Gets the value of the SpecialistServices field.
   * List of ABContactSearchCriteriaSpecialistServices.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteriaSpecialistService[] getSpecialistServices() {
    return (entity.ABContactSearchCriteriaSpecialistService[])__getInternalInterface().getFieldValue(SPECIALISTSERVICES_PROP.get());
  }
  
  /**
   * Gets the value of the StateDenorm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getStateDenorm() {
    return (typekey.State)__getInternalInterface().getFieldValue(STATEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the Tags field.
   * List of ABContactSearchCriteriaTags.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSearchCriteriaTag[] getTags() {
    return (entity.ABContactSearchCriteriaTag[])__getInternalInterface().getFieldValue(TAGS_PROP.get());
  }
  
  /**
   * Gets the value of the TaxID field.
   * Tax ID for the contact (SSN or EIN).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTaxID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TAXID_PROP.get());
  }
  
  /**
   * Gets the value of the VendorAvailability field.
   * The contact's vendor availability type for example, available, unavailable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorAvailabilityType getVendorAvailability() {
    return (typekey.VendorAvailabilityType)__getInternalInterface().getFieldValue(VENDORAVAILABILITY_PROP.get());
  }
  
  /**
   * Gets the value of the VendorType field.
   * The contact's vendor type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorType getVendorType() {
    return (typekey.VendorType)__getInternalInterface().getFieldValue(VENDORTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the AllTagsRequired field.
   * If true, Contacts must have all the tags to match, if false, Contacts must have at least one of the tags to match.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAllTagsRequired() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ALLTAGSREQUIRED_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIgnoreCountry() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(IGNORECOUNTRY_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Gets the value of the PreferredVendors field.
   * Preferred vendors only
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPreferredVendors() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(PREFERREDVENDORS_PROP.get());
  }
  
  /**
   * Checks if this search has been set up as a proximity search.
   * To be true, ProximitySearchParameters must be non-null, and sufficient fields in PSP
   * will be populated such that the application is able to perform the search.
   * @return true if a proximity search, or false if a regular search
   */
  public boolean isProximitySearch() {
    return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).isProximitySearch();
  }
  
  /**
   * 
   * @return true if this search criteria is validly configured for proximity search
   */
  public boolean isValidProximitySearch() {
    return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).isValidProximitySearch();
  }
  
  /**
   * 
   * @param isClearBundle - if true, then the bundle of the ABContactSearchCriteria will be cleared
   *                      before performing the search so that only the criteria is left in the bundle.
   *                      Should set this to true if calling from UI because Pebbles will not clear the
   *                      bundle when user stays on the same page. (See jira CC-28078 for more details)   *
   * @return An IQueryBeanResult of ABContact beans.
   */
  public gw.api.database.IQueryBeanResult performSearch(boolean isClearBundle) {
    return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).performSearch(isClearBundle);
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the OfficialIDs array. This is achieved by marking the element for removal.
   */
  public void removeFromOfficialIDs(entity.ABContactSearchCriteriaOfficialID element) {
    __getInternalInterface().removeArrayElement(OFFICIALIDS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the OfficialIDs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOfficialIDs(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(OFFICIALIDS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the SpecialistServices array. This is achieved by marking the element for removal.
   */
  public void removeFromSpecialistServices(entity.ABContactSearchCriteriaSpecialistService element) {
    __getInternalInterface().removeArrayElement(SPECIALISTSERVICES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the SpecialistServices array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSpecialistServices(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(SPECIALISTSERVICES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Tags array. This is achieved by marking the element for removal.
   */
  public void removeFromTags(entity.ABContactSearchCriteriaTag element) {
    __getInternalInterface().removeArrayElement(TAGS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Tags array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTags(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(TAGS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(entity.Address value) {
    __getInternalInterface().setFieldValue(ADDRESS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AdjudicativeDomain field.
   */
  public void setAdjudicativeDomain(typekey.AdjudicativeDomain value) {
    __getInternalInterface().setFieldValue(ADJUDICATIVEDOMAIN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AllTagsRequired field.
   */
  public void setAllTagsRequired(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ALLTAGSREQUIRED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AttorneySpecialty field.
   */
  public void setAttorneySpecialty(typekey.LegalSpecialty value) {
    __getInternalInterface().setFieldValue(ATTORNEYSPECIALTY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * 
   * @param city 
   * @deprecated (Since 8.0.0.)  Use getAddress().setCity instead.
   */
  public void setCity(java.lang.String city) {
    ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setCity(city);
  }
  
  /**
   * Sets the value of the CityDenorm field.
   */
  public void setCityDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContactSubtype field.
   */
  public void setContactSubtype(typekey.ABContact value) {
    __getInternalInterface().setFieldValue(CONTACTSUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CountryDenorm field.
   */
  public void setCountryDenorm(typekey.Country value) {
    __getInternalInterface().setFieldValue(COUNTRYDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DoctorSpecialty field.
   */
  public void setDoctorSpecialty(typekey.SpecialtyType value) {
    __getInternalInterface().setFieldValue(DOCTORSPECIALTY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EmployeeNumber field.
   */
  public void setEmployeeNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EMPLOYEENUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameKanji field.
   */
  public void setFirstNameKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IgnoreCountry field.
   */
  private void setIgnoreCountry(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(IGNORECOUNTRY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Keyword field.
   */
  public void setKeyword(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(KEYWORD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the KeywordKanji field.
   */
  public void setKeywordKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(KEYWORDKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LawFirmSpecialty field.
   */
  public void setLawFirmSpecialty(typekey.LegalSpecialty value) {
    __getInternalInterface().setFieldValue(LAWFIRMSPECIALTY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MedicalOrgSpecialty field.
   */
  public void setMedicalOrgSpecialty(typekey.SpecialtyType value) {
    __getInternalInterface().setFieldValue(MEDICALORGSPECIALTY_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the OfficialIDs field.
   */
  public void setOfficialIDs(entity.ABContactSearchCriteriaOfficialID[] value) {
    __getInternalInterface().setFieldValue(OFFICIALIDS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OrganizationName field.
   */
  public void setOrganizationName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ORGANIZATIONNAME_PROP.get(), value);
  }
  
  /**
   * 
   * @param zip 
   * @deprecated (Since 8.0.0.)  Use getAddress().setPostalCode instead.
   */
  public void setPostalCode(java.lang.String zip) {
    ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setPostalCode(zip);
  }
  
  /**
   * Sets the value of the PostalCodeDenorm field.
   */
  public void setPostalCodeDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POSTALCODEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreferredVendors field.
   */
  public void setPreferredVendors(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PREFERREDVENDORS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProximitySearchCenter field.
   */
  public void setProximitySearchCenter(entity.Address value) {
    __getInternalInterface().setFieldValue(PROXIMITYSEARCHCENTER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProximitySearchParameters field.
   */
  public void setProximitySearchParameters(entity.ProximitySearchParameters value) {
    __getInternalInterface().setFieldValue(PROXIMITYSEARCHPARAMETERS_PROP.get(), value);
  }
  
  /**
   * Sets the external id for this entity.
   * *  <ul>
   *    *   <li>Do not change the publicID once it is exposed externally.</li>
   *    *   <li>The publicID must be unique.</li>
   *    *   <li>The publicID must not leak information.</li>
   *    *  </ul>
   *    * If you do not set the publicID manually, then it is automatically set upon commit.
   *    * For increased security, the default value is random. If you manually set the value, ensure that it is similarly secure and unique.
   * @param id The value to be set as the publicID of this entity.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RelatedABContactSearchCriteria field.
   */
  public void setRelatedABContactSearchCriteria(entity.RelatedABContactSearchCriteria value) {
    __getInternalInterface().setFieldValue(RELATEDABCONTACTSEARCHCRITERIA_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(SCORE_PROP.get(), value);
  }
  
  /**
   * 
   * @param type 
   */
  public void setSearchableContactSubtype(gw.entity.TypeKey type) {
    ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setSearchableContactSubtype(type);
  }
  
  /**
   * Sets the value of the SpecialistServices field.
   */
  public void setSpecialistServices(entity.ABContactSearchCriteriaSpecialistService[] value) {
    __getInternalInterface().setFieldValue(SPECIALISTSERVICES_PROP.get(), value);
  }
  
  /**
   * 
   * @param state 
   * @deprecated (Since 8.0.0.)  Use getAddress().setState instead.
   */
  public void setState(typekey.State state) {
    ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setState(state);
  }
  
  /**
   * Sets the value of the StateDenorm field.
   */
  public void setStateDenorm(typekey.State value) {
    __getInternalInterface().setFieldValue(STATEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Tags field.
   */
  public void setTags(entity.ABContactSearchCriteriaTag[] value) {
    __getInternalInterface().setFieldValue(TAGS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TaxID field.
   */
  public void setTaxID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TAXID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the VendorAvailability field.
   */
  public void setVendorAvailability(typekey.VendorAvailabilityType value) {
    __getInternalInterface().setFieldValue(VENDORAVAILABILITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the VendorType field.
   */
  public void setVendorType(typekey.VendorType value) {
    __getInternalInterface().setFieldValue(VENDORTYPE_PROP.get(), value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ABContactSearchCriteriaInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ABContactSearchCriteria.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the OfficialIDs array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToOfficialIDs(entity.ABContactSearchCriteriaOfficialID element) {
      __getInternalInterface().addArrayElement(OFFICIALIDS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the SpecialistServices array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToSpecialistServices(entity.ABContactSearchCriteriaSpecialistService element) {
      __getInternalInterface().addArrayElement(SPECIALISTSERVICES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Tags array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTags(entity.ABContactSearchCriteriaTag element) {
      __getInternalInterface().addArrayElement(TAGS_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the Address field.
     * The address of the contact.  Supercedes the separate fields of City, State, and PostalCode.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Address getAddress() {
      return (entity.Address)__getInternalInterface().getFieldValue(ADDRESS_PROP.get());
    }
    
    public com.guidewire.pl.system.service.search.config.CriteriaDef getAddressCriteriaDef() {
      return ((com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal")).getAddressCriteriaDef();
    }
    
    public gw.pl.persistence.core.Key getAddressID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ADDRESS_PROP.get());
    }
    
    /**
     * Gets the value of the AdjudicativeDomain field.
     * Adjudicative Domain
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AdjudicativeDomain getAdjudicativeDomain() {
      return (typekey.AdjudicativeDomain)__getInternalInterface().getFieldValue(ADJUDICATIVEDOMAIN_PROP.get());
    }
    
    /**
     * Gets the value of the AttorneySpecialty field.
     * Attorney's specialty
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LegalSpecialty getAttorneySpecialty() {
      return (typekey.LegalSpecialty)__getInternalInterface().getFieldValue(ATTORNEYSPECIALTY_PROP.get());
    }
    
    /**
     * 
     * @param requiredContactType the required type
     * @return the available subtypes that may be searched for, given the required type.
     */
    public typekey.ABContact[] getAvailableSubtypes(gw.lang.reflect.IType requiredContactType) {
      return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).getAvailableSubtypes(requiredContactType);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CityDenorm field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYDENORM_PROP.get());
    }
    
    public java.util.Map<gw.lang.reflect.IType, com.guidewire.pl.system.service.search.config.CriteriaDef> getContactCriteriaDefsByType() {
      return ((com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal")).getContactCriteriaDefsByType();
    }
    
    /**
     * Gets the value of the ContactSubtype field.
     * ABContact class, like ABPerson, ABCompany, and ABVenue.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ABContact getContactSubtype() {
      return (typekey.ABContact)__getInternalInterface().getFieldValue(CONTACTSUBTYPE_PROP.get());
    }
    
    /**
     * 
     * @return the contact subtype as an intrinsic type
     */
    public gw.lang.reflect.IType getContactSubtypeType() {
      return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).getContactSubtypeType();
    }
    
    /**
     * Gets the value of the CountryDenorm field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Country getCountryDenorm() {
      return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRYDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the DoctorSpecialty field.
     * Doctor's specialty
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.SpecialtyType getDoctorSpecialty() {
      return (typekey.SpecialtyType)__getInternalInterface().getFieldValue(DOCTORSPECIALTY_PROP.get());
    }
    
    /**
     * Gets the value of the EmployeeNumber field.
     * Employee ID number. Applies to UserContacts.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEmployeeNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EMPLOYEENUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the FirstName field.
     * First Name
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the FirstNameKanji field.
     * First Name in kanji.  Used only for Japanese names and will be null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    public com.guidewire.pl.system.database.TableObject getJoinToAddressTable() {
      return ((com.guidewire.pl.system.service.search.CommonContactSearchCriteriaInternal)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteriaInternal")).getJoinToAddressTable();
    }
    
    /**
     * Gets the value of the Keyword field.
     * Keyword is the general term for Name (Companies and Places) and LastName (for Persons)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getKeyword() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KEYWORD_PROP.get());
    }
    
    /**
     * Gets the value of the KeywordKanji field.
     * Company/Last Name in kanji.  Used only for Japanese names and will be null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getKeywordKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KEYWORDKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the LawFirmSpecialty field.
     * Law firm Specialty
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LegalSpecialty getLawFirmSpecialty() {
      return (typekey.LegalSpecialty)__getInternalInterface().getFieldValue(LAWFIRMSPECIALTY_PROP.get());
    }
    
    /**
     * Gets the value of the MedicalOrgSpecialty field.
     * Medical specialty type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.SpecialtyType getMedicalOrgSpecialty() {
      return (typekey.SpecialtyType)__getInternalInterface().getFieldValue(MEDICALORGSPECIALTY_PROP.get());
    }
    
    /**
     * Gets the value of the OfficialIDs field.
     * List of ABContactSearchCriteriaOfficialIDs
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactSearchCriteriaOfficialID[] getOfficialIDs() {
      return (entity.ABContactSearchCriteriaOfficialID[])__getInternalInterface().getFieldValue(OFFICIALIDS_PROP.get());
    }
    
    /**
     * Gets the value of the OrganizationName field.
     * Name of person's employer
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOrganizationName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ORGANIZATIONNAME_PROP.get());
    }
    
    /**
     * Gets the value of the PostalCodeDenorm field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCodeDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the ProximitySearchCenter field.
     * The center for a proximity search
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Address getProximitySearchCenter() {
      return (entity.Address)__getInternalInterface().getFieldValue(PROXIMITYSEARCHCENTER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getProximitySearchCenterID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PROXIMITYSEARCHCENTER_PROP.get());
    }
    
    /**
     * Gets the value of the ProximitySearchParameters field.
     * The parameters for a proximity search
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProximitySearchParameters getProximitySearchParameters() {
      return (entity.ProximitySearchParameters)__getInternalInterface().getFieldValue(PROXIMITYSEARCHPARAMETERS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getProximitySearchParametersID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PROXIMITYSEARCHPARAMETERS_PROP.get());
    }
    
    /**
     * The external ID for this entity.
     * <p>
     * PublicID values are automatically created during the commit, if not previously set. The format is random, meeting security requirements based on current industry standards. For example:
     * <ul>
     *   <li>pc:SYinDB2XTOgNZFs1NpxU8
     *   <li>pc:Sf8QS4N5RBS-h8_pj-Oy_
     *   <li>pc:SBwBzylneecSNr6_Ub4IO
     * </ul>
     * Your configuration code must not assume any particular format for PublicID values, in either the prefix or body portion of the string, or even assume the existence of a prefix. Do not make any assumptions at all about the content of a PublicID value, including expectations that values are sequential, numeric, or prefixed.
     * <p>
     * You can subclass and override {@link gw.transaction.AbstractBundleTransactionCallback#afterSetIds(gw.pl.persistence.core.Bundle)} if you need to see the value
     * in the same commit.
     *    <pre>{@code
     *  var note = new Note(bundle)
     *  bundle.addBundleTransactionCallback(new AbstractBundleTransactionCallback() {
     *     override function afterSetIds(b : Bundle) {
     *       log.info("Created Note " + note.PublicID)
     *     }
     *  })
     *  }</pre>
     * @return the external id.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RelatedABContactSearchCriteria field.
     * The criteria for related contacts
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RelatedABContactSearchCriteria getRelatedABContactSearchCriteria() {
      return (entity.RelatedABContactSearchCriteria)__getInternalInterface().getFieldValue(RELATEDABCONTACTSEARCHCRITERIA_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRelatedABContactSearchCriteriaID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RELATEDABCONTACTSEARCHCRITERIA_PROP.get());
    }
    
    public java.util.Map<gw.lang.reflect.IType, com.guidewire.pl.system.service.search.config.CriteriaDef> getRelatedContactCriteriaDefsByType() {
      return ((com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal")).getRelatedContactCriteriaDefsByType();
    }
    
    /**
     * Gets the value of the Score field.
     * Minimum Score for returned Contacts
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getScore() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(SCORE_PROP.get());
    }
    
    /**
     * Gets the value of the SpecialistServices field.
     * List of ABContactSearchCriteriaSpecialistServices.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactSearchCriteriaSpecialistService[] getSpecialistServices() {
      return (entity.ABContactSearchCriteriaSpecialistService[])__getInternalInterface().getFieldValue(SPECIALISTSERVICES_PROP.get());
    }
    
    /**
     * Gets the value of the StateDenorm field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getStateDenorm() {
      return (typekey.State)__getInternalInterface().getFieldValue(STATEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the Tags field.
     * List of ABContactSearchCriteriaTags.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactSearchCriteriaTag[] getTags() {
      return (entity.ABContactSearchCriteriaTag[])__getInternalInterface().getFieldValue(TAGS_PROP.get());
    }
    
    /**
     * Gets the value of the TaxID field.
     * Tax ID for the contact (SSN or EIN).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTaxID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TAXID_PROP.get());
    }
    
    /**
     * Gets the value of the VendorAvailability field.
     * The contact's vendor availability type for example, available, unavailable.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.VendorAvailabilityType getVendorAvailability() {
      return (typekey.VendorAvailabilityType)__getInternalInterface().getFieldValue(VENDORAVAILABILITY_PROP.get());
    }
    
    /**
     * Gets the value of the VendorType field.
     * The contact's vendor type.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.VendorType getVendorType() {
      return (typekey.VendorType)__getInternalInterface().getFieldValue(VENDORTYPE_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the AllTagsRequired field.
     * If true, Contacts must have all the tags to match, if false, Contacts must have at least one of the tags to match.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAllTagsRequired() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ALLTAGSREQUIRED_PROP.get());
    }
    
    /**
     * Gets the value of the IgnoreCountry field.
     * Set on remote searches via SOAP if Country should actually be null, as the SOAP deserialization of Address.Country treats Null as the default Country.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isIgnoreCountry() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(IGNORECOUNTRY_PROP.get());
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    /**
     * Gets the value of the PreferredVendors field.
     * Preferred vendors only
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPreferredVendors() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PREFERREDVENDORS_PROP.get());
    }
    
    /**
     * Checks if this search has been set up as a proximity search.
     * To be true, ProximitySearchParameters must be non-null, and sufficient fields in PSP
     * will be populated such that the application is able to perform the search.
     * @return true if a proximity search, or false if a regular search
     */
    public boolean isProximitySearch() {
      return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).isProximitySearch();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * 
     * @return true if this search criteria is validly configured for proximity search
     */
    public boolean isValidProximitySearch() {
      return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).isValidProximitySearch();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    /**
     * 
     * @param isClearBundle - if true, then the bundle of the ABContactSearchCriteria will be cleared
     *                      before performing the search so that only the criteria is left in the bundle.
     *                      Should set this to true if calling from UI because Pebbles will not clear the
     *                      bundle when user stays on the same page. (See jira CC-28078 for more details)   *
     * @return An IQueryBeanResult of ABContact beans.
     */
    public gw.api.database.IQueryBeanResult performSearch(boolean isClearBundle) {
      return ((gw.ab.addressbook.entity.ABContactSearchCriteria)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactSearchCriteria")).performSearch(isClearBundle);
    }
    
    public gw.api.database.IQueryBeanResult<entity.ABContact> performSearch(boolean isClearBundle, com.guidewire.pl.system.filters.QueryBasedQueryFilter filter) {
      return ((com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal")).performSearch(isClearBundle, filter);
    }
    
    public gw.api.database.IQueryBeanResult performSearch(boolean isClearBundle, gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging searchSpec) {
      return ((com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal")).performSearch(isClearBundle, searchSpec);
    }
    
    public void prepareForProximitySearch() {
      ((com.guidewire.pl.system.service.search.CommonContactSearchCriteriaInternal)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteriaInternal")).prepareForProximitySearch();
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    /**
     * Removes the given element from the OfficialIDs array. This is achieved by marking the element for removal.
     */
    public void removeFromOfficialIDs(entity.ABContactSearchCriteriaOfficialID element) {
      __getInternalInterface().removeArrayElement(OFFICIALIDS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the OfficialIDs array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromOfficialIDs(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(OFFICIALIDS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the SpecialistServices array. This is achieved by marking the element for removal.
     */
    public void removeFromSpecialistServices(entity.ABContactSearchCriteriaSpecialistService element) {
      __getInternalInterface().removeArrayElement(SPECIALISTSERVICES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the SpecialistServices array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromSpecialistServices(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SPECIALISTSERVICES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Tags array. This is achieved by marking the element for removal.
     */
    public void removeFromTags(entity.ABContactSearchCriteriaTag element) {
      __getInternalInterface().removeArrayElement(TAGS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Tags array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTags(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TAGS_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the Address field.
     */
    public void setAddress(entity.Address value) {
      __getInternalInterface().setFieldValue(ADDRESS_PROP.get(), value);
    }
    
    public void setAddressID(gw.pl.persistence.core.Key value) {
      setFieldValue(ADDRESS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AdjudicativeDomain field.
     */
    public void setAdjudicativeDomain(typekey.AdjudicativeDomain value) {
      __getInternalInterface().setFieldValue(ADJUDICATIVEDOMAIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AllTagsRequired field.
     */
    public void setAllTagsRequired(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ALLTAGSREQUIRED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AttorneySpecialty field.
     */
    public void setAttorneySpecialty(typekey.LegalSpecialty value) {
      __getInternalInterface().setFieldValue(ATTORNEYSPECIALTY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * 
     * @param city 
     * @deprecated (Since 8.0.0.)  Use getAddress().setCity instead.
     */
    public void setCity(java.lang.String city) {
      ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setCity(city);
    }
    
    /**
     * Sets the value of the CityDenorm field.
     */
    public void setCityDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ContactSubtype field.
     */
    public void setContactSubtype(typekey.ABContact value) {
      __getInternalInterface().setFieldValue(CONTACTSUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CountryDenorm field.
     */
    public void setCountryDenorm(typekey.Country value) {
      __getInternalInterface().setFieldValue(COUNTRYDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DoctorSpecialty field.
     */
    public void setDoctorSpecialty(typekey.SpecialtyType value) {
      __getInternalInterface().setFieldValue(DOCTORSPECIALTY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EmployeeNumber field.
     */
    public void setEmployeeNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EMPLOYEENUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstName field.
     */
    public void setFirstName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstNameKanji field.
     */
    public void setFirstNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IgnoreCountry field.
     */
    public void setIgnoreCountry(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(IGNORECOUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Keyword field.
     */
    public void setKeyword(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(KEYWORD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the KeywordKanji field.
     */
    public void setKeywordKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(KEYWORDKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LawFirmSpecialty field.
     */
    public void setLawFirmSpecialty(typekey.LegalSpecialty value) {
      __getInternalInterface().setFieldValue(LAWFIRMSPECIALTY_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the MedicalOrgSpecialty field.
     */
    public void setMedicalOrgSpecialty(typekey.SpecialtyType value) {
      __getInternalInterface().setFieldValue(MEDICALORGSPECIALTY_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the OfficialIDs field.
     */
    public void setOfficialIDs(entity.ABContactSearchCriteriaOfficialID[] value) {
      __getInternalInterface().setFieldValue(OFFICIALIDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OrganizationName field.
     */
    public void setOrganizationName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ORGANIZATIONNAME_PROP.get(), value);
    }
    
    /**
     * 
     * @param zip 
     * @deprecated (Since 8.0.0.)  Use getAddress().setPostalCode instead.
     */
    public void setPostalCode(java.lang.String zip) {
      ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setPostalCode(zip);
    }
    
    /**
     * Sets the value of the PostalCodeDenorm field.
     */
    public void setPostalCodeDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreferredVendors field.
     */
    public void setPreferredVendors(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PREFERREDVENDORS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProximitySearchCenter field.
     */
    public void setProximitySearchCenter(entity.Address value) {
      __getInternalInterface().setFieldValue(PROXIMITYSEARCHCENTER_PROP.get(), value);
    }
    
    public void setProximitySearchCenterID(gw.pl.persistence.core.Key value) {
      setFieldValue(PROXIMITYSEARCHCENTER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProximitySearchParameters field.
     */
    public void setProximitySearchParameters(entity.ProximitySearchParameters value) {
      __getInternalInterface().setFieldValue(PROXIMITYSEARCHPARAMETERS_PROP.get(), value);
    }
    
    public void setProximitySearchParametersID(gw.pl.persistence.core.Key value) {
      setFieldValue(PROXIMITYSEARCHPARAMETERS_PROP.get(), value);
    }
    
    /**
     * Sets the external id for this entity.
     * *  <ul>
     *    *   <li>Do not change the publicID once it is exposed externally.</li>
     *    *   <li>The publicID must be unique.</li>
     *    *   <li>The publicID must not leak information.</li>
     *    *  </ul>
     *    * If you do not set the publicID manually, then it is automatically set upon commit.
     *    * For increased security, the default value is random. If you manually set the value, ensure that it is similarly secure and unique.
     * @param id The value to be set as the publicID of this entity.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RelatedABContactSearchCriteria field.
     */
    public void setRelatedABContactSearchCriteria(entity.RelatedABContactSearchCriteria value) {
      __getInternalInterface().setFieldValue(RELATEDABCONTACTSEARCHCRITERIA_PROP.get(), value);
    }
    
    public void setRelatedABContactSearchCriteriaID(gw.pl.persistence.core.Key value) {
      setFieldValue(RELATEDABCONTACTSEARCHCRITERIA_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Score field.
     */
    public void setScore(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SCORE_PROP.get(), value);
    }
    
    /**
     * 
     * @param type 
     */
    public void setSearchableContactSubtype(gw.entity.TypeKey type) {
      ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setSearchableContactSubtype(type);
    }
    
    /**
     * Sets the value of the SpecialistServices field.
     */
    public void setSpecialistServices(entity.ABContactSearchCriteriaSpecialistService[] value) {
      __getInternalInterface().setFieldValue(SPECIALISTSERVICES_PROP.get(), value);
    }
    
    /**
     * 
     * @param state 
     * @deprecated (Since 8.0.0.)  Use getAddress().setState instead.
     */
    public void setState(typekey.State state) {
      ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setState(state);
    }
    
    /**
     * Sets the value of the StateDenorm field.
     */
    public void setStateDenorm(typekey.State value) {
      __getInternalInterface().setFieldValue(STATEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Tags field.
     */
    public void setTags(entity.ABContactSearchCriteriaTag[] value) {
      __getInternalInterface().setFieldValue(TAGS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TaxID field.
     */
    public void setTaxID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TAXID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VendorAvailability field.
     */
    public void setVendorAvailability(typekey.VendorAvailabilityType value) {
      __getInternalInterface().setFieldValue(VENDORAVAILABILITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VendorType field.
     */
    public void setVendorType(typekey.VendorType value) {
      __getInternalInterface().setFieldValue(VENDORTYPE_PROP.get(), value);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaInternal", "com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.service.search.CommonContactSearchCriteria", "com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaImpl");
    config.put("com.guidewire.pl.system.service.search.CommonContactSearchCriteriaInternal", "com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaImpl");
    config.put("gw.ab.addressbook.entity.ABContactSearchCriteria", "com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaImpl");
    config.put("java.io.Serializable", "com.guidewire.ab.domain.addressbook.impl.ABContactSearchCriteriaImpl");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ABContactSearchCriteria.class, config);
    com.guidewire._generated.entity.ABContactSearchCriteriaInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ABContactSearchCriteria, com.guidewire._generated.entity.ABContactSearchCriteriaInternal>() {
      public java.lang.Object getImplementation(entity.ABContactSearchCriteria bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ABContactSearchCriteriaInternal getInternalInterface(entity.ABContactSearchCriteria bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ABContactSearchCriteria newEmptyInstance() {
        return new entity.ABContactSearchCriteria((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}