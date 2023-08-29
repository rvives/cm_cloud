package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DriversLicenseRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DriversLicenseRowSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($keptPerson :  ABPerson, $retiredPerson :  ABPerson, $mergedPerson :  ABPerson) : void {
    __widgetOf(this, pcf.DriversLicenseRowSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$keptPerson, $retiredPerson, $mergedPerson})
  }
  
  function refreshVariables ($keptPerson :  ABPerson, $retiredPerson :  ABPerson, $mergedPerson :  ABPerson) : void {
    __widgetOf(this, pcf.DriversLicenseRowSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$keptPerson, $retiredPerson, $mergedPerson})
  }
  
  
}