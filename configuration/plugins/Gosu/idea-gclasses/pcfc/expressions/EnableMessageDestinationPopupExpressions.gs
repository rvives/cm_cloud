package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/EnableMessageDestinationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EnableMessageDestinationPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/EnableMessageDestinationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EnableMessageDestinationPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (enableAlertBar :  boolean[]) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=EnableMessageDestinationPopup) at EnableMessageDestinationPopup.pcf: line 12, column 91
    function afterCommit_7 (TopLocation :  pcf.api.Location) : void {
      enableAlertBar[0]=true;gw.api.profiler.GosuProfilerPageHelper.enableProfilingFor( typekey.ProfilerConfig.TC_MDPROFILERCONFIG, com.guidewire.pl.system.integration.messaging.dispatch.MessageDestinationProfiler.getEntryPointName( messageDestinationName ) )
    }
    
    // 'value' attribute on RangeInput (id=MessageDestination_Input) at EnableMessageDestinationPopup.pcf: line 35, column 43
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      messageDestinationName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // EditButtons at EnableMessageDestinationPopup.pcf: line 24, column 32
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'valueRange' attribute on RangeInput (id=MessageDestination_Input) at EnableMessageDestinationPopup.pcf: line 35, column 43
    function valueRange_3 () : java.lang.Object {
      return gw.api.profiler.MessageDestinationProfilerPageHelper.getNotEnabledMessageDestinationNames().toTypedArray()
    }
    
    // 'value' attribute on RangeInput (id=MessageDestination_Input) at EnableMessageDestinationPopup.pcf: line 35, column 43
    function value_1 () : java.lang.String {
      return messageDestinationName
    }
    
    // 'valueRange' attribute on RangeInput (id=MessageDestination_Input) at EnableMessageDestinationPopup.pcf: line 35, column 43
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MessageDestination_Input) at EnableMessageDestinationPopup.pcf: line 35, column 43
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MessageDestination_Input) at EnableMessageDestinationPopup.pcf: line 35, column 43
    function verifyValueRange_5 () : void {
      var __valueRangeArg = gw.api.profiler.MessageDestinationProfilerPageHelper.getNotEnabledMessageDestinationNames().toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.EnableMessageDestinationPopup {
      return super.CurrentLocation as pcf.EnableMessageDestinationPopup
    }
    
    property get enableAlertBar () : boolean[] {
      return getVariableValue("enableAlertBar", 0) as boolean[]
    }
    
    property set enableAlertBar ($arg :  boolean[]) {
      setVariableValue("enableAlertBar", 0, $arg)
    }
    
    property get messageDestinationName () : String {
      return getVariableValue("messageDestinationName", 0) as String
    }
    
    property set messageDestinationName ($arg :  String) {
      setVariableValue("messageDestinationName", 0, $arg)
    }
    
    
  }
  
  
}