package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UserDetailScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($user :  User, $isNew :  boolean) : void {
    __widgetOf(this, pcf.UserDetailScreen, SECTION_WIDGET_CLASS).setVariables(false, {$user, $isNew})
  }
  
  function refreshVariables ($user :  User, $isNew :  boolean) : void {
    __widgetOf(this, pcf.UserDetailScreen, SECTION_WIDGET_CLASS).setVariables(true, {$user, $isNew})
  }
  
  
}