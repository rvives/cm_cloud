package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/utilities/Utilities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UtilitiesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/utilities/Utilities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UtilitiesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 11, column 21
    function action_0 () : void {
      pcf.ImportWizard.go()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 23, column 32
    function action_10 () : void {
      pcf.Properties.go()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 25, column 39
    function action_12 () : void {
      pcf.InboundFileSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 27, column 40
    function action_14 () : void {
      pcf.OutboundFileSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 15, column 21
    function action_2 () : void {
      pcf.ExportData.go()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 17, column 42
    function action_4 () : void {
      pcf.ScriptParametersPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 19, column 47
    function action_6 () : void {
      pcf.VendorServiceExportImport.go()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 21, column 36
    function action_8 () : void {
      pcf.DataChangePage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 11, column 21
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ImportWizard.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 23, column 32
    function action_dest_11 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 25, column 39
    function action_dest_13 () : pcf.api.Destination {
      return pcf.InboundFileSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 27, column 40
    function action_dest_15 () : pcf.api.Destination {
      return pcf.OutboundFileSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 15, column 21
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ExportData.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 17, column 42
    function action_dest_5 () : pcf.api.Destination {
      return pcf.ScriptParametersPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 19, column 47
    function action_dest_7 () : pcf.api.Destination {
      return pcf.VendorServiceExportImport.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 21, column 36
    function action_dest_9 () : pcf.api.Destination {
      return pcf.DataChangePage.createDestination()
    }
    
    // LocationGroup (id=Utilities) at Utilities.pcf: line 7, column 61
    static function firstVisitableChildDestinationMethod_19 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ImportWizard.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ExportData.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ScriptParametersPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.VendorServiceExportImport.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.DataChangePage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Properties.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.InboundFileSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.OutboundFileSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=Utilities) at Utilities.pcf: line 7, column 61
    static function parent_16 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 7, column 61
    function tabBar_onEnter_17 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Utilities) at Utilities.pcf: line 7, column 61
    function tabBar_refreshVariables_18 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Utilities {
      return super.CurrentLocation as pcf.Utilities
    }
    
    
  }
  
  
}