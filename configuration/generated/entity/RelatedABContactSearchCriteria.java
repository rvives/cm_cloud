package entity;

/**
 * RelatedABContactSearchCriteria
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RelatedABContactSearchCriteria.eti;RelatedABContactSearchCriteria.eix;RelatedABContactSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RelatedABContactSearchCriteria")
public class RelatedABContactSearchCriteria extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RelatedABContactSearchCriteria> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RelatedABContactSearchCriteria>("entity.RelatedABContactSearchCriteria");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ADJUDICATIVEDOMAIN_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AdjudicativeDomain");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ATTORNEYSPECIALTY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AttorneySpecialty");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CONTACTSUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ContactSubtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DOCTORSPECIALTY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DoctorSpecialty");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EMPLOYEENUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EmployeeNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> KEYWORD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Keyword");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LAWFIRMSPECIALTY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LawFirmSpecialty");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> MEDICALORGSPECIALTY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "MedicalOrgSpecialty");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORGANIZATIONNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OrganizationName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREFERREDVENDORS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PreferredVendors");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RELATEDCONTACT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RelatedContact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ROLEOFRELATEDCONTACT_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RoleOfRelatedContact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SCORE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Score");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TAXID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TaxID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> VENDORTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "VendorType");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RelatedABContactSearchCriteriaInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RelatedABContactSearchCriteria()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RelatedABContactSearchCriteria(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RelatedABContactSearchCriteria(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RelatedABContactSearchCriteriaInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RelatedABContactSearchCriteriaInternal __getInternalInterface() {
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
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
   * Gets the value of the OrganizationName field.
   * Name of person's employer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrganizationName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ORGANIZATIONNAME_PROP.get());
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
   * Gets the value of the RelatedContact field.
   * The related contact, if known.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getRelatedContact() {
    return (entity.ABContact)__getInternalInterface().getFieldValue(RELATEDCONTACT_PROP.get());
  }
  
  /**
   * Gets the value of the RoleOfRelatedContact field.
   * Role of related contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactBidiRel getRoleOfRelatedContact() {
    return (typekey.ContactBidiRel)__getInternalInterface().getFieldValue(ROLEOFRELATEDCONTACT_PROP.get());
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
   * Sets the value of the AdjudicativeDomain field.
   */
  public void setAdjudicativeDomain(typekey.AdjudicativeDomain value) {
    __getInternalInterface().setFieldValue(ADJUDICATIVEDOMAIN_PROP.get(), value);
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
   * Sets the value of the ContactSubtype field.
   */
  public void setContactSubtype(typekey.ABContact value) {
    __getInternalInterface().setFieldValue(CONTACTSUBTYPE_PROP.get(), value);
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
   * Sets the value of the OrganizationName field.
   */
  public void setOrganizationName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ORGANIZATIONNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreferredVendors field.
   */
  public void setPreferredVendors(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PREFERREDVENDORS_PROP.get(), value);
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
   * Sets the value of the RelatedContact field.
   */
  public void setRelatedContact(entity.ABContact value) {
    __getInternalInterface().setFieldValue(RELATEDCONTACT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoleOfRelatedContact field.
   */
  public void setRoleOfRelatedContact(typekey.ContactBidiRel value) {
    __getInternalInterface().setFieldValue(ROLEOFRELATEDCONTACT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(SCORE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RelatedABContactSearchCriteriaInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RelatedABContactSearchCriteria.this.__getDelegateManager();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
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
     * Gets the value of the OrganizationName field.
     * Name of person's employer
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOrganizationName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ORGANIZATIONNAME_PROP.get());
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
     * Gets the value of the RelatedContact field.
     * The related contact, if known.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContact getRelatedContact() {
      return (entity.ABContact)__getInternalInterface().getFieldValue(RELATEDCONTACT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRelatedContactID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RELATEDCONTACT_PROP.get());
    }
    
    /**
     * Gets the value of the RoleOfRelatedContact field.
     * Role of related contact
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContactBidiRel getRoleOfRelatedContact() {
      return (typekey.ContactBidiRel)__getInternalInterface().getFieldValue(ROLEOFRELATEDCONTACT_PROP.get());
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
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
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
     * Sets the value of the AdjudicativeDomain field.
     */
    public void setAdjudicativeDomain(typekey.AdjudicativeDomain value) {
      __getInternalInterface().setFieldValue(ADJUDICATIVEDOMAIN_PROP.get(), value);
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
     * Sets the value of the ContactSubtype field.
     */
    public void setContactSubtype(typekey.ABContact value) {
      __getInternalInterface().setFieldValue(CONTACTSUBTYPE_PROP.get(), value);
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
     * Sets the value of the OrganizationName field.
     */
    public void setOrganizationName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ORGANIZATIONNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreferredVendors field.
     */
    public void setPreferredVendors(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PREFERREDVENDORS_PROP.get(), value);
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
     * Sets the value of the RelatedContact field.
     */
    public void setRelatedContact(entity.ABContact value) {
      __getInternalInterface().setFieldValue(RELATEDCONTACT_PROP.get(), value);
    }
    
    public void setRelatedContactID(gw.pl.persistence.core.Key value) {
      setFieldValue(RELATEDCONTACT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RoleOfRelatedContact field.
     */
    public void setRoleOfRelatedContact(typekey.ContactBidiRel value) {
      __getInternalInterface().setFieldValue(ROLEOFRELATEDCONTACT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Score field.
     */
    public void setScore(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SCORE_PROP.get(), value);
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
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.ab.addressbook.entity.RelatedABContactSearchCriteria", "com.guidewire.ab.domain.addressbook.impl.RelatedABContactSearchCriteriaImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RelatedABContactSearchCriteria.class, config);
    com.guidewire._generated.entity.RelatedABContactSearchCriteriaInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RelatedABContactSearchCriteria, com.guidewire._generated.entity.RelatedABContactSearchCriteriaInternal>() {
      public java.lang.Object getImplementation(entity.RelatedABContactSearchCriteria bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RelatedABContactSearchCriteriaInternal getInternalInterface(entity.RelatedABContactSearchCriteria bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RelatedABContactSearchCriteria newEmptyInstance() {
        return new entity.RelatedABContactSearchCriteria((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}