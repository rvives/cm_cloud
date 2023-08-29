package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorSpecialtyInputSet.ABLawFirm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyVendorSpecialtyInputSet_ABLawFirmExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorSpecialtyInputSet.ABLawFirm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyVendorSpecialtyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=LawFirmSpecialty_Input) at ABCompanyVendorSpecialtyInputSet.ABLawFirm.pcf: line 16, column 43
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABLawFirm).LawFirmSpecialty = (__VALUE_TO_SET as typekey.LegalSpecialty)
    }
    
    // 'value' attribute on TypeKeyInput (id=LawFirmSpecialty_Input) at ABCompanyVendorSpecialtyInputSet.ABLawFirm.pcf: line 16, column 43
    function valueRoot_2 () : java.lang.Object {
      return (contact as ABLawFirm)
    }
    
    // 'value' attribute on TypeKeyInput (id=LawFirmSpecialty_Input) at ABCompanyVendorSpecialtyInputSet.ABLawFirm.pcf: line 16, column 43
    function value_0 () : typekey.LegalSpecialty {
      return (contact as ABLawFirm).LawFirmSpecialty
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}