package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.Web.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PickProfilerSourceLV_WebExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.Web.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PickProfilerSourceLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=WebProfilerName_Cell) at PickProfilerSourceLV.Web.pcf: line 31, column 37
    function valueRoot_2 () : java.lang.Object {
      return webProfiler
    }
    
    // 'value' attribute on TextCell (id=WebProfilerName_Cell) at PickProfilerSourceLV.Web.pcf: line 31, column 37
    function value_1 () : java.lang.String {
      return webProfiler.Name
    }
    
    property get webProfiler () : com.guidewire.pl.web.internaltools.profiler.WebProfiler {
      return getIteratedValue(1) as com.guidewire.pl.web.internaltools.profiler.WebProfiler
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.Web.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PickProfilerSourceLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=WebProfilerName_Cell) at PickProfilerSourceLV.Web.pcf: line 31, column 37
    function sortValue_0 (webProfiler :  com.guidewire.pl.web.internaltools.profiler.WebProfiler) : java.lang.Object {
      return webProfiler.Name
    }
    
    // 'toRemove' attribute on RowIterator at PickProfilerSourceLV.Web.pcf: line 19, column 97
    function toRemove_4 (webProfiler :  com.guidewire.pl.web.internaltools.profiler.WebProfiler) : void {
      gw.api.profiler.WebSessionProfilerPageHelper.getCurrentSession().removeSavedWebProfiler(webProfiler)
    }
    
    // 'value' attribute on RowIterator at PickProfilerSourceLV.Web.pcf: line 19, column 97
    function value_5 () : java.util.List<com.guidewire.pl.web.internaltools.profiler.WebProfiler> {
      return gw.api.profiler.WebSessionProfilerPageHelper.getCurrentSession().getSavedWebProfilers()
    }
    
    
  }
  
  
}