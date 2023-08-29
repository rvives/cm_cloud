package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPersonVendorInputSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($person :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonVendorInputSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$person})
  }
  
  function refreshVariables ($person :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonVendorInputSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$person})
  }
  
  
}