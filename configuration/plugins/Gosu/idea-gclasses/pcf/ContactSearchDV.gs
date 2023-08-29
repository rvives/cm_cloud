package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ContactSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactSearchDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($requiredContactType :  Type, $SearchCriteria :  ABContactSearchCriteria, $proximitySearchPageHelper :  gw.api.contact.ProximitySearchPageHelper, $searchSpec :  gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging) : void {
    __widgetOf(this, pcf.ContactSearchDV, SECTION_WIDGET_CLASS).setVariables(false, {$requiredContactType, $SearchCriteria, $proximitySearchPageHelper, $searchSpec})
  }
  
  function refreshVariables ($requiredContactType :  Type, $SearchCriteria :  ABContactSearchCriteria, $proximitySearchPageHelper :  gw.api.contact.ProximitySearchPageHelper, $searchSpec :  gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging) : void {
    __widgetOf(this, pcf.ContactSearchDV, SECTION_WIDGET_CLASS).setVariables(true, {$requiredContactType, $SearchCriteria, $proximitySearchPageHelper, $searchSpec})
  }
  
  
}