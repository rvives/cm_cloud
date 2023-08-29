package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/EnableWebServicePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EnableWebServicePopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/EnableWebServicePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EnableWebServicePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (enableAlertBar :  boolean[]) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=EnableWebServicePopup) at EnableWebServicePopup.pcf: line 12, column 83
    function afterCommit_15 (TopLocation :  pcf.api.Location) : void {
      enableAlertBar[0]=false;gw.api.profiler.GosuProfilerPageHelper.enableProfilingFor( typekey.ProfilerConfig.TC_WSPROFILERCONFIG, gw.api.profiler.WebServiceProfiler.getEntryPointName( serviceName, operationName ) )
    }
    
    // 'available' attribute on RangeInput (id=OperationName_Input) at EnableWebServicePopup.pcf: line 49, column 43
    function available_7 () : java.lang.Boolean {
      return serviceName != null
    }
    
    // 'value' attribute on RangeInput (id=WebServiceName_Input) at EnableWebServicePopup.pcf: line 38, column 42
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      serviceName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=OperationName_Input) at EnableWebServicePopup.pcf: line 49, column 43
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      operationName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // EditButtons at EnableWebServicePopup.pcf: line 27, column 32
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'valueRange' attribute on RangeInput (id=OperationName_Input) at EnableWebServicePopup.pcf: line 49, column 43
    function valueRange_10 () : java.lang.Object {
      return gw.api.profiler.WebServiceProfilerPageHelper.getAllOperationNames( serviceName ).toTypedArray()
    }
    
    // 'valueRange' attribute on RangeInput (id=WebServiceName_Input) at EnableWebServicePopup.pcf: line 38, column 42
    function valueRange_3 () : java.lang.Object {
      return gw.api.profiler.WebServiceProfilerPageHelper.getAllServiceNames().toTypedArray()
    }
    
    // 'value' attribute on RangeInput (id=WebServiceName_Input) at EnableWebServicePopup.pcf: line 38, column 42
    function value_1 () : java.lang.String {
      return serviceName
    }
    
    // 'value' attribute on RangeInput (id=OperationName_Input) at EnableWebServicePopup.pcf: line 49, column 43
    function value_8 () : java.lang.String {
      return operationName
    }
    
    // 'valueRange' attribute on RangeInput (id=OperationName_Input) at EnableWebServicePopup.pcf: line 49, column 43
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OperationName_Input) at EnableWebServicePopup.pcf: line 49, column 43
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=WebServiceName_Input) at EnableWebServicePopup.pcf: line 38, column 42
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=WebServiceName_Input) at EnableWebServicePopup.pcf: line 38, column 42
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OperationName_Input) at EnableWebServicePopup.pcf: line 49, column 43
    function verifyValueRange_12 () : void {
      var __valueRangeArg = gw.api.profiler.WebServiceProfilerPageHelper.getAllOperationNames( serviceName ).toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=WebServiceName_Input) at EnableWebServicePopup.pcf: line 38, column 42
    function verifyValueRange_5 () : void {
      var __valueRangeArg = gw.api.profiler.WebServiceProfilerPageHelper.getAllServiceNames().toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.EnableWebServicePopup {
      return super.CurrentLocation as pcf.EnableWebServicePopup
    }
    
    property get enableAlertBar () : boolean[] {
      return getVariableValue("enableAlertBar", 0) as boolean[]
    }
    
    property set enableAlertBar ($arg :  boolean[]) {
      setVariableValue("enableAlertBar", 0, $arg)
    }
    
    property get operationName () : String {
      return getVariableValue("operationName", 0) as String
    }
    
    property set operationName ($arg :  String) {
      setVariableValue("operationName", 0, $arg)
    }
    
    property get serviceName () : String {
      return getVariableValue("serviceName", 0) as String
    }
    
    property set serviceName ($arg :  String) {
      setVariableValue("serviceName", 0, $arg)
    }
    
    
  }
  
  
}