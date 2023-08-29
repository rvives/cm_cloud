package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ExportDataDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExportDataDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ExportDataDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExportDataDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ExportButton) at ExportDataDV.pcf: line 19, column 86
    function allCheckedRowsAction_0 (CheckedValues :  com.guidewire.pl.system.exim.ExportDataSet[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.BaseAdminUtil.exportData(ExportDataInfo, CheckedValues)
    }
    
    // 'value' attribute on TextCell (id=DataSet_Cell) at ExportDataDV.pcf: line 37, column 46
    function sortValue_1 (dataset :  com.guidewire.pl.system.exim.ExportDataSet) : java.lang.Object {
      return dataset.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=DataSetIterator) at ExportDataDV.pcf: line 32, column 90
    function value_5 () : java.util.List<com.guidewire.pl.system.exim.ExportDataSet> {
      return ExportDataInfo.AvailableDataSets as List<com.guidewire.pl.system.exim.ExportDataSet>
    }
    
    property get ExportDataInfo () : gw.api.admin.ExportDataInfo {
      return getRequireValue("ExportDataInfo", 0) as gw.api.admin.ExportDataInfo
    }
    
    property set ExportDataInfo ($arg :  gw.api.admin.ExportDataInfo) {
      setRequireValue("ExportDataInfo", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ExportDataDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ExportDataDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=DataSet_Cell) at ExportDataDV.pcf: line 37, column 46
    function valueRoot_3 () : java.lang.Object {
      return dataset
    }
    
    // 'value' attribute on TextCell (id=DataSet_Cell) at ExportDataDV.pcf: line 37, column 46
    function value_2 () : java.lang.String {
      return dataset.DisplayName
    }
    
    property get dataset () : com.guidewire.pl.system.exim.ExportDataSet {
      return getIteratedValue(1) as com.guidewire.pl.system.exim.ExportDataSet
    }
    
    
  }
  
  
}