package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/DriversLicenseInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DriversLicenseInputSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/DriversLicenseInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DriversLicenseInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at DriversLicenseInputSet.default.pcf: line 17, column 52
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at DriversLicenseInputSet.default.pcf: line 24, column 41
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).LicenseState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyInput (id=LicenseState_Input) at DriversLicenseInputSet.default.pcf: line 24, column 41
    function filter_7 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_DRIVING_LIC)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at DriversLicenseInputSet.default.pcf: line 17, column 52
    function valueRoot_2 () : java.lang.Object {
      return (contact as ABPerson)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at DriversLicenseInputSet.default.pcf: line 17, column 52
    function value_0 () : java.lang.String {
      return (contact as ABPerson).LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at DriversLicenseInputSet.default.pcf: line 24, column 41
    function value_4 () : typekey.Jurisdiction {
      return (contact as ABPerson).LicenseState
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}