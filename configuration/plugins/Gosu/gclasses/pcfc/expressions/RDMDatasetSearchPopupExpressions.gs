package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMDatasetSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RDMDatasetSearchPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMDatasetSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RDMDatasetSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=DataSetId_Cell) at RDMDatasetSearchPopup.pcf: line 38, column 33
    function valueRoot_3 () : java.lang.Object {
      return foundRDMDataset
    }
    
    // 'value' attribute on TextCell (id=DataSetId_Cell) at RDMDatasetSearchPopup.pcf: line 38, column 33
    function value_2 () : java.lang.String {
      return foundRDMDataset.DatasetId
    }
    
    property get foundRDMDataset () : gw.plugin.referencedata.RDMDataset {
      return getIteratedValue(1) as gw.plugin.referencedata.RDMDataset
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMDatasetSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RDMDatasetSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at RDMDatasetSearchPopup.pcf: line 16, column 73
    function initialValue_0 () : java.util.List<gw.plugin.referencedata.RDMDataset> {
      return gw.plugin.referencedata.ReferenceDataPluginProvider.get().getAllDatasets("") /*Need to put filter here*/
    }
    
    // 'value' attribute on TextCell (id=DataSetId_Cell) at RDMDatasetSearchPopup.pcf: line 38, column 33
    function sortValue_1 (foundRDMDataset :  gw.plugin.referencedata.RDMDataset) : java.lang.Object {
      return foundRDMDataset.DatasetId
    }
    
    // 'value' attribute on RowIterator at RDMDatasetSearchPopup.pcf: line 32, column 85
    function value_6 () : java.util.List<gw.plugin.referencedata.RDMDataset> {
      return RDMDatasets
    }
    
    override property get CurrentLocation () : pcf.RDMDatasetSearchPopup {
      return super.CurrentLocation as pcf.RDMDatasetSearchPopup
    }
    
    property get RDMDatasets () : java.util.List<gw.plugin.referencedata.RDMDataset> {
      return getVariableValue("RDMDatasets", 0) as java.util.List<gw.plugin.referencedata.RDMDataset>
    }
    
    property set RDMDatasets ($arg :  java.util.List<gw.plugin.referencedata.RDMDataset>) {
      setVariableValue("RDMDatasets", 0, $arg)
    }
    
    
  }
  
  
}