package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/Properties.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PropertiesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/Properties.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PropertiesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PropertiesLVName_Cell) at Properties.pcf: line 74, column 45
    function action_20 () : void {
      PropertyDetail.go(runtimeProperty)
    }
    
    // 'action' attribute on TextCell (id=PropertiesLVName_Cell) at Properties.pcf: line 74, column 45
    function action_dest_21 () : pcf.api.Destination {
      return pcf.PropertyDetail.createDestination(runtimeProperty)
    }
    
    // 'value' attribute on TypeKeyCell (id=PropertiesLVGroup_Cell) at Properties.pcf: line 68, column 57
    function valueRoot_18 () : java.lang.Object {
      return runtimeProperty
    }
    
    // 'value' attribute on TypeKeyCell (id=PropertiesLVGroup_Cell) at Properties.pcf: line 68, column 57
    function value_17 () : typekey.RuntimePropertyGroup {
      return runtimeProperty.PropertyGroup
    }
    
    // 'value' attribute on TextCell (id=PropertiesLVName_Cell) at Properties.pcf: line 74, column 45
    function value_22 () : java.lang.String {
      return runtimeProperty.Name
    }
    
    // 'value' attribute on TextCell (id=PropertiesLVDescription_Cell) at Properties.pcf: line 78, column 52
    function value_25 () : java.lang.String {
      return runtimeProperty.Description
    }
    
    // 'value' attribute on TextCell (id=PropertiesLVValue_Cell) at Properties.pcf: line 82, column 46
    function value_28 () : java.lang.String {
      return runtimeProperty.Value
    }
    
    property get runtimeProperty () : entity.RuntimeProperty {
      return getIteratedValue(1) as entity.RuntimeProperty
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/properties/Properties.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertiesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=PropertiesExportButton) at Properties.pcf: line 44, column 89
    function action_10 () : void {
      ExportProperties.go()
    }
    
    // 'action' attribute on ToolbarButton (id=PropertiesNewButton) at Properties.pcf: line 25, column 88
    function action_2 () : void {
      NewProperty.go()
    }
    
    // 'action' attribute on ToolbarButton (id=PropertiesImportButton) at Properties.pcf: line 39, column 89
    function action_7 () : void {
      ImportProperties.go()
    }
    
    // 'action' attribute on ToolbarButton (id=PropertiesExportButton) at Properties.pcf: line 44, column 89
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ExportProperties.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=PropertiesNewButton) at Properties.pcf: line 25, column 88
    function action_dest_3 () : pcf.api.Destination {
      return pcf.NewProperty.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=PropertiesImportButton) at Properties.pcf: line 39, column 89
    function action_dest_8 () : pcf.api.Destination {
      return pcf.ImportProperties.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=PropertiesDeleteButton) at Properties.pcf: line 33, column 62
    function allCheckedRowsAction_5 (CheckedValues :  entity.RuntimeProperty[], CheckedValuesErrors :  java.util.Map) : void {
      deleteRuntimeProperties(CheckedValues)
    }
    
    // 'available' attribute on ToolbarButton (id=PropertiesNewButton) at Properties.pcf: line 25, column 88
    function available_1 () : java.lang.Boolean {
      return perm.System.editproperties
    }
    
    // 'available' attribute on CheckedValuesToolbarButton (id=PropertiesDeleteButton) at Properties.pcf: line 33, column 62
    function available_4 () : java.lang.Boolean {
      return perm.System.deleteproperties
    }
    
    // 'available' attribute on ToolbarButton (id=PropertiesImportButton) at Properties.pcf: line 39, column 89
    function available_6 () : java.lang.Boolean {
      return perm.System.importproperties
    }
    
    // 'available' attribute on ToolbarButton (id=PropertiesExportButton) at Properties.pcf: line 44, column 89
    function available_9 () : java.lang.Boolean {
      return perm.System.exportproperties
    }
    
    // 'canVisit' attribute on Page (id=Properties) at Properties.pcf: line 9, column 79
    static function canVisit_32 () : java.lang.Boolean {
      return perm.System.viewproperties
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at Properties.pcf: line 60, column 155
    function filters_12 () : gw.api.filters.IFilter[] {
      return new gw.api.filters.TypeKeyFilterSet( RuntimeProperty.Type.TypeInfo.getProperty( "PropertyGroup" ) ).getFilterOptions()
    }
    
    // 'initialValue' attribute on Variable at Properties.pcf: line 15, column 71
    function initialValue_0 () : gw.api.database.IQueryBeanResult<RuntimeProperty> {
      return gw.api.database.Query.make(RuntimeProperty).select()
    }
    
    // 'parent' attribute on Page (id=Properties) at Properties.pcf: line 9, column 79
    static function parent_33 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'value' attribute on TypeKeyCell (id=PropertiesLVGroup_Cell) at Properties.pcf: line 68, column 57
    function sortValue_13 (runtimeProperty :  entity.RuntimeProperty) : java.lang.Object {
      return runtimeProperty.PropertyGroup
    }
    
    // 'value' attribute on TextCell (id=PropertiesLVName_Cell) at Properties.pcf: line 74, column 45
    function sortValue_14 (runtimeProperty :  entity.RuntimeProperty) : java.lang.Object {
      return runtimeProperty.Name
    }
    
    // 'value' attribute on TextCell (id=PropertiesLVDescription_Cell) at Properties.pcf: line 78, column 52
    function sortValue_15 (runtimeProperty :  entity.RuntimeProperty) : java.lang.Object {
      return runtimeProperty.Description
    }
    
    // 'value' attribute on TextCell (id=PropertiesLVValue_Cell) at Properties.pcf: line 82, column 46
    function sortValue_16 (runtimeProperty :  entity.RuntimeProperty) : java.lang.Object {
      return runtimeProperty.Value
    }
    
    // 'value' attribute on RowIterator at Properties.pcf: line 53, column 86
    function value_31 () : gw.api.database.IQueryBeanResult<entity.RuntimeProperty> {
      return propertiesList
    }
    
    override property get CurrentLocation () : pcf.Properties {
      return super.CurrentLocation as pcf.Properties
    }
    
    property get propertiesList () : gw.api.database.IQueryBeanResult<RuntimeProperty> {
      return getVariableValue("propertiesList", 0) as gw.api.database.IQueryBeanResult<RuntimeProperty>
    }
    
    property set propertiesList ($arg :  gw.api.database.IQueryBeanResult<RuntimeProperty>) {
      setVariableValue("propertiesList", 0, $arg)
    }
    
    
            function deleteRuntimeProperties(props : RuntimeProperty[]) : void {
              var bundle = gw.transaction.Transaction.getCurrent()
              for (prop in props) {
                prop = bundle.add(prop)
                prop.remove()
              }
              bundle.commit()
            }
          
        
    
    
  }
  
  
}