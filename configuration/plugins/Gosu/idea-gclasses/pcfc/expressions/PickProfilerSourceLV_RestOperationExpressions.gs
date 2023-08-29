package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.RestOperation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PickProfilerSourceLV_RestOperationExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.RestOperation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PickProfilerSourceLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at PickProfilerSourceLV.RestOperation.pcf: line 21, column 82
    function pickValue_24 () : java.lang.Object {
      return restCallHistory.ProfilerData
    }
    
    // 'value' attribute on TextCell (id=ServerName_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 32, column 47
    function valueRoot_7 () : java.lang.Object {
      return restCallHistory
    }
    
    // 'value' attribute on TextCell (id=HttpOperation_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 41, column 50
    function value_12 () : java.lang.String {
      return restCallHistory.HttpOperation
    }
    
    // 'value' attribute on TextCell (id=TraceabilityId_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 45, column 51
    function value_15 () : java.lang.String {
      return restCallHistory.TraceabilityId
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 53, column 46
    function value_18 () : java.util.Date {
      return restCallHistory.StartDate
    }
    
    // 'value' attribute on DateCell (id=CompleteDate_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 59, column 49
    function value_21 () : java.util.Date {
      return restCallHistory.CompleteDate
    }
    
    // 'value' attribute on TextCell (id=ServerName_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 32, column 47
    function value_6 () : java.lang.String {
      return restCallHistory.ServerName
    }
    
    // 'value' attribute on TextCell (id=OperationName_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 37, column 50
    function value_9 () : java.lang.String {
      return restCallHistory.OperationName
    }
    
    property get restCallHistory () : entity.RestCallHistory {
      return getIteratedValue(1) as entity.RestCallHistory
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/PickProfilerSourceLV.RestOperation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PickProfilerSourceLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ServerName_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 32, column 47
    function sortValue_0 (restCallHistory :  entity.RestCallHistory) : java.lang.Object {
      return restCallHistory.ServerName
    }
    
    // 'value' attribute on TextCell (id=OperationName_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 37, column 50
    function sortValue_1 (restCallHistory :  entity.RestCallHistory) : java.lang.Object {
      return restCallHistory.OperationName
    }
    
    // 'value' attribute on TextCell (id=HttpOperation_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 41, column 50
    function sortValue_2 (restCallHistory :  entity.RestCallHistory) : java.lang.Object {
      return restCallHistory.HttpOperation
    }
    
    // 'value' attribute on TextCell (id=TraceabilityId_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 45, column 51
    function sortValue_3 (restCallHistory :  entity.RestCallHistory) : java.lang.Object {
      return restCallHistory.TraceabilityId
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 53, column 46
    function sortValue_4 (restCallHistory :  entity.RestCallHistory) : java.lang.Object {
      return restCallHistory.StartDate
    }
    
    // 'value' attribute on DateCell (id=CompleteDate_Cell) at PickProfilerSourceLV.RestOperation.pcf: line 59, column 49
    function sortValue_5 (restCallHistory :  entity.RestCallHistory) : java.lang.Object {
      return restCallHistory.CompleteDate
    }
    
    // 'toRemove' attribute on RowIterator at PickProfilerSourceLV.RestOperation.pcf: line 21, column 82
    function toRemove_25 (restCallHistory :  entity.RestCallHistory) : void {
      deleteProfilerData(restCallHistory)
    }
    
    // 'value' attribute on RowIterator at PickProfilerSourceLV.RestOperation.pcf: line 21, column 82
    function value_26 () : gw.api.database.IQueryBeanResult<entity.RestCallHistory> {
      return gw.api.database.Query.make(RestCallHistory).select()
    }
    
    function deleteProfilerData(restCallHistory : RestCallHistory) {
      gw.transaction.Transaction.runWithNewBundle( \ bundle -> {
          bundle.delete( restCallHistory )
        }
      )
    }
    
    
  }
  
  
}