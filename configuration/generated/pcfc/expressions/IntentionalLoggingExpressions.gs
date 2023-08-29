package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/IntentionalLogging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntentionalLoggingExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/IntentionalLogging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntentionalLoggingExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=globalButtonOn) at IntentionalLogging.pcf: line 35, column 101
    function action_3 () : void {
      IntentionalLoggingData.updateGlobalState(true)
    }
    
    // 'action' attribute on ToolbarButton (id=globalButtonOff) at IntentionalLogging.pcf: line 41, column 102
    function action_5 () : void {
      IntentionalLoggingData.updateGlobalState(false)
    }
    
    // 'available' attribute on ToolbarButton (id=globalButtonOn) at IntentionalLogging.pcf: line 35, column 101
    function available_2 () : java.lang.Boolean {
      return IntentionalLoggingData.shouldGlobalOnButtonBeVisible()
    }
    
    // 'available' attribute on ToolbarButton (id=globalButtonOff) at IntentionalLogging.pcf: line 41, column 102
    function available_4 () : java.lang.Boolean {
      return IntentionalLoggingData.shouldGlobalOffButtonBeVisible()
    }
    
    // 'canVisit' attribute on Page (id=IntentionalLogging) at IntentionalLogging.pcf: line 13, column 78
    static function canVisit_24 () : java.lang.Boolean {
      return perm.User.EditLog or perm.User.DevAllAccess
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 19, column 49
    function initialValue_0 () : gw.api.tools.IntentionalLoggingUI {
      return new gw.api.tools.IntentionalLoggingUI()
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 24, column 34
    function initialValue_1 () : org.slf4j.Marker[] {
      return IntentionalLoggingData.AvailableMarkers.toTypedArray()
    }
    
    // 'parent' attribute on Page (id=IntentionalLogging) at IntentionalLogging.pcf: line 13, column 78
    static function parent_25 () : pcf.api.Destination {
      return pcf.ServerTools.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IntentionalLogging.pcf: line 80, column 53
    function sortValue_6 (IntentionalLoggingRow :  org.slf4j.Marker) : java.lang.Object {
      return IntentionalLoggingRow.Name
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at IntentionalLogging.pcf: line 85, column 96
    function sortValue_7 (IntentionalLoggingRow :  org.slf4j.Marker) : java.lang.Object {
      var turnOnEnabled : boolean = (IntentionalLoggingData.shouldSwitchOnButtonBeVisible(IntentionalLoggingRow))
var turnOffEnabled : boolean = (IntentionalLoggingData.shouldSwitchOffButtonBeVisible(IntentionalLoggingRow))
var isEnabled : boolean = (IntentionalLoggingData.isEnabled(IntentionalLoggingRow))
return isEnabled ? DisplayKey.get("Web.InternalTools.IntentionalLogging.StatusOn")                  : DisplayKey.get("Web.InternalTools.IntentionalLogging.StatusOff")
    }
    
    // 'value' attribute on RowIterator (id=IntentionalLoggingRowIterator) at IntentionalLogging.pcf: line 58, column 44
    function value_23 () : org.slf4j.Marker[] {
      return Markers
    }
    
    // 'visible' attribute on LinkCell (id=Actions) at IntentionalLogging.pcf: line 89, column 74
    function visible_8 () : java.lang.Boolean {
      return perm.User.EditPlugin or perm.User.DevAllAccess
    }
    
    override property get CurrentLocation () : pcf.IntentionalLogging {
      return super.CurrentLocation as pcf.IntentionalLogging
    }
    
    property get IntentionalLoggingData () : gw.api.tools.IntentionalLoggingUI {
      return getVariableValue("IntentionalLoggingData", 0) as gw.api.tools.IntentionalLoggingUI
    }
    
    property set IntentionalLoggingData ($arg :  gw.api.tools.IntentionalLoggingUI) {
      setVariableValue("IntentionalLoggingData", 0, $arg)
    }
    
    property get Markers () : org.slf4j.Marker[] {
      return getVariableValue("Markers", 0) as org.slf4j.Marker[]
    }
    
    property set Markers ($arg :  org.slf4j.Marker[]) {
      setVariableValue("Markers", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/IntentionalLogging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IntentionalLoggingExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Start) at IntentionalLogging.pcf: line 95, column 44
    function action_18 () : void {
      IntentionalLoggingData.updateMarkerState(IntentionalLoggingRow, true)
    }
    
    // 'action' attribute on Link (id=Stop) at IntentionalLogging.pcf: line 101, column 44
    function action_20 () : void {
      IntentionalLoggingData.updateMarkerState(IntentionalLoggingRow, false)
    }
    
    // 'available' attribute on Link (id=Start) at IntentionalLogging.pcf: line 95, column 44
    function available_17 () : java.lang.Boolean {
      return turnOnEnabled
    }
    
    // 'available' attribute on Link (id=Stop) at IntentionalLogging.pcf: line 101, column 44
    function available_19 () : java.lang.Boolean {
      return turnOffEnabled
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 68, column 31
    function initialValue_10 () : boolean {
      return IntentionalLoggingData.shouldSwitchOffButtonBeVisible(IntentionalLoggingRow)
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 73, column 31
    function initialValue_11 () : boolean {
      return IntentionalLoggingData.isEnabled(IntentionalLoggingRow)
    }
    
    // 'initialValue' attribute on Variable at IntentionalLogging.pcf: line 63, column 31
    function initialValue_9 () : boolean {
      return IntentionalLoggingData.shouldSwitchOnButtonBeVisible(IntentionalLoggingRow)
    }
    
    // RowIterator (id=IntentionalLoggingRowIterator) at IntentionalLogging.pcf: line 58, column 44
    function initializeVariables_22 () : void {
        turnOnEnabled = IntentionalLoggingData.shouldSwitchOnButtonBeVisible(IntentionalLoggingRow);
  turnOffEnabled = IntentionalLoggingData.shouldSwitchOffButtonBeVisible(IntentionalLoggingRow);
  isEnabled = IntentionalLoggingData.isEnabled(IntentionalLoggingRow);

    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IntentionalLogging.pcf: line 80, column 53
    function valueRoot_13 () : java.lang.Object {
      return IntentionalLoggingRow
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IntentionalLogging.pcf: line 80, column 53
    function value_12 () : java.lang.String {
      return IntentionalLoggingRow.Name
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at IntentionalLogging.pcf: line 85, column 96
    function value_15 () : java.lang.String {
      return isEnabled ? DisplayKey.get("Web.InternalTools.IntentionalLogging.StatusOn")                  : DisplayKey.get("Web.InternalTools.IntentionalLogging.StatusOff")
    }
    
    // 'visible' attribute on LinkCell (id=Actions) at IntentionalLogging.pcf: line 89, column 74
    function visible_21 () : java.lang.Boolean {
      return perm.User.EditPlugin or perm.User.DevAllAccess
    }
    
    property get IntentionalLoggingRow () : org.slf4j.Marker {
      return getIteratedValue(1) as org.slf4j.Marker
    }
    
    property get isEnabled () : boolean {
      return getVariableValue("isEnabled", 1) as java.lang.Boolean
    }
    
    property set isEnabled ($arg :  boolean) {
      setVariableValue("isEnabled", 1, $arg)
    }
    
    property get turnOffEnabled () : boolean {
      return getVariableValue("turnOffEnabled", 1) as java.lang.Boolean
    }
    
    property set turnOffEnabled ($arg :  boolean) {
      setVariableValue("turnOffEnabled", 1, $arg)
    }
    
    property get turnOnEnabled () : boolean {
      return getVariableValue("turnOnEnabled", 1) as java.lang.Boolean
    }
    
    property set turnOnEnabled ($arg :  boolean) {
      setVariableValue("turnOnEnabled", 1, $arg)
    }
    
    
  }
  
  
}