package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorSpecialtyInputSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPersonVendorSpecialtyInputSet_ABDoctor extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($person :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonVendorSpecialtyInputSet_ABDoctor, SECTION_WIDGET_CLASS).setVariables(false, {$person})
  }
  
  function refreshVariables ($person :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonVendorSpecialtyInputSet_ABDoctor, SECTION_WIDGET_CLASS).setVariables(true, {$person})
  }
  
  
}