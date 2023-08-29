package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditLV.pcf: line 25, column 45
    function initialValue_0 () : gw.document.DocumentCMContext {
      return DocumentApplicationContext as gw.document.DocumentCMContext
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentDetailsEditLV.pcf: line 46, column 34
    function sortValue_1 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentDetailsEditLV.pcf: line 100, column 45
    function sortValue_10 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Type
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentDetailsEditLV.pcf: line 51, column 41
    function sortValue_2 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Description
    }
    
    // 'value' attribute on RangeCell (id=MimeType_Cell) at DocumentDetailsEditLV.pcf: line 60, column 41
    function sortValue_3 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.MimeType
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function sortValue_4 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Language
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentDetailsEditLV.pcf: line 73, column 36
    function sortValue_6 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Author
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentDetailsEditLV.pcf: line 78, column 39
    function sortValue_7 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Recipient
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentDetailsEditLV.pcf: line 85, column 51
    function sortValue_8 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentDetailsEditLV.pcf: line 91, column 52
    function sortValue_9 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var document : entity.Document = (DocumentCreationInfo.Document)
return document.SecurityType
    }
    
    // 'toRemove' attribute on RowIterator at DocumentDetailsEditLV.pcf: line 35, column 54
    function toRemove_57 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : void {
      documentCMContext.removeDocument(DocumentCreationInfo.Document); DocumentCreationInfos.remove(DocumentCreationInfo);
    }
    
    // 'value' attribute on RowIterator at DocumentDetailsEditLV.pcf: line 35, column 54
    function value_58 () : gw.document.DocumentCreationInfo[] {
      return DocumentCreationInfos.toTypedArray()
    }
    
    // 'visible' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function visible_5 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get DocumentApplicationContext () : gw.document.DocumentApplicationContext {
      return getRequireValue("DocumentApplicationContext", 0) as gw.document.DocumentApplicationContext
    }
    
    property set DocumentApplicationContext ($arg :  gw.document.DocumentApplicationContext) {
      setRequireValue("DocumentApplicationContext", 0, $arg)
    }
    
    property get DocumentCreationInfos () : java.util.Collection<gw.document.DocumentCreationInfo> {
      return getRequireValue("DocumentCreationInfos", 0) as java.util.Collection<gw.document.DocumentCreationInfo>
    }
    
    property set DocumentCreationInfos ($arg :  java.util.Collection<gw.document.DocumentCreationInfo>) {
      setRequireValue("DocumentCreationInfos", 0, $arg)
    }
    
    property get documentCMContext () : gw.document.DocumentCMContext {
      return getVariableValue("documentCMContext", 0) as gw.document.DocumentCMContext
    }
    
    property set documentCMContext ($arg :  gw.document.DocumentCMContext) {
      setVariableValue("documentCMContext", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentDetailsEditLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentDetailsEditLV.pcf: line 46, column 34
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentDetailsEditLV.pcf: line 51, column 41
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=MimeType_Cell) at DocumentDetailsEditLV.pcf: line 60, column 41
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.MimeType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentDetailsEditLV.pcf: line 73, column 36
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentDetailsEditLV.pcf: line 78, column 39
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentDetailsEditLV.pcf: line 85, column 51
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentDetailsEditLV.pcf: line 91, column 52
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentDetailsEditLV.pcf: line 100, column 45
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.Type = (__VALUE_TO_SET as typekey.DocumentType)
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditLV.pcf: line 39, column 33
    function initialValue_11 () : entity.Document {
      return DocumentCreationInfo.Document
    }
    
    // RowIterator at DocumentDetailsEditLV.pcf: line 35, column 54
    function initializeVariables_56 () : void {
        document = DocumentCreationInfo.Document;

    }
    
    // 'optionLabel' attribute on RangeCell (id=MimeType_Cell) at DocumentDetailsEditLV.pcf: line 60, column 41
    function optionLabel_23 (VALUE :  java.lang.String) : java.lang.String {
      return gw.document.DocumentsUtilBase.getMimeTypeDescription(VALUE)
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentDetailsEditLV.pcf: line 60, column 41
    function valueRange_24 () : java.lang.Object {
      return gw.document.DocumentsUtilBase.getMimeTypes()
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function valueRange_31 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentDetailsEditLV.pcf: line 46, column 34
    function valueRoot_14 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TextCell (id=DocumentName_Cell) at DocumentDetailsEditLV.pcf: line 46, column 34
    function value_12 () : java.lang.String {
      return document.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentDetailsEditLV.pcf: line 51, column 41
    function value_16 () : java.lang.String {
      return document.Description
    }
    
    // 'value' attribute on RangeCell (id=MimeType_Cell) at DocumentDetailsEditLV.pcf: line 60, column 41
    function value_20 () : java.lang.String {
      return document.MimeType
    }
    
    // 'value' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function value_28 () : typekey.LanguageType {
      return document.Language
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentDetailsEditLV.pcf: line 73, column 36
    function value_36 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentDetailsEditLV.pcf: line 78, column 39
    function value_40 () : java.lang.String {
      return document.Recipient
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentDetailsEditLV.pcf: line 85, column 51
    function value_44 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentDetailsEditLV.pcf: line 91, column 52
    function value_48 () : typekey.DocumentSecurityType {
      return document.SecurityType
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentDetailsEditLV.pcf: line 100, column 45
    function value_52 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentDetailsEditLV.pcf: line 60, column 41
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentDetailsEditLV.pcf: line 60, column 41
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function verifyValueRangeIsAllowedType_32 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MimeType_Cell) at DocumentDetailsEditLV.pcf: line 60, column 41
    function verifyValueRange_26 () : void {
      var __valueRangeArg = gw.document.DocumentsUtilBase.getMimeTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function verifyValueRange_33 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 68, column 69
    function visible_34 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get DocumentCreationInfo () : gw.document.DocumentCreationInfo {
      return getIteratedValue(1) as gw.document.DocumentCreationInfo
    }
    
    property get document () : entity.Document {
      return getVariableValue("document", 1) as entity.Document
    }
    
    property set document ($arg :  entity.Document) {
      setVariableValue("document", 1, $arg)
    }
    
    
  }
  
  
}