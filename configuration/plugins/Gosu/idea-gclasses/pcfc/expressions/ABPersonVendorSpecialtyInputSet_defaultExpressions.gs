package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorSpecialtyInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonVendorSpecialtyInputSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/basics/ABPersonVendorSpecialtyInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonVendorSpecialtyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get person () : ABPerson {
      return getRequireValue("person", 0) as ABPerson
    }
    
    property set person ($arg :  ABPerson) {
      setRequireValue("person", 0, $arg)
    }
    
    
  }
  
  
}