package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/InitiateBackoutConfirmPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InitiateBackoutConfirmPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/InitiateBackoutConfirmPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InitiateBackoutConfirmPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Page :  gw.api.tools.UpgradeInfoPageHelper) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=Continue) at InitiateBackoutConfirmPopup.pcf: line 69, column 114
    function action_11 () : void {
      CurrentLocation.commit(); InitiateBackoutPopup.push(Page) 
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at InitiateBackoutConfirmPopup.pcf: line 73, column 64
    function action_12 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on ToolbarButton (id=Refresh) at InitiateBackoutConfirmPopup.pcf: line 64, column 65
    function action_9 () : void {
      
    }
    
    // 'initialValue' attribute on Variable at InitiateBackoutConfirmPopup.pcf: line 19, column 34
    function initialValue_0 () : List<String> {
      return Page.ActiveServersNotEquivalentToCurrentConfiguration
    }
    
    // 'value' attribute on RowIterator at InitiateBackoutConfirmPopup.pcf: line 50, column 52
    function value_7 () : java.util.List<String> {
      return servers
    }
    
    // 'visible' attribute on TextInput (id=NoTargetServers_Input) at InitiateBackoutConfirmPopup.pcf: line 33, column 42
    function visible_1 () : java.lang.Boolean {
      return servers.isEmpty()
    }
    
    // 'visible' attribute on TextInput (id=HasTargetServers_Input) at InitiateBackoutConfirmPopup.pcf: line 38, column 43
    function visible_3 () : java.lang.Boolean {
      return !servers.isEmpty()
    }
    
    override property get CurrentLocation () : pcf.InitiateBackoutConfirmPopup {
      return super.CurrentLocation as pcf.InitiateBackoutConfirmPopup
    }
    
    property get Page () : gw.api.tools.UpgradeInfoPageHelper {
      return getVariableValue("Page", 0) as gw.api.tools.UpgradeInfoPageHelper
    }
    
    property set Page ($arg :  gw.api.tools.UpgradeInfoPageHelper) {
      setVariableValue("Page", 0, $arg)
    }
    
    property get servers () : List<String> {
      return getVariableValue("servers", 0) as List<String>
    }
    
    property set servers ($arg :  List<String>) {
      setVariableValue("servers", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/InitiateBackoutConfirmPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends InitiateBackoutConfirmPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at InitiateBackoutConfirmPopup.pcf: line 54, column 31
    function value_5 () : java.lang.String {
      return server
    }
    
    property get server () : String {
      return getIteratedValue(1) as String
    }
    
    
  }
  
  
}