package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/LoadIntegrityChecksByStagingTableLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LoadIntegrityChecksByStagingTableLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/LoadIntegrityChecksByStagingTableLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LoadIntegrityChecksByStagingTableLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=multi_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 46, column 23
    function action_8 () : void {
      LoadIntegrityChecksCompoundLVPopup.push(LoadIntegrityChecks, AllowNonAdminRef, Check)
    }
    
    // 'action' attribute on TextCell (id=multi_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 46, column 23
    function action_dest_9 () : pcf.api.Destination {
      return pcf.LoadIntegrityChecksCompoundLVPopup.createDestination(LoadIntegrityChecks, AllowNonAdminRef, Check)
    }
    
    // 'value' attribute on TextCell (id=query_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 53, column 24
    function valueRoot_11 () : java.lang.Object {
      return Check.CompoundIntegrityCheck
    }
    
    // 'value' attribute on TypeKeyCell (id=errortype_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 29, column 24
    function valueRoot_2 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TypeKeyCell (id=errortype_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 29, column 24
    function value_1 () : typekey.LoadErrorType {
      return Check.LoadErrorType
    }
    
    // 'value' attribute on TextCell (id=query_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 53, column 24
    function value_10 () : java.lang.String {
      return Check.CompoundIntegrityCheck.SelectBody
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 36, column 24
    function value_4 () : java.lang.String {
      return Check.Description
    }
    
    // 'valueVisible' attribute on TextCell (id=multi_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 46, column 23
    function visible_7 () : java.lang.Boolean {
      return LoadIntegrityChecks.multiQuery(Check)
    }
    
    property get Check () : com.guidewire.pl.system.database.datamodel.LoaderSQLIntegrityCheck {
      return getIteratedValue(1) as com.guidewire.pl.system.database.datamodel.LoaderSQLIntegrityCheck
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/LoadIntegrityChecksByStagingTableLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LoadIntegrityChecksByStagingTableLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=errortype_Cell) at LoadIntegrityChecksByStagingTableLV.pcf: line 29, column 24
    function sortValue_0 (Check :  com.guidewire.pl.system.database.datamodel.LoaderSQLIntegrityCheck) : java.lang.Object {
      return Check.LoadErrorType
    }
    
    // 'value' attribute on RowIterator at LoadIntegrityChecksByStagingTableLV.pcf: line 21, column 108
    function value_13 () : java.util.List<com.guidewire.pl.system.database.datamodel.LoaderSQLIntegrityCheck> {
      return LoadIntegrityChecks.getIntegrityChecksByStagingTable(AllowNonAdminRef, PickedStagingTable)
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
    
    property get PickedStagingTable () : gw.api.database.WebStagingTable {
      return getRequireValue("PickedStagingTable", 0) as gw.api.database.WebStagingTable
    }
    
    property set PickedStagingTable ($arg :  gw.api.database.WebStagingTable) {
      setRequireValue("PickedStagingTable", 0, $arg)
    }
    
    
  }
  
  
}