package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/AddressDataRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressDataRowSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/AddressDataRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressDataRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RadioButtonCell (id=contactPrimary_Cell) at AddressDataRowSet.pcf: line 27, column 46
    function sortValue_0 (addressDataElement :  gw.web.merge.MergeContactsAddressHolder.AddressData) : java.lang.Object {
      return addressDataElement.Primary
    }
    
    // 'value' attribute on CheckBoxCell (id=contactInclude_Cell) at AddressDataRowSet.pcf: line 36, column 47
    function sortValue_1 (addressDataElement :  gw.web.merge.MergeContactsAddressHolder.AddressData) : java.lang.Object {
      return addressDataElement.Included
    }
    
    // 'value' attribute on TypeKeyCell (id=contactType_Cell) at AddressDataRowSet.pcf: line 45, column 44
    function sortValue_2 (addressDataElement :  gw.web.merge.MergeContactsAddressHolder.AddressData) : java.lang.Object {
      return addressDataElement.Address.AddressType
    }
    
    // 'value' attribute on TextCell (id=contactAddress_Cell) at AddressDataRowSet.pcf: line 51, column 39
    function sortValue_3 (addressDataElement :  gw.web.merge.MergeContactsAddressHolder.AddressData) : java.lang.Object {
      return addressDataElement.Address
    }
    
    // 'value' attribute on RangeCell (id=contactDuplicateAddress_Cell) at AddressDataRowSet.pcf: line 62, column 26
    function sortValue_4 (addressDataElement :  gw.web.merge.MergeContactsAddressHolder.AddressData) : java.lang.Object {
      return addressDataElement.DuplicateAddress
    }
    
    // 'value' attribute on RowIterator (id=ContactRowIterator) at AddressDataRowSet.pcf: line 19, column 73
    function value_30 () : gw.web.merge.MergeContactsAddressHolder.AddressData[] {
      return addressData
    }
    
    property get addressData () : gw.web.merge.MergeContactsAddressHolder.AddressData[] {
      return getRequireValue("addressData", 0) as gw.web.merge.MergeContactsAddressHolder.AddressData[]
    }
    
    property set addressData ($arg :  gw.web.merge.MergeContactsAddressHolder.AddressData[]) {
      setRequireValue("addressData", 0, $arg)
    }
    
    property get duplicateAddressEntries () : gw.web.merge.MergeContactsAddressHolder.DuplicateAddressEntry[] {
      return getRequireValue("duplicateAddressEntries", 0) as gw.web.merge.MergeContactsAddressHolder.DuplicateAddressEntry[]
    }
    
    property set duplicateAddressEntries ($arg :  gw.web.merge.MergeContactsAddressHolder.DuplicateAddressEntry[]) {
      setRequireValue("duplicateAddressEntries", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/AddressDataRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AddressDataRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=contactPrimary_Cell) at AddressDataRowSet.pcf: line 27, column 46
    function action_5 () : void {
      addressDataElement.makePrimary()
    }
    
    // 'available' attribute on CheckBoxCell (id=contactInclude_Cell) at AddressDataRowSet.pcf: line 36, column 47
    function available_9 () : java.lang.Boolean {
      return not addressDataElement.Primary
    }
    
    // 'value' attribute on CheckBoxCell (id=contactInclude_Cell) at AddressDataRowSet.pcf: line 36, column 47
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressDataElement.Included = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=contactType_Cell) at AddressDataRowSet.pcf: line 45, column 44
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressDataElement.Address.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on RangeCell (id=contactDuplicateAddress_Cell) at AddressDataRowSet.pcf: line 62, column 26
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressDataElement.DuplicateAddress = (__VALUE_TO_SET as gw.web.merge.MergeContactsAddressHolder.DuplicateAddressEntry)
    }
    
    // 'valueRange' attribute on RangeCell (id=contactDuplicateAddress_Cell) at AddressDataRowSet.pcf: line 62, column 26
    function valueRange_26 () : java.lang.Object {
      return duplicateAddressEntries
    }
    
    // 'value' attribute on TypeKeyCell (id=contactType_Cell) at AddressDataRowSet.pcf: line 45, column 44
    function valueRoot_17 () : java.lang.Object {
      return addressDataElement.Address
    }
    
    // 'value' attribute on RadioButtonCell (id=contactPrimary_Cell) at AddressDataRowSet.pcf: line 27, column 46
    function valueRoot_7 () : java.lang.Object {
      return addressDataElement
    }
    
    // 'value' attribute on CheckBoxCell (id=contactInclude_Cell) at AddressDataRowSet.pcf: line 36, column 47
    function value_10 () : java.lang.Boolean {
      return addressDataElement.Included
    }
    
    // 'value' attribute on TypeKeyCell (id=contactType_Cell) at AddressDataRowSet.pcf: line 45, column 44
    function value_15 () : typekey.AddressType {
      return addressDataElement.Address.AddressType
    }
    
    // 'value' attribute on TextCell (id=contactAddress_Cell) at AddressDataRowSet.pcf: line 51, column 39
    function value_19 () : entity.Address {
      return addressDataElement.Address
    }
    
    // 'value' attribute on RangeCell (id=contactDuplicateAddress_Cell) at AddressDataRowSet.pcf: line 62, column 26
    function value_23 () : gw.web.merge.MergeContactsAddressHolder.DuplicateAddressEntry {
      return addressDataElement.DuplicateAddress
    }
    
    // 'value' attribute on RadioButtonCell (id=contactPrimary_Cell) at AddressDataRowSet.pcf: line 27, column 46
    function value_6 () : java.lang.Boolean {
      return addressDataElement.Primary
    }
    
    // 'valueRange' attribute on RangeCell (id=contactDuplicateAddress_Cell) at AddressDataRowSet.pcf: line 62, column 26
    function verifyValueRangeIsAllowedType_27 ($$arg :  gw.web.merge.MergeContactsAddressHolder.DuplicateAddressEntry[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=contactDuplicateAddress_Cell) at AddressDataRowSet.pcf: line 62, column 26
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=contactDuplicateAddress_Cell) at AddressDataRowSet.pcf: line 62, column 26
    function verifyValueRange_28 () : void {
      var __valueRangeArg = duplicateAddressEntries
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    // 'valueVisible' attribute on RangeCell (id=contactDuplicateAddress_Cell) at AddressDataRowSet.pcf: line 62, column 26
    function visible_22 () : java.lang.Boolean {
      return (not addressDataElement.Included) and (not addressDataElement.Primary)
    }
    
    property get addressDataElement () : gw.web.merge.MergeContactsAddressHolder.AddressData {
      return getIteratedValue(1) as gw.web.merge.MergeContactsAddressHolder.AddressData
    }
    
    
  }
  
  
}