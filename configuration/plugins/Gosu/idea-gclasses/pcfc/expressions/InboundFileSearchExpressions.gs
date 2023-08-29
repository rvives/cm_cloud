package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundFileSearchExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundFileSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=InboundFileConfigs) at InboundFileSearch.pcf: line 20, column 86
    function action_0 () : void {
      InboundConfigPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=InboundFileConfigs) at InboundFileSearch.pcf: line 20, column 86
    function action_dest_1 () : pcf.api.Destination {
      return pcf.InboundConfigPopup.createDestination()
    }
    
    // 'canVisit' attribute on Page (id=InboundFileSearch) at InboundFileSearch.pcf: line 10, column 22
    static function canVisit_55 () : java.lang.Boolean {
      return perm.System.viewinboundfiles
    }
    
    // 'parent' attribute on Page (id=InboundFileSearch) at InboundFileSearch.pcf: line 10, column 22
    static function parent_56 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.InboundFileSearch {
      return super.CurrentLocation as pcf.InboundFileSearch
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundFileSearchSearchPanelExpressionsImpl extends InboundFileSearchExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at InboundFileSearch.pcf: line 56, column 47
    function def_onEnter_19 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at InboundFileSearch.pcf: line 56, column 47
    function def_refreshVariables_20 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on DateInput (id=InboundFileSearchStartingDate_Input) at InboundFileSearch.pcf: line 49, column 46
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.StartingDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=InboundFileSearchEndingDate_Input) at InboundFileSearch.pcf: line 54, column 44
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.EndingDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=InboundFileSearchHandlerName_Input) at InboundFileSearch.pcf: line 37, column 35
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Config = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TypeKeyInput (id=InboundFileSearchFileStatus_Input) at InboundFileSearch.pcf: line 44, column 46
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Status = (__VALUE_TO_SET as InboundFileStatus)
    }
    
    // 'searchCriteria' attribute on SearchPanel (id=InboundFileSearchSearchPanel) at InboundFileSearch.pcf: line 29, column 85
    function searchCriteria_54 () : gw.inboundfile.pcf.InboundFileSearchCriteria {
      return new gw.inboundfile.pcf.InboundFileSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel (id=InboundFileSearchSearchPanel) at InboundFileSearch.pcf: line 29, column 85
    function search_53 () : java.lang.Object {
      return criteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchHandlerName_Cell) at InboundFileSearch.pcf: line 74, column 39
    function sortValue_21 (row :  InboundFileView) : java.lang.Object {
      return row.Config
    }
    
    // 'value' attribute on TypeKeyCell (id=InboundFileSearchStatus_Cell) at InboundFileSearch.pcf: line 80, column 50
    function sortValue_22 (row :  InboundFileView) : java.lang.Object {
      return row.Status
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchMessage_Cell) at InboundFileSearch.pcf: line 84, column 45
    function sortValue_23 (row :  InboundFileView) : java.lang.Object {
      return row.ErrorMessage
    }
    
    // 'value' attribute on DateCell (id=InboundFileSearchLoadDate_Cell) at InboundFileSearch.pcf: line 90, column 41
    function sortValue_24 (row :  InboundFileView) : java.lang.Object {
      return row.LoadDate
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchInputLocation_Cell) at InboundFileSearch.pcf: line 94, column 46
    function sortValue_25 (row :  InboundFileView) : java.lang.Object {
      return row.InputLocation
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchArchiveLocation_Cell) at InboundFileSearch.pcf: line 98, column 48
    function sortValue_26 (row :  InboundFileView) : java.lang.Object {
      return row.ArchiveLocation
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchChecksum_Cell) at InboundFileSearch.pcf: line 102, column 41
    function sortValue_27 (row :  InboundFileView) : java.lang.Object {
      return row.Checksum
    }
    
    // 'value' attribute on TextInput (id=InboundFileSearchHandlerName_Input) at InboundFileSearch.pcf: line 37, column 35
    function valueRoot_4 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on DateInput (id=InboundFileSearchStartingDate_Input) at InboundFileSearch.pcf: line 49, column 46
    function value_11 () : java.util.Date {
      return criteria.StartingDate
    }
    
    // 'value' attribute on DateInput (id=InboundFileSearchEndingDate_Input) at InboundFileSearch.pcf: line 54, column 44
    function value_15 () : java.util.Date {
      return criteria.EndingDate
    }
    
    // 'value' attribute on TextInput (id=InboundFileSearchHandlerName_Input) at InboundFileSearch.pcf: line 37, column 35
    function value_2 () : String {
      return criteria.Config
    }
    
    // 'value' attribute on RowIterator at InboundFileSearch.pcf: line 69, column 83
    function value_52 () : gw.api.database.IQueryBeanResult<InboundFileView> {
      return results
    }
    
    // 'value' attribute on TypeKeyInput (id=InboundFileSearchFileStatus_Input) at InboundFileSearch.pcf: line 44, column 46
    function value_6 () : InboundFileStatus {
      return criteria.Status
    }
    
    // 'valueType' attribute on TypeKeyInput (id=InboundFileSearchFileStatus_Input) at InboundFileSearch.pcf: line 44, column 46
    function verifyValueType_10 () : void {
      var __valueTypeArg : InboundFileStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get criteria () : gw.inboundfile.pcf.InboundFileSearchCriteria {
      return getCriteriaValue(1) as gw.inboundfile.pcf.InboundFileSearchCriteria
    }
    
    property set criteria ($arg :  gw.inboundfile.pcf.InboundFileSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<InboundFileView> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<InboundFileView>
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFileSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends InboundFileSearchSearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyCell (id=InboundFileSearchStatus_Cell) at InboundFileSearch.pcf: line 80, column 50
    function action_31 () : void {
      pcf.InboundFile.go(row)
    }
    
    // 'action' attribute on TypeKeyCell (id=InboundFileSearchStatus_Cell) at InboundFileSearch.pcf: line 80, column 50
    function action_dest_32 () : pcf.api.Destination {
      return pcf.InboundFile.createDestination(row)
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchHandlerName_Cell) at InboundFileSearch.pcf: line 74, column 39
    function valueRoot_29 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchHandlerName_Cell) at InboundFileSearch.pcf: line 74, column 39
    function value_28 () : java.lang.String {
      return row.Config
    }
    
    // 'value' attribute on TypeKeyCell (id=InboundFileSearchStatus_Cell) at InboundFileSearch.pcf: line 80, column 50
    function value_33 () : InboundFileStatus {
      return row.Status
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchMessage_Cell) at InboundFileSearch.pcf: line 84, column 45
    function value_37 () : java.lang.String {
      return row.ErrorMessage
    }
    
    // 'value' attribute on DateCell (id=InboundFileSearchLoadDate_Cell) at InboundFileSearch.pcf: line 90, column 41
    function value_40 () : java.util.Date {
      return row.LoadDate
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchInputLocation_Cell) at InboundFileSearch.pcf: line 94, column 46
    function value_43 () : java.lang.String {
      return row.InputLocation
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchArchiveLocation_Cell) at InboundFileSearch.pcf: line 98, column 48
    function value_46 () : java.lang.String {
      return row.ArchiveLocation
    }
    
    // 'value' attribute on TextCell (id=InboundFileSearchChecksum_Cell) at InboundFileSearch.pcf: line 102, column 41
    function value_49 () : java.lang.String {
      return row.Checksum
    }
    
    // 'valueType' attribute on TypeKeyCell (id=InboundFileSearchStatus_Cell) at InboundFileSearch.pcf: line 80, column 50
    function verifyValueType_36 () : void {
      var __valueTypeArg : InboundFileStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get row () : InboundFileView {
      return getIteratedValue(2) as InboundFileView
    }
    
    
  }
  
  
}