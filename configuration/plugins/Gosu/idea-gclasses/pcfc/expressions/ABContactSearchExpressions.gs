package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ABContactSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactSearchExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/search/ABContactSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (requiredContactType :  Type) : int {
      return 1
    }
    
    // 'canVisit' attribute on Page (id=ABContactSearch) at ABContactSearch.pcf: line 8, column 61
    static function canVisit_3 (requiredContactType :  Type) : java.lang.Boolean {
      return perm.ABContact.viewsearch
    }
    
    // 'def' attribute on ScreenRef at ABContactSearch.pcf: line 18, column 70
    function def_onEnter_1 (def :  pcf.ABContactSearchScreen) : void {
      def.onEnter(false, true, requiredContactType)
    }
    
    // 'def' attribute on ScreenRef at ABContactSearch.pcf: line 18, column 70
    function def_refreshVariables_2 (def :  pcf.ABContactSearchScreen) : void {
      def.refreshVariables(false, true, requiredContactType)
    }
    
    // 'initialValue' attribute on Variable at ABContactSearch.pcf: line 16, column 20
    function initialValue_0 () : Type {
      return entity.ABContact
    }
    
    // Page (id=ABContactSearch) at ABContactSearch.pcf: line 8, column 61
    static function parent_4 (requiredContactType :  Type) : pcf.api.Destination {
      return pcf.ABContacts.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ABContactSearch {
      return super.CurrentLocation as pcf.ABContactSearch
    }
    
    property get requiredContactType () : Type {
      return getVariableValue("requiredContactType", 0) as Type
    }
    
    property set requiredContactType ($arg :  Type) {
      setVariableValue("requiredContactType", 0, $arg)
    }
    
    
  }
  
  
}