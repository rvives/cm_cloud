package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorFormInputSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyVendorFormInputSet_ABCompanyVendorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABCompanyVendorFormInputSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyVendorFormInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrivacyInput (id=V_EIN_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 19, column 45
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompany).TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=W9receivedDate_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 29, column 60
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompanyVendor).W9ReceivedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=W9ValidFrom_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 34, column 57
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompanyVendor).W9ValidFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=W9ValidTo_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 39, column 55
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompanyVendor).W9ValidTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=W9received_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 24, column 56
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as ABCompanyVendor).W9Received = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=V_EIN_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 19, column 45
    function encryptionExpression_3 (VALUE :  java.lang.String) : java.lang.String {
      return (contact as ABCompany).maskTaxId(VALUE)
    }
    
    // 'value' attribute on PrivacyInput (id=V_EIN_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 19, column 45
    function valueRoot_2 () : java.lang.Object {
      return (contact as ABCompany)
    }
    
    // 'value' attribute on BooleanRadioInput (id=W9received_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 24, column 56
    function valueRoot_7 () : java.lang.Object {
      return (contact as ABCompanyVendor)
    }
    
    // 'value' attribute on PrivacyInput (id=V_EIN_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 19, column 45
    function value_0 () : java.lang.String {
      return (contact as ABCompany).TaxID
    }
    
    // 'value' attribute on DateInput (id=W9ValidFrom_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 34, column 57
    function value_13 () : java.util.Date {
      return (contact as ABCompanyVendor).W9ValidFrom
    }
    
    // 'value' attribute on DateInput (id=W9ValidTo_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 39, column 55
    function value_17 () : java.util.Date {
      return (contact as ABCompanyVendor).W9ValidTo
    }
    
    // 'value' attribute on BooleanRadioInput (id=W9received_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 24, column 56
    function value_5 () : java.lang.Boolean {
      return (contact as ABCompanyVendor).W9Received
    }
    
    // 'value' attribute on DateInput (id=W9receivedDate_Input) at ABCompanyVendorFormInputSet.ABCompanyVendor.pcf: line 29, column 60
    function value_9 () : java.util.Date {
      return (contact as ABCompanyVendor).W9ReceivedDate
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}