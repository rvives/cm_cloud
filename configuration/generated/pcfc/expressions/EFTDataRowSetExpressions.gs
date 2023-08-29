package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/EFTDataRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EFTDataRowSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/EFTDataRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EFTDataRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=eftPrimary_Cell) at EFTDataRowSet.pcf: line 26, column 50
    function sortValue_0 (eftDataElement :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection) : java.lang.Object {
      return eftDataElement.Data.IsPrimary
    }
    
    // 'value' attribute on CheckBoxCell (id=eftInclude_Cell) at EFTDataRowSet.pcf: line 31, column 44
    function sortValue_1 (eftDataElement :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection) : java.lang.Object {
      return eftDataElement.Included
    }
    
    // 'value' attribute on TextCell (id=accountName_Cell) at EFTDataRowSet.pcf: line 35, column 52
    function sortValue_2 (eftDataElement :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection) : java.lang.Object {
      return eftDataElement.Data.AccountName
    }
    
    // 'value' attribute on TextCell (id=bankName_Cell) at EFTDataRowSet.pcf: line 40, column 49
    function sortValue_3 (eftDataElement :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection) : java.lang.Object {
      return eftDataElement.Data.BankName
    }
    
    // 'value' attribute on TypeKeyCell (id=accountType_Cell) at EFTDataRowSet.pcf: line 45, column 48
    function sortValue_4 (eftDataElement :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection) : java.lang.Object {
      return eftDataElement.Data.BankAccountType
    }
    
    // 'value' attribute on PrivacyCell (id=accountNumber_Cell) at EFTDataRowSet.pcf: line 50, column 58
    function sortValue_5 (eftDataElement :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection) : java.lang.Object {
      return eftDataElement.Data.BankAccountNumber
    }
    
    // 'value' attribute on TextCell (id=routingNumber_Cell) at EFTDataRowSet.pcf: line 54, column 58
    function sortValue_6 (eftDataElement :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection) : java.lang.Object {
      return eftDataElement.Data.BankRoutingNumber
    }
    
    // 'value' attribute on RowIterator (id=EFTDataRowIterator) at EFTDataRowSet.pcf: line 19, column 75
    function value_33 () : gw.web.merge.MergeContactsEFTDataHolder.DataSelection[] {
      return wrappedDuplicateContactPair.Pair == null ? null : eftData
    }
    
    property get eftData () : gw.web.merge.MergeContactsEFTDataHolder.DataSelection[] {
      return getRequireValue("eftData", 0) as gw.web.merge.MergeContactsEFTDataHolder.DataSelection[]
    }
    
    property set eftData ($arg :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection[]) {
      setRequireValue("eftData", 0, $arg)
    }
    
    property get wrappedDuplicateContactPair () : gw.web.merge.DuplicatePairWrapper {
      return getRequireValue("wrappedDuplicateContactPair", 0) as gw.web.merge.DuplicatePairWrapper
    }
    
    property set wrappedDuplicateContactPair ($arg :  gw.web.merge.DuplicatePairWrapper) {
      setRequireValue("wrappedDuplicateContactPair", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/EFTDataRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EFTDataRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=eftInclude_Cell) at EFTDataRowSet.pcf: line 31, column 44
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      eftDataElement.Included = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=eftPrimary_Cell) at EFTDataRowSet.pcf: line 26, column 50
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      eftDataElement.Data.IsPrimary = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'encryptionExpression' attribute on PrivacyCell (id=accountNumber_Cell) at EFTDataRowSet.pcf: line 50, column 58
    function encryptionExpression_28 (VALUE :  java.lang.String) : java.lang.String {
      return eftDataElement.Data.maskBankAccountNumber(VALUE)
    }
    
    // 'validationExpression' attribute on BooleanRadioCell (id=eftPrimary_Cell) at EFTDataRowSet.pcf: line 26, column 50
    function validationExpression_7 () : java.lang.Object {
      return eftDataElement.isInvalid() ? DisplayKey.get("Web.Contact.EFT.Primary.Validation") : null
    }
    
    // 'value' attribute on BooleanRadioCell (id=eftPrimary_Cell) at EFTDataRowSet.pcf: line 26, column 50
    function valueRoot_10 () : java.lang.Object {
      return eftDataElement.Data
    }
    
    // 'value' attribute on CheckBoxCell (id=eftInclude_Cell) at EFTDataRowSet.pcf: line 31, column 44
    function valueRoot_15 () : java.lang.Object {
      return eftDataElement
    }
    
    // 'value' attribute on CheckBoxCell (id=eftInclude_Cell) at EFTDataRowSet.pcf: line 31, column 44
    function value_13 () : java.lang.Boolean {
      return eftDataElement.Included
    }
    
    // 'value' attribute on TextCell (id=accountName_Cell) at EFTDataRowSet.pcf: line 35, column 52
    function value_17 () : java.lang.String {
      return eftDataElement.Data.AccountName
    }
    
    // 'value' attribute on TextCell (id=bankName_Cell) at EFTDataRowSet.pcf: line 40, column 49
    function value_20 () : java.lang.String {
      return eftDataElement.Data.BankName
    }
    
    // 'value' attribute on TypeKeyCell (id=accountType_Cell) at EFTDataRowSet.pcf: line 45, column 48
    function value_23 () : typekey.BankAccountType {
      return eftDataElement.Data.BankAccountType
    }
    
    // 'value' attribute on PrivacyCell (id=accountNumber_Cell) at EFTDataRowSet.pcf: line 50, column 58
    function value_26 () : java.lang.String {
      return eftDataElement.Data.BankAccountNumber
    }
    
    // 'value' attribute on TextCell (id=routingNumber_Cell) at EFTDataRowSet.pcf: line 54, column 58
    function value_30 () : java.lang.String {
      return eftDataElement.Data.BankRoutingNumber
    }
    
    // 'value' attribute on BooleanRadioCell (id=eftPrimary_Cell) at EFTDataRowSet.pcf: line 26, column 50
    function value_8 () : java.lang.Boolean {
      return eftDataElement.Data.IsPrimary
    }
    
    property get eftDataElement () : gw.web.merge.MergeContactsEFTDataHolder.DataSelection {
      return getIteratedValue(1) as gw.web.merge.MergeContactsEFTDataHolder.DataSelection
    }
    
    
  }
  
  
}