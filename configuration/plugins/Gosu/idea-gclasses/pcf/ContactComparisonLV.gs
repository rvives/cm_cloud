package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/compare/ContactComparisonLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactComparisonLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($pendingContactUpdate :  PendingContactUpdate, $updateDiffDisplay :  gw.api.bean.compare.ui.DiffDisplay, $contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactComparisonLV, SECTION_WIDGET_CLASS).setVariables(false, {$pendingContactUpdate, $updateDiffDisplay, $contact})
  }
  
  function refreshVariables ($pendingContactUpdate :  PendingContactUpdate, $updateDiffDisplay :  gw.api.bean.compare.ui.DiffDisplay, $contact :  ABContact) : void {
    __widgetOf(this, pcf.ContactComparisonLV, SECTION_WIDGET_CLASS).setVariables(true, {$pendingContactUpdate, $updateDiffDisplay, $contact})
  }
  
  
}