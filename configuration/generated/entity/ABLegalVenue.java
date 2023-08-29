package entity;

/**
 * ABLegalVenue
 * Contact type representing legal venues.
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABLegalVenue.eti;ABLegalVenue.eix;ABLegalVenue.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ABLegalVenue")
public class ABLegalVenue extends entity.ABPlace {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ABLegalVenue> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ABLegalVenue>("entity.ABLegalVenue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> VENUETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "VenueType");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ABLegalVenue()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ABLegalVenue(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ABLegalVenue(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.ABLegalVenueInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.ABLegalVenueInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.ABLegalVenueInternal)super.__getInternalInterface();
  }
  
  /**
   * Gets the value of the VenueType field.
   * Type of court.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VenueType getVenueType() {
    return (typekey.VenueType)__getInternalInterface().getFieldValue(VENUETYPE_PROP.get());
  }
  
  /**
   * Sets the value of the VenueType field.
   */
  public void setVenueType(typekey.VenueType value) {
    __getInternalInterface().setFieldValue(VENUETYPE_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ABLegalVenueInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ABLegalVenue.this.__getDelegateManager();
    }
    
    /**
     * Adds the given address.  Does nothing if the Address already exists on the
     * Contact (either as the Primary Address or in the Contact Addresses array).  Adds as
     * primary if no primary exists.
     * @param address 
     */
    public void addAddress(entity.Address address) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).addAddress(address);
    }
    
    public void addCommonAddress(entity.Address address) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).addCommonAddress(address);
    }
    
    public void addCommonContactByRelationship(typekey.ContactBidiRel relationship, entity.CommonContact contact) throws com.guidewire.pl.domain.addressbook.ContactRelationshipValidationException {
      ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).addCommonContactByRelationship(relationship, contact);
    }
    
    public void addCommonContactContact(entity.CommonContactContact contactContact) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).addCommonContactContact(contactContact);
    }
    
    /**
     * Adds the given contact to this contact with the given relationship. Does nothing if the relationship
     * already exists. Returns a failure message if the Contact could not be added because it violated some relationship
     * constraint.
     * @param relationship 
     * @param contact 
     */
    public void addContactByRelationship(typekey.ContactBidiRel relationship, entity.ABContact contact) throws com.guidewire.pl.domain.addressbook.ContactRelationshipValidationException {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).addContactByRelationship(relationship, contact);
    }
    
    /**
     * 
     * @param contactContact 
     */
    public void addContactContact(entity.ABContactContact contactContact) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).addContactContact(contactContact);
    }
    
    public void addEvent(com.guidewire.pl.system.entity.BeanEvent event) {
      ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).addEvent(event);
    }
    
    /**
     * Associates an event with the bean, which will be fired when the bean is
     * committed. A bean with an event is considered changed.
     * @param strEventId The event id.
     */
    public void addEvent(java.lang.String strEventId) {
      ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
    }
    
    /**
     * This method is meant to be called directly from gosu to generate history events.
     * @param type type of this history event
     * @param description a text description for this history event
     * @return newly created History event
     */
    public entity.History addHistory(typekey.CustomHistoryType type, java.lang.String description) {
      return ((gw.ab.history.entity.HistoryEventContainer)__getDelegateManager().getImplementation("gw.ab.history.entity.HistoryEventContainer")).addHistory(type, description);
    }
    
    public void addSecondaryCommonAddress(entity.Address address) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).addSecondaryCommonAddress(address);
    }
    
    /**
     * Adds the given element to the ABContactSpecialistServices array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToABContactSpecialistServices(entity.ABContactSpecialistService element) {
      __getInternalInterface().addArrayElement(ABCONTACTSPECIALISTSERVICES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ABOfficialIDs array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToABOfficialIDs(entity.ABOfficialID element) {
      __getInternalInterface().addArrayElement(ABOFFICIALIDS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the CategoryScores array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCategoryScores(entity.ABContactCategoryScore element) {
      __getInternalInterface().addArrayElement(CATEGORYSCORES_PROP.get(), element);
    }
    
    public void addToCommonContactAddresses(entity.CommonContactAddress contactAddress) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).addToCommonContactAddresses(contactAddress);
    }
    
    /**
     * Adds the given element to the ContactAddresses array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToContactAddresses(entity.ABContactAddress element) {
      __getInternalInterface().addArrayElement(CONTACTADDRESSES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the DocumentLinks array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDocumentLinks(entity.ABContactDocumentLink element) {
      __getInternalInterface().addArrayElement(DOCUMENTLINKS_PROP.get(), element);
    }
    
    /**
     * Link the document to the ABContact using the ABContactDocumentLink join array.
     * 
     * It is expected that the document bundle will be committed after the transaction.
     * @param document to link to the contact; it need not be in the ABContact's bundle
     * @return the ABContactDocumentLink that forms the link
     */
    public void addToDocuments(entity.Document document) throws gw.api.webservice.exception.DuplicateKeyException {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).addToDocuments(document);
    }
    
    public void addToDocuments(entity.Document[] documents) throws gw.api.webservice.exception.DuplicateKeyException {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).addToDocuments(documents);
    }
    
    /**
     * Adds the given element to the EFTRecords array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToEFTRecords(entity.EFTData element) {
      __getInternalInterface().addArrayElement(EFTRECORDS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the History array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToHistory(entity.ContactHistory element) {
      __getInternalInterface().addArrayElement(HISTORY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the KeptMergedContactPairs array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToKeptMergedContactPairs(entity.MergedContactPair element) {
      __getInternalInterface().addArrayElement(KEPTMERGEDCONTACTPAIRS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PendingContactChanges array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPendingContactChanges(entity.PendingContactChange element) {
      __getInternalInterface().addArrayElement(PENDINGCONTACTCHANGES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RetiredMergedContactPairArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRetiredMergedContactPairArray(entity.MergedContactPair element) {
      __getInternalInterface().addArrayElement(RETIREDMERGEDCONTACTPAIRARRAY_PROP.get(), element);
    }
    
    public void addToSourceCommonContactContacts(entity.CommonContactContact contactContact) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).addToSourceCommonContactContacts(contactContact);
    }
    
    /**
     * Adds the given element to the SourceRelatedContacts array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToSourceRelatedContacts(entity.ABContactContact element) {
      __getInternalInterface().addArrayElement(SOURCERELATEDCONTACTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Tags array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTags(entity.ABContactTag element) {
      __getInternalInterface().addArrayElement(TAGS_PROP.get(), element);
    }
    
    public void addToTargetCommonContactContacts(entity.CommonContactContact contactContact) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).addToTargetCommonContactContacts(contactContact);
    }
    
    /**
     * Adds the given element to the TargetRelatedContacts array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTargetRelatedContacts(entity.ABContactContact element) {
      __getInternalInterface().addArrayElement(TARGETRELATEDCONTACTS_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void beforeInsert() {
      ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
    }
    
    public void beforeRemove() {
      ((com.guidewire.pl.system.bundle.RemoveCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.RemoveCallback")).beforeRemove();
    }
    
    public void beforeUpdate() {
      ((com.guidewire.pl.system.bundle.UpdateCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.UpdateCallback")).beforeUpdate();
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    /**
     * This method will return true if this object can be restored at this time.  There are two possible reason why this
     * would be false.  1.  the object was not archived in the first place; 2.  The archive source is not currently available
     * @return true if okay to restore
     */
    public boolean canRestore() {
      return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).canRestore();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public void checkArchiveEligibility() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).checkArchiveEligibility();
    }
    
    /**
     * Clears all categoryscores associated with this contact. Should be used with caution.
     */
    public void clearAllCategoryScores() {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).clearAllCategoryScores();
    }
    
    public void clearTraceDetails() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).clearTraceDetails();
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
     * Shallowly copies and marks a bean as not persisting, i.e. the bean will not be committed.
     * @param bean The bean to be copied and marked
     * @return The copied and marked bean
     */
    public <T extends gw.pl.persistence.core.Bean> T copyNonPersisting(T bean) {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).copyNonPersisting(bean);
    }
    
    /**
     * Deeply copies this contact and marks the copy as not persisting, i.e. it will not be committed.
     * @return The copied and marked bean
     */
    public entity.ABContact deepCopyNonPersisting() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).deepCopyNonPersisting();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public void excludeFromArchiveBecauseOfFailure(java.lang.Exception e) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).excludeFromArchiveBecauseOfFailure(e);
    }
    
    public void excludeFromArchiveBecauseOfRules(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).excludeFromArchiveBecauseOfRules(message);
    }
    
    public java.util.List generateInsertEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateInsertEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List generateRemoveEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateRemoveEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List generateUpdateEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateUpdateEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the ABContactSpecialistServices field.
     * Array of ABContactSpecialistServices.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactSpecialistService[] getABContactSpecialistServices() {
      return (entity.ABContactSpecialistService[])__getInternalInterface().getFieldValue(ABCONTACTSPECIALISTSERVICES_PROP.get());
    }
    
    /**
     * Gets the value of the ABOfficialIDs field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABOfficialID[] getABOfficialIDs() {
      return (entity.ABOfficialID[])__getInternalInterface().getFieldValue(ABOFFICIALIDS_PROP.get());
    }
    
    /**
     * Gets all the Contact's Addresses. Includes the primary Address and secondary Addresses.
     */
    public entity.Address[] getAllAddresses() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getAllAddresses();
    }
    
    public entity.Address[] getAllCommonAddresses() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).getAllCommonAddresses();
    }
    
    public entity.CommonContactContact[] getAllCommonContactContacts() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).getAllCommonContactContacts();
    }
    
    /**
     */
    public entity.ABContactContact[] getAllContactContacts() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getAllContactContacts();
    }
    
    public int getApplicationMajorVersion() {
      return ((gw.api.config.MetadataVersion)__getDelegateManager().getImplementation("gw.api.config.MetadataVersion")).getApplicationMajorVersion();
    }
    
    public int getApplicationMinorVersion() {
      return ((gw.api.config.MetadataVersion)__getDelegateManager().getImplementation("gw.api.config.MetadataVersion")).getApplicationMinorVersion();
    }
    
    /**
     * Gets the value of the ArchiveDate field.
     * When archiving was attempted on the root. Null if we never attempted to archive it.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getArchiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ARCHIVEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ArchiveFailure field.
     * Short version of the reason for a failure to archive
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ArchiveFailure getArchiveFailure() {
      return (entity.ArchiveFailure)__getInternalInterface().getFieldValue(ARCHIVEFAILURE_PROP.get());
    }
    
    /**
     * Gets the value of the ArchiveFailureDetails field.
     * Full details of archive failure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ArchiveFailureDetails getArchiveFailureDetails() {
      return (entity.ArchiveFailureDetails)__getInternalInterface().getFieldValue(ARCHIVEFAILUREDETAILS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getArchiveFailureDetailsID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ARCHIVEFAILUREDETAILS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getArchiveFailureID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ARCHIVEFAILURE_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * Gets the value of the ArchiveSchemaInfo field.
     * Schema version at which the root was archived or null if it was not archived
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UpgradeDatamodelInfo getArchiveSchemaInfo() {
      return (entity.UpgradeDatamodelInfo)__getInternalInterface().getFieldValue(ARCHIVESCHEMAINFO_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getArchiveSchemaInfoID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ARCHIVESCHEMAINFO_PROP.get());
    }
    
    /**
     * Gets the value of the ArchiveState field.
     * The archive state of the graph
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ArchiveState getArchiveState() {
      return (typekey.ArchiveState)__getInternalInterface().getFieldValue(ARCHIVESTATE_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivedEntityPurgeDate field.
     * Date when archived entity will be eligible for Purge
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getArchivedEntityPurgeDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ARCHIVEDENTITYPURGEDATE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CategoryScores field.
     * List of categories and their scores, associated with this Review.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactCategoryScore[] getCategoryScores() {
      return (entity.ABContactCategoryScore[])__getInternalInterface().getFieldValue(CATEGORYSCORES_PROP.get());
    }
    
    /**
     * Gets the value of the CityDenorm field.
     * Primary Address City, this is searchColumn for City on Address entity
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYDENORM_PROP.get());
    }
    
    public entity.CommonContactAddress[] getCommonContactAddresses() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).getCommonContactAddresses();
    }
    
    /**
     * Gets the contact related to this contact via the given relationship.
     * @param relationship a "zeroorone" cardinality relationship
     * @throws IllegalArgumentException if the given relationship does not have "zeroorone" cardinality
     * @return the related contact, or null if no contact is related to this contact via the given relationship.
     */
    public entity.CommonContact getCommonContactByRelationship(typekey.ContactBidiRel relationship) {
      return ((com.guidewire.pl.domain.contact.CommonContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.CommonContactPublicMethods")).getCommonContactByRelationship(relationship);
    }
    
    public entity.CommonContactContact[] getCommonContactContactsByRelationship(typekey.ContactBidiRel relationship) {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).getCommonContactContactsByRelationship(relationship);
    }
    
    /**
     * Gets the contacts related to this contact via the given relationship.
     * @param relationship a relationship
     * @return the related contacts, or an empty array if no contacts are related to this contact via the given relationship.
     */
    public entity.CommonContact[] getCommonContactsByRelationship(typekey.ContactBidiRel relationship) {
      return ((com.guidewire.pl.domain.contact.CommonContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.CommonContactPublicMethods")).getCommonContactsByRelationship(relationship);
    }
    
    public gw.entity.IEntityType getContactAddressType() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).getContactAddressType();
    }
    
    /**
     * Gets the value of the ContactAddresses field.
     * Secondary addresses associated with the contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactAddress[] getContactAddresses() {
      return (entity.ABContactAddress[])__getInternalInterface().getFieldValue(CONTACTADDRESSES_PROP.get());
    }
    
    public gw.entity.IEntityType getContactContactType() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).getContactContactType();
    }
    
    public com.guidewire.pl.domain.contact.config.ContactRelationshipConfigFile getContactRelationshipConfig() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).getContactRelationshipConfig();
    }
    
    /**
     * Gets the value of the CountryDenorm field.
     * Primary Address Country, this is denormalized column for Country on Address entity
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Country getCountryDenorm() {
      return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRYDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the CreateStatus field.
     * Creation status of this contact
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContactCreationApprovalStatus getCreateStatus() {
      return (typekey.ContactCreationApprovalStatus)__getInternalInterface().getFieldValue(CREATESTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the DocumentLinks field.
     * The information about the associated documents to this ABContact
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactDocumentLink[] getDocumentLinks() {
      return (entity.ABContactDocumentLink[])__getInternalInterface().getFieldValue(DOCUMENTLINKS_PROP.get());
    }
    
    /**
     * Return the list of documents linked to the contact
     * @return list of documents associated to the contact
     */
    public entity.Document[] getDocuments() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getDocuments();
    }
    
    /**
     * Gets the value of the EFTRecords field.
     * Electronic Funds Transfer data for the contact
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.EFTData[] getEFTRecords() {
      return (entity.EFTData[])__getInternalInterface().getFieldValue(EFTRECORDS_PROP.get());
    }
    
    /**
     * Gets the value of the EmailAddress1 field.
     * Primary email address associated with the contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEmailAddress1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EMAILADDRESS1_PROP.get());
    }
    
    /**
     * Gets the value of the EmailAddress2 field.
     * Secondary email address associated with the contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEmailAddress2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EMAILADDRESS2_PROP.get());
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * Gets the value of the ExcludeReason field.
     * Reason for excluding or skipping the entity from archiving. If the ExcludeFromArchive bit is set, this gives the reason for excluding. Else, if this is not null, it is the reason for skipping.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExcludeReason() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCLUDEREASON_PROP.get());
    }
    
    public int getExtensionsVersion() {
      return ((gw.api.config.MetadataVersion)__getDelegateManager().getImplementation("gw.api.config.MetadataVersion")).getExtensionsVersion();
    }
    
    /**
     * 
     * @return the name of the remote application updating this via remote API call.
     */
    public java.lang.String getExternalUpdateApp() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getExternalUpdateApp();
    }
    
    /**
     * 
     * @return the name of the user updating this via remote API call.
     */
    public java.lang.String getExternalUpdateUser() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getExternalUpdateUser();
    }
    
    /**
     * Return the external public ID
     */
    public java.lang.String getExternal_PublicID() {
      return ((gw.ab.addressbook.entity.ABLinkable)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABLinkable")).getExternal_PublicID();
    }
    
    /**
     * Return the external unique ID
     */
    public java.lang.String getExternal_UniqueID() {
      return ((gw.ab.addressbook.entity.ABLinkable)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABLinkable")).getExternal_UniqueID();
    }
    
    /**
     * Gets the value of the FaxPhone field.
     * Fax number associated with the contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFaxPhone() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FAXPHONE_PROP.get());
    }
    
    /**
     * Gets the value of the FaxPhoneCountry field.
     * Fax phone country.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PhoneCountryCode getFaxPhoneCountry() {
      return (typekey.PhoneCountryCode)__getInternalInterface().getFieldValue(FAXPHONECOUNTRY_PROP.get());
    }
    
    /**
     * Gets the value of the FaxPhoneExtension field.
     * Fax phone extension.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFaxPhoneExtension() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FAXPHONEEXTENSION_PROP.get());
    }
    
    /**
     * 
     * @return Returns whether there are PendingContactUpdates for this ABContact
     */
    public java.lang.Boolean getHasPendingUpdates() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getHasPendingUpdates();
    }
    
    /**
     * Gets the value of the History field.
     * History entries on this contact
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ContactHistory[] getHistory() {
      return (entity.ContactHistory[])__getInternalInterface().getFieldValue(HISTORY_PROP.get());
    }
    
    /**
     * Gets the value of the HomePhone field.
     * Home phone number associated with the contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHomePhone() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HOMEPHONE_PROP.get());
    }
    
    /**
     * Gets the value of the HomePhoneCountry field.
     * Home phone country.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PhoneCountryCode getHomePhoneCountry() {
      return (typekey.PhoneCountryCode)__getInternalInterface().getFieldValue(HOMEPHONECOUNTRY_PROP.get());
    }
    
    /**
     * Gets the value of the HomePhoneExtension field.
     * Home phone extension.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHomePhoneExtension() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HOMEPHONEEXTENSION_PROP.get());
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
     * Gets the value of the KeptMergedContactPairs field.
     * MergedContactPairs for which this is the KeptContact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MergedContactPair[] getKeptMergedContactPairs() {
      return (entity.MergedContactPair[])__getInternalInterface().getFieldValue(KEPTMERGEDCONTACTPAIRS_PROP.get());
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
     * Gets the value of the KeywordDenorm field.
     * denorm field for Keyword
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getKeywordDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KEYWORDDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the KeywordKanji field.
     * KeywordKanji is the general term for the Kanji Name (Companies and Places) and LastName (for Persons).  Used only for Japanese names and will be null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getKeywordKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KEYWORDKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the LinkID field.
     * Represents the ID used by client applications to link with the Address Book.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLinkID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LINKID_PROP.get());
    }
    
    /**
     * Gets the value of the LoadCommandID field.
     * LoadCommand for load where row was created. If not null this object was loaded via the loader.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getLoadCommandID() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
    }
    
    /**
     * Gets the value of the Name field.
     * This contact's name.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the NameDenorm field.
     * denorm field for Name
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNameDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the NameKanji field.
     * This contact's name in kanji (used only for Japanese names and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEKANJI_PROP.get());
    }
    
    /**
     * <p>Customers should implement this method to return the IDs of beans that are
     * linked to this ABContact but are outside the contact graph. The internal purge logic
     * uses the contact graph to decide what beans are part of the contact, but relies on this method for
     * information about beans outside the graph but that should still be deleted during purge.
     * The order of the returned List determines the order in which the beans will be deleted.
     * This ABContact must also be included in the result (and it must be the only ABContact); the
     * other beans in the result will normally be extension entities.</p>
     * @return a List of the beans to delete (including the ABContact itself), grouped by type and
     *         in the order that they should be deleted; this is actually a list of Pairs, where each
     *         Pair contains a type and the beans of that to be deleted
     */
    public java.util.List<gw.util.Pair<gw.entity.IEntityType, java.util.List<gw.pl.persistence.core.Key>>> getNonGraphBeansToPurge() {
      return ((gw.api.contact.ABContactPurgeMethods)__getDelegateManager().getImplementation("gw.api.contact.ABContactPurgeMethods")).getNonGraphBeansToPurge();
    }
    
    /**
     * Gets the value of the Notes field.
     * Notes on this contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNotes() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NOTES_PROP.get());
    }
    
    /**
     * Gets the value of the PendingContactChanges field.
     * PendingContactChanges for which this is the associated ABContact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PendingContactChange[] getPendingContactChanges() {
      return (entity.PendingContactChange[])__getInternalInterface().getFieldValue(PENDINGCONTACTCHANGES_PROP.get());
    }
    
    public int getPlatformMajorVersion() {
      return ((gw.api.config.MetadataVersion)__getDelegateManager().getImplementation("gw.api.config.MetadataVersion")).getPlatformMajorVersion();
    }
    
    public int getPlatformMinorVersion() {
      return ((gw.api.config.MetadataVersion)__getDelegateManager().getImplementation("gw.api.config.MetadataVersion")).getPlatformMinorVersion();
    }
    
    public typekey.ContactBidiRel[] getPossibleBidiRelsToCommonContact(entity.CommonContact otherContact) {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).getPossibleBidiRelsToCommonContact(otherContact);
    }
    
    /**
     * 
     * @param otherContact If <i>null</i> then then delegating to getPossibleBidiRels();
     */
    public typekey.ContactBidiRel[] getPossibleBidiRelsToContact(entity.ABContact otherContact) {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getPossibleBidiRelsToContact(otherContact);
    }
    
    /**
     * Gets the value of the PostalCodeDenorm field.
     * Primary Address Postal code, this is searchColumn for Postal code on Address entity
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCodeDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the PreferredCurrency field.
     * The contact's preferred currency.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPreferredCurrency() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(PREFERREDCURRENCY_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryAddress field.
     * Primary address.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Address getPrimaryAddress() {
      return (entity.Address)__getInternalInterface().getFieldValue(PRIMARYADDRESS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPrimaryAddressID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PRIMARYADDRESS_PROP.get());
    }
    
    public entity.Address getPrimaryCommonAddress() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).getPrimaryCommonAddress();
    }
    
    /**
     * Gets the value of the PrimaryPhone field.
     * Primary phone number type for the contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PrimaryPhoneType getPrimaryPhone() {
      return (typekey.PrimaryPhoneType)__getInternalInterface().getFieldValue(PRIMARYPHONE_PROP.get());
    }
    
    /**
     * 
     * @return the value of the Contact's primary phone number.
     */
    public java.lang.String getPrimaryPhoneValue() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getPrimaryPhoneValue();
    }
    
    /**
     * Returns the primary value used for sorting contact available to list views as sort criterion.
     * @return the primary value used for sorting contact available to list views as sort criterion.
     */
    public java.lang.String getPrimarySortValue() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getPrimarySortValue();
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
     * Returns the publicID of the root entity.
     * <p>
     * PublicID values are automatically created during the commit, if not previously set. The format is random, meeting security requirements based on current industry standards. For example:
     * <ul>
     *   <li>pc:SYinDB2XTOgNZFs1NpxU8
     *   <li>pc:Sf8QS4N5RBS-h8_pj-Oy_
     *   <li>pc:SBwBzylneecSNr6_Ub4IO
     * </ul>
     * Your configuration code must not assume any particular format for PublicID values, in either the prefix or body portion of the string, or even assume the existence of a prefix. Do not make any assumptions at all about the content of a PublicID value, including expectations that values are sequential, numeric, or prefixed.
     * <p>
     * @return The external id of the root.
     */
    public java.lang.String getPublicIDOfRoot() {
      return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).getPublicIDOfRoot();
    }
    
    /**
     * Returns the quaternary (4th) value used for sorting contact available to list views as sort criterion.
     * @return the Quaternary (4th) value used for sorting contact available to list views as sort criterion.
     */
    public java.lang.String getQuaternarySortValue() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getQuaternarySortValue();
    }
    
    /**
     * 
     * @return Returns the contact that replaced this contact via the replaceWith method.  Returns null if there
     * isn't one.
     */
    public entity.ABContact getReplacementContact() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getReplacementContact();
    }
    
    /**
     * Gets the value of the RetiredMergedContactPair field.
     * MergedContactPairs for which this is the RetiredContact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MergedContactPair getRetiredMergedContactPair() {
      return (entity.MergedContactPair)__getInternalInterface().getFieldValue(RETIREDMERGEDCONTACTPAIR_PROP.get());
    }
    
    /**
     * Gets the value of the RetiredMergedContactPairArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MergedContactPair[] getRetiredMergedContactPairArray() {
      return (entity.MergedContactPair[])__getInternalInterface().getFieldValue(RETIREDMERGEDCONTACTPAIRARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRetiredMergedContactPairID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RETIREDMERGEDCONTACTPAIR_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    public entity.Extractable getRoot() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getRoot();
    }
    
    /**
     * Gets the value of the Score field.
     * Overall review Score for this Contact
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getScore() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(SCORE_PROP.get());
    }
    
    /**
     * Gets all the Contact's secondary Addresses.
     */
    public entity.Address[] getSecondaryAddresses() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getSecondaryAddresses();
    }
    
    public entity.Address[] getSecondaryCommonAddresses() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).getSecondaryCommonAddresses();
    }
    
    /**
     * Returns the secondary value used for sorting contact available to list views as sort criterion.
     * @return Secondary value used for sorting contact available to list views as sort criterion.
     */
    public java.lang.String getSecondarySortValue() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getSecondarySortValue();
    }
    
    /**
     * List of categories associated with this ABContact and their scores.
     */
    public entity.ABContactCategoryScore[] getSortedCategoryScores() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getSortedCategoryScores();
    }
    
    public entity.CommonContactContact[] getSourceCommonContactContacts() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).getSourceCommonContactContacts();
    }
    
    /**
     * Gets the value of the SourceRelatedContacts field.
     * Contacts that point to this contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactContact[] getSourceRelatedContacts() {
      return (entity.ABContactContact[])__getInternalInterface().getFieldValue(SOURCERELATEDCONTACTS_PROP.get());
    }
    
    /**
     * Gets the value of the SpatialPointDenorm field.
     * A denormalized searchColumn for SpatialPoint on Address entity
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.api.database.spatial.SpatialPoint getSpatialPointDenorm() {
      return (gw.api.database.spatial.SpatialPoint)__getInternalInterface().getFieldValue(SPATIALPOINTDENORM_PROP.get());
    }
    
    /**
     * Returns the Contact's services.  The list returned is constructed so modifying the returned list
     * does not modify the contact's services.
     * @return The Contact's services
     */
    public java.util.List<entity.SpecialistService> getSpecialistServices() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getSpecialistServices();
    }
    
    /**
     * Gets the value of the StateDenorm field.
     * Primary Address State, this is denormalized column for State on Address entity
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getStateDenorm() {
      return (typekey.State)__getInternalInterface().getFieldValue(STATEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ABContact getSubtype() {
      return (typekey.ABContact)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Returns the tag types
     * @return the tag types
     */
    public typekey.ContactTagType[] getTagTypes() {
      return ((com.guidewire.pl.domain.contact.CommonContactAdapter)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.CommonContactAdapter")).getTagTypes();
    }
    
    /**
     * Gets the value of the Tags field.
     * List of ABContactTags.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactTag[] getTags() {
      return (entity.ABContactTag[])__getInternalInterface().getFieldValue(TAGS_PROP.get());
    }
    
    public entity.CommonContactContact[] getTargetCommonContactContacts() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).getTargetCommonContactContacts();
    }
    
    /**
     * Gets the value of the TargetRelatedContacts field.
     * Contacts that this Contact points to.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactContact[] getTargetRelatedContacts() {
      return (entity.ABContactContact[])__getInternalInterface().getFieldValue(TARGETRELATEDCONTACTS_PROP.get());
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
     * Gets the value of the TaxStatus field.
     * Status of the contact's tax ID; whether it is known or unknown.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.TaxStatus getTaxStatus() {
      return (typekey.TaxStatus)__getInternalInterface().getFieldValue(TAXSTATUS_PROP.get());
    }
    
    /**
     * Returns the tertiary (3rd) value used for sorting contact available to list views as sort criterion.
     * @return the tertiary (3rd) value used for sorting contact available to list views as sort criterion.
     */
    public java.lang.String getTertiarySortValue() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).getTertiarySortValue();
    }
    
    public java.lang.String getTraceDetails() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getTraceDetails();
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the ValidationLevel field.
     * Validation level that this object passed (if any) before it was stored.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ValidationLevel getValidationLevel() {
      return (typekey.ValidationLevel)__getInternalInterface().getFieldValue(VALIDATIONLEVEL_PROP.get());
    }
    
    /**
     * Gets the validation result.
     * @return The validation result.
     */
    public gw.api.validation.ValidationResult getValidationResult() {
      return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
    }
    
    /**
     * Gets the value of the VendorAvailability field.
     * The availability of a vendor.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.VendorAvailabilityType getVendorAvailability() {
      return (typekey.VendorAvailabilityType)__getInternalInterface().getFieldValue(VENDORAVAILABILITY_PROP.get());
    }
    
    /**
     * Gets the value of the VendorNumber field.
     * Vendor number for the contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getVendorNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VENDORNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the VendorServicesLoadStatus field.
     * Field to indicate the status of the vendor during vendor import/export
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.VendorServicesLoadStatus getVendorServicesLoadStatus() {
      return (typekey.VendorServicesLoadStatus)__getInternalInterface().getFieldValue(VENDORSERVICESLOADSTATUS_PROP.get());
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
     * Gets the value of the VendorUnavailableMessage field.
     * Message decribing a vendor's unavailability.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getVendorUnavailableMessage() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VENDORUNAVAILABLEMESSAGE_PROP.get());
    }
    
    /**
     * Gets the value of the VenueType field.
     * Type of court.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.VenueType getVenueType() {
      return (typekey.VenueType)__getInternalInterface().getFieldValue(VENUETYPE_PROP.get());
    }
    
    public java.lang.String getVersionString() {
      return ((gw.api.config.MetadataVersion)__getDelegateManager().getImplementation("gw.api.config.MetadataVersion")).getVersionString();
    }
    
    /**
     * Gets the value of the W9ReceivedDate field.
     * W-9 form received date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getW9ReceivedDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(W9RECEIVEDDATE_PROP.get());
    }
    
    /**
     * Gets the value of the W9ValidFrom field.
     * W-9 valid start date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getW9ValidFrom() {
      return (java.util.Date)__getInternalInterface().getFieldValue(W9VALIDFROM_PROP.get());
    }
    
    /**
     * Gets the value of the W9ValidTo field.
     * W-9 valid to date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getW9ValidTo() {
      return (java.util.Date)__getInternalInterface().getFieldValue(W9VALIDTO_PROP.get());
    }
    
    /**
     * Gets the value of the WithholdingRate field.
     * The contact's backup withholding rate, or null if backup withholding is not required or is not known to be required.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getWithholdingRate() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(WITHHOLDINGRATE_PROP.get());
    }
    
    /**
     * Gets the value of the WorkPhone field.
     * Business phone number associated with the contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getWorkPhone() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(WORKPHONE_PROP.get());
    }
    
    /**
     * Gets the value of the WorkPhoneCountry field.
     * Work phone country.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PhoneCountryCode getWorkPhoneCountry() {
      return (typekey.PhoneCountryCode)__getInternalInterface().getFieldValue(WORKPHONECOUNTRY_PROP.get());
    }
    
    /**
     * Gets the value of the WorkPhoneExtension field.
     * Business phone extension.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getWorkPhoneExtension() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(WORKPHONEEXTENSION_PROP.get());
    }
    
    public boolean hasReportedArchiveProblem() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).hasReportedArchiveProblem();
    }
    
    public boolean hasTraceDetails() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).hasTraceDetails();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    public boolean isArchived() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).isArchived();
    }
    
    /**
     * Gets the value of the DoNotDestroy field.
     * If set then the entity should not be destroyed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDoNotDestroy() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOTDESTROY_PROP.get());
    }
    
    public boolean isEditableWithPendingUpdate() {
      return ((gw.api.contact.ABContactPublicMethods)__getDelegateManager().getImplementation("gw.api.contact.ABContactPublicMethods")).isEditableWithPendingUpdate();
    }
    
    /**
     * Gets the value of the ExcludedFromArchive field.
     * Indicate if this entity should be excluded from archiving
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isExcludedFromArchive() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXCLUDEDFROMARCHIVE_PROP.get());
    }
    
    /**
     * Gets the value of the MinimumCriteriaVerified field.
     * Whether this entity has been verified by the VerifyMinimumCriteria batch process.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isMinimumCriteriaVerified() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(MINIMUMCRITERIAVERIFIED_PROP.get());
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * Gets the value of the PendingReindex field.
     * Indicate that the archived entity is pending for re-indexing
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPendingReindex() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PENDINGREINDEX_PROP.get());
    }
    
    /**
     * Gets the value of the Preferred field.
     * Whether the vendor is a preferred vendor.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPreferred() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PREFERRED_PROP.get());
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * Gets the value of the UpdateScore field.
     * Flag indicating the score needs to be updated because of new or deleted ReviewSummaries.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isUpdateScore() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(UPDATESCORE_PROP.get());
    }
    
    /**
     * 
     * @return True if the contact is a vendor, i.e. it has the Vendor tag.
     */
    public boolean isVendor() {
      return ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).isVendor();
    }
    
    /**
     * Gets the value of the W9Received field.
     * Has W-9 form been received
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isW9Received() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(W9RECEIVED_PROP.get());
    }
    
    /**
     * Make a specified address the primary address.  Old primary address will move to secondary addresses.
     * Sepcifed address can be new or an existing secondary-address.
     * Address will be removed from secondary addresses if found.
     * @param address 
     */
    public void makePrimaryAddress(entity.Address address) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).makePrimaryAddress(address);
    }
    
    public void makePrimaryCommonAddress(entity.Address address) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).makePrimaryCommonAddress(address);
    }
    
    public void markArchived() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).markArchived();
    }
    
    public void markDoNotDestroy(java.lang.Boolean value) {
      ((com.guidewire.ab.domain.personaldata.purge.DestructionRootPinnablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.personaldata.purge.DestructionRootPinnablePublicMethods")).markDoNotDestroy(value);
    }
    
    public void markPurgeReady() {
      ((com.guidewire.ab.domain.archiving.Purgeable)__getDelegateManager().getImplementation("com.guidewire.ab.domain.archiving.Purgeable")).markPurgeReady();
    }
    
    public void onArchiveReferenceTracking(gw.pl.persistence.core.BundleProvider bundleProvider, gw.api.importing.graph.Graph archiveGraph) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).onArchiveReferenceTracking(bundleProvider, archiveGraph);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void purgeImmediately() throws com.guidewire.pl.system.exception.TransactionException {
      ((com.guidewire.ab.domain.contact.ABContactPurgeInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.contact.ABContactPurgeInternal")).purgeImmediately();
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
    
    /**
     * Rejects the root bean w/ a global message
     * <p/>
     * Note the reason why the bean failed validation shouldn't refer to a particular
     * field in the entity. To do that, use the rejectField() method.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void reject(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).reject(errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Rejects a particular field or field path on the root bean.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void rejectField(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectField(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Rejects a particular field or field path on the root bean.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectFieldWithFlowStep(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectFieldWithFlowStep(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    /**
     * Reject a particular field of field path on a bean related to the root
     * bean, e.g. an array element of the bean such as an Exposure of a Claim.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param relatedBean Bean related to the root bean
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void rejectSubField(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubField(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Reject a particular field of field path on a bean related to the root
     * bean, e.g. an array element of the bean such as an Exposure of a Claim.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * Note that this is the fullest version of "reject"; all the others are
     * overloaded for easier use.
     * @param relatedBean Bean related to the root bean
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectSubFieldWithFlowStep(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubFieldWithFlowStep(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    /**
     * Rejects the root bean w/ a global message
     * <p/>
     * Note the reason why the bean failed validation shouldn't refer to a particular
     * field in the entity. To do that, use the rejectField() method.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectWithFlowStep(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectWithFlowStep(errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
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
     * Removes the given Address from the Contact. Does nothing if the
     * Contact does not have the given Address.
     * @param address 
     */
    public void removeAddress(entity.Address address) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).removeAddress(address);
    }
    
    public void removeCommonAddress(entity.Address address) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).removeCommonAddress(address);
    }
    
    public void removeCommonContactByRelationship(typekey.ContactBidiRel relationship, entity.CommonContact contact) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).removeCommonContactByRelationship(relationship, contact);
    }
    
    public void removeCommonContactContact(entity.CommonContactContact contactContact) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods")).removeCommonContactContact(contactContact);
    }
    
    /**
     * 
     * @param contactContact 
     */
    public void removeContactContact(entity.ABContactContact contactContact) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).removeContactContact(contactContact);
    }
    
    /**
     * Removes the given element from the ABContactSpecialistServices array. This is achieved by marking the element for removal.
     */
    public void removeFromABContactSpecialistServices(entity.ABContactSpecialistService element) {
      __getInternalInterface().removeArrayElement(ABCONTACTSPECIALISTSERVICES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ABContactSpecialistServices array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromABContactSpecialistServices(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ABCONTACTSPECIALISTSERVICES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ABOfficialIDs array. This is achieved by marking the element for removal.
     */
    public void removeFromABOfficialIDs(entity.ABOfficialID element) {
      __getInternalInterface().removeArrayElement(ABOFFICIALIDS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ABOfficialIDs array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromABOfficialIDs(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ABOFFICIALIDS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the CategoryScores array. This is achieved by marking the element for removal.
     */
    public void removeFromCategoryScores(entity.ABContactCategoryScore element) {
      __getInternalInterface().removeArrayElement(CATEGORYSCORES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the CategoryScores array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCategoryScores(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CATEGORYSCORES_PROP.get(), elementID);
    }
    
    public void removeFromCommonContactAddresses(entity.CommonContactAddress contactAddress) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).removeFromCommonContactAddresses(contactAddress);
    }
    
    /**
     * Removes the given element from the ContactAddresses array. This is achieved by marking the element for removal.
     */
    public void removeFromContactAddresses(entity.ABContactAddress element) {
      __getInternalInterface().removeArrayElement(CONTACTADDRESSES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ContactAddresses array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromContactAddresses(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CONTACTADDRESSES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the DocumentLinks array. This is achieved by marking the element for removal.
     */
    public void removeFromDocumentLinks(entity.ABContactDocumentLink element) {
      __getInternalInterface().removeArrayElement(DOCUMENTLINKS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the DocumentLinks array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDocumentLinks(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DOCUMENTLINKS_PROP.get(), elementID);
    }
    
    /**
     * Unlink the document from the ABContact by removing the entry in the ABContactDocumentLink join array
     * 
     * It is expected that the document bundle will be committed after the transaction.
     * @param document to unlink from contact; it need not be in the ABContact's bundle
     * @throws IllegalArgumentException if the specified document is not found
     */
    public void removeFromDocuments(entity.Document document) throws java.rmi.RemoteException {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).removeFromDocuments(document);
    }
    
    /**
     * Removes the given element from the EFTRecords array. This is achieved by marking the element for removal.
     */
    public void removeFromEFTRecords(entity.EFTData element) {
      __getInternalInterface().removeArrayElement(EFTRECORDS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the EFTRecords array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromEFTRecords(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(EFTRECORDS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the History array. This is achieved by marking the element for removal.
     */
    public void removeFromHistory(entity.ContactHistory element) {
      __getInternalInterface().removeArrayElement(HISTORY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the History array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromHistory(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(HISTORY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the KeptMergedContactPairs array. This is achieved by marking the element for removal.
     */
    public void removeFromKeptMergedContactPairs(entity.MergedContactPair element) {
      __getInternalInterface().removeArrayElement(KEPTMERGEDCONTACTPAIRS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the KeptMergedContactPairs array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromKeptMergedContactPairs(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(KEPTMERGEDCONTACTPAIRS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PendingContactChanges array. This is achieved by marking the element for removal.
     */
    public void removeFromPendingContactChanges(entity.PendingContactChange element) {
      __getInternalInterface().removeArrayElement(PENDINGCONTACTCHANGES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PendingContactChanges array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPendingContactChanges(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PENDINGCONTACTCHANGES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RetiredMergedContactPairArray array. This is achieved by marking the element for removal.
     */
    public void removeFromRetiredMergedContactPairArray(entity.MergedContactPair element) {
      __getInternalInterface().removeArrayElement(RETIREDMERGEDCONTACTPAIRARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RetiredMergedContactPairArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRetiredMergedContactPairArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RETIREDMERGEDCONTACTPAIRARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the SourceRelatedContacts array. This is achieved by marking the element for removal.
     */
    public void removeFromSourceRelatedContacts(entity.ABContactContact element) {
      __getInternalInterface().removeArrayElement(SOURCERELATEDCONTACTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the SourceRelatedContacts array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromSourceRelatedContacts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SOURCERELATEDCONTACTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Tags array. This is achieved by marking the element for removal.
     */
    public void removeFromTags(entity.ABContactTag element) {
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
     * Removes the given element from the TargetRelatedContacts array. This is achieved by marking the element for removal.
     */
    public void removeFromTargetRelatedContacts(entity.ABContactContact element) {
      __getInternalInterface().removeArrayElement(TARGETRELATEDCONTACTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the TargetRelatedContacts array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTargetRelatedContacts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TARGETRELATEDCONTACTS_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Replaces this contact with keptContact.  This causes this contact to be removed and triggers a merge message
     * rather than a remove message for the replaced contact.
     * @param keptContact the contact that is replacing this one.
     */
    public void replaceWith(entity.ABContact keptContact) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).replaceWith(keptContact);
    }
    
    /**
     * Report an issue that prevents this item from being archived. Usually called by a rule when it has determined that the item is not
     * ready to be archived yet. Unlike skipFromArchiving(), this method does not return immediately and subsequent rules are processed.
     * @param message The reason for skipping.
     */
    public void reportArchiveProblem(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).reportArchiveProblem(message);
    }
    
    public void resetLinkID() {
      ((com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal")).resetLinkID();
    }
    
    /**
     * Reset flag that marks the graph as excluded for archiving
     */
    public void resetToPreArchivedState() {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).resetToPreArchivedState();
    }
    
    public void runArchiveWithTrace() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).runArchiveWithTrace();
    }
    
    public void runCommonArchiveEligibilityRules() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).runCommonArchiveEligibilityRules();
    }
    
    public void runCommonRequiredArchiveEligibilityChecks() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).runCommonRequiredArchiveEligibilityChecks();
    }
    
    /**
     * Schedule this item for archival
     */
    public void scheduleForArchive() {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).scheduleForArchive();
    }
    
    /**
     * Sets the value of the ABContactSpecialistServices field.
     */
    public void setABContactSpecialistServices(entity.ABContactSpecialistService[] value) {
      __getInternalInterface().setFieldValue(ABCONTACTSPECIALISTSERVICES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ABOfficialIDs field.
     */
    public void setABOfficialIDs(entity.ABOfficialID[] value) {
      __getInternalInterface().setFieldValue(ABOFFICIALIDS_PROP.get(), value);
    }
    
    public void setAllCategoryScores(java.util.Map<typekey.ReviewCategory, java.lang.Integer> categoryScores) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).setAllCategoryScores(categoryScores);
    }
    
    /**
     * Sets the value of the ArchiveDate field.
     */
    public void setArchiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ARCHIVEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveFailure field.
     */
    public void setArchiveFailure(entity.ArchiveFailure value) {
      __getInternalInterface().setFieldValue(ARCHIVEFAILURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveFailureDetails field.
     */
    public void setArchiveFailureDetails(entity.ArchiveFailureDetails value) {
      __getInternalInterface().setFieldValue(ARCHIVEFAILUREDETAILS_PROP.get(), value);
    }
    
    public void setArchiveFailureDetailsID(gw.pl.persistence.core.Key value) {
      setFieldValue(ARCHIVEFAILUREDETAILS_PROP.get(), value);
    }
    
    public void setArchiveFailureID(gw.pl.persistence.core.Key value) {
      setFieldValue(ARCHIVEFAILURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveSchemaInfo field.
     */
    public void setArchiveSchemaInfo(entity.UpgradeDatamodelInfo value) {
      __getInternalInterface().setFieldValue(ARCHIVESCHEMAINFO_PROP.get(), value);
    }
    
    public void setArchiveSchemaInfoID(gw.pl.persistence.core.Key value) {
      setFieldValue(ARCHIVESCHEMAINFO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveState field.
     */
    public void setArchiveState(typekey.ArchiveState value) {
      __getInternalInterface().setFieldValue(ARCHIVESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivedEntityPurgeDate field.
     */
    public void setArchivedEntityPurgeDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ARCHIVEDENTITYPURGEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CategoryScores field.
     */
    public void setCategoryScores(entity.ABContactCategoryScore[] value) {
      __getInternalInterface().setFieldValue(CATEGORYSCORES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityDenorm field.
     */
    public void setCityDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the contact related to this contact via the given relationship.
     * @param relationship a "zeroorone" cardinality relationship
     * @param contact the related contact
     * @throws IllegalArgumentException if the given relationship does not have "zeroorone" cardinality
     */
    public void setCommonContactByRelationship(typekey.ContactBidiRel relationship, entity.CommonContact contact) {
      ((com.guidewire.pl.domain.contact.CommonContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.CommonContactPublicMethods")).setCommonContactByRelationship(relationship, contact);
    }
    
    /**
     * Sets the value of the ContactAddresses field.
     */
    public void setContactAddresses(entity.ABContactAddress[] value) {
      __getInternalInterface().setFieldValue(CONTACTADDRESSES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CountryDenorm field.
     */
    public void setCountryDenorm(typekey.Country value) {
      __getInternalInterface().setFieldValue(COUNTRYDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateStatus field.
     */
    public void setCreateStatus(typekey.ContactCreationApprovalStatus value) {
      __getInternalInterface().setFieldValue(CREATESTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DoNotDestroy field.
     */
    public void setDoNotDestroy(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DONOTDESTROY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DocumentLinks field.
     */
    public void setDocumentLinks(entity.ABContactDocumentLink[] value) {
      __getInternalInterface().setFieldValue(DOCUMENTLINKS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EFTRecords field.
     */
    public void setEFTRecords(entity.EFTData[] value) {
      __getInternalInterface().setFieldValue(EFTRECORDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EmailAddress1 field.
     */
    public void setEmailAddress1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EMAILADDRESS1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EmailAddress2 field.
     */
    public void setEmailAddress2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EMAILADDRESS2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExcludeReason field.
     */
    public void setExcludeReason(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXCLUDEREASON_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExcludedFromArchive field.
     */
    public void setExcludedFromArchive(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(EXCLUDEDFROMARCHIVE_PROP.get(), value);
    }
    
    /**
     * 
     * @param callingApp sets a property intended to store the name of the remote application updating this via remote API call.
     */
    public void setExternalUpdateApp(java.lang.String callingApp) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).setExternalUpdateApp(callingApp);
    }
    
    /**
     * 
     * @param externalUser sets a property intended to store the name of the user updating this via remote API call.
     */
    public void setExternalUpdateUser(java.lang.String externalUser) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).setExternalUpdateUser(externalUser);
    }
    
    /**
     * Set the external public ID
     * @param value 
     */
    public void setExternal_PublicID(java.lang.String value) {
      ((gw.ab.addressbook.entity.ABLinkable)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABLinkable")).setExternal_PublicID(value);
    }
    
    /**
     * Set the external unique ID
     * @param value 
     */
    public void setExternal_UniqueID(java.lang.String value) {
      ((gw.ab.addressbook.entity.ABLinkable)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABLinkable")).setExternal_UniqueID(value);
    }
    
    /**
     * Sets the value of the FaxPhone field.
     */
    public void setFaxPhone(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FAXPHONE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FaxPhoneCountry field.
     */
    public void setFaxPhoneCountry(typekey.PhoneCountryCode value) {
      __getInternalInterface().setFieldValue(FAXPHONECOUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FaxPhoneExtension field.
     */
    public void setFaxPhoneExtension(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FAXPHONEEXTENSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the History field.
     */
    public void setHistory(entity.ContactHistory[] value) {
      __getInternalInterface().setFieldValue(HISTORY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HomePhone field.
     */
    public void setHomePhone(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HOMEPHONE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HomePhoneCountry field.
     */
    public void setHomePhoneCountry(typekey.PhoneCountryCode value) {
      __getInternalInterface().setFieldValue(HOMEPHONECOUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HomePhoneExtension field.
     */
    public void setHomePhoneExtension(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HOMEPHONEEXTENSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the KeptMergedContactPairs field.
     */
    public void setKeptMergedContactPairs(entity.MergedContactPair[] value) {
      __getInternalInterface().setFieldValue(KEPTMERGEDCONTACTPAIRS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Keyword field.
     */
    public void setKeyword(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(KEYWORD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the KeywordDenorm field.
     */
    public void setKeywordDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(KEYWORDDENORM_PROP.get(), value);
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
     * Sets the value of the LinkID field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setLinkID(java.lang.String value) {
      ((gw.ab.addressbook.entity.ABLinkable)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABLinkable")).setLinkID(value);
    }
    
    public void setLinkIDIfNotSet() {
      ((com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal")).setLinkIDIfNotSet();
    }
    
    /**
     * Sets the value of the LoadCommandID field.
     */
    public void setLoadCommandID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MinimumCriteriaVerified field.
     */
    public void setMinimumCriteriaVerified(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(MINIMUMCRITERIAVERIFIED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NameDenorm field.
     */
    public void setNameDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAMEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NameKanji field.
     */
    public void setNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAMEKANJI_PROP.get(), value);
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
     * Sets the value of the Notes field.
     */
    public void setNotes(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NOTES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PendingContactChanges field.
     */
    public void setPendingContactChanges(entity.PendingContactChange[] value) {
      __getInternalInterface().setFieldValue(PENDINGCONTACTCHANGES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PendingReindex field.
     */
    public void setPendingReindex(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PENDINGREINDEX_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PostalCodeDenorm field.
     */
    public void setPostalCodeDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Preferred field.
     */
    public void setPreferred(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PREFERRED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreferredCurrency field.
     */
    public void setPreferredCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(PREFERREDCURRENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryAddress field.
     */
    public void setPrimaryAddress(entity.Address value) {
      __getInternalInterface().setFieldValue(PRIMARYADDRESS_PROP.get(), value);
    }
    
    public void setPrimaryAddressID(gw.pl.persistence.core.Key value) {
      setFieldValue(PRIMARYADDRESS_PROP.get(), value);
    }
    
    public void setPrimaryCommonAddress(entity.Address address) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback")).setPrimaryCommonAddress(address);
    }
    
    /**
     * Sets the value of the PrimaryPhone field.
     */
    public void setPrimaryPhone(typekey.PrimaryPhoneType value) {
      __getInternalInterface().setFieldValue(PRIMARYPHONE_PROP.get(), value);
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
     * Sets the root public ID to the passed value.
     * <ul>
     *    <li>Do not change the publicID once it is exposed externally.</li>
     *    <li>The publicID must be unique.</li>
     *    <li>The publicID must not leak information.</li>
     *   </ul>
     * If you do not set the publicID manually, then it is automatically set upon commit.
     * @param value the value to be set as the publicID of the root entity.
     */
    public void setPublicIDOfRoot(java.lang.String value) {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).setPublicIDOfRoot(value);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredMergedContactPair field.
     */
    public void setRetiredMergedContactPair(entity.MergedContactPair value) {
      __getInternalInterface().setFieldValue(RETIREDMERGEDCONTACTPAIR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RetiredMergedContactPairArray field.
     */
    public void setRetiredMergedContactPairArray(entity.MergedContactPair[] value) {
      __getInternalInterface().setFieldValue(RETIREDMERGEDCONTACTPAIRARRAY_PROP.get(), value);
    }
    
    public void setRetiredMergedContactPairID(gw.pl.persistence.core.Key value) {
      setFieldValue(RETIREDMERGEDCONTACTPAIR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    public void setRoot(entity.KeyableBean root) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).setRoot(root);
    }
    
    /**
     * Sets the value of the Score field.
     */
    public void setScore(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SCORE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SourceRelatedContacts field.
     */
    public void setSourceRelatedContacts(entity.ABContactContact[] value) {
      __getInternalInterface().setFieldValue(SOURCERELATEDCONTACTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SpatialPointDenorm field.
     */
    public void setSpatialPointDenorm(gw.api.database.spatial.SpatialPoint value) {
      __getInternalInterface().setFieldValue(SPATIALPOINTDENORM_PROP.get(), value);
    }
    
    public void setSpecialistServices(java.util.List<entity.SpecialistService> services) {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).setSpecialistServices(services);
    }
    
    /**
     * Sets the value of the StateDenorm field.
     */
    public void setStateDenorm(typekey.State value) {
      __getInternalInterface().setFieldValue(STATEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.ABContact value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    public void setTagTypes(typekey.ContactTagType[] contactTagTypes) {
      ((com.guidewire.pl.domain.contact.CommonContactAdapter)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.CommonContactAdapter")).setTagTypes(contactTagTypes);
    }
    
    /**
     * Sets the value of the Tags field.
     */
    public void setTags(entity.ABContactTag[] value) {
      __getInternalInterface().setFieldValue(TAGS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TargetRelatedContacts field.
     */
    public void setTargetRelatedContacts(entity.ABContactContact[] value) {
      __getInternalInterface().setFieldValue(TARGETRELATEDCONTACTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TaxID field.
     */
    public void setTaxID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TAXID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TaxStatus field.
     */
    public void setTaxStatus(typekey.TaxStatus value) {
      __getInternalInterface().setFieldValue(TAXSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateScore field.
     */
    public void setUpdateScore(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(UPDATESCORE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ValidationLevel field.
     */
    public void setValidationLevel(typekey.ValidationLevel value) {
      __getInternalInterface().setFieldValue(VALIDATIONLEVEL_PROP.get(), value);
    }
    
    public void setValidationResult(gw.api.validation.ValidationResult result) {
      ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).setValidationResult(result);
    }
    
    /**
     * Sets the value of the VendorAvailability field.
     */
    public void setVendorAvailability(typekey.VendorAvailabilityType value) {
      __getInternalInterface().setFieldValue(VENDORAVAILABILITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VendorNumber field.
     */
    public void setVendorNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(VENDORNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VendorServicesLoadStatus field.
     */
    public void setVendorServicesLoadStatus(typekey.VendorServicesLoadStatus value) {
      __getInternalInterface().setFieldValue(VENDORSERVICESLOADSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VendorType field.
     */
    public void setVendorType(typekey.VendorType value) {
      __getInternalInterface().setFieldValue(VENDORTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VendorUnavailableMessage field.
     */
    public void setVendorUnavailableMessage(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(VENDORUNAVAILABLEMESSAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VenueType field.
     */
    public void setVenueType(typekey.VenueType value) {
      __getInternalInterface().setFieldValue(VENUETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the W9Received field.
     */
    public void setW9Received(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(W9RECEIVED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the W9ReceivedDate field.
     */
    public void setW9ReceivedDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(W9RECEIVEDDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the W9ValidFrom field.
     */
    public void setW9ValidFrom(java.util.Date value) {
      __getInternalInterface().setFieldValue(W9VALIDFROM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the W9ValidTo field.
     */
    public void setW9ValidTo(java.util.Date value) {
      __getInternalInterface().setFieldValue(W9VALIDTO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WithholdingRate field.
     */
    public void setWithholdingRate(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(WITHHOLDINGRATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WorkPhone field.
     */
    public void setWorkPhone(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(WORKPHONE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WorkPhoneCountry field.
     */
    public void setWorkPhoneCountry(typekey.PhoneCountryCode value) {
      __getInternalInterface().setFieldValue(WORKPHONECOUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WorkPhoneExtension field.
     */
    public void setWorkPhoneExtension(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(WORKPHONEEXTENSION_PROP.get(), value);
    }
    
    public void skipArchivingThisTime(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).skipArchivingThisTime(message);
    }
    
    /**
     * Skip archival of this item. Usually called by a rule when it has determined that the item is not ready to be archived yet.
     * Unlike reportArchiveProblem(), this method returns immediately and no more rules are processed.
     * @param message The reason for skipping.
     */
    public void skipFromArchiving(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).skipFromArchiving(message);
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
    
    public void updateInfoOnArchive() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).updateInfoOnArchive();
    }
    
    /**
     * 
     * @return 
     */
    public void updateScores() {
      ((gw.ab.addressbook.entity.ABContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContact")).updateScores();
    }
    
    public gw.api.validation.ValidationResult validate() {
      return ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).validate();
    }
    
    /**
     * Validates all relationships to make sure they adhere to type and cardinality constraints.
     * @return the results of any validation errors
     */
    public gw.api.locale.InternalValidationResult validateRelationships() {
      return ((com.guidewire.pl.domain.contact.CommonContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.CommonContactPublicMethods")).validateRelationships();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.ab.domain.archiving.Purgeable", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.ab.domain.contact.ABContactPurgeInternal", "com.guidewire.ab.domain.contact.impl.ABContactPurgeInternalImpl");
    config.put("com.guidewire.ab.domain.personaldata.purge.DestructionRootPinnablePublicMethods", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider", "com.guidewire.ab.domain.contact.impl.ABContactPurgeInternalImpl");
    config.put("com.guidewire.pl.domain.contact.CommonContactAdapter", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.pl.domain.contact.CommonContactPublicMethods", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.pl.domain.contact.impl.CommonContactImplCallback", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.pl.domain.extract.RootInfoPublicMethods", "com.guidewire.ab.domain.contact.impl.ABContactPurgeInternalImpl");
    config.put("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods", "com.guidewire.ab.domain.contact.impl.ABContactPurgeInternalImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.domain.validation.ValidatablePublicMethods", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.pl.system.bundle.RemoveCallback", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("gw.ab.addressbook.entity.ABContact", "com.guidewire.ab.domain.addressbook.impl.ABLegalVenueImpl");
    config.put("gw.ab.addressbook.entity.ABLegalVenue", "com.guidewire.ab.domain.addressbook.impl.ABLegalVenueImpl");
    config.put("gw.ab.addressbook.entity.ABLinkable", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("gw.ab.addressbook.entity.ABPlace", "com.guidewire.ab.domain.addressbook.impl.ABLegalVenueImpl");
    config.put("gw.ab.history.entity.HistoryEventContainer", "com.guidewire.ab.domain.addressbook.impl.ABContactImpl");
    config.put("gw.api.config.MetadataVersion", "com.guidewire.ab.domain.contact.impl.ABContactPurgeInternalImpl");
    config.put("gw.api.contact.ABContactPublicMethods", "gw.api.contact.pendingchanges.DefaultABContactPublicMethodsImpl");
    config.put("gw.api.contact.ABContactPurgeMethods", "gw.api.contact.ABContactPurgeMethodsImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ABLegalVenue.class, config);
    com.guidewire._generated.entity.ABLegalVenueInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ABLegalVenue, com.guidewire._generated.entity.ABLegalVenueInternal>() {
      public java.lang.Object getImplementation(entity.ABLegalVenue bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ABLegalVenueInternal getInternalInterface(entity.ABLegalVenue bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ABLegalVenue newEmptyInstance() {
        return new entity.ABLegalVenue((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}