package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/zones/ZonesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ZonesInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/zones/ZonesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ZonesInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at ZonesInputSet.pcf: line 81, column 42
    function def_onEnter_39 (def :  pcf.ZonesLV) : void {
      def.onEnter(uiHelper, country)
    }
    
    // 'def' attribute on ListViewInput at ZonesInputSet.pcf: line 81, column 42
    function def_refreshVariables_40 (def :  pcf.ZonesLV) : void {
      def.refreshVariables(uiHelper, country)
    }
    
    // 'value' attribute on RangeInput (id=ZoneType_Input) at ZonesInputSet.pcf: line 48, column 36
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      zoneType = (__VALUE_TO_SET as typekey.ZoneType)
    }
    
    // 'value' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      linkedZone = (__VALUE_TO_SET as entity.Zone)
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at ZonesInputSet.pcf: line 75, column 44
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      uiHelper.ZoneContainer.ZoneCodes = (__VALUE_TO_SET as java.lang.String[])
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at ZonesInputSet.pcf: line 37, column 35
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'initialValue' attribute on Variable at ZonesInputSet.pcf: line 16, column 23
    function initialValue_0 () : Country {
      return gw.api.admin.BaseAdminUtil.getDefaultCountry()
    }
    
    // 'initialValue' attribute on Variable at ZonesInputSet.pcf: line 20, column 24
    function initialValue_1 () : ZoneType {
      return null
    }
    
    // 'initialValue' attribute on Variable at ZonesInputSet.pcf: line 24, column 20
    function initialValue_2 () : Zone {
      return null
    }
    
    // 'initialValue' attribute on Variable at ZonesInputSet.pcf: line 28, column 50
    function initialValue_3 () : gw.api.zones.ZonesInputSetUIHelper {
      return new gw.api.zones.ZonesInputSetUIHelper(zoneContainer, screenType, country)
    }
    
    // 'label' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function label_20 () : java.lang.Object {
      return uiHelper.FilterByLabel
    }
    
    // 'onChange' attribute on PostOnChange at ZonesInputSet.pcf: line 50, column 149
    function onChange_11 () : void {
      linkedZone=null; uiHelper.ZoneContainer.FilterCriteria.LinkedZone=null; uiHelper.ZoneContainer.FilterCriteria.ZoneType=zoneType
    }
    
    // 'onChange' attribute on PostOnChange at ZonesInputSet.pcf: line 62, column 138
    function onChange_18 () : void {
      uiHelper.ZoneContainer.FilterCriteria.ZoneType=zoneType; uiHelper.ZoneContainer.FilterCriteria.LinkedZone=linkedZone
    }
    
    // 'onChange' attribute on PostOnChange at ZonesInputSet.pcf: line 39, column 247
    function onChange_4 () : void {
      linkedZone=null; zoneType=null; uiHelper.ZoneContainer.FilterCriteria.LinkedZone=null; uiHelper.ZoneContainer.FilterCriteria.ZoneType=null; uiHelper = new gw.api.zones.ZonesInputSetUIHelper(zoneContainer, screenType, country)
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneType_Input) at ZonesInputSet.pcf: line 48, column 36
    function valueRange_14 () : java.lang.Object {
      return uiHelper.ZoneTypes
    }
    
    // 'valueRange' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function valueRange_23 () : java.lang.Object {
      return Zone.finder.findZones(country, uiHelper.FilterZoneTypeCode)
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at ZonesInputSet.pcf: line 75, column 44
    function valueRange_33 () : java.lang.Object {
      return Zone.finder.findZoneCodes(country,uiHelper.ZoneContainer.FilterCriteria.ZoneType,uiHelper.ZoneContainer.FilterCriteria.LinkedZone)
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at ZonesInputSet.pcf: line 37, column 35
    function valueRange_7 () : java.lang.Object {
      return uiHelper.PossibleCountries
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at ZonesInputSet.pcf: line 75, column 44
    function valueRoot_32 () : java.lang.Object {
      return uiHelper.ZoneContainer
    }
    
    // 'value' attribute on RangeInput (id=ZoneType_Input) at ZonesInputSet.pcf: line 48, column 36
    function value_12 () : typekey.ZoneType {
      return zoneType
    }
    
    // 'value' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function value_21 () : entity.Zone {
      return linkedZone
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at ZonesInputSet.pcf: line 75, column 44
    function value_30 () : java.lang.String[] {
      return uiHelper.ZoneContainer.ZoneCodes
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at ZonesInputSet.pcf: line 37, column 35
    function value_5 () : typekey.Country {
      return country
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneType_Input) at ZonesInputSet.pcf: line 48, column 36
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneType_Input) at ZonesInputSet.pcf: line 48, column 36
    function verifyValueRangeIsAllowedType_15 ($$arg :  typekey.ZoneType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.Zone[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.Zone>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at ZonesInputSet.pcf: line 75, column 44
    function verifyValueRangeIsAllowedType_34 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at ZonesInputSet.pcf: line 75, column 44
    function verifyValueRangeIsAllowedType_34 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at ZonesInputSet.pcf: line 37, column 35
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at ZonesInputSet.pcf: line 37, column 35
    function verifyValueRangeIsAllowedType_8 ($$arg :  typekey.Country[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneType_Input) at ZonesInputSet.pcf: line 48, column 36
    function verifyValueRange_16 () : void {
      var __valueRangeArg = uiHelper.ZoneTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function verifyValueRange_25 () : void {
      var __valueRangeArg = Zone.finder.findZones(country, uiHelper.FilterZoneTypeCode)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at ZonesInputSet.pcf: line 75, column 44
    function verifyValueRange_35 () : void {
      var __valueRangeArg = Zone.finder.findZoneCodes(country,uiHelper.ZoneContainer.FilterCriteria.ZoneType,uiHelper.ZoneContainer.FilterCriteria.LinkedZone)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_34(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at ZonesInputSet.pcf: line 37, column 35
    function verifyValueRange_9 () : void {
      var __valueRangeArg = uiHelper.PossibleCountries
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=FilterBy_Input) at ZonesInputSet.pcf: line 60, column 40
    function visible_19 () : java.lang.Boolean {
      return uiHelper.FilterVisible
    }
    
    // 'visible' attribute on RangeInput (id=ZoneInput_Input) at ZonesInputSet.pcf: line 75, column 44
    function visible_29 () : java.lang.Boolean {
      return uiHelper.ZoneInputVisible
    }
    
    // 'visible' attribute on ListViewInput at ZonesInputSet.pcf: line 81, column 42
    function visible_38 () : java.lang.Boolean {
      return uiHelper.ListViewVisible
    }
    
    property get country () : Country {
      return getVariableValue("country", 0) as Country
    }
    
    property set country ($arg :  Country) {
      setVariableValue("country", 0, $arg)
    }
    
    property get linkedZone () : Zone {
      return getVariableValue("linkedZone", 0) as Zone
    }
    
    property set linkedZone ($arg :  Zone) {
      setVariableValue("linkedZone", 0, $arg)
    }
    
    property get screenType () : String {
      return getRequireValue("screenType", 0) as String
    }
    
    property set screenType ($arg :  String) {
      setRequireValue("screenType", 0, $arg)
    }
    
    property get uiHelper () : gw.api.zones.ZonesInputSetUIHelper {
      return getVariableValue("uiHelper", 0) as gw.api.zones.ZonesInputSetUIHelper
    }
    
    property set uiHelper ($arg :  gw.api.zones.ZonesInputSetUIHelper) {
      setVariableValue("uiHelper", 0, $arg)
    }
    
    property get zoneContainer () : gw.api.zones.ZoneContainer {
      return getRequireValue("zoneContainer", 0) as gw.api.zones.ZoneContainer
    }
    
    property set zoneContainer ($arg :  gw.api.zones.ZoneContainer) {
      setRequireValue("zoneContainer", 0, $arg)
    }
    
    property get zoneType () : ZoneType {
      return getVariableValue("zoneType", 0) as ZoneType
    }
    
    property set zoneType ($arg :  ZoneType) {
      setVariableValue("zoneType", 0, $arg)
    }
    
    
  }
  
  
}