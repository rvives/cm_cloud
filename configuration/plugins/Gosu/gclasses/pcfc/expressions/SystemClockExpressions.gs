package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/internal/SystemClock.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SystemClockExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/internal/SystemClock.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends SystemClockExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=ChangeDate_Input) at SystemClock.pcf: line 90, column 77
    function action_24 () : void {
      helper.changeDateTimeAsync(newDateTime)
    }
    
    // 'actionOnComplete' attribute on ProgressInput (id=Progress_Input) at SystemClock.pcf: line 95, column 49
    function action_27 () : void {
      helper.onRequestCompleted()
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at SystemClock.pcf: line 84, column 34
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      newDateTime = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateInput (id=Date_Input) at SystemClock.pcf: line 84, column 34
    function editable_18 () : java.lang.Boolean {
      return helper.PageEditable
    }
    
    // 'initialValue' attribute on Variable at SystemClock.pcf: line 76, column 24
    function initialValue_17 () : Date {
      return helper.RequestedDateTime
    }
    
    // 'percentage' attribute on ProgressInput (id=Progress_Input) at SystemClock.pcf: line 95, column 49
    function percentage_28 () : java.lang.Double {
      return helper.CompletionPercentage
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at SystemClock.pcf: line 84, column 34
    function value_19 () : java.util.Date {
      return newDateTime
    }
    
    // 'visible' attribute on ProgressInput (id=Progress_Input) at SystemClock.pcf: line 95, column 49
    function visible_26 () : java.lang.Boolean {
      return helper.RequestInProgress
    }
    
    property get newDateTime () : Date {
      return getVariableValue("newDateTime", 1) as Date
    }
    
    property set newDateTime ($arg :  Date) {
      setVariableValue("newDateTime", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/internal/SystemClock.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SystemClockExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=AddMonth) at SystemClock.pcf: line 51, column 73
    function action_11 () : void {
      helper.changeDateTimeAsync(helper.DateTime.addMonths(1))
    }
    
    // 'action' attribute on ToolbarButton (id=AddYear) at SystemClock.pcf: line 56, column 72
    function action_13 () : void {
      helper.changeDateTimeAsync(helper.DateTime.addYears(1))
    }
    
    // 'action' attribute on ToolbarButton (id=AddMinute) at SystemClock.pcf: line 31, column 74
    function action_3 () : void {
      helper.changeDateTimeAsync(helper.DateTime.addMinutes(1))
    }
    
    // 'action' attribute on ToolbarButton (id=AddHour) at SystemClock.pcf: line 36, column 72
    function action_5 () : void {
      helper.changeDateTimeAsync(helper.DateTime.addHours(1))
    }
    
    // 'action' attribute on ToolbarButton (id=AddDay) at SystemClock.pcf: line 41, column 71
    function action_7 () : void {
      helper.changeDateTimeAsync(helper.DateTime.addDays(1))
    }
    
    // 'action' attribute on ToolbarButton (id=AddWeek) at SystemClock.pcf: line 46, column 72
    function action_9 () : void {
      helper.changeDateTimeAsync(helper.DateTime.addWeeks(1))
    }
    
    // 'available' attribute on ToolbarButton (id=AddMinute) at SystemClock.pcf: line 31, column 74
    function available_2 () : java.lang.Boolean {
      return helper.PageEditable
    }
    
    // 'canEdit' attribute on Page (id=SystemClock) at SystemClock.pcf: line 12, column 63
    function canEdit_32 () : java.lang.Boolean {
      return gw.api.tools.SystemClockPageHelper.isEnabled()
    }
    
    // 'def' attribute on PanelRef at SystemClock.pcf: line 99, column 47
    function def_onEnter_30 (def :  pcf.UnsupportedToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at SystemClock.pcf: line 99, column 47
    function def_refreshVariables_31 (def :  pcf.UnsupportedToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'initialValue' attribute on Variable at SystemClock.pcf: line 18, column 50
    function initialValue_0 () : gw.api.tools.SystemClockPageHelper {
      return new gw.api.tools.SystemClockPageHelper()
    }
    
    // 'initialValue' attribute on Variable at SystemClock.pcf: line 23, column 22
    function initialValue_1 () : Object {
      helper.onPageRefresh(); return null
    }
    
    // 'label' attribute on Verbatim (id=CurrentTime) at SystemClock.pcf: line 60, column 45
    function label_14 () : java.lang.String {
      return helper.DateTime.toString()
    }
    
    // 'parent' attribute on Page (id=SystemClock) at SystemClock.pcf: line 12, column 63
    static function parent_33 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    // 'visible' attribute on AlertBar (id=NotEnabledAlert) at SystemClock.pcf: line 65, column 36
    function visible_15 () : java.lang.Boolean {
      return !helper.Enabled
    }
    
    // 'visible' attribute on AlertBar (id=InClusterAlert) at SystemClock.pcf: line 70, column 145
    function visible_16 () : java.lang.Boolean {
      return !gw.api.tools.SystemClockPageHelper.isClusterWide() && gw.api.system.PLConfigParameters.ClusteringEnabled.getValue()
    }
    
    override property get CurrentLocation () : pcf.SystemClock {
      return super.CurrentLocation as pcf.SystemClock
    }
    
    property get helper () : gw.api.tools.SystemClockPageHelper {
      return getVariableValue("helper", 0) as gw.api.tools.SystemClockPageHelper
    }
    
    property set helper ($arg :  gw.api.tools.SystemClockPageHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get onRefresh () : Object {
      return getVariableValue("onRefresh", 0) as Object
    }
    
    property set onRefresh ($arg :  Object) {
      setVariableValue("onRefresh", 0, $arg)
    }
    
    
  }
  
  
}