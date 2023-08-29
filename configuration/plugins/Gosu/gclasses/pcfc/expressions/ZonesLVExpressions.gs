package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/zones/ZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ZonesLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/zones/ZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ZonesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoComplete' attribute on TextCell (id=ZoneCode_Cell) at ZonesLV.pcf: line 37, column 30
    function autoComplete_5 () : gw.api.contact.AutocompleteHandler {
      return new gw.api.admin.ZoneAutocompleteHandler(country, uiHelper.ZoneContainer.FilterCriteria.ZoneType)
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at ZonesLV.pcf: line 37, column 30
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      zone.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at ZonesLV.pcf: line 37, column 30
    function valueRoot_4 () : java.lang.Object {
      return zone
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at ZonesLV.pcf: line 37, column 30
    function value_2 () : java.lang.String {
      return zone.Code
    }
    
    property get zone () : entity.ZoneDelegate {
      return getIteratedValue(1) as entity.ZoneDelegate
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/zones/ZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ZonesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ZonesLV.pcf: line 28, column 24
    function sortBy_0 (zone :  entity.ZoneDelegate) : java.lang.Object {
      return zone.Code
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at ZonesLV.pcf: line 37, column 30
    function sortValue_1 (zone :  entity.ZoneDelegate) : java.lang.Object {
      return zone.Code
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at ZonesLV.pcf: line 25, column 41
    function toCreateAndAdd_7 () : entity.ZoneDelegate {
      return uiHelper.ZoneContainer.createZone(uiHelper.ZoneContainer.FilterCriteria.ZoneType, country)
    }
    
    // 'toRemove' attribute on RowIterator at ZonesLV.pcf: line 25, column 41
    function toRemove_8 (zone :  entity.ZoneDelegate) : void {
      uiHelper.ZoneContainer.removeFromZones(zone)
    }
    
    // 'value' attribute on RowIterator at ZonesLV.pcf: line 25, column 41
    function value_9 () : entity.ZoneDelegate[] {
      return uiHelper.ZoneContainer.getZonesByZoneType(uiHelper.ZoneContainer.FilterCriteria.ZoneType)
    }
    
    property get country () : Country {
      return getRequireValue("country", 0) as Country
    }
    
    property set country ($arg :  Country) {
      setRequireValue("country", 0, $arg)
    }
    
    property get uiHelper () : gw.api.zones.ZonesInputSetUIHelper {
      return getRequireValue("uiHelper", 0) as gw.api.zones.ZonesInputSetUIHelper
    }
    
    property set uiHelper ($arg :  gw.api.zones.ZonesInputSetUIHelper) {
      setRequireValue("uiHelper", 0, $arg)
    }
    
    
  }
  
  
}