package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonVendorRowSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonVendorRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ABPersonVendorRowSet.default.pcf: line 20, column 26
    function initialValue_0 () : ABPerson[] {
      return {contact, duplicate, merged}
    }
    
    property get contact () : ABPerson {
      return getRequireValue("contact", 0) as ABPerson
    }
    
    property set contact ($arg :  ABPerson) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contacts () : ABPerson[] {
      return getVariableValue("contacts", 0) as ABPerson[]
    }
    
    property set contacts ($arg :  ABPerson[]) {
      setVariableValue("contacts", 0, $arg)
    }
    
    property get duplicate () : ABPerson {
      return getRequireValue("duplicate", 0) as ABPerson
    }
    
    property set duplicate ($arg :  ABPerson) {
      setRequireValue("duplicate", 0, $arg)
    }
    
    property get merged () : ABPerson {
      return getRequireValue("merged", 0) as ABPerson
    }
    
    property set merged ($arg :  ABPerson) {
      setRequireValue("merged", 0, $arg)
    }
    
    
  }
  
  
}