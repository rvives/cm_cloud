package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.util.ArrayList
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactMatchWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PendingContactMatchWorksheetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactMatchWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PendingContactMatchWorksheetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AcceptContact_Cell) at PendingContactMatchWorksheet.pcf: line 37, column 86
    function action_5 () : void {
      gw.api.web.contact.PendingContactChangeUtil.pickDuplicateContact(contact, originalContact, CurrentLocation)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at PendingContactMatchWorksheet.pcf: line 46, column 44
    function action_8 () : void {
      gw.api.web.contact.PendingContactChangeUtil.showDetailView(contact)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PendingContactMatchWorksheet.pcf: line 46, column 44
    function valueRoot_10 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at PendingContactMatchWorksheet.pcf: line 51, column 43
    function value_12 () : entity.Address {
      return contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=PhoneNumber_Cell) at PendingContactMatchWorksheet.pcf: line 55, column 50
    function value_15 () : java.lang.String {
      return contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=MatchType_Cell) at PendingContactMatchWorksheet.pcf: line 41, column 46
    function value_6 () : java.lang.String {
      return getMatchType(contact)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PendingContactMatchWorksheet.pcf: line 46, column 44
    function value_9 () : java.lang.String {
      return contact.DisplayName
    }
    
    property get contact () : entity.ABContact {
      return getIteratedValue(1) as entity.ABContact
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactMatchWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PendingContactMatchWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (originalContact :  ABContact, matchResults :  gw.api.webservice.addressbook.contactapi.ABContactSearchResult) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=PendingContactMatchWorksheet_CancelButton) at PendingContactMatchWorksheet.pcf: line 24, column 62
    function action_0 () : void {
      CurrentLocation.cancel()
    }
    
    // 'value' attribute on TextCell (id=MatchType_Cell) at PendingContactMatchWorksheet.pcf: line 41, column 46
    function sortValue_1 (contact :  entity.ABContact) : java.lang.Object {
      return getMatchType(contact)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PendingContactMatchWorksheet.pcf: line 46, column 44
    function sortValue_2 (contact :  entity.ABContact) : java.lang.Object {
      return contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at PendingContactMatchWorksheet.pcf: line 51, column 43
    function sortValue_3 (contact :  entity.ABContact) : java.lang.Object {
      return contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=PhoneNumber_Cell) at PendingContactMatchWorksheet.pcf: line 55, column 50
    function sortValue_4 (contact :  entity.ABContact) : java.lang.Object {
      return contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on RowIterator at PendingContactMatchWorksheet.pcf: line 32, column 67
    function value_18 () : java.util.ArrayList<entity.ABContact> {
      return gw.api.web.contact.PendingContactChangeUtil.getDuplicates(originalContact, matchResults)
    }
    
    override property get CurrentLocation () : pcf.PendingContactMatchWorksheet {
      return super.CurrentLocation as pcf.PendingContactMatchWorksheet
    }
    
    property get matchResults () : gw.api.webservice.addressbook.contactapi.ABContactSearchResult {
      return getVariableValue("matchResults", 0) as gw.api.webservice.addressbook.contactapi.ABContactSearchResult
    }
    
    property set matchResults ($arg :  gw.api.webservice.addressbook.contactapi.ABContactSearchResult) {
      setVariableValue("matchResults", 0, $arg)
    }
    
    property get originalContact () : ABContact {
      return getVariableValue("originalContact", 0) as ABContact
    }
    
    property set originalContact ($arg :  ABContact) {
      setVariableValue("originalContact", 0, $arg)
    }
    
    
    function getDuplicates() : ArrayList<ABContact> {  
      var list = new ArrayList<ABContact>()
      for (c in matchResults.Results) {
        if (c.PublicID != originalContact.PublicID and c.CreateStatus != ContactCreationApprovalStatus.TC_PENDING_APPROVAL) {
          list.add(c)  
        }
      }
      return list
    }
    
    function getMatchType(contact : ABContact) : String {
      var exact = gw.api.web.contact.PendingContactChangeUtil.isContactExact(contact, matchResults)
      return exact ? DisplayKey.get("Web.Contacts.MergeContacts.Exact") : DisplayKey.get("Web.Contacts.MergeContacts.Potential")
    }
    
    
  }
  
  
}