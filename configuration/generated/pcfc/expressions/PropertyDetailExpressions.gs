package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/PropertyDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PropertyDetailExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/PropertyDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (runtimeProperty :  RuntimeProperty) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=PropertyDetail) at PropertyDetail.pcf: line 11, column 75
    function canEdit_2 () : java.lang.Boolean {
      return perm.System.editproperties
    }
    
    // 'canVisit' attribute on Page (id=PropertyDetail) at PropertyDetail.pcf: line 11, column 75
    static function canVisit_3 (runtimeProperty :  RuntimeProperty) : java.lang.Boolean {
      return perm.System.viewproperties
    }
    
    // 'def' attribute on ScreenRef at PropertyDetail.pcf: line 18, column 59
    function def_onEnter_0 (def :  pcf.PropertyDetailScreen) : void {
      def.onEnter(runtimeProperty, false)
    }
    
    // 'def' attribute on ScreenRef at PropertyDetail.pcf: line 18, column 59
    function def_refreshVariables_1 (def :  pcf.PropertyDetailScreen) : void {
      def.refreshVariables(runtimeProperty, false)
    }
    
    // 'parent' attribute on Page (id=PropertyDetail) at PropertyDetail.pcf: line 11, column 75
    static function parent_4 (runtimeProperty :  RuntimeProperty) : pcf.api.Destination {
      return pcf.Properties.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PropertyDetail {
      return super.CurrentLocation as pcf.PropertyDetail
    }
    
    property get runtimeProperty () : RuntimeProperty {
      return getVariableValue("runtimeProperty", 0) as RuntimeProperty
    }
    
    property set runtimeProperty ($arg :  RuntimeProperty) {
      setVariableValue("runtimeProperty", 0, $arg)
    }
    
    
  }
  
  
}