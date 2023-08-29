package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailsRowSet_ABPersonExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 346, column 82
    function def_onEnter_134 (def :  pcf.DriversLicenseRowSet_NoLicenseState) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 346, column 82
    function def_onEnter_136 (def :  pcf.DriversLicenseRowSet_default) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 348, column 67
    function def_onEnter_139 (def :  pcf.NotesRowSet) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 351, column 36
    function def_onEnter_141 (def :  pcf.ABPersonVendorRowSet_ABPersonVendor) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 351, column 36
    function def_onEnter_143 (def :  pcf.ABPersonVendorRowSet_default) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_onEnter_146 (def :  pcf.ABPersonAdditionalInfoRowSet_ABAdjudicator) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_onEnter_148 (def :  pcf.ABPersonAdditionalInfoRowSet_ABAttorney) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_onEnter_150 (def :  pcf.ABPersonAdditionalInfoRowSet_ABDoctor) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_onEnter_152 (def :  pcf.ABPersonAdditionalInfoRowSet_ABUserContact) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_onEnter_154 (def :  pcf.ABPersonAdditionalInfoRowSet_default) : void {
      def.onEnter(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef (id=tag) at ContactDetailsRowSet.ABPerson.pcf: line 70, column 17
    function def_onEnter_17 (def :  pcf.ContactTagRowSet) : void {
      def.onEnter(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 52, column 54
    function def_onEnter_5 (def :  pcf.ABPersonMergeDetailsRowSet_Japan) : void {
      def.onEnter(persons, mergedPerson, nameOwner)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 52, column 54
    function def_onEnter_7 (def :  pcf.ABPersonMergeDetailsRowSet_default) : void {
      def.onEnter(persons, mergedPerson, nameOwner)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 346, column 82
    function def_refreshVariables_135 (def :  pcf.DriversLicenseRowSet_NoLicenseState) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 346, column 82
    function def_refreshVariables_137 (def :  pcf.DriversLicenseRowSet_default) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 348, column 67
    function def_refreshVariables_140 (def :  pcf.NotesRowSet) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 351, column 36
    function def_refreshVariables_142 (def :  pcf.ABPersonVendorRowSet_ABPersonVendor) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 351, column 36
    function def_refreshVariables_144 (def :  pcf.ABPersonVendorRowSet_default) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_refreshVariables_147 (def :  pcf.ABPersonAdditionalInfoRowSet_ABAdjudicator) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_refreshVariables_149 (def :  pcf.ABPersonAdditionalInfoRowSet_ABAttorney) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_refreshVariables_151 (def :  pcf.ABPersonAdditionalInfoRowSet_ABDoctor) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_refreshVariables_153 (def :  pcf.ABPersonAdditionalInfoRowSet_ABUserContact) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 354, column 36
    function def_refreshVariables_155 (def :  pcf.ABPersonAdditionalInfoRowSet_default) : void {
      def.refreshVariables(keptPerson, retiredPerson, mergedPerson)
    }
    
    // 'def' attribute on RowSetRef (id=tag) at ContactDetailsRowSet.ABPerson.pcf: line 70, column 17
    function def_refreshVariables_18 (def :  pcf.ContactTagRowSet) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 52, column 54
    function def_refreshVariables_6 (def :  pcf.ABPersonMergeDetailsRowSet_Japan) : void {
      def.refreshVariables(persons, mergedPerson, nameOwner)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 52, column 54
    function def_refreshVariables_8 (def :  pcf.ABPersonMergeDetailsRowSet_default) : void {
      def.refreshVariables(persons, mergedPerson, nameOwner)
    }
    
    // 'value' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 95, column 70
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      phoneHolder.KeptWorkPhone = (__VALUE_TO_SET as gw.web.merge.MergeContactsPhoneHolder.PhoneData)
    }
    
    // 'value' attribute on RangeCell (id=mergedHomePhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 117, column 70
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      phoneHolder.KeptHomePhone = (__VALUE_TO_SET as gw.web.merge.MergeContactsPhoneHolder.PhoneData)
    }
    
    // 'value' attribute on RangeCell (id=mergedCellPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 139, column 70
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      phoneHolder.KeptCellPhone = (__VALUE_TO_SET as gw.web.merge.MergeContactsPhoneHolder.PhoneData)
    }
    
    // 'value' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 161, column 70
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      phoneHolder.KeptFaxPhone = (__VALUE_TO_SET as gw.web.merge.MergeContactsPhoneHolder.PhoneData)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPerson.pcf: line 26, column 31
    function initialValue_0 () : entity.ABPerson {
      return keptContact as ABPerson
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPerson.pcf: line 30, column 31
    function initialValue_1 () : entity.ABPerson {
      return retiredContact as ABPerson
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPerson.pcf: line 34, column 31
    function initialValue_2 () : entity.ABPerson {
      return mergedContact as ABPerson
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPerson.pcf: line 38, column 26
    function initialValue_3 () : ABPerson[] {
      return {keptPerson, retiredPerson, mergedPerson}
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPerson.pcf: line 42, column 37
    function initialValue_4 () : gw.api.name.NameOwner {
      return new gw.api.name.ContactNameOwner(new gw.api.name.ABPersonNameDelegate(mergedPerson))
    }
    
    // 'mode' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 346, column 82
    function mode_138 () : java.lang.Object {
      return gw.api.web.PCFModeConfig.getMode("DriversLicenseRowSet")
    }
    
    // 'mode' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 351, column 36
    function mode_145 () : java.lang.Object {
      return mergedPerson.Subtype
    }
    
    // 'mode' attribute on RowSetRef at ContactDetailsRowSet.ABPerson.pcf: line 52, column 54
    function mode_9 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 95, column 70
    function valueRange_26 () : java.lang.Object {
      return phoneHolder.collectPhones(PhoneType.TC_WORK)
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedHomePhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 117, column 70
    function valueRange_37 () : java.lang.Object {
      return phoneHolder.collectPhones(PhoneType.TC_HOME)
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedCellPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 139, column 70
    function valueRange_48 () : java.lang.Object {
      return phoneHolder.collectPhones(PhoneType.TC_CELL)
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 161, column 70
    function valueRange_59 () : java.lang.Object {
      return phoneHolder.collectPhones(PhoneType.TC_FAX)
    }
    
    // 'value' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 95, column 70
    function valueRoot_25 () : java.lang.Object {
      return phoneHolder
    }
    
    // 'value' attribute on CellIterator (id=formerName) at ContactDetailsRowSet.ABPerson.pcf: line 61, column 39
    function value_16 () : entity.ABPerson[] {
      return persons
    }
    
    // 'value' attribute on TextCell (id=keptWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 85, column 122
    function value_19 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(keptContact, ABContact#WorkPhone, false)
    }
    
    // 'value' attribute on TextCell (id=retiredWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 88, column 125
    function value_21 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(retiredContact, ABContact#WorkPhone, false)
    }
    
    // 'value' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 95, column 70
    function value_23 () : gw.web.merge.MergeContactsPhoneHolder.PhoneData {
      return phoneHolder.KeptWorkPhone
    }
    
    // 'value' attribute on TextCell (id=keptHomePhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 107, column 122
    function value_30 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(keptContact, ABContact#HomePhone, false)
    }
    
    // 'value' attribute on TextCell (id=retiredHomePhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 110, column 125
    function value_32 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(retiredContact, ABContact#HomePhone, false)
    }
    
    // 'value' attribute on RangeCell (id=mergedHomePhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 117, column 70
    function value_34 () : gw.web.merge.MergeContactsPhoneHolder.PhoneData {
      return phoneHolder.KeptHomePhone
    }
    
    // 'value' attribute on TextCell (id=keptCellPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 129, column 121
    function value_41 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(keptContact, ABPerson#CellPhone, false)
    }
    
    // 'value' attribute on TextCell (id=retiredCellPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 132, column 124
    function value_43 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(retiredContact, ABPerson#CellPhone, false)
    }
    
    // 'value' attribute on RangeCell (id=mergedCellPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 139, column 70
    function value_45 () : gw.web.merge.MergeContactsPhoneHolder.PhoneData {
      return phoneHolder.KeptCellPhone
    }
    
    // 'value' attribute on TextCell (id=keptFaxPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 151, column 121
    function value_52 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(keptContact, ABContact#FaxPhone, false)
    }
    
    // 'value' attribute on TextCell (id=retiredFaxPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 154, column 124
    function value_54 () : java.lang.String {
      return gw.web.merge.MergeContactsWebUtil.Instance.contactPhoneDisplay(retiredContact, ABContact#FaxPhone, false)
    }
    
    // 'value' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 161, column 70
    function value_56 () : gw.web.merge.MergeContactsPhoneHolder.PhoneData {
      return phoneHolder.KeptFaxPhone
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 95, column 70
    function verifyValueRangeIsAllowedType_27 ($$arg :  gw.web.merge.MergeContactsPhoneHolder.PhoneData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 95, column 70
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedHomePhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 117, column 70
    function verifyValueRangeIsAllowedType_38 ($$arg :  gw.web.merge.MergeContactsPhoneHolder.PhoneData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedHomePhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 117, column 70
    function verifyValueRangeIsAllowedType_38 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedCellPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 139, column 70
    function verifyValueRangeIsAllowedType_49 ($$arg :  gw.web.merge.MergeContactsPhoneHolder.PhoneData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedCellPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 139, column 70
    function verifyValueRangeIsAllowedType_49 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 161, column 70
    function verifyValueRangeIsAllowedType_60 ($$arg :  gw.web.merge.MergeContactsPhoneHolder.PhoneData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 161, column 70
    function verifyValueRangeIsAllowedType_60 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedWorkPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 95, column 70
    function verifyValueRange_28 () : void {
      var __valueRangeArg = phoneHolder.collectPhones(PhoneType.TC_WORK)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedHomePhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 117, column 70
    function verifyValueRange_39 () : void {
      var __valueRangeArg = phoneHolder.collectPhones(PhoneType.TC_HOME)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_38(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedCellPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 139, column 70
    function verifyValueRange_50 () : void {
      var __valueRangeArg = phoneHolder.collectPhones(PhoneType.TC_CELL)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_49(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=mergedFaxPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 161, column 70
    function verifyValueRange_61 () : void {
      var __valueRangeArg = phoneHolder.collectPhones(PhoneType.TC_FAX)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_60(__valueRangeArg)
    }
    
    property get addressDataHolder () : gw.web.merge.MergeContactsAddressHolder {
      return getRequireValue("addressDataHolder", 0) as gw.web.merge.MergeContactsAddressHolder
    }
    
    property set addressDataHolder ($arg :  gw.web.merge.MergeContactsAddressHolder) {
      setRequireValue("addressDataHolder", 0, $arg)
    }
    
    property get keptContact () : entity.ABContact {
      return getRequireValue("keptContact", 0) as entity.ABContact
    }
    
    property set keptContact ($arg :  entity.ABContact) {
      setRequireValue("keptContact", 0, $arg)
    }
    
    property get keptPerson () : entity.ABPerson {
      return getVariableValue("keptPerson", 0) as entity.ABPerson
    }
    
    property set keptPerson ($arg :  entity.ABPerson) {
      setVariableValue("keptPerson", 0, $arg)
    }
    
    property get mergedContact () : entity.ABContact {
      return getRequireValue("mergedContact", 0) as entity.ABContact
    }
    
    property set mergedContact ($arg :  entity.ABContact) {
      setRequireValue("mergedContact", 0, $arg)
    }
    
    property get mergedPerson () : entity.ABPerson {
      return getVariableValue("mergedPerson", 0) as entity.ABPerson
    }
    
    property set mergedPerson ($arg :  entity.ABPerson) {
      setVariableValue("mergedPerson", 0, $arg)
    }
    
    property get nameOwner () : gw.api.name.NameOwner {
      return getVariableValue("nameOwner", 0) as gw.api.name.NameOwner
    }
    
    property set nameOwner ($arg :  gw.api.name.NameOwner) {
      setVariableValue("nameOwner", 0, $arg)
    }
    
    property get persons () : ABPerson[] {
      return getVariableValue("persons", 0) as ABPerson[]
    }
    
    property set persons ($arg :  ABPerson[]) {
      setVariableValue("persons", 0, $arg)
    }
    
    property get phoneHolder () : gw.web.merge.MergeContactsPhoneHolder {
      return getRequireValue("phoneHolder", 0) as gw.web.merge.MergeContactsPhoneHolder
    }
    
    property set phoneHolder ($arg :  gw.web.merge.MergeContactsPhoneHolder) {
      setRequireValue("phoneHolder", 0, $arg)
    }
    
    property get retiredContact () : entity.ABContact {
      return getRequireValue("retiredContact", 0) as entity.ABContact
    }
    
    property set retiredContact ($arg :  entity.ABContact) {
      setRequireValue("retiredContact", 0, $arg)
    }
    
    property get retiredPerson () : entity.ABPerson {
      return getVariableValue("retiredPerson", 0) as entity.ABPerson
    }
    
    property set retiredPerson ($arg :  entity.ABPerson) {
      setVariableValue("retiredPerson", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry10ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=preferredCurrency_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 319, column 41
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'editable' attribute on TypeKeyCell (id=preferredCurrency_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 319, column 41
    function editable_120 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TypeKeyCell (id=preferredCurrency_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 319, column 41
    function valueRoot_123 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TypeKeyCell (id=preferredCurrency_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 319, column 41
    function value_121 () : typekey.Currency {
      return aContact.PreferredCurrency
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry11ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=companyOccupation_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 341, column 40
    function defaultSetter_129 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.Occupation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=companyOccupation_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 341, column 40
    function editable_127 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TextCell (id=companyOccupation_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 341, column 40
    function valueRoot_130 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=companyOccupation_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 341, column 40
    function value_128 () : java.lang.String {
      return aContact.Occupation
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=primaryPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 180, column 49
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=primaryPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 180, column 49
    function editable_63 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TypeKeyCell (id=primaryPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 180, column 49
    function valueRoot_66 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TypeKeyCell (id=primaryPhone_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 180, column 49
    function value_64 () : typekey.PrimaryPhoneType {
      return aContact.PrimaryPhone
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=primaryEmail_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 202, column 43
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=primaryEmail_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 202, column 43
    function editable_70 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TextCell (id=primaryEmail_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 202, column 43
    function valueRoot_73 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=primaryEmail_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 202, column 43
    function value_71 () : java.lang.String {
      return aContact.EmailAddress1
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=alternateEmail_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 217, column 43
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=alternateEmail_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 217, column 43
    function editable_77 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TextCell (id=alternateEmail_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 217, column 43
    function valueRoot_80 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=alternateEmail_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 217, column 43
    function value_78 () : java.lang.String {
      return aContact.EmailAddress2
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 240, column 35
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 240, column 35
    function editable_84 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'encryptionExpression' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 240, column 35
    function encryptionExpression_88 (VALUE :  java.lang.String) : java.lang.String {
      return aContact.maskTaxId(VALUE)
    }
    
    // 'value' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 240, column 35
    function valueRoot_87 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 240, column 35
    function value_85 () : java.lang.String {
      return aContact.TaxID
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=taxFilingStatus_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 256, column 52
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.TaxFilingStatus = (__VALUE_TO_SET as typekey.TaxFilingStatusType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=taxFilingStatus_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 256, column 52
    function editable_92 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TypeKeyCell (id=taxFilingStatus_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 256, column 52
    function valueRoot_95 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TypeKeyCell (id=taxFilingStatus_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 256, column 52
    function value_93 () : typekey.TaxFilingStatusType {
      return aContact.TaxFilingStatus
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry7ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=dateOfBirth_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 271, column 41
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.DateOfBirth = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateCell (id=dateOfBirth_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 271, column 41
    function editable_99 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on DateCell (id=dateOfBirth_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 271, column 41
    function valueRoot_102 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on DateCell (id=dateOfBirth_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 271, column 41
    function value_100 () : java.util.Date {
      return aContact.DateOfBirth
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry8ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=gender_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 287, column 43
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.Gender = (__VALUE_TO_SET as typekey.GenderType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=gender_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 287, column 43
    function editable_106 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TypeKeyCell (id=gender_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 287, column 43
    function valueRoot_109 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TypeKeyCell (id=gender_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 287, column 43
    function value_107 () : typekey.GenderType {
      return aContact.Gender
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry9ExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=maritalStatus_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 303, column 46
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.MaritalStatus = (__VALUE_TO_SET as typekey.MaritalStatus)
    }
    
    // 'editable' attribute on TypeKeyCell (id=maritalStatus_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 303, column 46
    function editable_113 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TypeKeyCell (id=maritalStatus_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 303, column 46
    function valueRoot_116 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TypeKeyCell (id=maritalStatus_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 303, column 46
    function value_114 () : typekey.MaritalStatus {
      return aContact.MaritalStatus
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPerson.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=formerName_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 65, column 40
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.FormerName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=formerName_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 65, column 40
    function editable_10 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TextCell (id=formerName_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 65, column 40
    function valueRoot_13 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=formerName_Cell) at ContactDetailsRowSet.ABPerson.pcf: line 65, column 40
    function value_11 () : java.lang.String {
      return aContact.FormerName
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  
}