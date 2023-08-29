package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.upgrade.UpgradeCondition
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartBlueGreenUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StartBlueGreenUpgradePopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartBlueGreenUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends StartBlueGreenUpgradeScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=selected_Cell) at StartBlueGreenUpgradePopup.pcf: line 86, column 51
    function action_11 () : void {
      selectedUpgrade = choice
    }
    
    // 'value' attribute on TextCell (id=choice_Cell) at StartBlueGreenUpgradePopup.pcf: line 92, column 30
    function valueRoot_15 () : java.lang.Object {
      return choice
    }
    
    // 'value' attribute on RadioButtonCell (id=selected_Cell) at StartBlueGreenUpgradePopup.pcf: line 86, column 51
    function value_12 () : java.lang.Boolean {
      return selectedUpgrade == choice
    }
    
    // 'value' attribute on TextCell (id=choice_Cell) at StartBlueGreenUpgradePopup.pcf: line 92, column 30
    function value_14 () : java.lang.String {
      return choice.LocalizedDescription
    }
    
    property get choice () : gw.upgrade.BlueGreenOption {
      return getIteratedValue(2) as gw.upgrade.BlueGreenOption
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartBlueGreenUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StartBlueGreenUpgradeScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=Checked_Cell) at StartBlueGreenUpgradePopup.pcf: line 53, column 43
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.Checked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Checked_Cell) at StartBlueGreenUpgradePopup.pcf: line 53, column 43
    function valueRoot_5 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on CheckBoxCell (id=Checked_Cell) at StartBlueGreenUpgradePopup.pcf: line 53, column 43
    function value_3 () : java.lang.Boolean {
      return condition.Checked
    }
    
    // 'value' attribute on TextCell (id=condition_Cell) at StartBlueGreenUpgradePopup.pcf: line 59, column 30
    function value_7 () : java.lang.String {
      return condition.Condition
    }
    
    property get condition () : gw.upgrade.UpgradeCondition {
      return getIteratedValue(2) as gw.upgrade.UpgradeCondition
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartBlueGreenUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartBlueGreenUpgradePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Page :  gw.api.tools.UpgradeInfoPageHelper) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.StartBlueGreenUpgradePopup {
      return super.CurrentLocation as pcf.StartBlueGreenUpgradePopup
    }
    
    property get Page () : gw.api.tools.UpgradeInfoPageHelper {
      return getVariableValue("Page", 0) as gw.api.tools.UpgradeInfoPageHelper
    }
    
    property set Page ($arg :  gw.api.tools.UpgradeInfoPageHelper) {
      setVariableValue("Page", 0, $arg)
    }
    
    
    function initConds() : UpgradeCondition[] {
     var msgs : UpgradeCondition[] = {
       new UpgradeCondition(DisplayKey.get("Web.InternalTools.infoPages.UpgradeInfo.StartBlueGreen.Condition1")),
       new UpgradeCondition(DisplayKey.get("Web.InternalTools.infoPages.UpgradeInfo.StartBlueGreen.Condition2")),
       new UpgradeCondition(DisplayKey.get("Web.InternalTools.infoPages.UpgradeInfo.StartBlueGreen.Condition3"))
     }
     return msgs
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartBlueGreenUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartBlueGreenUpgradeScreenExpressionsImpl extends StartBlueGreenUpgradePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=StartBlueGreen) at StartBlueGreenUpgradePopup.pcf: line 111, column 97
    function action_19 () : void {
      Page.startBlueGreenUpgrade(selectedUpgrade); CurrentLocation.commit()
    }
    
    // 'available' attribute on ToolbarButton (id=StartBlueGreen) at StartBlueGreenUpgradePopup.pcf: line 111, column 97
    function available_18 () : java.lang.Boolean {
      return conditions.allMatch( \ cond -> cond.Checked) && selectedUpgrade != null
    }
    
    // 'initialValue' attribute on Variable at StartBlueGreenUpgradePopup.pcf: line 20, column 47
    function initialValue_0 () : gw.upgrade.UpgradeCondition[] {
      return initConds()
    }
    
    // 'initialValue' attribute on Variable at StartBlueGreenUpgradePopup.pcf: line 24, column 44
    function initialValue_1 () : gw.upgrade.BlueGreenOption {
      return null
    }
    
    // EditButtons (id=editButtons) at StartBlueGreenUpgradePopup.pcf: line 116, column 38
    function label_20 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'panelStyle' attribute on PanelSet at StartBlueGreenUpgradePopup.pcf: line 29, column 54
    function panelStyle_2 () : gw.api.web.WidgetStyleEnum {
      return gw.api.web.WidgetStyleEnum.Info
    }
    
    // 'value' attribute on RowIterator (id=iterator) at StartBlueGreenUpgradePopup.pcf: line 48, column 55
    function value_10 () : gw.upgrade.UpgradeCondition[] {
      return conditions
    }
    
    // 'value' attribute on RowIterator (id=iterator) at StartBlueGreenUpgradePopup.pcf: line 79, column 54
    function value_17 () : gw.upgrade.BlueGreenOption[] {
      return gw.upgrade.BlueGreenOption.values()
    }
    
    property get conditions () : gw.upgrade.UpgradeCondition[] {
      return getVariableValue("conditions", 1) as gw.upgrade.UpgradeCondition[]
    }
    
    property set conditions ($arg :  gw.upgrade.UpgradeCondition[]) {
      setVariableValue("conditions", 1, $arg)
    }
    
    property get selectedUpgrade () : gw.upgrade.BlueGreenOption {
      return getVariableValue("selectedUpgrade", 1) as gw.upgrade.BlueGreenOption
    }
    
    property set selectedUpgrade ($arg :  gw.upgrade.BlueGreenOption) {
      setVariableValue("selectedUpgrade", 1, $arg)
    }
    
    
  }
  
  
}