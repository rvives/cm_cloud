package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/RelatedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RelatedContactsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/RelatedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RelatedContactsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 11, column 172
    function actionEnabled_14 () : java.lang.Boolean {
      return new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContact != null
    }
    
    // 'action' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 11, column 172
    function action_10 () : void {
      ABContactDetailPopup.push(new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContact)
    }
    
    // 'action' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 14, column 225
    function action_8 () : void {
      ABContactSearchPopup.push(new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContactType)
    }
    
    // 'action' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 11, column 172
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ABContactDetailPopup.createDestination(new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContact)
    }
    
    // 'action' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 14, column 225
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ABContactSearchPopup.createDestination(new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContactType)
    }
    
    // 'def' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 12, column 171
    function def_onEnter_5 (def :  pcf.NewContactPickerMenuItemSet) : void {
      def.onEnter(new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContactType, contact)
    }
    
    // 'def' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 12, column 171
    function def_refreshVariables_6 (def :  pcf.NewContactPickerMenuItemSet) : void {
      def.refreshVariables(new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContactType, contact)
    }
    
    // 'value' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 11, column 172
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContact = (__VALUE_TO_SET as entity.ABContact)
    }
    
    // 'value' attribute on RangeCell (id=Rel_Cell) at RelatedContactsLV.pcf: line 49, column 46
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      new gw.web.ABContactContactLVWrapper(contactContact, contact).BidiRel = (__VALUE_TO_SET as typekey.ContactBidiRel)
    }
    
    // 'valueRange' attribute on RangeCell (id=Rel_Cell) at RelatedContactsLV.pcf: line 49, column 46
    function valueRange_19 () : java.lang.Object {
      return contact.getPossibleBidiRelsToContact(contactContact.getOtherContact(contact))
    }
    
    // 'value' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 11, column 172
    function value_12 () : entity.ABContact {
      return new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContact
    }
    
    // 'value' attribute on RangeCell (id=Rel_Cell) at RelatedContactsLV.pcf: line 49, column 46
    function value_17 () : typekey.ContactBidiRel {
      return new gw.web.ABContactContactLVWrapper(contactContact, contact).BidiRel
    }
    
    // 'valueRange' attribute on RangeCell (id=Rel_Cell) at RelatedContactsLV.pcf: line 49, column 46
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Rel_Cell) at RelatedContactsLV.pcf: line 49, column 46
    function verifyValueRangeIsAllowedType_20 ($$arg :  typekey.ContactBidiRel[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Rel_Cell) at RelatedContactsLV.pcf: line 49, column 46
    function verifyValueRange_21 () : void {
      var __valueRangeArg = contact.getPossibleBidiRelsToContact(contactContact.getOtherContact(contact))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'visible' attribute on ABContactCell (id=Contact_Cell) at ABContactWidget.xml: line 14, column 225
    function visible_7 () : java.lang.Boolean {
      return "ABContactSearchPopup.push(new gw.web.ABContactContactLVWrapper(contactContact, contact).OtherContactType)" != "" && true
    }
    
    property get contactContact () : entity.ABContactContact {
      return getIteratedValue(1) as entity.ABContactContact
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/RelatedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RelatedContactsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on ABContactCell (id=Contact_Cell) at RelatedContactsLV.pcf: line 37, column 94
    function sortValue_0 (contactContact :  entity.ABContactContact) : java.lang.Object {
      return contactContact.getOtherContact(contact).PrimarySortValue
    }
    
    // 'sortBy' attribute on ABContactCell (id=Contact_Cell) at RelatedContactsLV.pcf: line 37, column 94
    function sortValue_1 (contactContact :  entity.ABContactContact) : java.lang.Object {
      return contactContact.getOtherContact(contact).SecondarySortValue
    }
    
    // 'sortBy' attribute on ABContactCell (id=Contact_Cell) at RelatedContactsLV.pcf: line 37, column 94
    function sortValue_2 (contactContact :  entity.ABContactContact) : java.lang.Object {
      return contactContact.getOtherContact(contact).TertiarySortValue
    }
    
    // 'sortBy' attribute on ABContactCell (id=Contact_Cell) at RelatedContactsLV.pcf: line 37, column 94
    function sortValue_3 (contactContact :  entity.ABContactContact) : java.lang.Object {
      return contactContact.getOtherContact(contact).QuaternarySortValue
    }
    
    // 'value' attribute on RangeCell (id=Rel_Cell) at RelatedContactsLV.pcf: line 49, column 46
    function sortValue_4 (contactContact :  entity.ABContactContact) : java.lang.Object {
      return new gw.web.ABContactContactLVWrapper(contactContact, contact).BidiRel
    }
    
    // 'toAdd' attribute on RowIterator at RelatedContactsLV.pcf: line 23, column 45
    function toAdd_23 (contactContact :  entity.ABContactContact) : void {
      contact.addContactContact(contactContact)
    }
    
    // 'toRemove' attribute on RowIterator at RelatedContactsLV.pcf: line 23, column 45
    function toRemove_24 (contactContact :  entity.ABContactContact) : void {
      contact.removeContactContact(contactContact)
    }
    
    // 'value' attribute on RowIterator at RelatedContactsLV.pcf: line 23, column 45
    function value_25 () : entity.ABContactContact[] {
      return contact.AllContactContacts
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}