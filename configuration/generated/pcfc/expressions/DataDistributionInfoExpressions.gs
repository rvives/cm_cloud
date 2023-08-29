package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DataDistributionInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DataDistributionInfoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DataDistributionInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DataDistributionInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at DataDistributionInfo.pcf: line 57, column 71
    function action_4 () : void {
      
    }
    
    // 'action' attribute on ButtonInput (id=SubmitBatch_Input) at DataDistributionInfo.pcf: line 66, column 51
    function action_8 () : void {
      PageHelper.submitBatch()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=LVGetSummaryZip) at DataDistributionInfo.pcf: line 38, column 123
    function allCheckedRowsAction_1 (CheckedValues :  entity.DatabaseDataDist[], CheckedValuesErrors :  java.util.Map) : void {
      PageHelper.downloadComparisonOfDataDistributions(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=LVGetCombinedZip) at DataDistributionInfo.pcf: line 45, column 121
    function allCheckedRowsAction_2 (CheckedValues :  entity.DatabaseDataDist[], CheckedValuesErrors :  java.util.Map) : void {
      PageHelper.downloadCombinedDataDistribution(CheckedValues)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=LVDelete) at DataDistributionInfo.pcf: line 52, column 108
    function checkedRowAction_3 (element :  entity.DatabaseDataDist, CheckedValue :  entity.DatabaseDataDist) : void {
      PageHelper.deleteDataDistribution(CheckedValue)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at DataDistributionInfo.pcf: line 236, column 47
    function checkedRowAction_93 (row :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      CheckedValue.Chosen = false
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at DataDistributionInfo.pcf: line 271, column 47
    function checkedRowAction_99 (row :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      CheckedValue.Chosen = true
    }
    
    // 'def' attribute on ListViewInput at DataDistributionInfo.pcf: line 30, column 33
    function def_onEnter_5 (def :  pcf.DataDistsLV) : void {
      def.onEnter(PageHelper)
    }
    
    // 'def' attribute on ListViewInput at DataDistributionInfo.pcf: line 30, column 33
    function def_refreshVariables_6 (def :  pcf.DataDistsLV) : void {
      def.refreshVariables(PageHelper)
    }
    
    // 'value' attribute on TextValue (id=searchStringTextBox) at DataDistributionInfo.pcf: line 277, column 34
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchString = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=description_Input) at DataDistributionInfo.pcf: line 92, column 51
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=NumThreads_Input) at DataDistributionInfo.pcf: line 106, column 54
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.NumThreads = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CheckBoxInput (id=TLDists_Input) at DataDistributionInfo.pcf: line 111, column 76
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectTypeListTableDistribution = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=ASDists_Input) at DataDistributionInfo.pcf: line 117, column 75
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectAppSpecificDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=AdHocDists_Input) at DataDistributionInfo.pcf: line 124, column 69
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectAdHocDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTables_Input) at DataDistributionInfo.pcf: line 131, column 59
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.AnalyzeAllTables = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=ArrDists_Input) at DataDistributionInfo.pcf: line 148, column 69
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectArrayDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=AFKDists_Input) at DataDistributionInfo.pcf: line 153, column 84
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectAssignableForeignKeyDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=ABDDists_Input) at DataDistributionInfo.pcf: line 158, column 80
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectAssignableDistributionsByDate = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=STDists_Input) at DataDistributionInfo.pcf: line 163, column 76
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectStagingTableDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=BeanVerDists_Input) at DataDistributionInfo.pcf: line 168, column 75
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectBeanVersionDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=BooleanDists_Input) at DataDistributionInfo.pcf: line 173, column 71
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectBooleanDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=ClobColDists_Input) at DataDistributionInfo.pcf: line 180, column 74
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectClobColumnDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=BlobColDists_Input) at DataDistributionInfo.pcf: line 185, column 74
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectBlobColumnDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=DateAnalysisDists_Input) at DataDistributionInfo.pcf: line 190, column 76
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectDateAnalysisDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=FKDists_Input) at DataDistributionInfo.pcf: line 195, column 74
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectForeignKeyDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=GenericGroupDists_Input) at DataDistributionInfo.pcf: line 200, column 76
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectGenericGroupDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=MinAndMaxDateDists_Input) at DataDistributionInfo.pcf: line 205, column 65
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectMinAndMaxDates = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=NullableColumnDists_Input) at DataDistributionInfo.pcf: line 210, column 78
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectNullableColumnDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=TKDists_Input) at DataDistributionInfo.pcf: line 215, column 71
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.CollectTypeKeyDistributions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at DataDistributionInfo.pcf: line 16, column 45
    function initialValue_0 () : gw.api.tools.DataDistDVHelper {
      return new gw.api.tools.DataDistDVHelper()
    }
    
    // 'parent' attribute on Page (id=DataDistributionInfo) at DataDistributionInfo.pcf: line 12, column 90
    static function parent_109 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    // 'percentage' attribute on ProgressInput (id=batchProgress_Input) at DataDistributionInfo.pcf: line 71, column 151
    function percentage_10 () : java.lang.Double {
      return PageHelper.BatchRunning ? -1 : 100
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=description_Input) at DataDistributionInfo.pcf: line 92, column 51
    function requestValidationExpression_12 (VALUE :  java.lang.String) : java.lang.Object {
      return (VALUE.trim().Empty ? "Description cannot be empty" : null)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at DataDistributionInfo.pcf: line 297, column 48
    function sortValue_103 (row :  gw.api.tools.PickerRow) : java.lang.Object {
      return row.DisplayName
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at DataDistributionInfo.pcf: line 254, column 48
    function sortValue_94 (row :  gw.api.tools.PickerRow) : java.lang.Object {
      return row.DisplayName
    }
    
    // 'status' attribute on ProgressInput (id=batchProgress_Input) at DataDistributionInfo.pcf: line 71, column 151
    function status_11 () : java.lang.String {
      return PageHelper.BatchRunning ? DisplayKey.get("Web.InternalTools.InfoPages.DataDistribution.RunningBatchProcess") : null
    }
    
    // 'value' attribute on TextInput (id=description_Input) at DataDistributionInfo.pcf: line 92, column 51
    function valueRoot_15 () : java.lang.Object {
      return PageHelper
    }
    
    // 'value' attribute on TextValue (id=searchStringTextBox) at DataDistributionInfo.pcf: line 277, column 34
    function value_100 () : java.lang.String {
      return searchString
    }
    
    // 'value' attribute on RowIterator at DataDistributionInfo.pcf: line 292, column 56
    function value_107 () : gw.api.tools.PickerRow[] {
      return PageHelper.getUnselectedDBTables(searchString)
    }
    
    // 'value' attribute on TextInput (id=description_Input) at DataDistributionInfo.pcf: line 92, column 51
    function value_13 () : java.lang.String {
      return PageHelper.Description
    }
    
    // 'value' attribute on TextInput (id=NumThreads_Input) at DataDistributionInfo.pcf: line 106, column 54
    function value_17 () : java.lang.Integer {
      return PageHelper.NumThreads
    }
    
    // 'value' attribute on CheckBoxInput (id=TLDists_Input) at DataDistributionInfo.pcf: line 111, column 76
    function value_21 () : java.lang.Boolean {
      return PageHelper.CollectTypeListTableDistribution
    }
    
    // 'value' attribute on CheckBoxInput (id=ASDists_Input) at DataDistributionInfo.pcf: line 117, column 75
    function value_25 () : java.lang.Boolean {
      return PageHelper.CollectAppSpecificDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=AdHocDists_Input) at DataDistributionInfo.pcf: line 124, column 69
    function value_29 () : java.lang.Boolean {
      return PageHelper.CollectAdHocDistributions
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTables_Input) at DataDistributionInfo.pcf: line 131, column 59
    function value_33 () : java.lang.Boolean {
      return PageHelper.AnalyzeAllTables
    }
    
    // 'value' attribute on CheckBoxInput (id=ArrDists_Input) at DataDistributionInfo.pcf: line 148, column 69
    function value_37 () : java.lang.Boolean {
      return PageHelper.CollectArrayDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=AFKDists_Input) at DataDistributionInfo.pcf: line 153, column 84
    function value_41 () : java.lang.Boolean {
      return PageHelper.CollectAssignableForeignKeyDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=ABDDists_Input) at DataDistributionInfo.pcf: line 158, column 80
    function value_45 () : java.lang.Boolean {
      return PageHelper.CollectAssignableDistributionsByDate
    }
    
    // 'value' attribute on CheckBoxInput (id=STDists_Input) at DataDistributionInfo.pcf: line 163, column 76
    function value_49 () : java.lang.Boolean {
      return PageHelper.CollectStagingTableDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=BeanVerDists_Input) at DataDistributionInfo.pcf: line 168, column 75
    function value_53 () : java.lang.Boolean {
      return PageHelper.CollectBeanVersionDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=BooleanDists_Input) at DataDistributionInfo.pcf: line 173, column 71
    function value_57 () : java.lang.Boolean {
      return PageHelper.CollectBooleanDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=ClobColDists_Input) at DataDistributionInfo.pcf: line 180, column 74
    function value_61 () : java.lang.Boolean {
      return PageHelper.CollectClobColumnDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=BlobColDists_Input) at DataDistributionInfo.pcf: line 185, column 74
    function value_65 () : java.lang.Boolean {
      return PageHelper.CollectBlobColumnDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=DateAnalysisDists_Input) at DataDistributionInfo.pcf: line 190, column 76
    function value_69 () : java.lang.Boolean {
      return PageHelper.CollectDateAnalysisDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=FKDists_Input) at DataDistributionInfo.pcf: line 195, column 74
    function value_73 () : java.lang.Boolean {
      return PageHelper.CollectForeignKeyDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=GenericGroupDists_Input) at DataDistributionInfo.pcf: line 200, column 76
    function value_77 () : java.lang.Boolean {
      return PageHelper.CollectGenericGroupDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=MinAndMaxDateDists_Input) at DataDistributionInfo.pcf: line 205, column 65
    function value_81 () : java.lang.Boolean {
      return PageHelper.CollectMinAndMaxDates
    }
    
    // 'value' attribute on CheckBoxInput (id=NullableColumnDists_Input) at DataDistributionInfo.pcf: line 210, column 78
    function value_85 () : java.lang.Boolean {
      return PageHelper.CollectNullableColumnDistributions
    }
    
    // 'value' attribute on CheckBoxInput (id=TKDists_Input) at DataDistributionInfo.pcf: line 215, column 71
    function value_89 () : java.lang.Boolean {
      return PageHelper.CollectTypeKeyDistributions
    }
    
    // 'value' attribute on RowIterator at DataDistributionInfo.pcf: line 249, column 56
    function value_98 () : gw.api.tools.PickerRow[] {
      return PageHelper.DBTables
    }
    
    // 'visible' attribute on PanelRow at DataDistributionInfo.pcf: line 224, column 50
    function visible_108 () : java.lang.Boolean {
      return !PageHelper.AnalyzeAllTables
    }
    
    // 'visible' attribute on ButtonInput (id=SubmitBatch_Input) at DataDistributionInfo.pcf: line 66, column 51
    function visible_7 () : java.lang.Boolean {
      return !PageHelper.BatchRunning
    }
    
    override property get CurrentLocation () : pcf.DataDistributionInfo {
      return super.CurrentLocation as pcf.DataDistributionInfo
    }
    
    property get PageHelper () : gw.api.tools.DataDistDVHelper {
      return getVariableValue("PageHelper", 0) as gw.api.tools.DataDistDVHelper
    }
    
    property set PageHelper ($arg :  gw.api.tools.DataDistDVHelper) {
      setVariableValue("PageHelper", 0, $arg)
    }
    
    property get searchString () : String {
      return getVariableValue("searchString", 0) as String
    }
    
    property set searchString ($arg :  String) {
      setVariableValue("searchString", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DataDistributionInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends DataDistributionInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at DataDistributionInfo.pcf: line 297, column 48
    function valueRoot_105 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at DataDistributionInfo.pcf: line 297, column 48
    function value_104 () : java.lang.String {
      return row.DisplayName
    }
    
    property get row () : gw.api.tools.PickerRow {
      return getIteratedValue(1) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/DataDistributionInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DataDistributionInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at DataDistributionInfo.pcf: line 254, column 48
    function valueRoot_96 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at DataDistributionInfo.pcf: line 254, column 48
    function value_95 () : java.lang.String {
      return row.DisplayName
    }
    
    property get row () : gw.api.tools.PickerRow {
      return getIteratedValue(1) as gw.api.tools.PickerRow
    }
    
    
  }
  
  
}