package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 18, column 32
    function action_12 () : void {
      pcf.Monitoring.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 20, column 31
    function action_30 () : void {
      pcf.Utilities.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 16, column 38
    function action_8 () : void {
      pcf.UsersAndSecurity.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 18, column 32
    function action_dest_13 () : pcf.api.Destination {
      return pcf.Monitoring.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 20, column 31
    function action_dest_31 () : pcf.api.Destination {
      return pcf.Utilities.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Admin.pcf: line 16, column 38
    function action_dest_9 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    static function canVisit_32 () : java.lang.Boolean {
      return perm.User.view
    }
    
    // LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    static function firstVisitableChildDestinationMethod_40 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.UsersAndSecurity.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Monitoring.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Utilities.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuActions' attribute on LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    function menuActions_onEnter_33 (def :  pcf.AdminMenuActions) : void {
      def.onEnter()
    }
    
    // 'menuActions' attribute on LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    function menuActions_refreshVariables_34 (def :  pcf.AdminMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'menuTree' attribute on LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    function menuTree_onEnter_35 (def :  pcf.AdminMenuTree) : void {
      def.onEnter()
    }
    
    // 'menuTree' attribute on LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    function menuTree_refreshVariables_36 (def :  pcf.AdminMenuTree) : void {
      def.refreshVariables()
    }
    
    // 'parent' attribute on LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    static function parent_37 () : pcf.api.Destination {
      return pcf.AdminForward.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    function tabBar_onEnter_38 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Admin) at Admin.pcf: line 12, column 67
    function tabBar_refreshVariables_39 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Admin {
      return super.CurrentLocation as pcf.Admin
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem2ExpressionsImpl extends LocationGroupMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem3ExpressionsImpl extends AdminExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 9, column 53
    function action_10 () : void {
      pcf.MessagingDestinationControlList.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Monitoring.pcf: line 9, column 53
    function action_dest_11 () : pcf.api.Destination {
      return pcf.MessagingDestinationControlList.createDestination()
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem4ExpressionsImpl extends AdminExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 11, column 21
    function action_14 () : void {
      pcf.ImportWizard.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 15, column 21
    function action_16 () : void {
      pcf.ExportData.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 17, column 42
    function action_18 () : void {
      pcf.ScriptParametersPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 19, column 47
    function action_20 () : void {
      pcf.VendorServiceExportImport.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 21, column 36
    function action_22 () : void {
      pcf.DataChangePage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 23, column 32
    function action_24 () : void {
      pcf.Properties.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 25, column 39
    function action_26 () : void {
      pcf.InboundFileSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 27, column 40
    function action_28 () : void {
      pcf.OutboundFileSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 11, column 21
    function action_dest_15 () : pcf.api.Destination {
      return pcf.ImportWizard.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 15, column 21
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ExportData.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 17, column 42
    function action_dest_19 () : pcf.api.Destination {
      return pcf.ScriptParametersPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 19, column 47
    function action_dest_21 () : pcf.api.Destination {
      return pcf.VendorServiceExportImport.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 21, column 36
    function action_dest_23 () : pcf.api.Destination {
      return pcf.DataChangePage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 23, column 32
    function action_dest_25 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 25, column 39
    function action_dest_27 () : pcf.api.Destination {
      return pcf.InboundFileSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at Utilities.pcf: line 27, column 40
    function action_dest_29 () : pcf.api.Destination {
      return pcf.OutboundFileSearch.createDestination()
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/Admin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItemExpressionsImpl extends AdminExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 9, column 41
    function action_0 () : void {
      pcf.AdminUserSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 11, column 42
    function action_2 () : void {
      pcf.AdminGroupSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 13, column 27
    function action_4 () : void {
      pcf.Roles.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 15, column 29
    function action_6 () : void {
      pcf.Regions.go()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 9, column 41
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AdminUserSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 11, column 42
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AdminGroupSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 13, column 27
    function action_dest_5 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Admin) at UsersAndSecurity.pcf: line 15, column 29
    function action_dest_7 () : pcf.api.Destination {
      return pcf.Regions.createDestination()
    }
    
    
  }
  
  
}