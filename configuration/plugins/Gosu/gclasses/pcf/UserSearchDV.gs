package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UserSearchDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($SearchCriteria :  UserSearchCriteria) : void {
    __widgetOf(this, pcf.UserSearchDV, SECTION_WIDGET_CLASS).setVariables(false, {$SearchCriteria})
  }
  
  function refreshVariables ($SearchCriteria :  UserSearchCriteria) : void {
    __widgetOf(this, pcf.UserSearchDV, SECTION_WIDGET_CLASS).setVariables(true, {$SearchCriteria})
  }
  
  
}