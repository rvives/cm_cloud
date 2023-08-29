package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/properties/PropertyDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PropertyDetailScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/properties/PropertyDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PropertyDetailScreenDeleteButton) at PropertyDetailScreen.pcf: line 21, column 60
    function action_2 () : void {
      deleteRuntimeProperty(runtimeProperty); Properties.go()
    }
    
    // 'available' attribute on ToolbarButton (id=PropertyDetailScreenDeleteButton) at PropertyDetailScreen.pcf: line 21, column 60
    function available_1 () : java.lang.Boolean {
      return perm.System.deleteproperties
    }
    
    // 'def' attribute on PanelRef at PropertyDetailScreen.pcf: line 24, column 49
    function def_onEnter_3 (def :  pcf.PropertyDV) : void {
      def.onEnter(runtimeProperty, isNew)
    }
    
    // 'def' attribute on PanelRef at PropertyDetailScreen.pcf: line 24, column 49
    function def_refreshVariables_4 (def :  pcf.PropertyDV) : void {
      def.refreshVariables(runtimeProperty, isNew)
    }
    
    // EditButtons at PropertyDetailScreen.pcf: line 14, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    property get isNew () : boolean {
      return getRequireValue("isNew", 0) as java.lang.Boolean
    }
    
    property set isNew ($arg :  boolean) {
      setRequireValue("isNew", 0, $arg)
    }
    
    property get runtimeProperty () : RuntimeProperty {
      return getRequireValue("runtimeProperty", 0) as RuntimeProperty
    }
    
    property set runtimeProperty ($arg :  RuntimeProperty) {
      setRequireValue("runtimeProperty", 0, $arg)
    }
    
    
            function deleteRuntimeProperty(prop : RuntimeProperty) : void {
              var bundle = gw.transaction.Transaction.getCurrent()
              prop = bundle.add(prop)
              prop.remove()
              bundle.commit()
            }
          
        
    
    
  }
  
  
}