package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecksRunsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ConsistencyChecksRunsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecksRunsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConsistencyChecksRunsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=LVStartTime_Cell) at ConsistencyChecksRunsLV.pcf: line 144, column 34
    function sortValue_3 (Row :  entity.DBConsistCheckRun) : java.lang.Object {
      return Row.StartTime
    }
    
    // 'sortBy' attribute on TextCell (id=LVPubliciD_Cell) at ConsistencyChecksRunsLV.pcf: line 171, column 33
    function sortValue_4 (Row :  entity.DBConsistCheckRun) : java.lang.Object {
      return Row.ID
    }
    
    // 'value' attribute on RowIterator at ConsistencyChecksRunsLV.pcf: line 19, column 66
    function value_52 () : java.util.List<entity.DBConsistCheckRun> {
      return PageHelper.ConsistCheckRunsByStartTime
    }
    
    // 'visible' attribute on LinkCell (id=DownloadHeaderErrors) at ConsistencyChecksRunsLV.pcf: line 40, column 60
    function visible_0 () : java.lang.Boolean {
      return PageHelper.ShowDownloadErrorsColHeader
    }
    
    // 'visible' attribute on LinkCell (id=ViewLinkCell) at ConsistencyChecksRunsLV.pcf: line 55, column 61
    function visible_1 () : java.lang.Boolean {
      return gw.api.system.server.ServerModeUtil.Dev
    }
    
    // 'visible' attribute on LinkCell (id=RerunHeader) at ConsistencyChecksRunsLV.pcf: line 82, column 51
    function visible_2 () : java.lang.Boolean {
      return PageHelper.ShowRerunColHeader
    }
    
    property get PageHelper () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return getRequireValue("PageHelper", 0) as gw.api.tools.ConsistencyChecksRunsPageHelper
    }
    
    property set PageHelper ($arg :  gw.api.tools.ConsistencyChecksRunsPageHelper) {
      setRequireValue("PageHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecksRunsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ConsistencyChecksRunsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=LVDelete) at ConsistencyChecksRunsLV.pcf: line 75, column 44
    function action_13 () : void {
      PageHelper.deleteDBConsistCheckRun(Row)
    }
    
    // 'action' attribute on Link (id=LVRerunLink) at ConsistencyChecksRunsLV.pcf: line 88, column 85
    function action_16 () : void {
      PageHelper.submitRerunBatch(Row)
    }
    
    // 'action' attribute on Link (id=LVDownload) at ConsistencyChecksRunsLV.pcf: line 34, column 97
    function action_5 () : void {
      PageHelper.downloadConsistencyCheckRun(Row)
    }
    
    // 'action' attribute on Link (id=LVDownloadErrors) at ConsistencyChecksRunsLV.pcf: line 49, column 49
    function action_7 () : void {
      PageHelper.downloadConsistencyCheckErrorsRun(Row)
    }
    
    // 'action' attribute on Link (id=View) at ConsistencyChecksRunsLV.pcf: line 62, column 41
    function action_9 () : void {
      ReportView.push("DBCCRun", Row.PublicID)
    }
    
    // 'action' attribute on Link (id=View) at ConsistencyChecksRunsLV.pcf: line 62, column 41
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ReportView.createDestination("DBCCRun", Row.PublicID)
    }
    
    // 'confirmMessage' attribute on Link (id=LVDelete) at ConsistencyChecksRunsLV.pcf: line 75, column 44
    function confirmMessage_14 () : java.lang.String {
      return DisplayKey.get("Java.Web.ConsistencyCheck.DeleteConfirmation") 
    }
    
    // 'value' attribute on TextCell (id=LVDescription_Cell) at ConsistencyChecksRunsLV.pcf: line 96, column 24
    function valueRoot_19 () : java.lang.Object {
      return Row
    }
    
    // 'value' attribute on TextCell (id=LVDescription_Cell) at ConsistencyChecksRunsLV.pcf: line 96, column 24
    function value_18 () : java.lang.String {
      return Row.Description
    }
    
    // 'value' attribute on TextCell (id=numErrors_Cell) at ConsistencyChecksRunsLV.pcf: line 103, column 29
    function value_21 () : java.lang.Integer {
      return Row.NumErrorExecs
    }
    
    // 'value' attribute on TextCell (id=totalChecks_Cell) at ConsistencyChecksRunsLV.pcf: line 110, column 29
    function value_24 () : java.lang.Integer {
      return Row.TotalNumChecks
    }
    
    // 'value' attribute on TextCell (id=cellNotStarted_Cell) at ConsistencyChecksRunsLV.pcf: line 117, column 29
    function value_27 () : java.lang.Integer {
      return Row.NumExecsNotStarted
    }
    
    // 'value' attribute on TextCell (id=cellInProgress_Cell) at ConsistencyChecksRunsLV.pcf: line 124, column 29
    function value_30 () : java.lang.Integer {
      return Row.NumExecsInProgress
    }
    
    // 'value' attribute on TextCell (id=cellFinished_Cell) at ConsistencyChecksRunsLV.pcf: line 131, column 29
    function value_34 () : java.lang.String {
      return "" + Row.NumExecsFinished + " ( " + ((100 * Row.NumExecsFinished) / Row.TotalNumChecks)  + "% )"
    }
    
    // 'value' attribute on TextCell (id=numWorkers_Cell) at ConsistencyChecksRunsLV.pcf: line 138, column 29
    function value_37 () : java.lang.String {
      return "" + Integer.toString(Row.NumberOfThreads)
    }
    
    // 'value' attribute on DateCell (id=LVStartTime_Cell) at ConsistencyChecksRunsLV.pcf: line 144, column 34
    function value_39 () : java.util.Date {
      return Row.StartTime
    }
    
    // 'value' attribute on DateCell (id=LVEndTime_Cell) at ConsistencyChecksRunsLV.pcf: line 151, column 32
    function value_42 () : java.util.Date {
      return Row.EndTime
    }
    
    // 'value' attribute on TextCell (id=LVDuration_Cell) at ConsistencyChecksRunsLV.pcf: line 158, column 29
    function value_45 () : java.lang.String {
      return PageHelper.getFormattedDuration(Row.Duration?.longValue())
    }
    
    // 'value' attribute on TextCell (id=LVVersion_Cell) at ConsistencyChecksRunsLV.pcf: line 166, column 29
    function value_47 () : java.lang.String {
      return "( " + (Row.MajorSchemaVersion as String) + ", " + (Row.MinorSchemaVersion as String) + ", " + (Row.PlatformMajorSchemaVersion as String) + ", " + (Row.PlatformMinorSchemaVersion as String) + ", " + (Row.ExtensionsSchemaVersion as String) + " )"
    }
    
    // 'value' attribute on TextCell (id=LVPubliciD_Cell) at ConsistencyChecksRunsLV.pcf: line 171, column 33
    function value_49 () : java.lang.String {
      return Row.PublicID
    }
    
    // 'visible' attribute on LinkCell (id=ViewLinkCell) at ConsistencyChecksRunsLV.pcf: line 55, column 61
    function visible_11 () : java.lang.Boolean {
      return gw.api.system.server.ServerModeUtil.Dev
    }
    
    // 'visible' attribute on Link (id=LVDelete) at ConsistencyChecksRunsLV.pcf: line 75, column 44
    function visible_12 () : java.lang.Boolean {
      return Row.EndTime != null
    }
    
    // 'visible' attribute on Link (id=LVRerunLink) at ConsistencyChecksRunsLV.pcf: line 88, column 85
    function visible_15 () : java.lang.Boolean {
      return PageHelper.runContainsSqlErrors(Row) and Row.EndTime != null
    }
    
    // 'visible' attribute on LinkCell (id=RerunHeader) at ConsistencyChecksRunsLV.pcf: line 82, column 51
    function visible_17 () : java.lang.Boolean {
      return PageHelper.ShowRerunColHeader
    }
    
    // 'valueVisible' attribute on TextCell (id=cellFinished_Cell) at ConsistencyChecksRunsLV.pcf: line 131, column 29
    function visible_33 () : java.lang.Boolean {
      return Row.TotalNumChecks != 0
    }
    
    // 'visible' attribute on Link (id=LVDownloadErrors) at ConsistencyChecksRunsLV.pcf: line 49, column 49
    function visible_6 () : java.lang.Boolean {
      return Row.NumErrorExecs > 0
    }
    
    // 'visible' attribute on LinkCell (id=DownloadHeaderErrors) at ConsistencyChecksRunsLV.pcf: line 40, column 60
    function visible_8 () : java.lang.Boolean {
      return PageHelper.ShowDownloadErrorsColHeader
    }
    
    property get Row () : entity.DBConsistCheckRun {
      return getIteratedValue(1) as entity.DBConsistCheckRun
    }
    
    
  }
  
  
}