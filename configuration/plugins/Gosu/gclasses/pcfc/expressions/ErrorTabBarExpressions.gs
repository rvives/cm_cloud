package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/util/ErrorTabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ErrorTabBarExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/util/ErrorTabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ErrorTabBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Tab (id=ErrorTab) at ErrorTabBar.pcf: line 10, column 54
    function action_0 () : void {
      ErrorGroup.go()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at ErrorTabBar.pcf: line 15, column 24
    function action_2 () : void {
      Help.push()
    }
    
    // 'action' attribute on TabBarLink (id=ReturnTabBarLink) at ErrorTabBar.pcf: line 23, column 67
    function action_4 () : void {
      gw.api.util.NavUtil.goToDefaultEntryPoint()
    }
    
    // 'action' attribute on Tab (id=ErrorTab) at ErrorTabBar.pcf: line 10, column 54
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ErrorGroup.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at ErrorTabBar.pcf: line 15, column 24
    function action_dest_3 () : pcf.api.Destination {
      return pcf.Help.createDestination()
    }
    
    // 'label' attribute on TabBarLogout (id=LogoutTabBarLink) at ErrorTabBar.pcf: line 28, column 21
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.TabBar.Logout", entity.User.util.CurrentUser)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/util/ErrorTabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ErrorTabMenuItemExpressionsImpl extends ErrorTabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  
}