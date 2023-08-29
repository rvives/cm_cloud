package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/startableplugin/StartablePlugin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StartablePluginExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/startableplugin/StartablePlugin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StartablePluginExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Start) at StartablePlugin.pcf: line 57, column 42
    function action_18 () : void {
      gw.api.startable.StartablePluginPageHelper.startPlugin( pluginDef )
    }
    
    // 'action' attribute on Link (id=Stop) at StartablePlugin.pcf: line 63, column 42
    function action_20 () : void {
      gw.api.startable.StartablePluginPageHelper.stopPlugin( pluginDef )
    }
    
    // 'available' attribute on Link (id=Start) at StartablePlugin.pcf: line 57, column 42
    function available_17 () : java.lang.Boolean {
      return pluginInfo.State == Stopped
    }
    
    // 'available' attribute on Link (id=Stop) at StartablePlugin.pcf: line 63, column 42
    function available_19 () : java.lang.Boolean {
      return pluginInfo.State == Started
    }
    
    // 'initialValue' attribute on Variable at StartablePlugin.pcf: line 29, column 50
    function initialValue_6 () : gw.api.tools.StartablePlugin {
      return new gw.api.tools.StartablePlugin( pluginDef )
    }
    
    // RowIterator at StartablePlugin.pcf: line 24, column 79
    function initializeVariables_22 () : void {
        pluginInfo = new gw.api.tools.StartablePlugin( pluginDef );

    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at StartablePlugin.pcf: line 35, column 40
    function valueRoot_8 () : java.lang.Object {
      return pluginInfo
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at StartablePlugin.pcf: line 39, column 107
    function value_10 () : java.lang.String {
      return gw.api.startable.StartablePluginPageHelper.localizePluginState( pluginInfo.State )
    }
    
    // 'value' attribute on TextCell (id=Host_Cell) at StartablePlugin.pcf: line 43, column 40
    function value_12 () : java.lang.String {
      return pluginInfo.Host
    }
    
    // 'value' attribute on TextCell (id=ImplCount_Cell) at StartablePlugin.pcf: line 47, column 71
    function value_15 () : java.lang.String {
      return String.valueOf(pluginInfo.ImplementationCount)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at StartablePlugin.pcf: line 35, column 40
    function value_7 () : java.lang.String {
      return pluginInfo.Name
    }
    
    // 'visible' attribute on LinkCell (id=Actions) at StartablePlugin.pcf: line 51, column 72
    function visible_21 () : java.lang.Boolean {
      return perm.User.EditPlugin or perm.User.DevAllAccess
    }
    
    property get pluginDef () : com.guidewire.pl.system.integration.plugins.PluginDef {
      return getIteratedValue(1) as com.guidewire.pl.system.integration.plugins.PluginDef
    }
    
    property get pluginInfo () : gw.api.tools.StartablePlugin {
      return getVariableValue("pluginInfo", 1) as gw.api.tools.StartablePlugin
    }
    
    property set pluginInfo ($arg :  gw.api.tools.StartablePlugin) {
      setVariableValue("pluginInfo", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/startableplugin/StartablePlugin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartablePluginExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'available' attribute on ListViewPanel at StartablePlugin.pcf: line 19, column 24
    function available_24 () : java.lang.Boolean {
      return gw.api.startable.StartablePluginPageHelper.canBeEnabled()
    }
    
    // 'canVisit' attribute on Page (id=StartablePlugin) at StartablePlugin.pcf: line 10, column 58
    static function canVisit_25 () : java.lang.Boolean {
      return perm.User.ViewPlugin or perm.User.DevAllAccess
    }
    
    // 'parent' attribute on Page (id=StartablePlugin) at StartablePlugin.pcf: line 10, column 58
    static function parent_26 () : pcf.api.Destination {
      return pcf.ServerTools.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at StartablePlugin.pcf: line 35, column 40
    function sortValue_1 (pluginDef :  com.guidewire.pl.system.integration.plugins.PluginDef) : java.lang.Object {
      var pluginInfo : gw.api.tools.StartablePlugin = (new gw.api.tools.StartablePlugin( pluginDef ))
return pluginInfo.Name
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at StartablePlugin.pcf: line 39, column 107
    function sortValue_2 (pluginDef :  com.guidewire.pl.system.integration.plugins.PluginDef) : java.lang.Object {
      var pluginInfo : gw.api.tools.StartablePlugin = (new gw.api.tools.StartablePlugin( pluginDef ))
return gw.api.startable.StartablePluginPageHelper.localizePluginState( pluginInfo.State )
    }
    
    // 'value' attribute on TextCell (id=Host_Cell) at StartablePlugin.pcf: line 43, column 40
    function sortValue_3 (pluginDef :  com.guidewire.pl.system.integration.plugins.PluginDef) : java.lang.Object {
      var pluginInfo : gw.api.tools.StartablePlugin = (new gw.api.tools.StartablePlugin( pluginDef ))
return pluginInfo.Host
    }
    
    // 'value' attribute on TextCell (id=ImplCount_Cell) at StartablePlugin.pcf: line 47, column 71
    function sortValue_4 (pluginDef :  com.guidewire.pl.system.integration.plugins.PluginDef) : java.lang.Object {
      var pluginInfo : gw.api.tools.StartablePlugin = (new gw.api.tools.StartablePlugin( pluginDef ))
return String.valueOf(pluginInfo.ImplementationCount)
    }
    
    // 'value' attribute on RowIterator at StartablePlugin.pcf: line 24, column 79
    function value_23 () : com.guidewire.pl.system.integration.plugins.PluginDef[] {
      return gw.api.startable.StartablePluginPageHelper.getEnabledPlugins().toTypedArray()
    }
    
    // 'visible' attribute on AlertBar (id=NotAvailable) at StartablePlugin.pcf: line 16, column 79
    function visible_0 () : java.lang.Boolean {
      return !gw.api.startable.StartablePluginPageHelper.canBeEnabled()
    }
    
    // 'visible' attribute on LinkCell (id=Actions) at StartablePlugin.pcf: line 51, column 72
    function visible_5 () : java.lang.Boolean {
      return perm.User.EditPlugin or perm.User.DevAllAccess
    }
    
    override property get CurrentLocation () : pcf.StartablePlugin {
      return super.CurrentLocation as pcf.StartablePlugin
    }
    
    
  }
  
  
}