package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/AddressSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressSearchInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($SearchCriteria :  ABContactSearchCriteria) : void {
    __widgetOf(this, pcf.AddressSearchInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$SearchCriteria})
  }
  
  function refreshVariables ($SearchCriteria :  ABContactSearchCriteria) : void {
    __widgetOf(this, pcf.AddressSearchInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$SearchCriteria})
  }
  
  
}