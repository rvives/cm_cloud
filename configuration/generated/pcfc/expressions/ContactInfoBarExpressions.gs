package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactInfoBarExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ContactInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on InfoBarElement (id=ContactDisplayName) at ContactInfoBar.pcf: line 13, column 24
    function value_0 () : java.lang.Object {
      return contact
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}