package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorSpecialtyInputSet.ABAttorney.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonVendorSpecialtyInputSet_ABAttorneyExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorSpecialtyInputSet.ABAttorney.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonVendorSpecialtyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=AttorneyLicense_Input) at ABPersonVendorSpecialtyInputSet.ABAttorney.pcf: line 15, column 55
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABAttorney).AttorneyLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=AttorneySpecialty_Input) at ABPersonVendorSpecialtyInputSet.ABAttorney.pcf: line 21, column 43
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABAttorney).AttorneySpecialty = (__VALUE_TO_SET as typekey.LegalSpecialty)
    }
    
    // 'value' attribute on TextInput (id=AttorneyLicense_Input) at ABPersonVendorSpecialtyInputSet.ABAttorney.pcf: line 15, column 55
    function valueRoot_2 () : java.lang.Object {
      return (person as ABAttorney)
    }
    
    // 'value' attribute on TextInput (id=AttorneyLicense_Input) at ABPersonVendorSpecialtyInputSet.ABAttorney.pcf: line 15, column 55
    function value_0 () : java.lang.String {
      return (person as ABAttorney).AttorneyLicense
    }
    
    // 'value' attribute on TypeKeyInput (id=AttorneySpecialty_Input) at ABPersonVendorSpecialtyInputSet.ABAttorney.pcf: line 21, column 43
    function value_4 () : typekey.LegalSpecialty {
      return (person as ABAttorney).AttorneySpecialty
    }
    
    property get person () : ABPerson {
      return getRequireValue("person", 0) as ABPerson
    }
    
    property set person ($arg :  ABPerson) {
      setRequireValue("person", 0, $arg)
    }
    
    
  }
  
  
}