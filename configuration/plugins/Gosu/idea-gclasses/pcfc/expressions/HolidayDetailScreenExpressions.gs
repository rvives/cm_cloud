package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/holidays/HolidayDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HolidayDetailScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/holidays/HolidayDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HolidayDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 49, column 45
    function def_onEnter_20 (def :  pcf.HolidayDetailDV_default) : void {
      def.onEnter(Holiday)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 74, column 126
    function def_onEnter_33 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(Holiday, { "Name"}, { DisplayKey.get("Web.Admin.HolidayDetailDV.Name") })
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 49, column 45
    function def_refreshVariables_21 (def :  pcf.HolidayDetailDV_default) : void {
      def.refreshVariables(Holiday)
    }
    
    // 'def' attribute on PanelRef at HolidayDetailScreen.pcf: line 74, column 126
    function def_refreshVariables_34 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(Holiday, { "Name"}, { DisplayKey.get("Web.Admin.HolidayDetailDV.Name") })
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllZones_Input) at HolidayDetailScreen.pcf: line 35, column 47
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.AppliesToAllZones = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Tags_Input) at HolidayDetailScreen.pcf: line 59, column 39
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.TagsString = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 70, column 49
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.TagsArray = (__VALUE_TO_SET as typekey.HolidayTagCode[])
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at HolidayDetailScreen.pcf: line 23, column 35
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at HolidayDetailScreen.pcf: line 29, column 45
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      Holiday.OccurrenceDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // EditButtons at HolidayDetailScreen.pcf: line 12, column 42
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'valueRange' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 70, column 49
    function valueRange_29 () : java.lang.Object {
      return Holiday.getTagRange()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at HolidayDetailScreen.pcf: line 23, column 35
    function valueRoot_4 () : java.lang.Object {
      return Holiday
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllZones_Input) at HolidayDetailScreen.pcf: line 35, column 47
    function value_10 () : java.lang.Boolean {
      return Holiday.AppliesToAllZones
    }
    
    // 'value' attribute on TextAreaInput (id=Zones_Input) at HolidayDetailScreen.pcf: line 43, column 51
    function value_15 () : java.lang.String {
      return Holiday.Zones
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at HolidayDetailScreen.pcf: line 23, column 35
    function value_2 () : java.lang.String {
      return Holiday.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Tags_Input) at HolidayDetailScreen.pcf: line 59, column 39
    function value_22 () : java.lang.String {
      return Holiday.TagsString
    }
    
    // 'value' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 70, column 49
    function value_26 () : typekey.HolidayTagCode[] {
      return Holiday.TagsArray
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at HolidayDetailScreen.pcf: line 29, column 45
    function value_6 () : java.util.Date {
      return Holiday.OccurrenceDate
    }
    
    // 'valueRange' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 70, column 49
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 70, column 49
    function verifyValueRangeIsAllowedType_30 ($$arg :  typekey.HolidayTagCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TagInput_Input) at HolidayDetailScreen.pcf: line 70, column 49
    function verifyValueRange_31 () : void {
      var __valueRangeArg = Holiday.getTagRange()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'editVisible' attribute on EditButtons at HolidayDetailScreen.pcf: line 12, column 42
    function visible_0 () : java.lang.Boolean {
      return perm.Holiday.edit
    }
    
    // 'visible' attribute on TextAreaInput (id=Zones_Input) at HolidayDetailScreen.pcf: line 43, column 51
    function visible_14 () : java.lang.Boolean {
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