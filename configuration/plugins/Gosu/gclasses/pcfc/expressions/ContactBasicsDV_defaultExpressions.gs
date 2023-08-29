package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactBasicsDV_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ContactBasicsDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactBasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Label at ContactBasicsDV.default.pcf: line 14, column 36
    function label_1 () : java.lang.String {
      return DisplayKey.get("Web.ContactDetail.UndefinedType", contact.Subtype)
    }
    
    // 'visible' attribute on Label at ContactBasicsDV.default.pcf: line 14, column 36
    function visible_0 () : java.lang.Boolean {
      return contact != null
    }
    
    // 'visible' attribute on Label at ContactBasicsDV.default.pcf: line 17, column 36
    function visible_2 () : java.lang.Boolean {
      return contact == null
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}