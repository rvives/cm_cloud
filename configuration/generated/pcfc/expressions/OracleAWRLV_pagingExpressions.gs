package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/OracleAWRLV.paging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OracleAWRLV_pagingExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/OracleAWRLV.paging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OracleAWRLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=selector_Cell) at OracleAWRLV.paging.pcf: line 25, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Row.SnapshotChosen = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=selector_Cell) at OracleAWRLV.paging.pcf: line 25, column 38
    function valueRoot_2 () : java.lang.Object {
      return Row
    }
    
    // 'value' attribute on CheckBoxCell (id=selector_Cell) at OracleAWRLV.paging.pcf: line 25, column 38
    function value_0 () : java.lang.Boolean {
      return Row.SnapshotChosen
    }
    
    // 'value' attribute on DateCell (id=startuptime_Cell) at OracleAWRLV.paging.pcf: line 48, column 36
    function value_10 () : java.util.Date {
      return Row.StartupTime
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at OracleAWRLV.paging.pcf: line 53, column 36
    function value_13 () : java.lang.String {
      return Row.Description
    }
    
    // 'value' attribute on TextCell (id=SnapshotID_Cell) at OracleAWRLV.paging.pcf: line 34, column 42
    function value_4 () : java.lang.Integer {
      return Row.Id
    }
    
    // 'value' attribute on DateCell (id=time_Cell) at OracleAWRLV.paging.pcf: line 41, column 33
    function value_7 () : java.util.Date {
      return Row.SnapTime
    }
    
    property get Row () : gw.api.database.DatabaseSnapshotInfo {
      return getIteratedValue(1) as gw.api.database.DatabaseSnapshotInfo
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/OracleAWRLV.paging.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OracleAWRLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at OracleAWRLV.paging.pcf: line 19, column 58
    function value_16 () : gw.api.database.DatabaseSnapshotInfo[] {
      return Snapshots
    }
    
    property get Snapshots () : gw.api.database.DatabaseSnapshotInfo[] {
      return getRequireValue("Snapshots", 0) as gw.api.database.DatabaseSnapshotInfo[]
    }
    
    property set Snapshots ($arg :  gw.api.database.DatabaseSnapshotInfo[]) {
      setRequireValue("Snapshots", 0, $arg)
    }
    
    
  }
  
  
}