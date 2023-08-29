package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactTagPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactTagPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  ABContact) : int {
      return 0
    }
    
    // 'def' attribute on InputSetRef at ContactTagPopup.pcf: line 26, column 30
    function def_onEnter_1 (def :  pcf.TagsInputSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactTagPopup.pcf: line 26, column 30
    function def_refreshVariables_2 (def :  pcf.TagsInputSet) : void {
      def.refreshVariables(contact)
    }
    
    // EditButtons at ContactTagPopup.pcf: line 19, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    override property get CurrentLocation () : pcf.ContactTagPopup {
      return super.CurrentLocation as pcf.ContactTagPopup
    }
    
    property get contact () : ABContact {
      return getVariableValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  
}