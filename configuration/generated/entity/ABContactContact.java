package entity;

/**
 * ABContactContact
 * The purpose of this table is to avoid a self-referencing foreign key on abcontact, and to allow contacts to     relate to one another in different ways.
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactContact.eti;ABContactContact.eix;ABContactContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ABContactContact")
public class ABContactContact extends com.guidewire.pl.persistence.code.BeanBase implements entity.CommonContactContact, entity.Validatable, entity.ABLinkable, entity.Versionable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ABContactContact> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ABContactContact>("entity.ABContactContact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LINKID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LinkID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> REL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Rel");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RELABCONTACT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RelABContact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RELATEDCONTACTPID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RelatedContactPID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SOURCERELATEDCONTACTPID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SourceRelatedContactPID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SRCABCONTACT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "SrcABContact");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ABContactContactInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> VALIDATION_RESULTS_DYNPROP = com.guidewire.pl.domain.validation.ValidatablePublicMethods.VALIDATION_RESULTS_DYNPROP;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ABContactContact()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ABContactContact(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ABContactContact(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ABContactContactInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ABContactContactInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the appropriate History events depending on what has changed in the ABContactContact.
   */
  public void addHistoryEvents() {
    ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).addHistoryEvents();
  }
  
  public void beforeInsert() {
    ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * This will return the relationship from the supplied contacts perspective
   * @param primaryContact the contact to use
   * @return the relationship type
   */
  public typekey.ContactBidiRel getBidiRel(entity.ABContact primaryContact) {
    return ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).getBidiRel(primaryContact);
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
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
   * This will return the bidirectional relationship type  from the other contact in this relationship
   * to the primaryContact
   * @param otherContact either source or target
   * @param bidiRel relatioship from primaryContact to otherContact
   * @return the bidiRel for the otherContact
   */
  public typekey.ContactBidiRel getOtherBidiRel(entity.CommonContact otherContact, typekey.ContactBidiRel bidiRel) {
    return ((com.guidewire.pl.domain.contact.CommonContactContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.CommonContactContactPublicMethods")).getOtherBidiRel(otherContact, bidiRel);
  }
  
  /**
   * This will return the type of the other contact in this relationship
   * @param primaryContact either source or target
   * @return the IType of the oposite contact
   */
  public gw.lang.reflect.IType getOtherCommonContactType(entity.ABContact primaryContact) {
    return ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).getOtherCommonContactType(primaryContact);
  }
  
  /**
   * This will return the other contact for this link.
   * @param primaryContact the contact to exclude
   * @return the contact
   */
  public entity.ABContact getOtherContact(entity.ABContact primaryContact) {
    return ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).getOtherContact(primaryContact);
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
   * Gets the value of the Rel field.
   * Role
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactRel getRel() {
    return (typekey.ContactRel)__getInternalInterface().getFieldValue(REL_PROP.get());
  }
  
  /**
   * Gets the value of the RelABContact field.
   * Second contact in the relationship.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getRelABContact() {
    return (entity.ABContact)__getInternalInterface().getFieldValue(RELABCONTACT_PROP.get());
  }
  
  /**
   * Gets the value of the RelatedContactPID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRelatedContactPID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RELATEDCONTACTPID_PROP.get());
  }
  
  /**
   * Gets the value of the SourceRelatedContactPID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSourceRelatedContactPID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SOURCERELATEDCONTACTPID_PROP.get());
  }
  
  /**
   * Gets the value of the SrcABContact field.
   * First contact in the relationship.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getSrcABContact() {
    return (entity.ABContact)__getInternalInterface().getFieldValue(SRCABCONTACT_PROP.get());
  }
  
  /**
   * Gets the validation result.
   * @return The validation result.
   */
  public gw.api.validation.ValidationResult getValidationResult() {
    return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
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
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * This will change the relationship
   * @param primaryContact the contact to use
   * @param contactBidiRel the new relationship
   */
  public void setBidiRel(entity.ABContact primaryContact, typekey.ContactBidiRel contactBidiRel) {
    ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).setBidiRel(primaryContact, contactBidiRel);
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
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LinkID field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setLinkID(java.lang.String value) {
    ((gw.ab.addressbook.entity.ABLinkable)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABLinkable")).setLinkID(value);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
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
   * Sets the other contact
   * @param primaryContact the contact to keep the same
   * @param otherContact the contact to replace
   */
  public void setOtherContact(entity.ABContact primaryContact, entity.ABContact otherContact) {
    ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).setOtherContact(primaryContact, otherContact);
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
   * Sets the value of the Rel field.
   */
  public void setRel(typekey.ContactRel value) {
    __getInternalInterface().setFieldValue(REL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RelABContact field.
   */
  public void setRelABContact(entity.ABContact value) {
    __getInternalInterface().setFieldValue(RELABCONTACT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RelatedContactPID field.
   */
  public void setRelatedContactPID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RELATEDCONTACTPID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SourceRelatedContactPID field.
   */
  public void setSourceRelatedContactPID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SOURCERELATEDCONTACTPID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SrcABContact field.
   */
  public void setSrcABContact(entity.ABContact value) {
    __getInternalInterface().setFieldValue(SRCABCONTACT_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ABContactContactInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ABContactContact.this.__getDelegateManager();
    }
    
    /**
     * Adds the appropriate History events depending on what has changed in the ABContactContact.
     */
    public void addHistoryEvents() {
      ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).addHistoryEvents();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * This will return the relationship from the supplied contacts perspective
     * @param primaryContact the contact to use
     * @return the relationship type
     */
    public typekey.ContactBidiRel getBidiRel(entity.ABContact primaryContact) {
      return ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).getBidiRel(primaryContact);
    }
    
    public typekey.ContactBidiRel getCommonBidiRel(entity.CommonContact primaryContact) {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods")).getCommonBidiRel(primaryContact);
    }
    
    public com.guidewire.pl.domain.contact.config.ContactRelationshipConfigFile getContactRelationshipConfig() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).getContactRelationshipConfig();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
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
     * This will return the bidirectional relationship type  from the other contact in this relationship
     * to the primaryContact
     * @param otherContact either source or target
     * @param bidiRel relatioship from primaryContact to otherContact
     * @return the bidiRel for the otherContact
     */
    public typekey.ContactBidiRel getOtherBidiRel(entity.CommonContact otherContact, typekey.ContactBidiRel bidiRel) {
      return ((com.guidewire.pl.domain.contact.CommonContactContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.CommonContactContactPublicMethods")).getOtherBidiRel(otherContact, bidiRel);
    }
    
    public entity.CommonContact getOtherCommonContact(entity.CommonContact primaryContact) {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods")).getOtherCommonContact(primaryContact);
    }
    
    /**
     * This will return the type of the other contact in this relationship
     * @param primaryContact either source or target
     * @return the IType of the oposite contact
     */
    public gw.lang.reflect.IType getOtherCommonContactType(entity.ABContact primaryContact) {
      return ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).getOtherCommonContactType(primaryContact);
    }
    
    public gw.lang.reflect.IType getOtherCommonContactType(entity.CommonContact primaryContact) {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods")).getOtherCommonContactType(primaryContact);
    }
    
    /**
     * This will return the other contact for this link.
     * @param primaryContact the contact to exclude
     * @return the contact
     */
    public entity.ABContact getOtherContact(entity.ABContact primaryContact) {
      return ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).getOtherContact(primaryContact);
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
     * Gets the value of the Rel field.
     * Role
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContactRel getRel() {
      return (typekey.ContactRel)__getInternalInterface().getFieldValue(REL_PROP.get());
    }
    
    /**
     * Gets the value of the RelABContact field.
     * Second contact in the relationship.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContact getRelABContact() {
      return (entity.ABContact)__getInternalInterface().getFieldValue(RELABCONTACT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRelABContactID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RELABCONTACT_PROP.get());
    }
    
    /**
     * Gets the value of the RelatedContactPID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRelatedContactPID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RELATEDCONTACTPID_PROP.get());
    }
    
    public typekey.ContactRel getRelationship() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).getRelationship();
    }
    
    public entity.CommonContact getSourceCommonContact() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).getSourceCommonContact();
    }
    
    public gw.entity.ILinkPropertyInfo getSourceContactProperty() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).getSourceContactProperty();
    }
    
    /**
     * Gets the value of the SourceRelatedContactPID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSourceRelatedContactPID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SOURCERELATEDCONTACTPID_PROP.get());
    }
    
    /**
     * Gets the value of the SrcABContact field.
     * First contact in the relationship.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContact getSrcABContact() {
      return (entity.ABContact)__getInternalInterface().getFieldValue(SRCABCONTACT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getSrcABContactID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(SRCABCONTACT_PROP.get());
    }
    
    public entity.CommonContact getTargetCommonContact() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).getTargetCommonContact();
    }
    
    public gw.entity.ILinkPropertyInfo getTargetContactProperty() {
      return ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).getTargetContactProperty();
    }
    
    /**
     * Gets the validation result.
     * @return The validation result.
     */
    public gw.api.validation.ValidationResult getValidationResult() {
      return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    public void resetLinkID() {
      ((com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal)__getDelegateManager().getImplementation("com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal")).resetLinkID();
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * This will change the relationship
     * @param primaryContact the contact to use
     * @param contactBidiRel the new relationship
     */
    public void setBidiRel(entity.ABContact primaryContact, typekey.ContactBidiRel contactBidiRel) {
      ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).setBidiRel(primaryContact, contactBidiRel);
    }
    
    public void setCommonBidiRel(entity.CommonContact primaryContact, typekey.ContactBidiRel contactBidiRel) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods")).setCommonBidiRel(primaryContact, contactBidiRel);
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
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    public void setOtherCommonContact(entity.CommonContact primaryContact, entity.CommonContact otherContact) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods")).setOtherCommonContact(primaryContact, otherContact);
    }
    
    /**
     * Sets the other contact
     * @param primaryContact the contact to keep the same
     * @param otherContact the contact to replace
     */
    public void setOtherContact(entity.ABContact primaryContact, entity.ABContact otherContact) {
      ((gw.ab.addressbook.entity.ABContactContact)__getDelegateManager().getImplementation("gw.ab.addressbook.entity.ABContactContact")).setOtherContact(primaryContact, otherContact);
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
     * Sets the value of the Rel field.
     */
    public void setRel(typekey.ContactRel value) {
      __getInternalInterface().setFieldValue(REL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RelABContact field.
     */
    public void setRelABContact(entity.ABContact value) {
      __getInternalInterface().setFieldValue(RELABCONTACT_PROP.get(), value);
    }
    
    public void setRelABContactID(gw.pl.persistence.core.Key value) {
      setFieldValue(RELABCONTACT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RelatedContactPID field.
     */
    public void setRelatedContactPID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RELATEDCONTACTPID_PROP.get(), value);
    }
    
    public void setRelationship(typekey.ContactRel contactRel) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).setRelationship(contactRel);
    }
    
    public void setSourceCommonContact(entity.CommonContact contact) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).setSourceCommonContact(contact);
    }
    
    /**
     * Sets the value of the SourceRelatedContactPID field.
     */
    public void setSourceRelatedContactPID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SOURCERELATEDCONTACTPID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SrcABContact field.
     */
    public void setSrcABContact(entity.ABContact value) {
      __getInternalInterface().setFieldValue(SRCABCONTACT_PROP.get(), value);
    }
    
    public void setSrcABContactID(gw.pl.persistence.core.Key value) {
      setFieldValue(SRCABCONTACT_PROP.get(), value);
    }
    
    public void setTargetCommonContact(entity.CommonContact contact) {
      ((com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback")).setTargetCommonContact(contact);
    }
    
    public void setValidationResult(gw.api.validation.ValidationResult result) {
      ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).setValidationResult(result);
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
    
    public gw.api.validation.ValidationResult validate() {
      return ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).validate();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.contact.CommonContactContactPublicMethods", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("com.guidewire.pl.domain.contact.impl.CommonContactContactImplCallback", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("com.guidewire.pl.domain.contact.impl.CommonContactContactInternalMethods", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.validation.ValidatablePublicMethods", "com.guidewire.pl.domain.validation.impl.ValidatableImpl");
    config.put("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods", "com.guidewire.pl.domain.validation.impl.ValidatableImpl");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("com.guidewire.pl.system.bundle.RemoveCallback", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("gw.ab.addressbook.entity.ABContactContact", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("gw.ab.addressbook.entity.ABLinkable", "com.guidewire.ab.domain.addressbook.impl.ABContactContactImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ABContactContact.class, config);
    com.guidewire._generated.entity.ABContactContactInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ABContactContact, com.guidewire._generated.entity.ABContactContactInternal>() {
      public java.lang.Object getImplementation(entity.ABContactContact bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ABContactContactInternal getInternalInterface(entity.ABContactContact bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ABContactContact newEmptyInstance() {
        return new entity.ABContactContact((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}