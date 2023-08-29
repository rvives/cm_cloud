package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactDetailScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=showInactiveServiceButton) at ABContactDetailScreen.pcf: line 343, column 74
    function action_106 () : void {
      showInactiveService = !showInactiveService
    }
    
    // 'action' attribute on ToolbarButton (id=EditVendorServices) at ABContactDetailScreen.pcf: line 348, column 83
    function action_109 () : void {
      SelectServicesPopup.push(contact)
    }
    
    // 'action' attribute on ToolbarButton (id=ABContactDetailScreen_DeleteButton) at ABContactDetailScreen.pcf: line 90, column 86
    function action_15 () : void {
      gw.api.web.contact.ABContactUtil.deleteContact(contact, CurrentLocation)
    }
    
    // 'action' attribute on MenuItem (id=IndicateExistence) at ABContactDetailScreen.pcf: line 168, column 112
    function action_40 () : void {
      IndicateExistenceDocumentWorksheet.goInWorkspace(contact)
    }
    
    // 'action' attribute on MenuItem (id=AttachDocument) at ABContactDetailScreen.pcf: line 175, column 72
    function action_44 () : void {
      AttachDocumentWorksheet.goInWorkspace(contact)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshAsyncContent) at ABContactDetailScreen.pcf: line 193, column 100
    function action_52 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=EditVendorServices) at ABContactDetailScreen.pcf: line 348, column 83
    function action_dest_110 () : pcf.api.Destination {
      return pcf.SelectServicesPopup.createDestination(contact)
    }
    
    // 'action' attribute on MenuItem (id=IndicateExistence) at ABContactDetailScreen.pcf: line 168, column 112
    function action_dest_41 () : pcf.api.Destination {
      return pcf.IndicateExistenceDocumentWorksheet.createDestination(contact)
    }
    
    // 'action' attribute on MenuItem (id=AttachDocument) at ABContactDetailScreen.pcf: line 175, column 72
    function action_dest_45 () : pcf.api.Destination {
      return pcf.AttachDocumentWorksheet.createDestination(contact)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveDocuments) at ABContactDetailScreen.pcf: line 186, column 70
    function allCheckedRowsAction_49 (CheckedValues :  entity.Document[], CheckedValuesErrors :  java.util.Map) : void {
      contact.unlinkDocumentsForUI(CheckedValues)
    }
    
    // 'available' attribute on MenuItem (id=IndicateExistence) at ABContactDetailScreen.pcf: line 168, column 112
    function available_39 () : java.lang.Boolean {
      return metadataActionsEnabled
    }
    
    // 'available' attribute on MenuItem (id=AttachDocument) at ABContactDetailScreen.pcf: line 175, column 72
    function available_42 () : java.lang.Boolean {
      return contentActionsAvailable and metadataActionsEnabled
    }
    
    // 'available' attribute on ToolbarButton (id=RefreshAsyncContent) at ABContactDetailScreen.pcf: line 193, column 100
    function available_50 () : java.lang.Boolean {
      return contentActionsAvailable
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 337, column 28
    function def_onEnter_111 (def :  pcf.VendorServicesLV) : void {
      def.onEnter(contact, contactDetailsVendorHelper, showInactiveService)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 356, column 44
    function def_onEnter_119 (def :  pcf.RelatedContactsLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 375, column 48
    function def_onEnter_121 (def :  pcf.ReviewSummaryPanelSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 383, column 43
    function def_onEnter_125 (def :  pcf.ContactHistoryLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function def_onEnter_17 (def :  pcf.ContactBasicsDV_ABCompany) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function def_onEnter_19 (def :  pcf.ContactBasicsDV_ABPerson) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function def_onEnter_21 (def :  pcf.ContactBasicsDV_ABPlace) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function def_onEnter_23 (def :  pcf.ContactBasicsDV_default) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 337, column 28
    function def_refreshVariables_112 (def :  pcf.VendorServicesLV) : void {
      def.refreshVariables(contact, contactDetailsVendorHelper, showInactiveService)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 356, column 44
    function def_refreshVariables_120 (def :  pcf.RelatedContactsLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 375, column 48
    function def_refreshVariables_122 (def :  pcf.ReviewSummaryPanelSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 383, column 43
    function def_refreshVariables_126 (def :  pcf.ContactHistoryLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function def_refreshVariables_18 (def :  pcf.ContactBasicsDV_ABCompany) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function def_refreshVariables_20 (def :  pcf.ContactBasicsDV_ABPerson) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function def_refreshVariables_22 (def :  pcf.ContactBasicsDV_ABPlace) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function def_refreshVariables_24 (def :  pcf.ContactBasicsDV_default) : void {
      def.refreshVariables(contact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 22, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 26, column 52
    function initialValue_1 () : gw.web.ContactDocumentsActionsHelper {
      return new gw.web.ContactDocumentsActionsHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 34, column 23
    function initialValue_2 () : boolean {
      return contactDocumentsHelper.DocumentContentServerAvailable
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 39, column 23
    function initialValue_3 () : boolean {
      return contactDocumentsHelper.isDocumentContentActionsAvailable()
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 44, column 23
    function initialValue_4 () : boolean {
      return contactDocumentsHelper.isDocumentMetadataActionsAvailable()
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 49, column 23
    function initialValue_5 () : Boolean {
      return contact.EditableWithPendingUpdate && !isReadOnly
    }
    
    // 'label' attribute on ToolbarButton (id=showInactiveServiceButton) at ABContactDetailScreen.pcf: line 343, column 74
    function label_107 () : java.lang.Object {
      return showInactiveService ? DisplayKey.get("Web.ContactDetail.Services.HideInactive") : DisplayKey.get("Web.ContactDetail.Services.ShowInactive")
    }
    
    // EditButtons at ABContactDetailScreen.pcf: line 80, column 114
    function label_12 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on PanelRef at ABContactDetailScreen.pcf: line 73, column 34
    function mode_25 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'pickValue' attribute on EditButtons at ABContactDetailScreen.pcf: line 80, column 114
    function pickValue_10 () : ABContact {
      return canPick ? contact : null
    }
    
    // 'selectOnEnter' attribute on Card (id=DocumentsCard) at ABContactDetailScreen.pcf: line 134, column 69
    function selectOnEnter_103 () : java.lang.Boolean {
      return selectDocumentsCardByDefault
    }
    
    // 'visible' attribute on Card (id=DocumentsCard) at ABContactDetailScreen.pcf: line 134, column 69
    function visible_102 () : java.lang.Boolean {
      return contactDocumentsHelper.ShowDocumentsTabForContact
    }
    
    // 'visible' attribute on Verbatim (id=ServicesActionsDissabledMessage) at ABContactDetailScreen.pcf: line 333, column 112
    function visible_104 () : java.lang.Boolean {
      return contactDetailsVendorHelper.isShowServicesUnavailableWarning(CurrentLocation.InEditMode)
    }
    
    // 'visible' attribute on ToolbarButton (id=showInactiveServiceButton) at ABContactDetailScreen.pcf: line 343, column 74
    function visible_105 () : java.lang.Boolean {
      return contactDetailsVendorHelper.hasInactiveService()
    }
    
    // 'visible' attribute on ToolbarButton (id=EditVendorServices) at ABContactDetailScreen.pcf: line 348, column 83
    function visible_108 () : java.lang.Boolean {
      return contact.isVendor() && !contact.HasPendingUpdates
    }
    
    // 'editVisible' attribute on EditButtons at ABContactDetailScreen.pcf: line 80, column 114
    function visible_11 () : java.lang.Boolean {
      return isContactEditable
    }
    
    // 'visible' attribute on Card (id=VendorServicesCard) at ABContactDetailScreen.pcf: line 327, column 74
    function visible_113 () : java.lang.Boolean {
      return contactDetailsVendorHelper.VendorServicesCardIsVisible
    }
    
    // 'visible' attribute on Card (id=ReviewSummariesCard) at ABContactDetailScreen.pcf: line 373, column 111
    function visible_123 () : java.lang.Boolean {
      return perm.ReviewSummary.list && gw.api.contact.ABReviewUtil.haveReviewSummaries(contact)
    }
    
    // 'visible' attribute on ToolbarButton (id=ABContactDetailScreen_DeleteButton) at ABContactDetailScreen.pcf: line 90, column 86
    function visible_14 () : java.lang.Boolean {
      return perm.ABContact.delete(contact) && isContactEditable
    }
    
    // 'visible' attribute on Toolbar (id=ContactBasicsDV_tb) at ABContactDetailScreen.pcf: line 75, column 44
    function visible_16 () : java.lang.Boolean {
      return !contact.isRetired()
    }
    
    // 'visible' attribute on Card (id=AddressesCard) at ABContactDetailScreen.pcf: line 97, column 45
    function visible_35 () : java.lang.Boolean {
      return !(contact typeis ABPlace)
    }
    
    // 'visible' attribute on Verbatim (id=ContentSourceDisabledWarning) at ABContactDetailScreen.pcf: line 140, column 72
    function visible_36 () : java.lang.Boolean {
      return not contactDocumentsHelper.ContentSourceEnabled
    }
    
    // 'visible' attribute on Verbatim (id=ContentSourceUnavailableWarning) at ABContactDetailScreen.pcf: line 146, column 100
    function visible_37 () : java.lang.Boolean {
      return contactDocumentsHelper.ContentSourceEnabled and not contentActionsEnabled
    }
    
    // 'visible' attribute on Verbatim (id=MetadataSourceUnavailableWarning) at ABContactDetailScreen.pcf: line 154, column 132
    function visible_38 () : java.lang.Boolean {
      return contactDocumentsHelper.MetadataSourceEnabled and not contactDocumentsHelper.DocumentMetadataServerAvailable
    }
    
    // 'visible' attribute on MenuItem (id=AttachDocument) at ABContactDetailScreen.pcf: line 175, column 72
    function visible_43 () : java.lang.Boolean {
      return contactDocumentsHelper.ContentSourceEnabled
    }
    
    // 'visible' attribute on ToolbarButton (id=AddDocuments) at ABContactDetailScreen.pcf: line 162, column 68
    function visible_46 () : java.lang.Boolean {
      return perm.Document.create and isContactEditable
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=RemoveDocuments) at ABContactDetailScreen.pcf: line 186, column 70
    function visible_48 () : java.lang.Boolean {
      return perm.System.docdelete and isContactEditable
    }
    
    // 'visible' attribute on ToolbarButton (id=RefreshAsyncContent) at ABContactDetailScreen.pcf: line 193, column 100
    function visible_51 () : java.lang.Boolean {
      return contactDocumentsHelper.isShowAsynchronousRefreshAction(contact.Documents)
    }
    
    // 'visible' attribute on AlertBar (id=ContactEditAlert) at ABContactDetailScreen.pcf: line 54, column 53
    function visible_6 () : java.lang.Boolean {
      return !contact.EditableWithPendingUpdate
    }
    
    // 'visible' attribute on AlertBar (id=ContactDeletedAlert) at ABContactDetailScreen.pcf: line 58, column 38
    function visible_7 () : java.lang.Boolean {
      return contact.isRetired()
    }
    
    // 'visible' attribute on AlertBar (id=LossOfServicesWarning) at ABContactDetailScreen.pcf: line 62, column 71
    function visible_8 () : java.lang.Boolean {
      return contactDetailsVendorHelper.ShowLossOfServicesWarning
    }
    
    // 'visible' attribute on AlertBar (id=LossOfDocumentsWarning) at ABContactDetailScreen.pcf: line 66, column 98
    function visible_9 () : java.lang.Boolean {
      return contactDocumentsHelper.isShowLossOfDocumentsWarning(CurrentLocation.InEditMode)
    }
    
    property get canPick () : Boolean {
      return getRequireValue("canPick", 0) as Boolean
    }
    
    property set canPick ($arg :  Boolean) {
      setRequireValue("canPick", 0, $arg)
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getVariableValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setVariableValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    property get contactDocumentsHelper () : gw.web.ContactDocumentsActionsHelper {
      return getVariableValue("contactDocumentsHelper", 0) as gw.web.ContactDocumentsActionsHelper
    }
    
    property set contactDocumentsHelper ($arg :  gw.web.ContactDocumentsActionsHelper) {
      setVariableValue("contactDocumentsHelper", 0, $arg)
    }
    
    property get contentActionsAvailable () : boolean {
      return getVariableValue("contentActionsAvailable", 0) as java.lang.Boolean
    }
    
    property set contentActionsAvailable ($arg :  boolean) {
      setVariableValue("contentActionsAvailable", 0, $arg)
    }
    
    property get contentActionsEnabled () : boolean {
      return getVariableValue("contentActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set contentActionsEnabled ($arg :  boolean) {
      setVariableValue("contentActionsEnabled", 0, $arg)
    }
    
    property get isContactEditable () : Boolean {
      return getVariableValue("isContactEditable", 0) as Boolean
    }
    
    property set isContactEditable ($arg :  Boolean) {
      setVariableValue("isContactEditable", 0, $arg)
    }
    
    property get isReadOnly () : boolean {
      return getRequireValue("isReadOnly", 0) as java.lang.Boolean
    }
    
    property set isReadOnly ($arg :  boolean) {
      setRequireValue("isReadOnly", 0, $arg)
    }
    
    property get metadataActionsEnabled () : boolean {
      return getVariableValue("metadataActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set metadataActionsEnabled ($arg :  boolean) {
      setVariableValue("metadataActionsEnabled", 0, $arg)
    }
    
    property get selectDocumentsCardByDefault () : boolean {
      return getRequireValue("selectDocumentsCardByDefault", 0) as java.lang.Boolean
    }
    
    property set selectDocumentsCardByDefault ($arg :  boolean) {
      setRequireValue("selectDocumentsCardByDefault", 0, $arg)
    }
    
    property get showInactiveService () : boolean {
      return getVariableValue("showInactiveService", 0) as java.lang.Boolean
    }
    
    property set showInactiveService ($arg :  boolean) {
      setVariableValue("showInactiveService", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDocumentsLVExpressionsImpl extends ABContactDetailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ABContactDetailScreen.pcf: line 213, column 78
    function filters_54 () : gw.api.filters.IFilter[] {
      return filterSet.ContactDocumentsFilters.FilterOptions
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailScreen.pcf: line 200, column 64
    function initialValue_53 () : gw.ab.document.ContactDocumentsFilterSet {
      return new gw.ab.document.ContactDocumentsFilterSet()
    }
    
    // 'sortBy' attribute on LinkCell (id=Name) at ABContactDetailScreen.pcf: line 230, column 33
    function sortValue_55 (document :  entity.Document) : java.lang.Object {
      return document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactDetailScreen.pcf: line 287, column 53
    function sortValue_56 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ABContactDetailScreen.pcf: line 292, column 59
    function sortValue_57 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ABContactDetailScreen.pcf: line 297, column 44
    function sortValue_58 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ABContactDetailScreen.pcf: line 305, column 50
    function sortValue_59 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'sortBy' attribute on LinkCell (id=HiddenDocument) at ABContactDetailScreen.pcf: line 312, column 90
    function sortValue_60 (document :  entity.Document) : java.lang.Object {
      return document.Obsolete
    }
    
    // 'value' attribute on RowIterator (id=DocumentsLinkIterator) at ABContactDetailScreen.pcf: line 208, column 45
    function value_101 () : entity.Document[] {
      return contact.Documents
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at ABContactDetailScreen.pcf: line 312, column 90
    function visible_61 () : java.lang.Boolean {
      return contact.Documents.hasMatch(\ doc -> doc.Obsolete == true)
    }
    
    property get filterSet () : gw.ab.document.ContactDocumentsFilterSet {
      return getVariableValue("filterSet", 1) as gw.ab.document.ContactDocumentsFilterSet
    }
    
    property set filterSet ($arg :  gw.ab.document.ContactDocumentsFilterSet) {
      setVariableValue("filterSet", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactDocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at ABContactDetailScreen.pcf: line 237, column 92
    function action_65 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at ABContactDetailScreen.pcf: line 249, column 111
    function action_69 () : void {
      DocumentPropertiesPopup.push(document, contact)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at ABContactDetailScreen.pcf: line 258, column 98
    function action_73 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 266, column 118
    function action_77 () : void {
      UploadDocumentContentPopup.push(document)
    }
    
    // 'action' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 275, column 115
    function action_82 () : void {
      contact.unlinkDocumentForUI(document)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at ABContactDetailScreen.pcf: line 249, column 111
    function action_dest_70 () : pcf.api.Destination {
      return pcf.DocumentPropertiesPopup.createDestination(document, contact)
    }
    
    // 'action' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 266, column 118
    function action_dest_78 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(document)
    }
    
    // 'available' attribute on Link (id=NameLink) at ABContactDetailScreen.pcf: line 237, column 92
    function available_64 () : java.lang.Boolean {
      return contactDocumentsHelper.isViewDocumentContentAvailable(document, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at ABContactDetailScreen.pcf: line 249, column 111
    function available_68 () : java.lang.Boolean {
      return metadataActionsEnabled
    }
    
    // 'available' attribute on Link (id=DownloadLink) at ABContactDetailScreen.pcf: line 258, column 98
    function available_71 () : java.lang.Boolean {
      return contactDocumentsHelper.isDownloadDocumentContentAvailable(document, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 266, column 118
    function available_75 () : java.lang.Boolean {
      return contactDocumentsHelper.isUploadDocumentContentAvailable(document, metadataActionsEnabled, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 275, column 115
    function available_80 () : java.lang.Boolean {
      return contactDocumentsHelper.isRemoveDocumentLinkAvailable(document, metadataActionsEnabled)
    }
    
    // 'condition' attribute on ToolbarFlag at ABContactDetailScreen.pcf: line 217, column 43
    function condition_62 () : java.lang.Boolean {
      return perm.Document.delete(document) and document.Status != DocumentStatusType.TC_FINAL and document.PendingDocUID == null 
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at ABContactDetailScreen.pcf: line 225, column 40
    function icon_63 () : java.lang.String {
      return document.Icon
    }
    
    // 'icon' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 275, column 115
    function icon_84 () : java.lang.String {
      return "document_remove" 
    }
    
    // 'label' attribute on Link (id=NameLink) at ABContactDetailScreen.pcf: line 237, column 92
    function label_66 () : java.lang.Object {
      return document.Name
    }
    
    // 'label' attribute on Link (id=ContactDocumentsLV_ActionsDisabled) at ABContactDetailScreen.pcf: line 280, column 80
    function label_86 () : java.lang.Object {
      return contactDocumentsHelper.AsynchronousActionsMessage
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at ABContactDetailScreen.pcf: line 237, column 92
    function tooltip_67 () : java.lang.String {
      return contactDocumentsHelper.ViewDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at ABContactDetailScreen.pcf: line 258, column 98
    function tooltip_74 () : java.lang.String {
      return contactDocumentsHelper.DownloadDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 266, column 118
    function tooltip_79 () : java.lang.String {
      return contactDocumentsHelper.UploadDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 275, column 115
    function tooltip_83 () : java.lang.String {
      return contactDocumentsHelper.RemoveDocumentLinkTooltip(document)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactDetailScreen.pcf: line 287, column 53
    function valueRoot_88 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ABContactDetailScreen.pcf: line 287, column 53
    function value_87 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ABContactDetailScreen.pcf: line 292, column 59
    function value_90 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ABContactDetailScreen.pcf: line 297, column 44
    function value_93 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ABContactDetailScreen.pcf: line 305, column 50
    function value_96 () : java.util.Date {
      return document.DateModified
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at ABContactDetailScreen.pcf: line 312, column 90
    function visible_100 () : java.lang.Boolean {
      return contact.Documents.hasMatch(\ doc -> doc.Obsolete == true)
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at ABContactDetailScreen.pcf: line 258, column 98
    function visible_72 () : java.lang.Boolean {
      return contactDocumentsHelper.isDownloadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=UploadLink) at ABContactDetailScreen.pcf: line 266, column 118
    function visible_76 () : java.lang.Boolean {
      return isContactEditable and contactDocumentsHelper.isUploadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=ContactDocumentsLV_DeleteLink) at ABContactDetailScreen.pcf: line 275, column 115
    function visible_81 () : java.lang.Boolean {
      return isContactEditable and contactDocumentsHelper.isRemoveDocumentLinkVisible(document)
    }
    
    // 'visible' attribute on Link (id=ContactDocumentsLV_ActionsDisabled) at ABContactDetailScreen.pcf: line 280, column 80
    function visible_85 () : java.lang.Boolean {
      return document.PendingDocUID != null and document.DMS
    }
    
    // 'visible' attribute on Link (id=Hidden) at ABContactDetailScreen.pcf: line 317, column 50
    function visible_99 () : java.lang.Boolean {
      return document.Obsolete
    }
    
    property get document () : entity.Document {
      return getIteratedValue(2) as entity.Document
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ABContactDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ABContactDetailScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 102, column 42
    function def_onEnter_31 (def :  pcf.ABAddressesLV) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 125, column 59
    function def_onEnter_33 (def :  pcf.ABAddressDetailDV) : void {
      def.onEnter(selectedAddress)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 102, column 42
    function def_refreshVariables_32 (def :  pcf.ABAddressesLV) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ABContactDetailScreen.pcf: line 125, column 59
    function def_refreshVariables_34 (def :  pcf.ABAddressDetailDV) : void {
      def.refreshVariables(selectedAddress)
    }
    
    // EditButtons at ABContactDetailScreen.pcf: line 109, column 116
    function label_28 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at ABContactDetailScreen.pcf: line 109, column 116
    function pickValue_26 () : ABContact {
      return canPick ? contact : null
    }
    
    // 'showUpdateConfirmMessage' attribute on EditButtons at ABContactDetailScreen.pcf: line 109, column 116
    function showConfirmMessage_29 () : java.lang.Boolean {
      return contactDetailsVendorHelper.ShowLossOfServicesWarning
    }
    
    // 'editVisible' attribute on EditButtons at ABContactDetailScreen.pcf: line 109, column 116
    function visible_27 () : java.lang.Boolean {
      return isContactEditable
    }
    
    // 'visible' attribute on Toolbar (id=ABAddressesLV_tb) at ABContactDetailScreen.pcf: line 104, column 46
    function visible_30 () : java.lang.Boolean {
      return !contact.isRetired()
    }
    
    property get selectedAddress () : Address {
      return getCurrentSelection(1) as Address
    }
    
    property set selectedAddress ($arg :  Address) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}