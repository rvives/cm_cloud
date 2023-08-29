package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactBasicsDV_ABPerson extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactBasicsDV_ABPerson, SECTION_WIDGET_CLASS).setVariables(false, {$contact})
  }
  
  function refreshVariables ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactBasicsDV_ABPerson, SECTION_WIDGET_CLASS).setVariables(true, {$contact})
  }
  
  
}