package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UserPrefsDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($UserSettings :  UserSettings, $User :  User) : void {
    __widgetOf(this, pcf.UserPrefsDV, SECTION_WIDGET_CLASS).setVariables(false, {$UserSettings, $User})
  }
  
  function refreshVariables ($UserSettings :  UserSettings, $User :  User) : void {
    __widgetOf(this, pcf.UserPrefsDV, SECTION_WIDGET_CLASS).setVariables(true, {$UserSettings, $User})
  }
  
  
}