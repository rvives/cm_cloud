package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UserDetailDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($User :  User, $isNew :  Boolean) : void {
    __widgetOf(this, pcf.UserDetailDV, SECTION_WIDGET_CLASS).setVariables(false, {$User, $isNew})
  }
  
  function refreshVariables ($User :  User, $isNew :  Boolean) : void {
    __widgetOf(this, pcf.UserDetailDV, SECTION_WIDGET_CLASS).setVariables(true, {$User, $isNew})
  }
  
  
}