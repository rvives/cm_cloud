package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABUserContactBasicsInputSet.ABUserContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABUserContactBasicsInputSet_ABUserContactExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABUserContactBasicsInputSet.ABUserContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABUserContactBasicsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at ABUserContactBasicsInputSet.ABUserContact.pcf: line 16, column 58
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABUserContact).EmployeeNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at ABUserContactBasicsInputSet.ABUserContact.pcf: line 16, column 58
    function valueRoot_2 () : java.lang.Object {
      return (contact as ABUserContact)
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at ABUserContactBasicsInputSet.ABUserContact.pcf: line 16, column 58
    function value_0 () : java.lang.String {
      return (contact as ABUserContact).EmployeeNumber
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}