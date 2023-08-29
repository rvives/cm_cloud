package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/EnableGosuServletPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EnableGosuServletPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/EnableGosuServletPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EnableGosuServletPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (enableAlertBar :  boolean[]) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=EnableGosuServletPopup) at EnableGosuServletPopup.pcf: line 12, column 84
    function afterCommit_7 (TopLocation :  pcf.api.Location) : void {
      enableAlertBar[0]=false;gw.api.profiler.GosuProfilerPageHelper.enableProfilingFor( typekey.ProfilerConfig.TC_GOSUSERVLETPROFILERCONFIG, servletType )
    }
    
    // 'value' attribute on RangeInput (id=ServletType_Input) at EnableGosuServletPopup.pcf: line 35, column 42
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      servletType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // EditButtons at EnableGosuServletPopup.pcf: line 24, column 32
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'valueRange' attribute on RangeInput (id=ServletType_Input) at EnableGosuServletPopup.pcf: line 35, column 42
    function valueRange_3 () : java.lang.Object {
      return gw.api.profiler.GosuServletProfilerPageHelper.getAllServletTypeNames().toTypedArray()
    }
    
    // 'value' attribute on RangeInput (id=ServletType_Input) at EnableGosuServletPopup.pcf: line 35, column 42
    function value_1 () : java.lang.String {
      return servletType
    }
    
    // 'valueRange' attribute on RangeInput (id=ServletType_Input) at EnableGosuServletPopup.pcf: line 35, column 42
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ServletType_Input) at EnableGosuServletPopup.pcf: line 35, column 42
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ServletType_Input) at EnableGosuServletPopup.pcf: line 35, column 42
    function verifyValueRange_5 () : void {
      var __valueRangeArg = gw.api.profiler.GosuServletProfilerPageHelper.getAllServletTypeNames().toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.EnableGosuServletPopup {
      return super.CurrentLocation as pcf.EnableGosuServletPopup
    }
    
    property get enableAlertBar () : boolean[] {
      return getVariableValue("enableAlertBar", 0) as boolean[]
    }
    
    property set enableAlertBar ($arg :  boolean[]) {
      setVariableValue("enableAlertBar", 0, $arg)
    }
    
    property get servletType () : String {
      return getVariableValue("servletType", 0) as String
    }
    
    property set servletType ($arg :  String) {
      setVariableValue("servletType", 0, $arg)
    }
    
    
  }
  
  
}