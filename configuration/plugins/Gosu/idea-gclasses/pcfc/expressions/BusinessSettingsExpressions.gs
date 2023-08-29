package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/businesssettings/BusinessSettings.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BusinessSettingsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/businesssettings/BusinessSettings.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BusinessSettingsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 9, column 38
    function action_0 () : void {
      pcf.ActivityPatterns.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 11, column 34
    function action_2 () : void {
      pcf.BusinessWeek.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 13, column 30
    function action_4 () : void {
      pcf.Holidays.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 9, column 38
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ActivityPatterns.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 11, column 34
    function action_dest_3 () : pcf.api.Destination {
      return pcf.BusinessWeek.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 13, column 30
    function action_dest_5 () : pcf.api.Destination {
      return pcf.Holidays.createDestination()
    }
    
    // LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 7, column 68
    static function firstVisitableChildDestinationMethod_8 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ActivityPatterns.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.BusinessWeek.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Holidays.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'tabBar' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 7, column 68
    function tabBar_onEnter_6 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 7, column 68
    function tabBar_refreshVariables_7 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.BusinessSettings {
      return super.CurrentLocation as pcf.BusinessSettings
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/businesssettings/BusinessSettings.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem2ExpressionsImpl extends BusinessSettingsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/businesssettings/BusinessSettings.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItemExpressionsImpl extends BusinessSettingsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  
}