package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/util/SystemAlertBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SystemAlertBarExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/util/SystemAlertBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SystemAlertBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at SystemAlertBar.pcf: line 15, column 61
    function initialValue_0 () : gw.api.alerts.SystemAlertInfo.SystemAlertType {
      return gw.api.alerts.SystemAlertInfo.AlertType
    }
    
    // 'label' attribute on SystemAlertBarElement (id=Message) at SystemAlertBar.pcf: line 18, column 34
    function label_1 () : java.lang.Object {
      return alertType.Message
    }
    
    // 'label' attribute on SystemAlertBar (id=SystemAlertBar) at SystemAlertBar.pcf: line 10, column 38
    function label_4 () : java.lang.Object {
      return alertType.Title
    }
    
    // 'visible' attribute on SystemAlertBarElement (id=LogoutLink) at SystemAlertBar.pcf: line 24, column 48
    function visible_2 () : java.lang.Boolean {
      return alertType.DisplayLogoutButton
    }
    
    // 'visible' attribute on SystemAlertBar (id=SystemAlertBar) at SystemAlertBar.pcf: line 10, column 38
    function visible_3 () : java.lang.Boolean {
      return alertType.DisplayAlert
    }
    
    property get alertType () : gw.api.alerts.SystemAlertInfo.SystemAlertType {
      return getVariableValue("alertType", 0) as gw.api.alerts.SystemAlertInfo.SystemAlertType
    }
    
    property set alertType ($arg :  gw.api.alerts.SystemAlertInfo.SystemAlertType) {
      setVariableValue("alertType", 0, $arg)
    }
    
    
  }
  
  
}