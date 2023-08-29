package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/zones/ZonesInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ZonesInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($zoneContainer :  gw.api.zones.ZoneContainer, $screenType :  String) : void {
    __widgetOf(this, pcf.ZonesInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$zoneContainer, $screenType})
  }
  
  function refreshVariables ($zoneContainer :  gw.api.zones.ZoneContainer, $screenType :  String) : void {
    __widgetOf(this, pcf.ZonesInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$zoneContainer, $screenType})
  }
  
  
}