package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/export/ExportPropertiesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExportPropertiesScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/export/ExportPropertiesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExportPropertiesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ExportPropertiesScreenCancelButton) at ExportPropertiesScreen.pcf: line 15, column 87
    function action_0 () : void {
      exportOptions.clear(); Properties.go()
    }
    
    // 'action' attribute on ToolbarButton (id=ExportPropertiesDVExportButton) at ExportPropertiesScreen.pcf: line 21, column 87
    function action_1 () : void {
      CurrentLocation.commit(); gw.api.properties.PropertyLoader.exportProperties(exportOptions); exportOptions.clear(); Properties.go()
    }
    
    // 'def' attribute on PanelRef at ExportPropertiesScreen.pcf: line 24, column 48
    function def_onEnter_2 (def :  pcf.ExportPropertiesDV) : void {
      def.onEnter(exportOptions)
    }
    
    // 'def' attribute on PanelRef at ExportPropertiesScreen.pcf: line 24, column 48
    function def_refreshVariables_3 (def :  pcf.ExportPropertiesDV) : void {
      def.refreshVariables(exportOptions)
    }
    
    property get exportOptions () : gw.api.properties.PropertyExportOptions {
      return getRequireValue("exportOptions", 0) as gw.api.properties.PropertyExportOptions
    }
    
    property set exportOptions ($arg :  gw.api.properties.PropertyExportOptions) {
      setRequireValue("exportOptions", 0, $arg)
    }
    
    
  }
  
  
}