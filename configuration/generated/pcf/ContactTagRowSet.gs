package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactTagRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactTagRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($keptContact :  ABContact, $retiredContact :  ABContact, $mergedContact :  ABContact) : void {
    __widgetOf(this, pcf.ContactTagRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$keptContact, $retiredContact, $mergedContact})
  }
  
  function refreshVariables ($keptContact :  ABContact, $retiredContact :  ABContact, $mergedContact :  ABContact) : void {
    __widgetOf(this, pcf.ContactTagRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$keptContact, $retiredContact, $mergedContact})
  }
  
  
}