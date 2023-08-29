package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonAdditionalInfoRowSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPersonAdditionalInfoRowSet_ABDoctor extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABPerson, $duplicate :  ABPerson, $merged :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonAdditionalInfoRowSet_ABDoctor, SECTION_WIDGET_CLASS).setVariables(false, {$contact, $duplicate, $merged})
  }
  
  function refreshVariables ($contact :  ABPerson, $duplicate :  ABPerson, $merged :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonAdditionalInfoRowSet_ABDoctor, SECTION_WIDGET_CLASS).setVariables(true, {$contact, $duplicate, $merged})
  }
  
  
}