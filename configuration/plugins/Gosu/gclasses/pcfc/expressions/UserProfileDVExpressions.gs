package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/users/UserProfileDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserProfileDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserProfileDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserProfileDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UserProfileDV.pcf: line 28, column 46
    function def_onEnter_10 (def :  pcf.UserPreferencesInputSet) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on InputSetRef at UserProfileDV.pcf: line 19, column 80
    function def_onEnter_4 (def :  pcf.UserPreferencesContactInputSet) : void {
      def.onEnter(user, user.Contact.AddressOwner)
    }
    
    // 'def' attribute on InputSetRef at UserProfileDV.pcf: line 28, column 46
    function def_refreshVariables_11 (def :  pcf.UserPreferencesInputSet) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on InputSetRef at UserProfileDV.pcf: line 19, column 80
    function def_refreshVariables_5 (def :  pcf.UserPreferencesContactInputSet) : void {
      def.refreshVariables(user, user.Contact.AddressOwner)
    }
    
    // 'value' attribute on TextInput (id=EmployeeID_Input) at UserProfileDV.pcf: line 17, column 46
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.EmployeeNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternalUser_Input) at UserProfileDV.pcf: line 33, column 36
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.ExternalUser = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Experience_Input) at UserProfileDV.pcf: line 26, column 49
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.ExperienceLevel = (__VALUE_TO_SET as typekey.UserExperienceType)
    }
    
    // 'value' attribute on TextInput (id=EmployeeID_Input) at UserProfileDV.pcf: line 17, column 46
    function valueRoot_2 () : java.lang.Object {
      return user.Contact
    }
    
    // 'value' attribute on TypeKeyInput (id=Experience_Input) at UserProfileDV.pcf: line 26, column 49
    function valueRoot_8 () : java.lang.Object {
      return user
    }
    
    // 'value' attribute on TextInput (id=EmployeeID_Input) at UserProfileDV.pcf: line 17, column 46
    function value_0 () : java.lang.String {
      return user.Contact.EmployeeNumber
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternalUser_Input) at UserProfileDV.pcf: line 33, column 36
    function value_12 () : java.lang.Boolean {
      return user.ExternalUser
    }
    
    // 'value' attribute on TypeKeyInput (id=Experience_Input) at UserProfileDV.pcf: line 26, column 49
    function value_6 () : typekey.UserExperienceType {
      return user.ExperienceLevel
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}