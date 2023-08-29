package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/EnableStartablePluginPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EnableStartablePluginPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/EnableStartablePluginPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EnableStartablePluginPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (enableAlertBar :  boolean[]) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=EnableStartablePluginPopup) at EnableStartablePluginPopup.pcf: line 10, column 88
    function afterCommit_7 (TopLocation :  pcf.api.Location) : void {
      enableAlertBar[0]=false;gw.api.profiler.GosuProfilerPageHelper.enableProfilingFor( typekey.ProfilerConfig.TC_SPPROFILERCONFIG, pluginName )
    }
    
    // 'value' attribute on RangeInput (id=PluginName_Input) at EnableStartablePluginPopup.pcf: line 33, column 43
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      pluginName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // EditButtons at EnableStartablePluginPopup.pcf: line 22, column 32
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'valueRange' attribute on RangeInput (id=PluginName_Input) at EnableStartablePluginPopup.pcf: line 33, column 43
    function valueRange_3 () : java.lang.Object {
      return gw.api.startable.StartablePluginPageHelper.getNotProfilerEnabledStartablePluginNames().toTypedArray()
    }
    
    // 'value' attribute on RangeInput (id=PluginName_Input) at EnableStartablePluginPopup.pcf: line 33, column 43
    function value_1 () : java.lang.String {
      return pluginName
    }
    
    // 'valueRange' attribute on RangeInput (id=PluginName_Input) at EnableStartablePluginPopup.pcf: line 33, column 43
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PluginName_Input) at EnableStartablePluginPopup.pcf: line 33, column 43
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PluginName_Input) at EnableStartablePluginPopup.pcf: line 33, column 43
    function verifyValueRange_5 () : void {
      var __valueRangeArg = gw.api.startable.StartablePluginPageHelper.getNotProfilerEnabledStartablePluginNames().toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.EnableStartablePluginPopup {
      return super.CurrentLocation as pcf.EnableStartablePluginPopup
    }
    
    property get enableAlertBar () : boolean[] {
      return getVariableValue("enableAlertBar", 0) as boolean[]
    }
    
    property set enableAlertBar ($arg :  boolean[]) {
      setVariableValue("enableAlertBar", 0, $arg)
    }
    
    property get pluginName () : String {
      return getVariableValue("pluginName", 0) as String
    }
    
    property set pluginName ($arg :  String) {
      setVariableValue("pluginName", 0, $arg)
    }
    
    
  }
  
  
}