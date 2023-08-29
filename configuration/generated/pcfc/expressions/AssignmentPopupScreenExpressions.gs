package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentPopupScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentPopupScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentPopupScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentPopupScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AssignmentPopupScreen_CancelButton) at AssignmentPopupScreen.pcf: line 15, column 23
    function action_0 () : void {
      CurrentLocation.cancel()
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 20, column 45
    function def_onEnter_2 (def :  pcf.FailedAssignmentsLV_default) : void {
      def.onEnter(AssignmentPopup)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 20, column 45
    function def_refreshVariables_3 (def :  pcf.FailedAssignmentsLV_default) : void {
      def.refreshVariables(AssignmentPopup)
    }
    
    // 'mode' attribute on PanelRef at AssignmentPopupScreen.pcf: line 20, column 45
    function mode_4 () : java.lang.Object {
      return AssignmentPopup.AssignableType.RelativeName
    }
    
    // 'visible' attribute on PanelRef at AssignmentPopupScreen.pcf: line 20, column 45
    function visible_1 () : java.lang.Boolean {
      return AssignmentPopup.hasErrors()
    }
    
    property get AssignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("AssignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set AssignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("AssignmentPopup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentPopupScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AssignmentPopupScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 41, column 112
    function def_onEnter_11 (def :  pcf.AssignmentGroupLV) : void {
      def.onEnter(SearchResult.Groups)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 46, column 112
    function def_onEnter_14 (def :  pcf.AssignmentQueueLV) : void {
      def.onEnter(SearchResult.Queues)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 33, column 81
    function def_onEnter_5 (def :  pcf.AssignmentPopupDV) : void {
      def.onEnter(AssignmentPopup, SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 36, column 111
    function def_onEnter_8 (def :  pcf.AssignmentUserLV) : void {
      def.onEnter(SearchResult.Users)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 41, column 112
    function def_refreshVariables_12 (def :  pcf.AssignmentGroupLV) : void {
      def.refreshVariables(SearchResult.Groups)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 46, column 112
    function def_refreshVariables_15 (def :  pcf.AssignmentQueueLV) : void {
      def.refreshVariables(SearchResult.Queues)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 33, column 81
    function def_refreshVariables_6 (def :  pcf.AssignmentPopupDV) : void {
      def.refreshVariables(AssignmentPopup, SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at AssignmentPopupScreen.pcf: line 36, column 111
    function def_refreshVariables_9 (def :  pcf.AssignmentUserLV) : void {
      def.refreshVariables(SearchResult.Users)
    }
    
    // 'searchCriteria' attribute on SearchPanel at AssignmentPopupScreen.pcf: line 31, column 68
    function searchCriteria_17 () : gw.api.assignment.AssignmentSearchCriteria {
      return new gw.api.assignment.AssignmentSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at AssignmentPopupScreen.pcf: line 31, column 68
    function search_16 () : java.lang.Object {
      return SearchCriteria.performSearch()
    }
    
    // 'visible' attribute on PanelRef at AssignmentPopupScreen.pcf: line 41, column 112
    function visible_10 () : java.lang.Boolean {
      return (SearchCriteria.SearchType == TC_GROUP) and (AssignmentPopup.SelectionType == TC_FROMSEARCH)
    }
    
    // 'visible' attribute on PanelRef at AssignmentPopupScreen.pcf: line 46, column 112
    function visible_13 () : java.lang.Boolean {
      return (SearchCriteria.SearchType == TC_QUEUE) and (AssignmentPopup.SelectionType == TC_FROMSEARCH)
    }
    
    // 'visible' attribute on PanelRef at AssignmentPopupScreen.pcf: line 36, column 111
    function visible_7 () : java.lang.Boolean {
      return (SearchCriteria.SearchType == TC_USER) and (AssignmentPopup.SelectionType == TC_FROMSEARCH)
    }
    
    property get SearchCriteria () : gw.api.assignment.AssignmentSearchCriteria {
      return getCriteriaValue(1) as gw.api.assignment.AssignmentSearchCriteria
    }
    
    property set SearchCriteria ($arg :  gw.api.assignment.AssignmentSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get SearchResult () : gw.api.assignment.AssignmentSearchResult {
      return getResultsValue(1) as gw.api.assignment.AssignmentSearchResult
    }
    
    
  }
  
  
}