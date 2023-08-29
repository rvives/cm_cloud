package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ImportWizard_ConflictScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportWizard_ConflictScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ImportWizard_ConflictScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportWizard_ConflictScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Overwrite_Input) at ImportWizard_ConflictScreen.pcf: line 44, column 49
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      ImportDataConflict.Overwrite = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at ImportWizard_ConflictScreen.pcf: line 63, column 52
    function sortValue_18 (FieldConflict :  gw.api.admin.ImportDataFieldConflict) : java.lang.Object {
      return FieldConflict.FieldName
    }
    
    // 'value' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function sortValue_19 (FieldConflict :  gw.api.admin.ImportDataFieldConflict) : java.lang.Object {
      return FieldConflict.ExistingValue
    }
    
    // 'value' attribute on TextCell (id=ImportValue_Cell) at ImportWizard_ConflictScreen.pcf: line 75, column 54
    function sortValue_20 (FieldConflict :  gw.api.admin.ImportDataFieldConflict) : java.lang.Object {
      return FieldConflict.ImportValue
    }
    
    // 'value' attribute on TextInput (id=Resolution_Input) at ImportWizard_ConflictScreen.pcf: line 23, column 69
    function valueRoot_1 () : java.lang.Object {
      return ImportDataInfo
    }
    
    // 'value' attribute on TextInput (id=Type_Input) at ImportWizard_ConflictScreen.pcf: line 31, column 50
    function valueRoot_6 () : java.lang.Object {
      return ImportDataConflict
    }
    
    // 'value' attribute on TextInput (id=Resolution_Input) at ImportWizard_ConflictScreen.pcf: line 23, column 69
    function value_0 () : gw.api.admin.ImportDataInfo.ResolutionOption {
      return ImportDataInfo.ResolutionStrategy
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at ImportWizard_ConflictScreen.pcf: line 39, column 51
    function value_11 () : java.lang.String {
      return ImportDataConflict.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=Overwrite_Input) at ImportWizard_ConflictScreen.pcf: line 44, column 49
    function value_14 () : java.lang.Boolean {
      return ImportDataConflict.Overwrite
    }
    
    // 'value' attribute on TextInput (id=Message_Input) at ImportWizard_ConflictScreen.pcf: line 27, column 156
    function value_3 () : java.lang.String {
      return DisplayKey.get("Web.Admin.ImportWizard.ConflictDV.ConflictNumber",  ImportDataConflict.Number ,  ImportDataInfo.NumConflicts)
    }
    
    // 'value' attribute on RowIterator at ImportWizard_ConflictScreen.pcf: line 57, column 66
    function value_38 () : gw.api.admin.ImportDataFieldConflict[] {
      return ImportDataConflict.FieldConflicts
    }
    
    // 'value' attribute on TextInput (id=Type_Input) at ImportWizard_ConflictScreen.pcf: line 31, column 50
    function value_5 () : java.lang.String {
      return ImportDataConflict.EntityType
    }
    
    // 'value' attribute on TextInput (id=PublicID_Input) at ImportWizard_ConflictScreen.pcf: line 35, column 48
    function value_8 () : java.lang.String {
      return ImportDataConflict.PublicID
    }
    
    property get ImportDataConflict () : gw.api.admin.ImportDataConflict {
      return getRequireValue("ImportDataConflict", 0) as gw.api.admin.ImportDataConflict
    }
    
    property set ImportDataConflict ($arg :  gw.api.admin.ImportDataConflict) {
      setRequireValue("ImportDataConflict", 0, $arg)
    }
    
    property get ImportDataInfo () : gw.api.admin.ImportDataInfo {
      return getRequireValue("ImportDataInfo", 0) as gw.api.admin.ImportDataInfo
    }
    
    property set ImportDataInfo ($arg :  gw.api.admin.ImportDataInfo) {
      setRequireValue("ImportDataInfo", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ImportWizard_ConflictScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ImportWizard_ConflictScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function action_25 () : void {
      ImportWizard_ArrayDiffPopup.push(FieldConflict.ArrayDifferences)
    }
    
    // 'action' attribute on TextCell (id=ImportValue_Cell) at ImportWizard_ConflictScreen.pcf: line 75, column 54
    function action_32 () : void {
      ImportWizard_ArrayDiffPopup.push(FieldConflict.ArrayDifferences)
    }
    
    // 'action' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function action_dest_26 () : pcf.api.Destination {
      return pcf.ImportWizard_ArrayDiffPopup.createDestination(FieldConflict.ArrayDifferences)
    }
    
    // 'action' attribute on TextCell (id=ImportValue_Cell) at ImportWizard_ConflictScreen.pcf: line 75, column 54
    function action_dest_33 () : pcf.api.Destination {
      return pcf.ImportWizard_ArrayDiffPopup.createDestination(FieldConflict.ArrayDifferences)
    }
    
    // 'available' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function available_24 () : java.lang.Boolean {
      return FieldConflict.isArrayConflict()
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at ImportWizard_ConflictScreen.pcf: line 63, column 52
    function valueRoot_22 () : java.lang.Object {
      return FieldConflict
    }
    
    // 'value' attribute on TextCell (id=FieldName_Cell) at ImportWizard_ConflictScreen.pcf: line 63, column 52
    function value_21 () : java.lang.String {
      return FieldConflict.FieldName
    }
    
    // 'value' attribute on TextCell (id=ExistingValue_Cell) at ImportWizard_ConflictScreen.pcf: line 69, column 56
    function value_27 () : java.lang.String {
      return FieldConflict.ExistingValue
    }
    
    // 'value' attribute on TextCell (id=ImportValue_Cell) at ImportWizard_ConflictScreen.pcf: line 75, column 54
    function value_34 () : java.lang.String {
      return FieldConflict.ImportValue
    }
    
    property get FieldConflict () : gw.api.admin.ImportDataFieldConflict {
      return getIteratedValue(1) as gw.api.admin.ImportDataFieldConflict
    }
    
    
  }
  
  
}