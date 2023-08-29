package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/contacts/AddressesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressesPanelSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/contacts/AddressesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}