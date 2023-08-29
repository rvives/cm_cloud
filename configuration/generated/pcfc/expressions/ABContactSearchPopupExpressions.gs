package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/addressbook/ABContactSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactSearchPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/addressbook/ABContactSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (requiredContactType :  Type) : int {
      return 1
    }
    
    // 'def' attribute on ScreenRef at ABContactSearchPopup.pcf: line 18, column 70
    function def_onEnter_1 (def :  pcf.ABContactSearchScreen) : void {
      def.onEnter(true, false, requiredContactType)
    }
    
    // 'def' attribute on ScreenRef at ABContactSearchPopup.pcf: line 18, column 70
    function def_refreshVariables_2 (def :  pcf.ABContactSearchScreen) : void {
      def.refreshVariables(true, false, requiredContactType)
    }
    
    // 'initialValue' attribute on Variable at ABContactSearchPopup.pcf: line 16, column 20
    function initialValue_0 () : Type {
      return entity.ABContact
    }
    
    override property get CurrentLocation () : pcf.ABContactSearchPopup {
      return super.CurrentLocation as pcf.ABContactSearchPopup
    }
    
    property get requiredContactType () : Type {
      return getVariableValue("requiredContactType", 0) as Type
    }
    
    property set requiredContactType ($arg :  Type) {
      setVariableValue("requiredContactType", 0, $arg)
    }
    
    
  }
  
  
}