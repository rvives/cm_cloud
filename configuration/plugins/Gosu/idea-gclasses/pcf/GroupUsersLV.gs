package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GroupUsersLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Group :  Group) : void {
    __widgetOf(this, pcf.GroupUsersLV, SECTION_WIDGET_CLASS).setVariables(false, {$Group})
  }
  
  function refreshVariables ($Group :  Group) : void {
    __widgetOf(this, pcf.GroupUsersLV, SECTION_WIDGET_CLASS).setVariables(true, {$Group})
  }
  
  
}