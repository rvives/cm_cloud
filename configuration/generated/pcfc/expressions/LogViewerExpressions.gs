package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/LogViewer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LogViewerExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/LogViewer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LogViewerExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (log :  String) : int {
      return 0
    }
    
    // 'defaultValue' attribute on ExitPointParameter at LogViewer.pcf: line 16, column 27
    function initialValue_0 () : String {
      return com.guidewire.pl.system.dependency.PLDependencies.WebController.BaseURL
    }
    
    override property get CurrentLocation () : pcf.LogViewer {
      return super.CurrentLocation as pcf.LogViewer
    }
    
    property get baseURL () : String {
      return getVariableValue("baseURL", 0) as String
    }
    
    property set baseURL ($arg :  String) {
      setVariableValue("baseURL", 0, $arg)
    }
    
    property get log () : String {
      return getVariableValue("log", 0) as String
    }
    
    property set log ($arg :  String) {
      setVariableValue("log", 0, $arg)
    }
    
    
  }
  
  
}