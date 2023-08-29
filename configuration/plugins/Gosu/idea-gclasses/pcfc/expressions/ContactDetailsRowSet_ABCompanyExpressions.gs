package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailsRowSet_ABCompanyExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef (id=tag) at ContactDetailsRowSet.ABCompany.pcf: line 71, column 17
    function def_onEnter_18 (def :  pcf.ContactTagRowSet) : void {
      def.onEnter(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 73, column 89
    function def_onEnter_20 (def :  pcf.ContactInfoRowSet) : void {
      def.onEnter(keptContact, retiredContact, mergedContact, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 75, column 70
    function def_onEnter_22 (def :  pcf.NotesRowSet) : void {
      def.onEnter(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 78, column 37
    function def_onEnter_24 (def :  pcf.ABCompanyVendorRowSet_ABCompanyVendor) : void {
      def.onEnter(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 78, column 37
    function def_onEnter_26 (def :  pcf.ABCompanyVendorRowSet_default) : void {
      def.onEnter(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_onEnter_29 (def :  pcf.ABCompanyAdditionalInfoRowSet_ABAutoRepairShop) : void {
      def.onEnter(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_onEnter_31 (def :  pcf.ABCompanyAdditionalInfoRowSet_ABAutoTowingAgcy) : void {
      def.onEnter(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_onEnter_33 (def :  pcf.ABCompanyAdditionalInfoRowSet_ABLawFirm) : void {
      def.onEnter(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_onEnter_35 (def :  pcf.ABCompanyAdditionalInfoRowSet_ABMedicalCareOrg) : void {
      def.onEnter(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_onEnter_37 (def :  pcf.ABCompanyAdditionalInfoRowSet_default) : void {
      def.onEnter(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 52, column 54
    function def_onEnter_5 (def :  pcf.ABCompanyMergeDetailsRowSet_Japan) : void {
      def.onEnter(companies, mergedCompany, nameOwner)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 52, column 54
    function def_onEnter_7 (def :  pcf.ABCompanyMergeDetailsRowSet_default) : void {
      def.onEnter(companies, mergedCompany, nameOwner)
    }
    
    // 'def' attribute on RowSetRef (id=tag) at ContactDetailsRowSet.ABCompany.pcf: line 71, column 17
    function def_refreshVariables_19 (def :  pcf.ContactTagRowSet) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 73, column 89
    function def_refreshVariables_21 (def :  pcf.ContactInfoRowSet) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 75, column 70
    function def_refreshVariables_23 (def :  pcf.NotesRowSet) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 78, column 37
    function def_refreshVariables_25 (def :  pcf.ABCompanyVendorRowSet_ABCompanyVendor) : void {
      def.refreshVariables(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 78, column 37
    function def_refreshVariables_27 (def :  pcf.ABCompanyVendorRowSet_default) : void {
      def.refreshVariables(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_refreshVariables_30 (def :  pcf.ABCompanyAdditionalInfoRowSet_ABAutoRepairShop) : void {
      def.refreshVariables(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_refreshVariables_32 (def :  pcf.ABCompanyAdditionalInfoRowSet_ABAutoTowingAgcy) : void {
      def.refreshVariables(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_refreshVariables_34 (def :  pcf.ABCompanyAdditionalInfoRowSet_ABLawFirm) : void {
      def.refreshVariables(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_refreshVariables_36 (def :  pcf.ABCompanyAdditionalInfoRowSet_ABMedicalCareOrg) : void {
      def.refreshVariables(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 81, column 37
    function def_refreshVariables_38 (def :  pcf.ABCompanyAdditionalInfoRowSet_default) : void {
      def.refreshVariables(keptCompany, retiredCompany, mergedCompany)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 52, column 54
    function def_refreshVariables_6 (def :  pcf.ABCompanyMergeDetailsRowSet_Japan) : void {
      def.refreshVariables(companies, mergedCompany, nameOwner)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 52, column 54
    function def_refreshVariables_8 (def :  pcf.ABCompanyMergeDetailsRowSet_default) : void {
      def.refreshVariables(companies, mergedCompany, nameOwner)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABCompany.pcf: line 26, column 32
    function initialValue_0 () : entity.ABCompany {
      return keptContact as ABCompany
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABCompany.pcf: line 30, column 32
    function initialValue_1 () : entity.ABCompany {
      return retiredContact as ABCompany
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABCompany.pcf: line 34, column 32
    function initialValue_2 () : entity.ABCompany {
      return (mergedContact as ABCompany)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABCompany.pcf: line 38, column 27
    function initialValue_3 () : ABCompany[] {
      return {keptCompany, retiredCompany, mergedCompany}
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABCompany.pcf: line 42, column 37
    function initialValue_4 () : gw.api.name.NameOwner {
      return new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(mergedCompany as ABCompany))
    }
    
    // 'mode' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 78, column 37
    function mode_28 () : java.lang.Object {
      return mergedCompany.Subtype
    }
    
    // 'mode' attribute on RowSetRef at ContactDetailsRowSet.ABCompany.pcf: line 52, column 54
    function mode_9 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on CellIterator (id=taxId) at ContactDetailsRowSet.ABCompany.pcf: line 61, column 40
    function value_17 () : entity.ABCompany[] {
      return companies
    }
    
    property get addressDataHolder () : gw.web.merge.MergeContactsAddressHolder {
      return getRequireValue("addressDataHolder", 0) as gw.web.merge.MergeContactsAddressHolder
    }
    
    property set addressDataHolder ($arg :  gw.web.merge.MergeContactsAddressHolder) {
      setRequireValue("addressDataHolder", 0, $arg)
    }
    
    property get companies () : ABCompany[] {
      return getVariableValue("companies", 0) as ABCompany[]
    }
    
    property set companies ($arg :  ABCompany[]) {
      setVariableValue("companies", 0, $arg)
    }
    
    property get keptCompany () : entity.ABCompany {
      return getVariableValue("keptCompany", 0) as entity.ABCompany
    }
    
    property set keptCompany ($arg :  entity.ABCompany) {
      setVariableValue("keptCompany", 0, $arg)
    }
    
    property get keptContact () : entity.ABContact {
      return getRequireValue("keptContact", 0) as entity.ABContact
    }
    
    property set keptContact ($arg :  entity.ABContact) {
      setRequireValue("keptContact", 0, $arg)
    }
    
    property get mergedCompany () : entity.ABCompany {
      return getVariableValue("mergedCompany", 0) as entity.ABCompany
    }
    
    property set mergedCompany ($arg :  entity.ABCompany) {
      setVariableValue("mergedCompany", 0, $arg)
    }
    
    property get mergedContact () : entity.ABContact {
      return getRequireValue("mergedContact", 0) as entity.ABContact
    }
    
    property set mergedContact ($arg :  entity.ABContact) {
      setRequireValue("mergedContact", 0, $arg)
    }
    
    property get nameOwner () : gw.api.name.NameOwner {
      return getVariableValue("nameOwner", 0) as gw.api.name.NameOwner
    }
    
    property set nameOwner ($arg :  gw.api.name.NameOwner) {
      setVariableValue("nameOwner", 0, $arg)
    }
    
    property get phoneHolder () : gw.web.merge.MergeContactsPhoneHolder {
      return getRequireValue("phoneHolder", 0) as gw.web.merge.MergeContactsPhoneHolder
    }
    
    property set phoneHolder ($arg :  gw.web.merge.MergeContactsPhoneHolder) {
      setRequireValue("phoneHolder", 0, $arg)
    }
    
    property get retiredCompany () : entity.ABCompany {
      return getVariableValue("retiredCompany", 0) as entity.ABCompany
    }
    
    property set retiredCompany ($arg :  entity.ABCompany) {
      setVariableValue("retiredCompany", 0, $arg)
    }
    
    property get retiredContact () : entity.ABContact {
      return getRequireValue("retiredContact", 0) as entity.ABContact
    }
    
    property set retiredContact ($arg :  entity.ABContact) {
      setRequireValue("retiredContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABCompany.pcf: line 66, column 35
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABCompany.pcf: line 66, column 35
    function editable_10 () : java.lang.Boolean {
      return aContact == mergedCompany
    }
    
    // 'encryptionExpression' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABCompany.pcf: line 66, column 35
    function encryptionExpression_14 (VALUE :  java.lang.String) : java.lang.String {
      return aContact.maskTaxId(VALUE)
    }
    
    // 'value' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABCompany.pcf: line 66, column 35
    function valueRoot_13 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on PrivacyCell (id=taxId_Cell) at ContactDetailsRowSet.ABCompany.pcf: line 66, column 35
    function value_11 () : java.lang.String {
      return aContact.TaxID
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  
}