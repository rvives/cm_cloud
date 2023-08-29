package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ABContactSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABContactSearchScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($isSelectMode :  boolean, $CanPotentiallyDelete :  boolean, $requiredContactType :  Type) : void {
    __widgetOf(this, pcf.ABContactSearchScreen, SECTION_WIDGET_CLASS).setVariables(false, {$isSelectMode, $CanPotentiallyDelete, $requiredContactType})
  }
  
  function refreshVariables ($isSelectMode :  boolean, $CanPotentiallyDelete :  boolean, $requiredContactType :  Type) : void {
    __widgetOf(this, pcf.ABContactSearchScreen, SECTION_WIDGET_CLASS).setVariables(true, {$isSelectMode, $CanPotentiallyDelete, $requiredContactType})
  }
  
  
}