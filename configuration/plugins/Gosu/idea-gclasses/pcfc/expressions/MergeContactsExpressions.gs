package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/MergeContacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MergeContactsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/MergeContacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DuplicateContactPairSearchExpressionsImpl extends MergeContactsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=IgnoreButton) at MergeContacts.pcf: line 32, column 96
    function checkedRowAction_2 (element :  entity.DuplicateContactPair, CheckedValue :  entity.DuplicateContactPair) : void {
      CheckedValue.retire(); CheckedValue.Bundle.commit();
    }
    
    // 'def' attribute on PanelRef at MergeContacts.pcf: line 21, column 63
    function def_onEnter_0 (def :  pcf.DuplicateContactPairSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at MergeContacts.pcf: line 23, column 55
    function def_onEnter_3 (def :  pcf.DuplicateContactPairSearchLV) : void {
      def.onEnter(results)
    }
    
    // 'def' attribute on PanelRef at MergeContacts.pcf: line 21, column 63
    function def_refreshVariables_1 (def :  pcf.DuplicateContactPairSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at MergeContacts.pcf: line 23, column 55
    function def_refreshVariables_4 (def :  pcf.DuplicateContactPairSearchLV) : void {
      def.refreshVariables(results)
    }
    
    // 'searchCriteria' attribute on SearchPanel (id=DuplicateContactPairSearch) at MergeContacts.pcf: line 19, column 90
    function searchCriteria_6 () : gw.domain.contact.DuplicateContactSearchCriteria {
      return new gw.domain.contact.DuplicateContactSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel (id=DuplicateContactPairSearch) at MergeContacts.pcf: line 19, column 90
    function search_5 () : java.lang.Object {
      return gw.domain.contact.DuplicateContactPairFinder.findDuplicateContactPairs(searchCriteria)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<DuplicateContactPair> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<DuplicateContactPair>
    }
    
    property get searchCriteria () : gw.domain.contact.DuplicateContactSearchCriteria {
      return getCriteriaValue(1) as gw.domain.contact.DuplicateContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.domain.contact.DuplicateContactSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/MergeContacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MergeContactsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=MergeContacts) at MergeContacts.pcf: line 9, column 74
    static function canVisit_7 () : java.lang.Boolean {
      return perm.ABContact.viewmerge
    }
    
    // Page (id=MergeContacts) at MergeContacts.pcf: line 9, column 74
    static function parent_8 () : pcf.api.Destination {
      return pcf.ABContacts.createDestination()
    }
    
    override property get CurrentLocation () : pcf.MergeContacts {
      return super.CurrentLocation as pcf.MergeContacts
    }
    
    
  }
  
  
}