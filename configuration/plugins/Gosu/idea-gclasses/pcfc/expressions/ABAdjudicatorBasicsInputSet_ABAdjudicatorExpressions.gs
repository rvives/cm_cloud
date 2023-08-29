package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABAdjudicatorBasicsInputSet.ABAdjudicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABAdjudicatorBasicsInputSet_ABAdjudicatorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABAdjudicatorBasicsInputSet.ABAdjudicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABAdjudicatorBasicsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at ABAdjudicatorBasicsInputSet.ABAdjudicator.pcf: line 15, column 62
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABAdjudicator).AdjudicatorLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=AdjudicativeDomain_Input) at ABAdjudicatorBasicsInputSet.ABAdjudicator.pcf: line 21, column 47
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABAdjudicator).AdjudicativeDomain = (__VALUE_TO_SET as typekey.AdjudicativeDomain)
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at ABAdjudicatorBasicsInputSet.ABAdjudicator.pcf: line 15, column 62
    function valueRoot_2 () : java.lang.Object {
      return (contact as ABAdjudicator)
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at ABAdjudicatorBasicsInputSet.ABAdjudicator.pcf: line 15, column 62
    function value_0 () : java.lang.String {
      return (contact as ABAdjudicator).AdjudicatorLicense
    }
    
    // 'value' attribute on TypeKeyInput (id=AdjudicativeDomain_Input) at ABAdjudicatorBasicsInputSet.ABAdjudicator.pcf: line 21, column 47
    function value_4 () : typekey.AdjudicativeDomain {
      return (contact as ABAdjudicator).AdjudicativeDomain
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}