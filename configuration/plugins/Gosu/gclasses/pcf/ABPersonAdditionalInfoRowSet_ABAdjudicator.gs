package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonAdditionalInfoRowSet.ABAdjudicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPersonAdditionalInfoRowSet_ABAdjudicator extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABPerson, $duplicate :  ABPerson, $merged :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonAdditionalInfoRowSet_ABAdjudicator, SECTION_WIDGET_CLASS).setVariables(false, {$contact, $duplicate, $merged})
  }
  
  function refreshVariables ($contact :  ABPerson, $duplicate :  ABPerson, $merged :  ABPerson) : void {
    __widgetOf(this, pcf.ABPersonAdditionalInfoRowSet_ABAdjudicator, SECTION_WIDGET_CLASS).setVariables(true, {$contact, $duplicate, $merged})
  }
  
  
}