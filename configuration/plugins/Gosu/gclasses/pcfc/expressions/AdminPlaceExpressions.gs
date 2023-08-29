package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/AdminPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminPlaceExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/AdminPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminPlaceExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AdminPlace) at AdminPlace.pcf: line 9, column 68
    static function canVisit_0 () : java.lang.Boolean {
      return perm.User.view
    }
    
    // 'parent' attribute on Page (id=AdminPlace) at AdminPlace.pcf: line 9, column 68
    static function parent_1 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AdminPlace {
      return super.CurrentLocation as pcf.AdminPlace
    }
    
    
  }
  
  
}