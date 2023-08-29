package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/export/ExportProperties.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExportPropertiesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/export/ExportProperties.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExportPropertiesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=ExportProperties) at ExportProperties.pcf: line 15, column 86
    function afterCancel_3 () : void {
      Properties.go()
    }
    
    // 'afterCancel' attribute on Page (id=ExportProperties) at ExportProperties.pcf: line 15, column 86
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=ExportProperties) at ExportProperties.pcf: line 15, column 86
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      Properties.go()
    }
    
    // 'canVisit' attribute on Page (id=ExportProperties) at ExportProperties.pcf: line 15, column 86
    static function canVisit_6 () : java.lang.Boolean {
      return perm.System.exportproperties
    }
    
    // 'def' attribute on ScreenRef at ExportProperties.pcf: line 23, column 52
    function def_onEnter_1 (def :  pcf.ExportPropertiesScreen) : void {
      def.onEnter(exportOptions)
    }
    
    // 'def' attribute on ScreenRef at ExportProperties.pcf: line 23, column 52
    function def_refreshVariables_2 (def :  pcf.ExportPropertiesScreen) : void {
      def.refreshVariables(exportOptions)
    }
    
    // 'initialValue' attribute on Variable at ExportProperties.pcf: line 21, column 55
    function initialValue_0 () : gw.api.properties.PropertyExportOptions {
      return new gw.api.properties.PropertyExportOptions()
    }
    
    // 'parent' attribute on Page (id=ExportProperties) at ExportProperties.pcf: line 15, column 86
    static function parent_7 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ExportProperties {
      return super.CurrentLocation as pcf.ExportProperties
    }
    
    property get exportOptions () : gw.api.properties.PropertyExportOptions {
      return getVariableValue("exportOptions", 0) as gw.api.properties.PropertyExportOptions
    }
    
    property set exportOptions ($arg :  gw.api.properties.PropertyExportOptions) {
      setVariableValue("exportOptions", 0, $arg)
    }
    
    
  }
  
  
}