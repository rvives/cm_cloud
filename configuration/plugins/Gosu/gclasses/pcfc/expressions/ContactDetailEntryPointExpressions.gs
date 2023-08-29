package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/entrypoints/ContactDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailEntryPointExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/entrypoints/ContactDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on EntryPointParameter at ContactDetail.pcf: line 14, column 35
    function conversionExpression_0 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.contact.ABContactParamUtil.convertStringParam(VALUE) as ABContact
    }
    
    // 'failurePage' attribute on EntryPoint (id=ContactDetail) at ContactDetail.pcf: line 9, column 39
    function failurePage_1 () : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    // 'location' attribute on EntryPoint (id=ContactDetail) at ContactDetail.pcf: line 9, column 39
    function location_2 () : pcf.api.Destination {
      return pcf.ContactDetail.createDestination(contact)
    }
    
    property get contact () : ABContact {
      return getVariableValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  
}