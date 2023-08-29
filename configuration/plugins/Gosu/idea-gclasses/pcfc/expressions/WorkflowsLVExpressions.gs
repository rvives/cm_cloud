package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/workflow/WorkflowsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/workflow/WorkflowsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WorkflowsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Parent_Cell) at WorkflowsLV.pcf: line 67, column 32
    function actionAvailable_27 () : java.lang.Boolean {
      return Workflow.Caller != null
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at WorkflowsLV.pcf: line 35, column 41
    function action_11 () : void {
      WorkflowDetail.go(Workflow)
    }
    
    // 'action' attribute on TextCell (id=Parent_Cell) at WorkflowsLV.pcf: line 67, column 32
    function action_25 () : void {
      WorkflowDetail.go(Workflow.Caller)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at WorkflowsLV.pcf: line 35, column 41
    function action_dest_12 () : pcf.api.Destination {
      return pcf.WorkflowDetail.createDestination(Workflow)
    }
    
    // 'action' attribute on TextCell (id=Parent_Cell) at WorkflowsLV.pcf: line 67, column 32
    function action_dest_26 () : pcf.api.Destination {
      return pcf.WorkflowDetail.createDestination(Workflow.Caller)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at WorkflowsLV.pcf: line 24, column 75
    function checkBoxVisible_48 () : java.lang.Boolean {
      return Workflow.State != TC_COMPLETED
    }
    
    // 'condition' attribute on ToolbarFlag at WorkflowsLV.pcf: line 27, column 27
    function condition_10 () : java.lang.Boolean {
      return Workflow.State == TC_ERROR || Workflow.State == TC_SUSPENDED
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at WorkflowsLV.pcf: line 35, column 41
    function valueRoot_14 () : java.lang.Object {
      return Workflow
    }
    
    // 'value' attribute on TextCell (id=Children_Cell) at WorkflowsLV.pcf: line 74, column 42
    function valueRoot_33 () : java.lang.Object {
      return Workflow.SubFlows
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at WorkflowsLV.pcf: line 35, column 41
    function value_13 () : typekey.Workflow {
      return Workflow.Subtype
    }
    
    // 'value' attribute on TextCell (id=ProcessVersion_Cell) at WorkflowsLV.pcf: line 41, column 42
    function value_16 () : java.lang.Integer {
      return Workflow.ProcessVersion
    }
    
    // 'value' attribute on DateCell (id=StartTime_Cell) at WorkflowsLV.pcf: line 50, column 40
    function value_19 () : java.util.Date {
      return Workflow.CreateTime
    }
    
    // 'value' attribute on DateCell (id=UpdateTime_Cell) at WorkflowsLV.pcf: line 57, column 40
    function value_22 () : java.util.Date {
      return Workflow.UpdateTime
    }
    
    // 'value' attribute on TextCell (id=Parent_Cell) at WorkflowsLV.pcf: line 67, column 32
    function value_28 () : entity.Workflow {
      return Workflow.Caller
    }
    
    // 'value' attribute on TextCell (id=Children_Cell) at WorkflowsLV.pcf: line 74, column 42
    function value_32 () : java.lang.Integer {
      return Workflow.SubFlows.length
    }
    
    // 'value' attribute on TextCell (id=CurrentStep_Cell) at WorkflowsLV.pcf: line 80, column 56
    function value_35 () : java.lang.String {
      return Workflow.localizedCurrentStepName()
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at WorkflowsLV.pcf: line 86, column 46
    function value_37 () : typekey.WorkflowState {
      return Workflow.State
    }
    
    // 'value' attribute on TypeKeyCell (id=ActiveState_Cell) at WorkflowsLV.pcf: line 92, column 52
    function value_40 () : typekey.WorkflowActiveState {
      return Workflow.ActiveState
    }
    
    // 'value' attribute on TextCell (id=WorkItemState_Cell) at WorkflowsLV.pcf: line 98, column 51
    function value_43 () : java.lang.String {
      return workItemDisplayValue(Workflow)
    }
    
    // 'value' attribute on DateCell (id=WorkTimeout_Cell) at WorkflowsLV.pcf: line 105, column 41
    function value_45 () : java.util.Date {
      return Workflow.TimeoutTime
    }
    
    // 'visible' attribute on TextCell (id=Parent_Cell) at WorkflowsLV.pcf: line 67, column 32
    function visible_30 () : java.lang.Boolean {
      return !isParent
    }
    
    property get Workflow () : entity.Workflow {
      return getIteratedValue(1) as entity.Workflow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/workflow/WorkflowsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at WorkflowsLV.pcf: line 35, column 41
    function sortValue_0 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.Subtype
    }
    
    // 'value' attribute on TextCell (id=ProcessVersion_Cell) at WorkflowsLV.pcf: line 41, column 42
    function sortValue_1 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.ProcessVersion
    }
    
    // 'value' attribute on DateCell (id=StartTime_Cell) at WorkflowsLV.pcf: line 50, column 40
    function sortValue_2 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.CreateTime
    }
    
    // 'value' attribute on DateCell (id=UpdateTime_Cell) at WorkflowsLV.pcf: line 57, column 40
    function sortValue_3 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.UpdateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Parent_Cell) at WorkflowsLV.pcf: line 67, column 32
    function sortValue_4 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.Caller.PublicID
    }
    
    // 'sortBy' attribute on TextCell (id=CurrentStep_Cell) at WorkflowsLV.pcf: line 80, column 56
    function sortValue_6 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.CurrentStep
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at WorkflowsLV.pcf: line 86, column 46
    function sortValue_7 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.State
    }
    
    // 'value' attribute on TypeKeyCell (id=ActiveState_Cell) at WorkflowsLV.pcf: line 92, column 52
    function sortValue_8 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.ActiveState
    }
    
    // 'value' attribute on DateCell (id=WorkTimeout_Cell) at WorkflowsLV.pcf: line 105, column 41
    function sortValue_9 (Workflow :  entity.Workflow) : java.lang.Object {
      return Workflow.TimeoutTime
    }
    
    // 'value' attribute on RowIterator at WorkflowsLV.pcf: line 24, column 75
    function value_49 () : gw.api.database.IQueryBeanResult<entity.Workflow> {
      return Workflows
    }
    
    // 'visible' attribute on TextCell (id=Parent_Cell) at WorkflowsLV.pcf: line 67, column 32
    function visible_5 () : java.lang.Boolean {
      return !isParent
    }
    
    property get Workflows () : gw.api.database.IQueryBeanResult<Workflow> {
      return getRequireValue("Workflows", 0) as gw.api.database.IQueryBeanResult<Workflow>
    }
    
    property set Workflows ($arg :  gw.api.database.IQueryBeanResult<Workflow>) {
      setRequireValue("Workflows", 0, $arg)
    }
    
    property get isParent () : boolean {
      return getRequireValue("isParent", 0) as java.lang.Boolean
    }
    
    property set isParent ($arg :  boolean) {
      setRequireValue("isParent", 0, $arg)
    }
    
    
    function workItemDisplayValue(wf : Workflow) : String {
            if (wf.State == TC_ACTIVE) {
              var wi = wf.ActiveWorkflowWorkItem
              if (wi != null) {
                if (wi.Status == TC_CHECKEDOUT) {
                    return wi.CheckedOutBy
                }
                return wi.Status as String
              }
            }
            return null
          }
        
    
    
  }
  
  
}