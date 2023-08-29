package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/UsersAndSecurity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UsersAndSecurityExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/UsersAndSecurity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItemExpressionsImpl extends UsersAndSecurityExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/UsersAndSecurity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UsersAndSecurityExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 9, column 41
    function action_0 () : void {
      pcf.AdminUserSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 11, column 42
    function action_2 () : void {
      pcf.AdminGroupSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 13, column 27
    function action_4 () : void {
      pcf.Roles.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 15, column 29
    function action_6 () : void {
      pcf.Regions.go()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 9, column 41
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AdminUserSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 11, column 42
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AdminGroupSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 13, column 27
    function action_dest_5 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 15, column 29
    function action_dest_7 () : pcf.api.Destination {
      return pcf.Regions.createDestination()
    }
    
    // LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 7, column 68
    static function firstVisitableChildDestinationMethod_11 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.AdminUserSearchPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AdminGroupSearchPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Roles.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Regions.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 7, column 68
    static function parent_8 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 7, column 68
    function tabBar_onEnter_9 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=UsersAndSecurity) at UsersAndSecurity.pcf: line 7, column 68
    function tabBar_refreshVariables_10 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.UsersAndSecurity {
      return super.CurrentLocation as pcf.UsersAndSecurity
    }
    
    
  }
  
  
}