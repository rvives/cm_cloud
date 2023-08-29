package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorSpecialtyInputSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonVendorSpecialtyInputSet_ABDoctorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorSpecialtyInputSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonVendorSpecialtyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=MedicalLicense_Input) at ABPersonVendorSpecialtyInputSet.ABDoctor.pcf: line 15, column 52
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABDoctor).MedicalLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorSpecialty_Input) at ABPersonVendorSpecialtyInputSet.ABDoctor.pcf: line 21, column 42
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABDoctor).DoctorSpecialty = (__VALUE_TO_SET as typekey.SpecialtyType)
    }
    
    // 'value' attribute on TextInput (id=MedicalLicense_Input) at ABPersonVendorSpecialtyInputSet.ABDoctor.pcf: line 15, column 52
    function valueRoot_2 () : java.lang.Object {
      return (person as ABDoctor)
    }
    
    // 'value' attribute on TextInput (id=MedicalLicense_Input) at ABPersonVendorSpecialtyInputSet.ABDoctor.pcf: line 15, column 52
    function value_0 () : java.lang.String {
      return (person as ABDoctor).MedicalLicense
    }
    
    // 'value' attribute on TypeKeyInput (id=DoctorSpecialty_Input) at ABPersonVendorSpecialtyInputSet.ABDoctor.pcf: line 21, column 42
    function value_4 () : typekey.SpecialtyType {
      return (person as ABDoctor).DoctorSpecialty
    }
    
    property get person () : ABPerson {
      return getRequireValue("person", 0) as ABPerson
    }
    
    property set person ($arg :  ABPerson) {
      setRequireValue("person", 0, $arg)
    }
    
    
  }
  
  
}