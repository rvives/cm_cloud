package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorSpecialtyInputSet.ABAutoTowingAgcy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyVendorSpecialtyInputSet_ABAutoTowingAgcyExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorSpecialtyInputSet.ABAutoTowingAgcy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyVendorSpecialtyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=AutoTowingAgcyBusinessLicense_Input) at ABCompanyVendorSpecialtyInputSet.ABAutoTowingAgcy.pcf: line 15, column 64
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABAutoTowingAgcy).AutoTowingLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AutoTowingAgcyBusinessLicense_Input) at ABCompanyVendorSpecialtyInputSet.ABAutoTowingAgcy.pcf: line 15, column 64
    function valueRoot_2 () : java.lang.Object {
      return (contact as ABAutoTowingAgcy)
    }
    
    // 'value' attribute on TextInput (id=AutoTowingAgcyBusinessLicense_Input) at ABCompanyVendorSpecialtyInputSet.ABAutoTowingAgcy.pcf: line 15, column 64
    function value_0 () : java.lang.String {
      return (contact as ABAutoTowingAgcy).AutoTowingLicense
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}