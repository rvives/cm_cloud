package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/ABSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABSampleDataExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/ABSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABSampleDataExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ABSampleData) at ABSampleData.pcf: line 9, column 64
    static function canVisit_4 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isTabVisible() and gw.api.tools.InternalTools.isEnabled()
    }
    
    // Page (id=ABSampleData) at ABSampleData.pcf: line 9, column 64
    static function parent_5 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ABSampleData {
      return super.CurrentLocation as pcf.ABSampleData
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/ABSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends ABSampleDataExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=LoadSampleDataButton_Input) at ABSampleData.pcf: line 24, column 74
    function action_2 () : void {
      gw.api.util.LocationUtil.addRequestScopedInfoMessage(new gw.command.ImportSampleData().import() + ":\t" + (gw.api.util.DateUtil.currentDate().toString()));
    }
    
    // 'action' attribute on ButtonInput (id=LoadDuplicateContactSampleData_Input) at ABSampleData.pcf: line 29, column 90
    function action_3 () : void {
      gw.api.util.LocationUtil.addRequestScopedInfoMessage(new gw.command.ImportSampleData().importDuplicateContacts() + ":\t" + (gw.api.util.DateUtil.currentDate().toString()))
    }
    
    // 'def' attribute on PanelRef at ABSampleData.pcf: line 16, column 42
    function def_onEnter_0 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at ABSampleData.pcf: line 16, column 42
    function def_refreshVariables_1 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    property get result () : String {
      return getVariableValue("result", 1) as String
    }
    
    property set result ($arg :  String) {
      setVariableValue("result", 1, $arg)
    }
    
    
  }
  
  
}