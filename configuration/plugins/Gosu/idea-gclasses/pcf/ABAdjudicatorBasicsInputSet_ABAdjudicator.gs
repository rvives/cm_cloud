package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABAdjudicatorBasicsInputSet.ABAdjudicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABAdjudicatorBasicsInputSet_ABAdjudicator extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ABAdjudicatorBasicsInputSet_ABAdjudicator, SECTION_WIDGET_CLASS).setVariables(false, {$contact})
  }
  
  function refreshVariables ($contact :  ABContact) : void {
    __widgetOf(this, pcf.ABAdjudicatorBasicsInputSet_ABAdjudicator, SECTION_WIDGET_CLASS).setVariables(true, {$contact})
  }
  
  
}