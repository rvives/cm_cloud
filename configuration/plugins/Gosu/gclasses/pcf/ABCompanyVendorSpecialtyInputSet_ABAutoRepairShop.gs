package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorSpecialtyInputSet.ABAutoRepairShop.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABCompanyVendorSpecialtyInputSet_ABAutoRepairShop extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ABCompanyVendorSpecialtyInputSet_ABAutoRepairShop, SECTION_WIDGET_CLASS).setVariables(false, {$contact})
  }
  
  function refreshVariables ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ABCompanyVendorSpecialtyInputSet_ABAutoRepairShop, SECTION_WIDGET_CLASS).setVariables(true, {$contact})
  }
  
  
}