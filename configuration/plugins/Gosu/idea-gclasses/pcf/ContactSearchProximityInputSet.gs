package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ContactSearchProximityInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactSearchProximityInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($SearchCriteria :  ABContactSearchCriteria, $proximitySearchPageHelper :  gw.api.contact.ProximitySearchPageHelper) : void {
    __widgetOf(this, pcf.ContactSearchProximityInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$SearchCriteria, $proximitySearchPageHelper})
  }
  
  function refreshVariables ($SearchCriteria :  ABContactSearchCriteria, $proximitySearchPageHelper :  gw.api.contact.ProximitySearchPageHelper) : void {
    __widgetOf(this, pcf.ContactSearchProximityInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$SearchCriteria, $proximitySearchPageHelper})
  }
  
  
}