package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactHistoryLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactHistoryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactHistoryLV.pcf: line 23, column 72
    function filter_0 () : gw.api.filters.IFilter {
      return new gw.api.web.history.HistoryFilters.Last30Days()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactHistoryLV.pcf: line 25, column 72
    function filter_1 () : gw.api.filters.IFilter {
      return new gw.api.web.history.HistoryFilters.Last60Days()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactHistoryLV.pcf: line 28, column 33
    function filter_2 () : gw.api.filters.IFilter {
      return new gw.api.web.history.HistoryFilters.Last90Days()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactHistoryLV.pcf: line 30, column 73
    function filter_3 () : gw.api.filters.IFilter {
      return new gw.api.web.history.HistoryFilters.Last120Days()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactHistoryLV.pcf: line 32, column 73
    function filter_4 () : gw.api.filters.IFilter {
      return new gw.api.web.history.HistoryFilters.Last180Days()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactHistoryLV.pcf: line 34, column 70
    function filter_5 () : gw.api.filters.IFilter {
      return new gw.api.web.history.HistoryFilters.LastYear()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactHistoryLV.pcf: line 36, column 72
    function filter_6 () : gw.api.filters.IFilter {
      return new gw.api.web.history.HistoryFilters.Last3Years()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ContactHistoryLV.pcf: line 38, column 65
    function filter_7 () : gw.api.filters.IFilter {
      return new gw.api.web.history.HistoryFilters.All()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ContactHistoryLV.pcf: line 44, column 140
    function filters_8 () : gw.api.filters.IFilter[] {
      return new gw.api.filters.TypeKeyFilterSet( History.Type.TypeInfo.getProperty( "CustomType" ) ).getFilterOptions()
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at ContactHistoryLV.pcf: line 55, column 50
    function sortValue_10 (contactHistory :  entity.ContactHistory) : java.lang.Object {
      return contactHistory.UpdateUserName
    }
    
    // 'value' attribute on TextCell (id=Reviewer_Cell) at ContactHistoryLV.pcf: line 59, column 48
    function sortValue_11 (contactHistory :  entity.ContactHistory) : java.lang.Object {
      return contactHistory.ReviewerName
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at ContactHistoryLV.pcf: line 66, column 50
    function sortValue_12 (contactHistory :  entity.ContactHistory) : java.lang.Object {
      return contactHistory.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ContactHistoryLV.pcf: line 70, column 47
    function sortValue_13 (contactHistory :  entity.ContactHistory) : java.lang.Object {
      return contactHistory.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ContactHistoryLV.pcf: line 51, column 50
    function sortValue_9 (contactHistory :  entity.ContactHistory) : java.lang.Object {
      return contactHistory.CustomType
    }
    
    // 'value' attribute on RowIterator at ContactHistoryLV.pcf: line 18, column 81
    function value_34 () : gw.api.database.IQueryBeanResult<entity.ContactHistory> {
      return gw.api.database.Query.make(entity.ContactHistory).compare("ABContact", Equals, contact).select()
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactHistoryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=ChangesLink_Cell) at ContactHistoryLV.pcf: line 77, column 130
    function actionAvailable_31 () : java.lang.Boolean {
      return contactHistory.TrackedChanges.length > 0
    }
    
    // 'action' attribute on TextCell (id=ChangesLink_Cell) at ContactHistoryLV.pcf: line 77, column 130
    function action_29 () : void {
      ContactHistoryDetailPopup.push(contactHistory)
    }
    
    // 'action' attribute on TextCell (id=ChangesLink_Cell) at ContactHistoryLV.pcf: line 77, column 130
    function action_dest_30 () : pcf.api.Destination {
      return pcf.ContactHistoryDetailPopup.createDestination(contactHistory)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ContactHistoryLV.pcf: line 51, column 50
    function valueRoot_15 () : java.lang.Object {
      return contactHistory
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ContactHistoryLV.pcf: line 51, column 50
    function value_14 () : typekey.CustomHistoryType {
      return contactHistory.CustomType
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at ContactHistoryLV.pcf: line 55, column 50
    function value_17 () : java.lang.String {
      return contactHistory.UpdateUserName
    }
    
    // 'value' attribute on TextCell (id=Reviewer_Cell) at ContactHistoryLV.pcf: line 59, column 48
    function value_20 () : java.lang.String {
      return contactHistory.ReviewerName
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at ContactHistoryLV.pcf: line 66, column 50
    function value_23 () : java.util.Date {
      return contactHistory.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ContactHistoryLV.pcf: line 70, column 47
    function value_26 () : java.lang.String {
      return contactHistory.Description
    }
    
    // 'value' attribute on TextCell (id=ChangesLink_Cell) at ContactHistoryLV.pcf: line 77, column 130
    function value_32 () : java.lang.String {
      return contactHistory.TrackedChanges.length > 0 ? DisplayKey.get("Web.ContactHistoryLV.Changes") : null
    }
    
    property get contactHistory () : entity.ContactHistory {
      return getIteratedValue(1) as entity.ContactHistory
    }
    
    
  }
  
  
}