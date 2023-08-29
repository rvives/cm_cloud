package entity;

/**
 * GroupAssignmentState
 * 
 *         Maintains round-robin assignment state for a particular group or for a particular group and all
 *         its subgroups. This is an internal class which should only be used by the internals of the
 *         assignment engine.
 *       
 *     
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GroupAssignmentState.eti;GroupAssignmentState.eix;GroupAssignmentState.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "GroupAssignmentState")
public class GroupAssignmentState extends com.guidewire.pl.persistence.code.BeanBase implements entity.LastAssignedUserContainerBase, entity.Retireable, entity.LastAssignedUserContainer, entity.EventAware {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.GroupAssignmentState> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.GroupAssignmentState>("entity.GroupAssignmentState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTIVITYLOAD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActivityLoad");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> GROUP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Group");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> GROUPTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "GroupType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INCLUDESUBGROUPS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IncludeSubGroups");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTACTIVITYGRP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastActivityGrp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTACTIVITYUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastActivityUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTREVIEWGRP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastReviewGrp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTREVIEWUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastReviewUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCKINGCOLUMN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LockingColumn");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REVIEWLOAD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReviewLoad");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> USERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Users");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.GroupAssignmentStateInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  public static final java.lang.String GROUPASSIGNMENTSTATEADDED_EVENT = "GroupAssignmentStateAdded";
  
  public static final java.lang.String GROUPASSIGNMENTSTATECHANGED_EVENT = "GroupAssignmentStateChanged";
  
  public static final java.lang.String GROUPASSIGNMENTSTATEREMOVED_EVENT = "GroupAssignmentStateRemoved";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public GroupAssignmentState()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public GroupAssignmentState(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected GroupAssignmentState(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.GroupAssignmentStateInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.GroupAssignmentStateInternal __getInternalInterface() {
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
  
  /**
   * Adds the given element to the Users array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUsers(entity.GroupUserAssignmentState element) {
    __getInternalInterface().addArrayElement(USERS_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the ActivityLoad field.
   * The current load of the group for activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getActivityLoad() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(ACTIVITYLOAD_PROP.get());
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
   * Gets the value of the Group field.
   * The group this state is tracking.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getGroup() {
    return (entity.Group)__getInternalInterface().getFieldValue(GROUP_PROP.get());
  }
  
  /**
   * Gets the value of the GroupType field.
   * The group type this state is tracking.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GroupType getGroupType() {
    return (typekey.GroupType)__getInternalInterface().getFieldValue(GROUPTYPE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LastActivityGrp field.
   * The id of the last group that was assigned an activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastActivityGrp() {
    return (entity.Group)__getInternalInterface().getFieldValue(LASTACTIVITYGRP_PROP.get());
  }
  
  /**
   * Gets the value of the LastActivityUser field.
   * The id of the last user that was assigned an activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastActivityUser() {
    return (entity.User)__getInternalInterface().getFieldValue(LASTACTIVITYUSER_PROP.get());
  }
  
  /**
   * Gets the value of the LastReviewGrp field.
   * The id of the last group that was assigned an assignment review activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastReviewGrp() {
    return (entity.Group)__getInternalInterface().getFieldValue(LASTREVIEWGRP_PROP.get());
  }
  
  /**
   * Gets the value of the LastReviewUser field.
   * The id of the last user that was assigned an assignment review activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastReviewUser() {
    return (entity.User)__getInternalInterface().getFieldValue(LASTREVIEWUSER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(LOCKINGCOLUMN_PROP.get());
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the ReviewLoad field.
   * The current load of the group for assignment review activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getReviewLoad() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(REVIEWLOAD_PROP.get());
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
   * Gets the value of the Users field.
   * Users belonging to this group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GroupUserAssignmentState[] getUsers() {
    return (entity.GroupUserAssignmentState[])__getInternalInterface().getFieldValue(USERS_PROP.get());
  }
  
  /**
   * Gets the value of the IncludeSubGroups field.
   * Is this assignment state for just this group, or does it include the sub groups as well.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludeSubGroups() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INCLUDESUBGROUPS_PROP.get());
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
   * Removes the given element from the Users array. This is achieved by marking the element for removal.
   */
  public void removeFromUsers(entity.GroupUserAssignmentState element) {
    __getInternalInterface().removeArrayElement(USERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Users array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUsers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(USERS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the ActivityLoad field.
   */
  public void setActivityLoad(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(ACTIVITYLOAD_PROP.get(), value);
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
   * Sets the value of the Group field.
   */
  public void setGroup(entity.Group value) {
    __getInternalInterface().setFieldValue(GROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GroupType field.
   */
  public void setGroupType(typekey.GroupType value) {
    __getInternalInterface().setFieldValue(GROUPTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IncludeSubGroups field.
   */
  public void setIncludeSubGroups(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INCLUDESUBGROUPS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastActivityGrp field.
   */
  public void setLastActivityGrp(entity.Group value) {
    __getInternalInterface().setFieldValue(LASTACTIVITYGRP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastActivityUser field.
   */
  public void setLastActivityUser(entity.User value) {
    __getInternalInterface().setFieldValue(LASTACTIVITYUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastReviewGrp field.
   */
  public void setLastReviewGrp(entity.Group value) {
    __getInternalInterface().setFieldValue(LASTREVIEWGRP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastReviewUser field.
   */
  public void setLastReviewUser(entity.User value) {
    __getInternalInterface().setFieldValue(LASTREVIEWUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LockingColumn field.
   */
  private void setLockingColumn(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(LOCKINGCOLUMN_PROP.get(), value);
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
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReviewLoad field.
   */
  public void setReviewLoad(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(REVIEWLOAD_PROP.get(), value);
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
   * Sets the value of the Users field.
   */
  public void setUsers(entity.GroupUserAssignmentState[] value) {
    __getInternalInterface().setFieldValue(USERS_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.GroupAssignmentStateInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.GroupAssignmentState.this.__getDelegateManager();
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
     * Adds the given element to the Users array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToUsers(entity.GroupUserAssignmentState element) {
      __getInternalInterface().addArrayElement(USERS_PROP.get(), element);
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
     * Gets the value of the ActivityLoad field.
     * The current load of the group for activities.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getActivityLoad() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(ACTIVITYLOAD_PROP.get());
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
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * Gets the value of the Group field.
     * The group this state is tracking.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getGroup() {
      return (entity.Group)__getInternalInterface().getFieldValue(GROUP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getGroupID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(GROUP_PROP.get());
    }
    
    /**
     * Gets the value of the GroupType field.
     * The group type this state is tracking.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.GroupType getGroupType() {
      return (typekey.GroupType)__getInternalInterface().getFieldValue(GROUPTYPE_PROP.get());
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
     * Gets the value of the LastActivityGrp field.
     * The id of the last group that was assigned an activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getLastActivityGrp() {
      return (entity.Group)__getInternalInterface().getFieldValue(LASTACTIVITYGRP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastActivityGrpID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTACTIVITYGRP_PROP.get());
    }
    
    /**
     * Gets the value of the LastActivityUser field.
     * The id of the last user that was assigned an activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getLastActivityUser() {
      return (entity.User)__getInternalInterface().getFieldValue(LASTACTIVITYUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastActivityUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTACTIVITYUSER_PROP.get());
    }
    
    /**
     * Gets the value of the LastReviewGrp field.
     * The id of the last group that was assigned an assignment review activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getLastReviewGrp() {
      return (entity.Group)__getInternalInterface().getFieldValue(LASTREVIEWGRP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastReviewGrpID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTREVIEWGRP_PROP.get());
    }
    
    /**
     * Gets the value of the LastReviewUser field.
     * The id of the last user that was assigned an assignment review activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getLastReviewUser() {
      return (entity.User)__getInternalInterface().getFieldValue(LASTREVIEWUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastReviewUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTREVIEWUSER_PROP.get());
    }
    
    /**
     * Gets the value of the LockingColumn field.
     * Meaningless column for locking
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getLockingColumn() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(LOCKINGCOLUMN_PROP.get());
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the ReviewLoad field.
     * The current load of the group for assignment review activities.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getReviewLoad() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(REVIEWLOAD_PROP.get());
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
     * Gets the value of the Users field.
     * Users belonging to this group.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GroupUserAssignmentState[] getUsers() {
      return (entity.GroupUserAssignmentState[])__getInternalInterface().getFieldValue(USERS_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the IncludeSubGroups field.
     * Is this assignment state for just this group, or does it include the sub groups as well.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isIncludeSubGroups() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INCLUDESUBGROUPS_PROP.get());
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
     * Removes the given element from the Users array. This is achieved by marking the element for removal.
     */
    public void removeFromUsers(entity.GroupUserAssignmentState element) {
      __getInternalInterface().removeArrayElement(USERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Users array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromUsers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(USERS_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ActivityLoad field.
     */
    public void setActivityLoad(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(ACTIVITYLOAD_PROP.get(), value);
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
     * Sets the value of the Group field.
     */
    public void setGroup(entity.Group value) {
      __getInternalInterface().setFieldValue(GROUP_PROP.get(), value);
    }
    
    public void setGroupID(gw.pl.persistence.core.Key value) {
      setFieldValue(GROUP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GroupType field.
     */
    public void setGroupType(typekey.GroupType value) {
      __getInternalInterface().setFieldValue(GROUPTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IncludeSubGroups field.
     */
    public void setIncludeSubGroups(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INCLUDESUBGROUPS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastActivityGrp field.
     */
    public void setLastActivityGrp(entity.Group value) {
      __getInternalInterface().setFieldValue(LASTACTIVITYGRP_PROP.get(), value);
    }
    
    public void setLastActivityGrpID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTACTIVITYGRP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastActivityUser field.
     */
    public void setLastActivityUser(entity.User value) {
      __getInternalInterface().setFieldValue(LASTACTIVITYUSER_PROP.get(), value);
    }
    
    public void setLastActivityUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTACTIVITYUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastReviewGrp field.
     */
    public void setLastReviewGrp(entity.Group value) {
      __getInternalInterface().setFieldValue(LASTREVIEWGRP_PROP.get(), value);
    }
    
    public void setLastReviewGrpID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTREVIEWGRP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastReviewUser field.
     */
    public void setLastReviewUser(entity.User value) {
      __getInternalInterface().setFieldValue(LASTREVIEWUSER_PROP.get(), value);
    }
    
    public void setLastReviewUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTREVIEWUSER_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LockingColumn field.
     */
    public void setLockingColumn(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(LOCKINGCOLUMN_PROP.get(), value);
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
     * Sets the value of the ReviewLoad field.
     */
    public void setReviewLoad(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(REVIEWLOAD_PROP.get(), value);
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
     * Sets the value of the Users field.
     */
    public void setUsers(entity.GroupUserAssignmentState[] value) {
      __getInternalInterface().setFieldValue(USERS_PROP.get(), value);
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
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.GroupAssignmentState.class, config);
    com.guidewire._generated.entity.GroupAssignmentStateInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.GroupAssignmentState, com.guidewire._generated.entity.GroupAssignmentStateInternal>() {
      public java.lang.Object getImplementation(entity.GroupAssignmentState bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.GroupAssignmentStateInternal getInternalInterface(entity.GroupAssignmentState bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.GroupAssignmentState newEmptyInstance() {
        return new entity.GroupAssignmentState((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}