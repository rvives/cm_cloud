package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/zones/ZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ZonesLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($uiHelper :  gw.api.zones.ZonesInputSetUIHelper, $country :  Country) : void {
    __widgetOf(this, pcf.ZonesLV, SECTION_WIDGET_CLASS).setVariables(false, {$uiHelper, $country})
  }
  
  function refreshVariables ($uiHelper :  gw.api.zones.ZonesInputSetUIHelper, $country :  Country) : void {
    __widgetOf(this, pcf.ZonesLV, SECTION_WIDGET_CLASS).setVariables(true, {$uiHelper, $country})
  }
  
  
}