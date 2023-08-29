package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ServerPerformance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ServerPerformanceExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ServerPerformance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ServerPerformanceExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ServerPerformance.pcf: line 112, column 35
    function valueRoot_15 () : java.lang.Object {
      return Row
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ServerPerformance.pcf: line 112, column 35
    function value_14 () : java.lang.String {
      return Row.PageId
    }
    
    // 'value' attribute on TextCell (id=serverRequests_Cell) at ServerPerformance.pcf: line 116, column 46
    function value_17 () : java.lang.Integer {
      return Row.NumRequests
    }
    
    // 'value' attribute on TextCell (id=serveonserverravg_Cell) at ServerPerformance.pcf: line 120, column 43
    function value_20 () : java.lang.Long {
      return Row.AverageServerTime
    }
    
    // 'value' attribute on TextCell (id=serveronclientavg_Cell) at ServerPerformance.pcf: line 124, column 43
    function value_23 () : java.lang.Long {
      return Row.AverageClientObservedServerTime
    }
    
    // 'value' attribute on TextCell (id=clientrequestavg_Cell) at ServerPerformance.pcf: line 128, column 43
    function value_26 () : java.lang.Long {
      return Row.AverageClientRequestTime
    }
    
    // 'value' attribute on TextCell (id=clientresponseavg_Cell) at ServerPerformance.pcf: line 132, column 43
    function value_29 () : java.lang.Long {
      return Row.AverageClientResponseTime
    }
    
    // 'value' attribute on TextCell (id=clienttotalavg_Cell) at ServerPerformance.pcf: line 136, column 43
    function value_32 () : java.lang.Long {
      return Row.AverageClientTime
    }
    
    // 'value' attribute on TextCell (id=endtoendavg_Cell) at ServerPerformance.pcf: line 140, column 43
    function value_35 () : java.lang.Long {
      return Row.AverageEndToEndTime
    }
    
    property get Row () : com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.ServerPerformancePCFRow {
      return getIteratedValue(1) as com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.ServerPerformancePCFRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ServerPerformance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ServerPerformanceExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=SummaryExportButton) at ServerPerformance.pcf: line 45, column 108
    function action_10 () : void {
      com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.exportSummaryToCSV()
    }
    
    // 'action' attribute on ToolbarButton (id=RawDataExportButton) at ServerPerformance.pcf: line 51, column 104
    function action_12 () : void {
      com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.exportRawDataToCSV()
    }
    
    // 'action' attribute on ToolbarButton (id=EnableButton) at ServerPerformance.pcf: line 24, column 86
    function action_2 () : void {
      com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.enable()
    }
    
    // 'action' attribute on ToolbarButton (id=DisableButton) at ServerPerformance.pcf: line 29, column 82
    function action_4 () : void {
      com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.disable()
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at ServerPerformance.pcf: line 34, column 63
    function action_6 () : void {
      Data = com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.getServerPerformancePCFRows()
    }
    
    // 'action' attribute on ToolbarButton (id=ClearResultsButton) at ServerPerformance.pcf: line 39, column 107
    function action_8 () : void {
      com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.clearData(); Data = com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.getServerPerformancePCFRows()
    }
    
    // 'def' attribute on PanelRef at ServerPerformance.pcf: line 145, column 42
    function def_onEnter_39 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at ServerPerformance.pcf: line 145, column 42
    function def_refreshVariables_40 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'initialValue' attribute on Variable at ServerPerformance.pcf: line 16, column 113
    function initialValue_0 () : java.util.List<com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.ServerPerformancePCFRow> {
      return com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.getServerPerformancePCFRows()
    }
    
    // 'parent' attribute on Page (id=ServerPerformance) at ServerPerformance.pcf: line 10, column 93
    static function parent_41 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    // 'sortBy' attribute on IteratorSort at ServerPerformance.pcf: line 108, column 28
    function sortBy_13 (Row :  com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.ServerPerformancePCFRow) : java.lang.Object {
      return Row.PageId
    }
    
    // 'value' attribute on RowIterator (id=MainRows) at ServerPerformance.pcf: line 105, column 121
    function value_38 () : java.util.List<com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.ServerPerformancePCFRow> {
      return Data
    }
    
    // 'visible' attribute on ToolbarButton (id=EnableButton) at ServerPerformance.pcf: line 24, column 86
    function visible_1 () : java.lang.Boolean {
      return not com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.Enabled
    }
    
    // 'visible' attribute on ToolbarButton (id=DisableButton) at ServerPerformance.pcf: line 29, column 82
    function visible_3 () : java.lang.Boolean {
      return com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.Enabled
    }
    
    override property get CurrentLocation () : pcf.ServerPerformance {
      return super.CurrentLocation as pcf.ServerPerformance
    }
    
    property get Data () : java.util.List<com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.ServerPerformancePCFRow> {
      return getVariableValue("Data", 0) as java.util.List<com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.ServerPerformancePCFRow>
    }
    
    property set Data ($arg :  java.util.List<com.guidewire.pl.web.pcf.ServerPerformancePCFHelper.ServerPerformancePCFRow>) {
      setVariableValue("Data", 0, $arg)
    }
    
    
  }
  
  
}