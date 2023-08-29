package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorSpecialtyInputSet.ABMedicalCareOrg.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyVendorSpecialtyInputSet_ABMedicalCareOrgExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorSpecialtyInputSet.ABMedicalCareOrg.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyVendorSpecialtyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=MedicalSpecialty_Input) at ABCompanyVendorSpecialtyInputSet.ABMedicalCareOrg.pcf: line 16, column 42
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABMedicalCareOrg).MedicalOrgSpecialty = (__VALUE_TO_SET as typekey.SpecialtyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=MedicalSpecialty_Input) at ABCompanyVendorSpecialtyInputSet.ABMedicalCareOrg.pcf: line 16, column 42
    function valueRoot_2 () : java.lang.Object {
      return (contact as ABMedicalCareOrg)
    }
    
    // 'value' attribute on TypeKeyInput (id=MedicalSpecialty_Input) at ABCompanyVendorSpecialtyInputSet.ABMedicalCareOrg.pcf: line 16, column 42
    function value_0 () : typekey.SpecialtyType {
      return (contact as ABMedicalCareOrg).MedicalOrgSpecialty
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}