package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentSearchDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 18, column 94
    function def_onEnter_0 (def :  pcf.AssignmentSearchInputSet) : void {
      def.onEnter(AssignmentSearchTypes, SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 22, column 41
    function def_onEnter_2 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 18, column 94
    function def_refreshVariables_1 (def :  pcf.AssignmentSearchInputSet) : void {
      def.refreshVariables(AssignmentSearchTypes, SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 22, column 41
    function def_refreshVariables_3 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    property get AssignmentSearchTypes () : AssignmentSearchType[] {
      return getRequireValue("AssignmentSearchTypes", 0) as AssignmentSearchType[]
    }
    
    property set AssignmentSearchTypes ($arg :  AssignmentSearchType[]) {
      setRequireValue("AssignmentSearchTypes", 0, $arg)
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