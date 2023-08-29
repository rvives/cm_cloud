package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserPrefsDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserPrefsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UserPrefsDV.pcf: line 28, column 46
    function def_onEnter_15 (def :  pcf.UserPreferencesInputSet) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on InputSetRef at UserPrefsDV.pcf: line 28, column 46
    function def_refreshVariables_16 (def :  pcf.UserPreferencesInputSet) : void {
      def.refreshVariables(User)
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 32
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at UserPrefsDV.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return gw.api.system.PLConfigParameters.SingleSignOnAuthenticationEnabled.getValue()
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 32
    function valueRoot_3 () : java.lang.Object {
      return User.Credential
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 32
    function value_1 () : java.lang.String {
      return User.Credential.Password
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 32
    function value_4 () : java.lang.Object {
      return User.Credential.Password
    }
    
    // 'visible' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 32
    function visible_13 () : java.lang.Boolean {
      return !ssoEnabled
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    property get UserSettings () : UserSettings {
      return getRequireValue("UserSettings", 0) as UserSettings
    }
    
    property set UserSettings ($arg :  UserSettings) {
      setRequireValue("UserSettings", 0, $arg)
    }
    
    property get ssoEnabled () : Boolean {
      return getVariableValue("ssoEnabled", 0) as Boolean
    }
    
    property set ssoEnabled ($arg :  Boolean) {
      setVariableValue("ssoEnabled", 0, $arg)
    }
    
    
  }
  
  
}