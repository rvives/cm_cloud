package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/DriversLicenseInputSet.NoLicenseState.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DriversLicenseInputSet_NoLicenseStateExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/DriversLicenseInputSet.NoLicenseState.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DriversLicenseInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at DriversLicenseInputSet.NoLicenseState.pcf: line 17, column 52
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABPerson).LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at DriversLicenseInputSet.NoLicenseState.pcf: line 17, column 52
    function valueRoot_2 () : java.lang.Object {
      return (contact as ABPerson)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at DriversLicenseInputSet.NoLicenseState.pcf: line 17, column 52
    function value_0 () : java.lang.String {
      return (contact as ABPerson).LicenseNumber
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}