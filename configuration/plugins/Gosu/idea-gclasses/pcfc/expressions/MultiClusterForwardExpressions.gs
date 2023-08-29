package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/MultiClusterForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MultiClusterForwardExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/MultiClusterForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MultiClusterForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (locationKey :  String, goToGroup :  boolean) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at MultiClusterForward.pcf: line 17, column 95
    function action_0 () : void {
      gw.api.web.UnsavedWorkHelper.goToUnsavedWorkGroup(locationKey)
    }
    
    // 'action' attribute on ForwardCondition at MultiClusterForward.pcf: line 20, column 81
    function action_2 () : void {
      gw.api.web.UnsavedWorkHelper.goToUnsavedWork(locationKey)
    }
    
    // 'action' attribute on ForwardCondition at MultiClusterForward.pcf: line 22, column 93
    function action_4 () : void {
      Error.go(DisplayKey.get("Java.UnsavedWork.NotFound"), null, null)
    }
    
    // 'action' attribute on ForwardCondition at MultiClusterForward.pcf: line 22, column 93
    function action_dest_5 () : pcf.api.Destination {
      return pcf.Error.createDestination(DisplayKey.get("Java.UnsavedWork.NotFound"), null, null)
    }
    
    // 'condition' attribute on ForwardCondition at MultiClusterForward.pcf: line 17, column 95
    function condition_1 () : java.lang.Boolean {
      return goToGroup and gw.api.web.UnsavedWorkHelper.canGoToUnsavedWork(locationKey)
    }
    
    // 'condition' attribute on ForwardCondition at MultiClusterForward.pcf: line 20, column 81
    function condition_3 () : java.lang.Boolean {
      return gw.api.web.UnsavedWorkHelper.canGoToUnsavedWork(locationKey)
    }
    
    override property get CurrentLocation () : pcf.MultiClusterForward {
      return super.CurrentLocation as pcf.MultiClusterForward
    }
    
    property get goToGroup () : boolean {
      return getVariableValue("goToGroup", 0) as java.lang.Boolean
    }
    
    property set goToGroup ($arg :  boolean) {
      setVariableValue("goToGroup", 0, $arg)
    }
    
    property get locationKey () : String {
      return getVariableValue("locationKey", 0) as String
    }
    
    property set locationKey ($arg :  String) {
      setVariableValue("locationKey", 0, $arg)
    }
    
    
  }
  
  
}