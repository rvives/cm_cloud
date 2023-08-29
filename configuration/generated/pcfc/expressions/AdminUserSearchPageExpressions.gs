package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/AdminUserSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminUserSearchPageExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/AdminUserSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminUserSearchPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AdminUserSearchPage) at AdminUserSearchPage.pcf: line 9, column 79
    static function canVisit_7 () : java.lang.Boolean {
      return perm.Group.viewtree
    }
    
    // 'initialValue' attribute on Variable at AdminUserSearchPage.pcf: line 15, column 56
    function initialValue_0 () : gw.api.contact.ProximitySearchPageHelper {
      return new gw.api.contact.ProximitySearchPageHelper()
    }
    
    // Page (id=AdminUserSearchPage) at AdminUserSearchPage.pcf: line 9, column 79
    static function parent_8 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AdminUserSearchPage {
      return super.CurrentLocation as pcf.AdminUserSearchPage
    }
    
    property get psph () : gw.api.contact.ProximitySearchPageHelper {
      return getVariableValue("psph", 0) as gw.api.contact.ProximitySearchPageHelper
    }
    
    property set psph ($arg :  gw.api.contact.ProximitySearchPageHelper) {
      setVariableValue("psph", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/AdminUserSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AdminUserSearchPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AdminUserSearchPage.pcf: line 26, column 47
    function def_onEnter_1 (def :  pcf.UserSearchDV) : void {
      def.onEnter(SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at AdminUserSearchPage.pcf: line 28, column 82
    function def_onEnter_3 (def :  pcf.UserSearchResultsLV) : void {
      def.onEnter(searchResults, false, SearchCriteria, false)
    }
    
    // 'def' attribute on PanelRef at AdminUserSearchPage.pcf: line 26, column 47
    function def_refreshVariables_2 (def :  pcf.UserSearchDV) : void {
      def.refreshVariables(SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at AdminUserSearchPage.pcf: line 28, column 82
    function def_refreshVariables_4 (def :  pcf.UserSearchResultsLV) : void {
      def.refreshVariables(searchResults, false, SearchCriteria, false)
    }
    
    // 'searchCriteria' attribute on SearchPanel at AdminUserSearchPage.pcf: line 24, column 74
    function searchCriteria_6 () : entity.UserSearchCriteria {
      return new UserSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at AdminUserSearchPage.pcf: line 24, column 74
    function search_5 () : java.lang.Object {
      new gw.api.name.UserSearchNameOwner(SearchCriteria.Contact).clearNonvisibleFields(); return SearchCriteria.performSearchByProximity(CurrentLocation, psph) as gw.api.database.IQueryBeanResult<User>
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
  
  
}