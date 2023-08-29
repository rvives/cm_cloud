package typekey;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BatchProcessType.tti;BatchProcessType.tix;BatchProcessType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class BatchProcessType implements gw.entity.TypeKey {
  /**
   * AB Contact Score Aggregator
   * Calculates aggregate review scores for ABContacts from submitted ReviewSummaries.
   */
  public static final typekey.BatchProcessType TC_ABCONTACTSCORING = new typekey.BatchProcessType("ABContactScoring");
  
  /**
   * AB Geocode Writer
   * Geocoding ABAddresses queue writer.
   */
  public static final typekey.BatchProcessType TC_ABGEOCODE = new typekey.BatchProcessType("ABGeocode");
  
  /**
   * Activity Escalation
   * Activity escalation monitor
   */
  public static final typekey.BatchProcessType TC_ACTIVITYESC = new typekey.BatchProcessType("ActivityEsc");
  
  /**
   * Archiving Item Writer
   * Identify archiving work and create work items.
   */
  public static final typekey.BatchProcessType TC_ARCHIVE = new typekey.BatchProcessType("Archive");
  
  /**
   * Archive Reference Tracking Sync
   * Ensures that, as long archive reference tracking is enabled, that the archive document references table is in sync with the archive store.
   */
  public static final typekey.BatchProcessType TC_ARCHIVEREFERENCETRACKINGSYNC = new typekey.BatchProcessType("ArchiveReferenceTrackingSync");
  
  /**
   * BackOutRollingUpgrade
   * Back out a rolling upgrade
   */
  public static final typekey.BatchProcessType TC_BACKOUTROLLINGUPGRADE = new typekey.BatchProcessType("BackOutRollingUpgrade");
  
  /**
   * BulkPurge
   * Purge records through table updates
   */
  public static final typekey.BatchProcessType TC_BULKPURGE = new typekey.BatchProcessType("BulkPurge");
  
  /**
   * ContactAutoSync
   * Automatically synchronize the local contact that are out of syn and marked 'allow' auto-sync.
   */
  public static final typekey.BatchProcessType TC_CONTACTAUTOSYNC = new typekey.BatchProcessType("ContactAutoSync");
  
  /**
   * Loader Create Indexes
   * Recreate perf-only indexes when the loader finishes the big insert/select from staging to operational tables
   */
  public static final typekey.BatchProcessType TC_CREATEPERFONLYINDEXES = new typekey.BatchProcessType("CreatePerfOnlyIndexes");
  
  /**
   * Data Distribution
   * Data distribution for the database
   */
  public static final typekey.BatchProcessType TC_DATADISTRIBUTION = new typekey.BatchProcessType("DataDistribution");
  
  /**
   * Database Consistency Check
   * Database consistency checks
   */
  public static final typekey.BatchProcessType TC_DBCONSISTENCYCHECK = new typekey.BatchProcessType("DBConsistencyCheck");
  
  /**
   * Database statistics
   * Database statistics
   */
  public static final typekey.BatchProcessType TC_DBSTATS = new typekey.BatchProcessType("DBStats");
  
  /**
   * DeferredUpgradeTasks
   * Execute database upgrade tasks that were deferred
   */
  public static final typekey.BatchProcessType TC_DEFERREDUPGRADETASKS = new typekey.BatchProcessType("DeferredUpgradeTasks");
  
  /**
   * Destroy Contact For Personal Data
   * Destroy contacts that have been requested by an external system
   */
  public static final typekey.BatchProcessType TC_DESTROYCONTACTFORPERSONALDATA = new typekey.BatchProcessType("DestroyContactForPersonalData");
  
  /**
   * Duplicate Contacts Finder
   * Finds new duplicate contacts and creates a browsable list of said contacts.
   */
  public static final typekey.BatchProcessType TC_DUPLICATECONTACTS = new typekey.BatchProcessType("DuplicateContacts");
  
  /**
   * FindUsagesOfUpgradedTypecodes
   * During the back out of a rolling upgrade, looks for typecodes that were inserted during the rolling upgrade. These usages need to be fixed before we can back out.
   */
  public static final typekey.BatchProcessType TC_FINDUSAGESOFUPGRADEDTYPECODES = new typekey.BatchProcessType("FindUsagesOfUpgradedTypecodes");
  
  /**
   * Geocode Writer
   * Geocoding Addresses queue writer.
   */
  public static final typekey.BatchProcessType TC_GEOCODE = new typekey.BatchProcessType("Geocode");
  
  /**
   * Group Exception
   * Group exception Monitor
   */
  public static final typekey.BatchProcessType TC_GROUPEXCEPTION = new typekey.BatchProcessType("GroupException");
  
  /**
   * Inbound Chunk Work Queue
   * Custom work queue to process inbound chunks.
   */
  public static final typekey.BatchProcessType TC_INBOUNDCHUNKWQ = new typekey.BatchProcessType("InboundChunkWQ");
  
  /**
   * InboundFileBatchProcess
   * Inbound File Batch Process
   */
  public static final typekey.BatchProcessType TC_INBOUNDFILEBATCHPROCESS = new typekey.BatchProcessType("InboundFileBatchProcess");
  
  /**
   * Inbound File Purge Work Queue
   * Custom work queue to purge inbound file records.
   */
  public static final typekey.BatchProcessType TC_INBOUNDFILEPURGEWQ = new typekey.BatchProcessType("InboundFilePurgeWQ");
  
  /**
   * Microsoft Perf Report
   * Microsoft database performance report generation
   */
  public static final typekey.BatchProcessType TC_MSDMVREPORT = new typekey.BatchProcessType("MSDMVReport");
  
  /**
   * Notify External System For Personal Data
   * Picks up all contact destruction tests that are in final state and notifies external system
   */
  public static final typekey.BatchProcessType TC_NOTIFYEXTERNALSYSTEMFORPERSONALDATA = new typekey.BatchProcessType("NotifyExternalSystemForPersonalData");
  
  /**
   * Observe Background Components
   * Emits metrics and service checks for background components like message destinations
   */
  public static final typekey.BatchProcessType TC_OBSERVEBACKGROUNDCOMPONENTS = new typekey.BatchProcessType("ObserveBackgroundComponents");
  
  /**
   * Oracle AWR Report
   * Oracle database AWR performance report generation
   */
  public static final typekey.BatchProcessType TC_ORAAWRREPORT = new typekey.BatchProcessType("OraAWRReport");
  
  /**
   * OutboundFileBatchProcess
   * Outbound File Batch Process
   */
  public static final typekey.BatchProcessType TC_OUTBOUNDFILEBATCHPROCESS = new typekey.BatchProcessType("OutboundFileBatchProcess");
  
  /**
   * Outbound File Purge Work Queue
   * Custom work queue to purge outbound file records.
   */
  public static final typekey.BatchProcessType TC_OUTBOUNDFILEPURGEWQ = new typekey.BatchProcessType("OutboundFilePurgeWQ");
  
  /**
   * Outbound Record Purge Work Queue
   * Custom work queue to purge skipped outbound records.
   */
  public static final typekey.BatchProcessType TC_OUTBOUNDRECORDPURGEWQ = new typekey.BatchProcessType("OutboundRecordPurgeWQ");
  
  /**
   * Phone number normalizer
   * Performs a normalization of phone numbers contact
   */
  public static final typekey.BatchProcessType TC_PHONENUMBERNORMALIZER = new typekey.BatchProcessType("PhoneNumberNormalizer");
  
  /**
   * Populate searchColumn columns
   * Populate searchColumn columns from their original sources.
   */
  public static final typekey.BatchProcessType TC_POPULATESEARCHCOLUMNS = new typekey.BatchProcessType("PopulateSearchColumns");
  
  /**
   * Handle edge/portal document download session expiration and removal
   * Handle edge/portal document download session expiration and removal
   */
  public static final typekey.BatchProcessType TC_PORTALDOCUMENTSESSION_MPEXT = new typekey.BatchProcessType("PortalDocumentSession_MPExt");
  
  /**
   * PostgreSQL Perf Report
   * PostgreSQL performance report generation
   */
  public static final typekey.BatchProcessType TC_POSTGRESQLPERFREPORT = new typekey.BatchProcessType("PostgreSQLPerfReport");
  
  /**
   * Process Completion Monitor
   * Invoke plugin on completion of monitored worker queue
   */
  public static final typekey.BatchProcessType TC_PROCESSCOMPLETIONMONITOR = new typekey.BatchProcessType("ProcessCompletionMonitor");
  
  /**
   * ProcessHistoryPurge
   * Purge batch process history data
   */
  public static final typekey.BatchProcessType TC_PROCESSHISTORYPURGE = new typekey.BatchProcessType("ProcessHistoryPurge");
  
  /**
   * Purge Async API Requests
   * Purge async API request rows older than the configured number of days
   */
  public static final typekey.BatchProcessType TC_PURGEASYNCAPIREQUESTS = new typekey.BatchProcessType("PurgeAsyncApiRequests");
  
  /**
   * Purge Cluster Members
   * Purge old ClusterMember entities
   */
  public static final typekey.BatchProcessType TC_PURGECLUSTERMEMBERS = new typekey.BatchProcessType("PurgeClusterMembers");
  
  /**
   * Purge Failed Work Items
   * Purge failed work items from all queues.
   */
  public static final typekey.BatchProcessType TC_PURGEFAILEDWORKITEMS = new typekey.BatchProcessType("PurgeFailedWorkItems");
  
  /**
   * Purge Message History
   * Purges old messages from the message history table
   */
  public static final typekey.BatchProcessType TC_PURGEMESSAGEHISTORY = new typekey.BatchProcessType("PurgeMessageHistory");
  
  /**
   * Purge Profiler Data
   * Purge profiler data at regular intervals
   */
  public static final typekey.BatchProcessType TC_PURGEPROFILERDATA = new typekey.BatchProcessType("PurgeProfilerData");
  
  /**
   * Purge old transaction ids
   * Purge external transaction id that no longer need to be tracked, by age.
   */
  public static final typekey.BatchProcessType TC_PURGETRANSACTIONIDS = new typekey.BatchProcessType("PurgeTransactionIds");
  
  /**
   * Purge Workflow Logs
   * Purge completed workflows logs, this executes gw.processes.PurgeWorkflowLogs.gs
   */
  public static final typekey.BatchProcessType TC_PURGEWORKFLOWLOGS = new typekey.BatchProcessType("PurgeWorkflowLogs");
  
  /**
   * Purge Workflow
   * Purge completed workflows after resetting any referenced workflows, this executes gw.processes.PurgeWorkflow.gs
   */
  public static final typekey.BatchProcessType TC_PURGEWORKFLOWS = new typekey.BatchProcessType("PurgeWorkflows");
  
  /**
   * Purge Old Contact Destruction Request
   * Remove destruction requests for contacts that have been destroyed.
   */
  public static final typekey.BatchProcessType TC_REMOVEOLDCONTACTDESTRUCTIONREQUEST = new typekey.BatchProcessType("RemoveOldContactDestructionRequest");
  
  /**
   * Staging Table Import
   * Asynchronous operation on staging tables (encrypt, statistics, integrity check, load, delete excluded, populate excluded)
   */
  public static final typekey.BatchProcessType TC_STAGINGTABLEIMPORT = new typekey.BatchProcessType("StagingTableImport");
  
  /**
   * Statistics
   * Statistics calculator
   */
  public static final typekey.BatchProcessType TC_STATISTICS = new typekey.BatchProcessType("Statistics");
  
  /**
   * Stat Report Writer
   * Stat Report work queue writer
   */
  public static final typekey.BatchProcessType TC_STATREPORT = new typekey.BatchProcessType("StatReport");
  
  /**
   * Unknown
   * Unknown value for BatchProcessType
   */
  @java.lang.Deprecated
  public static final typekey.BatchProcessType TC_UNKNOWN = new typekey.BatchProcessType("Unknown");
  
  /**
   * Update MatchSetKey
   * Updates the MatchSetKey for all contacts
   */
  @java.lang.Deprecated
  public static final typekey.BatchProcessType TC_UPDATEMATCHSETKEY = new typekey.BatchProcessType("UpdateMatchSetKey");
  
  /**
   * Update typelist localization and sort order
   * Updates typelist table localizations and sort orders with newest data. Meant to be used with dynamic typelist localizaton reloading.
   */
  public static final typekey.BatchProcessType TC_UPDATETYPELISTLOCALIZATIONANDSORTORDER = new typekey.BatchProcessType("UpdateTypelistLocalizationAndSortOrder");
  
  /**
   * User Exception
   * User exception Monitor
   */
  public static final typekey.BatchProcessType TC_USEREXCEPTION = new typekey.BatchProcessType("UserException");
  
  /**
   * Verify Minimum Criteria
   * Verifies the minimum creation criteria for all staging table loaded contacts.
   */
  public static final typekey.BatchProcessType TC_VERIFYMINIMUMCRITERIA = new typekey.BatchProcessType("VerifyMinimumCriteria");
  
  /**
   * Workflow
   * Will execute the workflow writer.
   */
  public static final typekey.BatchProcessType TC_WORKFLOW = new typekey.BatchProcessType("Workflow");
  
  /**
   * WorkItemSetPurge
   * Purge WorkItemSet data
   */
  public static final typekey.BatchProcessType TC_WORKITEMSETPURGE = new typekey.BatchProcessType("WorkItemSetPurge");
  
  /**
   * WorkQueueInstrumentationPurge
   * Purge instrumentation data for work queues
   */
  public static final typekey.BatchProcessType TC_WORKQUEUEINSTRUMENTATIONPURGE = new typekey.BatchProcessType("WorkQueueInstrumentationPurge");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.BatchProcessType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.BatchProcessType>("BatchProcessType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private BatchProcessType(java.lang.String code)  {
    _typeKeyImplManager  =  com.guidewire.commons.typelist.TypeKeyImplManager.newInstance(this, code);
  }
  
  public int compareTo(gw.entity.TypeKey arg0) {
    return _typeKeyImplManager.getTypeKeyImpl().compareTo(arg0);
  }
  
  /**
   * 
   * @deprecated Use this object instead.
   */
  @java.lang.Deprecated
  public typekey.BatchProcessType get() {
    return this;
  }
  
  public static typekey.BatchProcessType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.BatchProcessType> getAllTypeKeys() {
    return TYPE.get().getTypeKeys(true);
  }
  
  /**
   * Returns the list of categories that this key belongs to
   * @return the categories that this key belongs to
   */
  public gw.entity.TypeKey[] getCategories() {
    return _typeKeyImplManager.getTypeKeyImpl().getCategories();
  }
  
  public java.lang.String getCode() {
    return _typeKeyImplManager.getCode();
  }
  
  /**
   * Returns the description for this typekey for the current locale.
   * @return the description for this typekey
   */
  public java.lang.String getDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription();
  }
  
  /**
   * Returns the description of this typekey for the given locale.
   * @param locale the locale to use to get the description
   * @return a description for this typekey for the given locale
   */
  public java.lang.String getDescription(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription(locale);
  }
  
  public java.lang.String getDisplayName() {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName();
  }
  
  /**
   * Returns the name of this typekey for the given locale.
   * @param locale 
   */
  public java.lang.String getDisplayName(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName(locale);
  }
  
  /**
   * Gets the entity type associated with this typekey, if any. Returns null if this is not a subtype typekey.
   */
  public gw.entity.IEntityType getEntityType() {
    return _typeKeyImplManager.getTypeKeyImpl().getEntityType();
  }
  
  /**
   * Returns the owning type for this key.
   * @return 
   */
  public gw.entity.ITypeList getIntrinsicType() {
    return _typeKeyImplManager.getTypeKeyImpl().getIntrinsicType();
  }
  
  /**
   * A string containing the typelist name.
   */
  public java.lang.String getListName() {
    return _typeKeyImplManager.getTypeKeyImpl().getListName();
  }
  
  /**
   * Returns the value of the "name" attribute for this typekey.
   * @return the name of this typekey
   * @deprecated Use {@link #getDisplayName()} or {@link #getUnlocalizedName()} instead, as appropriate.
   */
  @java.lang.Deprecated
  public java.lang.String getName() {
    return _typeKeyImplManager.getTypeKeyImpl().getName();
  }
  
  public int getOrdinal() {
    return _typeKeyImplManager.getTypeKeyImpl().getOrdinal();
  }
  
  /**
   * Returns the priority for this type key
   * @return the priority for this type key
   */
  public int getPriority() {
    return _typeKeyImplManager.getTypeKeyImpl().getPriority();
  }
  
  /**
   * Returns the sort order for this type key in the specified language.
   * @param locale 
   * @return the sort order for this type key
   */
  public int getSortOrder(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getSortOrder(locale);
  }
  
  public static typekey.BatchProcessType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.BatchProcessType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.BatchProcessType[]{});
  }
  
  public static java.util.List<typekey.BatchProcessType> getTypeKeys(boolean includeRetired) {
    return TYPE.get().getTypeKeys(includeRetired);
  }
  
  /**
   * Returns the (non-localized) description of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDescription()} instead.
   * @return the non-localized description of this typekey
   */
  public java.lang.String getUnlocalizedDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedDescription();
  }
  
  /**
   * Returns the (non-localized) name of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDisplayName()} instead. To get a unique string identifier for this typekey,
   * use {@link #getCode()} instead.
   * @return the non-localized name of this typekey
   */
  public java.lang.String getUnlocalizedName() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedName();
  }
  
  public typekey.BatchProcessType getValue() {
    return this;
  }
  
  /**
   * Checks to see if this typekey has a category corresponding to the given
   * typekey.  For a match to be found, this typekey has to have a category
   * with the same typelist and code as the given typekey.
   * @param categoryToCheck 
   * @return 
   */
  public boolean hasCategory(gw.entity.TypeKey categoryToCheck) {
    return _typeKeyImplManager.getTypeKeyImpl().hasCategory(categoryToCheck);
  }
  
  /**
   * A boolean that indicates a type code is for internal use by Guidewire software. Internal type codes cannot be
   * removed or modified.
   */
  public boolean isInternal() {
    return _typeKeyImplManager.getTypeKeyImpl().isInternal();
  }
  
  /**
   * Returns true if this type key is retired.  Retired type keys will not show up in the UI.
   * @return true if this type key is retired false if not.
   */
  public boolean isRetired() {
    return _typeKeyImplManager.getTypeKeyImpl().isRetired();
  }
  
  private java.lang.Object readObject(java.io.ObjectInputStream in) throws java.io.InvalidObjectException {
    throw new java.io.InvalidObjectException("Proxy required");
  }
  
  public java.lang.String toString() {
    return getDisplayName();
  }
  
  private java.lang.Object writeReplace() {
    return new com.guidewire.commons.typelist.TypeKeySerializationProxy(this);
  }
  
  static {
    com.guidewire._generated.typekey.BatchProcessTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.BatchProcessType>() {
      public void clearCache(typekey.BatchProcessType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.BatchProcessType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.BatchProcessType newInstance(java.lang.String code) {
        return new typekey.BatchProcessType(code);
      }
      
      
    });
  }
}