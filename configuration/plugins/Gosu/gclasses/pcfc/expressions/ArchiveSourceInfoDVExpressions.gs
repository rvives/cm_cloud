package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveSourceInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchiveSourceInfoDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveSourceInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchiveSourceInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ArchiveSourceInfoDV.pcf: line 10, column 22
    function initialValue_0 () : gw.plugin.archiving.IArchiveSource {
      return gw.plugin.Plugins.get(gw.plugin.archiving.IArchiveSource)
    }
    
    // 'initialValue' attribute on Variable at ArchiveSourceInfoDV.pcf: line 15, column 36
    function initialValue_1 () : java.util.Date {
      return gw.api.web.tools.ArchiveInfoPage.getAsOfDateMayRefresh(gw.api.util.DateUtil.currentDate().addMinutes(-15))
    }
    
    // 'initialValue' attribute on Variable at ArchiveSourceInfoDV.pcf: line 20, column 36
    function initialValue_2 () : gw.plugin.archiving.ArchiveSourceInfo {
      return plugin.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=restore_Input) at ArchiveSourceInfoDV.pcf: line 32, column 50
    function valueRoot_6 () : java.lang.Object {
      return info
    }
    
    // 'value' attribute on TypeKeyInput (id=delete_Input) at ArchiveSourceInfoDV.pcf: line 44, column 50
    function value_11 () : typekey.ArchiveSourceStatus {
      return info.DeleteStatus
    }
    
    // 'value' attribute on DateInput (id=asof_Input) at ArchiveSourceInfoDV.pcf: line 27, column 23
    function value_3 () : java.util.Date {
      return asof
    }
    
    // 'value' attribute on TypeKeyInput (id=restore_Input) at ArchiveSourceInfoDV.pcf: line 32, column 50
    function value_5 () : typekey.ArchiveSourceStatus {
      return info.RetrieveStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=store_Input) at ArchiveSourceInfoDV.pcf: line 39, column 50
    function value_8 () : typekey.ArchiveSourceStatus {
      return info.StoreStatus
    }
    
    property get asof () : java.util.Date {
      return getVariableValue("asof", 0) as java.util.Date
    }
    
    property set asof ($arg :  java.util.Date) {
      setVariableValue("asof", 0, $arg)
    }
    
    property get info () : gw.plugin.archiving.ArchiveSourceInfo {
      return getVariableValue("info", 0) as gw.plugin.archiving.ArchiveSourceInfo
    }
    
    property set info ($arg :  gw.plugin.archiving.ArchiveSourceInfo) {
      setVariableValue("info", 0, $arg)
    }
    
    property get plugin () : gw.plugin.archiving.IArchiveSource {
      return getVariableValue("plugin", 0) as gw.plugin.archiving.IArchiveSource
    }
    
    property set plugin ($arg :  gw.plugin.archiving.IArchiveSource) {
      setVariableValue("plugin", 0, $arg)
    }
    
    
  }
  
  
}