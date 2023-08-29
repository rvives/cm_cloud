package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerOptionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProfilerOptionsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerOptionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProfilerOptionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=QueryOptimizerTracing_Cell) at ProfilerOptionsLV.pcf: line 44, column 55
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      profilerConfig.QueryOptimizerTracing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=UseNanoTime_Cell) at ProfilerOptionsLV.pcf: line 19, column 44
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      profilerConfig.HiResClock = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=ExtendedQueryTracing_Cell) at ProfilerOptionsLV.pcf: line 57, column 54
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      profilerConfig.ExtendedQueryTracing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=DiffDbmsCounters_Cell) at ProfilerOptionsLV.pcf: line 70, column 50
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      profilerConfig.DiffDbmsCounters = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=DbmsCounterThresholdMs_Cell) at ProfilerOptionsLV.pcf: line 83, column 40
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      profilerConfig.DbmsCounterThresholdMs = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CheckBoxCell (id=StackTraceTracking_Cell) at ProfilerOptionsLV.pcf: line 31, column 52
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      profilerConfig.StackTraceTracking = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxCell (id=UseNanoTime_Cell) at ProfilerOptionsLV.pcf: line 19, column 44
    function editable_0 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isHiResolutionClockAvailable()
    }
    
    // 'editable' attribute on CheckBoxCell (id=QueryOptimizerTracing_Cell) at ProfilerOptionsLV.pcf: line 44, column 55
    function editable_11 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isQueryOptimizerTracingAvailable()
    }
    
    // 'editable' attribute on CheckBoxCell (id=ExtendedQueryTracing_Cell) at ProfilerOptionsLV.pcf: line 57, column 54
    function editable_18 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isExtendedQueryTracingAvailable()
    }
    
    // 'editable' attribute on CheckBoxCell (id=DiffDbmsCounters_Cell) at ProfilerOptionsLV.pcf: line 70, column 50
    function editable_25 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable() 
    }
    
    // 'editable' attribute on TextCell (id=DbmsCounterThresholdMs_Cell) at ProfilerOptionsLV.pcf: line 83, column 40
    function editable_32 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable() and profilerConfig.DiffDbmsCounters
    }
    
    // 'value' attribute on CheckBoxCell (id=UseNanoTime_Cell) at ProfilerOptionsLV.pcf: line 19, column 44
    function valueRoot_3 () : java.lang.Object {
      return profilerConfig
    }
    
    // 'value' attribute on CheckBoxCell (id=UseNanoTime_Cell) at ProfilerOptionsLV.pcf: line 19, column 44
    function value_1 () : java.lang.Boolean {
      return profilerConfig.HiResClock
    }
    
    // 'value' attribute on CheckBoxCell (id=QueryOptimizerTracing_Cell) at ProfilerOptionsLV.pcf: line 44, column 55
    function value_12 () : java.lang.Boolean {
      return profilerConfig.QueryOptimizerTracing
    }
    
    // 'value' attribute on CheckBoxCell (id=ExtendedQueryTracing_Cell) at ProfilerOptionsLV.pcf: line 57, column 54
    function value_19 () : java.lang.Boolean {
      return profilerConfig.ExtendedQueryTracing
    }
    
    // 'value' attribute on CheckBoxCell (id=DiffDbmsCounters_Cell) at ProfilerOptionsLV.pcf: line 70, column 50
    function value_26 () : java.lang.Boolean {
      return profilerConfig.DiffDbmsCounters
    }
    
    // 'value' attribute on TextCell (id=DbmsCounterThresholdMs_Cell) at ProfilerOptionsLV.pcf: line 83, column 40
    function value_33 () : java.lang.Integer {
      return profilerConfig.DbmsCounterThresholdMs
    }
    
    // 'value' attribute on CheckBoxCell (id=StackTraceTracking_Cell) at ProfilerOptionsLV.pcf: line 31, column 52
    function value_7 () : java.lang.Boolean {
      return profilerConfig.StackTraceTracking
    }
    
    // 'visible' attribute on Row at ProfilerOptionsLV.pcf: line 65, column 85
    function visible_31 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable()
    }
    
    property get profilerConfig () : ProfilerConfig {
      return getRequireValue("profilerConfig", 0) as ProfilerConfig
    }
    
    property set profilerConfig ($arg :  ProfilerConfig) {
      setRequireValue("profilerConfig", 0, $arg)
    }
    
    
  }
  
  
}