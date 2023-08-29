package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/LoadIntegrityChecksByLoadErrorTypeLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LoadIntegrityChecksByLoadErrorTypeLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/LoadIntegrityChecksByLoadErrorTypeLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LoadIntegrityChecksByLoadErrorTypeLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=multi_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 44, column 23
    function action_8 () : void {
      LoadIntegrityChecksCompoundLVPopup.push(LoadIntegrityChecks, AllowNonAdminRef, Check)
    }
    
    // 'action' attribute on TextCell (id=multi_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 44, column 23
    function action_dest_9 () : pcf.api.Destination {
      return pcf.LoadIntegrityChecksCompoundLVPopup.createDestination(LoadIntegrityChecks, AllowNonAdminRef, Check)
    }
    
    // 'value' attribute on TextCell (id=query_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 51, column 24
    function valueRoot_11 () : java.lang.Object {
      return Check.CompoundIntegrityCheck
    }
    
    // 'value' attribute on TextCell (id=stagingtable_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 28, column 44
    function valueRoot_2 () : java.lang.Object {
      return Check.StagingTable
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 35, column 24
    function valueRoot_5 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TextCell (id=stagingtable_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 28, column 44
    function value_1 () : java.lang.String {
      return Check.StagingTable.Name
    }
    
    // 'value' attribute on TextCell (id=query_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 51, column 24
    function value_10 () : java.lang.String {
      return Check.CompoundIntegrityCheck.SelectBody
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 35, column 24
    function value_4 () : java.lang.String {
      return Check.Description
    }
    
    // 'valueVisible' attribute on TextCell (id=multi_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 44, column 23
    function visible_7 () : java.lang.Boolean {
      return LoadIntegrityChecks.multiQuery(Check)
    }
    
    property get Check () : com.guidewire.pl.system.database.datamodel.LoaderSQLIntegrityCheck {
      return getIteratedValue(1) as com.guidewire.pl.system.database.datamodel.LoaderSQLIntegrityCheck
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/LoadIntegrityChecksByLoadErrorTypeLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LoadIntegrityChecksByLoadErrorTypeLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=stagingtable_Cell) at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 28, column 44
    function sortValue_0 (Check :  com.guidewire.pl.system.database.datamodel.LoaderSQLIntegrityCheck) : java.lang.Object {
      return Check.StagingTable.Name
    }
    
    // 'value' attribute on RowIterator at LoadIntegrityChecksByLoadErrorTypeLV.pcf: line 21, column 108
    function value_13 () : java.util.List<com.guidewire.pl.system.database.datamodel.LoaderSQLIntegrityCheck> {
      return LoadIntegrityChecks.getIntegrityChecksByLoadErrorType(AllowNonAdminRef, PickedLoadErrorType)
    }
    
    property get AllowNonAdminRef () : Boolean {
      return getRequireValue("AllowNonAdminRef", 0) as Boolean
    }
    
    property set AllowNonAdminRef ($arg :  Boolean) {
      setRequireValue("AllowNonAdminRef", 0, $arg)
    }
    
    property get LoadIntegrityChecks () : gw.api.tools.LoadIntegrityChecksHelper {
      return getRequireValue("LoadIntegrityChecks", 0) as gw.api.tools.LoadIntegrityChecksHelper
    }
    
    property set LoadIntegrityChecks ($arg :  gw.api.tools.LoadIntegrityChecksHelper) {
      setRequireValue("LoadIntegrityChecks", 0, $arg)
    }
    
    property get PickedLoadErrorType () : LoadErrorType {
      return getRequireValue("PickedLoadErrorType", 0) as LoadErrorType
    }
    
    property set PickedLoadErrorType ($arg :  LoadErrorType) {
      setRequireValue("PickedLoadErrorType", 0, $arg)
    }
    
    
  }
  
  
}