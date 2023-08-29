package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.pl.persistence.core.Key
uses gw.api.database.Query
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChanges.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PendingChangesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChanges.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends PendingUpdatesListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=AlreadyAppliedButton_Input) at PendingChanges.pcf: line 80, column 123
    function action_13 () : void {
      gw.web.PendingChangesWebUtil.rejectAlreadyAppliedPendingChanges(selectedPendingContactUpdateView.PendingContactUpdate, CurrentLocation)//gw.api.web.contact.PendingContactChangeUtil.rejectChange(selectedPendingContactUpdateView.PendingContactUpdate, CurrentLocation) //
    }
    
    // 'def' attribute on PanelRef (id=ContactComparisonLVPanelRef) at PendingChanges.pcf: line 64, column 53
    function def_onEnter_9 (def :  pcf.ContactComparisonLV) : void {
      def.onEnter(selectedPendingContactUpdateView.PendingContactUpdate, updateDiffDisplay, findContactByID(selectedPendingContactUpdateView.ABContact))
    }
    
    // 'def' attribute on PanelRef (id=ContactComparisonLVPanelRef) at PendingChanges.pcf: line 64, column 53
    function def_refreshVariables_10 (def :  pcf.ContactComparisonLV) : void {
      def.refreshVariables(selectedPendingContactUpdateView.PendingContactUpdate, updateDiffDisplay, findContactByID(selectedPendingContactUpdateView.ABContact))
    }
    
    // 'initialValue' attribute on Variable at PendingChanges.pcf: line 52, column 60
    function initialValue_7 () : gw.api.bean.compare.ui.DiffDisplay {
      return gw.api.web.contact.PendingContactChangeUtil.createDiffDisplayTree(selectedPendingContactUpdateView.PendingContactUpdate)
    }
    
    // 'initialValue' attribute on Variable at PendingChanges.pcf: line 57, column 33
    function initialValue_8 () : boolean {
      return !gw.api.contact.pendingchanges.DiffDisplays.getVisibleChildren(updateDiffDisplay).Empty
    }
    
    // 'title' attribute on Card (id=PendingUpdatesContactCard) at PendingChanges.pcf: line 61, column 51
    function title_12 () : java.lang.String {
      return null
    }
    
    // 'visible' attribute on Card (id=PendingUpdatesContactCard) at PendingChanges.pcf: line 61, column 51
    function visible_11 () : java.lang.Boolean {
      return pendingUpdateHasChanges
    }
    
    // 'visible' attribute on Card (id=PendingChangeAlreadyAppliedCard) at PendingChanges.pcf: line 69, column 52
    function visible_14 () : java.lang.Boolean {
      return !pendingUpdateHasChanges
    }
    
    property get pendingUpdateHasChanges () : boolean {
      return getVariableValue("pendingUpdateHasChanges", 2) as java.lang.Boolean
    }
    
    property set pendingUpdateHasChanges ($arg :  boolean) {
      setVariableValue("pendingUpdateHasChanges", 2, $arg)
    }
    
    property get updateDiffDisplay () : gw.api.bean.compare.ui.DiffDisplay {
      return getVariableValue("updateDiffDisplay", 2) as gw.api.bean.compare.ui.DiffDisplay
    }
    
    property set updateDiffDisplay ($arg :  gw.api.bean.compare.ui.DiffDisplay) {
      setVariableValue("updateDiffDisplay", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChanges.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends PendingCreatesListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 138, column 106
    function def_onEnter_35 (def :  pcf.ABAddressesLV) : void {
      def.onEnter(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 146, column 67
    function def_onEnter_37 (def :  pcf.ABAddressDetailDV) : void {
      def.onEnter(selectedAddress)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 138, column 106
    function def_refreshVariables_36 (def :  pcf.ABAddressesLV) : void {
      def.refreshVariables(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 146, column 67
    function def_refreshVariables_38 (def :  pcf.ABAddressDetailDV) : void {
      def.refreshVariables(selectedAddress)
    }
    
    property get selectedAddress () : Address {
      return getCurrentSelection(2) as Address
    }
    
    property set selectedAddress ($arg :  Address) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChanges.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PendingChangesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=PendingChanges) at PendingChanges.pcf: line 9, column 75
    static function canVisit_43 () : java.lang.Boolean {
      return perm.ABContact.viewpending
    }
    
    // 'onSelect' attribute on Card (id=UpdatesCard) at PendingChanges.pcf: line 19, column 171
    function onSelect_16 () : void {
      gw.api.web.contact.PendingContactChangeUtil.closeWorksheet(); gw.api.web.contact.PendingContactChangeUtil.clearMessages();
    }
    
    // Page (id=PendingChanges) at PendingChanges.pcf: line 9, column 75
    static function parent_44 () : pcf.api.Destination {
      return pcf.ABContacts.createDestination()
    }
    
    // 'title' attribute on Card (id=UpdatesCard) at PendingChanges.pcf: line 19, column 171
    function title_17 () : java.lang.String {
      return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Title", gw.api.desktop.DesktopCounts.getDesktopCounts().PendingContactUpdates)
    }
    
    // 'title' attribute on Card (id=CreatesCard) at PendingChanges.pcf: line 89, column 170
    function title_42 () : java.lang.String {
      return DisplayKey.get("Web.Contacts.PendingChanges.PendingCreateCard.Title", gw.api.desktop.DesktopCounts.getDesktopCounts().PendingContactCreates)
    }
    
    override property get CurrentLocation () : pcf.PendingChanges {
      return super.CurrentLocation as pcf.PendingChanges
    }
    
    property get pendingCreateID () : String {
      return getVariableValue("pendingCreateID", 0) as String
    }
    
    property set pendingCreateID ($arg :  String) {
      setVariableValue("pendingCreateID", 0, $arg)
    }
    
    
    
    function rejectCreate(selectedPendingContactCreateView : PendingContactCreateView) {
      gw.api.web.contact.PendingContactChangeUtil.closeWorksheet()
      RejectChangePopup.push(selectedPendingContactCreateView.PendingContactCreate)
    }
    
    function approveCreate(selectedPendingContactCreateView : PendingContactCreateView) {
      gw.api.web.contact.PendingContactChangeUtil.closeWorksheet()
      gw.api.web.contact.PendingContactChangeUtil.approveCreate(selectedPendingContactCreateView.PendingContactCreate, CurrentLocation)
    }
    
    function findDuplicateForCreate(selectedPendingContactCreateView : PendingContactCreateView) {
      gw.api.web.contact.PendingContactChangeUtil.closeWorksheet()
      gw.api.web.contact.PendingContactChangeUtil.findDuplicates(selectedPendingContactCreateView.PendingContactCreate)
    }
    
    function clearMessage(selectedPendingContactCreateView : PendingContactCreateView) : boolean {
      if (selectedPendingContactCreateView.PendingContactCreate.PublicID != pendingCreateID or pendingCreateID == null) {
        gw.api.web.contact.PendingContactChangeUtil.clearMessages()
        gw.api.web.contact.PendingContactChangeUtil.closeWorksheet()
        pendingCreateID = selectedPendingContactCreateView.PendingContactCreate.PublicID
      }
      return true;
    }
    
    function findContactByID(id : Key) : ABContact {
      if (id == null)
        return null
      var q = Query.make(ABContact.Type)
      q.compare(ABContact#ID.PropertyInfo.Name, Equals, id)
      return q.select().single()
    }
     
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChanges.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PendingCreatesListDetailPanelExpressionsImpl extends PendingChangesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PendingContactCreate_ApproveButton) at PendingChanges.pcf: line 103, column 100
    function action_18 () : void {
      approveCreate(selectedPendingContactCreateView)
    }
    
    // 'action' attribute on ToolbarButton (id=PendingContactCreate_RejectButton) at PendingChanges.pcf: line 108, column 99
    function action_19 () : void {
      rejectCreate(selectedPendingContactCreateView)
    }
    
    // 'action' attribute on ToolbarButton (id=ApproveAndEditButton) at PendingChanges.pcf: line 112, column 108
    function action_20 () : void {
      gw.api.web.contact.PendingContactChangeUtil.approveThenEditCreate(selectedPendingContactCreateView.PendingContactCreate, CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=PendingContactCreate_FindDuplicatesButton) at PendingChanges.pcf: line 116, column 107
    function action_21 () : void {
      gw.api.web.contact.PendingContactChangeUtil.findDuplicates(selectedPendingContactCreateView.PendingContactCreate)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 96, column 54
    function def_onEnter_23 (def :  pcf.PendingContactCreateDetailedLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function def_onEnter_26 (def :  pcf.ContactBasicsDV_ABCompany) : void {
      def.onEnter(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function def_onEnter_28 (def :  pcf.ContactBasicsDV_ABPerson) : void {
      def.onEnter(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function def_onEnter_30 (def :  pcf.ContactBasicsDV_ABPlace) : void {
      def.onEnter(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function def_onEnter_32 (def :  pcf.ContactBasicsDV_default) : void {
      def.onEnter(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 155, column 108
    function def_onEnter_40 (def :  pcf.RelatedContactsLV) : void {
      def.onEnter(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 96, column 54
    function def_refreshVariables_24 (def :  pcf.PendingContactCreateDetailedLV) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function def_refreshVariables_27 (def :  pcf.ContactBasicsDV_ABCompany) : void {
      def.refreshVariables(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function def_refreshVariables_29 (def :  pcf.ContactBasicsDV_ABPerson) : void {
      def.refreshVariables(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function def_refreshVariables_31 (def :  pcf.ContactBasicsDV_ABPlace) : void {
      def.refreshVariables(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function def_refreshVariables_33 (def :  pcf.ContactBasicsDV_default) : void {
      def.refreshVariables(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 155, column 108
    function def_refreshVariables_41 (def :  pcf.RelatedContactsLV) : void {
      def.refreshVariables(selectedPendingContactCreateView.PendingContactCreate.ABContact)
    }
    
    // 'mode' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function mode_34 () : java.lang.Object {
      return selectedPendingContactCreateView.PendingContactCreate.ABContact.Subtype
    }
    
    // 'visible' attribute on Toolbar (id=PendingContactCreateDetailedLV_tb) at PendingChanges.pcf: line 98, column 68
    function visible_22 () : java.lang.Boolean {
      return selectedPendingContactCreateView != null
    }
    
    // 'visible' attribute on PanelRef at PendingChanges.pcf: line 126, column 76
    function visible_25 () : java.lang.Boolean {
      return clearMessage(selectedPendingContactCreateView)
    }
    
    // 'visible' attribute on Card (id=AddressesCard) at PendingChanges.pcf: line 133, column 109
    function visible_39 () : java.lang.Boolean {
      return !(selectedPendingContactCreateView.PendingContactCreate.ABContact typeis ABPlace)
    }
    
    property get selectedPendingContactCreateView () : PendingContactCreateView {
      return getCurrentSelection(1) as PendingContactCreateView
    }
    
    property set selectedPendingContactCreateView ($arg :  PendingContactCreateView) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChanges.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PendingUpdatesListDetailPanelExpressionsImpl extends PendingChangesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PendingContactCreate_ApproveButton) at PendingChanges.pcf: line 34, column 100
    function action_0 () : void {
      gw.api.web.contact.PendingContactChangeUtil.approveUpdate(selectedPendingContactUpdateView.PendingContactUpdate, CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=PendingContactCreate_RejectButton) at PendingChanges.pcf: line 39, column 99
    function action_1 () : void {
      RejectChangePopup.push(selectedPendingContactUpdateView.PendingContactUpdate)
    }
    
    // 'action' attribute on ToolbarButton (id=PendingContactCreate_ApproveThenEditButton) at PendingChanges.pcf: line 43, column 108
    function action_3 () : void {
      gw.api.web.contact.PendingContactChangeUtil.approveThenEditUpdate(selectedPendingContactUpdateView.PendingContactUpdate, CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=PendingContactCreate_RejectButton) at PendingChanges.pcf: line 39, column 99
    function action_dest_2 () : pcf.api.Destination {
      return pcf.RejectChangePopup.createDestination(selectedPendingContactUpdateView.PendingContactUpdate)
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 26, column 54
    function def_onEnter_5 (def :  pcf.PendingContactUpdateDetailedLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PendingChanges.pcf: line 26, column 54
    function def_refreshVariables_6 (def :  pcf.PendingContactUpdateDetailedLV) : void {
      def.refreshVariables()
    }
    
    // 'visible' attribute on Toolbar (id=ApproveRejectToolbar) at PendingChanges.pcf: line 29, column 68
    function visible_4 () : java.lang.Boolean {
      return selectedPendingContactUpdateView != null
    }
    
    property get selectedPendingContactUpdateView () : PendingContactUpdateView {
      return getCurrentSelection(1) as PendingContactUpdateView
    }
    
    property set selectedPendingContactUpdateView ($arg :  PendingContactUpdateView) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}