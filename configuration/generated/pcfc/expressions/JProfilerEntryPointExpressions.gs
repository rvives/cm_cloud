package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/entrypoints/JProfiler.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JProfilerEntryPointExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/entrypoints/JProfiler.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JProfilerExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=JProfiler) at JProfiler.pcf: line 8, column 29
    function location_0 () : pcf.api.Destination {
      return pcf.JProfiler.createDestination()
    }
    
    
  }
  
  
}