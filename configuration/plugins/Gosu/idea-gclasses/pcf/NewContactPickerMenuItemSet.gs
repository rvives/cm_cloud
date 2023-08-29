package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/NewContactPickerMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewContactPickerMenuItemSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($requiredContactType :  Type, $parentContact :  ABContact) : void {
    __widgetOf(this, pcf.NewContactPickerMenuItemSet, SECTION_WIDGET_CLASS).setVariables(false, {$requiredContactType, $parentContact})
  }
  
  function refreshVariables ($requiredContactType :  Type, $parentContact :  ABContact) : void {
    __widgetOf(this, pcf.NewContactPickerMenuItemSet, SECTION_WIDGET_CLASS).setVariables(true, {$requiredContactType, $parentContact})
  }
  
  
}