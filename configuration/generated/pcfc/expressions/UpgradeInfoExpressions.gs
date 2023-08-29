package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/UpgradeInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UpgradeInfoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/UpgradeInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends UpgradeInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=BatchProcess_Cell) at UpgradeInfo.pcf: line 334, column 57
    function valueRoot_104 () : java.lang.Object {
      return processHistory
    }
    
    // 'value' attribute on TypeKeyCell (id=BatchProcess_Cell) at UpgradeInfo.pcf: line 334, column 57
    function value_103 () : typekey.BatchProcessType {
      return processHistory.ProcessType
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at UpgradeInfo.pcf: line 342, column 53
    function value_106 () : java.util.Date {
      return processHistory.StartDate
    }
    
    // 'value' attribute on DateCell (id=CompleteDate_Cell) at UpgradeInfo.pcf: line 349, column 96
    function value_109 () : java.util.Date {
      return processHistory.RanToCompletion ? processHistory.CompleteDate : null
    }
    
    // 'value' attribute on TextCell (id=OpsPerformed_Cell) at UpgradeInfo.pcf: line 354, column 50
    function value_111 () : java.lang.Integer {
      return processHistory.OpsPerformed
    }
    
    // 'value' attribute on TextCell (id=FailedOps_Cell) at UpgradeInfo.pcf: line 359, column 50
    function value_114 () : java.lang.Integer {
      return processHistory.FailedOps
    }
    
    // 'value' attribute on TextCell (id=FailureReason_Cell) at UpgradeInfo.pcf: line 364, column 57
    function value_117 () : java.lang.String {
      return processHistory.FailureReason
    }
    
    property get processHistory () : entity.ProcessHistory {
      return getIteratedValue(1) as entity.ProcessHistory
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/UpgradeInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UpgradeInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=View) at UpgradeInfo.pcf: line 275, column 66
    function action_90 () : void {
      ReportView.push("UpgradeInfo", UpgradeRow.PublicID)
    }
    
    // 'action' attribute on Link (id=Download) at UpgradeInfo.pcf: line 292, column 66
    function action_94 () : void {
      Page.download(UpgradeRow)
    }
    
    // 'action' attribute on Link (id=DeleteDetails) at UpgradeInfo.pcf: line 307, column 66
    function action_96 () : void {
      UpgradeRow.deleteAllChildren()
    }
    
    // 'action' attribute on Link (id=View) at UpgradeInfo.pcf: line 275, column 66
    function action_dest_91 () : pcf.api.Destination {
      return pcf.ReportView.createDestination("UpgradeInfo", UpgradeRow.PublicID)
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 173, column 83
    function initialValue_58 () : gw.api.database.IQueryBeanResult<UpgradeRowCount> {
      return UpgradeRow.findUpgradeRowCounts() as gw.api.database.IQueryBeanResult<UpgradeRowCount>
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 177, column 88
    function initialValue_59 () : gw.api.database.IQueryBeanResult<UpgradeTableRegistry> {
      return UpgradeRow.findUpgradeTableRegistries() as gw.api.database.IQueryBeanResult<UpgradeTableRegistry>
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 181, column 87
    function initialValue_60 () : gw.api.database.IQueryBeanResult<UpgradeDBStorageSet> {
      return UpgradeRow.findUpgradeDBStorageSets(false) as gw.api.database.IQueryBeanResult<UpgradeDBStorageSet>
    }
    
    // RowIterator (id=UpgradeInstanceIterator) at UpgradeInfo.pcf: line 169, column 74
    function initializeVariables_97 () : void {
        RowCountsQuery = UpgradeRow.findUpgradeRowCounts() as gw.api.database.IQueryBeanResult<UpgradeRowCount>;
  TableRegistryQuery = UpgradeRow.findUpgradeTableRegistries() as gw.api.database.IQueryBeanResult<UpgradeTableRegistry>;
  StorageSetQueryBefore = UpgradeRow.findUpgradeDBStorageSets(false) as gw.api.database.IQueryBeanResult<UpgradeDBStorageSet>;

    }
    
    // 'label' attribute on Link (id=Status) at UpgradeInfo.pcf: line 195, column 61
    function label_63 () : java.lang.Object {
      return Page.getStatus(UpgradeRow)
    }
    
    // 'label' attribute on Link (id=DeferredTaskStatus) at UpgradeInfo.pcf: line 258, column 85
    function label_88 () : java.lang.Object {
      return Page.getDeferredUpgradeStatus(UpgradeRow).DisplayKey
    }
    
    // 'tooltip' attribute on Link (id=NotRunning) at UpgradeInfo.pcf: line 255, column 82
    function tooltip_87 () : java.lang.String {
      return Page.getDeferredUpgradeStatus(UpgradeRow).DisplayKey.toString()
    }
    
    // 'value' attribute on DateCell (id=TotalStartTime_Cell) at UpgradeInfo.pcf: line 213, column 39
    function valueRoot_71 () : java.lang.Object {
      return UpgradeRow
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at UpgradeInfo.pcf: line 186, column 61
    function value_61 () : java.lang.String {
      return Page.getBuildLabel(UpgradeRow)
    }
    
    // 'value' attribute on TextInput (id=StatusDetail_Input) at UpgradeInfo.pcf: line 201, column 67
    function value_65 () : java.lang.String {
      return Page.getStatusDetail(UpgradeRow)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at UpgradeInfo.pcf: line 206, column 55
    function value_68 () : java.lang.String {
      return Page.getType(UpgradeRow)
    }
    
    // 'value' attribute on DateCell (id=TotalStartTime_Cell) at UpgradeInfo.pcf: line 213, column 39
    function value_70 () : java.util.Date {
      return UpgradeRow.StartTime
    }
    
    // 'value' attribute on DateCell (id=TotalEndTime_Cell) at UpgradeInfo.pcf: line 220, column 39
    function value_73 () : java.util.Date {
      return UpgradeRow.EndTime
    }
    
    // 'value' attribute on TextCell (id=SchemaReportDuration_Cell) at UpgradeInfo.pcf: line 225, column 71
    function value_76 () : java.lang.String {
      return UpgradeRow.FormattedSchemaReportDuration
    }
    
    // 'value' attribute on TextCell (id=DatabaseDuration_Cell) at UpgradeInfo.pcf: line 230, column 67
    function value_79 () : java.lang.String {
      return UpgradeRow.FormattedDatabaseDuration
    }
    
    // 'value' attribute on TextCell (id=TotalDuration_Cell) at UpgradeInfo.pcf: line 236, column 39
    function value_82 () : java.lang.String {
      return UpgradeRow.FormattedTotalDuration
    }
    
    // 'visible' attribute on TextInput (id=StatusDetail_Input) at UpgradeInfo.pcf: line 201, column 67
    function visible_64 () : java.lang.Boolean {
      return Page.hasStatusDetail(UpgradeRow)
    }
    
    // 'visible' attribute on Link (id=Completed) at UpgradeInfo.pcf: line 249, column 86
    function visible_85 () : java.lang.Boolean {
      return Page.getDeferredUpgradeStatus(UpgradeRow).Completed
    }
    
    // 'visible' attribute on Link (id=NotRunning) at UpgradeInfo.pcf: line 255, column 82
    function visible_86 () : java.lang.Boolean {
      return Page.getDeferredUpgradeStatus(UpgradeRow).Error
    }
    
    // 'visible' attribute on Link (id=View) at UpgradeInfo.pcf: line 275, column 66
    function visible_89 () : java.lang.Boolean {
      return UpgradeRow.ProfilerData != null
    }
    
    // 'visible' attribute on LinkCell (id=ViewLinkCell) at UpgradeInfo.pcf: line 266, column 38
    function visible_92 () : java.lang.Boolean {
      return gw.api.system.server.ServerModeUtil.Dev
    }
    
    property get RowCountsQuery () : gw.api.database.IQueryBeanResult<UpgradeRowCount> {
      return getVariableValue("RowCountsQuery", 1) as gw.api.database.IQueryBeanResult<UpgradeRowCount>
    }
    
    property set RowCountsQuery ($arg :  gw.api.database.IQueryBeanResult<UpgradeRowCount>) {
      setVariableValue("RowCountsQuery", 1, $arg)
    }
    
    property get StorageSetQueryBefore () : gw.api.database.IQueryBeanResult<UpgradeDBStorageSet> {
      return getVariableValue("StorageSetQueryBefore", 1) as gw.api.database.IQueryBeanResult<UpgradeDBStorageSet>
    }
    
    property set StorageSetQueryBefore ($arg :  gw.api.database.IQueryBeanResult<UpgradeDBStorageSet>) {
      setVariableValue("StorageSetQueryBefore", 1, $arg)
    }
    
    property get TableRegistryQuery () : gw.api.database.IQueryBeanResult<UpgradeTableRegistry> {
      return getVariableValue("TableRegistryQuery", 1) as gw.api.database.IQueryBeanResult<UpgradeTableRegistry>
    }
    
    property set TableRegistryQuery ($arg :  gw.api.database.IQueryBeanResult<UpgradeTableRegistry>) {
      setVariableValue("TableRegistryQuery", 1, $arg)
    }
    
    property get UpgradeRow () : entity.UpgradeInstance {
      return getIteratedValue(1) as entity.UpgradeInstance
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/UpgradeInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UpgradeInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 193
    function action_13 () : void {
      InitiateBackoutConfirmPopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at UpgradeInfo.pcf: line 65, column 192
    function action_18 () : void {
      Page.cancelIncrementalUpgrade()
    }
    
    // 'action' attribute on ToolbarButton (id=ForceCancel) at UpgradeInfo.pcf: line 70, column 134
    function action_20 () : void {
      ForceCancelConfirmPopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=ForceBackout) at UpgradeInfo.pcf: line 75, column 224
    function action_23 () : void {
      ForceBackoutConfirmPopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=StartBlueGreen) at UpgradeInfo.pcf: line 81, column 162
    function action_27 () : void {
      StartBlueGreenUpgradePopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at UpgradeInfo.pcf: line 39, column 63
    function action_3 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=BlueGreenEnableSchemaMigration) at UpgradeInfo.pcf: line 86, column 93
    function action_30 () : void {
      Page.blueGreenEnableSchemaMigration()
    }
    
    // 'action' attribute on ToolbarButton (id=BlueGreenEnableGreenCluster) at UpgradeInfo.pcf: line 91, column 96
    function action_32 () : void {
      Page.blueGreenEnableGreenCluster()
    }
    
    // 'action' attribute on ToolbarButton (id=BlueGreenComplete) at UpgradeInfo.pcf: line 99, column 118
    function action_35 () : void {
      Page.blueGreenUpgradeComplete()
    }
    
    // 'action' attribute on ToolbarButton (id=StartFull) at UpgradeInfo.pcf: line 104, column 101
    function action_38 () : void {
      StartFullUpgradePopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=CancelFull) at UpgradeInfo.pcf: line 109, column 49
    function action_41 () : void {
      Page.cancelFullUpgrade()
    }
    
    // 'actionOnComplete' attribute on ProgressInput (id=BackOutProgress_Input) at UpgradeInfo.pcf: line 129, column 47
    function action_46 () : void {
      UpgradeInfo.go()
    }
    
    // 'action' attribute on ToolbarButton (id=StartRolling) at UpgradeInfo.pcf: line 44, column 142
    function action_5 () : void {
      StartRollingUpgradePopup.push(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=RollingComplete) at UpgradeInfo.pcf: line 52, column 88
    function action_9 () : void {
      Page.rollingUpgradeComplete()
    }
    
    // 'action' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 193
    function action_dest_14 () : pcf.api.Destination {
      return pcf.InitiateBackoutConfirmPopup.createDestination(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=ForceCancel) at UpgradeInfo.pcf: line 70, column 134
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ForceCancelConfirmPopup.createDestination(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=ForceBackout) at UpgradeInfo.pcf: line 75, column 224
    function action_dest_24 () : pcf.api.Destination {
      return pcf.ForceBackoutConfirmPopup.createDestination(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=StartBlueGreen) at UpgradeInfo.pcf: line 81, column 162
    function action_dest_28 () : pcf.api.Destination {
      return pcf.StartBlueGreenUpgradePopup.createDestination(Page)
    }
    
    // 'action' attribute on ToolbarButton (id=StartFull) at UpgradeInfo.pcf: line 104, column 101
    function action_dest_39 () : pcf.api.Destination {
      return pcf.StartFullUpgradePopup.createDestination(Page)
    }
    
    // 'actionOnComplete' attribute on ProgressInput (id=BackOutProgress_Input) at UpgradeInfo.pcf: line 129, column 47
    function action_dest_47 () : pcf.api.Destination {
      return pcf.UpgradeInfo.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=StartRolling) at UpgradeInfo.pcf: line 44, column 142
    function action_dest_6 () : pcf.api.Destination {
      return pcf.StartRollingUpgradePopup.createDestination(Page)
    }
    
    // 'afterEnter' attribute on Page (id=UpgradeInfo) at UpgradeInfo.pcf: line 11, column 81
    function afterEnter_122 () : void {
      if (Page.SomeUpgradeInProgress) { gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.RollingInProgress")) }
    }
    
    // 'available' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 193
    function available_11 () : java.lang.Boolean {
      return !Page.DatabaseWorkInProgress
    }
    
    // 'available' attribute on ToolbarButton (id=Cancel) at UpgradeInfo.pcf: line 65, column 192
    function available_16 () : java.lang.Boolean {
      return !Page.UpgradeSchemaReportInProgress
    }
    
    // 'available' attribute on ToolbarButton (id=StartBlueGreen) at UpgradeInfo.pcf: line 81, column 162
    function available_25 () : java.lang.Boolean {
      return Page.BlueGreenUpgradeAllowedForCurrentDB
    }
    
    // 'available' attribute on ToolbarButton (id=RollingComplete) at UpgradeInfo.pcf: line 52, column 88
    function available_7 () : java.lang.Boolean {
      return Page.DatabaseWorkDone && !hasActiveServersNotEquivalentToCurrentConfiguration
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 193
    function confirmMessage_15 () : java.lang.String {
      return Page.DatabaseWorkInProgress ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.BackOutCannotStartMigrationInProgress") : Page.BackOutInProgress ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.BackOutCannotStartAnotherBackOutInProgress") : null
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 17, column 50
    function initialValue_0 () : gw.api.tools.UpgradeInfoPageHelper {
      return new gw.api.tools.UpgradeInfoPageHelper()
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 26, column 71
    function initialValue_1 () : gw.api.database.IQueryBeanResult<UpgradeInstance> {
      return Page.findAllUpgradeInstancesDateDescending()
    }
    
    // 'initialValue' attribute on Variable at UpgradeInfo.pcf: line 31, column 23
    function initialValue_2 () : Boolean {
      return !Page.ActiveServersNotEquivalentToCurrentConfiguration.isEmpty()
    }
    
    // 'label' attribute on Verbatim at UpgradeInfo.pcf: line 113, column 48
    function label_43 () : java.lang.String {
      return Page.LatestUpgrade.UpdateStatistics ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.StatsUpdated") : (Page.hasRecentUpdateStatisticsProcessRun() ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.StatsNotUpdatedRecentRuns") : DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.StatsNotUpdatedNoRecentRuns"))
    }
    
    // 'label' attribute on Verbatim (id=CurrentVersion) at UpgradeInfo.pcf: line 118, column 124
    function label_44 () : java.lang.String {
      return DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.CurrentVersion", Page.ActiveBuildLabel)
    }
    
    // 'parent' attribute on Page (id=UpgradeInfo) at UpgradeInfo.pcf: line 11, column 81
    static function parent_123 () : pcf.api.Destination {
      return pcf.ServerTools.createDestination()
    }
    
    // 'percentage' attribute on ProgressInput (id=BackOutProgress_Input) at UpgradeInfo.pcf: line 129, column 47
    function percentage_48 () : java.lang.Double {
      return Page.BackOutInProgress ? -1 : 100
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at UpgradeInfo.pcf: line 342, column 53
    function sortValue_100 (processHistory :  entity.ProcessHistory) : java.lang.Object {
      return processHistory.StartDate
    }
    
    // 'value' attribute on TextCell (id=OpsPerformed_Cell) at UpgradeInfo.pcf: line 354, column 50
    function sortValue_101 (processHistory :  entity.ProcessHistory) : java.lang.Object {
      return processHistory.OpsPerformed
    }
    
    // 'value' attribute on TextCell (id=FailedOps_Cell) at UpgradeInfo.pcf: line 359, column 50
    function sortValue_102 (processHistory :  entity.ProcessHistory) : java.lang.Object {
      return processHistory.FailedOps
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at UpgradeInfo.pcf: line 186, column 61
    function sortValue_50 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return Page.getBuildLabel(UpgradeRow)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at UpgradeInfo.pcf: line 206, column 55
    function sortValue_51 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return Page.getType(UpgradeRow)
    }
    
    // 'value' attribute on DateCell (id=TotalStartTime_Cell) at UpgradeInfo.pcf: line 213, column 39
    function sortValue_52 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.StartTime
    }
    
    // 'value' attribute on DateCell (id=TotalEndTime_Cell) at UpgradeInfo.pcf: line 220, column 39
    function sortValue_53 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.EndTime
    }
    
    // 'value' attribute on TextCell (id=SchemaReportDuration_Cell) at UpgradeInfo.pcf: line 225, column 71
    function sortValue_54 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.FormattedSchemaReportDuration
    }
    
    // 'value' attribute on TextCell (id=DatabaseDuration_Cell) at UpgradeInfo.pcf: line 230, column 67
    function sortValue_55 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.FormattedDatabaseDuration
    }
    
    // 'value' attribute on TextCell (id=TotalDuration_Cell) at UpgradeInfo.pcf: line 236, column 39
    function sortValue_56 (UpgradeRow :  entity.UpgradeInstance) : java.lang.Object {
      return UpgradeRow.FormattedTotalDuration
    }
    
    // 'value' attribute on TypeKeyCell (id=BatchProcess_Cell) at UpgradeInfo.pcf: line 334, column 57
    function sortValue_99 (processHistory :  entity.ProcessHistory) : java.lang.Object {
      return processHistory.ProcessType
    }
    
    // 'tooltip' attribute on ToolbarButton (id=RollingComplete) at UpgradeInfo.pcf: line 52, column 88
    function tooltip_10 () : java.lang.String {
      return hasActiveServersNotEquivalentToCurrentConfiguration ? DisplayKey.get('Java.Database.Rolling.Upgrade.RollingComplete.HasActiveSourceServers') : ''
    }
    
    // 'value' attribute on RowIterator at UpgradeInfo.pcf: line 328, column 89
    function value_120 () : gw.api.database.IQueryBeanResult<entity.ProcessHistory> {
      return Page.findUpdateStatisticsProcessesAfterLatestUpgrade()
    }
    
    // 'value' attribute on RowIterator (id=UpgradeInstanceIterator) at UpgradeInfo.pcf: line 169, column 74
    function value_98 () : java.util.List<entity.UpgradeInstance> {
      return Page.findAllUpgradeInstancesDateDescending().iterator().toList()
    }
    
    // 'visible' attribute on ToolbarButton (id=InitiateBackout) at UpgradeInfo.pcf: line 59, column 193
    function visible_12 () : java.lang.Boolean {
      return (Page.RollingUpgradeInProgressAndConfigurationEquivalentToSource or Page.BlueGreenUpgradeProcessInProgressAndLocalConfigIsEquivalentToSource) and !Page.UpgradeJustStarted
    }
    
    // 'visible' attribute on PanelSet (id=StatisticsPanelSet) at UpgradeInfo.pcf: line 317, column 137
    function visible_121 () : java.lang.Boolean {
      return Page.LatestUpgrade != null and not Page.LatestUpgrade.UpdateStatistics and Page.hasRecentUpdateStatisticsProcessRun()
    }
    
    // 'visible' attribute on ToolbarButton (id=Cancel) at UpgradeInfo.pcf: line 65, column 192
    function visible_17 () : java.lang.Boolean {
      return (Page.RollingUpgradeInProgressAndConfigurationEquivalentToSource or Page.BlueGreenUpgradeProcessInProgressAndLocalConfigIsEquivalentToSource) and Page.UpgradeJustStarted
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceCancel) at UpgradeInfo.pcf: line 70, column 134
    function visible_19 () : java.lang.Boolean {
      return Page.BlueGreenUpgradeProcessInProgressAndLocalConfigIsEquivalentToSource and Page.UpgradeSchemaReportInProgress
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceBackout) at UpgradeInfo.pcf: line 75, column 224
    function visible_22 () : java.lang.Boolean {
      return (Page.RollingUpgradeInProgressAndConfigurationEquivalentToSource or Page.BlueGreenUpgradeProcessInProgressAndLocalConfigIsEquivalentToSource) and Page.DatabaseWorkInProgress and !Page.BackOutInProgress
    }
    
    // 'visible' attribute on ToolbarButton (id=StartBlueGreen) at UpgradeInfo.pcf: line 81, column 162
    function visible_26 () : java.lang.Boolean {
      return !gw.api.system.server.ServerUtil.RunningInGWCP and !Page.SomeUpgradeInProgress and gw.api.system.PLConfigParameters.ClusteringEnabled.Value
    }
    
    // 'visible' attribute on ToolbarButton (id=BlueGreenEnableSchemaMigration) at UpgradeInfo.pcf: line 86, column 93
    function visible_29 () : java.lang.Boolean {
      return Page.BlueGreenUpgradeInProgress and Page.BlueGreenSchemaReportComplete
    }
    
    // 'visible' attribute on ToolbarButton (id=BlueGreenEnableGreenCluster) at UpgradeInfo.pcf: line 91, column 96
    function visible_31 () : java.lang.Boolean {
      return Page.BlueGreenUpgradeInProgress and Page.BlueGreenSchemaMigrationComplete
    }
    
    // 'visible' attribute on ToolbarButton (id=BlueGreenComplete) at UpgradeInfo.pcf: line 99, column 118
    function visible_34 () : java.lang.Boolean {
      return Page.BlueGreenUpgradeProcessInProgressAndLocalConfigIsCompatibleOrBlueGreenCompatibleWithSource
    }
    
    // 'visible' attribute on ToolbarButton (id=StartFull) at UpgradeInfo.pcf: line 104, column 101
    function visible_37 () : java.lang.Boolean {
      return !gw.api.system.server.ServerUtil.RunningInGWCP and !Page.SomeUpgradeInProgress
    }
    
    // 'visible' attribute on ToolbarButton (id=StartRolling) at UpgradeInfo.pcf: line 44, column 142
    function visible_4 () : java.lang.Boolean {
      return Page.RollingUpgradeAllowed and !Page.SomeUpgradeInProgress and gw.api.system.PLConfigParameters.ClusteringEnabled.Value
    }
    
    // 'visible' attribute on ToolbarButton (id=CancelFull) at UpgradeInfo.pcf: line 109, column 49
    function visible_40 () : java.lang.Boolean {
      return Page.FullUpgradeInProgress
    }
    
    // 'visible' attribute on Verbatim at UpgradeInfo.pcf: line 113, column 48
    function visible_42 () : java.lang.Boolean {
      return !Page.SomeUpgradeInProgress
    }
    
    // 'visible' attribute on ProgressInput (id=BackOutProgress_Input) at UpgradeInfo.pcf: line 129, column 47
    function visible_45 () : java.lang.Boolean {
      return Page.BackOutInProgress
    }
    
    // 'visible' attribute on LinkCell (id=ViewLinkCell) at UpgradeInfo.pcf: line 266, column 38
    function visible_57 () : java.lang.Boolean {
      return gw.api.system.server.ServerModeUtil.Dev
    }
    
    // 'visible' attribute on ToolbarButton (id=RollingComplete) at UpgradeInfo.pcf: line 52, column 88
    function visible_8 () : java.lang.Boolean {
      return Page.RollingUpgradeInProgressAndConfigurationCompatibleWithSource
    }
    
    override property get CurrentLocation () : pcf.UpgradeInfo {
      return super.CurrentLocation as pcf.UpgradeInfo
    }
    
    property get Page () : gw.api.tools.UpgradeInfoPageHelper {
      return getVariableValue("Page", 0) as gw.api.tools.UpgradeInfoPageHelper
    }
    
    property set Page ($arg :  gw.api.tools.UpgradeInfoPageHelper) {
      setVariableValue("Page", 0, $arg)
    }
    
    property get UpgradeRows () : gw.api.database.IQueryBeanResult<UpgradeInstance> {
      return getVariableValue("UpgradeRows", 0) as gw.api.database.IQueryBeanResult<UpgradeInstance>
    }
    
    property set UpgradeRows ($arg :  gw.api.database.IQueryBeanResult<UpgradeInstance>) {
      setVariableValue("UpgradeRows", 0, $arg)
    }
    
    property get hasActiveServersNotEquivalentToCurrentConfiguration () : Boolean {
      return getVariableValue("hasActiveServersNotEquivalentToCurrentConfiguration", 0) as Boolean
    }
    
    property set hasActiveServersNotEquivalentToCurrentConfiguration ($arg :  Boolean) {
      setVariableValue("hasActiveServersNotEquivalentToCurrentConfiguration", 0, $arg)
    }
    
    property get hideInfoMsg () : boolean {
      return getVariableValue("hideInfoMsg", 0) as java.lang.Boolean
    }
    
    property set hideInfoMsg ($arg :  boolean) {
      setVariableValue("hideInfoMsg", 0, $arg)
    }
    
    
  }
  
  
}