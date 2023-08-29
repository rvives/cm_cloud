package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/holidays/HolidayDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HolidayDetailDV_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/holidays/HolidayDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HolidayDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HolidayDetailDV.default.pcf: line 22, column 47
    function def_onEnter_7 (def :  pcf.ZonesInputSet) : void {
      def.onEnter(Holiday, Holiday.IntrinsicType.RelativeName)
    }
    
    // 'def' attribute on InputSetRef at HolidayDetailDV.default.pcf: line 22, column 47
    function def_refreshVariables_8 (def :  pcf.ZonesInputSet) : void {
      def.refreshVariables(Holiday, Holiday.IntrinsicType.RelativeName)
    }
    
    // 'value' attribute on TextAreaInput (id=Zones_Input) at HolidayDetailDV.default.pcf: line 19, column 47
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.Zones = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Zones_Input) at HolidayDetailDV.default.pcf: line 19, column 47
    function valueRoot_3 () : java.lang.Object {
      return Holiday
    }
    
    // 'value' attribute on TextAreaInput (id=Zones_Input) at HolidayDetailDV.default.pcf: line 19, column 47
    function value_1 () : java.lang.String {
      return Holiday.Zones
    }
    
    // 'visible' attribute on TextAreaInput (id=Zones_Input) at HolidayDetailDV.default.pcf: line 19, column 47
    function visible_0 () : java.lang.Boolean {
      return !Holiday.AppliesToAllZones
    }
    
    property get Holiday () : Holiday {
      return getRequireValue("Holiday", 0) as Holiday
    }
    
    property set Holiday ($arg :  Holiday) {
      setRequireValue("Holiday", 0, $arg)
    }
    
    
  }
  
  
}