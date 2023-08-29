package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorInputSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonVendorInputSet_ABPersonVendorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorInputSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonVendorInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function actionEnabled_16 () : java.lang.Boolean {
      return person.PrimaryContact != null
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_11 () : void {
      ABContactDetailPopup.push(person.PrimaryContact)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_9 () : void {
      ABContactSearchPopup.push(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ABContactSearchPopup.createDestination(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ABContactDetailPopup.createDestination(person.PrimaryContact)
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 30, column 18
    function def_onEnter_20 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABContact#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Work"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Home) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 34, column 18
    function def_onEnter_22 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person,ABPerson#HomePhone), DisplayKey.get("Web.ContactDetail.Phone.Home"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Cell) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 38, column 18
    function def_onEnter_24 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABPerson#CellPhone), DisplayKey.get("Web.ContactDetail.Phone.Cell"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 42, column 17
    function def_onEnter_26 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABPerson#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_onEnter_6 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(entity.ABPerson, person)
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 30, column 18
    function def_refreshVariables_21 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABContact#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Work"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Home) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 34, column 18
    function def_refreshVariables_23 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person,ABPerson#HomePhone), DisplayKey.get("Web.ContactDetail.Phone.Home"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Cell) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 38, column 18
    function def_refreshVariables_25 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABPerson#CellPhone), DisplayKey.get("Web.ContactDetail.Phone.Cell"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 42, column 17
    function def_refreshVariables_27 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABPerson#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_refreshVariables_7 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(entity.ABPerson, person)
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.PrimaryContact = (__VALUE_TO_SET as entity.ABContact)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 15, column 53
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABPersonVendor).Preferred = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 49, column 45
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=Email1_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 58, column 37
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Email2_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 64, column 37
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PrivacyInput (id=SSN_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 73, column 29
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=W9received_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 78, column 54
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABPersonVendor).W9Received = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=W9receivedDate_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 83, column 58
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABPersonVendor).W9ReceivedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=W9ValidFrom_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 88, column 55
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABPersonVendor).W9ValidFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=W9ValidTo_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 93, column 53
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      (person as ABPersonVendor).W9ValidTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 15, column 53
    function editable_0 () : java.lang.Boolean {
      return perm.ABContact.createpreferred
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=SSN_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 73, column 29
    function encryptionExpression_45 (VALUE :  java.lang.String) : java.lang.String {
      return person.maskTaxId(VALUE)
    }
    
    // 'validationExpression' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 49, column 45
    function validationExpression_28 () : java.lang.Object {
                       if (person.PrimaryPhone == null or                     (person.PrimaryPhone == TC_WORK and person.WorkPhone != null) or                     (person.PrimaryPhone == TC_HOME and person.HomePhone != null) or                     (person.PrimaryPhone == TC_MOBILE and person.CellPhone != null)) {                   return null;                 } else {                   return DisplayKey.get("Web.ContactDetail.Phone.PrimaryPhone.Error");                 }
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function valueRoot_15 () : java.lang.Object {
      return person
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 15, column 53
    function valueRoot_3 () : java.lang.Object {
      return (person as ABPersonVendor)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IsPreferredVendor_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 15, column 53
    function value_1 () : java.lang.Boolean {
      return (person as ABPersonVendor).Preferred
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function value_13 () : entity.ABContact {
      return person.PrimaryContact
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 49, column 45
    function value_29 () : typekey.PrimaryPhoneType {
      return person.PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=Email1_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 58, column 37
    function value_34 () : java.lang.String {
      return person.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=Email2_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 64, column 37
    function value_38 () : java.lang.String {
      return person.EmailAddress2
    }
    
    // 'value' attribute on PrivacyInput (id=SSN_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 73, column 29
    function value_42 () : java.lang.String {
      return person.TaxID
    }
    
    // 'value' attribute on BooleanRadioInput (id=W9received_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 78, column 54
    function value_47 () : java.lang.Boolean {
      return (person as ABPersonVendor).W9Received
    }
    
    // 'value' attribute on DateInput (id=W9receivedDate_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 83, column 58
    function value_51 () : java.util.Date {
      return (person as ABPersonVendor).W9ReceivedDate
    }
    
    // 'value' attribute on DateInput (id=W9ValidFrom_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 88, column 55
    function value_55 () : java.util.Date {
      return (person as ABPersonVendor).W9ValidFrom
    }
    
    // 'value' attribute on DateInput (id=W9ValidTo_Input) at ABPersonVendorInputSet.ABPersonVendor.pcf: line 93, column 53
    function value_59 () : java.util.Date {
      return (person as ABPersonVendor).W9ValidTo
    }
    
    // 'visible' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function visible_8 () : java.lang.Boolean {
      return "ABContactSearchPopup.push(entity.ABPerson)" != "" && true
    }
    
    property get person () : ABPerson {
      return getRequireValue("person", 0) as ABPerson
    }
    
    property set person ($arg :  ABPerson) {
      setRequireValue("person", 0, $arg)
    }
    
    
  }
  
  
}