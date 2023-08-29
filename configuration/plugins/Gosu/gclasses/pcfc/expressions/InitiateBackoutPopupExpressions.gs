package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/InitiateBackoutPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InitiateBackoutPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/InitiateBackoutPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InitiateBackoutPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Page :  gw.api.tools.UpgradeInfoPageHelper) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=VerifyTypekeys) at InitiateBackoutPopup.pcf: line 41, column 95
    function action_7 () : void {
      Page.startProcessToVerifyUpgradedTypecodes()
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at InitiateBackoutPopup.pcf: line 45, column 64
    function action_8 () : void {
      CurrentLocation.cancel()
    }
    
    // 'initialValue' attribute on Variable at InitiateBackoutPopup.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return (!Page.areVerifyTypecodeResultsReady() and !Page.canRunVerifyTypecodesProcessInCluster())
    }
    
    // 'label' attribute on TextInput (id=toBackout_Input) at InitiateBackoutPopup.pcf: line 26, column 35
    function label_1 () : java.lang.Object {
      return (Page.areVerifyTypecodeResultsReady() and Page.TypecodeUsages.Empty) ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.InitiateBackout.NoProblems") : DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.InitiateBackout.ToBackOut")
    }
    
    // 'label' attribute on TextInput (id=noBatchRoleInCluster_Input) at InitiateBackoutPopup.pcf: line 31, column 35
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.InitiateBackout.NoBatchRoleInCluster") 
    }
    
    // 'visible' attribute on TextInput (id=noBatchRoleInCluster_Input) at InitiateBackoutPopup.pcf: line 31, column 35
    function visible_3 () : java.lang.Boolean {
      return noBatchRoleInClusterVisible
    }
    
    // 'visible' attribute on PanelRef (id=toolbar) at InitiateBackoutPopup.pcf: line 36, column 56
    function visible_9 () : java.lang.Boolean {
      return not Page.TypecodeVerificationStarted
    }
    
    override property get CurrentLocation () : pcf.InitiateBackoutPopup {
      return super.CurrentLocation as pcf.InitiateBackoutPopup
    }
    
    property get Page () : gw.api.tools.UpgradeInfoPageHelper {
      return getVariableValue("Page", 0) as gw.api.tools.UpgradeInfoPageHelper
    }
    
    property set Page ($arg :  gw.api.tools.UpgradeInfoPageHelper) {
      setVariableValue("Page", 0, $arg)
    }
    
    property get noBatchRoleInClusterVisible () : boolean {
      return getVariableValue("noBatchRoleInClusterVisible", 0) as java.lang.Boolean
    }
    
    property set noBatchRoleInClusterVisible ($arg :  boolean) {
      setVariableValue("noBatchRoleInClusterVisible", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/InitiateBackoutPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ReportDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=No) at InitiateBackoutPopup.pcf: line 102, column 55
    function action_25 () : void {
      reportItem.Fixed = not reportItem.Fixed
    }
    
    // 'action' attribute on Link (id=Yes) at InitiateBackoutPopup.pcf: line 109, column 51
    function action_27 () : void {
      reportItem.Fixed = not reportItem.Fixed
    }
    
    // 'value' attribute on TextCell (id=tableName_Cell) at InitiateBackoutPopup.pcf: line 114, column 51
    function valueRoot_29 () : java.lang.Object {
      return reportItem
    }
    
    // 'value' attribute on TextCell (id=tableName_Cell) at InitiateBackoutPopup.pcf: line 114, column 51
    function value_28 () : java.lang.String {
      return reportItem.TableName
    }
    
    // 'value' attribute on TextCell (id=column_Cell) at InitiateBackoutPopup.pcf: line 118, column 52
    function value_31 () : java.lang.String {
      return reportItem.ColumnName
    }
    
    // 'value' attribute on TextCell (id=typelist_Cell) at InitiateBackoutPopup.pcf: line 122, column 50
    function value_34 () : java.lang.String {
      return reportItem.Typelist
    }
    
    // 'value' attribute on TextCell (id=count_Cell) at InitiateBackoutPopup.pcf: line 128, column 49
    function value_37 () : java.lang.Long {
      return reportItem.Count
    }
    
    // 'value' attribute on TextCell (id=empty_Cell) at InitiateBackoutPopup.pcf: line 135, column 34
    function value_40 () : java.lang.String {
      return reportItem.ReportItem.replace("is: ", "is:\n")
    }
    
    // 'visible' attribute on Link (id=No) at InitiateBackoutPopup.pcf: line 102, column 55
    function visible_24 () : java.lang.Boolean {
      return not reportItem.Fixed
    }
    
    // 'visible' attribute on Link (id=Yes) at InitiateBackoutPopup.pcf: line 109, column 51
    function visible_26 () : java.lang.Boolean {
      return reportItem.Fixed
    }
    
    property get reportItem () : entity.TypecodeUsageReport {
      return getIteratedValue(2) as entity.TypecodeUsageReport
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/InitiateBackoutPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReportDVExpressionsImpl extends InitiateBackoutPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=StartBackout) at InitiateBackoutPopup.pcf: line 70, column 54
    function action_12 () : void {
      CurrentLocation.commit(); Page.startProcessToCompleteIncrementalUpgradeBackOut()
    }
    
    // 'action' attribute on ToolbarButton (id=RunAgain) at InitiateBackoutPopup.pcf: line 75, column 58
    function action_14 () : void {
      Page.startProcessToVerifyUpgradedTypecodes()
    }
    
    // 'initialValue' attribute on Variable at InitiateBackoutPopup.pcf: line 58, column 23
    function initialValue_10 () : int {
      return Page.TypecodeUsages.countWhere( \ elt -> not elt.Fixed )
    }
    
    // 'percentage' attribute on ProgressInput (id=VerifyProgress_Input) at InitiateBackoutPopup.pcf: line 142, column 62
    function percentage_44 () : java.lang.Double {
      return Page.VerifyTypecodeCompletePercent
    }
    
    // 'value' attribute on TextCell (id=tableName_Cell) at InitiateBackoutPopup.pcf: line 114, column 51
    function sortValue_19 (reportItem :  entity.TypecodeUsageReport) : java.lang.Object {
      return reportItem.TableName
    }
    
    // 'value' attribute on TextCell (id=column_Cell) at InitiateBackoutPopup.pcf: line 118, column 52
    function sortValue_20 (reportItem :  entity.TypecodeUsageReport) : java.lang.Object {
      return reportItem.ColumnName
    }
    
    // 'value' attribute on TextCell (id=typelist_Cell) at InitiateBackoutPopup.pcf: line 122, column 50
    function sortValue_21 (reportItem :  entity.TypecodeUsageReport) : java.lang.Object {
      return reportItem.Typelist
    }
    
    // 'value' attribute on TextCell (id=count_Cell) at InitiateBackoutPopup.pcf: line 128, column 49
    function sortValue_22 (reportItem :  entity.TypecodeUsageReport) : java.lang.Object {
      return reportItem.Count
    }
    
    // 'value' attribute on TextCell (id=empty_Cell) at InitiateBackoutPopup.pcf: line 135, column 34
    function sortValue_23 (reportItem :  entity.TypecodeUsageReport) : java.lang.Object {
      return reportItem.ReportItem.replace("is: ", "is:\n")
    }
    
    // 'value' attribute on TextValue (id=NumFixed) at InitiateBackoutPopup.pcf: line 80, column 54
    function value_16 () : java.lang.String {
      return (numUnfixed > 0 ? DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.InitiateBackout.Unfixed", numUnfixed, Page.TypecodeUsages.size()) : DisplayKey.get("Web.InternalTools.InfoPages.UpgradeInfo.InitiateBackout.AllRowsFixed") )
    }
    
    // 'value' attribute on RowIterator (id=UsagesIterator) at InitiateBackoutPopup.pcf: line 91, column 78
    function value_42 () : java.util.List<entity.TypecodeUsageReport> {
      return Page.TypecodeUsages
    }
    
    // 'visible' attribute on ToolbarButton (id=StartBackout) at InitiateBackoutPopup.pcf: line 70, column 54
    function visible_11 () : java.lang.Boolean {
      return Page.TypecodeUsages.Empty
    }
    
    // 'visible' attribute on ToolbarButton (id=RunAgain) at InitiateBackoutPopup.pcf: line 75, column 58
    function visible_13 () : java.lang.Boolean {
      return not Page.TypecodeUsages.Empty
    }
    
    // 'visible' attribute on TextValue (id=NumFixed) at InitiateBackoutPopup.pcf: line 80, column 54
    function visible_15 () : java.lang.Boolean {
      return !Page.TypecodeUsages.Empty
    }
    
    // 'visible' attribute on ListViewInput at InitiateBackoutPopup.pcf: line 64, column 60
    function visible_43 () : java.lang.Boolean {
      return Page.areVerifyTypecodeResultsReady()
    }
    
    // 'visible' attribute on DetailViewPanel (id=ReportDV) at InitiateBackoutPopup.pcf: line 53, column 52
    function visible_45 () : java.lang.Boolean {
      return Page.TypecodeVerificationStarted
    }
    
    property get numUnfixed () : int {
      return getVariableValue("numUnfixed", 1) as java.lang.Integer
    }
    
    property set numUnfixed ($arg :  int) {
      setVariableValue("numUnfixed", 1, $arg)
    }
    
    
  }
  
  
}