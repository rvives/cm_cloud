package entity;

/**
 * UpgradeVTDBMSDump
 * DBMS-specific performance information for a version trigger.
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UpgradeVTDBMSDump.eti;UpgradeVTDBMSDump.eix;UpgradeVTDBMSDump.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "UpgradeVTDBMSDump")
public class UpgradeVTDBMSDump extends com.guidewire.pl.persistence.code.BeanBase implements entity.TimedUpgraderObject, entity.KeyableBean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.UpgradeVTDBMSDump> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.UpgradeVTDBMSDump>("entity.UpgradeVTDBMSDump");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONTENTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Contents");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENDTIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EndTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXECDURATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExecDuration");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STARTTIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StartTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPGRADEINSTANCE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpgradeInstance");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VERSIONACTIONNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "VersionActionName");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.UpgradeVTDBMSDumpInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public UpgradeVTDBMSDump()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public UpgradeVTDBMSDump(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected UpgradeVTDBMSDump(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.UpgradeVTDBMSDumpInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.UpgradeVTDBMSDumpInternal __getInternalInterface() {
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
  
  public void copyUnzippedContents(java.util.zip.ZipOutputStream out, java.lang.String directory) throws java.io.IOException {
    ((com.guidewire.pl.domain.upgrader.UpgradeVTDBMSDumpPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.upgrader.UpgradeVTDBMSDumpPublicMethods")).copyUnzippedContents(out, directory);
  }
  
  /**
   * Gets the value of the Contents field.
   * query
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.lang.Blob getContents() {
    return (gw.lang.Blob)__getInternalInterface().getFieldValue(CONTENTS_PROP.get());
  }
  
  /**
   * Gets the value of the EndTime field.
   * Timestamp when the timing completed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ENDTIME_PROP.get());
  }
  
  /**
   * Gets the value of the ExecDuration field.
   * Execution duration in seconds
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getExecDuration() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(EXECDURATION_PROP.get());
  }
  
  /**
   * 
   * @return Unique identifier of the object.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.commons.entity.Keyable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Keyable")).getID();
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
   * Gets the value of the StartTime field.
   * Timestamp when the timing began
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(STARTTIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpgradeInstance field.
   * UpgradeInstance
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UpgradeInstance getUpgradeInstance() {
    return (entity.UpgradeInstance)__getInternalInterface().getFieldValue(UPGRADEINSTANCE_PROP.get());
  }
  
  /**
   * Gets the value of the VersionActionName field.
   * Fully qualified name of version trigger to which this applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getVersionActionName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VERSIONACTIONNAME_PROP.get());
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
   * Sets the value of the Contents field.
   */
  public void setContents(gw.lang.Blob value) {
    __getInternalInterface().setFieldValue(CONTENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EndTime field.
   */
  public void setEndTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(ENDTIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExecDuration field.
   */
  public void setExecDuration(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(EXECDURATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
   * Sets the value of the StartTime field.
   */
  public void setStartTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(STARTTIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpgradeInstance field.
   */
  public void setUpgradeInstance(entity.UpgradeInstance value) {
    __getInternalInterface().setFieldValue(UPGRADEINSTANCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the VersionActionName field.
   */
  public void setVersionActionName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(VERSIONACTIONNAME_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.UpgradeVTDBMSDumpInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.UpgradeVTDBMSDump.this.__getDelegateManager();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
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
    
    public void copyUnzippedContents(java.util.zip.ZipOutputStream out, java.lang.String directory) throws java.io.IOException {
      ((com.guidewire.pl.domain.upgrader.UpgradeVTDBMSDumpPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.upgrader.UpgradeVTDBMSDumpPublicMethods")).copyUnzippedContents(out, directory);
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
     * Gets the value of the Contents field.
     * query
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.lang.Blob getContents() {
      return (gw.lang.Blob)__getInternalInterface().getFieldValue(CONTENTS_PROP.get());
    }
    
    /**
     * Gets the value of the EndTime field.
     * Timestamp when the timing completed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEndTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ENDTIME_PROP.get());
    }
    
    /**
     * Gets the value of the ExecDuration field.
     * Execution duration in seconds
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getExecDuration() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(EXECDURATION_PROP.get());
    }
    
    /**
     * 
     * @return Unique identifier of the object.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.commons.entity.Keyable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Keyable")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
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
     * Gets the value of the StartTime field.
     * Timestamp when the timing began
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getStartTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(STARTTIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpgradeInstance field.
     * UpgradeInstance
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UpgradeInstance getUpgradeInstance() {
      return (entity.UpgradeInstance)__getInternalInterface().getFieldValue(UPGRADEINSTANCE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpgradeInstanceID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPGRADEINSTANCE_PROP.get());
    }
    
    /**
     * Gets the value of the VersionActionName field.
     * Fully qualified name of version trigger to which this applies
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getVersionActionName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VERSIONACTIONNAME_PROP.get());
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
     * Sets the value of the Contents field.
     */
    public void setContents(gw.lang.Blob value) {
      __getInternalInterface().setFieldValue(CONTENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EndTime field.
     */
    public void setEndTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(ENDTIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExecDuration field.
     */
    public void setExecDuration(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(EXECDURATION_PROP.get(), value);
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
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
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
     * Sets the value of the StartTime field.
     */
    public void setStartTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(STARTTIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpgradeInstance field.
     */
    public void setUpgradeInstance(entity.UpgradeInstance value) {
      __getInternalInterface().setFieldValue(UPGRADEINSTANCE_PROP.get(), value);
    }
    
    public void setUpgradeInstanceID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPGRADEINSTANCE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the VersionActionName field.
     */
    public void setVersionActionName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(VERSIONACTIONNAME_PROP.get(), value);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.upgrader.UpgradeVTDBMSDumpPublicMethods", "com.guidewire.pl.domain.upgrader.impl.UpgradeVTDBMSDumpImpl");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.UpgradeVTDBMSDump.class, config);
    com.guidewire._generated.entity.UpgradeVTDBMSDumpInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.UpgradeVTDBMSDump, com.guidewire._generated.entity.UpgradeVTDBMSDumpInternal>() {
      public java.lang.Object getImplementation(entity.UpgradeVTDBMSDump bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.UpgradeVTDBMSDumpInternal getInternalInterface(entity.UpgradeVTDBMSDump bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.UpgradeVTDBMSDump newEmptyInstance() {
        return new entity.UpgradeVTDBMSDump((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}