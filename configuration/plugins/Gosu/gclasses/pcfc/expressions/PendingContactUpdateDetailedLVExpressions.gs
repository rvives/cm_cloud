package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactUpdateDetailedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PendingContactUpdateDetailedLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactUpdateDetailedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PendingContactUpdateDetailedLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Contact_Cell) at PendingContactUpdateDetailedLV.pcf: line 26, column 59
    function action_3 () : void {
      gw.api.web.contact.ABContactUtil.viewContact(true, pendingContactUpdateView.PendingContactUpdate.ABContact, CurrentLocation)
    }
    
    // 'value' attribute on TextCell (id=Contact_Cell) at PendingContactUpdateDetailedLV.pcf: line 26, column 59
    function valueRoot_5 () : java.lang.Object {
      return pendingContactUpdateView
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at PendingContactUpdateDetailedLV.pcf: line 37, column 55
    function value_10 () : java.lang.String {
      return pendingContactUpdateView.RelatedTo
    }
    
    // 'value' attribute on TextCell (id=Contact_Cell) at PendingContactUpdateDetailedLV.pcf: line 26, column 59
    function value_4 () : java.lang.String {
      return pendingContactUpdateView.ABContactName
    }
    
    // 'value' attribute on TextCell (id=RequestingUser_Cell) at PendingContactUpdateDetailedLV.pcf: line 32, column 60
    function value_7 () : java.lang.String {
      return pendingContactUpdateView.RequestingUser
    }
    
    property get pendingContactUpdateView () : entity.PendingContactUpdateView {
      return getIteratedValue(1) as entity.PendingContactUpdateView
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactUpdateDetailedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PendingContactUpdateDetailedLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Contact_Cell) at PendingContactUpdateDetailedLV.pcf: line 26, column 59
    function sortValue_0 (pendingContactUpdateView :  entity.PendingContactUpdateView) : java.lang.Object {
      return pendingContactUpdateView.ABContactName
    }
    
    // 'value' attribute on TextCell (id=RequestingUser_Cell) at PendingContactUpdateDetailedLV.pcf: line 32, column 60
    function sortValue_1 (pendingContactUpdateView :  entity.PendingContactUpdateView) : java.lang.Object {
      return pendingContactUpdateView.RequestingUser
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at PendingContactUpdateDetailedLV.pcf: line 37, column 55
    function sortValue_2 (pendingContactUpdateView :  entity.PendingContactUpdateView) : java.lang.Object {
      return pendingContactUpdateView.RelatedTo
    }
    
    // 'value' attribute on RowIterator at PendingContactUpdateDetailedLV.pcf: line 16, column 91
    function value_13 () : gw.api.database.IQueryBeanResult<entity.PendingContactUpdateView> {
      return gw.web.PendingChangesWebUtil.getPendingUpdates()
    }
    
    
  }
  
  
}