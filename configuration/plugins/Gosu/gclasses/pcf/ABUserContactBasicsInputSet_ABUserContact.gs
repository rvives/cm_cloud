package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABUserContactBasicsInputSet.ABUserContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABUserContactBasicsInputSet_ABUserContact extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ABUserContactBasicsInputSet_ABUserContact, SECTION_WIDGET_CLASS).setVariables(false, {$contact})
  }
  
  function refreshVariables ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ABUserContactBasicsInputSet_ABUserContact, SECTION_WIDGET_CLASS).setVariables(true, {$contact})
  }
  
  
}