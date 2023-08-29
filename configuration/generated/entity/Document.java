package entity;

/**
 * Document
 * Internal representation of a physical or electronic document.
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Document.eti;Document.eix;Document.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "Document")
public class Document extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.EventAware, com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Document> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Document>("entity.Document");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ABCONTACTDOCUMENTLINKS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ABContactDocumentLinks");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUTHOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Author");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUTHORDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AuthorDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DMS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DMS");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATECREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEMODIFIED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateModified");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DOCUID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DocUID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DOCUMENTIDENTIFIER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DocumentIdentifier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DOCUMENTIDENTIFIERDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DocumentIdentifierDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INBOUND_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Inbound");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LANGUAGE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Language");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MIMETYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MimeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAMEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NameDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OBSOLETE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Obsolete");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PENDINGDOCUID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PendingDocUID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PORTALSECURITYREALM_EXT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PortalSecurityRealm_Ext");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RECIPIENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Recipient");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SECTION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Section");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SECURITYTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SecurityType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Type");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.DocumentInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  public static final java.lang.String DOCUMENTADDED_EVENT = "DocumentAdded";
  
  public static final java.lang.String DOCUMENTCHANGED_EVENT = "DocumentChanged";
  
  public static final java.lang.String DOCUMENTREMOVED_EVENT = "DocumentRemoved";
  
  public static final java.lang.String DOCUMENTSTORE_EVENT = "DocumentStore";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public Document()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public Document(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected Document(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.DocumentInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.DocumentInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  public void addToABContacts(entity.ABContact value) throws gw.api.webservice.exception.DuplicateKeyException {
    ((com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods")).addToABContacts(value);
  }
  
  public void addToDocumentsFor(entity.KeyableBean joinedBean, gw.entity.ILinkPropertyInfo docJoinTableLink, gw.entity.ILinkPropertyInfo joinedBeanJoinTableLink, gw.entity.IArrayPropertyInfo docArrayPropertyInfo) throws gw.api.webservice.exception.DuplicateKeyException {
    ((com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods")).addToDocumentsFor(joinedBean, docJoinTableLink, joinedBeanJoinTableLink, docArrayPropertyInfo);
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
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * If true, the document will be persisted
   * @return true if the document will be persisted
   */
  public boolean doesNotRequirePersistence() {
    return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).doesNotRequirePersistence();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactDocumentLink[] getABContactDocumentLinks() {
    return (entity.ABContactDocumentLink[])__getInternalInterface().getFieldValue(ABCONTACTDOCUMENTLINKS_PROP.get());
  }
  
  public entity.ABContact[] getABContacts() {
    return ((com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods")).getABContacts();
  }
  
  /**
   * Gets the value of the Author field.
   * Name of the person who created the document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAuthor() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AUTHOR_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAuthorDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AUTHORDENORM_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
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
  
  /**
   * Gets the value of the DateCreated field.
   * Date and time the document was created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateCreated() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATECREATED_PROP.get());
  }
  
  /**
   * Gets the value of the DateModified field.
   * Date and time the document was last modified.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateModified() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATEMODIFIED_PROP.get());
  }
  
  /**
   * Gets the value of the Description field.
   * Description of the document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the document link id for this document
   * @return the document link id
   */
  public java.lang.String getDocLinkID() {
    return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).getDocLinkID();
  }
  
  /**
   * Gets the value of the DocUID field.
   * The Unique Identifier (UID) for this document.     The format of this UID is specific to the deployed Document Management System (DMS), and is passed to the configured IDocumentContentSource implementation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocUID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUID_PROP.get());
  }
  
  /**
   * Gets the value of the DocumentIdentifier field.
   * Short human-readable identifier for the document, often used as an extra storage location for form codes, when name and documenttype are inadequate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentIdentifier() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUMENTIDENTIFIER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentIdentifierDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUMENTIDENTIFIERDENORM_PROP.get());
  }
  
  /**
   * Gets the language in which the document was created in.  A null value means
   * that it is not clear which language the document was created in.  Most possibly,
   * it is the default locale of the application.
   * @return language
   */
  public gw.i18n.ILocale getDocumentLanguage() {
    return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).getDocumentLanguage();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Returns the name of an icon image to represent this document. The result is based on the document's mime type.
   * @return a string identifying an icon for this document
   */
  public java.lang.String getIcon() {
    return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).getIcon();
  }
  
  public entity.KeyableBean[] getJoined(gw.entity.IArrayPropertyInfo joinArrayInDoc, gw.entity.ILinkPropertyInfo iLinkPropertyInfo) {
    return ((com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods")).getJoined(joinArrayInDoc, iLinkPropertyInfo);
  }
  
  /**
   * Gets the value of the Language field.
   * The language in which this document is created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage() {
    return (typekey.LanguageType)__getInternalInterface().getFieldValue(LANGUAGE_PROP.get());
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
   * Gets the locale in which the document was created in.  A null value means
   * that it is not clear which language the document was created in.  Most possibly,
   * it is the default locale of the application.
   * @return locale
   * @deprecated see getDocumentLanguage() instead
   */
  public gw.i18n.ILocale getLocale() {
    return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).getLocale();
  }
  
  /**
   * Gets the value of the MimeType field.
   * The MIME type of this document; for example, application/msword for a Microsoft Word document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMimeType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MIMETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Name field.
   * Human-readable name of the document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the PendingDocUID field.
   * The document is pending, and it's pending storage has Unique Identifier (UID).     The format of this UID is specific to the IDCS implementation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPendingDocUID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PENDINGDOCUID_PROP.get());
  }
  
  /**
   * Gets the value of the PortalSecurityRealm_Ext field.
   * The security realm of the portal user which created the document. A realm identifies a collection of users and groups.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPortalSecurityRealm_Ext() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PORTALSECURITYREALM_EXT_PROP.get());
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
   * Gets the value of the Recipient field.
   * Name of the intended recipient of the document (if any).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRecipient() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RECIPIENT_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the Section field.
   * The section to which this document belongs, if any.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentSection getSection() {
    return (typekey.DocumentSection)__getInternalInterface().getFieldValue(SECTION_PROP.get());
  }
  
  /**
   * Gets the value of the SecurityType field.
   * Type of document used for access-restriction purposes, in conjunction with the information in security-config.xml.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentSecurityType getSecurityType() {
    return (typekey.DocumentSecurityType)__getInternalInterface().getFieldValue(SECURITYTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Status field.
   * The current status of the document, if any.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentStatusType getStatus() {
    return (typekey.DocumentStatusType)__getInternalInterface().getFieldValue(STATUS_PROP.get());
  }
  
  /**
   * Gets the value of the Type field.
   * The specific type of the document, if any.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentType getType() {
    return (typekey.DocumentType)__getInternalInterface().getFieldValue(TYPE_PROP.get());
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
  
  public boolean hasLinkToABContact(entity.ABContact value) {
    return ((com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods")).hasLinkToABContact(value);
  }
  
  /**
   * Returns the the cached status about whether the document content exists in the document content source.
   * On the first call on the entity instance, it will call into document content source plugin to get the status
   * and cache the result for future calls
   * @throws com.guidewire.pl.system.integration.plugins.PluginException if any exception occurs during call to the plugin
   * @return true if the document content exists in the document content source
   */
  public boolean isCachedContentExists() throws com.guidewire.pl.system.integration.plugins.PluginException {
    return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).isCachedContentExists();
  }
  
  /**
   * Gets the value of the DMS field.
   * Whether this document has content stored in a Document Management System.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDMS() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DMS_PROP.get());
  }
  
  /**
   * Gets the value of the Inbound field.
   * Whether the document is an inbound, outbound, or stationary (null) document
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInbound() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INBOUND_PROP.get());
  }
  
  public boolean isLinkedTo(entity.KeyableBean joinedBean, gw.entity.ILinkPropertyInfo docJoinTableLink, gw.entity.ILinkPropertyInfo joinedBeanJoinTableLink, gw.entity.IArrayPropertyInfo docArrayPropertyInfo) {
    return ((com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods")).isLinkedTo(joinedBean, docJoinTableLink, joinedBeanJoinTableLink, docArrayPropertyInfo);
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
   * Gets the value of the Obsolete field.
   * If true, the information in the document can no longer be relied upon to be up-to-date and relevant. This is often used instead of deletion to preserve history.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isObsolete() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(OBSOLETE_PROP.get());
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
  
  /**
   * If true, the document metadata is stored in an IDMS
   * @return true if the document metadata came from an IDMS
   */
  public boolean isRetrievedFromIDMS() {
    return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).isRetrievedFromIDMS();
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
  
  public void removeFromABContacts(entity.ABContact value) {
    ((com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods")).removeFromABContacts(value);
  }
  
  public void removeFromDocumentsFor(entity.KeyableBean joinedBean, gw.entity.ILinkPropertyInfo docJoinTableLink, gw.entity.ILinkPropertyInfo joinedBeanJoinTableLink, gw.entity.IArrayPropertyInfo docArrayPropertyInfo) {
    ((com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods")).removeFromDocumentsFor(joinedBean, docJoinTableLink, joinedBeanJoinTableLink, docArrayPropertyInfo);
  }
  
  /**
   * Whether this document has been flagged to require saving.  I.e., the document was
   * retrieved from the DMS, but was changed so needs to be written out.  Note that when retrieved
   * it will be flagged as non persisting, and as far as the entity system is concerned initial save.
   * @return requires persisting only to DMS
   */
  public boolean requiresSavingToDMS() {
    return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).requiresSavingToDMS();
  }
  
  /**
   * Sets the value of the ABContactDocumentLinks field.
   */
  private void setABContactDocumentLinks(entity.ABContactDocumentLink[] value) {
    __getInternalInterface().setFieldValue(ABCONTACTDOCUMENTLINKS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(AUTHOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuthorDenorm field.
   */
  private void setAuthorDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(AUTHORDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DMS field.
   */
  public void setDMS(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DMS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DateCreated field.
   */
  public void setDateCreated(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATECREATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DateModified field.
   */
  public void setDateModified(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATEMODIFIED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DocUID field.
   */
  public void setDocUID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DOCUID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DocumentIdentifier field.
   */
  public void setDocumentIdentifier(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DOCUMENTIDENTIFIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DocumentIdentifierDenorm field.
   */
  private void setDocumentIdentifierDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DOCUMENTIDENTIFIERDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the language in which the document is created in.  This should not be changed once the
   * document is stored
   * @param language the the language
   */
  public void setDocumentLanguage(gw.i18n.ILocale language) {
    ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setDocumentLanguage(language);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Inbound field.
   */
  public void setInbound(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INBOUND_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value) {
    __getInternalInterface().setFieldValue(LANGUAGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
  }
  
  /**
   * Sets the locale in which the document is created in.  This should not be changed once the
   * document is stored
   * @param locale the locale
   * @deprecated use set language instead
   */
  public void setLocale(gw.i18n.ILocale locale) {
    ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setLocale(locale);
  }
  
  /**
   * Sets the value of the MimeType field.
   */
  public void setMimeType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MIMETYPE_PROP.get(), value);
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
  private void setNameDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAMEDENORM_PROP.get(), value);
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
   * Sets the value of the Obsolete field.
   */
  public void setObsolete(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(OBSOLETE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PendingDocUID field.
   */
  public void setPendingDocUID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PENDINGDOCUID_PROP.get(), value);
  }
  
  /**
   * 
   * @param persisted when false (default is true), the document will not be persisted
   * This needs to be visible to rules so that certain utilities which interact with
   * IDocumentProduction implementations can set it so that things work correctly
   */
  public void setPersistenceRequired(boolean persisted) {
    ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setPersistenceRequired(persisted);
  }
  
  /**
   * Sets the value of the PortalSecurityRealm_Ext field.
   */
  public void setPortalSecurityRealm_Ext(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PORTALSECURITYREALM_EXT_PROP.get(), value);
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
   * Sets the value of the Recipient field.
   */
  public void setRecipient(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RECIPIENT_PROP.get(), value);
  }
  
  /**
   * Whether this document has been flagged to require saving.  I.e., the document was
   * retrieved from the DMS, but was changed so needs to be written out.  Note that when retrieved
   * it will be flagged as non persisting, and as far as the entity system is concerned initial save.
   * @param value whether this document requires persisting to DMS
   */
  public void setRequiresSavingToDMS(boolean value) {
    ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setRequiresSavingToDMS(value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Marks the document as having its metadata retrieved from an IDMS
   * Also marks the document as initially not requiring persistence.
   */
  public void setRetrievedFromIDMS() {
    ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setRetrievedFromIDMS();
  }
  
  /**
   * Sets the value of the Section field.
   */
  public void setSection(typekey.DocumentSection value) {
    __getInternalInterface().setFieldValue(SECTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SecurityType field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setSecurityType(typekey.DocumentSecurityType value) {
    ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setSecurityType(value);
  }
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.DocumentStatusType value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.DocumentType value) {
    __getInternalInterface().setFieldValue(TYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.DocumentInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.Document.this.__getDelegateManager();
    }
    
    public boolean addDocumentToDocumentSource(java.io.InputStream inputStream) throws com.guidewire.pl.system.integration.plugins.PluginException {
      return ((com.guidewire.pl.domain.document.impl.DocumentInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.impl.DocumentInternalMethods")).addDocumentToDocumentSource(inputStream);
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
     * Adds the given element to the ABContactDocumentLinks array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToABContactDocumentLinks(entity.ABContactDocumentLink element) {
      __getInternalInterface().addArrayElement(ABCONTACTDOCUMENTLINKS_PROP.get(), element);
    }
    
    public void addToABContacts(entity.ABContact value) throws gw.api.webservice.exception.DuplicateKeyException {
      ((com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods")).addToABContacts(value);
    }
    
    public void addToDocumentsFor(entity.KeyableBean joinedBean, gw.entity.ILinkPropertyInfo docJoinTableLink, gw.entity.ILinkPropertyInfo joinedBeanJoinTableLink, gw.entity.IArrayPropertyInfo docArrayPropertyInfo) throws gw.api.webservice.exception.DuplicateKeyException {
      ((com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods")).addToDocumentsFor(joinedBean, docJoinTableLink, joinedBeanJoinTableLink, docArrayPropertyInfo);
    }
    
    public void afterDatabaseWrite() {
      ((com.guidewire.pl.system.bundle.CommitCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.CommitCallback")).afterDatabaseWrite();
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
    
    /**
     * If true, the document will be persisted
     * @return true if the document will be persisted
     */
    public boolean doesNotRequirePersistence() {
      return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).doesNotRequirePersistence();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
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
     * Gets the value of the ABContactDocumentLinks field.
     * Links to ABContact for this Document
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ABContactDocumentLink[] getABContactDocumentLinks() {
      return (entity.ABContactDocumentLink[])__getInternalInterface().getFieldValue(ABCONTACTDOCUMENTLINKS_PROP.get());
    }
    
    public entity.ABContact[] getABContacts() {
      return ((com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods")).getABContacts();
    }
    
    /**
     * Gets the value of the Author field.
     * Name of the person who created the document.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAuthor() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AUTHOR_PROP.get());
    }
    
    /**
     * Gets the value of the AuthorDenorm field.
     * denorm field for Author
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAuthorDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AUTHORDENORM_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
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
     * Gets the value of the DateCreated field.
     * Date and time the document was created.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateCreated() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATECREATED_PROP.get());
    }
    
    /**
     * Gets the value of the DateModified field.
     * Date and time the document was last modified.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateModified() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATEMODIFIED_PROP.get());
    }
    
    /**
     * Gets the value of the Description field.
     * Description of the document.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the document link id for this document
     * @return the document link id
     */
    public java.lang.String getDocLinkID() {
      return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).getDocLinkID();
    }
    
    /**
     * Gets the value of the DocUID field.
     * The Unique Identifier (UID) for this document.     The format of this UID is specific to the deployed Document Management System (DMS), and is passed to the configured IDocumentContentSource implementation.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDocUID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUID_PROP.get());
    }
    
    /**
     * Gets the value of the DocumentIdentifier field.
     * Short human-readable identifier for the document, often used as an extra storage location for form codes, when name and documenttype are inadequate.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDocumentIdentifier() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUMENTIDENTIFIER_PROP.get());
    }
    
    /**
     * Gets the value of the DocumentIdentifierDenorm field.
     * denorm field for DocumentIdentifier
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDocumentIdentifierDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUMENTIDENTIFIERDENORM_PROP.get());
    }
    
    /**
     * Gets the language in which the document was created in.  A null value means
     * that it is not clear which language the document was created in.  Most possibly,
     * it is the default locale of the application.
     * @return language
     */
    public gw.i18n.ILocale getDocumentLanguage() {
      return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).getDocumentLanguage();
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    /**
     * Returns the name of an icon image to represent this document. The result is based on the document's mime type.
     * @return a string identifying an icon for this document
     */
    public java.lang.String getIcon() {
      return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).getIcon();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    public entity.KeyableBean[] getJoined(gw.entity.IArrayPropertyInfo joinArrayInDoc, gw.entity.ILinkPropertyInfo iLinkPropertyInfo) {
      return ((com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods")).getJoined(joinArrayInDoc, iLinkPropertyInfo);
    }
    
    /**
     * Gets the value of the Language field.
     * The language in which this document is created.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LanguageType getLanguage() {
      return (typekey.LanguageType)__getInternalInterface().getFieldValue(LANGUAGE_PROP.get());
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
     * Gets the locale in which the document was created in.  A null value means
     * that it is not clear which language the document was created in.  Most possibly,
     * it is the default locale of the application.
     * @return locale
     * @deprecated see getDocumentLanguage() instead
     */
    public gw.i18n.ILocale getLocale() {
      return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).getLocale();
    }
    
    /**
     * Gets the value of the MimeType field.
     * The MIME type of this document; for example, application/msword for a Microsoft Word document.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMimeType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MIMETYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Name field.
     * Human-readable name of the document.
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
     * Gets the value of the PendingDocUID field.
     * The document is pending, and it's pending storage has Unique Identifier (UID).     The format of this UID is specific to the IDCS implementation.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPendingDocUID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PENDINGDOCUID_PROP.get());
    }
    
    /**
     * Gets the value of the PortalSecurityRealm_Ext field.
     * The security realm of the portal user which created the document. A realm identifies a collection of users and groups.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPortalSecurityRealm_Ext() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PORTALSECURITYREALM_EXT_PROP.get());
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
     * Gets the value of the Recipient field.
     * Name of the intended recipient of the document (if any).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRecipient() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RECIPIENT_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the Section field.
     * The section to which this document belongs, if any.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DocumentSection getSection() {
      return (typekey.DocumentSection)__getInternalInterface().getFieldValue(SECTION_PROP.get());
    }
    
    /**
     * Gets the value of the SecurityType field.
     * Type of document used for access-restriction purposes, in conjunction with the information in security-config.xml.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DocumentSecurityType getSecurityType() {
      return (typekey.DocumentSecurityType)__getInternalInterface().getFieldValue(SECURITYTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Status field.
     * The current status of the document, if any.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DocumentStatusType getStatus() {
      return (typekey.DocumentStatusType)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    /**
     * Gets the value of the Type field.
     * The specific type of the document, if any.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DocumentType getType() {
      return (typekey.DocumentType)__getInternalInterface().getFieldValue(TYPE_PROP.get());
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
    
    public boolean hasLinkToABContact(entity.ABContact value) {
      return ((com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods")).hasLinkToABContact(value);
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Returns the the cached status about whether the document content exists in the document content source.
     * On the first call on the entity instance, it will call into document content source plugin to get the status
     * and cache the result for future calls
     * @throws com.guidewire.pl.system.integration.plugins.PluginException if any exception occurs during call to the plugin
     * @return true if the document content exists in the document content source
     */
    public boolean isCachedContentExists() throws com.guidewire.pl.system.integration.plugins.PluginException {
      return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).isCachedContentExists();
    }
    
    /**
     * Gets the value of the DMS field.
     * Whether this document has content stored in a Document Management System.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDMS() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DMS_PROP.get());
    }
    
    /**
     * Gets the value of the Inbound field.
     * Whether the document is an inbound, outbound, or stationary (null) document
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInbound() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INBOUND_PROP.get());
    }
    
    public boolean isLinkedTo(entity.KeyableBean joinedBean, gw.entity.ILinkPropertyInfo docJoinTableLink, gw.entity.ILinkPropertyInfo joinedBeanJoinTableLink, gw.entity.IArrayPropertyInfo docArrayPropertyInfo) {
      return ((com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods")).isLinkedTo(joinedBean, docJoinTableLink, joinedBeanJoinTableLink, docArrayPropertyInfo);
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
     * Gets the value of the Obsolete field.
     * If true, the information in the document can no longer be relied upon to be up-to-date and relevant. This is often used instead of deletion to preserve history.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isObsolete() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(OBSOLETE_PROP.get());
    }
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
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
    
    /**
     * If true, the document metadata is stored in an IDMS
     * @return true if the document metadata came from an IDMS
     */
    public boolean isRetrievedFromIDMS() {
      return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).isRetrievedFromIDMS();
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
    
    /**
     * Removes the given element from the ABContactDocumentLinks array. This is achieved by marking the element for removal.
     */
    public void removeFromABContactDocumentLinks(entity.ABContactDocumentLink element) {
      __getInternalInterface().removeArrayElement(ABCONTACTDOCUMENTLINKS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ABContactDocumentLinks array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromABContactDocumentLinks(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ABCONTACTDOCUMENTLINKS_PROP.get(), elementID);
    }
    
    public void removeFromABContacts(entity.ABContact value) {
      ((com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods")).removeFromABContacts(value);
    }
    
    public void removeFromDocumentsFor(entity.KeyableBean joinedBean, gw.entity.ILinkPropertyInfo docJoinTableLink, gw.entity.ILinkPropertyInfo joinedBeanJoinTableLink, gw.entity.IArrayPropertyInfo docArrayPropertyInfo) {
      ((com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods")).removeFromDocumentsFor(joinedBean, docJoinTableLink, joinedBeanJoinTableLink, docArrayPropertyInfo);
    }
    
    public void removeOrphanedDocumentFromDocumentSource() throws com.guidewire.pl.system.integration.plugins.PluginException {
      ((com.guidewire.pl.domain.document.impl.DocumentInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.impl.DocumentInternalMethods")).removeOrphanedDocumentFromDocumentSource();
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Whether this document has been flagged to require saving.  I.e., the document was
     * retrieved from the DMS, but was changed so needs to be written out.  Note that when retrieved
     * it will be flagged as non persisting, and as far as the entity system is concerned initial save.
     * @return requires persisting only to DMS
     */
    public boolean requiresSavingToDMS() {
      return ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).requiresSavingToDMS();
    }
    
    /**
     * Sets the value of the ABContactDocumentLinks field.
     */
    public void setABContactDocumentLinks(entity.ABContactDocumentLink[] value) {
      __getInternalInterface().setFieldValue(ABCONTACTDOCUMENTLINKS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Author field.
     */
    public void setAuthor(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(AUTHOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuthorDenorm field.
     */
    public void setAuthorDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(AUTHORDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
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
     * Sets the value of the DMS field.
     */
    public void setDMS(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DMS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateCreated field.
     */
    public void setDateCreated(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATECREATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateModified field.
     */
    public void setDateModified(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATEMODIFIED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DocUID field.
     */
    public void setDocUID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DOCUID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DocumentIdentifier field.
     */
    public void setDocumentIdentifier(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DOCUMENTIDENTIFIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DocumentIdentifierDenorm field.
     */
    public void setDocumentIdentifierDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DOCUMENTIDENTIFIERDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the language in which the document is created in.  This should not be changed once the
     * document is stored
     * @param language the the language
     */
    public void setDocumentLanguage(gw.i18n.ILocale language) {
      ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setDocumentLanguage(language);
    }
    
    public void setDocumentWebFileInfo(com.guidewire.pl.web.document.DocumentWebFileInfo fileInfo) {
      ((com.guidewire.pl.domain.document.impl.DocumentInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.impl.DocumentInternalMethods")).setDocumentWebFileInfo(fileInfo);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Inbound field.
     */
    public void setInbound(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INBOUND_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Language field.
     */
    public void setLanguage(typekey.LanguageType value) {
      __getInternalInterface().setFieldValue(LANGUAGE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LoadCommandID field.
     */
    public void setLoadCommandID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
    }
    
    /**
     * Sets the locale in which the document is created in.  This should not be changed once the
     * document is stored
     * @param locale the locale
     * @deprecated use set language instead
     */
    public void setLocale(gw.i18n.ILocale locale) {
      ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setLocale(locale);
    }
    
    /**
     * Sets the value of the MimeType field.
     */
    public void setMimeType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MIMETYPE_PROP.get(), value);
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
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the Obsolete field.
     */
    public void setObsolete(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(OBSOLETE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PendingDocUID field.
     */
    public void setPendingDocUID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PENDINGDOCUID_PROP.get(), value);
    }
    
    public void setPersistedByDocumentSource(boolean persisted) {
      ((com.guidewire.pl.domain.document.impl.DocumentInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.impl.DocumentInternalMethods")).setPersistedByDocumentSource(persisted);
    }
    
    /**
     * 
     * @param persisted when false (default is true), the document will not be persisted
     * This needs to be visible to rules so that certain utilities which interact with
     * IDocumentProduction implementations can set it so that things work correctly
     */
    public void setPersistenceRequired(boolean persisted) {
      ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setPersistenceRequired(persisted);
    }
    
    /**
     * Sets the value of the PortalSecurityRealm_Ext field.
     */
    public void setPortalSecurityRealm_Ext(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PORTALSECURITYREALM_EXT_PROP.get(), value);
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
     * Sets the value of the Recipient field.
     */
    public void setRecipient(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RECIPIENT_PROP.get(), value);
    }
    
    /**
     * Whether this document has been flagged to require saving.  I.e., the document was
     * retrieved from the DMS, but was changed so needs to be written out.  Note that when retrieved
     * it will be flagged as non persisting, and as far as the entity system is concerned initial save.
     * @param value whether this document requires persisting to DMS
     */
    public void setRequiresSavingToDMS(boolean value) {
      ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setRequiresSavingToDMS(value);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Marks the document as having its metadata retrieved from an IDMS
     * Also marks the document as initially not requiring persistence.
     */
    public void setRetrievedFromIDMS() {
      ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setRetrievedFromIDMS();
    }
    
    /**
     * Sets the value of the Section field.
     */
    public void setSection(typekey.DocumentSection value) {
      __getInternalInterface().setFieldValue(SECTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SecurityType field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setSecurityType(typekey.DocumentSecurityType value) {
      ((com.guidewire.pl.domain.document.DocumentPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentPublicMethods")).setSecurityType(value);
    }
    
    /**
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.DocumentStatusType value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Type field.
     */
    public void setType(typekey.DocumentType value) {
      __getInternalInterface().setFieldValue(TYPE_PROP.get(), value);
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
    
    public boolean updateDocumentInDocumentSource(java.io.InputStream inputStream) throws com.guidewire.pl.system.integration.plugins.PluginException {
      return ((com.guidewire.pl.domain.document.impl.DocumentInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.impl.DocumentInternalMethods")).updateDocumentInDocumentSource(inputStream);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethods", "com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethodsImpl");
    config.put("com.guidewire.ab.domain.document.impl.DocumentCoreExtMethods", "com.guidewire.ab.domain.document.impl.DocumentCoreExtMethodsImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.document.DocumentPublicMethods", "com.guidewire.pl.domain.document.impl.DocumentImpl");
    config.put("com.guidewire.pl.domain.document.impl.DocumentInternalMethods", "com.guidewire.ab.domain.document.impl.DocumentCoreExtInternalMethodsImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.CommitCallback", "com.guidewire.pl.domain.document.impl.DocumentImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pl.domain.document.impl.DocumentImpl");
    config.put("com.guidewire.pl.system.bundle.RemoveCallback", "com.guidewire.pl.domain.document.impl.DocumentImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pl.domain.document.impl.DocumentImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.Document.class, config);
    com.guidewire._generated.entity.DocumentInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.Document, com.guidewire._generated.entity.DocumentInternal>() {
      public java.lang.Object getImplementation(entity.Document bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.DocumentInternal getInternalInterface(entity.Document bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.Document newEmptyInstance() {
        return new entity.Document((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}