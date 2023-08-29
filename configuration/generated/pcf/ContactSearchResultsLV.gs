package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ContactSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactSearchResultsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($SearchResults :  gw.api.database.IQueryBeanResult<ABContact>, $CanPotentiallyDelete :  boolean, $isSelectMode :  boolean, $pageHelper :  gw.api.contact.ProximitySearchPageHelper, $searchCriteria :  ABContactSearchCriteria, $searchSpec :  gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging) : void {
    __widgetOf(this, pcf.ContactSearchResultsLV, SECTION_WIDGET_CLASS).setVariables(false, {$SearchResults, $CanPotentiallyDelete, $isSelectMode, $pageHelper, $searchCriteria, $searchSpec})
  }
  
  function refreshVariables ($SearchResults :  gw.api.database.IQueryBeanResult<ABContact>, $CanPotentiallyDelete :  boolean, $isSelectMode :  boolean, $pageHelper :  gw.api.contact.ProximitySearchPageHelper, $searchCriteria :  ABContactSearchCriteria, $searchSpec :  gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging) : void {
    __widgetOf(this, pcf.ContactSearchResultsLV, SECTION_WIDGET_CLASS).setVariables(true, {$SearchResults, $CanPotentiallyDelete, $isSelectMode, $pageHelper, $searchCriteria, $searchSpec})
  }
  
  
}