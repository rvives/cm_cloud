package entity;

/**
 * RestCallHistory
 * History of REST calls
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RestCallHistory.eti;RestCallHistory.eix;RestCallHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RestCallHistory")
public class RestCallHistory extends entity.InboundHistory implements entity.EventAware, com.guidewire.commons.profiler.ProfilerDataSourceInternal {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RestCallHistory> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RestCallHistory>("entity.RestCallHistory");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HTTPOPERATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HttpOperation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPERATIONNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OperationName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SERVERNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ServerName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SWAGGERAPI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SwaggerApi");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TRACEABILITYID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TraceabilityId");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final java.lang.String RESTCALLHISTORYADDED_EVENT = "RestCallHistoryAdded";
  
  public static final java.lang.String RESTCALLHISTORYCHANGED_EVENT = "RestCallHistoryChanged";
  
  public static final java.lang.String RESTCALLHISTORYREMOVED_EVENT = "RestCallHistoryRemoved";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RestCallHistory()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RestCallHistory(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RestCallHistory(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.RestCallHistoryInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.RestCallHistoryInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.RestCallHistoryInternal)super.__getInternalInterface();
  }
  
  /**
   * Gets the value of the HttpOperation field.
   * The http operation path and method.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHttpOperation() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HTTPOPERATION_PROP.get());
  }
  
  /**
   * Gets the value of the OperationName field.
   * The name of the handler operation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOperationName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPERATIONNAME_PROP.get());
  }
  
  /**
   * Gets the value of the ServerName field.
   * The name of the server receiving the request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getServerName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SERVERNAME_PROP.get());
  }
  
  /**
   * Gets the value of the SwaggerApi field.
   * The Swagger api that contains this operations.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSwaggerApi() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SWAGGERAPI_PROP.get());
  }
  
  /**
   * Gets the value of the TraceabilityId field.
   * The traceability id of the request. The size is dependent on implementation of TraceabilityIDPlugin.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTraceabilityId() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TRACEABILITYID_PROP.get());
  }
  
  /**
   * Sets the value of the HttpOperation field.
   */
  public void setHttpOperation(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(HTTPOPERATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OperationName field.
   */
  public void setOperationName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OPERATIONNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServerName field.
   */
  public void setServerName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SERVERNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SwaggerApi field.
   */
  public void setSwaggerApi(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SWAGGERAPI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TraceabilityId field.
   */
  public void setTraceabilityId(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TRACEABILITYID_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RestCallHistoryInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RestCallHistory.this.__getDelegateManager();
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
     * Returns an array of {@link GloballyAggregatedQuerySummary} objects,
     * one for each distinct query string found in any frame of this
     * profiler's stacks.
     */
    public gw.api.profiler.GloballyAggregatedQuerySummary[] getAggregatedQuerySummaries() {
      return ((gw.api.profiler.ProfilerDataSource)__getDelegateManager().getImplementation("gw.api.profiler.ProfilerDataSource")).getAggregatedQuerySummaries();
    }
    
    /**
     * Gets the value of the CompleteDate field.
     * The date this call completed.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCompleteDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(COMPLETEDATE_PROP.get());
    }
    
    public gw.api.profiler.DbmsReportZipProvider getDbmsCounterZipProvider(java.lang.String reportId) {
      return ((com.guidewire.commons.profiler.ProfilerDataSourceInternal)__getDelegateManager().getImplementation("com.guidewire.commons.profiler.ProfilerDataSourceInternal")).getDbmsCounterZipProvider(reportId);
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * Gets the value of the HttpOperation field.
     * The http operation path and method.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHttpOperation() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HTTPOPERATION_PROP.get());
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
     * 
     * @return User-friendly name
     */
    public java.lang.String getName() {
      return ((gw.api.profiler.ProfilerDataSource)__getDelegateManager().getImplementation("gw.api.profiler.ProfilerDataSource")).getName();
    }
    
    /**
     * Gets the value of the OperationName field.
     * The name of the handler operation.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOperationName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPERATIONNAME_PROP.get());
    }
    
    /**
     * Gets the value of the ProfilerData field.
     * Raw Profiler data
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.lang.Blob getProfilerData() {
      return (gw.lang.Blob)__getInternalInterface().getFieldValue(PROFILERDATA_PROP.get());
    }
    
    /**
     * For all stacks in this source
     * @return 
     */
    public gw.api.profiler.ProfilerFrameGroupSource getProfilerFrameGroupSource() {
      return ((gw.api.profiler.ProfilerDataSource)__getDelegateManager().getImplementation("gw.api.profiler.ProfilerDataSource")).getProfilerFrameGroupSource();
    }
    
    /**
     * For the given stack
     * @param stack 
     * @return 
     */
    public gw.api.profiler.ProfilerFrameGroupSource getProfilerFrameGroupSource(gw.api.profiler.ProfilerStack stack) {
      return ((gw.api.profiler.ProfilerDataSource)__getDelegateManager().getImplementation("gw.api.profiler.ProfilerDataSource")).getProfilerFrameGroupSource(stack);
    }
    
    /**
     * 
     * @return The stacks
     */
    public gw.api.profiler.ProfilerStack[] getProfilerStacks() {
      return ((gw.api.profiler.ProfilerDataSource)__getDelegateManager().getImplementation("gw.api.profiler.ProfilerDataSource")).getProfilerStacks();
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
     * Gets the value of the ServerName field.
     * The name of the server receiving the request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getServerName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SERVERNAME_PROP.get());
    }
    
    /**
     * Returns an array of {@link StackQuerySummary} objects, one for
     * each stack containing a query in any frame of this profiler's stacks.
     */
    public gw.api.profiler.StackQuerySummary[] getStackQuerySummaries() {
      return ((gw.api.profiler.ProfilerDataSource)__getDelegateManager().getImplementation("gw.api.profiler.ProfilerDataSource")).getStackQuerySummaries();
    }
    
    /**
     * 
     * @param sql 
     * @return The {@link GloballyAggregatedQuerySummary} objects with a score
     */
    public gw.api.profiler.GloballyAggregatedQuerySummary[] getStackQuerySummariesNear(java.lang.String sql) {
      return ((gw.api.profiler.ProfilerDataSource)__getDelegateManager().getImplementation("gw.api.profiler.ProfilerDataSource")).getStackQuerySummariesNear(sql);
    }
    
    /**
     * 
     * @return stacks grouped by name
     */
    public gw.api.profiler.ProfilerStackGroup[] getStacksGroupedByName() {
      return ((gw.api.profiler.ProfilerDataSource)__getDelegateManager().getImplementation("gw.api.profiler.ProfilerDataSource")).getStacksGroupedByName();
    }
    
    /**
     * Gets the value of the StartDate field.
     * The date this call started.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getStartDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(STARTDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.InboundHistory getSubtype() {
      return (typekey.InboundHistory)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the SwaggerApi field.
     * The Swagger api that contains this operations.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSwaggerApi() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SWAGGERAPI_PROP.get());
    }
    
    /**
     * Gets the value of the TraceabilityId field.
     * The traceability id of the request. The size is dependent on implementation of TraceabilityIDPlugin.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTraceabilityId() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TRACEABILITYID_PROP.get());
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
     * Sets the value of the CompleteDate field.
     */
    public void setCompleteDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(COMPLETEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HttpOperation field.
     */
    public void setHttpOperation(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HTTPOPERATION_PROP.get(), value);
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
     * Sets the value of the OperationName field.
     */
    public void setOperationName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OPERATIONNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProfilerData field.
     */
    public void setProfilerData(gw.lang.Blob value) {
      __getInternalInterface().setFieldValue(PROFILERDATA_PROP.get(), value);
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
     * Sets the value of the ServerName field.
     */
    public void setServerName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SERVERNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StartDate field.
     */
    public void setStartDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(STARTDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.InboundHistory value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SwaggerApi field.
     */
    public void setSwaggerApi(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SWAGGERAPI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TraceabilityId field.
     */
    public void setTraceabilityId(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TRACEABILITYID_PROP.get(), value);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.commons.profiler.ProfilerDataSourceInternal", "com.guidewire.pl.rest.profiler.RestCallHistoryImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.api.profiler.ProfilerDataSource", "com.guidewire.pl.rest.profiler.RestCallHistoryImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RestCallHistory.class, config);
    com.guidewire._generated.entity.RestCallHistoryInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RestCallHistory, com.guidewire._generated.entity.RestCallHistoryInternal>() {
      public java.lang.Object getImplementation(entity.RestCallHistory bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RestCallHistoryInternal getInternalInterface(entity.RestCallHistory bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RestCallHistory newEmptyInstance() {
        return new entity.RestCallHistory((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}