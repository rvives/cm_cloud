package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContact.eti;ABContact.eix;ABContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactInternal extends com.guidewire._generated.entity.ValidatableInternal, com.guidewire._generated.entity.CommonContactInternal, com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.HistoryEventContainerInternal, com.guidewire._generated.entity.GlobalContactNameInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.RootInfoInternal, com.guidewire._generated.entity.DestructionRootPinnableInternal, com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal, com.guidewire.ab.domain.archiving.Purgeable, com.guidewire.ab.domain.contact.ABContactPurgeInternal, com.guidewire.ab.domain.personaldata.purge.DestructionRootPinnablePublicMethods, com.guidewire.pl.domain.contact.impl.CommonContactImplCallback, com.guidewire.pl.domain.contact.impl.CommonContactInternalMethods, com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.RemoveCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.ab.addressbook.entity.ABContact, gw.ab.history.entity.HistoryEventContainer, gw.api.contact.ABContactPublicMethods, gw.api.contact.ABContactPurgeMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ABCONTACTADDED_EVENT = "ABContactAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ABCONTACTCHANGED_EVENT = "ABContactChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ABCONTACTCREATEDAPPROVED_EVENT = "ABContactCreatedApproved";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ABCONTACTPENDINGCHANGEREJECTED_EVENT = "ABContactPendingChangeRejected";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ABCONTACTREMOVED_EVENT = "ABContactRemoved";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ABCONTACTRESYNC_EVENT = "ABContactResync";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PERSONALDATAPURGE_EVENT = "PersonalDataPurge";
  
  /**
   * Adds the given element to the ABContactSpecialistServices array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToABContactSpecialistServices(entity.ABContactSpecialistService element);
  
  
  /**
   * Adds the given element to the ABOfficialIDs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToABOfficialIDs(entity.ABOfficialID element);
  
  
  /**
   * Adds the given element to the CategoryScores array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCategoryScores(entity.ABContactCategoryScore element);
  
  
  /**
   * Adds the given element to the ContactAddresses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContactAddresses(entity.ABContactAddress element);
  
  
  /**
   * Adds the given element to the DocumentLinks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDocumentLinks(entity.ABContactDocumentLink element);
  
  
  /**
   * Adds the given element to the EFTRecords array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToEFTRecords(entity.EFTData element);
  
  
  /**
   * Adds the given element to the History array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHistory(entity.ContactHistory element);
  
  
  /**
   * Adds the given element to the KeptMergedContactPairs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToKeptMergedContactPairs(entity.MergedContactPair element);
  
  
  /**
   * Adds the given element to the PendingContactChanges array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPendingContactChanges(entity.PendingContactChange element);
  
  
  /**
   * Adds the given element to the RetiredMergedContactPairArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRetiredMergedContactPairArray(entity.MergedContactPair element);
  
  
  /**
   * Adds the given element to the SourceRelatedContacts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSourceRelatedContacts(entity.ABContactContact element);
  
  
  /**
   * Adds the given element to the Tags array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTags(entity.ABContactTag element);
  
  
  /**
   * Adds the given element to the TargetRelatedContacts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTargetRelatedContacts(entity.ABContactContact element);
  
  
  /**
   * Gets the value of the ABContactSpecialistServices field.
   * Array of ABContactSpecialistServices.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactSpecialistService[] getABContactSpecialistServices();
  
  
  /**
   * Gets the value of the ABOfficialIDs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABOfficialID[] getABOfficialIDs();
  
  
  /**
   * Gets the value of the CategoryScores field.
   * List of categories and their scores, associated with this Review.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactCategoryScore[] getCategoryScores();
  
  
  /**
   * Gets the value of the CityDenorm field.
   * Primary Address City, this is searchColumn for City on Address entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityDenorm();
  
  
  /**
   * Gets the value of the ContactAddresses field.
   * Secondary addresses associated with the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactAddress[] getContactAddresses();
  
  
  /**
   * Gets the value of the CountryDenorm field.
   * Primary Address Country, this is denormalized column for Country on Address entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountryDenorm();
  
  
  /**
   * Gets the value of the CreateStatus field.
   * Creation status of this contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactCreationApprovalStatus getCreateStatus();
  
  
  /**
   * Gets the value of the DocumentLinks field.
   * The information about the associated documents to this ABContact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactDocumentLink[] getDocumentLinks();
  
  
  /**
   * Gets the value of the EFTRecords field.
   * Electronic Funds Transfer data for the contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EFTData[] getEFTRecords();
  
  
  /**
   * Gets the value of the EmailAddress1 field.
   * Primary email address associated with the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmailAddress1();
  
  
  /**
   * Gets the value of the EmailAddress2 field.
   * Secondary email address associated with the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmailAddress2();
  
  
  /**
   * Gets the value of the FaxPhone field.
   * Fax number associated with the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFaxPhone();
  
  
  /**
   * Gets the value of the FaxPhoneCountry field.
   * Fax phone country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getFaxPhoneCountry();
  
  
  /**
   * Gets the value of the FaxPhoneExtension field.
   * Fax phone extension.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFaxPhoneExtension();
  
  
  /**
   * Gets the value of the History field.
   * History entries on this contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContactHistory[] getHistory();
  
  
  /**
   * Gets the value of the HomePhone field.
   * Home phone number associated with the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHomePhone();
  
  
  /**
   * Gets the value of the HomePhoneCountry field.
   * Home phone country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getHomePhoneCountry();
  
  
  /**
   * Gets the value of the HomePhoneExtension field.
   * Home phone extension.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHomePhoneExtension();
  
  
  /**
   * Gets the value of the KeptMergedContactPairs field.
   * MergedContactPairs for which this is the KeptContact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MergedContactPair[] getKeptMergedContactPairs();
  
  
  /**
   * Gets the value of the Keyword field.
   * Keyword is the general term for Name (Companies and Places) and LastName (for Persons)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeyword();
  
  
  /**
   * Gets the value of the KeywordDenorm field.
   * denorm field for Keyword
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeywordDenorm();
  
  
  /**
   * Gets the value of the KeywordKanji field.
   * KeywordKanji is the general term for the Kanji Name (Companies and Places) and LastName (for Persons).  Used only for Japanese names and will be null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeywordKanji();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Name field.
   * This contact's name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the NameDenorm field.
   * denorm field for Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameDenorm();
  
  
  /**
   * Gets the value of the Notes field.
   * Notes on this contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNotes();
  
  
  /**
   * Gets the value of the PendingContactChanges field.
   * PendingContactChanges for which this is the associated ABContact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PendingContactChange[] getPendingContactChanges();
  
  
  /**
   * Gets the value of the PostalCodeDenorm field.
   * Primary Address Postal code, this is searchColumn for Postal code on Address entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeDenorm();
  
  
  /**
   * Gets the value of the PreferredCurrency field.
   * The contact's preferred currency.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredCurrency();
  
  
  /**
   * Gets the value of the PrimaryAddress field.
   * Primary address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getPrimaryAddress();
  
  
  public gw.pl.persistence.core.Key getPrimaryAddressID();
  
  
  /**
   * Gets the value of the PrimaryPhone field.
   * Primary phone number type for the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PrimaryPhoneType getPrimaryPhone();
  
  
  /**
   * Gets the value of the RetiredMergedContactPair field.
   * MergedContactPairs for which this is the RetiredContact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MergedContactPair getRetiredMergedContactPair();
  
  
  /**
   * Gets the value of the RetiredMergedContactPairArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MergedContactPair[] getRetiredMergedContactPairArray();
  
  
  public gw.pl.persistence.core.Key getRetiredMergedContactPairID();
  
  
  /**
   * Gets the value of the Score field.
   * Overall review Score for this Contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScore();
  
  
  /**
   * Gets the value of the SourceRelatedContacts field.
   * Contacts that point to this contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactContact[] getSourceRelatedContacts();
  
  
  /**
   * Gets the value of the SpatialPointDenorm field.
   * A denormalized searchColumn for SpatialPoint on Address entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.database.spatial.SpatialPoint getSpatialPointDenorm();
  
  
  /**
   * Gets the value of the StateDenorm field.
   * Primary Address State, this is denormalized column for State on Address entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getStateDenorm();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ABContact getSubtype();
  
  
  /**
   * Gets the value of the Tags field.
   * List of ABContactTags.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactTag[] getTags();
  
  
  /**
   * Gets the value of the TargetRelatedContacts field.
   * Contacts that this Contact points to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactContact[] getTargetRelatedContacts();
  
  
  /**
   * Gets the value of the TaxID field.
   * Tax ID for the contact (SSN or EIN).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTaxID();
  
  
  /**
   * Gets the value of the TaxStatus field.
   * Status of the contact's tax ID; whether it is known or unknown.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TaxStatus getTaxStatus();
  
  
  /**
   * Gets the value of the ValidationLevel field.
   * Validation level that this object passed (if any) before it was stored.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ValidationLevel getValidationLevel();
  
  
  /**
   * Gets the value of the VendorAvailability field.
   * The availability of a vendor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorAvailabilityType getVendorAvailability();
  
  
  /**
   * Gets the value of the VendorNumber field.
   * Vendor number for the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVendorNumber();
  
  
  /**
   * Gets the value of the VendorServicesLoadStatus field.
   * Field to indicate the status of the vendor during vendor import/export
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorServicesLoadStatus getVendorServicesLoadStatus();
  
  
  /**
   * Gets the value of the VendorType field.
   * The company's vendor type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VendorType getVendorType();
  
  
  /**
   * Gets the value of the VendorUnavailableMessage field.
   * Message decribing a vendor's unavailability.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVendorUnavailableMessage();
  
  
  /**
   * Gets the value of the W9ReceivedDate field.
   * W-9 form received date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getW9ReceivedDate();
  
  
  /**
   * Gets the value of the W9ValidFrom field.
   * W-9 valid start date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getW9ValidFrom();
  
  
  /**
   * Gets the value of the W9ValidTo field.
   * W-9 valid to date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getW9ValidTo();
  
  
  /**
   * Gets the value of the WithholdingRate field.
   * The contact's backup withholding rate, or null if backup withholding is not required or is not known to be required.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getWithholdingRate();
  
  
  /**
   * Gets the value of the WorkPhone field.
   * Business phone number associated with the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWorkPhone();
  
  
  /**
   * Gets the value of the WorkPhoneCountry field.
   * Work phone country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getWorkPhoneCountry();
  
  
  /**
   * Gets the value of the WorkPhoneExtension field.
   * Business phone extension.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWorkPhoneExtension();
  
  
  /**
   * Gets the value of the MinimumCriteriaVerified field.
   * Whether this entity has been verified by the VerifyMinimumCriteria batch process.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMinimumCriteriaVerified();
  
  
  /**
   * Gets the value of the Preferred field.
   * Whether the vendor is a preferred vendor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPreferred();
  
  
  /**
   * Gets the value of the UpdateScore field.
   * Flag indicating the score needs to be updated because of new or deleted ReviewSummaries.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isUpdateScore();
  
  
  /**
   * Gets the value of the W9Received field.
   * Has W-9 form been received
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isW9Received();
  
  
  /**
   * Removes the given element from the ABContactSpecialistServices array. This is achieved by marking the element for removal.
   */
  public void removeFromABContactSpecialistServices(entity.ABContactSpecialistService element);
  
  
  /**
   * Removes the given element from the ABContactSpecialistServices array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromABContactSpecialistServices(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ABOfficialIDs array. This is achieved by marking the element for removal.
   */
  public void removeFromABOfficialIDs(entity.ABOfficialID element);
  
  
  /**
   * Removes the given element from the ABOfficialIDs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromABOfficialIDs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CategoryScores array. This is achieved by marking the element for removal.
   */
  public void removeFromCategoryScores(entity.ABContactCategoryScore element);
  
  
  /**
   * Removes the given element from the CategoryScores array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCategoryScores(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ContactAddresses array. This is achieved by marking the element for removal.
   */
  public void removeFromContactAddresses(entity.ABContactAddress element);
  
  
  /**
   * Removes the given element from the ContactAddresses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContactAddresses(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the DocumentLinks array. This is achieved by marking the element for removal.
   */
  public void removeFromDocumentLinks(entity.ABContactDocumentLink element);
  
  
  /**
   * Removes the given element from the DocumentLinks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDocumentLinks(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the EFTRecords array. This is achieved by marking the element for removal.
   */
  public void removeFromEFTRecords(entity.EFTData element);
  
  
  /**
   * Removes the given element from the EFTRecords array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromEFTRecords(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the History array. This is achieved by marking the element for removal.
   */
  public void removeFromHistory(entity.ContactHistory element);
  
  
  /**
   * Removes the given element from the History array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHistory(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the KeptMergedContactPairs array. This is achieved by marking the element for removal.
   */
  public void removeFromKeptMergedContactPairs(entity.MergedContactPair element);
  
  
  /**
   * Removes the given element from the KeptMergedContactPairs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromKeptMergedContactPairs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PendingContactChanges array. This is achieved by marking the element for removal.
   */
  public void removeFromPendingContactChanges(entity.PendingContactChange element);
  
  
  /**
   * Removes the given element from the PendingContactChanges array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPendingContactChanges(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RetiredMergedContactPairArray array. This is achieved by marking the element for removal.
   */
  public void removeFromRetiredMergedContactPairArray(entity.MergedContactPair element);
  
  
  /**
   * Removes the given element from the RetiredMergedContactPairArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRetiredMergedContactPairArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the SourceRelatedContacts array. This is achieved by marking the element for removal.
   */
  public void removeFromSourceRelatedContacts(entity.ABContactContact element);
  
  
  /**
   * Removes the given element from the SourceRelatedContacts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSourceRelatedContacts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Tags array. This is achieved by marking the element for removal.
   */
  public void removeFromTags(entity.ABContactTag element);
  
  
  /**
   * Removes the given element from the Tags array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTags(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TargetRelatedContacts array. This is achieved by marking the element for removal.
   */
  public void removeFromTargetRelatedContacts(entity.ABContactContact element);
  
  
  /**
   * Removes the given element from the TargetRelatedContacts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTargetRelatedContacts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ABContactSpecialistServices field.
   */
  public void setABContactSpecialistServices(entity.ABContactSpecialistService[] value);
  
  
  /**
   * Sets the value of the ABOfficialIDs field.
   */
  public void setABOfficialIDs(entity.ABOfficialID[] value);
  
  
  /**
   * Sets the value of the CategoryScores field.
   */
  public void setCategoryScores(entity.ABContactCategoryScore[] value);
  
  
  /**
   * Sets the value of the CityDenorm field.
   */
  public void setCityDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the ContactAddresses field.
   */
  public void setContactAddresses(entity.ABContactAddress[] value);
  
  
  /**
   * Sets the value of the CountryDenorm field.
   */
  public void setCountryDenorm(typekey.Country value);
  
  
  /**
   * Sets the value of the CreateStatus field.
   */
  public void setCreateStatus(typekey.ContactCreationApprovalStatus value);
  
  
  /**
   * Sets the value of the DocumentLinks field.
   */
  public void setDocumentLinks(entity.ABContactDocumentLink[] value);
  
  
  /**
   * Sets the value of the EFTRecords field.
   */
  public void setEFTRecords(entity.EFTData[] value);
  
  
  /**
   * Sets the value of the EmailAddress1 field.
   */
  public void setEmailAddress1(java.lang.String value);
  
  
  /**
   * Sets the value of the EmailAddress2 field.
   */
  public void setEmailAddress2(java.lang.String value);
  
  
  /**
   * Sets the value of the FaxPhone field.
   */
  public void setFaxPhone(java.lang.String value);
  
  
  /**
   * Sets the value of the FaxPhoneCountry field.
   */
  public void setFaxPhoneCountry(typekey.PhoneCountryCode value);
  
  
  /**
   * Sets the value of the FaxPhoneExtension field.
   */
  public void setFaxPhoneExtension(java.lang.String value);
  
  
  /**
   * Sets the value of the History field.
   */
  public void setHistory(entity.ContactHistory[] value);
  
  
  /**
   * Sets the value of the HomePhone field.
   */
  public void setHomePhone(java.lang.String value);
  
  
  /**
   * Sets the value of the HomePhoneCountry field.
   */
  public void setHomePhoneCountry(typekey.PhoneCountryCode value);
  
  
  /**
   * Sets the value of the HomePhoneExtension field.
   */
  public void setHomePhoneExtension(java.lang.String value);
  
  
  /**
   * Sets the value of the KeptMergedContactPairs field.
   */
  public void setKeptMergedContactPairs(entity.MergedContactPair[] value);
  
  
  /**
   * Sets the value of the Keyword field.
   */
  public void setKeyword(java.lang.String value);
  
  
  /**
   * Sets the value of the KeywordDenorm field.
   */
  public void setKeywordDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the KeywordKanji field.
   */
  public void setKeywordKanji(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the MinimumCriteriaVerified field.
   */
  public void setMinimumCriteriaVerified(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the NameDenorm field.
   */
  public void setNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(java.lang.String value);
  
  
  /**
   * Sets the value of the PendingContactChanges field.
   */
  public void setPendingContactChanges(entity.PendingContactChange[] value);
  
  
  /**
   * Sets the value of the PostalCodeDenorm field.
   */
  public void setPostalCodeDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Preferred field.
   */
  public void setPreferred(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PreferredCurrency field.
   */
  public void setPreferredCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the PrimaryAddress field.
   */
  public void setPrimaryAddress(entity.Address value);
  
  
  public void setPrimaryAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PrimaryPhone field.
   */
  public void setPrimaryPhone(typekey.PrimaryPhoneType value);
  
  
  /**
   * Sets the value of the RetiredMergedContactPair field.
   */
  public void setRetiredMergedContactPair(entity.MergedContactPair value);
  
  
  /**
   * Sets the value of the RetiredMergedContactPairArray field.
   */
  public void setRetiredMergedContactPairArray(entity.MergedContactPair[] value);
  
  
  public void setRetiredMergedContactPairID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SourceRelatedContacts field.
   */
  public void setSourceRelatedContacts(entity.ABContactContact[] value);
  
  
  /**
   * Sets the value of the SpatialPointDenorm field.
   */
  public void setSpatialPointDenorm(gw.api.database.spatial.SpatialPoint value);
  
  
  /**
   * Sets the value of the StateDenorm field.
   */
  public void setStateDenorm(typekey.State value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ABContact value);
  
  
  /**
   * Sets the value of the Tags field.
   */
  public void setTags(entity.ABContactTag[] value);
  
  
  /**
   * Sets the value of the TargetRelatedContacts field.
   */
  public void setTargetRelatedContacts(entity.ABContactContact[] value);
  
  
  /**
   * Sets the value of the TaxID field.
   */
  public void setTaxID(java.lang.String value);
  
  
  /**
   * Sets the value of the TaxStatus field.
   */
  public void setTaxStatus(typekey.TaxStatus value);
  
  
  /**
   * Sets the value of the UpdateScore field.
   */
  public void setUpdateScore(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ValidationLevel field.
   */
  public void setValidationLevel(typekey.ValidationLevel value);
  
  
  /**
   * Sets the value of the VendorAvailability field.
   */
  public void setVendorAvailability(typekey.VendorAvailabilityType value);
  
  
  /**
   * Sets the value of the VendorNumber field.
   */
  public void setVendorNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the VendorServicesLoadStatus field.
   */
  public void setVendorServicesLoadStatus(typekey.VendorServicesLoadStatus value);
  
  
  /**
   * Sets the value of the VendorType field.
   */
  public void setVendorType(typekey.VendorType value);
  
  
  /**
   * Sets the value of the VendorUnavailableMessage field.
   */
  public void setVendorUnavailableMessage(java.lang.String value);
  
  
  /**
   * Sets the value of the W9Received field.
   */
  public void setW9Received(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the W9ReceivedDate field.
   */
  public void setW9ReceivedDate(java.util.Date value);
  
  
  /**
   * Sets the value of the W9ValidFrom field.
   */
  public void setW9ValidFrom(java.util.Date value);
  
  
  /**
   * Sets the value of the W9ValidTo field.
   */
  public void setW9ValidTo(java.util.Date value);
  
  
  /**
   * Sets the value of the WithholdingRate field.
   */
  public void setWithholdingRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the WorkPhone field.
   */
  public void setWorkPhone(java.lang.String value);
  
  
  /**
   * Sets the value of the WorkPhoneCountry field.
   */
  public void setWorkPhoneCountry(typekey.PhoneCountryCode value);
  
  
  /**
   * Sets the value of the WorkPhoneExtension field.
   */
  public void setWorkPhoneExtension(java.lang.String value);
  
  
  
}