package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OutboundFileSearchExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends OutboundRecordSearchSearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on DateCell (id=OutboundRecordSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 157, column 47
    function action_67 () : void {
      OutboundRecordPopup.push(row)
    }
    
    // 'action' attribute on DateCell (id=OutboundRecordSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 157, column 47
    function action_dest_68 () : pcf.api.Destination {
      return pcf.OutboundRecordPopup.createDestination(row)
    }
    
    // 'confirmMessage' attribute on TypeKeyCell (id=OutboundRecordSearchStatus_Cell) at OutboundFileSearch.pcf: line 169, column 57
    function confirmMessage_75 () : java.lang.String {
      return DisplayKey.get("OutboundRecord.SetStatus", row.Status)
    }
    
    // 'value' attribute on DateCell (id=OutboundRecordSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 157, column 47
    function valueRoot_70 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=OutboundRecordSearchConfig_Cell) at OutboundFileSearch.pcf: line 162, column 43
    function valueRoot_73 () : java.lang.Object {
      return row.Config
    }
    
    // 'value' attribute on DateCell (id=OutboundRecordSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 157, column 47
    function value_69 () : java.util.Date {
      return row.CreateDate
    }
    
    // 'value' attribute on TextCell (id=OutboundRecordSearchConfig_Cell) at OutboundFileSearch.pcf: line 162, column 43
    function value_72 () : String {
      return row.Config.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=OutboundRecordSearchStatus_Cell) at OutboundFileSearch.pcf: line 169, column 57
    function value_76 () : OutboundRecordStatus {
      return row.Status
    }
    
    // 'value' attribute on TextCell (id=OutboundRecordSearchErrorMessage_Cell) at OutboundFileSearch.pcf: line 173, column 101
    function value_80 () : java.lang.String {
      return row.Status == OutboundRecordStatus.TC_ERROR? row.ErrorMessage : null
    }
    
    // 'value' attribute on TextCell (id=OutboundRecordSearchContent_Cell) at OutboundFileSearch.pcf: line 177, column 44
    function value_82 () : java.lang.String {
      return row.Content
    }
    
    // 'value' attribute on DateCell (id=PurgeDate_Cell) at OutboundFileSearch.pcf: line 182, column 101
    function value_85 () : java.util.Date {
      return row.Status == OutboundRecordStatus.TC_SKIPPED ? row.PurgeDate : null
    }
    
    // 'valueType' attribute on TypeKeyCell (id=OutboundRecordSearchStatus_Cell) at OutboundFileSearch.pcf: line 169, column 57
    function verifyValueType_79 () : void {
      var __valueTypeArg : OutboundRecordStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get row () : OutboundRecord {
      return getIteratedValue(2) as OutboundRecord
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OutboundFileSearchSearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on DateCell (id=OutboundFileSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 74, column 47
    function action_21 () : void {
      pcf.OutboundFile.go(row)
    }
    
    // 'action' attribute on DateCell (id=OutboundFileSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 74, column 47
    function action_dest_22 () : pcf.api.Destination {
      return pcf.OutboundFile.createDestination(row)
    }
    
    // 'value' attribute on DateCell (id=OutboundFileSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 74, column 47
    function valueRoot_24 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=OutboundFileSearchConfig_Cell) at OutboundFileSearch.pcf: line 79, column 43
    function valueRoot_27 () : java.lang.Object {
      return row.Config
    }
    
    // 'value' attribute on DateCell (id=OutboundFileSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 74, column 47
    function value_23 () : java.util.Date {
      return row.CreateDate
    }
    
    // 'value' attribute on TextCell (id=OutboundFileSearchConfig_Cell) at OutboundFileSearch.pcf: line 79, column 43
    function value_26 () : String {
      return row.Config.Name
    }
    
    // 'value' attribute on TextCell (id=OutboundFileSearchFileName_Cell) at OutboundFileSearch.pcf: line 83, column 45
    function value_29 () : java.lang.String {
      return row.FileName
    }
    
    // 'value' attribute on TextCell (id=OutboundFileSearchArchiveLocationBatchID_Cell) at OutboundFileSearch.pcf: line 87, column 44
    function value_32 () : java.lang.String {
      return row.BatchID
    }
    
    // 'value' attribute on DateCell (id=OutboundFileSearchPurgeDate_Cell) at OutboundFileSearch.pcf: line 91, column 46
    function value_35 () : java.util.Date {
      return row.PurgeDate
    }
    
    property get row () : OutboundFile {
      return getIteratedValue(2) as OutboundFile
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OutboundFileSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=OutboundFileConfigs) at OutboundFileSearch.pcf: line 20, column 87
    function action_0 () : void {
      OutboundConfigPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=OutboundFileConfigs) at OutboundFileSearch.pcf: line 20, column 87
    function action_dest_1 () : pcf.api.Destination {
      return pcf.OutboundConfigPopup.createDestination()
    }
    
    // 'canVisit' attribute on Page (id=OutboundFileSearch) at OutboundFileSearch.pcf: line 10, column 22
    static function canVisit_90 () : java.lang.Boolean {
      return perm.System.viewoutboundfiles
    }
    
    // 'parent' attribute on Page (id=OutboundFileSearch) at OutboundFileSearch.pcf: line 10, column 22
    static function parent_91 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.OutboundFileSearch {
      return super.CurrentLocation as pcf.OutboundFileSearch
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OutboundFileSearchSearchPanelExpressionsImpl extends OutboundFileSearchExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at OutboundFileSearch.pcf: line 53, column 51
    function def_onEnter_14 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at OutboundFileSearch.pcf: line 53, column 51
    function def_refreshVariables_15 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on DateInput (id=OutboundFileSearchEndingDate_Input) at OutboundFileSearch.pcf: line 51, column 45
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=OutboundFileSearchConfig_Input) at OutboundFileSearch.pcf: line 41, column 51
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Config = (__VALUE_TO_SET as OutboundFileConfig)
    }
    
    // 'value' attribute on DateInput (id=OutboundFileSearchStartingDate_Input) at OutboundFileSearch.pcf: line 46, column 47
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'searchCriteria' attribute on SearchPanel (id=OutboundFileSearchSearchPanel) at OutboundFileSearch.pcf: line 33, column 86
    function searchCriteria_40 () : com.guidewire.outboundfile.pcf.OutboundFileSearchCriteria {
      return new com.guidewire.outboundfile.pcf.OutboundFileSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel (id=OutboundFileSearchSearchPanel) at OutboundFileSearch.pcf: line 33, column 86
    function search_39 () : java.lang.Object {
      return criteria.search()
    }
    
    // 'value' attribute on DateCell (id=OutboundFileSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 74, column 47
    function sortValue_16 (row :  OutboundFile) : java.lang.Object {
      return row.CreateDate
    }
    
    // 'value' attribute on TextCell (id=OutboundFileSearchConfig_Cell) at OutboundFileSearch.pcf: line 79, column 43
    function sortValue_17 (row :  OutboundFile) : java.lang.Object {
      return row.Config.Name
    }
    
    // 'value' attribute on TextCell (id=OutboundFileSearchFileName_Cell) at OutboundFileSearch.pcf: line 83, column 45
    function sortValue_18 (row :  OutboundFile) : java.lang.Object {
      return row.FileName
    }
    
    // 'value' attribute on TextCell (id=OutboundFileSearchArchiveLocationBatchID_Cell) at OutboundFileSearch.pcf: line 87, column 44
    function sortValue_19 (row :  OutboundFile) : java.lang.Object {
      return row.BatchID
    }
    
    // 'value' attribute on DateCell (id=OutboundFileSearchPurgeDate_Cell) at OutboundFileSearch.pcf: line 91, column 46
    function sortValue_20 (row :  OutboundFile) : java.lang.Object {
      return row.PurgeDate
    }
    
    // 'value' attribute on TextInput (id=OutboundFileSearchConfig_Input) at OutboundFileSearch.pcf: line 41, column 51
    function valueRoot_4 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on DateInput (id=OutboundFileSearchEndingDate_Input) at OutboundFileSearch.pcf: line 51, column 45
    function value_10 () : java.util.Date {
      return criteria.EndDate
    }
    
    // 'value' attribute on TextInput (id=OutboundFileSearchConfig_Input) at OutboundFileSearch.pcf: line 41, column 51
    function value_2 () : OutboundFileConfig {
      return criteria.Config
    }
    
    // 'value' attribute on RowIterator at OutboundFileSearch.pcf: line 66, column 84
    function value_38 () : gw.api.database.IQueryBeanResult<OutboundFile> {
      return results
    }
    
    // 'value' attribute on DateInput (id=OutboundFileSearchStartingDate_Input) at OutboundFileSearch.pcf: line 46, column 47
    function value_6 () : java.util.Date {
      return criteria.StartDate
    }
    
    property get criteria () : com.guidewire.outboundfile.pcf.OutboundFileSearchCriteria {
      return getCriteriaValue(1) as com.guidewire.outboundfile.pcf.OutboundFileSearchCriteria
    }
    
    property set criteria ($arg :  com.guidewire.outboundfile.pcf.OutboundFileSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<OutboundFile> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<OutboundFile>
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OutboundRecordSearchSearchPanelExpressionsImpl extends OutboundFileSearchExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at OutboundFileSearch.pcf: line 135, column 51
    function def_onEnter_59 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at OutboundFileSearch.pcf: line 135, column 51
    function def_refreshVariables_60 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TypeKeyInput (id=OutboundFileSearchStatus_Input) at OutboundFileSearch.pcf: line 117, column 53
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Status = (__VALUE_TO_SET as OutboundRecordStatus)
    }
    
    // 'value' attribute on TextInput (id=OutboundRecordSearchConfig_Input) at OutboundFileSearch.pcf: line 123, column 51
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Config = (__VALUE_TO_SET as OutboundFileConfig)
    }
    
    // 'value' attribute on DateInput (id=OutboundRecordSearchStartingDate_Input) at OutboundFileSearch.pcf: line 128, column 47
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=OutboundRecordSearchEndingDate_Input) at OutboundFileSearch.pcf: line 133, column 45
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'filter' attribute on TypeKeyInput (id=OutboundFileSearchStatus_Input) at OutboundFileSearch.pcf: line 117, column 53
    function filter_44 (VALUE :  OutboundRecordStatus, VALUES :  OutboundRecordStatus[]) : java.util.List<OutboundRecordStatus> {
      return criteria.filterStatuses(VALUES)
    }
    
    // 'searchCriteria' attribute on SearchPanel (id=OutboundRecordSearchSearchPanel) at OutboundFileSearch.pcf: line 108, column 88
    function searchCriteria_89 () : com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria {
      return new com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel (id=OutboundRecordSearchSearchPanel) at OutboundFileSearch.pcf: line 108, column 88
    function search_88 () : java.lang.Object {
      return criteria.search()
    }
    
    // 'value' attribute on DateCell (id=OutboundRecordSearchCreateDate_Cell) at OutboundFileSearch.pcf: line 157, column 47
    function sortValue_61 (row :  OutboundRecord) : java.lang.Object {
      return row.CreateDate
    }
    
    // 'value' attribute on TextCell (id=OutboundRecordSearchConfig_Cell) at OutboundFileSearch.pcf: line 162, column 43
    function sortValue_62 (row :  OutboundRecord) : java.lang.Object {
      return row.Config.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=OutboundRecordSearchStatus_Cell) at OutboundFileSearch.pcf: line 169, column 57
    function sortValue_63 (row :  OutboundRecord) : java.lang.Object {
      return row.Status
    }
    
    // 'value' attribute on TextCell (id=OutboundRecordSearchErrorMessage_Cell) at OutboundFileSearch.pcf: line 173, column 101
    function sortValue_64 (row :  OutboundRecord) : java.lang.Object {
      return row.Status == OutboundRecordStatus.TC_ERROR? row.ErrorMessage : null
    }
    
    // 'value' attribute on TextCell (id=OutboundRecordSearchContent_Cell) at OutboundFileSearch.pcf: line 177, column 44
    function sortValue_65 (row :  OutboundRecord) : java.lang.Object {
      return row.Content
    }
    
    // 'value' attribute on DateCell (id=PurgeDate_Cell) at OutboundFileSearch.pcf: line 182, column 101
    function sortValue_66 (row :  OutboundRecord) : java.lang.Object {
      return row.Status == OutboundRecordStatus.TC_SKIPPED ? row.PurgeDate : null
    }
    
    // 'value' attribute on TypeKeyInput (id=OutboundFileSearchStatus_Input) at OutboundFileSearch.pcf: line 117, column 53
    function valueRoot_43 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on TypeKeyInput (id=OutboundFileSearchStatus_Input) at OutboundFileSearch.pcf: line 117, column 53
    function value_41 () : OutboundRecordStatus {
      return criteria.Status
    }
    
    // 'value' attribute on TextInput (id=OutboundRecordSearchConfig_Input) at OutboundFileSearch.pcf: line 123, column 51
    function value_47 () : OutboundFileConfig {
      return criteria.Config
    }
    
    // 'value' attribute on DateInput (id=OutboundRecordSearchStartingDate_Input) at OutboundFileSearch.pcf: line 128, column 47
    function value_51 () : java.util.Date {
      return criteria.StartDate
    }
    
    // 'value' attribute on DateInput (id=OutboundRecordSearchEndingDate_Input) at OutboundFileSearch.pcf: line 133, column 45
    function value_55 () : java.util.Date {
      return criteria.EndDate
    }
    
    // 'value' attribute on RowIterator at OutboundFileSearch.pcf: line 148, column 86
    function value_87 () : gw.api.database.IQueryBeanResult<OutboundRecord> {
      return results
    }
    
    // 'valueType' attribute on TypeKeyInput (id=OutboundFileSearchStatus_Input) at OutboundFileSearch.pcf: line 117, column 53
    function verifyValueType_46 () : void {
      var __valueTypeArg : OutboundRecordStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get criteria () : com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria {
      return getCriteriaValue(1) as com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria
    }
    
    property set criteria ($arg :  com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<OutboundRecord> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<OutboundRecord>
    }
    
    
  }
  
  
}