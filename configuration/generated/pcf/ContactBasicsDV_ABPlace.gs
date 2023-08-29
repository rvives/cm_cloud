package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactBasicsDV_ABPlace extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactBasicsDV_ABPlace, SECTION_WIDGET_CLASS).setVariables(false, {$contact})
  }
  
  function refreshVariables ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactBasicsDV_ABPlace, SECTION_WIDGET_CLASS).setVariables(true, {$contact})
  }
  
  
}