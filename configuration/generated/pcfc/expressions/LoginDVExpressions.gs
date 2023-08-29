package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/login/LoginDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LoginDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/login/LoginDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LoginDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PasswordInput (id=Factor_Input) at LoginDV.pcf: line 31, column 31
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      factor.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on PasswordInput (id=Factor_Input) at LoginDV.pcf: line 31, column 31
    function label_8 () : java.lang.Object {
      return factor.Label
    }
    
    // 'value' attribute on PasswordInput (id=Factor_Input) at LoginDV.pcf: line 31, column 31
    function valueRoot_11 () : java.lang.Object {
      return factor
    }
    
    // 'value' attribute on PasswordInput (id=Factor_Input) at LoginDV.pcf: line 31, column 31
    function value_9 () : java.lang.String {
      return factor.Value
    }
    
    property get factor () : gw.api.util.LoginForm.Factor {
      return getIteratedValue(1) as gw.api.util.LoginForm.Factor
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/login/LoginDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LoginDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on LoginSubmitButton (id=submit_Input) at LoginDV.pcf: line 39, column 65
    function action_15 () : void {
      LoginForm.login()
    }
    
    // 'value' attribute on TextInput (id=username_Input) at LoginDV.pcf: line 16, column 36
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      LoginForm.Username = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PasswordInput (id=password_Input) at LoginDV.pcf: line 22, column 37
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      LoginForm.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=username_Input) at LoginDV.pcf: line 16, column 36
    function valueRoot_2 () : java.lang.Object {
      return LoginForm
    }
    
    // 'value' attribute on TextInput (id=username_Input) at LoginDV.pcf: line 16, column 36
    function value_0 () : java.lang.String {
      return LoginForm.Username
    }
    
    // 'value' attribute on InputIterator at LoginDV.pcf: line 26, column 52
    function value_14 () : gw.api.util.LoginForm.Factor[] {
      return LoginForm.AdditionalFactors
    }
    
    // 'value' attribute on PasswordInput (id=password_Input) at LoginDV.pcf: line 22, column 37
    function value_4 () : java.lang.String {
      return LoginForm.Password
    }
    
    property get LoginForm () : gw.api.util.LoginForm {
      return getRequireValue("LoginForm", 0) as gw.api.util.LoginForm
    }
    
    property set LoginForm ($arg :  gw.api.util.LoginForm) {
      setRequireValue("LoginForm", 0, $arg)
    }
    
    
  }
  
  
}