package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/monitoring/Monitoring.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MonitoringExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/monitoring/Monitoring.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MonitoringExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 9, column 53
    function action_0 () : void {
      pcf.MessagingDestinationControlList.go()
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 9, column 53
    function action_dest_1 () : pcf.api.Destination {
      return pcf.MessagingDestinationControlList.createDestination()
    }
    
    // LocationGroup (id=Monitoring) at Monitoring.pcf: line 7, column 62
    static function firstVisitableChildDestinationMethod_5 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.MessagingDestinationControlList.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=Monitoring) at Monitoring.pcf: line 7, column 62
    static function parent_2 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 7, column 62
    function tabBar_onEnter_3 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 7, column 62
    function tabBar_refreshVariables_4 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Monitoring {
      return super.CurrentLocation as pcf.Monitoring
    }
    
    
  }
  
  
}