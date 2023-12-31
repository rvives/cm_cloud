package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ConsistencyChecksExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConsistencyChecksExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 16, column 60
    function initialValue_0 () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return new gw.api.tools.ConsistencyChecksRunsPageHelper()
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 20, column 43
    function initialValue_1 () : gw.api.tools.NameablePicker {
      return new gw.api.tools.NameablePicker(CCPageHelper.DbTableNames)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 24, column 43
    function initialValue_2 () : gw.api.tools.NameablePicker {
      return new gw.api.tools.NameablePicker(CCPageHelper.ConsistCheckTypeCodes)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 28, column 43
    function initialValue_3 () : gw.api.tools.NameablePicker {
      return new gw.api.tools.NameablePicker(CCPageHelper.TableGroups)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 33, column 104
    function initialValue_4 () : java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo> {
      return CCPageHelper.getWorkQueueExecutors(true)
    }
    
    // 'parent' attribute on Page (id=ConsistencyChecks) at ConsistencyChecks.pcf: line 12, column 72
    static function parent_126 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    property get CCPageHelper () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return getVariableValue("CCPageHelper", 0) as gw.api.tools.ConsistencyChecksRunsPageHelper
    }
    
    property set CCPageHelper ($arg :  gw.api.tools.ConsistencyChecksRunsPageHelper) {
      setVariableValue("CCPageHelper", 0, $arg)
    }
    
    property get CheckPicker () : gw.api.tools.NameablePicker {
      return getVariableValue("CheckPicker", 0) as gw.api.tools.NameablePicker
    }
    
    property set CheckPicker ($arg :  gw.api.tools.NameablePicker) {
      setVariableValue("CheckPicker", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ConsistencyChecks {
      return super.CurrentLocation as pcf.ConsistencyChecks
    }
    
    property get TableGroupPicker () : gw.api.tools.NameablePicker {
      return getVariableValue("TableGroupPicker", 0) as gw.api.tools.NameablePicker
    }
    
    property set TableGroupPicker ($arg :  gw.api.tools.NameablePicker) {
      setVariableValue("TableGroupPicker", 0, $arg)
    }
    
    property get TablePicker () : gw.api.tools.NameablePicker {
      return getVariableValue("TablePicker", 0) as gw.api.tools.NameablePicker
    }
    
    property set TablePicker ($arg :  gw.api.tools.NameablePicker) {
      setVariableValue("TablePicker", 0, $arg)
    }
    
    property get WorkQueueExecutors () : java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo> {
      return getVariableValue("WorkQueueExecutors", 0) as java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo>
    }
    
    property set WorkQueueExecutors ($arg :  java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo>) {
      setVariableValue("WorkQueueExecutors", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConsistencyChecksScreenExpressionsImpl extends ConsistencyChecksExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at ConsistencyChecks.pcf: line 427, column 96
    function action_101 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=Reset) at ConsistencyChecks.pcf: line 431, column 101
    function action_102 () : void {
      CheckPicker.SearchString = ""
    }
    
    // 'action' attribute on ButtonInput (id=DownloadAllConsistencyChecks_Input) at ConsistencyChecks.pcf: line 490, column 94
    function action_115 () : void {
      CCViewHelper.downloadConsistencyChecks( null )
    }
    
    // 'action' attribute on ButtonInput (id=searchButton_Input) at ConsistencyChecks.pcf: line 515, column 94
    function action_119 () : void {
      
    }
    
    // 'action' attribute on ButtonInput (id=ResetButton_Input) at ConsistencyChecks.pcf: line 522, column 99
    function action_120 () : void {
      tableSearch = ""
    }
    
    // 'action' attribute on ToolbarButton (id=Refresh) at ConsistencyChecks.pcf: line 96, column 108
    function action_14 () : void {
      
    }
    
    // 'action' attribute on ButtonInput (id=SubmitBatchJobButton_Input) at ConsistencyChecks.pcf: line 111, column 96
    function action_21 () : void {
      CCPageHelper.submitBatch(TablePicker.ChosenNames, TableGroupPicker.ChosenPickers, CheckPicker.ChosenPickers)
    }
    
    // 'action' attribute on ButtonInput (id=PauseButton_Input) at ConsistencyChecks.pcf: line 118, column 131
    function action_25 () : void {
      CCPageHelper.pauseRun()
    }
    
    // 'action' attribute on ButtonInput (id=ResumeButton_Input) at ConsistencyChecks.pcf: line 125, column 132
    function action_28 () : void {
      CCPageHelper.resumeRun()
    }
    
    // 'action' attribute on ButtonInput (id=CancelButton_Input) at ConsistencyChecks.pcf: line 132, column 94
    function action_31 () : void {
      CCPageHelper.cancelRun()
    }
    
    // 'action' attribute on ButtonInput (id=NumThreads_Input) at ConsistencyChecks.pcf: line 153, column 123
    function action_41 () : void {
      ConsistencyChecksChangeNumOfWorkersPopup.push(CCPageHelper)
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at ConsistencyChecks.pcf: line 236, column 96
    function action_64 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=ResetButton) at ConsistencyChecks.pcf: line 240, column 101
    function action_65 () : void {
      TablePicker.SearchString = ""
    }
    
    // 'action' attribute on ButtonInput (id=NumThreads_Input) at ConsistencyChecks.pcf: line 153, column 123
    function action_dest_42 () : pcf.api.Destination {
      return pcf.ConsistencyChecksChangeNumOfWorkersPopup.createDestination(CCPageHelper)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=downloadAll) at ConsistencyChecks.pcf: line 86, column 117
    function allCheckedRowsAction_11 (CheckedValues :  entity.DBConsistCheckRun[], CheckedValuesErrors :  java.util.Map) : void {
      CCPageHelper.downloadMultipleConsistencyCheckRuns(CheckedValues)
    }
    
    // 'available' attribute on ButtonInput (id=SubmitBatchJobButton_Input) at ConsistencyChecks.pcf: line 111, column 96
    function available_19 () : java.lang.Boolean {
      return CCPageHelper.WorkQueueStarted
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteChecked) at ConsistencyChecks.pcf: line 92, column 107
    function checkedRowAction_13 (element :  entity.DBConsistCheckRun, CheckedValue :  entity.DBConsistCheckRun) : void {
      if (CheckedValue.EndTime != null) { CCPageHelper.deleteDBConsistCheckRun(CheckedValue) }
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 188, column 59
    function checkedRowAction_53 (row :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      row.Chosen = false
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 224, column 59
    function checkedRowAction_59 (row :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      row.Chosen = true
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 281, column 59
    function checkedRowAction_72 (ChosenTableGroup :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      ChosenTableGroup.Chosen = false
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 320, column 59
    function checkedRowAction_78 (availableTableGroup :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      availableTableGroup.Chosen = true;
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 376, column 59
    function checkedRowAction_89 (selectedCheckType :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      selectedCheckType.Chosen = false
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 415, column 59
    function checkedRowAction_96 (availableCheckType :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      availableCheckType.Chosen = true
    }
    
    // 'confirmMessage' attribute on CheckedValuesToolbarButton (id=DeleteChecked) at ConsistencyChecks.pcf: line 92, column 107
    function confirmMessage_12 () : java.lang.String {
      return DisplayKey.get("Java.Web.ConsistencyCheck.DeleteConfirmation") 
    }
    
    // 'def' attribute on ListViewInput at ConsistencyChecks.pcf: line 78, column 41
    function def_onEnter_15 (def :  pcf.ConsistencyChecksRunsLV) : void {
      def.onEnter(CCPageHelper)
    }
    
    // 'def' attribute on ListViewInput at ConsistencyChecks.pcf: line 78, column 41
    function def_refreshVariables_16 (def :  pcf.ConsistencyChecksRunsLV) : void {
      def.refreshVariables(CCPageHelper)
    }
    
    // 'value' attribute on TextInput (id=TableNameSearchTextInput_Input) at ConsistencyChecks.pcf: line 508, column 45
    function defaultSetter_117 (__VALUE_TO_SET :  java.lang.Object) : void {
      tableSearch = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Descripton_Input) at ConsistencyChecks.pcf: line 144, column 61
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      CCPageHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 168, column 86
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      CCPageHelper.TableSelectMode = (__VALUE_TO_SET as gw.api.database.ConsistCheckRunTableSelectType)
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 230, column 46
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      TablePicker.SearchString = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTypes_Input) at ConsistencyChecks.pcf: line 356, column 62
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      CCPageHelper.CheckAllTypes = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 421, column 46
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPicker.SearchString = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 40, column 62
    function initialValue_5 () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return new gw.api.tools.ConsistencyChecksRunsPageHelper( )
    }
    
    // 'label' attribute on AlertBar (id=OneServerAlert) at ConsistencyChecks.pcf: line 61, column 97
    function label_10 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.DBConsistCheckRun.NumberOfWorkers.OneServer", BatchProcessType.TC_DBCONSISTENCYCHECK)
    }
    
    // 'label' attribute on ButtonInput (id=NumThreads_Input) at ConsistencyChecks.pcf: line 153, column 123
    function label_43 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.DBConsistCheckRun.NumberOfWorkers", CCPageHelper.calcNumberOfThreads(WorkQueueExecutors))
    }
    
    // 'label' attribute on AlertBar (id=QueueStoppedAlert) at ConsistencyChecks.pcf: line 51, column 54
    function label_7 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.DBConsistCheckRun.QueueStopped", BatchProcessType.TC_DBCONSISTENCYCHECK)
    }
    
    // 'percentage' attribute on ProgressInput (id=batchProgress_Input) at ConsistencyChecks.pcf: line 103, column 53
    function percentage_17 () : java.lang.Double {
      return CCPageHelper.StatusType == WorkItemSetState.TC_COMPLETED ? 100 : (CCPageHelper.Running ? CCPageHelper.ProgressPercentageIfRunning : -1)
    }
    
    // 'refreshOnProgressComplete' attribute on InputColumn at ConsistencyChecks.pcf: line 75, column 62
    function refreshOnProgressComplete_33 () : java.lang.Object {
      return CCPageHelper
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 449, column 75
    function sortValue_103 (availableCheckType :  gw.api.tools.PickerRow) : java.lang.Object {
      return availableCheckType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ccTypeCode_Cell) at ConsistencyChecks.pcf: line 453, column 94
    function sortValue_104 (availableCheckType :  gw.api.tools.PickerRow) : java.lang.Object {
      return CCPageHelper.getCheckTypeCode(availableCheckType)
    }
    
    // 'value' attribute on TextCell (id=conistCheckDescription_Cell) at ConsistencyChecks.pcf: line 458, column 48
    function sortValue_105 (availableCheckType :  gw.api.tools.PickerRow) : java.lang.Object {
      return CCPageHelper.getCheckTypeDescription(availableCheckType)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 207, column 48
    function sortValue_54 (row :  gw.api.tools.PickerRow) : java.lang.Object {
      return row.DisplayName
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 259, column 48
    function sortValue_66 (row :  gw.api.tools.PickerRow) : java.lang.Object {
      return row.DisplayName
    }
    
    // 'value' attribute on TextCell (id=chosentablegroupname_Cell) at ConsistencyChecks.pcf: line 301, column 48
    function sortValue_73 (ChosenTableGroup :  gw.api.tools.PickerRow) : java.lang.Object {
      return ChosenTableGroup.DisplayName
    }
    
    // 'value' attribute on TextCell (id=tablegroupname_Cell) at ConsistencyChecks.pcf: line 340, column 48
    function sortValue_79 (availableTableGroup :  gw.api.tools.PickerRow) : java.lang.Object {
      return availableTableGroup.DisplayName
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 397, column 48
    function sortValue_90 (selectedCheckType :  gw.api.tools.PickerRow) : java.lang.Object {
      return selectedCheckType.DisplayName
    }
    
    // 'status' attribute on ProgressInput (id=batchProgress_Input) at ConsistencyChecks.pcf: line 103, column 53
    function status_18 () : java.lang.String {
      return CCPageHelper.Status
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 168, column 86
    function valueRange_49 () : java.lang.Object {
      return gw.api.database.ConsistCheckRunTableSelectType.values()
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 230, column 46
    function valueRoot_62 () : java.lang.Object {
      return TablePicker
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 421, column 46
    function valueRoot_99 () : java.lang.Object {
      return CheckPicker
    }
    
    // 'value' attribute on RowIterator at ConsistencyChecks.pcf: line 444, column 68
    function value_113 () : gw.api.tools.PickerRow[] {
      return CheckPicker.getUnchosenPickersFilteredByName()
    }
    
    // 'value' attribute on TextInput (id=TableNameSearchTextInput_Input) at ConsistencyChecks.pcf: line 508, column 45
    function value_116 () : java.lang.String {
      return tableSearch
    }
    
    // 'value' attribute on TextInput (id=Descripton_Input) at ConsistencyChecks.pcf: line 144, column 61
    function value_35 () : java.lang.String {
      return CCPageHelper.Description
    }
    
    // 'value' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 168, column 86
    function value_46 () : gw.api.database.ConsistCheckRunTableSelectType {
      return CCPageHelper.TableSelectMode
    }
    
    // 'value' attribute on RowIterator at ConsistencyChecks.pcf: line 201, column 68
    function value_58 () : gw.api.tools.PickerRow[] {
      return TablePicker.ChosenPickers
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 230, column 46
    function value_60 () : java.lang.String {
      return TablePicker.SearchString
    }
    
    // 'value' attribute on RowIterator at ConsistencyChecks.pcf: line 253, column 68
    function value_70 () : gw.api.tools.PickerRow[] {
      return TablePicker.getUnchosenPickersFilteredByName()
    }
    
    // 'value' attribute on RowIterator (id=ChosenTableGroupIterator) at ConsistencyChecks.pcf: line 295, column 68
    function value_77 () : gw.api.tools.PickerRow[] {
      return TableGroupPicker.ChosenPickers
    }
    
    // 'value' attribute on RowIterator (id=availableTableGroupsIterator) at ConsistencyChecks.pcf: line 334, column 68
    function value_83 () : gw.api.tools.PickerRow[] {
      return TableGroupPicker.UnchosenPickersFilteredByName
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTypes_Input) at ConsistencyChecks.pcf: line 356, column 62
    function value_85 () : java.lang.Boolean {
      return CCPageHelper.CheckAllTypes
    }
    
    // 'value' attribute on RowIterator (id=checkSelectLV) at ConsistencyChecks.pcf: line 390, column 68
    function value_95 () : gw.api.tools.PickerRow[] {
      return CheckPicker.ChosenPickers
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 421, column 46
    function value_97 () : java.lang.String {
      return CheckPicker.SearchString
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 168, column 86
    function verifyValueRangeIsAllowedType_50 ($$arg :  gw.api.database.ConsistCheckRunTableSelectType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 168, column 86
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 168, column 86
    function verifyValueRange_51 () : void {
      var __valueRangeArg = gw.api.database.ConsistCheckRunTableSelectType.values()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'visible' attribute on PanelRow at ConsistencyChecks.pcf: line 363, column 61
    function visible_114 () : java.lang.Boolean {
      return !CCPageHelper.CheckAllTypes
    }
    
    // 'visible' attribute on ButtonInput (id=SubmitBatchJobButton_Input) at ConsistencyChecks.pcf: line 111, column 96
    function visible_20 () : java.lang.Boolean {
      return !CCPageHelper.isRunning() and !CCPageHelper.isWriterRunning()
    }
    
    // 'visible' attribute on ButtonInput (id=PauseButton_Input) at ConsistencyChecks.pcf: line 118, column 131
    function visible_24 () : java.lang.Boolean {
      return CCPageHelper.isRunning() and not CCPageHelper.isCanceling() and CCPageHelper.areWorkersRunning()
    }
    
    // 'visible' attribute on ButtonInput (id=ResumeButton_Input) at ConsistencyChecks.pcf: line 125, column 132
    function visible_27 () : java.lang.Boolean {
      return CCPageHelper.isRunning() and not CCPageHelper.isCanceling() and !CCPageHelper.areWorkersRunning()
    }
    
    // 'visible' attribute on ButtonInput (id=CancelButton_Input) at ConsistencyChecks.pcf: line 132, column 94
    function visible_30 () : java.lang.Boolean {
      return CCPageHelper.isRunning() and not CCPageHelper.isCanceling()
    }
    
    // 'visible' attribute on AlertBar (id=QueueStoppedAlert) at ConsistencyChecks.pcf: line 51, column 54
    function visible_6 () : java.lang.Boolean {
      return not CCPageHelper.WorkQueueStarted
    }
    
    // 'visible' attribute on PanelRow at ConsistencyChecks.pcf: line 175, column 80
    function visible_71 () : java.lang.Boolean {
      return CCPageHelper.TableSelectMode == SPECIFY_TABLES
    }
    
    // 'visible' attribute on AlertBar (id=NoServerAlert) at ConsistencyChecks.pcf: line 56, column 91
    function visible_8 () : java.lang.Boolean {
      return CCPageHelper.WorkQueueStarted and not CCPageHelper.areWorkersRunning()
    }
    
    // 'visible' attribute on PanelRow at ConsistencyChecks.pcf: line 268, column 85
    function visible_84 () : java.lang.Boolean {
      return CCPageHelper.TableSelectMode == SPECIFY_TABLEGROUPS
    }
    
    // 'visible' attribute on AlertBar (id=OneServerAlert) at ConsistencyChecks.pcf: line 61, column 97
    function visible_9 () : java.lang.Boolean {
      return CCPageHelper.isOnlyOneServerInClusterProcessingWorkQueue(WorkQueueExecutors)
    }
    
    property get CCViewHelper () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return getVariableValue("CCViewHelper", 1) as gw.api.tools.ConsistencyChecksRunsPageHelper
    }
    
    property set CCViewHelper ($arg :  gw.api.tools.ConsistencyChecksRunsPageHelper) {
      setVariableValue("CCViewHelper", 1, $arg)
    }
    
    property get tableSearch () : String {
      return getVariableValue("tableSearch", 1) as String
    }
    
    property set tableSearch ($arg :  String) {
      setVariableValue("tableSearch", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 259, column 48
    function valueRoot_68 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 259, column 48
    function value_67 () : java.lang.String {
      return row.DisplayName
    }
    
    property get row () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=chosentablegroupname_Cell) at ConsistencyChecks.pcf: line 301, column 48
    function valueRoot_75 () : java.lang.Object {
      return ChosenTableGroup
    }
    
    // 'value' attribute on TextCell (id=chosentablegroupname_Cell) at ConsistencyChecks.pcf: line 301, column 48
    function value_74 () : java.lang.String {
      return ChosenTableGroup.DisplayName
    }
    
    property get ChosenTableGroup () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=tablegroupname_Cell) at ConsistencyChecks.pcf: line 340, column 48
    function valueRoot_81 () : java.lang.Object {
      return availableTableGroup
    }
    
    // 'value' attribute on TextCell (id=tablegroupname_Cell) at ConsistencyChecks.pcf: line 340, column 48
    function value_80 () : java.lang.String {
      return availableTableGroup.DisplayName
    }
    
    property get availableTableGroup () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'helpText' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 397, column 48
    function helpText_91 () : java.lang.String {
      return CCPageHelper.getCheckTypeCode(selectedCheckType)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 397, column 48
    function valueRoot_93 () : java.lang.Object {
      return selectedCheckType
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 397, column 48
    function value_92 () : java.lang.String {
      return selectedCheckType.DisplayName
    }
    
    property get selectedCheckType () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 449, column 75
    function valueRoot_107 () : java.lang.Object {
      return availableCheckType
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 449, column 75
    function value_106 () : java.lang.String {
      return availableCheckType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ccTypeCode_Cell) at ConsistencyChecks.pcf: line 453, column 94
    function value_109 () : java.lang.String {
      return CCPageHelper.getCheckTypeCode(availableCheckType)
    }
    
    // 'value' attribute on TextCell (id=conistCheckDescription_Cell) at ConsistencyChecks.pcf: line 458, column 48
    function value_111 () : java.lang.String {
      return CCPageHelper.getCheckTypeDescription(availableCheckType)
    }
    
    property get availableCheckType () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 207, column 48
    function valueRoot_56 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 207, column 48
    function value_55 () : java.lang.String {
      return row.DisplayName
    }
    
    property get row () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ConsistencyChecks.pcf: line 534, column 72
    function def_onEnter_121 (def :  pcf.ConsistencyChecksLV) : void {
      def.onEnter(CCViewHelper, tableSearch)
    }
    
    // 'def' attribute on PanelRef at ConsistencyChecks.pcf: line 534, column 72
    function def_refreshVariables_122 (def :  pcf.ConsistencyChecksLV) : void {
      def.refreshVariables(CCViewHelper, tableSearch)
    }
    
    // TemplatePanel at ConsistencyChecks.pcf: line 541, column 36
    function renderCall_123 (__writer :  java.io.Writer, __escaper :  gw.lang.parser.template.StringEscaper, __helper :  gw.api.web.template.TemplatePanelHelper) : void {
      pcfc.expressions.ConsistencyChecks_TemplatePanel1.render(__writer, __escaper, cCheck, __helper)
    }
    
    // TemplatePanel at ConsistencyChecks.pcf: line 553, column 36
    function renderCall_124 (__writer :  java.io.Writer, __escaper :  gw.lang.parser.template.StringEscaper, __helper :  gw.api.web.template.TemplatePanelHelper) : void {
      pcfc.expressions.ConsistencyChecks_TemplatePanel2.render(__writer, __escaper, cCheck, __helper)
    }
    
    // 'visible' attribute on Card (id=QueryToIdentifyRowsCard) at ConsistencyChecks.pcf: line 552, column 103
    function visible_125 () : java.lang.Boolean {
      return cCheck.QueryToIdentifyRows != null and cCheck.QueryToIdentifyRows != ''
    }
    
    property get cCheck () : gw.api.database.ConsistencyCheck {
      return getCurrentSelection(2) as gw.api.database.ConsistencyCheck
    }
    
    property set cCheck ($arg :  gw.api.database.ConsistencyCheck) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  
}