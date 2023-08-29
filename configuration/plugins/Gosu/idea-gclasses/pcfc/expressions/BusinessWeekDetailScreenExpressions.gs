package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/businessweek/BusinessWeekDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BusinessWeekDetailScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/businessweek/BusinessWeekDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BusinessWeekDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at BusinessWeekDetailScreen.pcf: line 44, column 50
    function def_onEnter_18 (def :  pcf.BusinessWeekDetailDV_default) : void {
      def.onEnter(businessWeek)
    }
    
    // 'def' attribute on PanelRef at BusinessWeekDetailScreen.pcf: line 46, column 52
    function def_onEnter_20 (def :  pcf.BusinessWeekDayDetailDV) : void {
      def.onEnter(businessWeek)
    }
    
    // 'def' attribute on PanelRef at BusinessWeekDetailScreen.pcf: line 48, column 136
    function def_onEnter_22 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(businessWeek, { "Name"}, { DisplayKey.get("Web.Admin.BusinessWeekDetailDV.Name") })
    }
    
    // 'def' attribute on PanelRef at BusinessWeekDetailScreen.pcf: line 44, column 50
    function def_refreshVariables_19 (def :  pcf.BusinessWeekDetailDV_default) : void {
      def.refreshVariables(businessWeek)
    }
    
    // 'def' attribute on PanelRef at BusinessWeekDetailScreen.pcf: line 46, column 52
    function def_refreshVariables_21 (def :  pcf.BusinessWeekDayDetailDV) : void {
      def.refreshVariables(businessWeek)
    }
    
    // 'def' attribute on PanelRef at BusinessWeekDetailScreen.pcf: line 48, column 136
    function def_refreshVariables_23 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(businessWeek, { "Name"}, { DisplayKey.get("Web.Admin.BusinessWeekDetailDV.Name") })
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at BusinessWeekDetailScreen.pcf: line 23, column 40
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AppliesToAllZones_Input) at BusinessWeekDetailScreen.pcf: line 30, column 28
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.AppliesToAllZones = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // EditButtons at BusinessWeekDetailScreen.pcf: line 12, column 47
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on BooleanRadioInput (id=AppliesToAllZones_Input) at BusinessWeekDetailScreen.pcf: line 30, column 28
    function validationExpression_6 () : java.lang.Object {
      return businessWeek.validateOnlyOneBusinessWeekAppliesToAll()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at BusinessWeekDetailScreen.pcf: line 23, column 40
    function valueRoot_4 () : java.lang.Object {
      return businessWeek
    }
    
    // 'value' attribute on TextAreaInput (id=Zones_Input) at BusinessWeekDetailScreen.pcf: line 38, column 56
    function value_13 () : java.lang.String {
      return businessWeek.Zones
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at BusinessWeekDetailScreen.pcf: line 23, column 40
    function value_2 () : java.lang.String {
      return businessWeek.Name
    }
    
    // 'value' attribute on BooleanRadioInput (id=AppliesToAllZones_Input) at BusinessWeekDetailScreen.pcf: line 30, column 28
    function value_7 () : java.lang.Boolean {
      return businessWeek.AppliesToAllZones
    }
    
    // 'editVisible' attribute on EditButtons at BusinessWeekDetailScreen.pcf: line 12, column 47
    function visible_0 () : java.lang.Boolean {
      return perm.BusinessWeek.edit
    }
    
    // 'visible' attribute on TextAreaInput (id=Zones_Input) at BusinessWeekDetailScreen.pcf: line 38, column 56
    function visible_12 () : java.lang.Boolean {
      return !businessWeek.AppliesToAllZones
    }
    
    property get businessWeek () : BusinessWeek {
      return getRequireValue("businessWeek", 0) as BusinessWeek
    }
    
    property set businessWeek ($arg :  BusinessWeek) {
      setRequireValue("businessWeek", 0, $arg)
    }
    
    
  }
  
  
}