package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/PostgreSQLPerfInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PostgreSQLPerfInfoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/PostgreSQLPerfInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PostgreSQLPerfInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=LogFileChecked_Cell) at PostgreSQLPerfInfo.pcf: line 102, column 43
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      LogFile.Checked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=LogFileChecked_Cell) at PostgreSQLPerfInfo.pcf: line 102, column 43
    function valueRoot_25 () : java.lang.Object {
      return LogFile
    }
    
    // 'value' attribute on CheckBoxCell (id=LogFileChecked_Cell) at PostgreSQLPerfInfo.pcf: line 102, column 43
    function value_23 () : java.lang.Boolean {
      return LogFile.Checked
    }
    
    // 'value' attribute on TextCell (id=LogFileName_Cell) at PostgreSQLPerfInfo.pcf: line 105, column 41
    function value_27 () : java.lang.String {
      return LogFile.Name
    }
    
    property get LogFile () : gw.api.tools.PostgreSQLPerfInfoPageHelper.LogFile {
      return getIteratedValue(1) as gw.api.tools.PostgreSQLPerfInfoPageHelper.LogFile
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/PostgreSQLPerfInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PostgreSQLPerfInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at PostgreSQLPerfInfo.pcf: line 34, column 112
    function action_1 () : void {
      
    }
    
    // 'action' attribute on ButtonInput (id=CancelBatch_Input) at PostgreSQLPerfInfo.pcf: line 64, column 112
    function action_10 () : void {
      PageHelper.requestBatchTermination()
    }
    
    // 'action' attribute on ButtonInput (id=SubmitBatch_Input) at PostgreSQLPerfInfo.pcf: line 57, column 110
    function action_7 () : void {
      PageHelper.submitBatch()
    }
    
    // 'available' attribute on CheckBoxInput (id=ReadAutoExplainPlans_Input) at PostgreSQLPerfInfo.pcf: line 85, column 176
    function available_16 () : java.lang.Boolean {
      return PageHelper.canUseFdw()
    }
    
    // 'available' attribute on ButtonInput (id=SubmitBatch_Input) at PostgreSQLPerfInfo.pcf: line 57, column 110
    function available_6 () : java.lang.Boolean {
      return !PageHelper.BatchRunning
    }
    
    // 'available' attribute on ButtonInput (id=CancelBatch_Input) at PostgreSQLPerfInfo.pcf: line 64, column 112
    function available_9 () : java.lang.Boolean {
      return PageHelper.BatchRunning
    }
    
    // 'canVisit' attribute on Page (id=PostgreSQLPerfInfo) at PostgreSQLPerfInfo.pcf: line 13, column 94
    static function canVisit_32 () : java.lang.Boolean {
      return gw.api.tools.PostgreSQLPerfInfoPageHelper.isPostgreSQL()
    }
    
    // 'def' attribute on ListViewInput at PostgreSQLPerfInfo.pcf: line 29, column 33
    function def_onEnter_2 (def :  pcf.PerfDownloadLV) : void {
      def.onEnter(PageHelper)
    }
    
    // 'def' attribute on ListViewInput at PostgreSQLPerfInfo.pcf: line 29, column 33
    function def_refreshVariables_3 (def :  pcf.PerfDownloadLV) : void {
      def.refreshVariables(PageHelper)
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeDatabaseStatistics_Input) at PostgreSQLPerfInfo.pcf: line 78, column 63
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.IncludeDatabaseStatistics = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=ReadAutoExplainPlans_Input) at PostgreSQLPerfInfo.pcf: line 85, column 176
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.ReadAutoExplainPlansFromLogs = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at PostgreSQLPerfInfo.pcf: line 17, column 57
    function initialValue_0 () : gw.api.tools.PostgreSQLPerfInfoPageHelper {
      return new gw.api.tools.PostgreSQLPerfInfoPageHelper()
    }
    
    // 'parent' attribute on Page (id=PostgreSQLPerfInfo) at PostgreSQLPerfInfo.pcf: line 13, column 94
    static function parent_33 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    // 'percentage' attribute on ProgressInput (id=batchProgress_Input) at PostgreSQLPerfInfo.pcf: line 41, column 211
    function percentage_4 () : java.lang.Double {
      return PageHelper.BatchRunning ? -1 : 100
    }
    
    // 'status' attribute on ProgressInput (id=batchProgress_Input) at PostgreSQLPerfInfo.pcf: line 41, column 211
    function status_5 () : java.lang.String {
      return PageHelper.BatchRunning ? DisplayKey.get("Web.InternalTools.InfoPages.PerfDownload.RunningBatchProcess", PageHelper.ReportParams.Description, PageHelper.DetailedStatus) : null
    }
    
    // 'valueLabel' attribute on CheckBoxInput (id=ReadAutoExplainPlans_Input) at PostgreSQLPerfInfo.pcf: line 85, column 176
    function valueLabel_20 () : java.lang.Object {
      return PageHelper.canUseFdw() ? null : DisplayKey.get("Web.InternalTools.InfoPages.PostgreSQLPerfInfo.CannotReadAutoExplain.FdwNotAvailable") 
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeDatabaseStatistics_Input) at PostgreSQLPerfInfo.pcf: line 78, column 63
    function valueRoot_14 () : java.lang.Object {
      return PageHelper
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeDatabaseStatistics_Input) at PostgreSQLPerfInfo.pcf: line 78, column 63
    function value_12 () : java.lang.Boolean {
      return PageHelper.IncludeDatabaseStatistics
    }
    
    // 'value' attribute on CheckBoxInput (id=ReadAutoExplainPlans_Input) at PostgreSQLPerfInfo.pcf: line 85, column 176
    function value_17 () : java.lang.Boolean {
      return PageHelper.ReadAutoExplainPlansFromLogs
    }
    
    // 'value' attribute on RowIterator at PostgreSQLPerfInfo.pcf: line 97, column 99
    function value_30 () : java.util.List<gw.api.tools.PostgreSQLPerfInfoPageHelper.LogFile> {
      return PageHelper.LogFiles
    }
    
    override property get CurrentLocation () : pcf.PostgreSQLPerfInfo {
      return super.CurrentLocation as pcf.PostgreSQLPerfInfo
    }
    
    property get PageHelper () : gw.api.tools.PostgreSQLPerfInfoPageHelper {
      return getVariableValue("PageHelper", 0) as gw.api.tools.PostgreSQLPerfInfoPageHelper
    }
    
    property set PageHelper ($arg :  gw.api.tools.PostgreSQLPerfInfoPageHelper) {
      setVariableValue("PageHelper", 0, $arg)
    }
    
    
  }
  
  
}