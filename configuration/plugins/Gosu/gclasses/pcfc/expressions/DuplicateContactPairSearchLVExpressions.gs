package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.Queries
uses gw.api.database.Query
uses gw.api.database.Relop
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateContactPairSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DuplicateContactPairSearchLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateContactPairSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DuplicateContactPairSearchLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=ContactDateDetected_Cell) at DuplicateContactPairSearchLV.pcf: line 50, column 103
    function sortValue_0 (duplicateContactPair :  entity.DuplicateContactPair) : java.lang.Object {
      return duplicateContactPair.BatchRun.LastRunTime
    }
    
    // 'sortBy' attribute on FormatCell (id=name) at DuplicateContactPairSearchLV.pcf: line 55, column 25
    function sortValue_1 (duplicateContactPair :  entity.DuplicateContactPair) : java.lang.Object {
      return duplicateContactPair.Contact.Keyword
    }
    
    // 'value' attribute on RowIterator (id=duplicateContactPairIterator) at DuplicateContactPairSearchLV.pcf: line 21, column 87
    function value_37 () : gw.api.database.IQueryBeanResult<entity.DuplicateContactPair> {
      return duplicateContactPairs
    }
    
    property get duplicateContactPairs () : gw.api.database.IQueryBeanResult<DuplicateContactPair> {
      return getRequireValue("duplicateContactPairs", 0) as gw.api.database.IQueryBeanResult<DuplicateContactPair>
    }
    
    property set duplicateContactPairs ($arg :  gw.api.database.IQueryBeanResult<DuplicateContactPair>) {
      setRequireValue("duplicateContactPairs", 0, $arg)
    }
    
    
          function getText(pair: entity.DuplicateContactPair): String {
            if (pair.KeptContact.Subtype != pair.RetiredContact.Subtype)
              return DisplayKey.get("Web.Contacts.MergeContacts.TypeMismatch")
            if (!queryPending(pair.RetiredContact) || !queryPending(pair.KeptContact))
              return DisplayKey.get("Web.Contacts.MergeContacts.DuplicateContactPair") + "\n" + DisplayKey.get("Web.Contacts.MergeContacts.HasPendingChanges")
    
            return ""
          }
    
          function showText(pair: entity.DuplicateContactPair): Boolean {
            if (pair.KeptContact.Subtype != pair.RetiredContact.Subtype or !queryPending(pair.RetiredContact) or !queryPending(pair.KeptContact))
              return true
    
            return false
          }
    
          function queryPending(contact: ABContact): Boolean {
            var query: Query<PendingContactUpdate> = Queries.createQuery(PendingContactUpdate)
            var result = query.compare("ABContact", Relop.Equals, contact).select()
            return result.Empty
          }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateContactPairSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DuplicateContactPairSearchLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=KeptContactNameLink) at DuplicateContactPairSearchLV.pcf: line 60, column 69
    function action_11 () : void {
      gw.api.web.contact.ABContactUtil.viewContact(true, duplicateContactPair.KeptContact, CurrentLocation)
    }
    
    // 'action' attribute on Link (id=RetiredContactNameLink) at DuplicateContactPairSearchLV.pcf: line 66, column 72
    function action_13 () : void {
      gw.api.web.contact.ABContactUtil.viewContact(true, duplicateContactPair.RetiredContact, CurrentLocation)
    }
    
    // 'action' attribute on Link (id=Review) at DuplicateContactPairSearchLV.pcf: line 29, column 151
    function action_3 () : void {
      ReviewDuplicateContactsPopup.push(new gw.web.merge.DuplicatePairWrapper(duplicateContactPair))
    }
    
    // 'action' attribute on Link (id=Review) at DuplicateContactPairSearchLV.pcf: line 29, column 151
    function action_dest_4 () : pcf.api.Destination {
      return pcf.ReviewDuplicateContactsPopup.createDestination(new gw.web.merge.DuplicatePairWrapper(duplicateContactPair))
    }
    
    // 'label' attribute on Link (id=KeptContactNameLink) at DuplicateContactPairSearchLV.pcf: line 60, column 69
    function label_12 () : java.lang.Object {
      return duplicateContactPair.KeptContact.DisplayName
    }
    
    // 'label' attribute on Link (id=RetiredContactNameLink) at DuplicateContactPairSearchLV.pcf: line 66, column 72
    function label_14 () : java.lang.Object {
      return duplicateContactPair.RetiredContact.DisplayName
    }
    
    // 'label' attribute on Link (id=TypeMismatch) at DuplicateContactPairSearchLV.pcf: line 34, column 55
    function label_6 () : java.lang.Object {
      return getText(duplicateContactPair)
    }
    
    // 'value' attribute on TextInput (id=creationStatus_Input) at DuplicateContactPairSearchLV.pcf: line 76, column 64
    function valueRoot_16 () : java.lang.Object {
      return duplicateContactPair.KeptContact
    }
    
    // 'value' attribute on TextInput (id=duplicateCreationStatus_Input) at DuplicateContactPairSearchLV.pcf: line 80, column 64
    function valueRoot_19 () : java.lang.Object {
      return duplicateContactPair.RetiredContact
    }
    
    // 'value' attribute on TextInput (id=creationStatus_Input) at DuplicateContactPairSearchLV.pcf: line 76, column 64
    function value_15 () : typekey.ContactCreationApprovalStatus {
      return duplicateContactPair.KeptContact.CreateStatus
    }
    
    // 'value' attribute on TextInput (id=duplicateCreationStatus_Input) at DuplicateContactPairSearchLV.pcf: line 80, column 64
    function value_18 () : typekey.ContactCreationApprovalStatus {
      return duplicateContactPair.RetiredContact.CreateStatus
    }
    
    // 'value' attribute on TextInput (id=contactAddress_Input) at DuplicateContactPairSearchLV.pcf: line 88, column 41
    function value_21 () : entity.Address {
      return duplicateContactPair.KeptContact.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=duplicateContactAddress_Input) at DuplicateContactPairSearchLV.pcf: line 92, column 41
    function value_24 () : entity.Address {
      return duplicateContactPair.RetiredContact.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=contactPhone_Input) at DuplicateContactPairSearchLV.pcf: line 99, column 73
    function value_27 () : java.lang.String {
      return duplicateContactPair.KeptContact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=duplicateContactPhone_Input) at DuplicateContactPairSearchLV.pcf: line 102, column 76
    function value_30 () : java.lang.String {
      return duplicateContactPair.RetiredContact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=contactTaxId_Input) at DuplicateContactPairSearchLV.pcf: line 109, column 113
    function value_33 () : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(duplicateContactPair.KeptContact.TaxID)
    }
    
    // 'value' attribute on TextInput (id=duplicateContactTaxId_Input) at DuplicateContactPairSearchLV.pcf: line 112, column 116
    function value_35 () : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(duplicateContactPair.RetiredContact.TaxID)
    }
    
    // 'value' attribute on TextCell (id=ContactMatchType_Cell) at DuplicateContactPairSearchLV.pcf: line 42, column 177
    function value_7 () : java.lang.String {
      return duplicateContactPair.Exact ? DisplayKey.get("Web.Contacts.MergeContacts.Exact") : DisplayKey.get("Web.Contacts.MergeContacts.Potential")
    }
    
    // 'value' attribute on TextCell (id=ContactDateDetected_Cell) at DuplicateContactPairSearchLV.pcf: line 50, column 103
    function value_9 () : java.lang.String {
      return duplicateContactPair.BatchRun.LastRunTime.formatDate(gw.i18n.DateTimeFormat.SHORT)
    }
    
    // 'visible' attribute on Link (id=Review) at DuplicateContactPairSearchLV.pcf: line 29, column 151
    function visible_2 () : java.lang.Boolean {
      return not showText(duplicateContactPair)//not(duplicateContactPair.Contact.Subtype != duplicateContactPair.DuplicateContact.Subtype)
    }
    
    // 'visible' attribute on Link (id=TypeMismatch) at DuplicateContactPairSearchLV.pcf: line 34, column 55
    function visible_5 () : java.lang.Boolean {
      return showText(duplicateContactPair)
    }
    
    property get duplicateContactPair () : entity.DuplicateContactPair {
      return getIteratedValue(1) as entity.DuplicateContactPair
    }
    
    
  }
  
  
}