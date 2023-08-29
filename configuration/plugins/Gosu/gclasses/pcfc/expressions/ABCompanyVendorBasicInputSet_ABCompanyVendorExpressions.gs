package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorBasicInputSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyVendorBasicInputSet_ABCompanyVendorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorBasicInputSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyVendorBasicInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at ABCompanyVendorBasicInputSet.ABCompanyVendor.pcf: line 15, column 55
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompanyVendor).Preferred = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at ABCompanyVendorBasicInputSet.ABCompanyVendor.pcf: line 15, column 55
    function editable_0 () : java.lang.Boolean {
      return perm.ABContact.createpreferred
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at ABCompanyVendorBasicInputSet.ABCompanyVendor.pcf: line 15, column 55
    function valueRoot_3 () : java.lang.Object {
      return (contact as ABCompanyVendor)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at ABCompanyVendorBasicInputSet.ABCompanyVendor.pcf: line 15, column 55
    function value_1 () : java.lang.Boolean {
      return (contact as ABCompanyVendor).Preferred
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}