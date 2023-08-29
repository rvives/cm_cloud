package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactHistoryDetailScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($history :  ContactHistory) : void {
    __widgetOf(this, pcf.ContactHistoryDetailScreen, SECTION_WIDGET_CLASS).setVariables(false, {$history})
  }
  
  function refreshVariables ($history :  ContactHistory) : void {
    __widgetOf(this, pcf.ContactHistoryDetailScreen, SECTION_WIDGET_CLASS).setVariables(true, {$history})
  }
  
  
}