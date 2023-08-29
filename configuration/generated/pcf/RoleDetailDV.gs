package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RoleDetailDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Role :  Role) : void {
    __widgetOf(this, pcf.RoleDetailDV, SECTION_WIDGET_CLASS).setVariables(false, {$Role})
  }
  
  function refreshVariables ($Role :  Role) : void {
    __widgetOf(this, pcf.RoleDetailDV, SECTION_WIDGET_CLASS).setVariables(true, {$Role})
  }
  
  
}