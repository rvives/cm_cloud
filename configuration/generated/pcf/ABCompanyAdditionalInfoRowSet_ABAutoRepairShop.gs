package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABCompanyAdditionalInfoRowSet_ABAutoRepairShop extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABCompany, $duplicate :  ABCompany, $merged :  ABCompany) : void {
    __widgetOf(this, pcf.ABCompanyAdditionalInfoRowSet_ABAutoRepairShop, SECTION_WIDGET_CLASS).setVariables(false, {$contact, $duplicate, $merged})
  }
  
  function refreshVariables ($contact :  ABCompany, $duplicate :  ABCompany, $merged :  ABCompany) : void {
    __widgetOf(this, pcf.ABCompanyAdditionalInfoRowSet_ABAutoRepairShop, SECTION_WIDGET_CLASS).setVariables(true, {$contact, $duplicate, $merged})
  }
  
  
}