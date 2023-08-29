package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/PropertyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PropertyDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/PropertyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyDVGroup_Input) at PropertyDV.pcf: line 22, column 51
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      runtimeProperty.PropertyGroup = (__VALUE_TO_SET as typekey.RuntimePropertyGroup)
    }
    
    // 'value' attribute on TextInput (id=PropertyDVValue_Input) at PropertyDV.pcf: line 39, column 40
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      runtimeProperty.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PropertyDVName_Input) at PropertyDV.pcf: line 28, column 39
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      runtimeProperty.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyDVDescription_Input) at PropertyDV.pcf: line 34, column 46
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      runtimeProperty.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyDVGroup_Input) at PropertyDV.pcf: line 22, column 51
    function valueRoot_2 () : java.lang.Object {
      return runtimeProperty
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyDVGroup_Input) at PropertyDV.pcf: line 22, column 51
    function value_0 () : typekey.RuntimePropertyGroup {
      return runtimeProperty.PropertyGroup
    }
    
    // 'value' attribute on TextInput (id=PropertyDVValue_Input) at PropertyDV.pcf: line 39, column 40
    function value_12 () : java.lang.String {
      return runtimeProperty.Value
    }
    
    // 'value' attribute on TextInput (id=PropertyDVName_Input) at PropertyDV.pcf: line 28, column 39
    function value_4 () : java.lang.String {
      return runtimeProperty.Name
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyDVDescription_Input) at PropertyDV.pcf: line 34, column 46
    function value_8 () : java.lang.String {
      return runtimeProperty.Description
    }
    
    property get isNew () : boolean {
      return getRequireValue("isNew", 0) as java.lang.Boolean
    }
    
    property set isNew ($arg :  boolean) {
      setRequireValue("isNew", 0, $arg)
    }
    
    property get runtimeProperty () : RuntimeProperty {
      return getRequireValue("runtimeProperty", 0) as RuntimeProperty
    }
    
    property set runtimeProperty ($arg :  RuntimeProperty) {
      setRequireValue("runtimeProperty", 0, $arg)
    }
    
    
  }
  
  
}