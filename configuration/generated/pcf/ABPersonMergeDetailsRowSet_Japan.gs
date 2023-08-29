package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPersonMergeDetailsRowSet_Japan extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($persons :  ABPerson[], $mergedPerson :  ABPerson, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABPersonMergeDetailsRowSet_Japan, SECTION_WIDGET_CLASS).setVariables(false, {$persons, $mergedPerson, $nameOwner})
  }
  
  function refreshVariables ($persons :  ABPerson[], $mergedPerson :  ABPerson, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABPersonMergeDetailsRowSet_Japan, SECTION_WIDGET_CLASS).setVariables(true, {$persons, $mergedPerson, $nameOwner})
  }
  
  
}