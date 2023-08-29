package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchiveInfoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchiveInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=Upload_Input) at ArchiveInfo.pcf: line 57, column 69
    function action_15 () : void {
      upload()
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at ArchiveInfo.pcf: line 68, column 65
    function action_18 () : void {
      gw.plugin.Plugins.get(gw.plugin.archiving.IArchiveSource).refresh()
    }
    
    // 'action' attribute on ToolbarButton (id=DownloadButton) at ArchiveInfo.pcf: line 72, column 66
    function action_19 () : void {
      gw.api.web.tools.ArchiveInfoPage.downloadArchiveInfo()
    }
    
    // 'action' attribute on ToolbarButton (id=Status) at ArchiveInfo.pcf: line 76, column 97
    function action_20 () : void {
      WorkQueueInfo.go(new gw.api.web.tools.WorkQueueDisplayInfo(com.guidewire.pl.system.dependency.PLDependencies.getDistributedWorkerManager().getWorkQueue(com.guidewire.pl.system.dependency.PLDependencies.getDomainGraphSupport().getBatchProcessType().getCode())))
    }
    
    // 'action' attribute on ToolbarButton (id=Download) at ArchiveInfo.pcf: line 81, column 98
    function action_22 () : void {
      gw.api.web.tools.ArchiveInfoPage.downloadUpgradeDatamodelInfo()
    }
    
    // 'action' attribute on ButtonInput (id=ResetExcludedBecauseOfRules_Input) at ArchiveInfo.pcf: line 106, column 86
    function action_32 () : void {
      archiveCountSummary.resetExcludedBecauseOfRulesFlag()
    }
    
    // 'action' attribute on ButtonInput (id=ResetExcludedBecauseOfFailure_Input) at ArchiveInfo.pcf: line 118, column 86
    function action_37 () : void {
      archiveCountSummary.resetExcludedBecauseOfFailureFlag()
    }
    
    // 'action' attribute on ToolbarButton (id=Status) at ArchiveInfo.pcf: line 76, column 97
    function action_dest_21 () : pcf.api.Destination {
      return pcf.WorkQueueInfo.createDestination(new gw.api.web.tools.WorkQueueDisplayInfo(com.guidewire.pl.system.dependency.PLDependencies.getDistributedWorkerManager().getWorkQueue(com.guidewire.pl.system.dependency.PLDependencies.getDomainGraphSupport().getBatchProcessType().getCode())))
    }
    
    // 'available' attribute on ButtonInput (id=Upload_Input) at ArchiveInfo.pcf: line 57, column 69
    function available_13 () : java.lang.Boolean {
      return gw.api.web.tools.ArchiveInfoPage.isDevMode() and uploadFile != null
    }
    
    // 'available' attribute on ButtonInput (id=ResetExcludedBecauseOfRules_Input) at ArchiveInfo.pcf: line 106, column 86
    function available_31 () : java.lang.Boolean {
      return archiveCountSummary.getExcludedBecauseOfRulesCount() > 0
    }
    
    // 'available' attribute on ButtonInput (id=ResetExcludedBecauseOfFailure_Input) at ArchiveInfo.pcf: line 118, column 86
    function available_36 () : java.lang.Boolean {
      return archiveCountSummary.getExcludedBecauseOfFailureCount() > 0
    }
    
    // 'available' attribute on FileInput (id=UploadFile_Input) at ArchiveInfo.pcf: line 47, column 67
    function available_6 () : java.lang.Boolean {
      return gw.api.web.tools.ArchiveInfoPage.isDevMode()
    }
    
    // 'canVisit' attribute on Page (id=ArchiveInfo) at ArchiveInfo.pcf: line 13, column 75
    static function canVisit_81 () : java.lang.Boolean {
      return gw.api.web.tools.ArchiveInfoPage.isArchivingAvailable()
    }
    
    // 'def' attribute on PanelRef at ArchiveInfo.pcf: line 124, column 26
    function def_onEnter_39 (def :  pcf.ArchiveSourceInfoDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at ArchiveInfo.pcf: line 124, column 26
    function def_refreshVariables_40 (def :  pcf.ArchiveSourceInfoDV) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on FileInput (id=UploadFile_Input) at ArchiveInfo.pcf: line 47, column 67
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      uploadFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'initialValue' attribute on Variable at ArchiveInfo.pcf: line 19, column 52
    function initialValue_0 () : gw.api.archiving.ArchiveCountSummary {
      return new gw.api.archiving.ArchiveCountSummary()
    }
    
    // 'initialValue' attribute on Variable at ArchiveInfo.pcf: line 24, column 64
    function initialValue_1 () : gw.api.archiving.ArchiveCountSummarySinceLastRun {
      return new gw.api.archiving.ArchiveCountSummarySinceLastRun()
    }
    
    // 'initialValue' attribute on Variable at ArchiveInfo.pcf: line 28, column 22
    function initialValue_2 () : String {
      return null
    }
    
    // 'initialValue' attribute on Variable at ArchiveInfo.pcf: line 32, column 34
    function initialValue_3 () : gw.api.web.WebFile {
      return null
    }
    
    // 'label' attribute on AlertBar (id=Alert) at ArchiveInfo.pcf: line 38, column 41
    function label_5 () : java.lang.Object {
      return alertMessage
    }
    
    // 'parent' attribute on Page (id=ArchiveInfo) at ArchiveInfo.pcf: line 13, column 75
    static function parent_82 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    // 'sortBy' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function sortValue_41 (upgradeDatamodelInfo :  entity.UpgradeDatamodelInfo) : java.lang.Object {
      return upgradeDatamodelInfo.PlatformMajorVers
    }
    
    // 'sortBy' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function sortValue_42 (upgradeDatamodelInfo :  entity.UpgradeDatamodelInfo) : java.lang.Object {
      return upgradeDatamodelInfo.PlatformMinorVers
    }
    
    // 'sortBy' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function sortValue_43 (upgradeDatamodelInfo :  entity.UpgradeDatamodelInfo) : java.lang.Object {
      return upgradeDatamodelInfo.ApplicationMajorVers
    }
    
    // 'sortBy' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function sortValue_44 (upgradeDatamodelInfo :  entity.UpgradeDatamodelInfo) : java.lang.Object {
      return upgradeDatamodelInfo.ApplicationMinorVers
    }
    
    // 'sortBy' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function sortValue_45 (upgradeDatamodelInfo :  entity.UpgradeDatamodelInfo) : java.lang.Object {
      return upgradeDatamodelInfo.ExtensionsVers
    }
    
    // 'value' attribute on TextInput (id=Archived_Input) at ArchiveInfo.pcf: line 89, column 46
    function valueRoot_24 () : java.lang.Object {
      return archiveCountSummary
    }
    
    // 'value' attribute on TextInput (id=Archived_Input) at ArchiveInfo.pcf: line 89, column 46
    function value_23 () : java.lang.Integer {
      return archiveCountSummary.ArchivedCount
    }
    
    // 'value' attribute on TextInput (id=Skipped_Input) at ArchiveInfo.pcf: line 94, column 46
    function value_26 () : java.lang.Integer {
      return archiveCountSummary.SkippedCount
    }
    
    // 'value' attribute on TextInput (id=ExcludedBecauseOfRules_Input) at ArchiveInfo.pcf: line 99, column 46
    function value_29 () : java.lang.Integer {
      return archiveCountSummary.getExcludedBecauseOfRulesCount()
    }
    
    // 'value' attribute on TextInput (id=ExcludedBecauseOfFailure_Input) at ArchiveInfo.pcf: line 111, column 46
    function value_34 () : java.lang.Integer {
      return archiveCountSummary.getExcludedBecauseOfFailureCount()
    }
    
    // 'value' attribute on RowIterator at ArchiveInfo.pcf: line 141, column 93
    function value_75 () : gw.api.database.IQueryBeanResult<entity.UpgradeDatamodelInfo> {
      return new gw.api.database.Query<UpgradeDatamodelInfo>(UpgradeDatamodelInfo).select()
    }
    
    // 'value' attribute on FileInput (id=UploadFile_Input) at ArchiveInfo.pcf: line 47, column 67
    function value_8 () : gw.api.web.WebFile {
      return uploadFile
    }
    
    // 'visible' attribute on AlertBar (id=Alert) at ArchiveInfo.pcf: line 38, column 41
    function visible_4 () : java.lang.Boolean {
      return alertMessage != null
    }
    
    override property get CurrentLocation () : pcf.ArchiveInfo {
      return super.CurrentLocation as pcf.ArchiveInfo
    }
    
    property get alertMessage () : String {
      return getVariableValue("alertMessage", 0) as String
    }
    
    property set alertMessage ($arg :  String) {
      setVariableValue("alertMessage", 0, $arg)
    }
    
    property get archiveCountSummary () : gw.api.archiving.ArchiveCountSummary {
      return getVariableValue("archiveCountSummary", 0) as gw.api.archiving.ArchiveCountSummary
    }
    
    property set archiveCountSummary ($arg :  gw.api.archiving.ArchiveCountSummary) {
      setVariableValue("archiveCountSummary", 0, $arg)
    }
    
    property get archiveSummary () : gw.api.archiving.ArchiveCountSummarySinceLastRun {
      return getVariableValue("archiveSummary", 0) as gw.api.archiving.ArchiveCountSummarySinceLastRun
    }
    
    property set archiveSummary ($arg :  gw.api.archiving.ArchiveCountSummarySinceLastRun) {
      setVariableValue("archiveSummary", 0, $arg)
    }
    
    property get uploadFile () : gw.api.web.WebFile {
      return getVariableValue("uploadFile", 0) as gw.api.web.WebFile
    }
    
    property set uploadFile ($arg :  gw.api.web.WebFile) {
      setVariableValue("uploadFile", 0, $arg)
    }
    
    function upload() {
      try {
        var success = gw.api.web.tools.ArchiveInfoPage.uploadUpgradeDatamodelInfo(uploadFile)
        if (success) {
          alertMessage = DisplayKey.get("Web.ServerTools.ArchiveInfo.UploadSuccess")
        } else {
          alertMessage = DisplayKey.get("Web.ServerTools.ArchiveInfo.UploadSuccessNoAction")
        }
      } finally {
        uploadFile = null
      }
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ArchiveInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function actionAvailable_49 () : java.lang.Boolean {
      return archiveCountSummaryByDatamodelVersion.EarliestDate != null
    }
    
    // 'action' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function action_47 () : void {
      ArchiveInfoByDateRange.go(archiveCountSummaryByDatamodelVersion, archiveCountSummaryByDatamodelVersion.EarliestDate, archiveCountSummaryByDatamodelVersion.LatestDate)
    }
    
    // 'action' attribute on ButtonCell (id=ExcludedBecauseOfRulesReset_Cell) at ArchiveInfo.pcf: line 190, column 88
    function action_66 () : void {
      archiveCountSummaryByDatamodelVersion.resetExcludedBecauseOfRulesFlag()
    }
    
    // 'action' attribute on ButtonCell (id=ExcludedBecauseOfFailureReset_Cell) at ArchiveInfo.pcf: line 205, column 88
    function action_72 () : void {
      archiveCountSummaryByDatamodelVersion.resetExcludedBecauseOfFailureFlag()
    }
    
    // 'action' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function action_dest_48 () : pcf.api.Destination {
      return pcf.ArchiveInfoByDateRange.createDestination(archiveCountSummaryByDatamodelVersion, archiveCountSummaryByDatamodelVersion.EarliestDate, archiveCountSummaryByDatamodelVersion.LatestDate)
    }
    
    // 'available' attribute on ButtonCell (id=ExcludedBecauseOfRulesReset_Cell) at ArchiveInfo.pcf: line 190, column 88
    function available_65 () : java.lang.Boolean {
      return archiveCountSummaryByDatamodelVersion.ExcludedBecauseOfRulesCount > 0
    }
    
    // 'available' attribute on ButtonCell (id=ExcludedBecauseOfFailureReset_Cell) at ArchiveInfo.pcf: line 205, column 88
    function available_71 () : java.lang.Boolean {
      return archiveCountSummaryByDatamodelVersion.ExcludedBecauseOfFailureCount > 0
    }
    
    // 'initialValue' attribute on Variable at ArchiveInfo.pcf: line 145, column 78
    function initialValue_46 () : gw.api.archiving.ArchiveCountSummaryByDatamodelVersion {
      return new gw.api.archiving.ArchiveCountSummaryByDatamodelVersion(upgradeDatamodelInfo)
    }
    
    // RowIterator at ArchiveInfo.pcf: line 141, column 93
    function initializeVariables_74 () : void {
        archiveCountSummaryByDatamodelVersion = new gw.api.archiving.ArchiveCountSummaryByDatamodelVersion(upgradeDatamodelInfo);

    }
    
    // 'value' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function valueRoot_51 () : java.lang.Object {
      return archiveCountSummaryByDatamodelVersion
    }
    
    // 'value' attribute on TextCell (id=VersionString_Cell) at ArchiveInfo.pcf: line 156, column 35
    function value_50 () : java.lang.String {
      return archiveCountSummaryByDatamodelVersion.VersionString
    }
    
    // 'value' attribute on DateCell (id=EarliestDate_Cell) at ArchiveInfo.pcf: line 161, column 77
    function value_53 () : java.util.Date {
      return archiveCountSummaryByDatamodelVersion.EarliestDate
    }
    
    // 'value' attribute on DateCell (id=LatestDate_Cell) at ArchiveInfo.pcf: line 166, column 75
    function value_56 () : java.util.Date {
      return archiveCountSummaryByDatamodelVersion.LatestDate
    }
    
    // 'value' attribute on TextCell (id=Archived_Cell) at ArchiveInfo.pcf: line 175, column 35
    function value_59 () : java.lang.Integer {
      return archiveCountSummaryByDatamodelVersion.ArchivedCount
    }
    
    // 'value' attribute on TextCell (id=ExcludedBecauseOfRules_Cell) at ArchiveInfo.pcf: line 184, column 35
    function value_62 () : java.lang.Integer {
      return archiveCountSummaryByDatamodelVersion.ExcludedBecauseOfRulesCount
    }
    
    // 'value' attribute on TextCell (id=ExcludedBecauseOfFailure_Cell) at ArchiveInfo.pcf: line 199, column 35
    function value_68 () : java.lang.Integer {
      return archiveCountSummaryByDatamodelVersion.ExcludedBecauseOfFailureCount
    }
    
    property get archiveCountSummaryByDatamodelVersion () : gw.api.archiving.ArchiveCountSummaryByDatamodelVersion {
      return getVariableValue("archiveCountSummaryByDatamodelVersion", 1) as gw.api.archiving.ArchiveCountSummaryByDatamodelVersion
    }
    
    property set archiveCountSummaryByDatamodelVersion ($arg :  gw.api.archiving.ArchiveCountSummaryByDatamodelVersion) {
      setVariableValue("archiveCountSummaryByDatamodelVersion", 1, $arg)
    }
    
    property get upgradeDatamodelInfo () : entity.UpgradeDatamodelInfo {
      return getIteratedValue(1) as entity.UpgradeDatamodelInfo
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelSetExpressionsImpl extends ArchiveInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ArchiveInfo.pcf: line 218, column 97
    function def_onEnter_78 (def :  pcf.ArchiveExcludeDetailsCV) : void {
      def.onEnter(new gw.api.archiving.ArchiveCountSummarySinceLastRun())
    }
    
    // 'def' attribute on PanelRef at ArchiveInfo.pcf: line 218, column 97
    function def_refreshVariables_79 (def :  pcf.ArchiveExcludeDetailsCV) : void {
      def.refreshVariables(new gw.api.archiving.ArchiveCountSummarySinceLastRun())
    }
    
    // 'initialValue' attribute on Variable at ArchiveInfo.pcf: line 216, column 68
    function initialValue_76 () : gw.api.archiving.ArchiveCountSummarySinceLastRun {
      return new gw.api.archiving.ArchiveCountSummarySinceLastRun()
    }
    
    // 'title' attribute on TitleBar at ArchiveInfo.pcf: line 220, column 144
    function title_77 () : java.lang.String {
      return DisplayKey.get("Web.ServerTools.ArchiveInfo.Last24Hours", archiveSummary.LastRunDate, archiveSummary.ProcessId)
    }
    
    // 'visible' attribute on PanelSet at ArchiveInfo.pcf: line 212, column 254
    function visible_80 () : java.lang.Boolean {
      return archiveSummary.LastRunDate != null and (archiveCountSummarySinceLastRun.SkippedCount > 0 or archiveCountSummarySinceLastRun.ExcludedBecauseOfRulesCount > 0 or archiveCountSummarySinceLastRun.ExcludedBecauseOfFailureCount > 0)
    }
    
    property get archiveCountSummarySinceLastRun () : gw.api.archiving.ArchiveCountSummarySinceLastRun {
      return getVariableValue("archiveCountSummarySinceLastRun", 1) as gw.api.archiving.ArchiveCountSummarySinceLastRun
    }
    
    property set archiveCountSummarySinceLastRun ($arg :  gw.api.archiving.ArchiveCountSummarySinceLastRun) {
      setVariableValue("archiveCountSummarySinceLastRun", 1, $arg)
    }
    
    
  }
  
  
}