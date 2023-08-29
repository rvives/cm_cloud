package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/FirstPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FirstPageExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/FirstPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FirstPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FirstPage.pcf: line 8, column 38
    function action_0 () : void {
      ABContactSearch.go()
    }
    
    // 'action' attribute on ForwardCondition at FirstPage.pcf: line 10, column 35
    function action_2 () : void {
      AdminForward.go()
    }
    
    // 'action' attribute on ForwardCondition at FirstPage.pcf: line 13, column 39
    function action_4 () : void {
      StartupPageError.go()
    }
    
    // 'action' attribute on ForwardCondition at FirstPage.pcf: line 8, column 38
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at FirstPage.pcf: line 10, column 35
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AdminForward.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at FirstPage.pcf: line 13, column 39
    function action_dest_5 () : pcf.api.Destination {
      return pcf.StartupPageError.createDestination()
    }
    
    override property get CurrentLocation () : pcf.FirstPage {
      return super.CurrentLocation as pcf.FirstPage
    }
    
    
  }
  
  
}