package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMRecordSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RDMRecordSearchPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMRecordSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RDMRecordSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at RDMRecordSearchPopup.pcf: line 90, column 80
    function pickValue_18 () : java.lang.String {
      return foundRdataSetValue.Values.get(rdataSetValues.getUidHeaderPosition())
    }
    
    // 'value' attribute on CellIterator (id=propertiesValues) at RDMRecordSearchPopup.pcf: line 96, column 50
    function value_17 () : java.lang.String[] {
      return foundRdataSetValue.Values.toArray(new String[0])
    }
    
    property get foundRdataSetValue () : gw.plugin.referencedata.RDMRecordValues {
      return getIteratedValue(1) as gw.plugin.referencedata.RDMRecordValues
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMRecordSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PropertyValueCell_Cell) at RDMRecordSearchPopup.pcf: line 100, column 47
    function value_15 () : java.lang.String {
      return propertiesValues
    }
    
    property get propertiesValues () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMRecordSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RDMRecordSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PropertyHeader_Cell) at RDMRecordSearchPopup.pcf: line 80, column 46
    function value_12 () : java.lang.String {
      return propertiesHeaders
    }
    
    property get propertiesHeaders () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMRecordSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RDMRecordSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (RDMDatasetSelectors :  gw.plugin.referencedata.RDMDatasetSelectors) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=SearchButton) at RDMRecordSearchPopup.pcf: line 61, column 64
    function action_10 () : void {
      rdataSetValues.setSearchString(searchString)
    }
    
    // 'action' attribute on ToolbarButton (id=SearchResetButton) at RDMRecordSearchPopup.pcf: line 65, column 63
    function action_11 () : void {
      searchString = ""; rdataSetValues.setSearchString(searchString)
    }
    
    // 'value' attribute on TextValue (id=SearchBar) at RDMRecordSearchPopup.pcf: line 57, column 43
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchString = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RDMRecordSearchPopup.pcf: line 18, column 68
    function initialValue_0 () : gw.plugin.referencedata.RDMRecordIteratorBackingData {
      return new gw.plugin.referencedata.RDMRecordIteratorBackingData(RDMDatasetSelectors)
    }
    
    // 'value' attribute on TextInput (id=RDMDatasetId_Input) at RDMRecordSearchPopup.pcf: line 33, column 59
    function value_1 () : java.lang.String {
      return RDMDatasetSelectors.getDatasetId()
    }
    
    // 'value' attribute on CellIterator (id=propertiesHeaders) at RDMRecordSearchPopup.pcf: line 76, column 48
    function value_14 () : java.lang.String[] {
      return rdataSetValues.getHeaders()
    }
    
    // 'value' attribute on RowIterator at RDMRecordSearchPopup.pcf: line 90, column 80
    function value_19 () : gw.plugin.referencedata.RDMRecordIteratorBackingData {
      return rdataSetValues
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at RDMRecordSearchPopup.pcf: line 39, column 62
    function value_3 () : java.lang.String {
      return RDMDatasetSelectors.getJurisdiction()
    }
    
    // 'value' attribute on DateInput (id=ReferenceDate_Input) at RDMRecordSearchPopup.pcf: line 45, column 100
    function value_5 () : java.util.Date {
      return new Date(RDMDatasetSelectors.getReferenceDate().toInstant().toEpochMilli())
    }
    
    // 'value' attribute on TextValue (id=SearchBar) at RDMRecordSearchPopup.pcf: line 57, column 43
    function value_7 () : java.lang.String {
      return searchString
    }
    
    // 'valueType' attribute on RowIterator at RDMRecordSearchPopup.pcf: line 90, column 80
    function verifyValueTypeIsAllowedType_20 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RDMRecordSearchPopup.pcf: line 90, column 80
    function verifyValueTypeIsAllowedType_20 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RDMRecordSearchPopup.pcf: line 90, column 80
    function verifyValueTypeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at RDMRecordSearchPopup.pcf: line 90, column 80
    function verifyValueType_21 () : void {
      var __valueTypeArg : gw.plugin.referencedata.RDMRecordIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_20(__valueTypeArg)
    }
    
    override property get CurrentLocation () : pcf.RDMRecordSearchPopup {
      return super.CurrentLocation as pcf.RDMRecordSearchPopup
    }
    
    property get RDMDatasetSelectors () : gw.plugin.referencedata.RDMDatasetSelectors {
      return getVariableValue("RDMDatasetSelectors", 0) as gw.plugin.referencedata.RDMDatasetSelectors
    }
    
    property set RDMDatasetSelectors ($arg :  gw.plugin.referencedata.RDMDatasetSelectors) {
      setVariableValue("RDMDatasetSelectors", 0, $arg)
    }
    
    property get rdataSetValues () : gw.plugin.referencedata.RDMRecordIteratorBackingData {
      return getVariableValue("rdataSetValues", 0) as gw.plugin.referencedata.RDMRecordIteratorBackingData
    }
    
    property set rdataSetValues ($arg :  gw.plugin.referencedata.RDMRecordIteratorBackingData) {
      setVariableValue("rdataSetValues", 0, $arg)
    }
    
    property get searchString () : String {
      return getVariableValue("searchString", 0) as String
    }
    
    property set searchString ($arg :  String) {
      setVariableValue("searchString", 0, $arg)
    }
    
    
  }
  
  
}