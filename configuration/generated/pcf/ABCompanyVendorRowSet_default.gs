package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABCompanyVendorRowSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABCompany, $duplicate :  ABCompany, $merged :  ABCompany) : void {
    __widgetOf(this, pcf.ABCompanyVendorRowSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$contact, $duplicate, $merged})
  }
  
  function refreshVariables ($contact :  ABCompany, $duplicate :  ABCompany, $merged :  ABCompany) : void {
    __widgetOf(this, pcf.ABCompanyVendorRowSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$contact, $duplicate, $merged})
  }
  
  
}