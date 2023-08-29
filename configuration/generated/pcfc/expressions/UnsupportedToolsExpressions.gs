package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/UnsupportedTools.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UnsupportedToolsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/UnsupportedTools.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UnsupportedToolsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 12, column 28
    function action_0 () : void {
      pcf.Reload.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 14, column 34
    function action_2 () : void {
      pcf.ABSampleData.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 16, column 33
    function action_4 () : void {
      pcf.SystemClock.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 12, column 28
    function action_dest_1 () : pcf.api.Destination {
      return pcf.Reload.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 14, column 34
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ABSampleData.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 16, column 33
    function action_dest_5 () : pcf.api.Destination {
      return pcf.SystemClock.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 18
    static function canVisit_6 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isEnabled()
    }
    
    // LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 18
    static function firstVisitableChildDestinationMethod_12 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.Reload.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABSampleData.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.SystemClock.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuActions' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 18
    function menuActions_onEnter_7 (def :  pcf.InternalToolsMenuActions) : void {
      def.onEnter()
    }
    
    // 'menuActions' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 18
    function menuActions_refreshVariables_8 (def :  pcf.InternalToolsMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'tabBar' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 18
    function tabBar_onEnter_9 (def :  pcf.InternalToolsTabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 18
    function tabBar_refreshVariables_10 (def :  pcf.InternalToolsTabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 18
    static function title_11 () : java.lang.Object {
      return null
    }
    
    override property get CurrentLocation () : pcf.UnsupportedTools {
      return super.CurrentLocation as pcf.UnsupportedTools
    }
    
    
  }
  
  
}