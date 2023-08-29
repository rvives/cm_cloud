package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/util/Login.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LoginExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/util/Login.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LoginExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (target :  pcf.api.Destination, entryException :  java.lang.Exception) : int {
      return 0
    }
    
    // 'afterEnter' attribute on LoginPage (id=Login) at Login.pcf: line 12, column 26
    function afterEnter_9 () : void {
      loginForm.checkDirectHTTPLogin()
    }
    
    // 'def' attribute on PanelRef at Login.pcf: line 45, column 40
    function def_onEnter_4 (def :  pcf.LoginDV) : void {
      def.onEnter(loginForm)
    }
    
    // 'def' attribute on PanelRef at Login.pcf: line 45, column 40
    function def_refreshVariables_5 (def :  pcf.LoginDV) : void {
      def.refreshVariables(loginForm)
    }
    
    // 'initialValue' attribute on Variable at Login.pcf: line 24, column 37
    function initialValue_0 () : gw.api.util.LoginForm {
      return new gw.api.util.LoginForm(target, entryException)
    }
    
    // 'initialValue' attribute on Variable at Login.pcf: line 29, column 33
    function initialValue_1 () : java.lang.Boolean {
      return gw.auth.AuthHelper.displayLoginFields()
    }
    
    // 'label' attribute on Verbatim at Login.pcf: line 47, column 40
    function label_2 () : java.lang.String {
      return loginForm.Message
    }
    
    // 'label' attribute on Verbatim at Login.pcf: line 55, column 63
    function label_7 () : java.lang.String {
      return gw.auth.AuthHelper.errorMessage()
    }
    
    // 'visible' attribute on PanelRef at Login.pcf: line 45, column 40
    function visible_3 () : java.lang.Boolean {
      return displayLoginFields
    }
    
    // 'visible' attribute on Verbatim at Login.pcf: line 55, column 63
    function visible_6 () : java.lang.Boolean {
      return gw.auth.AuthHelper.hasErrorMessage()
    }
    
    // 'visible' attribute on PanelRow at Login.pcf: line 51, column 41
    function visible_8 () : java.lang.Boolean {
      return !displayLoginFields
    }
    
    override property get CurrentLocation () : pcf.Login {
      return super.CurrentLocation as pcf.Login
    }
    
    property get displayLoginFields () : java.lang.Boolean {
      return getVariableValue("displayLoginFields", 0) as java.lang.Boolean
    }
    
    property set displayLoginFields ($arg :  java.lang.Boolean) {
      setVariableValue("displayLoginFields", 0, $arg)
    }
    
    property get entryException () : java.lang.Exception {
      return getVariableValue("entryException", 0) as java.lang.Exception
    }
    
    property set entryException ($arg :  java.lang.Exception) {
      setVariableValue("entryException", 0, $arg)
    }
    
    property get loginForm () : gw.api.util.LoginForm {
      return getVariableValue("loginForm", 0) as gw.api.util.LoginForm
    }
    
    property set loginForm ($arg :  gw.api.util.LoginForm) {
      setVariableValue("loginForm", 0, $arg)
    }
    
    property get target () : pcf.api.Destination {
      return getVariableValue("target", 0) as pcf.api.Destination
    }
    
    property set target ($arg :  pcf.api.Destination) {
      setVariableValue("target", 0, $arg)
    }
    
    
  }
  
  
}