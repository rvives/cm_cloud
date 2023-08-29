package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonVendorInputSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonVendorInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function actionEnabled_11 () : java.lang.Boolean {
      return person.PrimaryContact != null
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_3 () : void {
      ABContactSearchPopup.push(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_6 () : void {
      ABContactDetailPopup.push(person.PrimaryContact)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function action_dest_4 () : pcf.api.Destination {
      return pcf.ABContactSearchPopup.createDestination(entity.ABPerson)
    }
    
    // 'action' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ABContactDetailPopup.createDestination(person.PrimaryContact)
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_onEnter_0 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(entity.ABPerson, person)
    }
    
    // 'def' attribute on InputSetRef (id=Home) at ABPersonVendorInputSet.default.pcf: line 26, column 18
    function def_onEnter_17 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person,ABPerson#HomePhone), DisplayKey.get("Web.ContactDetail.Phone.Home"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ABPersonVendorInputSet.default.pcf: line 30, column 18
    function def_onEnter_19 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person,ABPerson#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Work"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Cell) at ABPersonVendorInputSet.default.pcf: line 34, column 18
    function def_onEnter_21 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABPerson#CellPhone), DisplayKey.get("Web.ContactDetail.Phone.Cell"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ABPersonVendorInputSet.default.pcf: line 38, column 17
    function def_onEnter_23 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABContact#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'def' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 12, column 171
    function def_refreshVariables_1 (def :  pcf.NewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(entity.ABPerson, person)
    }
    
    // 'def' attribute on InputSetRef (id=Home) at ABPersonVendorInputSet.default.pcf: line 26, column 18
    function def_refreshVariables_18 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person,ABPerson#HomePhone), DisplayKey.get("Web.ContactDetail.Phone.Home"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Work) at ABPersonVendorInputSet.default.pcf: line 30, column 18
    function def_refreshVariables_20 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person,ABPerson#WorkPhone), DisplayKey.get("Web.ContactDetail.Phone.Work"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Cell) at ABPersonVendorInputSet.default.pcf: line 34, column 18
    function def_refreshVariables_22 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABPerson#CellPhone), DisplayKey.get("Web.ContactDetail.Phone.Cell"), false))
    }
    
    // 'def' attribute on InputSetRef (id=Fax) at ABPersonVendorInputSet.default.pcf: line 38, column 17
    function def_refreshVariables_24 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, ABContact#FaxPhone), DisplayKey.get("Web.ContactDetail.Phone.Fax"), false))
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ABPersonVendorInputSet.default.pcf: line 45, column 45
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=Primary_Input) at ABPersonVendorInputSet.default.pcf: line 54, column 37
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Secondary_Input) at ABPersonVendorInputSet.default.pcf: line 60, column 37
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.PrimaryContact = (__VALUE_TO_SET as entity.ABContact)
    }
    
    // 'validationExpression' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ABPersonVendorInputSet.default.pcf: line 45, column 45
    function validationExpression_25 () : java.lang.Object {
                       if (person.PrimaryPhone == null or                     (person.PrimaryPhone == TC_WORK and person.WorkPhone != null) or                     (person.PrimaryPhone == TC_HOME and person.HomePhone != null) or                     (person.PrimaryPhone == TC_MOBILE and person.CellPhone != null)) {                   return null;                 } else {                   return DisplayKey.get("Web.ContactDetail.Phone.PrimaryPhone.Error");                 }
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function valueRoot_10 () : java.lang.Object {
      return person
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ABPersonVendorInputSet.default.pcf: line 45, column 45
    function value_26 () : typekey.PrimaryPhoneType {
      return person.PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=Primary_Input) at ABPersonVendorInputSet.default.pcf: line 54, column 37
    function value_31 () : java.lang.String {
      return person.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=Secondary_Input) at ABPersonVendorInputSet.default.pcf: line 60, column 37
    function value_35 () : java.lang.String {
      return person.EmailAddress2
    }
    
    // 'value' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function value_8 () : entity.ABContact {
      return person.PrimaryContact
    }
    
    // 'visible' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 14, column 225
    function visible_2 () : java.lang.Boolean {
      return "ABContactSearchPopup.push(entity.ABPerson)" != "" && true
    }
    
    // 'visible' attribute on ABContactInput (id=PrimaryContact_Input) at ABContactWidget.xml: line 11, column 172
    function visible_5 () : java.lang.Boolean {
      return person.TagTypes.contains(ContactTagType.TC_VENDOR)
    }
    
    property get person () : ABPerson {
      return getRequireValue("person", 0) as ABPerson
    }
    
    property set person ($arg :  ABPerson) {
      setRequireValue("person", 0, $arg)
    }
    
    
  }
  
  
}