package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/roles/RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RolesLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Roles :  gw.api.database.IQueryBeanResult<Role>) : void {
    __widgetOf(this, pcf.RolesLV, SECTION_WIDGET_CLASS).setVariables(false, {$Roles})
  }
  
  function refreshVariables ($Roles :  gw.api.database.IQueryBeanResult<Role>) : void {
    __widgetOf(this, pcf.RolesLV, SECTION_WIDGET_CLASS).setVariables(true, {$Roles})
  }
  
  
}