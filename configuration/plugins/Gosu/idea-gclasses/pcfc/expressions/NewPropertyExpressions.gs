package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/NewProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPropertyExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/NewProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPropertyExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewProperty) at NewProperty.pcf: line 14, column 81
    function afterCancel_3 () : void {
      Properties.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewProperty) at NewProperty.pcf: line 14, column 81
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewProperty) at NewProperty.pcf: line 14, column 81
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      Properties.go()
    }
    
    // 'canVisit' attribute on Page (id=NewProperty) at NewProperty.pcf: line 14, column 81
    static function canVisit_6 () : java.lang.Boolean {
      return perm.System.editproperties
    }
    
    // 'def' attribute on ScreenRef at NewProperty.pcf: line 22, column 58
    function def_onEnter_1 (def :  pcf.PropertyDetailScreen) : void {
      def.onEnter(runtimeProperty, true)
    }
    
    // 'def' attribute on ScreenRef at NewProperty.pcf: line 22, column 58
    function def_refreshVariables_2 (def :  pcf.PropertyDetailScreen) : void {
      def.refreshVariables(runtimeProperty, true)
    }
    
    // 'initialValue' attribute on Variable at NewProperty.pcf: line 20, column 31
    function initialValue_0 () : RuntimeProperty {
      return new RuntimeProperty()
    }
    
    // 'parent' attribute on Page (id=NewProperty) at NewProperty.pcf: line 14, column 81
    static function parent_7 () : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewProperty {
      return super.CurrentLocation as pcf.NewProperty
    }
    
    property get runtimeProperty () : RuntimeProperty {
      return getVariableValue("runtimeProperty", 0) as RuntimeProperty
    }
    
    property set runtimeProperty ($arg :  RuntimeProperty) {
      setVariableValue("runtimeProperty", 0, $arg)
    }
    
    
  }
  
  
}