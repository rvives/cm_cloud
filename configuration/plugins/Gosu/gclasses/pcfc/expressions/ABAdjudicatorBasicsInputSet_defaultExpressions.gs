package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABAdjudicatorBasicsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABAdjudicatorBasicsInputSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABAdjudicatorBasicsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABAdjudicatorBasicsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}