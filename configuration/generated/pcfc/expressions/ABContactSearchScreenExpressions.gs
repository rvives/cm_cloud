package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ABContactSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactSearchScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/search/ABContactSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ABContactSearchScreen.pcf: line 19, column 23
    function initialValue_0 () : boolean {
      return !isSelectMode
    }
    
    // 'initialValue' attribute on Variable at ABContactSearchScreen.pcf: line 23, column 58
    function initialValue_1 () : gw.api.contact.ABProximitySearchPageHelper {
      return new gw.api.contact.ABProximitySearchPageHelper()
    }
    
    // 'initialValue' attribute on Variable at ABContactSearchScreen.pcf: line 27, column 89
    function initialValue_2 () : gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging {
      return new gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging()
    }
    
    property get CanPotentiallyDelete () : boolean {
      return getRequireValue("CanPotentiallyDelete", 0) as java.lang.Boolean
    }
    
    property set CanPotentiallyDelete ($arg :  boolean) {
      setRequireValue("CanPotentiallyDelete", 0, $arg)
    }
    
    property get PageHelper () : gw.api.contact.ABProximitySearchPageHelper {
      return getVariableValue("PageHelper", 0) as gw.api.contact.ABProximitySearchPageHelper
    }
    
    property set PageHelper ($arg :  gw.api.contact.ABProximitySearchPageHelper) {
      setVariableValue("PageHelper", 0, $arg)
    }
    
    property get isClearBundle () : boolean {
      return getVariableValue("isClearBundle", 0) as java.lang.Boolean
    }
    
    property set isClearBundle ($arg :  boolean) {
      setVariableValue("isClearBundle", 0, $arg)
    }
    
    property get isSelectMode () : boolean {
      return getRequireValue("isSelectMode", 0) as java.lang.Boolean
    }
    
    property set isSelectMode ($arg :  boolean) {
      setRequireValue("isSelectMode", 0, $arg)
    }
    
    property get requiredContactType () : Type {
      return getRequireValue("requiredContactType", 0) as Type
    }
    
    property set requiredContactType ($arg :  Type) {
      setRequireValue("requiredContactType", 0, $arg)
    }
    
    property get searchSpec () : gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging {
      return getVariableValue("searchSpec", 0) as gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging
    }
    
    property set searchSpec ($arg :  gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging) {
      setVariableValue("searchSpec", 0, $arg)
    }
    
    function createNewSearchCriteria() : ABContactSearchCriteria {
      var c = new ABContactSearchCriteria()
      c.ContactSubtype = typekey.ABContact.get(requiredContactType.RelativeName)
      c.Address.Country = null
      c.ProximitySearchCenter.Country = null
      return c
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/search/ABContactSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends ABContactSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RetrieveRequested) at ABContactSearchScreen.pcf: line 51, column 59
    function allCheckedRowsAction_6 (CheckedValues :  entity.ABContact[], CheckedValuesErrors :  java.util.Map) : void {
      PageHelper.getDrivingDirectionsCache().getSelectedDirections(CheckedValues, SearchCriteria);
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=ABContactSearchScreen_DeleteButton) at ABContactSearchScreen.pcf: line 60, column 45
    function checkedRowAction_8 (element :  entity.ABContact, CheckedValue :  entity.ABContact) : void {
      CheckedValue.remove()
    }
    
    // 'def' attribute on PanelRef at ABContactSearchScreen.pcf: line 39, column 93
    function def_onEnter_3 (def :  pcf.ContactSearchDV) : void {
      def.onEnter(requiredContactType, SearchCriteria, PageHelper, searchSpec)
    }
    
    // 'def' attribute on PanelRef at ABContactSearchScreen.pcf: line 41, column 129
    function def_onEnter_9 (def :  pcf.ContactSearchResultsLV) : void {
      def.onEnter(SearchResults, CanPotentiallyDelete, isSelectMode, PageHelper, SearchCriteria, searchSpec)
    }
    
    // 'def' attribute on PanelRef at ABContactSearchScreen.pcf: line 41, column 129
    function def_refreshVariables_10 (def :  pcf.ContactSearchResultsLV) : void {
      def.refreshVariables(SearchResults, CanPotentiallyDelete, isSelectMode, PageHelper, SearchCriteria, searchSpec)
    }
    
    // 'def' attribute on PanelRef at ABContactSearchScreen.pcf: line 39, column 93
    function def_refreshVariables_4 (def :  pcf.ContactSearchDV) : void {
      def.refreshVariables(requiredContactType, SearchCriteria, PageHelper, searchSpec)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at ABContactSearchScreen.pcf: line 37, column 77
    function maxSearchResults_11 () : java.lang.Object {
      return gw.api.system.ABConfigParameters.MaxContactSearchResults.getValue()
    }
    
    // 'searchCriteria' attribute on SearchPanel at ABContactSearchScreen.pcf: line 37, column 77
    function searchCriteria_13 () : entity.ABContactSearchCriteria {
      return createNewSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at ABContactSearchScreen.pcf: line 37, column 77
    function search_12 () : java.lang.Object {
      new gw.api.name.SearchNameOwner(SearchCriteria).clearNonvisibleFields(); return PageHelper.performProximitySearch(CurrentLocation,SearchCriteria,searchSpec,isClearBundle) as gw.api.database.IQueryBeanResult<ABContact>
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=RetrieveRequested) at ABContactSearchScreen.pcf: line 51, column 59
    function visible_5 () : java.lang.Boolean {
      return SearchCriteria.isProximitySearch()
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=ABContactSearchScreen_DeleteButton) at ABContactSearchScreen.pcf: line 60, column 45
    function visible_7 () : java.lang.Boolean {
      return CanPotentiallyDelete
    }
    
    property get SearchCriteria () : entity.ABContactSearchCriteria {
      return getCriteriaValue(1) as entity.ABContactSearchCriteria
    }
    
    property set SearchCriteria ($arg :  entity.ABContactSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get SearchResults () : gw.api.database.IQueryBeanResult<ABContact> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<ABContact>
    }
    
    
  }
  
  
}