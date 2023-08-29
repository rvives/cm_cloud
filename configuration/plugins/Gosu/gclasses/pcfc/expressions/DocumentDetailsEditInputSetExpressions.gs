package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 21, column 62
    function available_1 () : java.lang.Boolean {
      return documentPropertiesCMHelper.AllowFieldsSubset
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 131, column 62
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.RecipientEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentDetailsEditInputSet.pcf: line 140, column 53
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 149, column 62
    function defaultSetter_114 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.StatusEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentDetailsEditInputSet.pcf: line 160, column 47
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 168, column 62
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.SecurityTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 35, column 113
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.DocumentNameEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentDetailsEditInputSet.pcf: line 178, column 48
    function defaultSetter_135 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on CheckBoxInput (id=typeEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 188, column 62
    function defaultSetter_142 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.TypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentDetailsEditInputSet.pcf: line 199, column 41
    function defaultSetter_149 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.Type = (__VALUE_TO_SET as typekey.DocumentType)
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at DocumentDetailsEditInputSet.pcf: line 46, column 48
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 54, column 62
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.DescriptionEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentDetailsEditInputSet.pcf: line 63, column 55
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 21, column 62
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.AllFieldsEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 71, column 109
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.MimeTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.pcf: line 85, column 37
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.MimeType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 93, column 120
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.LanguageEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.pcf: line 105, column 65
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 114, column 62
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.AuthorEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentDetailsEditInputSet.pcf: line 123, column 50
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentPropertiesCMHelper.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 93, column 120
    function editable_61 () : java.lang.Boolean {
      return documentPropertiesCMHelper.Language == null
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditInputSet.pcf: line 13, column 54
    function initialValue_0 () : gw.document.DocumentPropertiesCMHelper {
      return documentDetailsApplicationHelper as gw.document.DocumentPropertiesCMHelper
    }
    
    // 'optionLabel' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.pcf: line 85, column 37
    function optionLabel_53 (VALUE :  java.lang.String) : java.lang.String {
      return Document.getMimeTypeLabel(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.pcf: line 85, column 37
    function valueRange_54 () : java.lang.Object {
      return gw.document.DocumentsUtilBase.getMimeTypes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.pcf: line 105, column 65
    function valueRange_76 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 21, column 62
    function valueRoot_5 () : java.lang.Object {
      return documentPropertiesCMHelper
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentDetailsEditInputSet.pcf: line 140, column 53
    function value_106 () : java.lang.String {
      return documentPropertiesCMHelper.Recipient
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 149, column 62
    function value_113 () : java.lang.Boolean {
      return documentPropertiesCMHelper.StatusEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 35, column 113
    function value_12 () : java.lang.Boolean {
      return documentPropertiesCMHelper.DocumentNameEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentDetailsEditInputSet.pcf: line 160, column 47
    function value_120 () : typekey.DocumentStatusType {
      return documentPropertiesCMHelper.Status
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 168, column 62
    function value_127 () : java.lang.Boolean {
      return documentPropertiesCMHelper.SecurityTypeEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentDetailsEditInputSet.pcf: line 178, column 48
    function value_134 () : typekey.DocumentSecurityType {
      return documentPropertiesCMHelper.SecurityType
    }
    
    // 'value' attribute on CheckBoxInput (id=typeEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 188, column 62
    function value_141 () : java.lang.Boolean {
      return documentPropertiesCMHelper.TypeEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentDetailsEditInputSet.pcf: line 199, column 41
    function value_148 () : typekey.DocumentType {
      return documentPropertiesCMHelper.Type
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at DocumentDetailsEditInputSet.pcf: line 46, column 48
    function value_20 () : java.lang.String {
      return documentPropertiesCMHelper.Name
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 54, column 62
    function value_28 () : java.lang.Boolean {
      return documentPropertiesCMHelper.DescriptionEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 21, column 62
    function value_3 () : java.lang.Boolean {
      return documentPropertiesCMHelper.AllFieldsEnabled
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentDetailsEditInputSet.pcf: line 63, column 55
    function value_35 () : java.lang.String {
      return documentPropertiesCMHelper.Description
    }
    
    // 'value' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 71, column 109
    function value_42 () : java.lang.Boolean {
      return documentPropertiesCMHelper.MimeTypeEnabled
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.pcf: line 85, column 37
    function value_50 () : java.lang.String {
      return documentPropertiesCMHelper.MimeType
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 93, column 120
    function value_63 () : java.lang.Boolean {
      return documentPropertiesCMHelper.LanguageEnabled
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.pcf: line 105, column 65
    function value_73 () : typekey.LanguageType {
      return documentPropertiesCMHelper.Language
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 114, column 62
    function value_85 () : java.lang.Boolean {
      return documentPropertiesCMHelper.AuthorEnabled
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentDetailsEditInputSet.pcf: line 123, column 50
    function value_92 () : java.lang.String {
      return documentPropertiesCMHelper.Author
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 131, column 62
    function value_99 () : java.lang.Boolean {
      return documentPropertiesCMHelper.RecipientEnabled
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.pcf: line 85, column 37
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.pcf: line 85, column 37
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.pcf: line 105, column 65
    function verifyValueRangeIsAllowedType_77 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.pcf: line 105, column 65
    function verifyValueRangeIsAllowedType_77 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.pcf: line 85, column 37
    function verifyValueRange_56 () : void {
      var __valueRangeArg = gw.document.DocumentsUtilBase.getMimeTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.pcf: line 105, column 65
    function verifyValueRange_78 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_77(__valueRangeArg)
    }
    
    // 'visible' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 35, column 113
    function visible_11 () : java.lang.Boolean {
      return documentPropertiesCMHelper.AllowFieldsSubset and documentPropertiesCMHelper.DocumentNameVisible
    }
    
    // 'visible' attribute on TextInput (id=DocumentName_Input) at DocumentDetailsEditInputSet.pcf: line 46, column 48
    function visible_19 () : java.lang.Boolean {
      return documentPropertiesCMHelper.DocumentNameVisible
    }
    
    // 'visible' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 71, column 109
    function visible_41 () : java.lang.Boolean {
      return documentPropertiesCMHelper.AllowFieldsSubset and documentPropertiesCMHelper.MimeTypeVisible
    }
    
    // 'visible' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.pcf: line 85, column 37
    function visible_49 () : java.lang.Boolean {
      return documentPropertiesCMHelper.MimeTypeVisible
    }
    
    // 'visible' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentDetailsEditInputSet.pcf: line 93, column 120
    function visible_62 () : java.lang.Boolean {
      return documentPropertiesCMHelper.AllowFieldsSubset && LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.pcf: line 105, column 65
    function visible_72 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getRequireValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setRequireValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    property get documentPropertiesCMHelper () : gw.document.DocumentPropertiesCMHelper {
      return getVariableValue("documentPropertiesCMHelper", 0) as gw.document.DocumentPropertiesCMHelper
    }
    
    property set documentPropertiesCMHelper ($arg :  gw.document.DocumentPropertiesCMHelper) {
      setVariableValue("documentPropertiesCMHelper", 0, $arg)
    }
    
    
  }
  
  
}