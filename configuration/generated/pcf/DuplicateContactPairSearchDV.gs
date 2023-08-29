package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateContactPairSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DuplicateContactPairSearchDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($searchCriteria :  gw.domain.contact.DuplicateContactSearchCriteria) : void {
    __widgetOf(this, pcf.DuplicateContactPairSearchDV, SECTION_WIDGET_CLASS).setVariables(false, {$searchCriteria})
  }
  
  function refreshVariables ($searchCriteria :  gw.domain.contact.DuplicateContactSearchCriteria) : void {
    __widgetOf(this, pcf.DuplicateContactPairSearchDV, SECTION_WIDGET_CLASS).setVariables(true, {$searchCriteria})
  }
  
  
}