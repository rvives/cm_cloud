package entity;

/**
 * FieldChangeUpdateOp
 * This non-persistent entity has been deprecated since ClaimCenter 8.0 along with the IAddressBookAdapter.
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FieldChangeUpdateOp.eti;FieldChangeUpdateOp.eix;FieldChangeUpdateOp.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "FieldChangeUpdateOp")
public class FieldChangeUpdateOp extends entity.UpdateOp {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.FieldChangeUpdateOp> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.FieldChangeUpdateOp>("entity.FieldChangeUpdateOp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENTITYTYPENAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EntityTypeName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIELD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Field");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OBJECTUID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ObjectUId");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEBATCH_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateBatch");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Value");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public FieldChangeUpdateOp()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public FieldChangeUpdateOp(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected FieldChangeUpdateOp(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.FieldChangeUpdateOpInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.FieldChangeUpdateOpInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.FieldChangeUpdateOpInternal)super.__getInternalInterface();
  }
  
  /**
   * Gets the value of the EntityTypeName field.
   * Identifies the entity type.  e.g. Person, Company, or Adjudicator.  (Entity type on the application side not a ContactManager entity type)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEntityTypeName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ENTITYTYPENAME_PROP.get());
  }
  
  /**
   * Gets the value of the Field field.
   * Identifies the field for the application side.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getField() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIELD_PROP.get());
  }
  
  /**
   * Gets the value of the ObjectUId field.
   * Uniquely identifies target object of the operation.  Can be either an AddressBookUId or a temporary ObjectId that was defined in a CreateUpdateOp.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getObjectUId() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OBJECTUID_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UpdateBatch getUpdateBatch() {
    return (entity.UpdateBatch)__getInternalInterface().getFieldValue(UPDATEBATCH_PROP.get());
  }
  
  /**
   * Gets the value of the Value field.
   * Identifies the value of the field on the app side.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValue() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VALUE_PROP.get());
  }
  
  /**
   * Sets the value of the EntityTypeName field.
   */
  public void setEntityTypeName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ENTITYTYPENAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Field field.
   */
  public void setField(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIELD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ObjectUId field.
   */
  public void setObjectUId(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OBJECTUID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateBatch field.
   */
  private void setUpdateBatch(entity.UpdateBatch value) {
    __getInternalInterface().setFieldValue(UPDATEBATCH_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(VALUE_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.FieldChangeUpdateOpInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.FieldChangeUpdateOp.this.__getDelegateManager();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the EntityTypeName field.
     * Identifies the entity type.  e.g. Person, Company, or Adjudicator.  (Entity type on the application side not a ContactManager entity type)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEntityTypeName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ENTITYTYPENAME_PROP.get());
    }
    
    /**
     * Gets the value of the Field field.
     * Identifies the field for the application side.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getField() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIELD_PROP.get());
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
     * Gets the value of the ObjectUId field.
     * Uniquely identifies target object of the operation.  Can be either an AddressBookUId or a temporary ObjectId that was defined in a CreateUpdateOp.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getObjectUId() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OBJECTUID_PROP.get());
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
    public typekey.UpdateOp getSubtype() {
      return (typekey.UpdateOp)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateBatch field.
     * Associated UpdateBatch.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UpdateBatch getUpdateBatch() {
      return (entity.UpdateBatch)__getInternalInterface().getFieldValue(UPDATEBATCH_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateBatchID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEBATCH_PROP.get());
    }
    
    /**
     * Gets the value of the Value field.
     * Identifies the value of the field on the app side.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getValue() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VALUE_PROP.get());
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
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EntityTypeName field.
     */
    public void setEntityTypeName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ENTITYTYPENAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Field field.
     */
    public void setField(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIELD_PROP.get(), value);
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
     * Sets the value of the ObjectUId field.
     */
    public void setObjectUId(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OBJECTUID_PROP.get(), value);
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
    public void setSubtype(typekey.UpdateOp value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateBatch field.
     */
    public void setUpdateBatch(entity.UpdateBatch value) {
      __getInternalInterface().setFieldValue(UPDATEBATCH_PROP.get(), value);
    }
    
    public void setUpdateBatchID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEBATCH_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Value field.
     */
    public void setValue(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(VALUE_PROP.get(), value);
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
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.FieldChangeUpdateOp.class, config);
    com.guidewire._generated.entity.FieldChangeUpdateOpInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.FieldChangeUpdateOp, com.guidewire._generated.entity.FieldChangeUpdateOpInternal>() {
      public java.lang.Object getImplementation(entity.FieldChangeUpdateOp bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.FieldChangeUpdateOpInternal getInternalInterface(entity.FieldChangeUpdateOp bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.FieldChangeUpdateOp newEmptyInstance() {
        return new entity.FieldChangeUpdateOp((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}