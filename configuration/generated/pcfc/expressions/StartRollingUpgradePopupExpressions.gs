package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.upgrade.UpgradeCondition
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartRollingUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StartRollingUpgradePopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartRollingUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StartRollingUpgradeScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=Checked_Cell) at StartRollingUpgradePopup.pcf: line 49, column 43
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.Checked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Checked_Cell) at StartRollingUpgradePopup.pcf: line 49, column 43
    function valueRoot_4 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on CheckBoxCell (id=Checked_Cell) at StartRollingUpgradePopup.pcf: line 49, column 43
    function value_2 () : java.lang.Boolean {
      return condition.Checked
    }
    
    // 'value' attribute on TextCell (id=condition_Cell) at StartRollingUpgradePopup.pcf: line 55, column 30
    function value_6 () : java.lang.String {
      return condition.Condition
    }
    
    property get condition () : gw.upgrade.UpgradeCondition {
      return getIteratedValue(2) as gw.upgrade.UpgradeCondition
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartRollingUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartRollingUpgradePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Page :  gw.api.tools.UpgradeInfoPageHelper) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.StartRollingUpgradePopup {
      return super.CurrentLocation as pcf.StartRollingUpgradePopup
    }
    
    property get Page () : gw.api.tools.UpgradeInfoPageHelper {
      return getVariableValue("Page", 0) as gw.api.tools.UpgradeInfoPageHelper
    }
    
    property set Page ($arg :  gw.api.tools.UpgradeInfoPageHelper) {
      setVariableValue("Page", 0, $arg)
    }
    
    
    function initConds() : UpgradeCondition[] {
     var msgs : UpgradeCondition[] = {
       new UpgradeCondition(DisplayKey.get("Web.InternalTools.infoPages.UpgradeInfo.StartRolling.Condition1")),
       new UpgradeCondition(DisplayKey.get("Web.InternalTools.infoPages.UpgradeInfo.StartRolling.Condition2")),
       new UpgradeCondition(DisplayKey.get("Web.InternalTools.infoPages.UpgradeInfo.StartRolling.Condition3"))
     }
     return msgs
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartRollingUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartRollingUpgradeScreenExpressionsImpl extends StartRollingUpgradePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=StartRolling) at StartRollingUpgradePopup.pcf: line 74, column 95
    function action_11 () : void {
      Page.startRollingUpgrade(); CurrentLocation.commit()
    }
    
    // 'available' attribute on ToolbarButton (id=StartRolling) at StartRollingUpgradePopup.pcf: line 74, column 95
    function available_10 () : java.lang.Boolean {
      return conditions.allMatch( \ cond -> cond.Checked)
    }
    
    // 'initialValue' attribute on Variable at StartRollingUpgradePopup.pcf: line 20, column 47
    function initialValue_0 () : gw.upgrade.UpgradeCondition[] {
      return initConds()
    }
    
    // EditButtons (id=editButtons) at StartRollingUpgradePopup.pcf: line 79, column 38
    function label_12 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'panelStyle' attribute on PanelSet at StartRollingUpgradePopup.pcf: line 25, column 54
    function panelStyle_1 () : gw.api.web.WidgetStyleEnum {
      return gw.api.web.WidgetStyleEnum.Info
    }
    
    // 'value' attribute on RowIterator (id=iterator) at StartRollingUpgradePopup.pcf: line 44, column 55
    function value_9 () : gw.upgrade.UpgradeCondition[] {
      return conditions
    }
    
    property get conditions () : gw.upgrade.UpgradeCondition[] {
      return getVariableValue("conditions", 1) as gw.upgrade.UpgradeCondition[]
    }
    
    property set conditions ($arg :  gw.upgrade.UpgradeCondition[]) {
      setVariableValue("conditions", 1, $arg)
    }
    
    
  }
  
  
}