package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GroupDetailScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Group :  Group) : void {
    __widgetOf(this, pcf.GroupDetailScreen, SECTION_WIDGET_CLASS).setVariables(false, {$Group})
  }
  
  function refreshVariables ($Group :  Group) : void {
    __widgetOf(this, pcf.GroupDetailScreen, SECTION_WIDGET_CLASS).setVariables(true, {$Group})
  }
  
  
}