package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentPopupDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentPopupDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=AssignmentByGroupPopupScreen_ButtonButton_Input) at AssignmentPopupDV.pcf: line 36, column 76
    function action_9 () : void {
      if(AssignmentPopup.performAssignment()) CurrentLocation.cancel()
    }
    
    // 'available' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 32, column 51
    function available_0 () : java.lang.Boolean {
      return AssignmentPopup.SelectionType == TC_FROMLIST
    }
    
    // 'def' attribute on InputSetRef at AssignmentPopupDV.pcf: line 50, column 198
    function def_onEnter_18 (def :  pcf.AssignmentSearchInputSet) : void {
      def.onEnter(gw.api.upgrade.Coercions.makeArray<typekey.AssignmentSearchType>(AssignmentPopup.Picker.AllowedAssignmentSearchTypes), SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on InputSetRef at AssignmentPopupDV.pcf: line 55, column 41
    function def_onEnter_23 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AssignmentPopupDV.pcf: line 50, column 198
    function def_refreshVariables_19 (def :  pcf.AssignmentSearchInputSet) : void {
      def.refreshVariables(gw.api.upgrade.Coercions.makeArray<typekey.AssignmentSearchType>(AssignmentPopup.Picker.AllowedAssignmentSearchTypes), SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on InputSetRef at AssignmentPopupDV.pcf: line 55, column 41
    function def_refreshVariables_24 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on Choice (id=SelectFromListChoice) at AssignmentPopupDV.pcf: line 23, column 53
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssignmentPopup.SelectionType = (__VALUE_TO_SET as typekey.AssignmentSelectionType)
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 32, column 51
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssignmentPopup.SelectedFromList = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'label' attribute on TextInput (id=SelectFromSearch_Input) at AssignmentPopupDV.pcf: line 48, column 51
    function label_13 () : java.lang.Object {
      return AssignmentPopup.SelectFromSearchLabel
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 32, column 51
    function valueRange_4 () : java.lang.Object {
      return AssignmentPopup.SuggestedAssignees
    }
    
    // 'value' attribute on TextInput (id=SelectFromSearch_Input) at AssignmentPopupDV.pcf: line 48, column 51
    function valueRoot_15 () : java.lang.Object {
      return AssignmentPopup.Picker
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 32, column 51
    function valueRoot_3 () : java.lang.Object {
      return AssignmentPopup
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 32, column 51
    function value_1 () : gw.api.assignment.Assignee {
      return AssignmentPopup.SelectedFromList
    }
    
    // 'value' attribute on Choice (id=SelectFromListChoice) at AssignmentPopupDV.pcf: line 23, column 53
    function value_10 () : typekey.AssignmentSelectionType {
      return AssignmentPopup.SelectionType
    }
    
    // 'value' attribute on TextInput (id=SelectFromSearch_Input) at AssignmentPopupDV.pcf: line 48, column 51
    function value_14 () : gw.api.assignment.Assignee {
      return AssignmentPopup.Picker.Selection
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 32, column 51
    function verifyValueRangeIsAllowedType_5 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 32, column 51
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 32, column 51
    function verifyValueRange_6 () : void {
      var __valueRangeArg = AssignmentPopup.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get AssignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("AssignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set AssignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("AssignmentPopup", 0, $arg)
    }
    
    property get SearchCriteria () : gw.api.assignment.AssignmentSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as gw.api.assignment.AssignmentSearchCriteria
    }
    
    property set SearchCriteria ($arg :  gw.api.assignment.AssignmentSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    property get SearchResult () : gw.api.assignment.AssignmentSearchResult {
      return getRequireValue("SearchResult", 0) as gw.api.assignment.AssignmentSearchResult
    }
    
    property set SearchResult ($arg :  gw.api.assignment.AssignmentSearchResult) {
      setRequireValue("SearchResult", 0, $arg)
    }
    
    
  }
  
  
}