package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/import/ImportPropertiesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImportPropertiesScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/import/ImportPropertiesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImportPropertiesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ImportPropertiesScreenCancelButton) at ImportPropertiesScreen.pcf: line 15, column 87
    function action_0 () : void {
      importData.clear(); Properties.go()
    }
    
    // 'action' attribute on ToolbarButton (id=ImportPropertiesScreenImportButton) at ImportPropertiesScreen.pcf: line 20, column 87
    function action_2 () : void {
      gw.api.properties.PropertyLoader.importProperties(importData)
    }
    
    // 'available' attribute on ToolbarButton (id=ImportPropertiesScreenImportButton) at ImportPropertiesScreen.pcf: line 20, column 87
    function available_1 () : java.lang.Boolean {
      return perm.System.importproperties && importData.isValid() && !importData.DisplayMessage
    }
    
    // 'def' attribute on PanelRef at ImportPropertiesScreen.pcf: line 29, column 45
    function def_onEnter_6 (def :  pcf.ImportPropertiesDV) : void {
      def.onEnter(importData)
    }
    
    // 'def' attribute on PanelRef at ImportPropertiesScreen.pcf: line 29, column 45
    function def_refreshVariables_7 (def :  pcf.ImportPropertiesDV) : void {
      def.refreshVariables(importData)
    }
    
    // 'label' attribute on Verbatim (id=ImportPropertiesScreenMessage) at ImportPropertiesScreen.pcf: line 26, column 24
    function label_4 () : java.lang.String {
      return DisplayKey.get("RuntimeProperties.Property.Import.Message", importData.NumberRead, importData.NumberImported)
    }
    
    // 'visible' attribute on Verbatim (id=ImportPropertiesScreenMessage) at ImportPropertiesScreen.pcf: line 26, column 24
    function visible_3 () : java.lang.Boolean {
      return importData.DisplayMessage
    }
    
    // 'visible' attribute on PanelRef at ImportPropertiesScreen.pcf: line 29, column 45
    function visible_5 () : java.lang.Boolean {
      return !importData.DisplayMessage
    }
    
    property get importData () : gw.api.properties.PropertyImportData {
      return getRequireValue("importData", 0) as gw.api.properties.PropertyImportData
    }
    
    property set importData ($arg :  gw.api.properties.PropertyImportData) {
      setRequireValue("importData", 0, $arg)
    }
    
    
  }
  
  
}