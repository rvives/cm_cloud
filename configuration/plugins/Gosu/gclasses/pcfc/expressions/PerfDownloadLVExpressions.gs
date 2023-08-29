package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/PerfDownloadLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PerfDownloadLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/PerfDownloadLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PerfDownloadLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=LVDelete) at PerfDownloadLV.pcf: line 55, column 72
    function action_10 () : void {
      PageHelper.deletePerfReport(Row.PublicID)
    }
    
    // 'action' attribute on Link (id=LVGetZip) at PerfDownloadLV.pcf: line 28, column 190
    function action_4 () : void {
      PageHelper.download(Row.PublicID)
    }
    
    // 'action' attribute on Link (id=View) at PerfDownloadLV.pcf: line 42, column 190
    function action_6 () : void {
      ReportView.push("PerfReport", Row.PublicID)
    }
    
    // 'action' attribute on Link (id=View) at PerfDownloadLV.pcf: line 42, column 190
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ReportView.createDestination("PerfReport", Row.PublicID)
    }
    
    // 'confirmMessage' attribute on Link (id=LVDelete) at PerfDownloadLV.pcf: line 55, column 72
    function confirmMessage_11 () : java.lang.String {
      return DisplayKey.get("Web.InternalTools.InfoPaqes.OracleAWR.DeleteConfirmation", Row.PublicID)
    }
    
    // 'value' attribute on TextCell (id=IdCell_Cell) at PerfDownloadLV.pcf: line 61, column 33
    function valueRoot_13 () : java.lang.Object {
      return Row
    }
    
    // 'value' attribute on TextCell (id=IdCell_Cell) at PerfDownloadLV.pcf: line 61, column 33
    function value_12 () : java.lang.String {
      return Row.PublicID
    }
    
    // 'value' attribute on TextCell (id=LVStatus_Cell) at PerfDownloadLV.pcf: line 66, column 59
    function value_15 () : java.lang.String {
      return PageHelper.getStatusString(Row.Status)
    }
    
    // 'value' attribute on DateCell (id=LVStartTime_Cell) at PerfDownloadLV.pcf: line 72, column 34
    function value_17 () : java.util.Date {
      return Row.StartTime
    }
    
    // 'value' attribute on DateCell (id=LVEndTime_Cell) at PerfDownloadLV.pcf: line 79, column 32
    function value_20 () : java.util.Date {
      return Row.EndTime
    }
    
    // 'value' attribute on TextCell (id=LVDescription_Cell) at PerfDownloadLV.pcf: line 86, column 24
    function value_23 () : java.lang.String {
      return Row.Description
    }
    
    // 'visible' attribute on Link (id=LVGetZip) at PerfDownloadLV.pcf: line 28, column 190
    function visible_3 () : java.lang.Boolean {
      return Row.Status == gw.api.tools.PerfReportHelper.DBPerfReportStatus.SUCCESS.getValue() or Row.Status == gw.api.tools.PerfReportHelper.DBPerfReportStatus.FAILED.getValue()
    }
    
    // 'visible' attribute on LinkCell (id=ViewLinkCell) at PerfDownloadLV.pcf: line 34, column 61
    function visible_8 () : java.lang.Boolean {
      return gw.api.system.server.ServerModeUtil.Dev
    }
    
    // 'visible' attribute on Link (id=LVDelete) at PerfDownloadLV.pcf: line 55, column 72
    function visible_9 () : java.lang.Boolean {
      return Row.EndTime != null or !PageHelper.BatchRunning
    }
    
    property get Row () : gw.api.tools.PerfDownloadDetail {
      return getIteratedValue(1) as gw.api.tools.PerfDownloadDetail
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/PerfDownloadLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PerfDownloadLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=IdCell_Cell) at PerfDownloadLV.pcf: line 61, column 33
    function sortValue_1 (Row :  gw.api.tools.PerfDownloadDetail) : java.lang.Object {
      return Row.Id
    }
    
    // 'value' attribute on DateCell (id=LVStartTime_Cell) at PerfDownloadLV.pcf: line 72, column 34
    function sortValue_2 (Row :  gw.api.tools.PerfDownloadDetail) : java.lang.Object {
      return Row.StartTime
    }
    
    // 'value' attribute on RowIterator at PerfDownloadLV.pcf: line 14, column 53
    function value_26 () : gw.api.tools.PerfDownloadDetail[] {
      return gw.api.tools.PerfReportHelper.PerfDownloads
    }
    
    // 'visible' attribute on LinkCell (id=ViewLinkCell) at PerfDownloadLV.pcf: line 34, column 61
    function visible_0 () : java.lang.Boolean {
      return gw.api.system.server.ServerModeUtil.Dev
    }
    
    property get PageHelper () : gw.api.tools.PerfReportHelper {
      return getRequireValue("PageHelper", 0) as gw.api.tools.PerfReportHelper
    }
    
    property set PageHelper ($arg :  gw.api.tools.PerfReportHelper) {
      setRequireValue("PageHelper", 0, $arg)
    }
    
    
  }
  
  
}