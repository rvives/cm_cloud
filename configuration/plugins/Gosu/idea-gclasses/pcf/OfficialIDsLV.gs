package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/contacts/OfficialIDsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class OfficialIDsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Contact :  ABContact) : void {
    __widgetOf(this, pcf.OfficialIDsLV, SECTION_WIDGET_CLASS).setVariables(false, {$Contact})
  }
  
  function refreshVariables ($Contact :  ABContact) : void {
    __widgetOf(this, pcf.OfficialIDsLV, SECTION_WIDGET_CLASS).setVariables(true, {$Contact})
  }
  
  
}