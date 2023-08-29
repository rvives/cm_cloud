package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/PrimaryAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PrimaryAddressInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/PrimaryAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PrimaryAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PrimaryAddressInputSet.pcf: line 13, column 63
    function def_onEnter_0 (def :  pcf.AddressOwnerInputSet) : void {
      def.onEnter(contact.AddressOwner, true)
    }
    
    // 'def' attribute on InputSetRef at PrimaryAddressInputSet.pcf: line 13, column 63
    function def_refreshVariables_1 (def :  pcf.AddressOwnerInputSet) : void {
      def.refreshVariables(contact.AddressOwner, true)
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}