package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/export/ExportPropertiesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExportPropertiesDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/export/ExportPropertiesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExportPropertiesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Group_Input) at ExportPropertiesDV.pcf: line 18, column 51
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      exportOptions.Group = (__VALUE_TO_SET as typekey.RuntimePropertyGroup)
    }
    
    // 'value' attribute on CheckBoxInput (id=ExportPropertiesDVTargetInput_Input) at ExportPropertiesDV.pcf: line 33, column 55
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      exportOptions.ExportTargetEnvironment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ExportPropertiesDVTargetName_Input) at ExportPropertiesDV.pcf: line 41, column 54
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      exportOptions.TargetEnvironmentName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=ExportPropertiesDVDefaultsInput_Input) at ExportPropertiesDV.pcf: line 23, column 46
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      exportOptions.ExportDefault = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=ExportPropertiesDVCurrentInput_Input) at ExportPropertiesDV.pcf: line 28, column 57
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      exportOptions.ExportCurrentEnvironment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Group_Input) at ExportPropertiesDV.pcf: line 18, column 51
    function valueRoot_2 () : java.lang.Object {
      return exportOptions
    }
    
    // 'value' attribute on TypeKeyInput (id=Group_Input) at ExportPropertiesDV.pcf: line 18, column 51
    function value_0 () : typekey.RuntimePropertyGroup {
      return exportOptions.Group
    }
    
    // 'value' attribute on CheckBoxInput (id=ExportPropertiesDVTargetInput_Input) at ExportPropertiesDV.pcf: line 33, column 55
    function value_12 () : java.lang.Boolean {
      return exportOptions.ExportTargetEnvironment
    }
    
    // 'value' attribute on TextInput (id=ExportPropertiesDVTargetName_Input) at ExportPropertiesDV.pcf: line 41, column 54
    function value_17 () : java.lang.String {
      return exportOptions.TargetEnvironmentName
    }
    
    // 'value' attribute on CheckBoxInput (id=ExportPropertiesDVDefaultsInput_Input) at ExportPropertiesDV.pcf: line 23, column 46
    function value_4 () : java.lang.Boolean {
      return exportOptions.ExportDefault
    }
    
    // 'value' attribute on CheckBoxInput (id=ExportPropertiesDVCurrentInput_Input) at ExportPropertiesDV.pcf: line 28, column 57
    function value_8 () : java.lang.Boolean {
      return exportOptions.ExportCurrentEnvironment
    }
    
    property get exportOptions () : gw.api.properties.PropertyExportOptions {
      return getRequireValue("exportOptions", 0) as gw.api.properties.PropertyExportOptions
    }
    
    property set exportOptions ($arg :  gw.api.properties.PropertyExportOptions) {
      setRequireValue("exportOptions", 0, $arg)
    }
    
    
  }
  
  
}