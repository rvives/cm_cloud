package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/contacts/AddressesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressesPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  Contact) : void {
    __widgetOf(this, pcf.AddressesPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$contact})
  }
  
  function refreshVariables ($contact :  Contact) : void {
    __widgetOf(this, pcf.AddressesPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$contact})
  }
  
  
}