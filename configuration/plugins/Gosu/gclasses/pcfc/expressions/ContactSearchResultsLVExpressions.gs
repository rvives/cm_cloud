package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ContactSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactSearchResultsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/search/ContactSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ContactSearchResultsLV.pcf: line 32, column 53
    function initialValue_0 () : gw.api.contact.DrivingDirectionsCache {
      return pageHelper.getDrivingDirectionsCache()
    }
    
    // 'label' attribute on TypeKeyCell (id=State_Cell) at ContactSearchResultsLV.pcf: line 76, column 38
    function label_6 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(searchCriteria.Address.Country).StateLabel
    }
    
    // 'label' attribute on TextCell (id=PostalCode_Cell) at ContactSearchResultsLV.pcf: line 80, column 56
    function label_8 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(searchCriteria.Address.Country).PostalCodeLabel
    }
    
    // 'sortBy' attribute on TextCell (id=DisplayName_Cell) at ContactSearchResultsLV.pcf: line 55, column 42
    function sortValue_1 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactSubtype_Cell) at ContactSearchResultsLV.pcf: line 90, column 42
    function sortValue_10 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact.Subtype
    }
    
    // 'value' attribute on TypeKeyCell (id=VendorAvailability_Cell) at ContactSearchResultsLV.pcf: line 95, column 55
    function sortValue_11 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact.VendorAvailability
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ContactSearchResultsLV.pcf: line 100, column 42
    function sortValue_12 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact.Score
    }
    
    // 'value' attribute on TypeKeyCell (id=CreationStatus_Cell) at ContactSearchResultsLV.pcf: line 61, column 55
    function sortValue_2 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact.CreateStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Address_Cell) at ContactSearchResultsLV.pcf: line 66, column 70
    function sortValue_4 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact.PrimaryAddress.AddressLine1
    }
    
    // 'sortBy' attribute on TextCell (id=City_Cell) at ContactSearchResultsLV.pcf: line 71, column 62
    function sortValue_5 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact.PrimaryAddress.City
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at ContactSearchResultsLV.pcf: line 76, column 38
    function sortValue_7 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact.PrimaryAddress.State
    }
    
    // 'value' attribute on TextCell (id=PostalCode_Cell) at ContactSearchResultsLV.pcf: line 80, column 56
    function sortValue_9 (abContact :  entity.ABContact) : java.lang.Object {
      return abContact.PrimaryAddress.PostalCode
    }
    
    // 'value' attribute on RowIterator at ContactSearchResultsLV.pcf: line 42, column 76
    function value_73 () : gw.api.database.IQueryBeanResult<entity.ABContact> {
      return SearchResults
    }
    
    // 'visible' attribute on TextCell (id=GCDistance_Cell) at ContactSearchResultsLV.pcf: line 109, column 57
    function visible_13 () : java.lang.Boolean {
      return searchCriteria.isProximitySearch()
    }
    
    // 'visible' attribute on TextCell (id=DrivingDistance_Cell) at ContactSearchResultsLV.pcf: line 116, column 74
    function visible_14 () : java.lang.Boolean {
      return pageHelper.displayDirectionsColumns(searchCriteria)
    }
    
    // 'visible' attribute on TypeKeyCell (id=CreationStatus_Cell) at ContactSearchResultsLV.pcf: line 61, column 55
    function visible_3 () : java.lang.Boolean {
      return searchSpec.IncludePendingCreates
    }
    
    property get CanPotentiallyDelete () : boolean {
      return getRequireValue("CanPotentiallyDelete", 0) as java.lang.Boolean
    }
    
    property set CanPotentiallyDelete ($arg :  boolean) {
      setRequireValue("CanPotentiallyDelete", 0, $arg)
    }
    
    property get SearchResults () : gw.api.database.IQueryBeanResult<ABContact> {
      return getRequireValue("SearchResults", 0) as gw.api.database.IQueryBeanResult<ABContact>
    }
    
    property set SearchResults ($arg :  gw.api.database.IQueryBeanResult<ABContact>) {
      setRequireValue("SearchResults", 0, $arg)
    }
    
    property get directions () : gw.api.contact.DrivingDirectionsCache {
      return getVariableValue("directions", 0) as gw.api.contact.DrivingDirectionsCache
    }
    
    property set directions ($arg :  gw.api.contact.DrivingDirectionsCache) {
      setVariableValue("directions", 0, $arg)
    }
    
    property get isSelectMode () : boolean {
      return getRequireValue("isSelectMode", 0) as java.lang.Boolean
    }
    
    property set isSelectMode ($arg :  boolean) {
      setRequireValue("isSelectMode", 0, $arg)
    }
    
    property get pageHelper () : gw.api.contact.ProximitySearchPageHelper {
      return getRequireValue("pageHelper", 0) as gw.api.contact.ProximitySearchPageHelper
    }
    
    property set pageHelper ($arg :  gw.api.contact.ProximitySearchPageHelper) {
      setRequireValue("pageHelper", 0, $arg)
    }
    
    property get searchCriteria () : ABContactSearchCriteria {
      return getRequireValue("searchCriteria", 0) as ABContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  ABContactSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchSpec () : gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging {
      return getRequireValue("searchSpec", 0) as gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging
    }
    
    property set searchSpec ($arg :  gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging) {
      setRequireValue("searchSpec", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/search/ContactSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=DisplayName_Cell) at ContactSearchResultsLV.pcf: line 55, column 42
    function action_18 () : void {
      gw.api.web.contact.ABContactUtil.viewContact(isSelectMode, abContact, CurrentLocation)
    }
    
    // 'action' attribute on TextCell (id=Directions_Cell) at ContactSearchResultsLV.pcf: line 131, column 74
    function action_67 () : void {
      AddressBookDirectionsPopup.push(directions.getCached(searchCriteria.ProximitySearchCenter, abContact.PrimaryAddress))
    }
    
    // 'action' attribute on TextCell (id=Directions_Cell) at ContactSearchResultsLV.pcf: line 131, column 74
    function action_dest_68 () : pcf.api.Destination {
      return pcf.AddressBookDirectionsPopup.createDestination(directions.getCached(searchCriteria.ProximitySearchCenter, abContact.PrimaryAddress))
    }
    
    // 'canPick' attribute on RowIterator at ContactSearchResultsLV.pcf: line 42, column 76
    function canPick_70 () : java.lang.Boolean {
      return !CanPotentiallyDelete
    }
    
    // 'checkBoxVisible' attribute on RowIterator at ContactSearchResultsLV.pcf: line 42, column 76
    function checkBoxVisible_71 () : java.lang.Boolean {
      return CanPotentiallyDelete or searchCriteria.isProximitySearch()
    }
    
    // 'condition' attribute on ToolbarFlag at ContactSearchResultsLV.pcf: line 45, column 34
    function condition_17 () : java.lang.Boolean {
      return perm.ABContact.delete(abContact)
    }
    
    // 'label' attribute on TypeKeyCell (id=State_Cell) at ContactSearchResultsLV.pcf: line 76, column 38
    function label_32 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(searchCriteria.Address.Country).StateLabel
    }
    
    // 'label' attribute on TextCell (id=PostalCode_Cell) at ContactSearchResultsLV.pcf: line 80, column 56
    function label_37 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(searchCriteria.Address.Country).PostalCodeLabel
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at ContactSearchResultsLV.pcf: line 55, column 42
    function valueRoot_20 () : java.lang.Object {
      return abContact
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ContactSearchResultsLV.pcf: line 66, column 70
    function valueRoot_27 () : java.lang.Object {
      return abContact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at ContactSearchResultsLV.pcf: line 55, column 42
    function value_19 () : java.lang.String {
      return abContact.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=CreationStatus_Cell) at ContactSearchResultsLV.pcf: line 61, column 55
    function value_22 () : typekey.ContactCreationApprovalStatus {
      return abContact.CreateStatus
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ContactSearchResultsLV.pcf: line 66, column 70
    function value_26 () : java.lang.String {
      return abContact.PrimaryAddress.AddressLine1DisplayValue
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at ContactSearchResultsLV.pcf: line 71, column 62
    function value_29 () : java.lang.String {
      return abContact.PrimaryAddress.CityDisplayValue
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at ContactSearchResultsLV.pcf: line 76, column 38
    function value_33 () : typekey.State {
      return abContact.PrimaryAddress.State
    }
    
    // 'value' attribute on TextCell (id=PostalCode_Cell) at ContactSearchResultsLV.pcf: line 80, column 56
    function value_38 () : java.lang.String {
      return abContact.PrimaryAddress.PostalCode
    }
    
    // 'value' attribute on TextCell (id=PrimaryPhone_Cell) at ContactSearchResultsLV.pcf: line 85, column 48
    function value_42 () : java.lang.String {
      return abContact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactSubtype_Cell) at ContactSearchResultsLV.pcf: line 90, column 42
    function value_45 () : typekey.ABContact {
      return abContact.Subtype
    }
    
    // 'value' attribute on TypeKeyCell (id=VendorAvailability_Cell) at ContactSearchResultsLV.pcf: line 95, column 55
    function value_48 () : typekey.VendorAvailabilityType {
      return abContact.VendorAvailability
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ContactSearchResultsLV.pcf: line 100, column 42
    function value_51 () : java.lang.Integer {
      return abContact.Score
    }
    
    // 'value' attribute on TextCell (id=GCDistance_Cell) at ContactSearchResultsLV.pcf: line 109, column 57
    function value_55 () : java.lang.String {
      return abContact.PrimaryAddress.getDistanceFromAsString(searchCriteria.ProximitySearchCenter)
    }
    
    // 'value' attribute on TextCell (id=DrivingDistance_Cell) at ContactSearchResultsLV.pcf: line 116, column 74
    function value_59 () : java.lang.String {
      return directions.getCached(searchCriteria.ProximitySearchCenter, abContact.PrimaryAddress).getTotalDistanceString()
    }
    
    // 'value' attribute on TextCell (id=DrivingTime_Cell) at ContactSearchResultsLV.pcf: line 123, column 74
    function value_63 () : java.lang.String {
      return directions.getCached(searchCriteria.ProximitySearchCenter, abContact.PrimaryAddress).getTotalTimeInMinutes()
    }
    
    // 'visible' attribute on TypeKeyCell (id=CreationStatus_Cell) at ContactSearchResultsLV.pcf: line 61, column 55
    function visible_24 () : java.lang.Boolean {
      return searchSpec.IncludePendingCreates
    }
    
    // 'valueVisible' attribute on TextCell (id=GCDistance_Cell) at ContactSearchResultsLV.pcf: line 109, column 57
    function visible_54 () : java.lang.Boolean {
      return (abContact.PrimaryAddress != null) and (abContact.PrimaryAddress.hasLocationInformation())
    }
    
    // 'visible' attribute on TextCell (id=GCDistance_Cell) at ContactSearchResultsLV.pcf: line 109, column 57
    function visible_56 () : java.lang.Boolean {
      return searchCriteria.isProximitySearch()
    }
    
    // 'valueVisible' attribute on TextCell (id=DrivingDistance_Cell) at ContactSearchResultsLV.pcf: line 116, column 74
    function visible_58 () : java.lang.Boolean {
      return directions.haveCached(searchCriteria.ProximitySearchCenter, abContact.PrimaryAddress)
    }
    
    // 'visible' attribute on TextCell (id=DrivingDistance_Cell) at ContactSearchResultsLV.pcf: line 116, column 74
    function visible_60 () : java.lang.Boolean {
      return pageHelper.displayDirectionsColumns(searchCriteria)
    }
    
    property get abContact () : entity.ABContact {
      return getIteratedValue(1) as entity.ABContact
    }
    
    
  }
  
  
}