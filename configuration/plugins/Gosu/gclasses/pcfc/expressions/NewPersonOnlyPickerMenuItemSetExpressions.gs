package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/NewPersonOnlyPickerMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPersonOnlyPickerMenuItemSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/NewPersonOnlyPickerMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPersonOnlyPickerMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewPersonOnlyPickerMenuItemSet_NewPersonMenuItem) at NewPersonOnlyPickerMenuItemSet.pcf: line 18, column 72
    function action_1 () : void {
      NewContactPopup.push(entity.ABPerson, parentContact)
    }
    
    // 'action' attribute on MenuItem (id=NewPersonOnlyPickerMenuItemSet_NewPersonMenuItem) at NewPersonOnlyPickerMenuItemSet.pcf: line 18, column 72
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewContactPopup.createDestination(entity.ABPerson, parentContact)
    }
    
    // 'visible' attribute on MenuItem (id=NewPersonOnlyPickerMenuItemSet_NewPersonMenuItem) at NewPersonOnlyPickerMenuItemSet.pcf: line 18, column 72
    function visible_0 () : java.lang.Boolean {
      return requiredContactType.isAssignableFrom(entity.ABPerson)
    }
    
    property get parentContact () : ABContact {
      return getRequireValue("parentContact", 0) as ABContact
    }
    
    property set parentContact ($arg :  ABContact) {
      setRequireValue("parentContact", 0, $arg)
    }
    
    property get requiredContactType () : Type {
      return getRequireValue("requiredContactType", 0) as Type
    }
    
    property set requiredContactType ($arg :  Type) {
      setRequireValue("requiredContactType", 0, $arg)
    }
    
    
  }
  
  
}