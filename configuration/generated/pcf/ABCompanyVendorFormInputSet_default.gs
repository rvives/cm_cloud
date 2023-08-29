package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorFormInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABCompanyVendorFormInputSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ABCompanyVendorFormInputSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$contact})
  }
  
  function refreshVariables ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ABCompanyVendorFormInputSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$contact})
  }
  
  
}