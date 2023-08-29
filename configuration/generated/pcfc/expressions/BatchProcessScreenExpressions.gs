package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/BatchProcessScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BatchProcessScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/BatchProcessScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BatchProcessInfo_ProcessHistoryLVExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at BatchProcessScreen.pcf: line 238, column 78
    function filters_59 () : gw.api.filters.IFilter[] {
      return gw.api.web.tools.BatchProcessInfoPage.FILTERS
    }
    
    // 'initialValue' attribute on Variable at BatchProcessScreen.pcf: line 228, column 80
    function initialValue_58 () : gw.api.database.IQueryBeanResult<ProcessHistory> {
      return Page.findProcessHistory(SelectedProcess) as gw.api.database.IQueryBeanResult<ProcessHistory>
    }
    
    // 'value' attribute on DateCell (id=StartRequestedDate_Cell) at BatchProcessScreen.pcf: line 248, column 46
    function sortValue_60 (ph :  entity.ProcessHistory) : java.lang.Object {
      return ph.CreationDate
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at BatchProcessScreen.pcf: line 254, column 43
    function sortValue_61 (ph :  entity.ProcessHistory) : java.lang.Object {
      return ph.StartDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Scheduled_Cell) at BatchProcessScreen.pcf: line 265, column 43
    function sortValue_62 (ph :  entity.ProcessHistory) : java.lang.Object {
      return ph.Scheduled
    }
    
    // 'value' attribute on TextCell (id=OpsPerformed_Cell) at BatchProcessScreen.pcf: line 280, column 52
    function sortValue_63 (ph :  entity.ProcessHistory) : java.lang.Object {
      return ph.OpsPerformed
    }
    
    // 'value' attribute on TextCell (id=FailedOps_Cell) at BatchProcessScreen.pcf: line 285, column 52
    function sortValue_64 (ph :  entity.ProcessHistory) : java.lang.Object {
      return ph.FailedOps
    }
    
    // 'value' attribute on RowIterator at BatchProcessScreen.pcf: line 234, column 91
    function value_91 () : gw.api.database.IQueryBeanResult<entity.ProcessHistory> {
      return qp
    }
    
    property get qp () : gw.api.database.IQueryBeanResult<ProcessHistory> {
      return getVariableValue("qp", 2) as gw.api.database.IQueryBeanResult<ProcessHistory>
    }
    
    property set qp ($arg :  gw.api.database.IQueryBeanResult<ProcessHistory>) {
      setVariableValue("qp", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/BatchProcessScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BatchProcessScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BatchProcessScreen.pcf: line 14, column 53
    function initialValue_0 () : gw.api.web.tools.BatchProcessInfoPage {
      return new gw.api.web.tools.BatchProcessInfoPage()
    }
    
    // 'visible' attribute on AlertBar (id=SchedulerSuspendedAlert) at BatchProcessScreen.pcf: line 19, column 42
    function visible_1 () : java.lang.Boolean {
      return Page.SchedulerSuspended
    }
    
    property get Page () : gw.api.web.tools.BatchProcessInfoPage {
      return getVariableValue("Page", 0) as gw.api.web.tools.BatchProcessInfoPage
    }
    
    property set Page ($arg :  gw.api.web.tools.BatchProcessInfoPage) {
      setVariableValue("Page", 0, $arg)
    }
    
    property get batchProcessTypes () : BatchProcessType[] {
      return getRequireValue("batchProcessTypes", 0) as BatchProcessType[]
    }
    
    property set batchProcessTypes ($arg :  BatchProcessType[]) {
      setRequireValue("batchProcessTypes", 0, $arg)
    }
    
    
          function calculatePercentage(processStatus : gw.api.webservice.maintenanceTools.ProcessStatus) : int {
            if (not processStatus.StartingOrExecuting) {
              return 100
            }
            if (processStatus.OpsExpected <= 0 or processStatus.OpsExpected <= processStatus.OpsCompleted) {
              return -1
            }
            return ((processStatus.OpsCompleted * 100) / processStatus.OpsExpected)
          }
    
          function formatSchedule(actualSchedule : String, scheduleFromConfiguration : String) : String {
            if (scheduleFromConfiguration == actualSchedule) {
              return actualSchedule
            } else {
              return DisplayKey.get("Web.InternalTools.BatchProcessInfo.ChangedScheduleTemplate", actualSchedule, scheduleFromConfiguration ?: DisplayKey.get("Java.None"))
            }
          }
    
          function isProcessVisible(batchProcessType : BatchProcessType) : boolean {
            if (batchProcessType.isArchivingRelated) {
              return gw.api.web.tools.ArchiveInfoPage.isArchivingAvailable()
            } else if (batchProcessType.Code.equals("SolrDataImport")) {
              return !gw.api.system.server.ServerUtil.RunningInGWCP && gw.api.system.server.ServerModeUtil.isDev()
            } else {
              return true
            }
          }
        
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/BatchProcessScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ChartPanelExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'dataValues' attribute on DataSeries at BatchProcessScreen.pcf: line 207, column 41
    function dataValues_51 () : java.lang.Object {
      return qp
    }
    
    // 'initialValue' attribute on Variable at BatchProcessScreen.pcf: line 194, column 78
    function initialValue_50 () : gw.api.database.IQueryBeanResult<ProcessHistory> {
      return Page.findLastProcessHistory( SelectedProcess, 14 ) as gw.api.database.IQueryBeanResult<ProcessHistory>
    }
    
    // 'value' attribute on DataSeries at BatchProcessScreen.pcf: line 207, column 41
    function value_52 (value :  entity.ProcessHistory) : java.lang.Object {
      return (value.CompleteDate.Time - value.StartDate.Time)/1000
    }
    
    // 'value' attribute on DualAxisDataSeries at BatchProcessScreen.pcf: line 214, column 41
    function value_56 (value :  entity.ProcessHistory) : java.lang.Object {
      return value.OpsPerformed
    }
    
    // 'visible' attribute on ChartPanel at BatchProcessScreen.pcf: line 189, column 25
    function visible_57 () : java.lang.Boolean {
      return qp.getCount() > 0
    }
    
    // 'xValue' attribute on DataSeries at BatchProcessScreen.pcf: line 207, column 41
    function xValue_53 (value :  entity.ProcessHistory) : java.lang.Object {
      return value.StartDate
    }
    
    property get qp () : gw.api.database.IQueryBeanResult<ProcessHistory> {
      return getVariableValue("qp", 2) as gw.api.database.IQueryBeanResult<ProcessHistory>
    }
    
    property set qp ($arg :  gw.api.database.IQueryBeanResult<ProcessHistory>) {
      setVariableValue("qp", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/BatchProcessScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends BatchProcessInfo_ProcessHistoryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=StartRequestedDate_Cell) at BatchProcessScreen.pcf: line 248, column 46
    function valueRoot_66 () : java.lang.Object {
      return ph
    }
    
    // 'value' attribute on DateCell (id=StartRequestedDate_Cell) at BatchProcessScreen.pcf: line 248, column 46
    function value_65 () : java.util.Date {
      return ph.CreationDate
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at BatchProcessScreen.pcf: line 254, column 43
    function value_68 () : java.util.Date {
      return ph.StartDate
    }
    
    // 'value' attribute on DateCell (id=CompleteDate_Cell) at BatchProcessScreen.pcf: line 261, column 74
    function value_71 () : java.util.Date {
      return ph.RanToCompletion ? ph.CompleteDate : null
    }
    
    // 'value' attribute on BooleanRadioCell (id=Scheduled_Cell) at BatchProcessScreen.pcf: line 265, column 43
    function value_73 () : java.lang.Boolean {
      return ph.Scheduled
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at BatchProcessScreen.pcf: line 270, column 42
    function value_76 () : java.lang.String {
      return ph.ServerId
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BatchProcessScreen.pcf: line 275, column 45
    function value_79 () : java.lang.String {
      return ph.Description
    }
    
    // 'value' attribute on TextCell (id=OpsPerformed_Cell) at BatchProcessScreen.pcf: line 280, column 52
    function value_82 () : java.lang.Integer {
      return ph.OpsPerformed
    }
    
    // 'value' attribute on TextCell (id=FailedOps_Cell) at BatchProcessScreen.pcf: line 285, column 52
    function value_85 () : java.lang.Integer {
      return ph.FailedOps
    }
    
    // 'value' attribute on TextCell (id=FailureReason_Cell) at BatchProcessScreen.pcf: line 290, column 47
    function value_88 () : java.lang.String {
      return ph.FailureReason
    }
    
    property get ph () : entity.ProcessHistory {
      return getIteratedValue(3) as entity.ProcessHistory
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/BatchProcessScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=RunBatchWithoutNotify) at BatchProcessScreen.pcf: line 112, column 44
    function action_26 () : void {
      Page.start(batchProcess)
    }
    
    // 'action' attribute on Link (id=TerminateBatchWithoutNotify) at BatchProcessScreen.pcf: line 118, column 44
    function action_28 () : void {
      batchProcess.requestTermination()
    }
    
    // 'action' attribute on Link (id=DownloadHistory) at BatchProcessScreen.pcf: line 124, column 44
    function action_29 () : void {
      SelectedProcess = batchProcessType; BatchProcessDownloadConfigure.go(batchProcessType)
    }
    
    // 'action' attribute on Link (id=ScheduleStop) at BatchProcessScreen.pcf: line 155, column 44
    function action_40 () : void {
      Page.stopSchedule(batchProcessType)
    }
    
    // 'action' attribute on Link (id=ScheduleStart) at BatchProcessScreen.pcf: line 161, column 44
    function action_42 () : void {
      Page.startSchedule(batchProcessType)
    }
    
    // 'action' attribute on Link (id=ScheduleSync) at BatchProcessScreen.pcf: line 168, column 68
    function action_44 () : void {
      Page.syncScheduleWithConfiguration(batchProcessType)
    }
    
    // 'available' attribute on Link (id=RunBatchWithoutNotify) at BatchProcessScreen.pcf: line 112, column 44
    function available_25 () : java.lang.Boolean {
      return batchProcessType.hasCategory(BatchProcessTypeUsage.TC_UIRUNNABLE) and not status.StartingOrExecuting
    }
    
    // 'available' attribute on Link (id=TerminateBatchWithoutNotify) at BatchProcessScreen.pcf: line 118, column 44
    function available_27 () : java.lang.Boolean {
      return status.StartingOrExecuting
    }
    
    // 'available' attribute on LinkCell (id=RunBatchWithoutNotifyContent) at BatchProcessScreen.pcf: line 106, column 80
    function available_30 () : java.lang.Boolean {
      return batchProcessType.hasCategory( BatchProcessTypeUsage.TC_UIRUNNABLE)
    }
    
    // 'available' attribute on Link (id=ScheduleStop) at BatchProcessScreen.pcf: line 155, column 44
    function available_39 () : java.lang.Boolean {
      return nextDate != null
    }
    
    // 'available' attribute on Link (id=ScheduleStart) at BatchProcessScreen.pcf: line 161, column 44
    function available_41 () : java.lang.Boolean {
      return nextDate == null and schedule != null and schedule != ""
    }
    
    // 'initialValue' attribute on Variable at BatchProcessScreen.pcf: line 63, column 49
    function initialValue_15 () : gw.api.tools.BatchProcess {
      return new gw.api.tools.BatchProcess( batchProcessType )
    }
    
    // 'initialValue' attribute on Variable at BatchProcessScreen.pcf: line 68, column 72
    function initialValue_16 () : gw.api.webservice.maintenanceTools.ProcessStatus {
      return batchProcess.ProcessStatus
    }
    
    // 'initialValue' attribute on Variable at BatchProcessScreen.pcf: line 73, column 40
    function initialValue_17 () : java.lang.String {
      return gw.api.tools.BatchProcess.getSchedule( batchProcessType )
    }
    
    // 'initialValue' attribute on Variable at BatchProcessScreen.pcf: line 78, column 40
    function initialValue_18 () : java.lang.String {
      return Page.getScheduleFromConfiguration( batchProcessType )
    }
    
    // 'initialValue' attribute on Variable at BatchProcessScreen.pcf: line 83, column 38
    function initialValue_19 () : java.util.Date {
      return gw.api.tools.BatchProcess.getNextRun( batchProcessType )
    }
    
    // RowIterator at BatchProcessScreen.pcf: line 59, column 52
    function initializeVariables_48 () : void {
        batchProcess = new gw.api.tools.BatchProcess( batchProcessType );
  status = batchProcess.ProcessStatus;
  schedule = gw.api.tools.BatchProcess.getSchedule( batchProcessType );
  scheduleFromConfiguration = Page.getScheduleFromConfiguration( batchProcessType );
  nextDate = gw.api.tools.BatchProcess.getNextRun( batchProcessType );

    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BatchProcessScreen.pcf: line 101, column 30
    function valueRoot_23 () : java.lang.Object {
      return batchProcessType
    }
    
    // 'value' attribute on DateCell (id=LastRun_Cell) at BatchProcessScreen.pcf: line 136, column 45
    function valueRoot_33 () : java.lang.Object {
      return status
    }
    
    // 'value' attribute on TypeKeyCell (id=BatchProcess_Cell) at BatchProcessScreen.pcf: line 96, column 55
    function value_20 () : typekey.BatchProcessType {
      return batchProcessType
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BatchProcessScreen.pcf: line 101, column 30
    function value_22 () : java.lang.String {
      return batchProcessType.Description
    }
    
    // 'value' attribute on DateCell (id=LastRun_Cell) at BatchProcessScreen.pcf: line 136, column 45
    function value_32 () : java.util.Date {
      return status.DateCreated
    }
    
    // 'value' attribute on TextCell (id=LastRunStatus_Cell) at BatchProcessScreen.pcf: line 140, column 73
    function value_35 () : java.lang.String {
      return gw.api.tools.BatchProcess.formatStatus(status)
    }
    
    // 'value' attribute on DateCell (id=NextRun_Cell) at BatchProcessScreen.pcf: line 146, column 35
    function value_37 () : java.util.Date {
      return nextDate
    }
    
    // 'value' attribute on TextCell (id=Schedule_Cell) at BatchProcessScreen.pcf: line 175, column 30
    function value_45 () : java.lang.String {
      return formatSchedule(schedule, scheduleFromConfiguration)
    }
    
    // 'visible' attribute on LinkCell (id=RunBatchWithoutNotifyContent) at BatchProcessScreen.pcf: line 106, column 80
    function visible_31 () : java.lang.Boolean {
      return perm.User.EditBatchProcess or perm.User.DevAllAccess
    }
    
    // 'visible' attribute on Link (id=ScheduleSync) at BatchProcessScreen.pcf: line 168, column 68
    function visible_43 () : java.lang.Boolean {
      return schedule != scheduleFromConfiguration
    }
    
    // 'visible' attribute on Row at BatchProcessScreen.pcf: line 90, column 60
    function visible_47 () : java.lang.Boolean {
      return isProcessVisible(batchProcessType)
    }
    
    property get batchProcess () : gw.api.tools.BatchProcess {
      return getVariableValue("batchProcess", 2) as gw.api.tools.BatchProcess
    }
    
    property set batchProcess ($arg :  gw.api.tools.BatchProcess) {
      setVariableValue("batchProcess", 2, $arg)
    }
    
    property get batchProcessType () : typekey.BatchProcessType {
      return getIteratedValue(2) as typekey.BatchProcessType
    }
    
    property get nextDate () : java.util.Date {
      return getVariableValue("nextDate", 2) as java.util.Date
    }
    
    property set nextDate ($arg :  java.util.Date) {
      setVariableValue("nextDate", 2, $arg)
    }
    
    property get schedule () : java.lang.String {
      return getVariableValue("schedule", 2) as java.lang.String
    }
    
    property set schedule ($arg :  java.lang.String) {
      setVariableValue("schedule", 2, $arg)
    }
    
    property get scheduleFromConfiguration () : java.lang.String {
      return getVariableValue("scheduleFromConfiguration", 2) as java.lang.String
    }
    
    property set scheduleFromConfiguration ($arg :  java.lang.String) {
      setVariableValue("scheduleFromConfiguration", 2, $arg)
    }
    
    property get status () : gw.api.webservice.maintenanceTools.ProcessStatus {
      return getVariableValue("status", 2) as gw.api.webservice.maintenanceTools.ProcessStatus
    }
    
    property set status ($arg :  gw.api.webservice.maintenanceTools.ProcessStatus) {
      setVariableValue("status", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/BatchProcessScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends BatchProcessScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=refresh) at BatchProcessScreen.pcf: line 32, column 65
    function action_2 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=download) at BatchProcessScreen.pcf: line 37, column 66
    function action_3 () : void {
      Page.download(batchProcessTypes)
    }
    
    // 'action' attribute on ToolbarButton (id=suspendScheduler) at BatchProcessScreen.pcf: line 43, column 78
    function action_5 () : void {
      Page.suspendScheduler()
    }
    
    // 'action' attribute on ToolbarButton (id=resumeScheduler) at BatchProcessScreen.pcf: line 49, column 74
    function action_7 () : void {
      Page.resumeScheduler()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at BatchProcessScreen.pcf: line 87, column 80
    function filters_8 () : gw.api.filters.IFilter[] {
      return gw.api.web.tools.BatchProcessInfoPage.USAGE_FILTERS
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BatchProcessScreen.pcf: line 101, column 30
    function sortValue_10 (batchProcessType :  typekey.BatchProcessType) : java.lang.Object {
      var batchProcess : gw.api.tools.BatchProcess = (new gw.api.tools.BatchProcess( batchProcessType ))
var status : gw.api.webservice.maintenanceTools.ProcessStatus = (batchProcess.ProcessStatus)
var schedule : java.lang.String = (gw.api.tools.BatchProcess.getSchedule( batchProcessType ))
var scheduleFromConfiguration : java.lang.String = (Page.getScheduleFromConfiguration( batchProcessType ))
var nextDate : java.util.Date = (gw.api.tools.BatchProcess.getNextRun( batchProcessType ))
return batchProcessType.Description
    }
    
    // 'value' attribute on DateCell (id=LastRun_Cell) at BatchProcessScreen.pcf: line 136, column 45
    function sortValue_12 (batchProcessType :  typekey.BatchProcessType) : java.lang.Object {
      var batchProcess : gw.api.tools.BatchProcess = (new gw.api.tools.BatchProcess( batchProcessType ))
var status : gw.api.webservice.maintenanceTools.ProcessStatus = (batchProcess.ProcessStatus)
var schedule : java.lang.String = (gw.api.tools.BatchProcess.getSchedule( batchProcessType ))
var scheduleFromConfiguration : java.lang.String = (Page.getScheduleFromConfiguration( batchProcessType ))
var nextDate : java.util.Date = (gw.api.tools.BatchProcess.getNextRun( batchProcessType ))
return status.DateCreated
    }
    
    // 'value' attribute on TextCell (id=LastRunStatus_Cell) at BatchProcessScreen.pcf: line 140, column 73
    function sortValue_13 (batchProcessType :  typekey.BatchProcessType) : java.lang.Object {
      var batchProcess : gw.api.tools.BatchProcess = (new gw.api.tools.BatchProcess( batchProcessType ))
var status : gw.api.webservice.maintenanceTools.ProcessStatus = (batchProcess.ProcessStatus)
var schedule : java.lang.String = (gw.api.tools.BatchProcess.getSchedule( batchProcessType ))
var scheduleFromConfiguration : java.lang.String = (Page.getScheduleFromConfiguration( batchProcessType ))
var nextDate : java.util.Date = (gw.api.tools.BatchProcess.getNextRun( batchProcessType ))
return gw.api.tools.BatchProcess.formatStatus(status)
    }
    
    // 'value' attribute on DateCell (id=NextRun_Cell) at BatchProcessScreen.pcf: line 146, column 35
    function sortValue_14 (batchProcessType :  typekey.BatchProcessType) : java.lang.Object {
      var batchProcess : gw.api.tools.BatchProcess = (new gw.api.tools.BatchProcess( batchProcessType ))
var status : gw.api.webservice.maintenanceTools.ProcessStatus = (batchProcess.ProcessStatus)
var schedule : java.lang.String = (gw.api.tools.BatchProcess.getSchedule( batchProcessType ))
var scheduleFromConfiguration : java.lang.String = (Page.getScheduleFromConfiguration( batchProcessType ))
var nextDate : java.util.Date = (gw.api.tools.BatchProcess.getNextRun( batchProcessType ))
return nextDate
    }
    
    // 'value' attribute on TypeKeyCell (id=BatchProcess_Cell) at BatchProcessScreen.pcf: line 96, column 55
    function sortValue_9 (batchProcessType :  typekey.BatchProcessType) : java.lang.Object {
      var batchProcess : gw.api.tools.BatchProcess = (new gw.api.tools.BatchProcess( batchProcessType ))
var status : gw.api.webservice.maintenanceTools.ProcessStatus = (batchProcess.ProcessStatus)
var schedule : java.lang.String = (gw.api.tools.BatchProcess.getSchedule( batchProcessType ))
var scheduleFromConfiguration : java.lang.String = (Page.getScheduleFromConfiguration( batchProcessType ))
var nextDate : java.util.Date = (gw.api.tools.BatchProcess.getNextRun( batchProcessType ))
return batchProcessType
    }
    
    // 'value' attribute on RowIterator at BatchProcessScreen.pcf: line 59, column 52
    function value_49 () : typekey.BatchProcessType[] {
      return batchProcessTypes
    }
    
    // 'visible' attribute on LinkCell (id=RunBatchWithoutNotifyContent) at BatchProcessScreen.pcf: line 106, column 80
    function visible_11 () : java.lang.Boolean {
      return perm.User.EditBatchProcess or perm.User.DevAllAccess
    }
    
    // 'visible' attribute on ToolbarButton (id=suspendScheduler) at BatchProcessScreen.pcf: line 43, column 78
    function visible_4 () : java.lang.Boolean {
      return Page.SchedulerEnabled and not Page.SchedulerSuspended
    }
    
    // 'visible' attribute on ToolbarButton (id=resumeScheduler) at BatchProcessScreen.pcf: line 49, column 74
    function visible_6 () : java.lang.Boolean {
      return Page.SchedulerEnabled and Page.SchedulerSuspended
    }
    
    property get SelectedProcess () : BatchProcessType {
      return getCurrentSelection(1) as BatchProcessType
    }
    
    property set SelectedProcess ($arg :  BatchProcessType) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}