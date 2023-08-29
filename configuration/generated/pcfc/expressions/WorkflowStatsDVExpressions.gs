package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/workflow/WorkflowStatsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowStatsDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/workflow/WorkflowStatsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowStatsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at WorkflowStatsDV.pcf: line 35, column 41
    function def_onEnter_15 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at WorkflowStatsDV.pcf: line 35, column 41
    function def_refreshVariables_16 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at WorkflowStatsDV.pcf: line 17, column 39
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.Type = (__VALUE_TO_SET as typekey.Workflow)
    }
    
    // 'value' attribute on DateInput (id=DateTo_Input) at WorkflowStatsDV.pcf: line 31, column 40
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.DateTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=DateFrom_Input) at WorkflowStatsDV.pcf: line 24, column 42
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.DateFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at WorkflowStatsDV.pcf: line 17, column 39
    function valueRange_3 () : java.lang.Object {
      return SearchCriteria.AvailableTypes
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at WorkflowStatsDV.pcf: line 17, column 39
    function valueRoot_2 () : java.lang.Object {
      return SearchCriteria
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at WorkflowStatsDV.pcf: line 17, column 39
    function value_0 () : typekey.Workflow {
      return SearchCriteria.Type
    }
    
    // 'value' attribute on DateInput (id=DateTo_Input) at WorkflowStatsDV.pcf: line 31, column 40
    function value_11 () : java.util.Date {
      return SearchCriteria.DateTo
    }
    
    // 'value' attribute on DateInput (id=DateFrom_Input) at WorkflowStatsDV.pcf: line 24, column 42
    function value_7 () : java.util.Date {
      return SearchCriteria.DateFrom
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at WorkflowStatsDV.pcf: line 17, column 39
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at WorkflowStatsDV.pcf: line 17, column 39
    function verifyValueRangeIsAllowedType_4 ($$arg :  typekey.Workflow[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at WorkflowStatsDV.pcf: line 17, column 39
    function verifyValueRange_5 () : void {
      var __valueRangeArg = SearchCriteria.AvailableTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    property get SearchCriteria () : WFStatsSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as WFStatsSearchCriteria
    }
    
    property set SearchCriteria ($arg :  WFStatsSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}