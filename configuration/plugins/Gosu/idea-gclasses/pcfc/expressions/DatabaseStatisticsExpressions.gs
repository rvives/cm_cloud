package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DatabaseStatistics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DatabaseStatisticsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DatabaseStatistics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DatabaseStatisticsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=DownloadStats_Input) at DatabaseStatistics.pcf: line 78, column 74
    function action_22 () : void {
      StatisticsInfoPageHelper.downloadStats()
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at DatabaseStatistics.pcf: line 99, column 134
    function action_26 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=RunIncrementalButton) at DatabaseStatistics.pcf: line 110, column 106
    function action_29 () : void {
      var incrementalParams = new com.guidewire.pl.system.database.dbstatistics.UpdateStatsRunParms(); incrementalParams.Incremental = true; com.guidewire.pl.system.dependency.PLDependencies.BatchProcessManager.startBatchProcess(TC_DBSTATS, {incrementalParams})
    }
    
    // 'action' attribute on ToolbarButton (id=RunFullButton) at DatabaseStatistics.pcf: line 115, column 106
    function action_31 () : void {
      var runParams = new com.guidewire.pl.system.database.dbstatistics.UpdateStatsRunParms(); runParams.Incremental = false; com.guidewire.pl.system.dependency.PLDependencies.BatchProcessManager.startBatchProcess(TC_DBSTATS, {runParams})
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at DatabaseStatistics.pcf: line 130, column 136
    function action_34 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=DownloadButton) at DatabaseStatistics.pcf: line 135, column 137
    function action_35 () : void {
      PreferencesHelper.download()
    }
    
    // 'action' attribute on ToolbarButton (id=ReapplyButton) at DatabaseStatistics.pcf: line 140, column 136
    function action_36 () : void {
      PreferencesHelper.reapply()
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at DatabaseStatistics.pcf: line 144, column 144
    function action_37 () : void {
      OracleStatisticsPreferencesConfigPopup.push(PreferencesHelper)
    }
    
    // 'action' attribute on MenuItem (id=ViewMenu) at DatabaseStatistics.pcf: line 152, column 68
    function action_39 () : void {
      ReportView.push("OracleTableStatsPrefs", "all")
    }
    
    // 'action' attribute on MenuItem (id=DeleteMenu) at DatabaseStatistics.pcf: line 157, column 137
    function action_41 () : void {
      PreferencesHelper.deleteAllStatistics()
    }
    
    // 'action' attribute on MenuItem (id=GatherIncrementalMenu) at DatabaseStatistics.pcf: line 162, column 148
    function action_42 () : void {
      PreferencesHelper.gatherIncrementalStatisticsNow()
    }
    
    // 'action' attribute on MenuItem (id=GatherFullMenu) at DatabaseStatistics.pcf: line 167, column 141
    function action_43 () : void {
      PreferencesHelper.gatherFullStatisticsNow()
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at DatabaseStatistics.pcf: line 144, column 144
    function action_dest_38 () : pcf.api.Destination {
      return pcf.OracleStatisticsPreferencesConfigPopup.createDestination(PreferencesHelper)
    }
    
    // 'action' attribute on MenuItem (id=ViewMenu) at DatabaseStatistics.pcf: line 152, column 68
    function action_dest_40 () : pcf.api.Destination {
      return pcf.ReportView.createDestination("OracleTableStatsPrefs", "all")
    }
    
    // 'canVisit' attribute on Page (id=DatabaseStatistics) at DatabaseStatistics.pcf: line 12, column 93
    static function canVisit_71 () : java.lang.Boolean {
      return gw.api.tools.DatabaseStatisticsHelper.dbSupportsStatistics()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=LVUpdateStatsDelete) at DatabaseStatistics.pcf: line 105, column 110
    function checkedRowAction_27 (element :  entity.DatabaseUpdateStats, CheckedValue :  entity.DatabaseUpdateStats) : void {
      ExecutionHistoryPageHelper.deleteDatabaseUpdateStats(CheckedValue)
    }
    
    // 'def' attribute on PanelRef at DatabaseStatistics.pcf: line 83, column 71
    function def_onEnter_24 (def :  pcf.DBStatisticsRequestCV) : void {
      def.onEnter(StatisticsInfoPageHelper)
    }
    
    // 'def' attribute on ListViewInput at DatabaseStatistics.pcf: line 94, column 35
    function def_onEnter_32 (def :  pcf.UpdateStatsLV) : void {
      def.onEnter(ExecutionHistoryPageHelper)
    }
    
    // 'def' attribute on PanelRef at DatabaseStatistics.pcf: line 83, column 71
    function def_refreshVariables_25 (def :  pcf.DBStatisticsRequestCV) : void {
      def.refreshVariables(StatisticsInfoPageHelper)
    }
    
    // 'def' attribute on ListViewInput at DatabaseStatistics.pcf: line 94, column 35
    function def_refreshVariables_33 (def :  pcf.UpdateStatsLV) : void {
      def.refreshVariables(ExecutionHistoryPageHelper)
    }
    
    // 'value' attribute on DateInput (id=ShowPreviousStatsTime_Input) at DatabaseStatistics.pcf: line 70, column 79
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      StatisticsInfoPageHelper.PointInTime = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTables_Input) at DatabaseStatistics.pcf: line 46, column 71
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      StatisticsInfoPageHelper.AnalyzeAllTables = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ShowPreviousStats_Input) at DatabaseStatistics.pcf: line 56, column 86
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      StatisticsInfoPageHelper.ShowPreviousStatistics = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DatabaseStatistics.pcf: line 199, column 63
    function filters_48 () : gw.api.filters.IFilter[] {
      return PreferencesHelper.getFilters()
    }
    
    // 'initialValue' attribute on Variable at DatabaseStatistics.pcf: line 16, column 53
    function initialValue_0 () : gw.api.tools.DatabaseStatisticsHelper {
      return new gw.api.tools.DatabaseStatisticsHelper()
    }
    
    // 'initialValue' attribute on Variable at DatabaseStatistics.pcf: line 20, column 48
    function initialValue_1 () : gw.api.tools.UpdateStatsDVHelper {
      return new gw.api.tools.UpdateStatsDVHelper()
    }
    
    // 'initialValue' attribute on Variable at DatabaseStatistics.pcf: line 25, column 104
    function initialValue_2 () : com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsPreferencesUIHelper {
      return new com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsPreferencesUIHelper()
    }
    
    // 'label' attribute on DateInput (id=ShowPreviousStatsTime_Input) at DatabaseStatistics.pcf: line 70, column 79
    function label_14 () : java.lang.Object {
      return DisplayKey.get("Web.DBStatsSubmitDV.PreviousStatsTime", StatisticsInfoPageHelper.EarliestPointInTimeForStatisticsString)
    }
    
    // 'parent' attribute on Page (id=DatabaseStatistics) at DatabaseStatistics.pcf: line 12, column 93
    static function parent_72 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    // 'requestValidationExpression' attribute on DateInput (id=ShowPreviousStatsTime_Input) at DatabaseStatistics.pcf: line 70, column 79
    function requestValidationExpression_15 (VALUE :  java.util.Date) : java.lang.Object {
      return StatisticsInfoPageHelper.validateHistoryIsAvailableForThisDate(VALUE)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTables_Input) at DatabaseStatistics.pcf: line 46, column 71
    function valueRoot_5 () : java.lang.Object {
      return StatisticsInfoPageHelper
    }
    
    // 'value' attribute on DateInput (id=ShowPreviousStatsTime_Input) at DatabaseStatistics.pcf: line 70, column 79
    function value_16 () : java.util.Date {
      return StatisticsInfoPageHelper.PointInTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTables_Input) at DatabaseStatistics.pcf: line 46, column 71
    function value_3 () : java.lang.Boolean {
      return StatisticsInfoPageHelper.AnalyzeAllTables
    }
    
    // 'value' attribute on CellIterator at DatabaseStatistics.pcf: line 180, column 70
    function value_47 () : java.util.List<java.lang.String> {
      return com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableOverview.getAllParameterNames()
    }
    
    // 'value' attribute on RowIterator (id=tableOverviewRows) at DatabaseStatistics.pcf: line 195, column 104
    function value_69 () : com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableOverview[] {
      return PreferencesHelper.TableOverviews.toTypedArray()
    }
    
    // 'value' attribute on BooleanRadioInput (id=ShowPreviousStats_Input) at DatabaseStatistics.pcf: line 56, column 86
    function value_8 () : java.lang.Boolean {
      return StatisticsInfoPageHelper.ShowPreviousStatistics
    }
    
    // 'visible' attribute on PanelRef at DatabaseStatistics.pcf: line 83, column 71
    function visible_23 () : java.lang.Boolean {
      return !StatisticsInfoPageHelper.AnalyzeAllTables
    }
    
    // 'visible' attribute on ToolbarButton (id=RunIncrementalButton) at DatabaseStatistics.pcf: line 110, column 106
    function visible_28 () : java.lang.Boolean {
      return com.guidewire.pl.system.dependency.PLDependencies.getServerMode().isDev()
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ShowPreviousStats_Input) at DatabaseStatistics.pcf: line 56, column 86
    function visible_7 () : java.lang.Boolean {
      return StatisticsInfoPageHelper.canShowHistoricalStatistics()
    }
    
    // 'visible' attribute on Card (id=OracleStatsPreferences) at DatabaseStatistics.pcf: line 124, column 160
    function visible_70 () : java.lang.Boolean {
      return com.guidewire.pl.system.database.DBType.getCurrentType().Oracle && gw.api.tools.DatabaseStatisticsHelper.UseOracleStatsPreferences
    }
    
    override property get CurrentLocation () : pcf.DatabaseStatistics {
      return super.CurrentLocation as pcf.DatabaseStatistics
    }
    
    property get ExecutionHistoryPageHelper () : gw.api.tools.UpdateStatsDVHelper {
      return getVariableValue("ExecutionHistoryPageHelper", 0) as gw.api.tools.UpdateStatsDVHelper
    }
    
    property set ExecutionHistoryPageHelper ($arg :  gw.api.tools.UpdateStatsDVHelper) {
      setVariableValue("ExecutionHistoryPageHelper", 0, $arg)
    }
    
    property get ParameterDivider () : String {
      return getVariableValue("ParameterDivider", 0) as String
    }
    
    property set ParameterDivider ($arg :  String) {
      setVariableValue("ParameterDivider", 0, $arg)
    }
    
    property get PreferencesHelper () : com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsPreferencesUIHelper {
      return getVariableValue("PreferencesHelper", 0) as com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsPreferencesUIHelper
    }
    
    property set PreferencesHelper ($arg :  com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsPreferencesUIHelper) {
      setVariableValue("PreferencesHelper", 0, $arg)
    }
    
    property get StatisticsInfoPageHelper () : gw.api.tools.DatabaseStatisticsHelper {
      return getVariableValue("StatisticsInfoPageHelper", 0) as gw.api.tools.DatabaseStatisticsHelper
    }
    
    property set StatisticsInfoPageHelper ($arg :  gw.api.tools.DatabaseStatisticsHelper) {
      setVariableValue("StatisticsInfoPageHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DatabaseStatistics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DatabaseStatisticsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=NameColumn_Cell) at DatabaseStatistics.pcf: line 205, column 54
    function valueRoot_50 () : java.lang.Object {
      return tableOverview
    }
    
    // 'value' attribute on TextCell (id=NameColumn_Cell) at DatabaseStatistics.pcf: line 205, column 54
    function value_49 () : java.lang.String {
      return tableOverview.TableName
    }
    
    // 'value' attribute on CellIterator (id=parameterViewValues) at DatabaseStatistics.pcf: line 211, column 138
    function value_66 () : java.util.List<com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsParameterView> {
      return tableOverview.AllParameterViews
    }
    
    // 'value' attribute on TextCell (id=OtherParameters_Cell) at DatabaseStatistics.pcf: line 263, column 34
    function value_67 () : java.lang.String {
      return PreferencesHelper.getOtherPreferences(tableOverview.TableName)
    }
    
    property get tableOverview () : com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableOverview {
      return getIteratedValue(1) as com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableOverview
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DatabaseStatistics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Link (id=ParameterActualDivider) at DatabaseStatistics.pcf: line 223, column 68
    function label_54 () : java.lang.Object {
      return ParameterDivider
    }
    
    // 'label' attribute on Link (id=ParameterActualValue) at DatabaseStatistics.pcf: line 226, column 57
    function label_55 () : java.lang.Object {
      return parameterView.Actual
    }
    
    // 'label' attribute on Link (id=ParameterConfiguredValue) at DatabaseStatistics.pcf: line 241, column 68
    function label_60 () : java.lang.Object {
      return parameterView.Configured
    }
    
    // 'label' attribute on Link (id=ParameterDatamodelValue) at DatabaseStatistics.pcf: line 256, column 68
    function label_65 () : java.lang.Object {
      return parameterView.Datamodel
    }
    
    // 'visible' attribute on Link (id=ParameterActualLabel) at DatabaseStatistics.pcf: line 219, column 68
    function visible_52 () : java.lang.Boolean {
      return parameterView.ActualDifferent
    }
    
    property get parameterView () : com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsParameterView {
      return getIteratedValue(2) as com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsParameterView
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DatabaseStatistics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DatabaseStatisticsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=parameterNameLabel_Cell) at DatabaseStatistics.pcf: line 183, column 44
    function value_45 () : java.lang.String {
      return parameterName
    }
    
    property get parameterName () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  
}