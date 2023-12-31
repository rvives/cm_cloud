package entity;

/**
 * ContactSearchCriteria
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContactSearchCriteria.eti;ContactSearchCriteria.eix;ContactSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ContactSearchCriteria")
public class ContactSearchCriteria extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable, com.guidewire.pl.system.service.search.CommonContactSearchCriteria {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ContactSearchCriteria> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ContactSearchCriteria>("entity.ContactSearchCriteria");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ADDRESS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Address");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CONTACTSUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ContactSubtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXTERNALSEARCHENABLED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExternalSearchEnabled");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> KEYWORD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Keyword");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> KEYWORDKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "KeywordKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> MATCHTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "MatchType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OFFICIALID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OfficialId");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORGANIZATIONNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OrganizationName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREFERREDVENDORS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PreferredVendors");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PROXIMITYSEARCHCENTER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ProximitySearchCenter");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PROXIMITYSEARCHPARAMETERS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ProximitySearchParameters");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SEARCHTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SearchType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TAXID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TaxID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> VENDORTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "VendorType");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ContactSearchCriteriaInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ContactSearchCriteria()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ContactSearchCriteria(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ContactSearchCriteria(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ContactSearchCriteriaInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ContactSearchCriteriaInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Creates a new empty Proximity Search Center associated with this Contact Search Criteria.
   * @return the Proximity Search Center
   */
  public entity.Address createProximitySearchCenter() {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchCenter();
  }
  
  /**
   * Creates a new Proximity Search Center associated with this Contact Search Criteria,
   * and copies the relevant fields from a given Geocodable (typically, an Address) into
   * the Proximity Search Center.
   * @param address a given Geocodable (typically, an Address) to be used as the search center
   * @return the Proximity Search Center
   */
  public entity.Address createProximitySearchCenter(entity.Address address) {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchCenter(address);
  }
  
  /**
   * Creates a new empty Proximity Search Parameters associated with this Contact Search Criteria,
   * @return the Proximity Search Parameters created
   */
  public entity.ProximitySearchParameters createProximitySearchParams() {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchParams();
  }
  
  /**
   * Creates a new empty Proximity Search Parameters associated with this Contact Search Criteria,
   * and populates it with the basic information required, using the system-default UnitOfDistance.
   * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
   * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
   * @return the Proximity Search Parameters created
   */
  public entity.ProximitySearchParameters createProximitySearchParams(java.lang.Boolean isDistanceBased, java.lang.Integer number) {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchParams(isDistanceBased, number);
  }
  
  /**
   * Creates a new Proximity Search Parameters associated with this Contact Search Criteria,
   * and populates it with the basic information required.
   * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
   * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
   * @param unitOfDistance For distance based searches, indicates the unit to be used for the search range; for ordinal searches, indicates what unit should be used for results (UnitOfDistance.TC_KILOMETER or UnitOfDistance.TC_MILE)
   * @return the Proximity Search Parameters created
   */
  public entity.ProximitySearchParameters createProximitySearchParams(java.lang.Boolean isDistanceBased, java.lang.Integer number, typekey.UnitOfDistance unitOfDistance) {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchParams(isDistanceBased, number, unitOfDistance);
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
   * Gets the available subtypes that may be searched for, given the required type.
   * @param requiredContactType contact type
   * @return Array containing available subtypes that may be searched for, given the required type
   */
  public typekey.Contact[] getAvailableSubtypes(gw.lang.reflect.IType requiredContactType) {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).getAvailableSubtypes(requiredContactType);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the Contact Subtype being searched for, or Contact.TYPE if no subtype is requested.
   * @return contact type
   */
  public gw.entity.IEntityType getContactIntrinsicType() {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).getContactIntrinsicType();
  }
  
  /**
   * Gets the value of the ContactSubtype field.
   * Contact class, like Person, Company, and Venue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Contact getContactSubtype() {
    return (typekey.Contact)__getInternalInterface().getFieldValue(CONTACTSUBTYPE_PROP.get());
  }
  
  /**
   * Gets the source of the contacts to be returned by a search using this criteria object.
   * @return an ExternalContactSource
   */
  public gw.api.contact.ExternalContactSource getExternalContactSource() {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).getExternalContactSource();
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
   * First name in kanji (used only for Japanese names)
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
   * KeywordKanji is the general term for NameKanji (Companies and Places) and LastNameKanji (for Persons)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeywordKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KEYWORDKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the MatchType field.
   * Match type requirement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactMatchResultType getMatchType() {
    return (typekey.ContactMatchResultType)__getInternalInterface().getFieldValue(MATCHTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the OfficialId field.
   * Field matched against the OfficialIDValue of the OfficialID objects associated with Contacts.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOfficialId() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OFFICIALID_PROP.get());
  }
  
  /**
   * Gets the value of the OrganizationName field.
   * Matched against Contacts belonging to an Organization (such as of person's employer) matching this name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrganizationName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ORGANIZATIONNAME_PROP.get());
  }
  
  /**
   * Gets the value of the ProximitySearchCenter field.
   * The center for a proximity search. Ignored if location fields are set on the Proximity Search Parameters.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getProximitySearchCenter() {
    return (entity.Address)__getInternalInterface().getFieldValue(PROXIMITYSEARCHCENTER_PROP.get());
  }
  
  /**
   * Gets the value of the ProximitySearchParameters field.
   * The parameters for a proximity search.
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
   * Gets the value of the SearchType field.
   * External search type (external search only)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactSearchType getSearchType() {
    return (typekey.ContactSearchType)__getInternalInterface().getFieldValue(SEARCHTYPE_PROP.get());
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
   * Gets the value of the VendorType field.
   * The company's vendor type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorType getVendorType() {
    return (typekey.VendorType)__getInternalInterface().getFieldValue(VENDORTYPE_PROP.get());
  }
  
  /**
   * Determines whether this is a search against an external Contact system. If true, then the search will be
   * made against the <code>IContactSearchAdapter</code> plugin.
   * @return true if the search is against an external Contact system
   */
  public boolean isExternalSearch() {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).isExternalSearch();
  }
  
  /**
   * Gets the value of the ExternalSearchEnabled field.
   * Whether or not external search is enabled. True for "picker" searches; false otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExternalSearchEnabled() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXTERNALSEARCHENABLED_PROP.get());
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
   * Preferred Vendors
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
    return ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).isProximitySearch();
  }
  
  /**
   * Determines whether this criteria is searching for contacts of the given type.
   * @param contactType contact type
   * @return true, if criteria is searching for contacts of the given type.
   */
  public boolean isSearchFor(gw.lang.reflect.IType contactType) {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).isSearchFor(contactType);
  }
  
  /**
   * Performs the search and returns the results wrapped in a QueryProcessor.
   * If the search type is set, and is not ContactSearchType.TC_INTERNAL
   * then an external search is performed.  In all other cases, an internal search is performed.
   * An external search is routed through the contact search adapter.
   * An internal search is routed through the address book adapter.
   * @param bundleProvider the bundle that the search results will be added to
   * @return a QueryProcessor containing Contact objects that match this criteria
   */
  public gw.api.database.IQueryBeanResult performSearch(gw.pl.persistence.core.BundleProvider bundleProvider) {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).performSearch(bundleProvider);
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
   * Sets the value of the Address field.
   */
  public void setAddress(entity.Address value) {
    __getInternalInterface().setFieldValue(ADDRESS_PROP.get(), value);
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
   * Sets the value of the ContactSubtype field.
   */
  public void setContactSubtype(typekey.Contact value) {
    __getInternalInterface().setFieldValue(CONTACTSUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExternalSearchEnabled field.
   */
  public void setExternalSearchEnabled(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(EXTERNALSEARCHENABLED_PROP.get(), value);
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
   * Sets the value of the MatchType field.
   */
  public void setMatchType(typekey.ContactMatchResultType value) {
    __getInternalInterface().setFieldValue(MATCHTYPE_PROP.get(), value);
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
   * Sets the value of the OfficialId field.
   */
  public void setOfficialId(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OFFICIALID_PROP.get(), value);
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
   * Sets the value of the SearchType field.
   */
  public void setSearchType(typekey.ContactSearchType value) {
    __getInternalInterface().setFieldValue(SEARCHTYPE_PROP.get(), value);
  }
  
  /**
   * 
   * @param type 
   */
  public void setSearchableContactSubtype(gw.entity.TypeKey type) {
    ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setSearchableContactSubtype(type);
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
   * Sets the value of the TaxID field.
   */
  public void setTaxID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TAXID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the VendorType field.
   */
  public void setVendorType(typekey.VendorType value) {
    __getInternalInterface().setFieldValue(VENDORTYPE_PROP.get(), value);
  }
  
  /**
   * Creates a new Proximity Search Parameters and Proximity Search center associated with this
   * Contact Search Criteria, and populates both with the basic information required.
   * @param address a given Geocodable (typically, an Address) to be used as the search center
   * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
   * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
   * @param unitOfDistance For distance based searches, indicates the unit to be used for the search range; for ordinal searches, indicates what unit should be used for results (UnitOfDistance.TC_KILOMETER or UnitOfDistance.TC_MILE)
   * @return the Proximity Search Parameters created
   */
  public entity.ProximitySearchParameters setupProximitySearch(entity.Address address, java.lang.Boolean isDistanceBased, java.lang.Integer number, typekey.UnitOfDistance unitOfDistance) {
    return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).setupProximitySearch(address, isDistanceBased, number, unitOfDistance);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ContactSearchCriteriaInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ContactSearchCriteria.this.__getDelegateManager();
    }
    
    public void addCriteria(com.guidewire.pl.system.database.TableObject contact) {
      ((com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaInternalMethods")).addCriteria(contact);
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
    
    /**
     * Creates a new empty Proximity Search Center associated with this Contact Search Criteria.
     * @return the Proximity Search Center
     */
    public entity.Address createProximitySearchCenter() {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchCenter();
    }
    
    /**
     * Creates a new Proximity Search Center associated with this Contact Search Criteria,
     * and copies the relevant fields from a given Geocodable (typically, an Address) into
     * the Proximity Search Center.
     * @param address a given Geocodable (typically, an Address) to be used as the search center
     * @return the Proximity Search Center
     */
    public entity.Address createProximitySearchCenter(entity.Address address) {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchCenter(address);
    }
    
    /**
     * Creates a new empty Proximity Search Parameters associated with this Contact Search Criteria,
     * @return the Proximity Search Parameters created
     */
    public entity.ProximitySearchParameters createProximitySearchParams() {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchParams();
    }
    
    /**
     * Creates a new empty Proximity Search Parameters associated with this Contact Search Criteria,
     * and populates it with the basic information required, using the system-default UnitOfDistance.
     * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
     * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
     * @return the Proximity Search Parameters created
     */
    public entity.ProximitySearchParameters createProximitySearchParams(java.lang.Boolean isDistanceBased, java.lang.Integer number) {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchParams(isDistanceBased, number);
    }
    
    /**
     * Creates a new Proximity Search Parameters associated with this Contact Search Criteria,
     * and populates it with the basic information required.
     * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
     * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
     * @param unitOfDistance For distance based searches, indicates the unit to be used for the search range; for ordinal searches, indicates what unit should be used for results (UnitOfDistance.TC_KILOMETER or UnitOfDistance.TC_MILE)
     * @return the Proximity Search Parameters created
     */
    public entity.ProximitySearchParameters createProximitySearchParams(java.lang.Boolean isDistanceBased, java.lang.Integer number, typekey.UnitOfDistance unitOfDistance) {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).createProximitySearchParams(isDistanceBased, number, unitOfDistance);
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
    
    public gw.pl.persistence.core.Key getAddressID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ADDRESS_PROP.get());
    }
    
    /**
     * Gets the available subtypes that may be searched for, given the required type.
     * @param requiredContactType contact type
     * @return Array containing available subtypes that may be searched for, given the required type
     */
    public typekey.Contact[] getAvailableSubtypes(gw.lang.reflect.IType requiredContactType) {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).getAvailableSubtypes(requiredContactType);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the Contact Subtype being searched for, or Contact.TYPE if no subtype is requested.
     * @return contact type
     */
    public gw.entity.IEntityType getContactIntrinsicType() {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).getContactIntrinsicType();
    }
    
    /**
     * Gets the value of the ContactSubtype field.
     * Contact class, like Person, Company, and Venue.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Contact getContactSubtype() {
      return (typekey.Contact)__getInternalInterface().getFieldValue(CONTACTSUBTYPE_PROP.get());
    }
    
    /**
     * Gets the source of the contacts to be returned by a search using this criteria object.
     * @return an ExternalContactSource
     */
    public gw.api.contact.ExternalContactSource getExternalContactSource() {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).getExternalContactSource();
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
     * First name in kanji (used only for Japanese names)
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
     * KeywordKanji is the general term for NameKanji (Companies and Places) and LastNameKanji (for Persons)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getKeywordKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KEYWORDKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the MatchType field.
     * Match type requirement
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContactMatchResultType getMatchType() {
      return (typekey.ContactMatchResultType)__getInternalInterface().getFieldValue(MATCHTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the OfficialId field.
     * Field matched against the OfficialIDValue of the OfficialID objects associated with Contacts.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOfficialId() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OFFICIALID_PROP.get());
    }
    
    /**
     * Gets the value of the OrganizationName field.
     * Matched against Contacts belonging to an Organization (such as of person's employer) matching this name.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOrganizationName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ORGANIZATIONNAME_PROP.get());
    }
    
    /**
     * Gets the value of the ProximitySearchCenter field.
     * The center for a proximity search. Ignored if location fields are set on the Proximity Search Parameters.
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
     * The parameters for a proximity search.
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
     * Gets the value of the SearchType field.
     * External search type (external search only)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContactSearchType getSearchType() {
      return (typekey.ContactSearchType)__getInternalInterface().getFieldValue(SEARCHTYPE_PROP.get());
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
     * Gets the value of the VendorType field.
     * The company's vendor type.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.VendorType getVendorType() {
      return (typekey.VendorType)__getInternalInterface().getFieldValue(VENDORTYPE_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Determines whether this is a search against an external Contact system. If true, then the search will be
     * made against the <code>IContactSearchAdapter</code> plugin.
     * @return true if the search is against an external Contact system
     */
    public boolean isExternalSearch() {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).isExternalSearch();
    }
    
    /**
     * Gets the value of the ExternalSearchEnabled field.
     * Whether or not external search is enabled. True for "picker" searches; false otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isExternalSearchEnabled() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXTERNALSEARCHENABLED_PROP.get());
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
     * Preferred Vendors
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
      return ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).isProximitySearch();
    }
    
    /**
     * Determines whether this criteria is searching for contacts of the given type.
     * @param contactType contact type
     * @return true, if criteria is searching for contacts of the given type.
     */
    public boolean isSearchFor(gw.lang.reflect.IType contactType) {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).isSearchFor(contactType);
    }
    
    public boolean isSet() {
      return ((com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaInternalMethods")).isSet();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    /**
     * Performs the search and returns the results wrapped in a QueryProcessor.
     * If the search type is set, and is not ContactSearchType.TC_INTERNAL
     * then an external search is performed.  In all other cases, an internal search is performed.
     * An external search is routed through the contact search adapter.
     * An internal search is routed through the address book adapter.
     * @param bundleProvider the bundle that the search results will be added to
     * @return a QueryProcessor containing Contact objects that match this criteria
     */
    public gw.api.database.IQueryBeanResult performSearch(gw.pl.persistence.core.BundleProvider bundleProvider) {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).performSearch(bundleProvider);
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
     * Sets the value of the ContactSubtype field.
     */
    public void setContactSubtype(typekey.Contact value) {
      __getInternalInterface().setFieldValue(CONTACTSUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExternalSearchEnabled field.
     */
    public void setExternalSearchEnabled(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(EXTERNALSEARCHENABLED_PROP.get(), value);
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
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the MatchType field.
     */
    public void setMatchType(typekey.ContactMatchResultType value) {
      __getInternalInterface().setFieldValue(MATCHTYPE_PROP.get(), value);
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
     * Sets the value of the OfficialId field.
     */
    public void setOfficialId(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OFFICIALID_PROP.get(), value);
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
     * Sets the value of the SearchType field.
     */
    public void setSearchType(typekey.ContactSearchType value) {
      __getInternalInterface().setFieldValue(SEARCHTYPE_PROP.get(), value);
    }
    
    /**
     * 
     * @param type 
     */
    public void setSearchableContactSubtype(gw.entity.TypeKey type) {
      ((com.guidewire.pl.system.service.search.CommonContactSearchCriteria)__getDelegateManager().getImplementation("com.guidewire.pl.system.service.search.CommonContactSearchCriteria")).setSearchableContactSubtype(type);
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
     * Sets the value of the TaxID field.
     */
    public void setTaxID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TAXID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VendorType field.
     */
    public void setVendorType(typekey.VendorType value) {
      __getInternalInterface().setFieldValue(VENDORTYPE_PROP.get(), value);
    }
    
    /**
     * Creates a new Proximity Search Parameters and Proximity Search center associated with this
     * Contact Search Criteria, and populates both with the basic information required.
     * @param address a given Geocodable (typically, an Address) to be used as the search center
     * @param isDistanceBased Set for true if a distance based ("search within n miles/km") search; false for an ordinal ("nearest n") search
     * @param number Range in miles/km for distance based searches; number of results to be returned for an ordinal search
     * @param unitOfDistance For distance based searches, indicates the unit to be used for the search range; for ordinal searches, indicates what unit should be used for results (UnitOfDistance.TC_KILOMETER or UnitOfDistance.TC_MILE)
     * @return the Proximity Search Parameters created
     */
    public entity.ProximitySearchParameters setupProximitySearch(entity.Address address, java.lang.Boolean isDistanceBased, java.lang.Integer number, typekey.UnitOfDistance unitOfDistance) {
      return ((com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods")).setupProximitySearch(address, isDistanceBased, number, unitOfDistance);
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
    
    public boolean validate() {
      return ((com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaInternalMethods")).validate();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.contact.ContactSearchCriteriaPublicMethods", "com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaImpl");
    config.put("com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaInternalMethods", "com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.service.search.CommonContactSearchCriteria", "com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaImpl");
    config.put("com.guidewire.pl.system.service.search.CommonContactSearchCriteriaInternal", "com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaImpl");
    config.put("java.io.Serializable", "com.guidewire.pl.domain.contact.impl.ContactSearchCriteriaImpl");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ContactSearchCriteria.class, config);
    com.guidewire._generated.entity.ContactSearchCriteriaInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ContactSearchCriteria, com.guidewire._generated.entity.ContactSearchCriteriaInternal>() {
      public java.lang.Object getImplementation(entity.ContactSearchCriteria bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ContactSearchCriteriaInternal getInternalInterface(entity.ContactSearchCriteria bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ContactSearchCriteria newEmptyInstance() {
        return new entity.ContactSearchCriteria((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}