package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactsMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactsMenuActions extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter () : void {
    __widgetOf(this, pcf.ContactsMenuActions, SECTION_WIDGET_CLASS).setVariables(false, {})
  }
  
  function refreshVariables () : void {
    __widgetOf(this, pcf.ContactsMenuActions, SECTION_WIDGET_CLASS).setVariables(true, {})
  }
  
  
}