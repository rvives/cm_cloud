package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPlaceMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABPlaceMergeDetailsRowSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($places :  ABPlace[], $mergedPlace :  ABPlace, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABPlaceMergeDetailsRowSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$places, $mergedPlace, $nameOwner})
  }
  
  function refreshVariables ($places :  ABPlace[], $mergedPlace :  ABPlace, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABPlaceMergeDetailsRowSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$places, $mergedPlace, $nameOwner})
  }
  
  
}