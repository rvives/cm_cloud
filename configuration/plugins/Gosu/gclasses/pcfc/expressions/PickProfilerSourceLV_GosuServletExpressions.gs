package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.GosuServlet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PickProfilerSourceLV_GosuServletExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.GosuServlet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PickProfilerSourceLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at PickProfilerSourceLV.GosuServlet.pcf: line 20, column 89
    function pickValue_17 () : java.lang.Object {
      return gosuServletCallHistory.ProfilerData
    }
    
    // 'value' attribute on TextCell (id=ServerName_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 37, column 54
    function valueRoot_6 () : java.lang.Object {
      return gosuServletCallHistory
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 50, column 53
    function value_11 () : java.util.Date {
      return gosuServletCallHistory.StartDate
    }
    
    // 'value' attribute on DateCell (id=CompleteDate_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 56, column 56
    function value_14 () : java.util.Date {
      return gosuServletCallHistory.CompleteDate
    }
    
    // 'value' attribute on TextCell (id=ServerName_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 37, column 54
    function value_5 () : java.lang.String {
      return gosuServletCallHistory.ServerName
    }
    
    // 'value' attribute on TextCell (id=GosuServlet_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 42, column 59
    function value_8 () : java.lang.String {
      return gosuServletCallHistory.GosuServletType
    }
    
    property get gosuServletCallHistory () : entity.GosuServletCallHistory {
      return getIteratedValue(1) as entity.GosuServletCallHistory
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.GosuServlet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PickProfilerSourceLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at PickProfilerSourceLV.GosuServlet.pcf: line 25, column 99
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.profiler.GosuServletProfilerPageHelper.getAllServletTypeNameFilters()
    }
    
    // 'value' attribute on TextCell (id=ServerName_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 37, column 54
    function sortValue_1 (gosuServletCallHistory :  entity.GosuServletCallHistory) : java.lang.Object {
      return gosuServletCallHistory.ServerName
    }
    
    // 'value' attribute on TextCell (id=GosuServlet_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 42, column 59
    function sortValue_2 (gosuServletCallHistory :  entity.GosuServletCallHistory) : java.lang.Object {
      return gosuServletCallHistory.GosuServletType
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 50, column 53
    function sortValue_3 (gosuServletCallHistory :  entity.GosuServletCallHistory) : java.lang.Object {
      return gosuServletCallHistory.StartDate
    }
    
    // 'value' attribute on DateCell (id=CompleteDate_Cell) at PickProfilerSourceLV.GosuServlet.pcf: line 56, column 56
    function sortValue_4 (gosuServletCallHistory :  entity.GosuServletCallHistory) : java.lang.Object {
      return gosuServletCallHistory.CompleteDate
    }
    
    // 'toRemove' attribute on RowIterator at PickProfilerSourceLV.GosuServlet.pcf: line 20, column 89
    function toRemove_18 (gosuServletCallHistory :  entity.GosuServletCallHistory) : void {
      deleteProfilerData(gosuServletCallHistory)
    }
    
    // 'value' attribute on RowIterator at PickProfilerSourceLV.GosuServlet.pcf: line 20, column 89
    function value_19 () : gw.api.database.IQueryBeanResult<entity.GosuServletCallHistory> {
      return gw.api.database.Query.make(GosuServletCallHistory).select()
    }
    
    function deleteProfilerData(gosuServletCallHistory : GosuServletCallHistory) {
      gw.transaction.Transaction.runWithNewBundle( \ bundle -> {
          bundle.delete( gosuServletCallHistory )
        }
      )
    }
    
    
  }
  
  
}