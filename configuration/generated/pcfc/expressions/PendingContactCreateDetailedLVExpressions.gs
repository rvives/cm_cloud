package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactCreateDetailedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PendingContactCreateDetailedLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactCreateDetailedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PendingContactCreateDetailedLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Contact_Cell) at PendingContactCreateDetailedLV.pcf: line 26, column 59
    function valueRoot_5 () : java.lang.Object {
      return pendingContactCreateView
    }
    
    // 'value' attribute on TextCell (id=Tags_Cell) at PendingContactCreateDetailedLV.pcf: line 38, column 70
    function value_10 () : java.lang.String {
      return pendingContactCreateView.ABContactTagsDescription
    }
    
    // 'value' attribute on TextCell (id=RequestingUser_Cell) at PendingContactCreateDetailedLV.pcf: line 43, column 60
    function value_13 () : java.lang.String {
      return pendingContactCreateView.RequestingUser
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at PendingContactCreateDetailedLV.pcf: line 48, column 55
    function value_16 () : java.lang.String {
      return pendingContactCreateView.RelatedTo
    }
    
    // 'value' attribute on TextCell (id=Contact_Cell) at PendingContactCreateDetailedLV.pcf: line 26, column 59
    function value_4 () : java.lang.String {
      return pendingContactCreateView.ABContactName
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PendingContactCreateDetailedLV.pcf: line 32, column 42
    function value_7 () : typekey.ABContact {
      return pendingContactCreateView.ABContactSubtype
    }
    
    property get pendingContactCreateView () : entity.PendingContactCreateView {
      return getIteratedValue(1) as entity.PendingContactCreateView
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactCreateDetailedLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PendingContactCreateDetailedLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=Contact_Cell) at PendingContactCreateDetailedLV.pcf: line 26, column 59
    function sortValue_0 (pendingContactCreateView :  entity.PendingContactCreateView) : java.lang.Object {
      return pendingContactCreateView.ABContactName
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PendingContactCreateDetailedLV.pcf: line 32, column 42
    function sortValue_1 (pendingContactCreateView :  entity.PendingContactCreateView) : java.lang.Object {
      return pendingContactCreateView.ABContactSubtype
    }
    
    // 'value' attribute on TextCell (id=RequestingUser_Cell) at PendingContactCreateDetailedLV.pcf: line 43, column 60
    function sortValue_2 (pendingContactCreateView :  entity.PendingContactCreateView) : java.lang.Object {
      return pendingContactCreateView.RequestingUser
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at PendingContactCreateDetailedLV.pcf: line 48, column 55
    function sortValue_3 (pendingContactCreateView :  entity.PendingContactCreateView) : java.lang.Object {
      return pendingContactCreateView.RelatedTo
    }
    
    // 'value' attribute on RowIterator at PendingContactCreateDetailedLV.pcf: line 16, column 91
    function value_19 () : gw.api.database.IQueryBeanResult<entity.PendingContactCreateView> {
      return gw.web.PendingChangesWebUtil.getPendingCreates()
    }
    
    
  }
  
  
}