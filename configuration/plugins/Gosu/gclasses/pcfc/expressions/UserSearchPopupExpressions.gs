package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSearchPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends UserSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at UserSearchPopup.pcf: line 33, column 47
    function def_onEnter_2 (def :  pcf.UserSearchDV) : void {
      def.onEnter(SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at UserSearchPopup.pcf: line 35, column 81
    function def_onEnter_4 (def :  pcf.UserSearchResultsLV) : void {
      def.onEnter(searchResults, true, SearchCriteria, false)
    }
    
    // 'def' attribute on PanelRef at UserSearchPopup.pcf: line 33, column 47
    function def_refreshVariables_3 (def :  pcf.UserSearchDV) : void {
      def.refreshVariables(SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at UserSearchPopup.pcf: line 35, column 81
    function def_refreshVariables_5 (def :  pcf.UserSearchResultsLV) : void {
      def.refreshVariables(searchResults, true, SearchCriteria, false)
    }
    
    // 'searchCriteria' attribute on SearchPanel at UserSearchPopup.pcf: line 31, column 74
    function searchCriteria_7 () : entity.UserSearchCriteria {
      return new UserSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at UserSearchPopup.pcf: line 31, column 74
    function search_6 () : java.lang.Object {
      return SearchCriteria.performSearchByProximity(CurrentLocation, psph) as gw.api.database.IQueryBeanResult<User>
    }
    
    property get SearchCriteria () : entity.UserSearchCriteria {
      return getCriteriaValue(1) as entity.UserSearchCriteria
    }
    
    property set SearchCriteria ($arg :  entity.UserSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<User> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<User>
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (Organization :  Organization) : int {
      return 1
    }
    
    // 'initialValue' attribute on Variable at UserSearchPopup.pcf: line 18, column 28
    function initialValue_0 () : Organization {
      return null
    }
    
    // 'initialValue' attribute on Variable at UserSearchPopup.pcf: line 22, column 56
    function initialValue_1 () : gw.api.contact.ProximitySearchPageHelper {
      return new gw.api.contact.ProximitySearchPageHelper()
    }
    
    override property get CurrentLocation () : pcf.UserSearchPopup {
      return super.CurrentLocation as pcf.UserSearchPopup
    }
    
    property get Organization () : Organization {
      return getVariableValue("Organization", 0) as Organization
    }
    
    property set Organization ($arg :  Organization) {
      setVariableValue("Organization", 0, $arg)
    }
    
    property get psph () : gw.api.contact.ProximitySearchPageHelper {
      return getVariableValue("psph", 0) as gw.api.contact.ProximitySearchPageHelper
    }
    
    property set psph ($arg :  gw.api.contact.ProximitySearchPageHelper) {
      setVariableValue("psph", 0, $arg)
    }
    
    
  }
  
  
}