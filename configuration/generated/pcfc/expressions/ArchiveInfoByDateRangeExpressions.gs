package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveInfoByDateRange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchiveInfoByDateRangeExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveInfoByDateRange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchiveInfoByDateRangeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (archiveCountSummaryByDatamodelVersion :  gw.api.archiving.ArchiveCountSummaryByDatamodelVersion, beginTime :  java.util.Date, endTime :  java.util.Date) : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=ResetExcludedBecauseOfRules_Input) at ArchiveInfoByDateRange.pcf: line 89, column 86
    function action_18 () : void {
      archiveCountSummaryByDateRange.resetExcludedBecauseOfRulesFlag()
    }
    
    // 'action' attribute on ToolbarButton (id=BackButton) at ArchiveInfoByDateRange.pcf: line 35, column 150
    function action_2 () : void {
      ArchiveInfo.go()
    }
    
    // 'action' attribute on ButtonInput (id=ResetExcludedBecauseOfFailure_Input) at ArchiveInfoByDateRange.pcf: line 103, column 86
    function action_23 () : void {
      archiveCountSummaryByDateRange.resetExcludedBecauseOfFailureFlag()
    }
    
    // 'action' attribute on ButtonInput (id=Search_Input) at ArchiveInfoByDateRange.pcf: line 49, column 83
    function action_8 () : void {
      archiveCountSummaryByDateRange.BeginTime = beginTime; archiveCountSummaryByDateRange.EndTime = endTime
    }
    
    // 'action' attribute on ToolbarButton (id=BackButton) at ArchiveInfoByDateRange.pcf: line 35, column 150
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ArchiveInfo.createDestination()
    }
    
    // 'available' attribute on ButtonInput (id=ResetExcludedBecauseOfRules_Input) at ArchiveInfoByDateRange.pcf: line 89, column 86
    function available_17 () : java.lang.Boolean {
      return archiveCountSummaryByDateRange.getExcludedBecauseOfRulesCount() > 0
    }
    
    // 'available' attribute on ButtonInput (id=ResetExcludedBecauseOfFailure_Input) at ArchiveInfoByDateRange.pcf: line 103, column 86
    function available_22 () : java.lang.Boolean {
      return archiveCountSummaryByDateRange.getExcludedBecauseOfFailureCount() > 0
    }
    
    // 'available' attribute on PanelRef at ArchiveInfoByDateRange.pcf: line 111, column 64
    function available_25 () : java.lang.Boolean {
      return archiveCountSummaryByDateRange.canQuery()
    }
    
    // 'def' attribute on PanelRef at ArchiveInfoByDateRange.pcf: line 111, column 64
    function def_onEnter_27 (def :  pcf.ArchiveExcludeDetailsCV) : void {
      def.onEnter(archiveCountSummaryByDateRange)
    }
    
    // 'def' attribute on PanelRef at ArchiveInfoByDateRange.pcf: line 111, column 64
    function def_refreshVariables_28 (def :  pcf.ArchiveExcludeDetailsCV) : void {
      def.refreshVariables(archiveCountSummaryByDateRange)
    }
    
    // 'value' attribute on DateInput (id=BeginTime_Input) at ArchiveInfoByDateRange.pcf: line 60, column 32
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      beginTime = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=EndTime_Input) at ArchiveInfoByDateRange.pcf: line 68, column 30
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      endTime = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at ArchiveInfoByDateRange.pcf: line 26, column 63
    function initialValue_0 () : gw.api.archiving.ArchiveCountSummaryByDateRange {
      return new gw.api.archiving.ArchiveCountSummaryByDateRange(archiveCountSummaryByDatamodelVersion, beginTime, endTime)
    }
    
    // 'label' attribute on ToolbarButton (id=BackButton) at ArchiveInfoByDateRange.pcf: line 35, column 150
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.ServerTools.ArchiveInfo.Back", DisplayKey.get("Web.InternalTools.InfoPages.ArchiveInfo"))
    }
    
    // 'parent' attribute on Page (id=ArchiveInfoByDateRange) at ArchiveInfoByDateRange.pcf: line 11, column 86
    static function parent_31 (archiveCountSummaryByDatamodelVersion :  gw.api.archiving.ArchiveCountSummaryByDatamodelVersion, beginTime :  java.util.Date, endTime :  java.util.Date) : pcf.api.Destination {
      return pcf.ArchiveInfo.createDestination()
    }
    
    // 'title' attribute on TitleBar at ArchiveInfoByDateRange.pcf: line 30, column 142
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.ServerTools.ArchiveInfo.ArchiveInfoFor", archiveCountSummaryByDatamodelVersion.VersionString)
    }
    
    // 'value' attribute on TextInput (id=Archived_Input) at ArchiveInfoByDateRange.pcf: line 44, column 44
    function valueRoot_6 () : java.lang.Object {
      return archiveCountSummaryByDateRange
    }
    
    // 'value' attribute on DateInput (id=EndTime_Input) at ArchiveInfoByDateRange.pcf: line 68, column 30
    function value_12 () : java.util.Date {
      return endTime
    }
    
    // 'value' attribute on TextInput (id=ExcludedBecauseOfRules_Input) at ArchiveInfoByDateRange.pcf: line 82, column 46
    function value_15 () : java.lang.Integer {
      return archiveCountSummaryByDateRange.getExcludedBecauseOfRulesCount()
    }
    
    // 'value' attribute on TextInput (id=ExcludedBecauseOfFailure_Input) at ArchiveInfoByDateRange.pcf: line 96, column 46
    function value_20 () : java.lang.Integer {
      return archiveCountSummaryByDateRange.getExcludedBecauseOfFailureCount()
    }
    
    // 'value' attribute on TextInput (id=Archived_Input) at ArchiveInfoByDateRange.pcf: line 44, column 44
    function value_5 () : java.lang.Integer {
      return archiveCountSummaryByDateRange.ArchivedCount
    }
    
    // 'value' attribute on DateInput (id=BeginTime_Input) at ArchiveInfoByDateRange.pcf: line 60, column 32
    function value_9 () : java.util.Date {
      return beginTime
    }
    
    override property get CurrentLocation () : pcf.ArchiveInfoByDateRange {
      return super.CurrentLocation as pcf.ArchiveInfoByDateRange
    }
    
    property get archiveCountSummaryByDatamodelVersion () : gw.api.archiving.ArchiveCountSummaryByDatamodelVersion {
      return getVariableValue("archiveCountSummaryByDatamodelVersion", 0) as gw.api.archiving.ArchiveCountSummaryByDatamodelVersion
    }
    
    property set archiveCountSummaryByDatamodelVersion ($arg :  gw.api.archiving.ArchiveCountSummaryByDatamodelVersion) {
      setVariableValue("archiveCountSummaryByDatamodelVersion", 0, $arg)
    }
    
    property get archiveCountSummaryByDateRange () : gw.api.archiving.ArchiveCountSummaryByDateRange {
      return getVariableValue("archiveCountSummaryByDateRange", 0) as gw.api.archiving.ArchiveCountSummaryByDateRange
    }
    
    property set archiveCountSummaryByDateRange ($arg :  gw.api.archiving.ArchiveCountSummaryByDateRange) {
      setVariableValue("archiveCountSummaryByDateRange", 0, $arg)
    }
    
    property get beginTime () : java.util.Date {
      return getVariableValue("beginTime", 0) as java.util.Date
    }
    
    property set beginTime ($arg :  java.util.Date) {
      setVariableValue("beginTime", 0, $arg)
    }
    
    property get endTime () : java.util.Date {
      return getVariableValue("endTime", 0) as java.util.Date
    }
    
    property set endTime ($arg :  java.util.Date) {
      setVariableValue("endTime", 0, $arg)
    }
    
    
  }
  
  
}