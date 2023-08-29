package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/vendorservicesonboarding/VendorServiceExportImport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VendorServiceExportImportExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/vendorservicesonboarding/VendorServiceExportImport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=VendorServiceExport_Input) at VendorServiceExportImport.pcf: line 41, column 95
    function action_0 () : void {
      result = gw.exportimport.ExportImportVendorServicesUtil.exportVendors()
    }
    
    // 'action' attribute on ButtonInput (id=VendorServiceImport_Input) at VendorServiceExportImport.pcf: line 82, column 43
    function action_15 () : void {
      result = gw.exportimport.ExportImportVendorServicesUtil.importVendors(ImportFileName, ImportSubdirectories)
    }
    
    // 'action' attribute on ButtonInput (id=VendorServiceMapping_Input) at VendorServiceExportImport.pcf: line 61, column 93
    function action_7 () : void {
      result = gw.exportimport.ExportImportVendorServicesUtil.mapServices(MappingFileName, MapSubdirectories)
    }
    
    // 'value' attribute on CheckBoxInput (id=ImportSubdirectoriesCheckbox_Input) at VendorServiceExportImport.pcf: line 76, column 43
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      ImportSubdirectories = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=VendorServiceMappingInput_Input) at VendorServiceExportImport.pcf: line 51, column 38
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      MappingFileName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=MapSubdirectoriesCheckbox_Input) at VendorServiceExportImport.pcf: line 56, column 40
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      MapSubdirectories = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=VendorServiceImportInput_Input) at VendorServiceExportImport.pcf: line 71, column 37
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      ImportFileName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=VendorServiceMappingInput_Input) at VendorServiceExportImport.pcf: line 51, column 38
    function value_1 () : java.lang.String {
      return MappingFileName
    }
    
    // 'value' attribute on CheckBoxInput (id=ImportSubdirectoriesCheckbox_Input) at VendorServiceExportImport.pcf: line 76, column 43
    function value_11 () : java.lang.Boolean {
      return ImportSubdirectories
    }
    
    // 'value' attribute on CheckBoxInput (id=MapSubdirectoriesCheckbox_Input) at VendorServiceExportImport.pcf: line 56, column 40
    function value_4 () : java.lang.Boolean {
      return MapSubdirectories
    }
    
    // 'value' attribute on TextInput (id=VendorServiceImportInput_Input) at VendorServiceExportImport.pcf: line 71, column 37
    function value_8 () : java.lang.String {
      return ImportFileName
    }
    
    // 'visible' attribute on ButtonInput (id=VendorServiceImport_Input) at VendorServiceExportImport.pcf: line 82, column 43
    function visible_14 () : java.lang.Boolean {
      return perm.System.abedit
    }
    
    property get ImportFileName () : String {
      return getVariableValue("ImportFileName", 2) as String
    }
    
    property set ImportFileName ($arg :  String) {
      setVariableValue("ImportFileName", 2, $arg)
    }
    
    property get ImportSubdirectories () : boolean {
      return getVariableValue("ImportSubdirectories", 2) as java.lang.Boolean
    }
    
    property set ImportSubdirectories ($arg :  boolean) {
      setVariableValue("ImportSubdirectories", 2, $arg)
    }
    
    property get MapSubdirectories () : boolean {
      return getVariableValue("MapSubdirectories", 2) as java.lang.Boolean
    }
    
    property set MapSubdirectories ($arg :  boolean) {
      setVariableValue("MapSubdirectories", 2, $arg)
    }
    
    property get MappingFileName () : String {
      return getVariableValue("MappingFileName", 2) as String
    }
    
    property set MappingFileName ($arg :  String) {
      setVariableValue("MappingFileName", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/vendorservicesonboarding/VendorServiceExportImport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends VendorServiceExportImportExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=VendorServicesProcessLog_Input) at VendorServiceExportImport.pcf: line 91, column 29
    function value_17 () : java.lang.String {
      return result
    }
    
    property get result () : String {
      return getVariableValue("result", 1) as String
    }
    
    property set result ($arg :  String) {
      setVariableValue("result", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/vendorservicesonboarding/VendorServiceExportImport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VendorServiceExportImportExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // Page (id=VendorServiceExportImport) at VendorServiceExportImport.pcf: line 9, column 78
    static function parent_19 () : pcf.api.Destination {
      return pcf.Utilities.createDestination()
    }
    
    override property get CurrentLocation () : pcf.VendorServiceExportImport {
      return super.CurrentLocation as pcf.VendorServiceExportImport
    }
    
    
  }
  
  
}