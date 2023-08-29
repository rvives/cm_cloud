package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactInfoRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactInfoRowSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactInfoRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactInfoRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactInfoRowSet.pcf: line 68, column 70
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      phoneHolder.KeptFaxPhone = (__VALUE_TO_SET as gw.web.merge.MergeContactsPhoneHolder.PhoneData)
    }
    
    // 'value' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactInfoRowSet.pcf: line 46, column 70
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      phoneHolder.KeptWorkPhone = (__VALUE_TO_SET as gw.web.merge.MergeContactsPhoneHolder.PhoneData)
    }
    
    // 'initialValue' attribute on Variable at ContactInfoRowSet.pcf: line 22, column 27
    function initialValue_0 () : ABContact[] {
      return {contact, duplicate, merged}
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactInfoRowSet.pcf: line 68, column 70
    function valueRange_19 () : java.lang.Object {
      return phoneHolder.collectPhones(PhoneType.TC_FAX)
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactInfoRowSet.pcf: line 46, column 70
    function valueRange_8 () : java.lang.Object {
      return phoneHolder.collectPhones(PhoneType.TC_WORK)
    }
    
    // 'value' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactInfoRowSet.pcf: line 46, column 70
    function valueRoot_7 () : java.lang.Object {
      return phoneHolder
    }
    
    // 'value' attribute on TextCell (id=keptWorkPhone_Cell) at ContactInfoRowSet.pcf: line 36, column 118
    function value_1 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(contact, ABContact#WorkPhone, false)
    }
    
    // 'value' attribute on TextCell (id=keptFaxPhone_Cell) at ContactInfoRowSet.pcf: line 58, column 117
    function value_12 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(contact, ABContact#FaxPhone, false)
    }
    
    // 'value' attribute on TextCell (id=retiredFaxPhone_Cell) at ContactInfoRowSet.pcf: line 61, column 119
    function value_14 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(duplicate, ABContact#FaxPhone, false)
    }
    
    // 'value' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactInfoRowSet.pcf: line 68, column 70
    function value_16 () : gw.web.merge.MergeContactsPhoneHolder.PhoneData {
      return phoneHolder.KeptFaxPhone
    }
    
    // 'value' attribute on CellIterator (id=primaryEmail) at ContactInfoRowSet.pcf: line 82, column 40
    function value_29 () : entity.ABContact[] {
      return contacts
    }
    
    // 'value' attribute on TextCell (id=retiredWorkPhone_Cell) at ContactInfoRowSet.pcf: line 39, column 120
    function value_3 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(duplicate, ABContact#WorkPhone, false)
    }
    
    // 'value' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactInfoRowSet.pcf: line 46, column 70
    function value_5 () : gw.web.merge.MergeContactsPhoneHolder.PhoneData {
      return phoneHolder.KeptWorkPhone
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactInfoRowSet.pcf: line 68, column 70
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.web.merge.MergeContactsPhoneHolder.PhoneData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactInfoRowSet.pcf: line 68, column 70
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactInfoRowSet.pcf: line 46, column 70
    function verifyValueRangeIsAllowedType_9 ($$arg :  gw.web.merge.MergeContactsPhoneHolder.PhoneData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactInfoRowSet.pcf: line 46, column 70
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactInfoRowSet.pcf: line 46, column 70
    function verifyValueRange_10 () : void {
      var __valueRangeArg = phoneHolder.collectPhones(PhoneType.TC_WORK)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactInfoRowSet.pcf: line 68, column 70
    function verifyValueRange_21 () : void {
      var __valueRangeArg = phoneHolder.collectPhones(PhoneType.TC_FAX)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contacts () : ABContact[] {
      return getVariableValue("contacts", 0) as ABContact[]
    }
    
    property set contacts ($arg :  ABContact[]) {
      setVariableValue("contacts", 0, $arg)
    }
    
    property get duplicate () : ABContact {
      return getRequireValue("duplicate", 0) as ABContact
    }
    
    property set duplicate ($arg :  ABContact) {
      setRequireValue("duplicate", 0, $arg)
    }
    
    property get merged () : ABContact {
      return getRequireValue("merged", 0) as ABContact
    }
    
    property set merged ($arg :  ABContact) {
      setRequireValue("merged", 0, $arg)
    }
    
    property get phoneHolder () : gw.web.merge.MergeContactsPhoneHolder {
      return getRequireValue("phoneHolder", 0) as gw.web.merge.MergeContactsPhoneHolder
    }
    
    property set phoneHolder ($arg :  gw.web.merge.MergeContactsPhoneHolder) {
      setRequireValue("phoneHolder", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactInfoRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ContactInfoRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=alternateEmail_Cell) at ContactInfoRowSet.pcf: line 101, column 43
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=alternateEmail_Cell) at ContactInfoRowSet.pcf: line 101, column 43
    function editable_30 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on TextCell (id=alternateEmail_Cell) at ContactInfoRowSet.pcf: line 101, column 43
    function valueRoot_33 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=alternateEmail_Cell) at ContactInfoRowSet.pcf: line 101, column 43
    function value_31 () : java.lang.String {
      return aContact.EmailAddress2
    }
    
    property get aContact () : entity.ABContact {
      return getIteratedValue(1) as entity.ABContact
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactInfoRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactInfoRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=primaryEmail_Cell) at ContactInfoRowSet.pcf: line 86, column 43
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=primaryEmail_Cell) at ContactInfoRowSet.pcf: line 86, column 43
    function editable_23 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on TextCell (id=primaryEmail_Cell) at ContactInfoRowSet.pcf: line 86, column 43
    function valueRoot_26 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=primaryEmail_Cell) at ContactInfoRowSet.pcf: line 86, column 43
    function value_24 () : java.lang.String {
      return aContact.EmailAddress1
    }
    
    property get aContact () : entity.ABContact {
      return getIteratedValue(1) as entity.ABContact
    }
    
    
  }
  
  
}