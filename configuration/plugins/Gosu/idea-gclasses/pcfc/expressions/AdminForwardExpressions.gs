package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/AdminForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminForwardExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/AdminForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at AdminForward.pcf: line 11, column 33
    function action_0 () : void {
      AdminPlace.go()
    }
    
    // 'action' attribute on ForwardCondition at AdminForward.pcf: line 13, column 28
    function action_2 () : void {
      Admin.go()
    }
    
    // 'action' attribute on ForwardCondition at AdminForward.pcf: line 11, column 33
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AdminPlace.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at AdminForward.pcf: line 13, column 28
    function action_dest_3 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'canVisit' attribute on Forward (id=AdminForward) at AdminForward.pcf: line 7, column 23
    static function canVisit_4 () : java.lang.Boolean {
      return perm.User.view
    }
    
    override property get CurrentLocation () : pcf.AdminForward {
      return super.CurrentLocation as pcf.AdminForward
    }
    
    
  }
  
  
}