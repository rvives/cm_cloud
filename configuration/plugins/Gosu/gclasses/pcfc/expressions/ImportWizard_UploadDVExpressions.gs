package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ImportWizard_UploadDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportWizard_UploadDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ImportWizard_UploadDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportWizard_UploadDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 35, column 54
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      ImportDataInfo.ResolutionStrategy = (__VALUE_TO_SET as gw.api.admin.ImportDataInfo.ResolutionOption)
    }
    
    // 'value' attribute on FileInput (id=File_Input) at ImportWizard_UploadDV.pcf: line 19, column 38
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ImportDataInfo.File = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'label' attribute on Label (id=Conflicts) at ImportWizard_UploadDV.pcf: line 27, column 55
    function label_8 () : java.lang.String {
      return DisplayKey.get("Web.Admin.ImportWizard.UploadDV.ConflictsMessage",  ImportDataInfo.NumConflicts)
    }
    
    // 'validationExpression' attribute on FileInput (id=File_Input) at ImportWizard_UploadDV.pcf: line 19, column 38
    function validationExpression_0 () : java.lang.Object {
      return ImportDataInfo.File != null ? null : DisplayKey.get("Web.Admin.ImportWizard.UploadDV.FileNotSpecifiedMessage")
    }
    
    // 'valueRange' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 35, column 54
    function valueRange_13 () : java.lang.Object {
      return ImportDataInfo.ResolutionOptions
    }
    
    // 'value' attribute on FileInput (id=File_Input) at ImportWizard_UploadDV.pcf: line 19, column 38
    function valueRoot_3 () : java.lang.Object {
      return ImportDataInfo
    }
    
    // 'value' attribute on FileInput (id=File_Input) at ImportWizard_UploadDV.pcf: line 19, column 38
    function value_1 () : gw.api.web.WebFile {
      return ImportDataInfo.File
    }
    
    // 'value' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 35, column 54
    function value_10 () : gw.api.admin.ImportDataInfo.ResolutionOption {
      return ImportDataInfo.ResolutionStrategy
    }
    
    // 'valueRange' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 35, column 54
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.admin.ImportDataInfo.ResolutionOption[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 35, column 54
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Resolution_Input) at ImportWizard_UploadDV.pcf: line 35, column 54
    function verifyValueRange_15 () : void {
      var __valueRangeArg = ImportDataInfo.ResolutionOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on Label (id=NoConflicts) at ImportWizard_UploadDV.pcf: line 23, column 85
    function visible_6 () : java.lang.Boolean {
      return ImportDataInfo.File != null and ImportDataInfo.NumConflicts == 0
    }
    
    // 'visible' attribute on Label (id=Conflicts) at ImportWizard_UploadDV.pcf: line 27, column 55
    function visible_7 () : java.lang.Boolean {
      return ImportDataInfo.NumConflicts > 0
    }
    
    property get ImportDataInfo () : gw.api.admin.ImportDataInfo {
      return getRequireValue("ImportDataInfo", 0) as gw.api.admin.ImportDataInfo
    }
    
    property set ImportDataInfo ($arg :  gw.api.admin.ImportDataInfo) {
      setRequireValue("ImportDataInfo", 0, $arg)
    }
    
    
  }
  
  
}