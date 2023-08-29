package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorInputSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPersonVendorInputSet_ABPersonVendor extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($person :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonVendorInputSet_ABPersonVendor, SECTION_WIDGET_CLASS).setVariables(false, {$person})
  }
  
  function refreshVariables ($person :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonVendorInputSet_ABPersonVendor, SECTION_WIDGET_CLASS).setVariables(true, {$person})
  }
  
  
}