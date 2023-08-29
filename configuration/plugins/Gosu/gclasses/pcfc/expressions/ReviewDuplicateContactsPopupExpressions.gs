package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ReviewDuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReviewDuplicateContactsPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ReviewDuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ReviewDuplicateContactsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=MergedContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 452, column 65
    function defaultSetter_176 (__VALUE_TO_SET :  java.lang.Object) : void {
      serviceRow.MergedContactHasService = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on CheckBoxCell (id=KeptContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 443, column 63
    function label_165 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.KeptContact", mergedContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'label' attribute on CheckBoxCell (id=RetiredContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 447, column 66
    function label_170 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.RetiredContact", duplicateContacts.RetiredContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'value' attribute on CheckBoxCell (id=KeptContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 443, column 63
    function valueRoot_167 () : java.lang.Object {
      return serviceRow
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell0_Cell) at ReviewDuplicateContactsPopup.pcf: line 431, column 63
    function value_159 () : java.lang.String {
      return serviceRow.getServiceNamePart(0)
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell1_Cell) at ReviewDuplicateContactsPopup.pcf: line 435, column 63
    function value_161 () : java.lang.String {
      return serviceRow.getServiceNamePart(1)
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell2_Cell) at ReviewDuplicateContactsPopup.pcf: line 439, column 63
    function value_163 () : java.lang.String {
      return serviceRow.getServiceNamePart(2)
    }
    
    // 'value' attribute on CheckBoxCell (id=KeptContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 443, column 63
    function value_166 () : java.lang.Boolean {
      return serviceRow.KeptContactHasService
    }
    
    // 'value' attribute on CheckBoxCell (id=RetiredContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 447, column 66
    function value_171 () : java.lang.Boolean {
      return serviceRow.RetiredContactHasService
    }
    
    // 'value' attribute on CheckBoxCell (id=MergedContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 452, column 65
    function value_175 () : java.lang.Boolean {
      return serviceRow.MergedContactHasService
    }
    
    property get serviceRow () : gw.web.merge.VendorDataCardHelper.ServiceRow {
      return getIteratedValue(1) as gw.web.merge.VendorDataCardHelper.ServiceRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ReviewDuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at ReviewDuplicateContactsPopup.pcf: line 208, column 103
    function action_57 () : void {
      documentRow.Document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at ReviewDuplicateContactsPopup.pcf: line 218, column 111
    function action_61 () : void {
      DocumentPropertiesPopup.push(documentRow.Document, documentRow.OnKept ? wrappedDuplicateContactPair.Pair.KeptContact : wrappedDuplicateContactPair.Pair.RetiredContact, false)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at ReviewDuplicateContactsPopup.pcf: line 227, column 110
    function action_65 () : void {
      documentRow.Document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at ReviewDuplicateContactsPopup.pcf: line 218, column 111
    function action_dest_62 () : pcf.api.Destination {
      return pcf.DocumentPropertiesPopup.createDestination(documentRow.Document, documentRow.OnKept ? wrappedDuplicateContactPair.Pair.KeptContact : wrappedDuplicateContactPair.Pair.RetiredContact, false)
    }
    
    // 'available' attribute on Link (id=NameLink) at ReviewDuplicateContactsPopup.pcf: line 208, column 103
    function available_56 () : java.lang.Boolean {
      return contactDocumentHelper.isViewDocumentContentAvailable(documentRow.Document, contentActionsAvailable)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at ReviewDuplicateContactsPopup.pcf: line 218, column 111
    function available_60 () : java.lang.Boolean {
      return metadataActionsEnabled
    }
    
    // 'available' attribute on Link (id=DownloadLink) at ReviewDuplicateContactsPopup.pcf: line 227, column 110
    function available_63 () : java.lang.Boolean {
      return contactDocumentsHelper.isDownloadDocumentContentAvailable(documentRow.Document, true)
    }
    
    // 'value' attribute on CheckBoxCell (id=DocumentOnUpdatedContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 272, column 49
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentRow.Included = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxCell (id=DocumentOnUpdatedContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 272, column 49
    function editable_91 () : java.lang.Boolean {
      return documentRow.Document.Status != DocumentStatusType.TC_FINAL
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at ReviewDuplicateContactsPopup.pcf: line 198, column 40
    function icon_55 () : java.lang.String {
      return documentRow.Document.Icon
    }
    
    // 'label' attribute on Link (id=NameLink) at ReviewDuplicateContactsPopup.pcf: line 208, column 103
    function label_58 () : java.lang.Object {
      return documentRow.Document.Name
    }
    
    // 'label' attribute on CheckBoxCell (id=DocumentOnKeptContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 263, column 47
    function label_81 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.KeptContact", mergedContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'label' attribute on CheckBoxCell (id=DocumentOnRetiredContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 267, column 50
    function label_86 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.RetiredContact", duplicateContacts.RetiredContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at ReviewDuplicateContactsPopup.pcf: line 208, column 103
    function tooltip_59 () : java.lang.String {
      return contactDocumentHelper.ViewDocumentContentTooltip(documentRow.Document)
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at ReviewDuplicateContactsPopup.pcf: line 227, column 110
    function tooltip_66 () : java.lang.String {
      return contactDocumentsHelper.DownloadDocumentContentTooltip(documentRow.Document)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ReviewDuplicateContactsPopup.pcf: line 233, column 53
    function valueRoot_68 () : java.lang.Object {
      return documentRow.Document
    }
    
    // 'value' attribute on CheckBoxCell (id=DocumentOnKeptContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 263, column 47
    function valueRoot_83 () : java.lang.Object {
      return documentRow
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ReviewDuplicateContactsPopup.pcf: line 233, column 53
    function value_67 () : typekey.DocumentType {
      return documentRow.Document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ReviewDuplicateContactsPopup.pcf: line 238, column 59
    function value_70 () : typekey.DocumentStatusType {
      return documentRow.Document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ReviewDuplicateContactsPopup.pcf: line 242, column 56
    function value_73 () : java.lang.String {
      return documentRow.Document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ReviewDuplicateContactsPopup.pcf: line 248, column 62
    function value_76 () : java.util.Date {
      return documentRow.Document.DateModified
    }
    
    // 'value' attribute on CheckBoxCell (id=DocumentOnKeptContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 263, column 47
    function value_82 () : java.lang.Boolean {
      return documentRow.OnKept
    }
    
    // 'value' attribute on CheckBoxCell (id=DocumentOnRetiredContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 267, column 50
    function value_87 () : java.lang.Boolean {
      return documentRow.OnRetired
    }
    
    // 'value' attribute on CheckBoxCell (id=DocumentOnUpdatedContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 272, column 49
    function value_92 () : java.lang.Boolean {
      return documentRow.Included
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at ReviewDuplicateContactsPopup.pcf: line 227, column 110
    function visible_64 () : java.lang.Boolean {
      return contactDocumentsHelper.isDownloadDocumentContentVisible(documentRow.Document)
    }
    
    // 'visible' attribute on Link (id=HiddenLink) at ReviewDuplicateContactsPopup.pcf: line 258, column 62
    function visible_79 () : java.lang.Boolean {
      return documentRow.Document.Obsolete
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at ReviewDuplicateContactsPopup.pcf: line 253, column 100
    function visible_80 () : java.lang.Boolean {
      return DocumentRows.hasMatch(\ docRow -> docRow.Document.Obsolete == true)
    }
    
    property get documentRow () : gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue {
      return getIteratedValue(2) as gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ReviewDuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends ReviewDuplicateContactsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 173, column 98
    function initialValue_41 () : List<gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue> {
      return documentDataHolder.DocumentsRowList
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 177, column 60
    function initialValue_42 () : gw.web.ContactDocumentsActionsHelper {
      return new gw.web.ContactDocumentsActionsHelper(wrappedDuplicateContactPair.Pair.KeptContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 182, column 31
    function initialValue_43 () : boolean {
      return contactDocumentsHelper.isDocumentMetadataActionsAvailable()
    }
    
    // 'label' attribute on CheckBoxCell (id=DocumentOnKeptContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 263, column 47
    function label_50 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.KeptContact", mergedContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'label' attribute on CheckBoxCell (id=DocumentOnRetiredContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 267, column 50
    function label_52 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.RetiredContact", duplicateContacts.RetiredContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ReviewDuplicateContactsPopup.pcf: line 233, column 53
    function sortValue_44 (documentRow :  gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue) : java.lang.Object {
      return documentRow.Document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ReviewDuplicateContactsPopup.pcf: line 238, column 59
    function sortValue_45 (documentRow :  gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue) : java.lang.Object {
      return documentRow.Document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ReviewDuplicateContactsPopup.pcf: line 242, column 56
    function sortValue_46 (documentRow :  gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue) : java.lang.Object {
      return documentRow.Document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ReviewDuplicateContactsPopup.pcf: line 248, column 62
    function sortValue_47 (documentRow :  gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue) : java.lang.Object {
      return documentRow.Document.DateModified
    }
    
    // 'sortBy' attribute on LinkCell (id=HiddenDocument) at ReviewDuplicateContactsPopup.pcf: line 253, column 100
    function sortValue_48 (documentRow :  gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue) : java.lang.Object {
      return documentRow.Document.Obsolete
    }
    
    // 'value' attribute on CheckBoxCell (id=DocumentOnKeptContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 263, column 47
    function sortValue_51 (documentRow :  gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue) : java.lang.Object {
      return documentRow.OnKept
    }
    
    // 'value' attribute on CheckBoxCell (id=DocumentOnRetiredContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 267, column 50
    function sortValue_53 (documentRow :  gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue) : java.lang.Object {
      return documentRow.OnRetired
    }
    
    // 'value' attribute on CheckBoxCell (id=DocumentOnUpdatedContact_Cell) at ReviewDuplicateContactsPopup.pcf: line 272, column 49
    function sortValue_54 (documentRow :  gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue) : java.lang.Object {
      return documentRow.Included
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at ReviewDuplicateContactsPopup.pcf: line 253, column 100
    function visible_49 () : java.lang.Boolean {
      return DocumentRows.hasMatch(\ docRow -> docRow.Document.Obsolete == true)
    }
    
    property get DocumentRows () : List<gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue> {
      return getVariableValue("DocumentRows", 1) as List<gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue>
    }
    
    property set DocumentRows ($arg :  List<gw.web.merge.MergeContactsDocumentsHolder.DocumentCardRowValue>) {
      setVariableValue("DocumentRows", 1, $arg)
    }
    
    property get contactDocumentsHelper () : gw.web.ContactDocumentsActionsHelper {
      return getVariableValue("contactDocumentsHelper", 1) as gw.web.ContactDocumentsActionsHelper
    }
    
    property set contactDocumentsHelper ($arg :  gw.web.ContactDocumentsActionsHelper) {
      setVariableValue("contactDocumentsHelper", 1, $arg)
    }
    
    property get metadataActionsEnabled () : boolean {
      return getVariableValue("metadataActionsEnabled", 1) as java.lang.Boolean
    }
    
    property set metadataActionsEnabled ($arg :  boolean) {
      setVariableValue("metadataActionsEnabled", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ReviewDuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReviewDuplicateContactsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (wrappedDuplicateContactPair :  gw.web.merge.DuplicatePairWrapper) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=MergeAndEditButton) at ReviewDuplicateContactsPopup.pcf: line 86, column 99
    function action_15 () : void {
      mergeAndEdit()
    }
    
    // 'action' attribute on ToolbarButton (id=Ignore) at ReviewDuplicateContactsPopup.pcf: line 92, column 63
    function action_17 () : void {
      retire(); CurrentLocation.cancel()
    }
    
    // 'beforeCommit' attribute on Popup (id=ReviewDuplicateContactsPopup) at ReviewDuplicateContactsPopup.pcf: line 11, column 84
    function beforeCommit_182 (pickedValue :  java.lang.Object) : void {
      gw.web.merge.MergeContactsWebUtil.Instance.merge(mergedContact, duplicateContacts.RetiredContact, addressDataHolder, relatedContactsHolder, eftDataHolder, documentDataHolder)
    }
    
    // 'canVisit' attribute on Popup (id=ReviewDuplicateContactsPopup) at ReviewDuplicateContactsPopup.pcf: line 11, column 84
    static function canVisit_183 (wrappedDuplicateContactPair :  gw.web.merge.DuplicatePairWrapper) : java.lang.Boolean {
      return wrappedDuplicateContactPair.Pair != null and wrappedDuplicateContactPair.Pair.KeptContact.Subtype == wrappedDuplicateContactPair.Pair.RetiredContact.Subtype
    }
    
    // 'def' attribute on ListViewInput (id=RetiredRelatedContacts) at ReviewDuplicateContactsPopup.pcf: line 295, column 35
    function def_onEnter_102 (def :  pcf.DuplicateRelatedContactsLV) : void {
      def.onEnter(new gw.web.merge.ABContactWrapper(wrappedDuplicateContactPair.Pair.RetiredContact), relatedContactsHolder.RetiredContactRelatedContacts)
    }
    
    // 'def' attribute on RowSetRef (id=KeptContactEFTData) at ReviewDuplicateContactsPopup.pcf: line 313, column 44
    function def_onEnter_106 (def :  pcf.EFTDataRowSet) : void {
      def.onEnter(eftDataHolder.KeptContactData, wrappedDuplicateContactPair)
    }
    
    // 'def' attribute on RowSetRef (id=RetiredContactEFTData) at ReviewDuplicateContactsPopup.pcf: line 323, column 47
    function def_onEnter_109 (def :  pcf.EFTDataRowSet) : void {
      def.onEnter(eftDataHolder.RetiredContactData, wrappedDuplicateContactPair)
    }
    
    // 'def' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function def_onEnter_26 (def :  pcf.ContactDetailsRowSet_ABCompany) : void {
      def.onEnter(keptContact, retiredContact, mergedContact, addressDataHolder, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function def_onEnter_28 (def :  pcf.ContactDetailsRowSet_ABPerson) : void {
      def.onEnter(keptContact, retiredContact, mergedContact, addressDataHolder, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function def_onEnter_30 (def :  pcf.ContactDetailsRowSet_ABPlace) : void {
      def.onEnter(keptContact, retiredContact, mergedContact, addressDataHolder, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function def_onEnter_32 (def :  pcf.ContactDetailsRowSet_default) : void {
      def.onEnter(keptContact, retiredContact, mergedContact, addressDataHolder, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef (id=KeptContactAddresses) at ReviewDuplicateContactsPopup.pcf: line 150, column 46
    function def_onEnter_36 (def :  pcf.AddressDataRowSet) : void {
      def.onEnter(addressDataHolder.KeptAddressData,addressDataHolder.KeptDuplicateAddressEntries)
    }
    
    // 'def' attribute on RowSetRef (id=RetiredContactAddresses) at ReviewDuplicateContactsPopup.pcf: line 160, column 49
    function def_onEnter_39 (def :  pcf.AddressDataRowSet) : void {
      def.onEnter(addressDataHolder.RetiredAddressData, addressDataHolder.RetiredDuplicateAddressEntries)
    }
    
    // 'def' attribute on ListViewInput (id=KeptRelatedContacts) at ReviewDuplicateContactsPopup.pcf: line 286, column 35
    function def_onEnter_99 (def :  pcf.DuplicateRelatedContactsLV) : void {
      def.onEnter(new gw.web.merge.ABContactWrapper(mergedContact), relatedContactsHolder.KeptContactRelatedContacts)
    }
    
    // 'def' attribute on ListViewInput (id=KeptRelatedContacts) at ReviewDuplicateContactsPopup.pcf: line 286, column 35
    function def_refreshVariables_100 (def :  pcf.DuplicateRelatedContactsLV) : void {
      def.refreshVariables(new gw.web.merge.ABContactWrapper(mergedContact), relatedContactsHolder.KeptContactRelatedContacts)
    }
    
    // 'def' attribute on ListViewInput (id=RetiredRelatedContacts) at ReviewDuplicateContactsPopup.pcf: line 295, column 35
    function def_refreshVariables_103 (def :  pcf.DuplicateRelatedContactsLV) : void {
      def.refreshVariables(new gw.web.merge.ABContactWrapper(wrappedDuplicateContactPair.Pair.RetiredContact), relatedContactsHolder.RetiredContactRelatedContacts)
    }
    
    // 'def' attribute on RowSetRef (id=KeptContactEFTData) at ReviewDuplicateContactsPopup.pcf: line 313, column 44
    function def_refreshVariables_107 (def :  pcf.EFTDataRowSet) : void {
      def.refreshVariables(eftDataHolder.KeptContactData, wrappedDuplicateContactPair)
    }
    
    // 'def' attribute on RowSetRef (id=RetiredContactEFTData) at ReviewDuplicateContactsPopup.pcf: line 323, column 47
    function def_refreshVariables_110 (def :  pcf.EFTDataRowSet) : void {
      def.refreshVariables(eftDataHolder.RetiredContactData, wrappedDuplicateContactPair)
    }
    
    // 'def' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function def_refreshVariables_27 (def :  pcf.ContactDetailsRowSet_ABCompany) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact, addressDataHolder, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function def_refreshVariables_29 (def :  pcf.ContactDetailsRowSet_ABPerson) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact, addressDataHolder, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function def_refreshVariables_31 (def :  pcf.ContactDetailsRowSet_ABPlace) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact, addressDataHolder, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function def_refreshVariables_33 (def :  pcf.ContactDetailsRowSet_default) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact, addressDataHolder, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef (id=KeptContactAddresses) at ReviewDuplicateContactsPopup.pcf: line 150, column 46
    function def_refreshVariables_37 (def :  pcf.AddressDataRowSet) : void {
      def.refreshVariables(addressDataHolder.KeptAddressData,addressDataHolder.KeptDuplicateAddressEntries)
    }
    
    // 'def' attribute on RowSetRef (id=RetiredContactAddresses) at ReviewDuplicateContactsPopup.pcf: line 160, column 49
    function def_refreshVariables_40 (def :  pcf.AddressDataRowSet) : void {
      def.refreshVariables(addressDataHolder.RetiredAddressData, addressDataHolder.RetiredDuplicateAddressEntries)
    }
    
    // 'value' attribute on CheckBoxCell (id=MergedContactHasVendorTag_Cell) at ReviewDuplicateContactsPopup.pcf: line 363, column 72
    function defaultSetter_123 (__VALUE_TO_SET :  java.lang.Object) : void {
      vendorDataCardHelper.MergedContactHasVendorTag = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=MergedContactVendorAvailability_Cell) at ReviewDuplicateContactsPopup.pcf: line 389, column 60
    function defaultSetter_135 (__VALUE_TO_SET :  java.lang.Object) : void {
      mergedContact.VendorAvailability = (__VALUE_TO_SET as typekey.VendorAvailabilityType)
    }
    
    // 'value' attribute on TextCell (id=MergedContactVendorUnavailableMessage_Cell) at ReviewDuplicateContactsPopup.pcf: line 410, column 65
    function defaultSetter_146 (__VALUE_TO_SET :  java.lang.Object) : void {
      mergedContact.VendorUnavailableMessage = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on CheckBoxCell (id=MergedContactHasVendorTag_Cell) at ReviewDuplicateContactsPopup.pcf: line 363, column 72
    function editable_121 () : java.lang.Boolean {
      return vendorDataCardHelper.MergedContactHasVendorTagEditable
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 20, column 43
    function initialValue_0 () : entity.DuplicateContactPair {
      return wrappedDuplicateContactPair.Pair
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 24, column 49
    function initialValue_1 () : gw.web.merge.MergeContactsWebUtil {
      return gw.web.merge.MergeContactsWebUtil.Instance
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 60, column 53
    function initialValue_10 () : gw.web.merge.MergeContactsPhoneHolder {
      return new gw.web.merge.MergeContactsPhoneHolder(keptContact, retiredContact, mergedContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 64, column 57
    function initialValue_11 () : gw.web.merge.MergeContactsDocumentsHolder {
      return new gw.web.merge.MergeContactsDocumentsHolder(wrappedDuplicateContactPair, mergedContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 68, column 52
    function initialValue_12 () : gw.web.ContactDocumentsActionsHelper {
      return new gw.web.ContactDocumentsActionsHelper(mergedContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 73, column 23
    function initialValue_13 () : boolean {
      return contactDocumentHelper.isDocumentContentActionsAvailable()
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 28, column 25
    function initialValue_2 () : ABContact {
      return mergeContactsWebUtil.createCopy(duplicateContacts.KeptContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 32, column 25
    function initialValue_3 () : ABContact {
      return mergeContactsWebUtil.createCopy(duplicateContacts.RetiredContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 36, column 25
    function initialValue_4 () : ABContact {
      return mergeContactsWebUtil.createMergedContact(duplicateContacts)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 40, column 32
    function initialValue_5 () : java.lang.String {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.MatchType", duplicateContacts.Exact ? DisplayKey.get("Web.Contacts.MergeContacts.Exact") : DisplayKey.get("Web.Contacts.MergeContacts.Potential"))
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 44, column 55
    function initialValue_6 () : gw.web.merge.MergeContactsAddressHolder {
      return new gw.web.merge.MergeContactsAddressHolder(mergedContact, duplicateContacts.RetiredContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 48, column 62
    function initialValue_7 () : gw.web.merge.MergeContactsLinkedContactsHolder {
      return new gw.web.merge.MergeContactsLinkedContactsHolder(mergedContact, duplicateContacts.RetiredContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 52, column 55
    function initialValue_8 () : gw.web.merge.MergeContactsEFTDataHolder {
      return new gw.web.merge.MergeContactsEFTDataHolder(mergedContact, duplicateContacts.RetiredContact)
    }
    
    // 'initialValue' attribute on Variable at ReviewDuplicateContactsPopup.pcf: line 56, column 49
    function initialValue_9 () : gw.web.merge.VendorDataCardHelper {
      return new gw.web.merge.VendorDataCardHelper(keptContact, retiredContact, mergedContact)
    }
    
    // 'label' attribute on ListViewInput (id=RetiredRelatedContacts) at ReviewDuplicateContactsPopup.pcf: line 295, column 35
    function label_104 () : java.lang.String {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.RetiredContact", gw.web.merge.MergeContactsWebUtil.Instance.getRetiredCreateTime(duplicateContacts))
    }
    
    // 'label' attribute on CheckBoxCell (id=KeptContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 443, column 63
    function label_153 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.KeptContact", mergedContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'label' attribute on CheckBoxCell (id=RetiredContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 447, column 66
    function label_155 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.RetiredContact", duplicateContacts.RetiredContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // EditButtons at ReviewDuplicateContactsPopup.pcf: line 95, column 34
    function label_18 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on TextInput (id=matchType_Input) at ReviewDuplicateContactsPopup.pcf: line 107, column 35
    function label_20 () : java.lang.Object {
      return matchTypeDisplayKey
    }
    
    // 'mode' attribute on RowSetRef at ReviewDuplicateContactsPopup.pcf: line 135, column 45
    function mode_34 () : java.lang.Object {
      return mergedContact.Subtype
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell0_Cell) at ReviewDuplicateContactsPopup.pcf: line 431, column 63
    function sortValue_150 (serviceRow :  gw.web.merge.VendorDataCardHelper.ServiceRow) : java.lang.Object {
      return serviceRow.getServiceNamePart(0)
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell1_Cell) at ReviewDuplicateContactsPopup.pcf: line 435, column 63
    function sortValue_151 (serviceRow :  gw.web.merge.VendorDataCardHelper.ServiceRow) : java.lang.Object {
      return serviceRow.getServiceNamePart(1)
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell2_Cell) at ReviewDuplicateContactsPopup.pcf: line 439, column 63
    function sortValue_152 (serviceRow :  gw.web.merge.VendorDataCardHelper.ServiceRow) : java.lang.Object {
      return serviceRow.getServiceNamePart(2)
    }
    
    // 'value' attribute on CheckBoxCell (id=KeptContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 443, column 63
    function sortValue_154 (serviceRow :  gw.web.merge.VendorDataCardHelper.ServiceRow) : java.lang.Object {
      return serviceRow.KeptContactHasService
    }
    
    // 'value' attribute on CheckBoxCell (id=RetiredContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 447, column 66
    function sortValue_156 (serviceRow :  gw.web.merge.VendorDataCardHelper.ServiceRow) : java.lang.Object {
      return serviceRow.RetiredContactHasService
    }
    
    // 'value' attribute on CheckBoxCell (id=MergedContactHasService_Cell) at ReviewDuplicateContactsPopup.pcf: line 452, column 65
    function sortValue_157 (serviceRow :  gw.web.merge.VendorDataCardHelper.ServiceRow) : java.lang.Object {
      return serviceRow.MergedContactHasService
    }
    
    // 'title' attribute on TitleBar at ReviewDuplicateContactsPopup.pcf: line 145, column 176
    function title_35 () : java.lang.String {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.KeptContactUpdate", mergedContact.UpdateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'title' attribute on TitleBar at ReviewDuplicateContactsPopup.pcf: line 155, column 196
    function title_38 () : java.lang.String {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.RetiredContactUpdate", gw.web.merge.MergeContactsWebUtil.Instance.getRetiredUpdateTime(duplicateContacts))
    }
    
    // 'value' attribute on BooleanRadioCell (id=KeptContactHasVendorTag_Cell) at ReviewDuplicateContactsPopup.pcf: line 356, column 71
    function valueRoot_116 () : java.lang.Object {
      return vendorDataCardHelper
    }
    
    // 'value' attribute on TypeKeyCell (id=KeptContactVendorAvailability_Cell) at ReviewDuplicateContactsPopup.pcf: line 377, column 61
    function valueRoot_128 () : java.lang.Object {
      return keptContact
    }
    
    // 'value' attribute on TypeKeyCell (id=RetiredContactVendorAvailability_Cell) at ReviewDuplicateContactsPopup.pcf: line 382, column 61
    function valueRoot_131 () : java.lang.Object {
      return retiredContact
    }
    
    // 'value' attribute on TypeKeyCell (id=MergedContactVendorAvailability_Cell) at ReviewDuplicateContactsPopup.pcf: line 389, column 60
    function valueRoot_136 () : java.lang.Object {
      return mergedContact
    }
    
    // 'value' attribute on BooleanRadioCell (id=KeptContactHasVendorTag_Cell) at ReviewDuplicateContactsPopup.pcf: line 356, column 71
    function value_115 () : java.lang.Boolean {
      return vendorDataCardHelper.KeptContactHasVendorTag
    }
    
    // 'value' attribute on BooleanRadioCell (id=RetiredContactHasVendorTag_Cell) at ReviewDuplicateContactsPopup.pcf: line 359, column 74
    function value_118 () : java.lang.Boolean {
      return vendorDataCardHelper.RetiredContactHasVendorTag
    }
    
    // 'value' attribute on CheckBoxCell (id=MergedContactHasVendorTag_Cell) at ReviewDuplicateContactsPopup.pcf: line 363, column 72
    function value_122 () : java.lang.Boolean {
      return vendorDataCardHelper.MergedContactHasVendorTag
    }
    
    // 'value' attribute on TypeKeyCell (id=KeptContactVendorAvailability_Cell) at ReviewDuplicateContactsPopup.pcf: line 377, column 61
    function value_127 () : typekey.VendorAvailabilityType {
      return keptContact.VendorAvailability
    }
    
    // 'value' attribute on TypeKeyCell (id=RetiredContactVendorAvailability_Cell) at ReviewDuplicateContactsPopup.pcf: line 382, column 61
    function value_130 () : typekey.VendorAvailabilityType {
      return retiredContact.VendorAvailability
    }
    
    // 'value' attribute on TypeKeyCell (id=MergedContactVendorAvailability_Cell) at ReviewDuplicateContactsPopup.pcf: line 389, column 60
    function value_134 () : typekey.VendorAvailabilityType {
      return mergedContact.VendorAvailability
    }
    
    // 'value' attribute on TextCell (id=KeptContactVendorUnavailableMessage_Cell) at ReviewDuplicateContactsPopup.pcf: line 402, column 63
    function value_139 () : java.lang.String {
      return keptContact.VendorUnavailableMessage
    }
    
    // 'value' attribute on TextCell (id=RetiredContactVendorUnavailableMessage_Cell) at ReviewDuplicateContactsPopup.pcf: line 406, column 66
    function value_142 () : java.lang.String {
      return retiredContact.VendorUnavailableMessage
    }
    
    // 'value' attribute on TextCell (id=MergedContactVendorUnavailableMessage_Cell) at ReviewDuplicateContactsPopup.pcf: line 410, column 65
    function value_145 () : java.lang.String {
      return mergedContact.VendorUnavailableMessage
    }
    
    // 'value' attribute on RowIterator (id=ServicesRowIterator) at ReviewDuplicateContactsPopup.pcf: line 426, column 74
    function value_179 () : java.util.List<gw.web.merge.VendorDataCardHelper.ServiceRow> {
      return vendorDataCardHelper.ServiceRows
    }
    
    // 'value' attribute on TextCell (id=contact1_Cell) at ReviewDuplicateContactsPopup.pcf: line 124, column 170
    function value_22 () : java.lang.String {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.KeptContact", mergedContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'value' attribute on TextCell (id=contact2_Cell) at ReviewDuplicateContactsPopup.pcf: line 128, column 192
    function value_24 () : java.lang.String {
      return DisplayKey.get("Web.Contacts.ReviewDuplicateContacts.RetiredContact", duplicateContacts.RetiredContact.CreateTime.formatDate(gw.i18n.DateTimeFormat.SHORT))
    }
    
    // 'updateVisible' attribute on EditButtons (id=Merge) at ReviewDuplicateContactsPopup.pcf: line 81, column 69
    function visible_14 () : java.lang.Boolean {
      return wrappedDuplicateContactPair.Pair != null
    }
    
    // 'visible' attribute on Row (id=VendorUnavailableMessage) at ReviewDuplicateContactsPopup.pcf: line 395, column 75
    function visible_149 () : java.lang.Boolean {
      return vendorDataCardHelper.ShowVendorUnavailableMessage
    }
    
    // 'visible' attribute on ListViewPanel at ReviewDuplicateContactsPopup.pcf: line 417, column 122
    function visible_180 () : java.lang.Boolean {
      return vendorDataCardHelper.ServiceRows.Count > 0 and vendorDataCardHelper.MergedContactHasVendorTag
    }
    
    // 'visible' attribute on Card (id=VendorData) at ReviewDuplicateContactsPopup.pcf: line 331, column 61
    function visible_181 () : java.lang.Boolean {
      return vendorDataCardHelper.ShowVendorDataCard
    }
    
    // 'visible' attribute on Verbatim at ReviewDuplicateContactsPopup.pcf: line 100, column 25
    function visible_19 () : java.lang.Boolean {
      return wrappedDuplicateContactPair.Pair == null
    }
    
    // 'visible' attribute on Card (id=Documents) at ReviewDuplicateContactsPopup.pcf: line 168, column 70
    function visible_98 () : java.lang.Boolean {
      return documentDataHolder.DocumentsRowList.Count > 0
    }
    
    override property get CurrentLocation () : pcf.ReviewDuplicateContactsPopup {
      return super.CurrentLocation as pcf.ReviewDuplicateContactsPopup
    }
    
    property get addressDataHolder () : gw.web.merge.MergeContactsAddressHolder {
      return getVariableValue("addressDataHolder", 0) as gw.web.merge.MergeContactsAddressHolder
    }
    
    property set addressDataHolder ($arg :  gw.web.merge.MergeContactsAddressHolder) {
      setVariableValue("addressDataHolder", 0, $arg)
    }
    
    property get contactDocumentHelper () : gw.web.ContactDocumentsActionsHelper {
      return getVariableValue("contactDocumentHelper", 0) as gw.web.ContactDocumentsActionsHelper
    }
    
    property set contactDocumentHelper ($arg :  gw.web.ContactDocumentsActionsHelper) {
      setVariableValue("contactDocumentHelper", 0, $arg)
    }
    
    property get contentActionsAvailable () : boolean {
      return getVariableValue("contentActionsAvailable", 0) as java.lang.Boolean
    }
    
    property set contentActionsAvailable ($arg :  boolean) {
      setVariableValue("contentActionsAvailable", 0, $arg)
    }
    
    property get documentDataHolder () : gw.web.merge.MergeContactsDocumentsHolder {
      return getVariableValue("documentDataHolder", 0) as gw.web.merge.MergeContactsDocumentsHolder
    }
    
    property set documentDataHolder ($arg :  gw.web.merge.MergeContactsDocumentsHolder) {
      setVariableValue("documentDataHolder", 0, $arg)
    }
    
    property get duplicateContacts () : entity.DuplicateContactPair {
      return getVariableValue("duplicateContacts", 0) as entity.DuplicateContactPair
    }
    
    property set duplicateContacts ($arg :  entity.DuplicateContactPair) {
      setVariableValue("duplicateContacts", 0, $arg)
    }
    
    property get eftDataHolder () : gw.web.merge.MergeContactsEFTDataHolder {
      return getVariableValue("eftDataHolder", 0) as gw.web.merge.MergeContactsEFTDataHolder
    }
    
    property set eftDataHolder ($arg :  gw.web.merge.MergeContactsEFTDataHolder) {
      setVariableValue("eftDataHolder", 0, $arg)
    }
    
    property get keptContact () : ABContact {
      return getVariableValue("keptContact", 0) as ABContact
    }
    
    property set keptContact ($arg :  ABContact) {
      setVariableValue("keptContact", 0, $arg)
    }
    
    property get matchTypeDisplayKey () : java.lang.String {
      return getVariableValue("matchTypeDisplayKey", 0) as java.lang.String
    }
    
    property set matchTypeDisplayKey ($arg :  java.lang.String) {
      setVariableValue("matchTypeDisplayKey", 0, $arg)
    }
    
    property get mergeContactsWebUtil () : gw.web.merge.MergeContactsWebUtil {
      return getVariableValue("mergeContactsWebUtil", 0) as gw.web.merge.MergeContactsWebUtil
    }
    
    property set mergeContactsWebUtil ($arg :  gw.web.merge.MergeContactsWebUtil) {
      setVariableValue("mergeContactsWebUtil", 0, $arg)
    }
    
    property get mergedContact () : ABContact {
      return getVariableValue("mergedContact", 0) as ABContact
    }
    
    property set mergedContact ($arg :  ABContact) {
      setVariableValue("mergedContact", 0, $arg)
    }
    
    property get phoneHolder () : gw.web.merge.MergeContactsPhoneHolder {
      return getVariableValue("phoneHolder", 0) as gw.web.merge.MergeContactsPhoneHolder
    }
    
    property set phoneHolder ($arg :  gw.web.merge.MergeContactsPhoneHolder) {
      setVariableValue("phoneHolder", 0, $arg)
    }
    
    property get relatedContactsHolder () : gw.web.merge.MergeContactsLinkedContactsHolder {
      return getVariableValue("relatedContactsHolder", 0) as gw.web.merge.MergeContactsLinkedContactsHolder
    }
    
    property set relatedContactsHolder ($arg :  gw.web.merge.MergeContactsLinkedContactsHolder) {
      setVariableValue("relatedContactsHolder", 0, $arg)
    }
    
    property get retiredContact () : ABContact {
      return getVariableValue("retiredContact", 0) as ABContact
    }
    
    property set retiredContact ($arg :  ABContact) {
      setVariableValue("retiredContact", 0, $arg)
    }
    
    property get vendorDataCardHelper () : gw.web.merge.VendorDataCardHelper {
      return getVariableValue("vendorDataCardHelper", 0) as gw.web.merge.VendorDataCardHelper
    }
    
    property set vendorDataCardHelper ($arg :  gw.web.merge.VendorDataCardHelper) {
      setVariableValue("vendorDataCardHelper", 0, $arg)
    }
    
    property get wrappedDuplicateContactPair () : gw.web.merge.DuplicatePairWrapper {
      return getVariableValue("wrappedDuplicateContactPair", 0) as gw.web.merge.DuplicatePairWrapper
    }
    
    property set wrappedDuplicateContactPair ($arg :  gw.web.merge.DuplicatePairWrapper) {
      setVariableValue("wrappedDuplicateContactPair", 0, $arg)
    }
    
    function retire() {
      gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
        var pair = bundle.add(duplicateContacts)
        pair.retire()
      })
    }
    
    function mergeAndEdit() {
      CurrentLocation.commit();
      ContactDetail.push(mergedContact).startEditing();
    }
    
    
  }
  
  
}