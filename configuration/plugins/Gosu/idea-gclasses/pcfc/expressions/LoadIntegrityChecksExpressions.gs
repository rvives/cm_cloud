package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/LoadIntegrityChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LoadIntegrityChecksExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/LoadIntegrityChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LoadIntegrityChecksExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarDownloadButton0) at LoadIntegrityChecks.pcf: line 35, column 64
    function action_3 () : void {
      PageHelper.download( AllowNonAdminRef )
    }
    
    // 'def' attribute on PanelRef at LoadIntegrityChecks.pcf: line 43, column 105
    function def_onEnter_17 (def :  pcf.LoadIntegrityChecksByStagingTableLV) : void {
      def.onEnter(PageHelper, PickedStagingTable, AllowNonAdminRef)
    }
    
    // 'def' attribute on PanelRef at LoadIntegrityChecks.pcf: line 74, column 107
    function def_onEnter_32 (def :  pcf.LoadIntegrityChecksByLoadErrorTypeLV) : void {
      def.onEnter(PageHelper, PickedLoadErrorType, AllowNonAdminRef)
    }
    
    // 'def' attribute on PanelRef at LoadIntegrityChecks.pcf: line 43, column 105
    function def_refreshVariables_18 (def :  pcf.LoadIntegrityChecksByStagingTableLV) : void {
      def.refreshVariables(PageHelper, PickedStagingTable, AllowNonAdminRef)
    }
    
    // 'def' attribute on PanelRef at LoadIntegrityChecks.pcf: line 74, column 107
    function def_refreshVariables_33 (def :  pcf.LoadIntegrityChecksByLoadErrorTypeLV) : void {
      def.refreshVariables(PageHelper, PickedLoadErrorType, AllowNonAdminRef)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=rangeInputstagintableallowref_Input) at LoadIntegrityChecks.pcf: line 64, column 47
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      AllowNonAdminRef = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=rangeInputerrortype_Input) at LoadIntegrityChecks.pcf: line 83, column 43
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      PickedLoadErrorType = (__VALUE_TO_SET as LoadErrorType)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=rangeInputstagingtable_Input) at LoadIntegrityChecks.pcf: line 53, column 61
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      PickedStagingTable = (__VALUE_TO_SET as gw.api.database.WebStagingTable)
    }
    
    // 'initialValue' attribute on Variable at LoadIntegrityChecks.pcf: line 15, column 54
    function initialValue_0 () : gw.api.tools.LoadIntegrityChecksHelper {
      return new gw.api.tools.LoadIntegrityChecksHelper()
    }
    
    // 'initialValue' attribute on Variable at LoadIntegrityChecks.pcf: line 23, column 47
    function initialValue_1 () : gw.api.database.WebStagingTable {
      return null
    }
    
    // 'initialValue' attribute on Variable at LoadIntegrityChecks.pcf: line 27, column 29
    function initialValue_2 () : LoadErrorType {
      return null
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=rangeInputerrortype_Input) at LoadIntegrityChecks.pcf: line 83, column 43
    function optionLabel_21 (VALUE :  LoadErrorType) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=rangeInputstagingtable_Input) at LoadIntegrityChecks.pcf: line 53, column 61
    function optionLabel_6 (VALUE :  gw.api.database.WebStagingTable) : java.lang.String {
      return VALUE.Name
    }
    
    // 'parent' attribute on Page (id=LoadIntegrityChecks) at LoadIntegrityChecks.pcf: line 9, column 89
    static function parent_34 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputstagintableallowref_Input) at LoadIntegrityChecks.pcf: line 64, column 47
    function valueRange_13 () : java.lang.Object {
      return new Boolean[] {true, false}
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputerrortype_Input) at LoadIntegrityChecks.pcf: line 83, column 43
    function valueRange_22 () : java.lang.Object {
      return PageHelper.getLoadErrorTypes(AllowNonAdminRef)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputstagingtable_Input) at LoadIntegrityChecks.pcf: line 53, column 61
    function valueRange_7 () : java.lang.Object {
      return PageHelper.StagingTables
    }
    
    // 'value' attribute on ToolbarRangeInput (id=rangeInputstagintableallowref_Input) at LoadIntegrityChecks.pcf: line 64, column 47
    function value_11 () : java.lang.Boolean {
      return AllowNonAdminRef
    }
    
    // 'value' attribute on ToolbarRangeInput (id=rangeInputerrortype_Input) at LoadIntegrityChecks.pcf: line 83, column 43
    function value_19 () : LoadErrorType {
      return PickedLoadErrorType
    }
    
    // 'value' attribute on ToolbarRangeInput (id=rangeInputstagingtable_Input) at LoadIntegrityChecks.pcf: line 53, column 61
    function value_4 () : gw.api.database.WebStagingTable {
      return PickedStagingTable
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputstagintableallowref_Input) at LoadIntegrityChecks.pcf: line 64, column 47
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputstagintableallowref_Input) at LoadIntegrityChecks.pcf: line 64, column 47
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputerrortype_Input) at LoadIntegrityChecks.pcf: line 83, column 43
    function verifyValueRangeIsAllowedType_23 ($$arg :  LoadErrorType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputerrortype_Input) at LoadIntegrityChecks.pcf: line 83, column 43
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputerrortype_Input) at LoadIntegrityChecks.pcf: line 83, column 43
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputerrortypeallowref_Input) at LoadIntegrityChecks.pcf: line 94, column 47
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputerrortypeallowref_Input) at LoadIntegrityChecks.pcf: line 94, column 47
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputstagingtable_Input) at LoadIntegrityChecks.pcf: line 53, column 61
    function verifyValueRangeIsAllowedType_8 ($$arg :  gw.api.database.WebStagingTable[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputstagingtable_Input) at LoadIntegrityChecks.pcf: line 53, column 61
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputstagintableallowref_Input) at LoadIntegrityChecks.pcf: line 64, column 47
    function verifyValueRange_15 () : void {
      var __valueRangeArg = new Boolean[] {true, false}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputerrortype_Input) at LoadIntegrityChecks.pcf: line 83, column 43
    function verifyValueRange_24 () : void {
      var __valueRangeArg = PageHelper.getLoadErrorTypes(AllowNonAdminRef)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputerrortypeallowref_Input) at LoadIntegrityChecks.pcf: line 94, column 47
    function verifyValueRange_30 () : void {
      var __valueRangeArg = new Boolean[] {true, false}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_29(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=rangeInputstagingtable_Input) at LoadIntegrityChecks.pcf: line 53, column 61
    function verifyValueRange_9 () : void {
      var __valueRangeArg = PageHelper.StagingTables
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    property get AllowNonAdminRef () : Boolean {
      return getVariableValue("AllowNonAdminRef", 0) as Boolean
    }
    
    property set AllowNonAdminRef ($arg :  Boolean) {
      setVariableValue("AllowNonAdminRef", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.LoadIntegrityChecks {
      return super.CurrentLocation as pcf.LoadIntegrityChecks
    }
    
    property get PageHelper () : gw.api.tools.LoadIntegrityChecksHelper {
      return getVariableValue("PageHelper", 0) as gw.api.tools.LoadIntegrityChecksHelper
    }
    
    property set PageHelper ($arg :  gw.api.tools.LoadIntegrityChecksHelper) {
      setVariableValue("PageHelper", 0, $arg)
    }
    
    property get PickedLoadErrorType () : LoadErrorType {
      return getVariableValue("PickedLoadErrorType", 0) as LoadErrorType
    }
    
    property set PickedLoadErrorType ($arg :  LoadErrorType) {
      setVariableValue("PickedLoadErrorType", 0, $arg)
    }
    
    property get PickedStagingTable () : gw.api.database.WebStagingTable {
      return getVariableValue("PickedStagingTable", 0) as gw.api.database.WebStagingTable
    }
    
    property set PickedStagingTable ($arg :  gw.api.database.WebStagingTable) {
      setVariableValue("PickedStagingTable", 0, $arg)
    }
    
    
  }
  
  
}