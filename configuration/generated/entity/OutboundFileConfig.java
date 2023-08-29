package entity;

/**
 * OutboundFileConfig
 * Used for storing info related to file handler
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundFileConfig.eti;OutboundFileConfig.eix;OutboundFileConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class OutboundFileConfig extends com.guidewire.pl.persistence.code.BeanBase implements entity.Editable, com.guidewire.outboundfile.config.OutboundFileConfigMethods {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.OutboundFileConfig> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.OutboundFileConfig>("entity.OutboundFileConfig");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DAYSTILLPURGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DaysTillPurge");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXTENSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Extension");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FILEHANDLERCLASS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FileHandlerClass");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREFIX_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Prefix");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TEMPORARYDIRECTORY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TemporaryDirectory");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.OutboundFileConfigInternal _internal;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  protected OutboundFileConfig(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.OutboundFileConfigInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.OutboundFileConfigInternal __getInternalInterface() {
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
  
  public java.lang.String generateBatchProcessID() {
    return ((com.guidewire.outboundfile.config.OutboundFileConfigMethods)__getDelegateManager().getImplementation("com.guidewire.outboundfile.config.OutboundFileConfigMethods")).generateBatchProcessID();
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
   * Gets the value of the DaysTillPurge field.
   * The number of days to wait before purging outbound files.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDaysTillPurge() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(DAYSTILLPURGE_PROP.get());
  }
  
  /**
   * Gets the value of the Extension field.
   * Extension for the output file.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExtension() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXTENSION_PROP.get());
  }
  
  /**
   * Gets the value of the FileHandlerClass field.
   * Fully qualified class name of the outbound file handler.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFileHandlerClass() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FILEHANDLERCLASS_PROP.get());
  }
  
  public java.lang.String getFullPermanentFilePath(java.lang.String arg0) {
    return ((com.guidewire.outboundfile.config.OutboundFileConfigMethods)__getDelegateManager().getImplementation("com.guidewire.outboundfile.config.OutboundFileConfigMethods")).getFullPermanentFilePath(arg0);
  }
  
  public java.lang.String getFullTemporaryFilePath(java.lang.String arg0) {
    return ((com.guidewire.outboundfile.config.OutboundFileConfigMethods)__getDelegateManager().getImplementation("com.guidewire.outboundfile.config.OutboundFileConfigMethods")).getFullTemporaryFilePath(arg0);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Name field.
   * Name of the outbound file handler source.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * Gets the value of the Prefix field.
   * Prefix used for the batch identifier and the output file name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrefix() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREFIX_PROP.get());
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
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OutboundFileConfig getSubtype() {
    return (typekey.OutboundFileConfig)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the TemporaryDirectory field.
   * Valid file path to the temporary directory.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTemporaryDirectory() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TEMPORARYDIRECTORY_PROP.get());
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
  
  public void moveTempFileToFinalDestination(java.lang.String arg0) {
    ((com.guidewire.outboundfile.config.OutboundFileConfigMethods)__getDelegateManager().getImplementation("com.guidewire.outboundfile.config.OutboundFileConfigMethods")).moveTempFileToFinalDestination(arg0);
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
   * Sets the value of the DaysTillPurge field.
   */
  public void setDaysTillPurge(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(DAYSTILLPURGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Extension field.
   */
  public void setExtension(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXTENSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FileHandlerClass field.
   */
  public void setFileHandlerClass(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FILEHANDLERCLASS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
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
   * Sets the value of the Prefix field.
   */
  public void setPrefix(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PREFIX_PROP.get(), value);
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
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.OutboundFileConfig value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TemporaryDirectory field.
   */
  public void setTemporaryDirectory(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TEMPORARYDIRECTORY_PROP.get(), value);
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
  
  static {
    com.guidewire._generated.entity.OutboundFileConfigInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.OutboundFileConfig, com.guidewire._generated.entity.OutboundFileConfigInternal>() {
      public java.lang.Object getImplementation(entity.OutboundFileConfig bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.OutboundFileConfigInternal getInternalInterface(entity.OutboundFileConfig bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}