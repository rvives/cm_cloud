package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactBasicsDV_ABPlaceExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.ABPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactBasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function actionEnabled_47 () : java.lang.Boolean {
      return contact.PrimaryContact != null
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_40 () : void {
      ABContactSearchPopup.push(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_42 () : void {
      ABContactDetailPopup.push(contact.PrimaryContact)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_dest_41 () : pcf.api.Destination {
      return pcf.ABContactSearchPopup.createDestination(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_dest_43 () : pcf.api.Destination {
      return pcf.ABContactDetailPopup.createDestination(contact.PrimaryContact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function def_onEnter_10 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABPlace)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 31, column 38
    function def_onEnter_13 (def :  pcf.TagsInputSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 51, column 48
    function def_onEnter_28 (def :  pcf.PrimaryAddressInputSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_onEnter_37 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(entity.ABPerson, contact)
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ContactBasicsDV.ABPlace.pcf: line 78, column 20
    function def_onEnter_51 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact,ABPlace#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ContactBasicsDV.ABPlace.pcf: line 82, column 19
    function def_onEnter_53 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, ABPlace#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function def_onEnter_8 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABPlace)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function def_refreshVariables_11 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABPlace)))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 31, column 38
    function def_refreshVariables_14 (def :  pcf.TagsInputSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 51, column 48
    function def_refreshVariables_29 (def :  pcf.PrimaryAddressInputSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_refreshVariables_38 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(entity.ABPerson, contact)
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ContactBasicsDV.ABPlace.pcf: line 78, column 20
    function def_refreshVariables_52 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact,ABPlace#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Phone"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ContactBasicsDV.ABPlace.pcf: line 82, column 19
    function def_refreshVariables_54 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, ABPlace#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function def_refreshVariables_9 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(contact as ABPlace)))
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPlace.pcf: line 39, column 34
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.VendorAvailability = (__VALUE_TO_SET as typekey.VendorAvailabilityType)
    }
    
    // 'value' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPlace.pcf: line 48, column 76
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.VendorUnavailableMessage = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABPlace.pcf: line 63, column 67
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PrimaryContact = (__VALUE_TO_SET as entity.ABContact)
    }
    
    // 'value' attribute on TextInput (id=Email1_Input) at ContactBasicsDV.ABPlace.pcf: line 88, column 40
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Email2_Input) at ContactBasicsDV.ABPlace.pcf: line 94, column 40
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.ABPlace.pcf: line 102, column 32
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ContactBasicsDV.ABPlace.pcf: line 14, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'label' attribute on Label at ContactBasicsDV.ABPlace.pcf: line 26, column 51
    function label_7 () : java.lang.String {
      return contact.getSubtype().DisplayName
    }
    
    // 'mode' attribute on InputSetRef at ContactBasicsDV.ABPlace.pcf: line 29, column 56
    function mode_12 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPlace.pcf: line 39, column 34
    function valueRoot_19 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPlace.pcf: line 22, column 86
    function valueRoot_3 () : java.lang.Object {
      return contact.CreateStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPlace.pcf: line 39, column 34
    function value_17 () : typekey.VendorAvailabilityType {
      return contact.VendorAvailability
    }
    
    // 'value' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPlace.pcf: line 22, column 86
    function value_2 () : java.lang.String {
      return contact.CreateStatus.DisplayName
    }
    
    // 'value' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPlace.pcf: line 48, column 76
    function value_23 () : java.lang.String {
      return contact.VendorUnavailableMessage
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at ContactBasicsDV.ABPlace.pcf: line 63, column 67
    function value_32 () : typekey.Currency {
      return contact.PreferredCurrency
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function value_44 () : entity.ABContact {
      return contact.PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=Email1_Input) at ContactBasicsDV.ABPlace.pcf: line 88, column 40
    function value_55 () : java.lang.String {
      return contact.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=Email2_Input) at ContactBasicsDV.ABPlace.pcf: line 94, column 40
    function value_59 () : java.lang.String {
      return contact.EmailAddress2
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ContactBasicsDV.ABPlace.pcf: line 102, column 32
    function value_63 () : java.lang.String {
      return contact.Notes
    }
    
    // 'visible' attribute on TextInput (id=CreateStatus_Input) at ContactBasicsDV.ABPlace.pcf: line 22, column 86
    function visible_1 () : java.lang.Boolean {
      return contact.CreateStatus != ContactCreationApprovalStatus.TC_APPROVED
    }
    
    // 'visible' attribute on TypeKeyInput (id=VendorAvailability_Input) at ContactBasicsDV.ABPlace.pcf: line 39, column 34
    function visible_15 () : java.lang.Boolean {
      return contact.Vendor
    }
    
    // 'visible' attribute on TextInput (id=VendorUnavailableMessageInput_Input) at ContactBasicsDV.ABPlace.pcf: line 48, column 76
    function visible_22 () : java.lang.Boolean {
      return contactDetailsVendorHelper.ShowVendorUnavailableMessage
    }
    
    // 'visible' attribute on Label at ContactBasicsDV.ABPlace.pcf: line 56, column 67
    function visible_30 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function visible_39 () : java.lang.Boolean {
      return "ABContactSearchPopup.push(entity.ABPerson)" != "" && true
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getVariableValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setVariableValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    
  }
  
  
}