package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/import/ImportProperties.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportPropertiesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/import/ImportProperties.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportPropertiesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=ImportProperties) at ImportProperties.pcf: line 15, column 86
    function afterCancel_3 () : void {
      Properties.go()
    }
    
    // 'afterCancel' attribute on Page (id=ImportProperties) at ImportProperties.pcf: line 15, column 86
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=ImportProperties) at ImportProperties.pcf: line 15, column 86
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      Properties.go()
    }
    
    // 'canVisit' attribute on Page (id=ImportProperties) at ImportProperties.pcf: line 15, column 86
    static function canVisit_6 () : java.lang.Boolean {
      return perm.System.importproperties
    }
    
    // 'def' attribute on ScreenRef at ImportProperties.pcf: line 23, column 49
    function def_onEnter_1 (def :  pcf.ImportPropertiesScreen) : void {
      def.onEnter(importData)
    }
    
    // 'def' attribute on ScreenRef at ImportProperties.pcf: line 23, column 49
    function def_refreshVariables_2 (def :  pcf.ImportPropertiesScreen) : void {
      def.refreshVariables(importData)
    }
    
    // 'initialValue' attribute on Variable at ImportProperties.pcf: line 21, column 52
    function initialValue_0 () : gw.api.properties.PropertyImportData {
      return new gw.api.properties.PropertyImportData()
    }
    
    // 'parent' attribute on Page (id=ImportProperties) at ImportProperties.pcf: line 15, column 86
    static function parent_7 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ImportProperties {
      return super.CurrentLocation as pcf.ImportProperties
    }
    
    property get importData () : gw.api.properties.PropertyImportData {
      return getVariableValue("importData", 0) as gw.api.properties.PropertyImportData
    }
    
    property set importData ($arg :  gw.api.properties.PropertyImportData) {
      setVariableValue("importData", 0, $arg)
    }
    
    
  }
  
  
}