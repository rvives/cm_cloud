package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyVendorRowSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyVendorRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ABCompanyVendorRowSet.default.pcf: line 20, column 27
    function initialValue_0 () : ABCompany[] {
      return {contact, duplicate, merged}
    }
    
    property get contact () : ABCompany {
      return getRequireValue("contact", 0) as ABCompany
    }
    
    property set contact ($arg :  ABCompany) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contacts () : ABCompany[] {
      return getVariableValue("contacts", 0) as ABCompany[]
    }
    
    property set contacts ($arg :  ABCompany[]) {
      setVariableValue("contacts", 0, $arg)
    }
    
    property get duplicate () : ABCompany {
      return getRequireValue("duplicate", 0) as ABCompany
    }
    
    property set duplicate ($arg :  ABCompany) {
      setRequireValue("duplicate", 0, $arg)
    }
    
    property get merged () : ABCompany {
      return getRequireValue("merged", 0) as ABCompany
    }
    
    property set merged ($arg :  ABCompany) {
      setRequireValue("merged", 0, $arg)
    }
    
    
  }
  
  
}