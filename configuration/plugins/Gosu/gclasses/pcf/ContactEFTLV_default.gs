package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactEFTLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactEFTLV_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactEFTLV_default, SECTION_WIDGET_CLASS).setVariables(false, {$Contact})
  }
  
  function refreshVariables ($Contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactEFTLV_default, SECTION_WIDGET_CLASS).setVariables(true, {$Contact})
  }
  
  
}