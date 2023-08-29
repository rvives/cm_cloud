package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecksChangeNumOfWorkersPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ConsistencyChecksChangeNumOfWorkersPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecksChangeNumOfWorkersPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConsistencyChecksChangeNumOfWorkersPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (CCPageHelper :  gw.api.tools.ConsistencyChecksRunsPageHelper) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 35, column 92
    function action_3 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyButton) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 40, column 96
    function action_4 () : void {
      CCPageHelper.setDesiredNumberOfThreads(DesiredNumThreads)
    }
    
    // 'value' attribute on TextInput (id=DesiredNumThreads_Input) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 61, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      DesiredNumThreads = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 20, column 104
    function initialValue_0 () : java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo> {
      return CCPageHelper.getWorkQueueExecutors(false)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 25, column 19
    function initialValue_1 () : int {
      return CCPageHelper.calcNumberOfThreads(WorkQueueExecutors)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 29, column 19
    function initialValue_2 () : int {
      return ActualNumThreads
    }
    
    // 'label' attribute on AlertBar (id=OneServerAlert) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 46, column 139
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.DBConsistCheckRun.NumberOfWorkers.OneServer", BatchProcessType.TC_DBCONSISTENCYCHECK)
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=DesiredNumThreads_Input) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 61, column 44
    function requestValidationExpression_9 (VALUE :  java.lang.Integer) : java.lang.Object {
      return VALUE > 0 ? null : DisplayKey.get("Validator.PositiveInteger", VALUE)
    }
    
    // 'sortBy' attribute on IteratorSort at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 78, column 30
    function sortBy_13 (Executor :  gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo) : java.lang.Object {
      return Executor.NumWorkers
    }
    
    // 'sortBy' attribute on IteratorSort at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 81, column 30
    function sortBy_14 (Executor :  gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo) : java.lang.Object {
      return Executor.ServerId
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 86, column 44
    function sortValue_15 (Executor :  gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo) : java.lang.Object {
      return Executor.ServerId
    }
    
    // 'value' attribute on TextCell (id=NumWorkers_Cell) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 92, column 48
    function sortValue_16 (Executor :  gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo) : java.lang.Object {
      return Executor.NumWorkers
    }
    
    // 'value' attribute on TextCell (id=Active_Cell) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 96, column 219
    function sortValue_17 (Executor :  gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo) : java.lang.Object {
      return Executor.InCluster ? DisplayKey.get("Web.InternalTools.DBConsistCheckRun.ExecutorActive.Yes") : DisplayKey.get("Web.InternalTools.DBConsistCheckRun.ExecutorActive.Unknown")
    }
    
    // 'value' attribute on TextInput (id=DesiredNumThreads_Input) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 61, column 44
    function value_10 () : java.lang.Integer {
      return DesiredNumThreads
    }
    
    // 'value' attribute on RowIterator at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 74, column 114
    function value_26 () : java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo> {
      return WorkQueueExecutors
    }
    
    // 'value' attribute on TextInput (id=ActualNumThreads_Input) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 53, column 44
    function value_7 () : java.lang.Integer {
      return ActualNumThreads
    }
    
    // 'visible' attribute on AlertBar (id=OneServerAlert) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 46, column 139
    function visible_5 () : java.lang.Boolean {
      return DesiredNumThreads == ActualNumThreads and CCPageHelper.isOnlyOneServerInClusterProcessingWorkQueue(WorkQueueExecutors)
    }
    
    property get ActualNumThreads () : int {
      return getVariableValue("ActualNumThreads", 0) as java.lang.Integer
    }
    
    property set ActualNumThreads ($arg :  int) {
      setVariableValue("ActualNumThreads", 0, $arg)
    }
    
    property get CCPageHelper () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return getVariableValue("CCPageHelper", 0) as gw.api.tools.ConsistencyChecksRunsPageHelper
    }
    
    property set CCPageHelper ($arg :  gw.api.tools.ConsistencyChecksRunsPageHelper) {
      setVariableValue("CCPageHelper", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ConsistencyChecksChangeNumOfWorkersPopup {
      return super.CurrentLocation as pcf.ConsistencyChecksChangeNumOfWorkersPopup
    }
    
    property get DesiredNumThreads () : int {
      return getVariableValue("DesiredNumThreads", 0) as java.lang.Integer
    }
    
    property set DesiredNumThreads ($arg :  int) {
      setVariableValue("DesiredNumThreads", 0, $arg)
    }
    
    property get WorkQueueExecutors () : java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo> {
      return getVariableValue("WorkQueueExecutors", 0) as java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo>
    }
    
    property set WorkQueueExecutors ($arg :  java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo>) {
      setVariableValue("WorkQueueExecutors", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ConsistencyChecksChangeNumOfWorkersPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ConsistencyChecksChangeNumOfWorkersPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 86, column 44
    function valueRoot_19 () : java.lang.Object {
      return Executor
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 86, column 44
    function value_18 () : java.lang.String {
      return Executor.ServerId
    }
    
    // 'value' attribute on TextCell (id=NumWorkers_Cell) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 92, column 48
    function value_21 () : java.lang.Integer {
      return Executor.NumWorkers
    }
    
    // 'value' attribute on TextCell (id=Active_Cell) at ConsistencyChecksChangeNumOfWorkersPopup.pcf: line 96, column 219
    function value_24 () : java.lang.String {
      return Executor.InCluster ? DisplayKey.get("Web.InternalTools.DBConsistCheckRun.ExecutorActive.Yes") : DisplayKey.get("Web.InternalTools.DBConsistCheckRun.ExecutorActive.Unknown")
    }
    
    property get Executor () : gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo {
      return getIteratedValue(1) as gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo
    }
    
    
  }
  
  
}