package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/DocumentPropertiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentPropertiesPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/DocumentPropertiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentPropertiesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (document :  Document, contact :  ABContact) : int {
      return 0
    }
    
    static function __constructorIndex (document :  Document, contact :  ABContact, editMetadata :  boolean) : int {
      return 1
    }
    
    // 'action' attribute on Link (id=DownloadLink) at DocumentPropertiesPopup.pcf: line 91, column 142
    function action_15 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at DocumentPropertiesPopup.pcf: line 100, column 157
    function action_20 () : void {
      UploadDocumentContentPopup.push(document)
    }
    
    // 'action' attribute on Link (id=ContactDocumentsLV_DeleteLink) at DocumentPropertiesPopup.pcf: line 110, column 154
    function action_25 () : void {
      contact.unlinkDocumentForUI(document); ABContactDetailPopup.push(contact, true);
    }
    
    // 'action' attribute on Link (id=NameLink) at DocumentPropertiesPopup.pcf: line 128, column 86
    function action_29 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at DocumentPropertiesPopup.pcf: line 100, column 157
    function action_dest_21 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(document)
    }
    
    // 'afterCommit' attribute on Popup (id=DocumentPropertiesPopup) at DocumentPropertiesPopup.pcf: line 10, column 70
    function afterCommit_39 (TopLocation :  pcf.api.Location) : void {
      DocumentPropertiesPopup.push(document, contact)
    }
    
    // 'available' attribute on Link (id=DownloadLink) at DocumentPropertiesPopup.pcf: line 91, column 142
    function available_13 () : java.lang.Boolean {
      return contactDocumentsHelper.isDownloadDocumentContentAvailableInDocumentProperties(document, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=UploadLink) at DocumentPropertiesPopup.pcf: line 100, column 157
    function available_18 () : java.lang.Boolean {
      return contactDocumentsHelper.isUploadDocumentContentAvailable(document, metadataActionsEnabled, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=ContactDocumentsLV_DeleteLink) at DocumentPropertiesPopup.pcf: line 110, column 154
    function available_23 () : java.lang.Boolean {
      return contactDocumentsHelper.isRemoveDocumentLinkAvailableInDocumentProperties(document, metadataActionsEnabled)
    }
    
    // 'available' attribute on Link (id=NameLink) at DocumentPropertiesPopup.pcf: line 128, column 86
    function available_28 () : java.lang.Boolean {
      return contactDocumentsHelper.isViewDocumentContentAvailable(document, contentActionsAvailable)
    }
    
    // 'beforeCommit' attribute on Popup (id=DocumentPropertiesPopup) at DocumentPropertiesPopup.pcf: line 10, column 70
    function beforeCommit_40 (pickedValue :  java.lang.Object) : void {
      document.isCompatibleMimeType(documentDetailsInfo.getFile())
    }
    
    // 'canEdit' attribute on Popup (id=DocumentPropertiesPopup) at DocumentPropertiesPopup.pcf: line 10, column 70
    function canEdit_41 () : java.lang.Boolean {
      return perm.Document.edit(documentDetailsInfo.Document)
    }
    
    // 'def' attribute on InputSetRef at DocumentPropertiesPopup.pcf: line 132, column 182
    function def_onEnter_33 (def :  pcf.DocumentDetailsEditInputSet) : void {
      def.onEnter(documentPropertiesCMHelper.resetVisibility(CurrentLocation.InEditMode, document.DMS) as gw.document.DocumentDetailsApplicationHelper)
    }
    
    // 'def' attribute on InputSetRef at DocumentPropertiesPopup.pcf: line 132, column 182
    function def_refreshVariables_34 (def :  pcf.DocumentDetailsEditInputSet) : void {
      def.refreshVariables(documentPropertiesCMHelper.resetVisibility(CurrentLocation.InEditMode, document.DMS) as gw.document.DocumentDetailsApplicationHelper)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Hidden_Input) at DocumentPropertiesPopup.pcf: line 138, column 40
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Obsolete = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'icon' attribute on Link (id=DownloadLink) at DocumentPropertiesPopup.pcf: line 91, column 142
    function icon_17 () : java.lang.String {
      return "document_download" 
    }
    
    // 'icon' attribute on Link (id=ContactDocumentsLV_DeleteLink) at DocumentPropertiesPopup.pcf: line 110, column 154
    function icon_27 () : java.lang.String {
      return "document_remove" 
    }
    
    // 'initialValue' attribute on Variable at DocumentPropertiesPopup.pcf: line 25, column 47
    function initialValue_0 () : gw.document.DocumentDetailsInfo {
      return new gw.document.DocumentDetailsInfo(document)
    }
    
    // 'initialValue' attribute on Variable at DocumentPropertiesPopup.pcf: line 32, column 43
    function initialValue_1 () : java.util.Set<String> {
      return (contact.Documents*.Name).subtract({document.Name})
    }
    
    // 'initialValue' attribute on Variable at DocumentPropertiesPopup.pcf: line 36, column 52
    function initialValue_2 () : gw.web.ContactDocumentsActionsHelper {
      return new gw.web.ContactDocumentsActionsHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at DocumentPropertiesPopup.pcf: line 40, column 76
    function initialValue_3 () : gw.document.DocumentPropertiesCMHelper {
      return new gw.document.DocumentPropertiesCMHelper(document)
    }
    
    // 'initialValue' attribute on Variable at DocumentPropertiesPopup.pcf: line 45, column 23
    function initialValue_4 () : boolean {
      return contactDocumentsHelper.DocumentContentServerAvailable
    }
    
    // 'initialValue' attribute on Variable at DocumentPropertiesPopup.pcf: line 50, column 23
    function initialValue_5 () : boolean {
      return contactDocumentsHelper.isDocumentContentActionsAvailable()
    }
    
    // 'initialValue' attribute on Variable at DocumentPropertiesPopup.pcf: line 55, column 23
    function initialValue_6 () : boolean {
      return contactDocumentsHelper.isDocumentMetadataActionsAvailable()
    }
    
    // 'label' attribute on Link (id=NameLink) at DocumentPropertiesPopup.pcf: line 128, column 86
    function label_30 () : java.lang.Object {
      return document.Name
    }
    
    // EditButtons at DocumentPropertiesPopup.pcf: line 59, column 198
    function label_8 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at DocumentPropertiesPopup.pcf: line 91, column 142
    function tooltip_16 () : java.lang.String {
      return contactDocumentsHelper.DownloadDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=UploadLink) at DocumentPropertiesPopup.pcf: line 100, column 157
    function tooltip_22 () : java.lang.String {
      return contactDocumentsHelper.UploadDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=ContactDocumentsLV_DeleteLink) at DocumentPropertiesPopup.pcf: line 110, column 154
    function tooltip_26 () : java.lang.String {
      return contactDocumentsHelper.RemoveDocumentLinkTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at DocumentPropertiesPopup.pcf: line 128, column 86
    function tooltip_31 () : java.lang.String {
      return contactDocumentsHelper.ViewDocumentContentTooltip(document)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Hidden_Input) at DocumentPropertiesPopup.pcf: line 138, column 40
    function valueRoot_37 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on BooleanRadioInput (id=Hidden_Input) at DocumentPropertiesPopup.pcf: line 138, column 40
    function value_35 () : java.lang.Boolean {
      return document.Obsolete
    }
    
    // 'visible' attribute on AlertBar (id=ContentSourceUnavailableWarning) at DocumentPropertiesPopup.pcf: line 68, column 94
    function visible_10 () : java.lang.Boolean {
      return contactDocumentsHelper.ContentSourceEnabled and not contentActionsEnabled
    }
    
    // 'visible' attribute on AlertBar (id=MetadataSourceUnavailableWarning) at DocumentPropertiesPopup.pcf: line 72, column 128
    function visible_11 () : java.lang.Boolean {
      return contactDocumentsHelper.MetadataSourceEnabled and not contactDocumentsHelper.DocumentMetadataServerAvailable
    }
    
    // 'visible' attribute on AlertBar (id=ContentlessNoActionsText) at DocumentPropertiesPopup.pcf: line 76, column 34
    function visible_12 () : java.lang.Boolean {
      return !document.DMS
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at DocumentPropertiesPopup.pcf: line 91, column 142
    function visible_14 () : java.lang.Boolean {
      return contactDocumentsHelper.isDownloadDocumentContentVisibleInDocumentProperties(CurrentLocation.InEditMode, document)
    }
    
    // 'visible' attribute on Link (id=UploadLink) at DocumentPropertiesPopup.pcf: line 100, column 157
    function visible_19 () : java.lang.Boolean {
      return editMetadata and contactDocumentsHelper.isUploadDocumentContentVisibleInDocumentProperties(CurrentLocation.InEditMode, document)
    }
    
    // 'visible' attribute on Link (id=ContactDocumentsLV_DeleteLink) at DocumentPropertiesPopup.pcf: line 110, column 154
    function visible_24 () : java.lang.Boolean {
      return editMetadata and contactDocumentsHelper.isRemoveDocumentLinkVisibleInDocumentProperties(CurrentLocation.InEditMode, document)
    }
    
    // 'visible' attribute on ContentInput (id=DocumentLink) at DocumentPropertiesPopup.pcf: line 120, column 54
    function visible_32 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    // 'editVisible' attribute on EditButtons at DocumentPropertiesPopup.pcf: line 59, column 198
    function visible_7 () : java.lang.Boolean {
      return editMetadata and perm.Document.edit(documentDetailsInfo.Document) and documentDetailsInfo.Document.PendingDocUID == null and document.Status != DocumentStatusType.TC_FINAL
    }
    
    // 'visible' attribute on AlertBar (id=ContentSourceDisabledWarning) at DocumentPropertiesPopup.pcf: line 64, column 68
    function visible_9 () : java.lang.Boolean {
      return not contactDocumentsHelper.ContentSourceEnabled
    }
    
    override property get CurrentLocation () : pcf.DocumentPropertiesPopup {
      return super.CurrentLocation as pcf.DocumentPropertiesPopup
    }
    
    property get contact () : ABContact {
      return getVariableValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get contactDocNames () : java.util.Set<String> {
      return getVariableValue("contactDocNames", 0) as java.util.Set<String>
    }
    
    property set contactDocNames ($arg :  java.util.Set<String>) {
      setVariableValue("contactDocNames", 0, $arg)
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
    
    property get document () : Document {
      return getVariableValue("document", 0) as Document
    }
    
    property set document ($arg :  Document) {
      setVariableValue("document", 0, $arg)
    }
    
    property get documentDetailsInfo () : gw.document.DocumentDetailsInfo {
      return getVariableValue("documentDetailsInfo", 0) as gw.document.DocumentDetailsInfo
    }
    
    property set documentDetailsInfo ($arg :  gw.document.DocumentDetailsInfo) {
      setVariableValue("documentDetailsInfo", 0, $arg)
    }
    
    property get documentPropertiesCMHelper () : gw.document.DocumentPropertiesCMHelper {
      return getVariableValue("documentPropertiesCMHelper", 0) as gw.document.DocumentPropertiesCMHelper
    }
    
    property set documentPropertiesCMHelper ($arg :  gw.document.DocumentPropertiesCMHelper) {
      setVariableValue("documentPropertiesCMHelper", 0, $arg)
    }
    
    property get editMetadata () : boolean {
      return getVariableValue("editMetadata", 0) as java.lang.Boolean
    }
    
    property set editMetadata ($arg :  boolean) {
      setVariableValue("editMetadata", 0, $arg)
    }
    
    property get metadataActionsEnabled () : boolean {
      return getVariableValue("metadataActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set metadataActionsEnabled ($arg :  boolean) {
      setVariableValue("metadataActionsEnabled", 0, $arg)
    }
    
    
  }
  
  
}