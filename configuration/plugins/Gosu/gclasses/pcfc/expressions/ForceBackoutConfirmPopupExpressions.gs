package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ForceBackoutConfirmPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ForceBackoutConfirmPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ForceBackoutConfirmPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ForceBackoutConfirmPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Page :  gw.api.tools.UpgradeInfoPageHelper) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=Continue) at ForceBackoutConfirmPopup.pcf: line 45, column 112
    function action_2 () : void {
      CurrentLocation.commit(); Page.forceStartProcessToBackOut()
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at ForceBackoutConfirmPopup.pcf: line 49, column 64
    function action_3 () : void {
      CurrentLocation.cancel()
    }
    
    // 'available' attribute on ToolbarButton (id=Continue) at ForceBackoutConfirmPopup.pcf: line 45, column 112
    function available_1 () : java.lang.Boolean {
      return checked
    }
    
    // 'value' attribute on CheckBoxCell (id=Checked_Cell) at ForceBackoutConfirmPopup.pcf: line 56, column 31
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      checked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at ForceBackoutConfirmPopup.pcf: line 22, column 32
    function initialValue_0 () : java.lang.String {
      return Page.ServerIdDoingRollingUpgrade
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at ForceBackoutConfirmPopup.pcf: line 62, column 33
    function value_7 () : java.lang.String {
      return serverId
    }
    
    override property get CurrentLocation () : pcf.ForceBackoutConfirmPopup {
      return super.CurrentLocation as pcf.ForceBackoutConfirmPopup
    }
    
    property get Page () : gw.api.tools.UpgradeInfoPageHelper {
      return getVariableValue("Page", 0) as gw.api.tools.UpgradeInfoPageHelper
    }
    
    property set Page ($arg :  gw.api.tools.UpgradeInfoPageHelper) {
      setVariableValue("Page", 0, $arg)
    }
    
    property get checked () : java.lang.Boolean {
      return getVariableValue("checked", 0) as java.lang.Boolean
    }
    
    property set checked ($arg :  java.lang.Boolean) {
      setVariableValue("checked", 0, $arg)
    }
    
    property get serverId () : java.lang.String {
      return getVariableValue("serverId", 0) as java.lang.String
    }
    
    property set serverId ($arg :  java.lang.String) {
      setVariableValue("serverId", 0, $arg)
    }
    
    
  }
  
  
}