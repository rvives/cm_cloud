package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerResultsCV.NameThisQuery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProfilerResultsCV_NameThisQueryExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerResultsCV.NameThisQuery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'outputConversion' attribute on TextCell (id=AverageRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 180, column 55
    function outputConversion_77 (VALUE :  java.lang.Double) : java.lang.String {
      return formatAverage(VALUE)
    }
    
    // 'value' attribute on TextCell (id=StackName_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 132, column 62
    function valueRoot_54 () : java.lang.Object {
      return stackQuerySummary
    }
    
    // 'value' attribute on TextCell (id=StackName_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 132, column 62
    function value_53 () : java.lang.String {
      return stackQuerySummary.StackName
    }
    
    // 'value' attribute on TextCell (id=Requests_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 137, column 56
    function value_56 () : java.lang.Integer {
      return stackQuerySummary.StackCount
    }
    
    // 'value' attribute on TextCell (id=QueryCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 142, column 56
    function value_59 () : java.lang.Integer {
      return stackQuerySummary.QueryCount
    }
    
    // 'value' attribute on TextCell (id=QueriesPerRequest_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 149, column 56
    function value_62 () : java.lang.Integer {
      return stackQuerySummary.QueriesPerStack
    }
    
    // 'value' attribute on TextCell (id=TotalQueryTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 156, column 56
    function value_65 () : java.lang.Integer {
      return stackQuerySummary.TotalQueryTime
    }
    
    // 'value' attribute on TextCell (id=AverageQueryTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 161, column 55
    function value_68 () : java.lang.Double {
      return stackQuerySummary.AverageQueryTime
    }
    
    // 'value' attribute on TextCell (id=MaxQueryTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 166, column 56
    function value_71 () : java.lang.Integer {
      return stackQuerySummary.MaxQueryTime
    }
    
    // 'value' attribute on TextCell (id=TotalRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 174, column 56
    function value_74 () : java.lang.Integer {
      return stackQuerySummary.TotalRowCount
    }
    
    // 'value' attribute on TextCell (id=AverageRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 180, column 55
    function value_78 () : java.lang.Double {
      return stackQuerySummary.AverageRowCount
    }
    
    property get stackQuerySummary () : gw.api.profiler.StackQuerySummary {
      return getIteratedValue(3) as gw.api.profiler.StackQuerySummary
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerResultsCV.NameThisQuery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'outputConversion' attribute on TextCell (id=AverageTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 88, column 51
    function outputConversion_28 (VALUE :  java.lang.Double) : java.lang.String {
      return formatAverage(VALUE)
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 70, column 51
    function valueRoot_20 () : java.lang.Object {
      return aggregatedQuerySummary
    }
    
    // 'value' attribute on TextCell (id=QueryText_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 63, column 77
    function value_17 () : java.lang.String {
      return aggregatedQuerySummary.getShortQueryString(80)
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 70, column 51
    function value_19 () : java.lang.Double {
      return aggregatedQuerySummary.Score
    }
    
    // 'value' attribute on TextCell (id=Executions_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 75, column 52
    function value_22 () : java.lang.Integer {
      return aggregatedQuerySummary.ExecutionCount
    }
    
    // 'value' attribute on TextCell (id=TotalTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 80, column 52
    function value_25 () : java.lang.Integer {
      return aggregatedQuerySummary.TotalTime
    }
    
    // 'value' attribute on TextCell (id=AverageTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 88, column 51
    function value_29 () : java.lang.Double {
      return aggregatedQuerySummary.AverageTime
    }
    
    // 'value' attribute on TextCell (id=TotalRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 96, column 52
    function value_32 () : java.lang.Integer {
      return aggregatedQuerySummary.TotalRowCount
    }
    
    // 'value' attribute on TextCell (id=AverageRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 102, column 51
    function value_36 () : java.lang.Double {
      return aggregatedQuerySummary.AverageRowCount
    }
    
    property get aggregatedQuerySummary () : gw.api.profiler.GloballyAggregatedQuerySummary {
      return getIteratedValue(3) as gw.api.profiler.GloballyAggregatedQuerySummary
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerResultsCV.NameThisQuery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ProfilerResultsCV.NameThisQuery.pcf: line 112, column 87
    function def_onEnter_40 (def :  pcf.QuerySummaryLDV) : void {
      def.onEnter(selectedAggregatedQuerySummary.QuerySummaries)
    }
    
    // 'def' attribute on PanelRef at ProfilerResultsCV.NameThisQuery.pcf: line 112, column 87
    function def_refreshVariables_41 (def :  pcf.QuerySummaryLDV) : void {
      def.refreshVariables(selectedAggregatedQuerySummary.QuerySummaries)
    }
    
    // 'value' attribute on TextCell (id=Executions_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 75, column 52
    function sortValue_10 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary.ExecutionCount
    }
    
    // 'value' attribute on TextCell (id=TotalTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 80, column 52
    function sortValue_11 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary.TotalTime
    }
    
    // 'value' attribute on TextCell (id=AverageTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 88, column 51
    function sortValue_12 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary.AverageTime
    }
    
    // 'value' attribute on TextCell (id=TotalRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 96, column 52
    function sortValue_13 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary.TotalRowCount
    }
    
    // 'value' attribute on TextCell (id=AverageRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 102, column 51
    function sortValue_14 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary.AverageRowCount
    }
    
    // 'value' attribute on TextCell (id=StackName_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 132, column 62
    function sortValue_42 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.StackName
    }
    
    // 'value' attribute on TextCell (id=Requests_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 137, column 56
    function sortValue_43 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.StackCount
    }
    
    // 'value' attribute on TextCell (id=QueryCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 142, column 56
    function sortValue_44 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.QueryCount
    }
    
    // 'value' attribute on TextCell (id=QueriesPerRequest_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 149, column 56
    function sortValue_45 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.QueriesPerStack
    }
    
    // 'value' attribute on TextCell (id=TotalQueryTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 156, column 56
    function sortValue_46 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.TotalQueryTime
    }
    
    // 'value' attribute on TextCell (id=AverageQueryTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 161, column 55
    function sortValue_47 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.AverageQueryTime
    }
    
    // 'value' attribute on TextCell (id=MaxQueryTime_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 166, column 56
    function sortValue_48 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.MaxQueryTime
    }
    
    // 'value' attribute on TextCell (id=TotalRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 174, column 56
    function sortValue_49 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.TotalRowCount
    }
    
    // 'value' attribute on TextCell (id=AverageRowCount_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 180, column 55
    function sortValue_50 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.AverageRowCount
    }
    
    // 'value' attribute on TextCell (id=QueryText_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 63, column 77
    function sortValue_8 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary.getShortQueryString(80)
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ProfilerResultsCV.NameThisQuery.pcf: line 70, column 51
    function sortValue_9 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary.Score
    }
    
    // '$$sumValue' attribute on RowIterator at ProfilerResultsCV.NameThisQuery.pcf: line 96, column 52
    function sumValueRoot_16 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary
    }
    
    // '$$sumValue' attribute on RowIterator at ProfilerResultsCV.NameThisQuery.pcf: line 174, column 56
    function sumValueRoot_52 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary
    }
    
    // 'footerSumValue' attribute on RowIterator at ProfilerResultsCV.NameThisQuery.pcf: line 96, column 52
    function sumValue_15 (aggregatedQuerySummary :  gw.api.profiler.GloballyAggregatedQuerySummary) : java.lang.Object {
      return aggregatedQuerySummary.TotalRowCount
    }
    
    // 'footerSumValue' attribute on RowIterator at ProfilerResultsCV.NameThisQuery.pcf: line 174, column 56
    function sumValue_51 (stackQuerySummary :  gw.api.profiler.StackQuerySummary) : java.lang.Object {
      return stackQuerySummary.TotalRowCount
    }
    
    // 'value' attribute on RowIterator at ProfilerResultsCV.NameThisQuery.pcf: line 58, column 78
    function value_39 () : gw.api.profiler.GloballyAggregatedQuerySummary[] {
      return globalAggregatedQuerySummaries
    }
    
    // 'value' attribute on RowIterator at ProfilerResultsCV.NameThisQuery.pcf: line 127, column 69
    function value_81 () : gw.api.profiler.StackQuerySummary[] {
      return selectedAggregatedQuerySummary.StackQuerySummaries
    }
    
    property get selectedAggregatedQuerySummary () : gw.api.profiler.GloballyAggregatedQuerySummary {
      return getCurrentSelection(2) as gw.api.profiler.GloballyAggregatedQuerySummary
    }
    
    property set selectedAggregatedQuerySummary ($arg :  gw.api.profiler.GloballyAggregatedQuerySummary) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerResultsCV.NameThisQuery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProfilerResultsCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ProfilerResultsCV.NameThisQuery.pcf: line 18, column 41
    function def_onEnter_0 (def :  pcf.ProfilerResultsEmptyDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at ProfilerResultsCV.NameThisQuery.pcf: line 18, column 41
    function def_refreshVariables_1 (def :  pcf.ProfilerResultsEmptyDV) : void {
      def.refreshVariables()
    }
    
    // 'visible' attribute on Card (id=Empty) at ProfilerResultsCV.NameThisQuery.pcf: line 16, column 73
    function visible_2 () : java.lang.Boolean {
      return profilerDataSource.AggregatedQuerySummaries.length == 0
    }
    
    // 'visible' attribute on Card (id=Card) at ProfilerResultsCV.NameThisQuery.pcf: line 23, column 75
    function visible_83 () : java.lang.Boolean {
      return profilerDataSource.AggregatedQuerySummaries.length > 0
    }
    
    property get profilerDataSource () : gw.api.profiler.ProfilerDataSource {
      return getRequireValue("profilerDataSource", 0) as gw.api.profiler.ProfilerDataSource
    }
    
    property set profilerDataSource ($arg :  gw.api.profiler.ProfilerDataSource) {
      setRequireValue("profilerDataSource", 0, $arg)
    }
    
    
    function formatAverage(value: java.lang.Double): String {
            return gw.api.util.StringUtil.formatNumber(value, "#,##0.00")
          }
        
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerResultsCV.NameThisQuery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends ProfilerResultsCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ProfilerResultsCV.NameThisQuery.pcf: line 42, column 47
    function def_onEnter_6 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at ProfilerResultsCV.NameThisQuery.pcf: line 42, column 47
    function def_refreshVariables_7 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextAreaInput (id=SQLString_Input) at ProfilerResultsCV.NameThisQuery.pcf: line 38, column 33
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'search' attribute on SearchPanel at ProfilerResultsCV.NameThisQuery.pcf: line 30, column 78
    function search_82 () : java.lang.Object {
      return profilerDataSource.getStackQuerySummariesNear(criteria)
    }
    
    // 'value' attribute on TextAreaInput (id=SQLString_Input) at ProfilerResultsCV.NameThisQuery.pcf: line 38, column 33
    function value_3 () : java.lang.String {
      return criteria
    }
    
    property get criteria () : java.lang.String {
      return getCriteriaValue(1) as java.lang.String
    }
    
    property set criteria ($arg :  java.lang.String) {
      setCriteriaValue(1, $arg)
    }
    
    property get globalAggregatedQuerySummaries () : gw.api.profiler.GloballyAggregatedQuerySummary[] {
      return getResultsValue(1) as gw.api.profiler.GloballyAggregatedQuerySummary[]
    }
    
    
  }
  
  
}