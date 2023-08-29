package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/import/ImportPropertiesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportPropertiesDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/import/ImportPropertiesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportPropertiesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on FileInput (id=ImportPropertiesDVFile_Input) at ImportPropertiesDV.pcf: line 18, column 34
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      importData.File = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'value' attribute on CheckBoxInput (id=ImportPropertiesDVUpdateExisting_Input) at ImportPropertiesDV.pcf: line 23, column 44
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      importData.UpdateExisting = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on FileInput (id=ImportPropertiesDVFile_Input) at ImportPropertiesDV.pcf: line 18, column 34
    function valueRoot_2 () : java.lang.Object {
      return importData
    }
    
    // 'value' attribute on FileInput (id=ImportPropertiesDVFile_Input) at ImportPropertiesDV.pcf: line 18, column 34
    function value_0 () : gw.api.web.WebFile {
      return importData.File
    }
    
    // 'value' attribute on CheckBoxInput (id=ImportPropertiesDVUpdateExisting_Input) at ImportPropertiesDV.pcf: line 23, column 44
    function value_4 () : java.lang.Boolean {
      return importData.UpdateExisting
    }
    
    property get importData () : gw.api.properties.PropertyImportData {
      return getRequireValue("importData", 0) as gw.api.properties.PropertyImportData
    }
    
    property set importData ($arg :  gw.api.properties.PropertyImportData) {
      setRequireValue("importData", 0, $arg)
    }
    
    
  }
  
  
}