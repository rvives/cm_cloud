package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPlaceMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPlaceMergeDetailsRowSet_Japan extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($places :  ABPlace[], $mergedPlace :  ABPlace, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABPlaceMergeDetailsRowSet_Japan, SECTION_WIDGET_CLASS).setVariables(false, {$places, $mergedPlace, $nameOwner})
  }
  
  function refreshVariables ($places :  ABPlace[], $mergedPlace :  ABPlace, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABPlaceMergeDetailsRowSet_Japan, SECTION_WIDGET_CLASS).setVariables(true, {$places, $mergedPlace, $nameOwner})
  }
  
  
}