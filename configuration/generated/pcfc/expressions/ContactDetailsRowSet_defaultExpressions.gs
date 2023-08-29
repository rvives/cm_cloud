package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailsRowSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get addressDataHolder () : gw.web.merge.MergeContactsAddressHolder {
      return getRequireValue("addressDataHolder", 0) as gw.web.merge.MergeContactsAddressHolder
    }
    
    property set addressDataHolder ($arg :  gw.web.merge.MergeContactsAddressHolder) {
      setRequireValue("addressDataHolder", 0, $arg)
    }
    
    property get keptContact () : entity.ABContact {
      return getRequireValue("keptContact", 0) as entity.ABContact
    }
    
    property set keptContact ($arg :  entity.ABContact) {
      setRequireValue("keptContact", 0, $arg)
    }
    
    property get mergedContact () : entity.ABContact {
      return getRequireValue("mergedContact", 0) as entity.ABContact
    }
    
    property set mergedContact ($arg :  entity.ABContact) {
      setRequireValue("mergedContact", 0, $arg)
    }
    
    property get phoneHolder () : gw.web.merge.MergeContactsPhoneHolder {
      return getRequireValue("phoneHolder", 0) as gw.web.merge.MergeContactsPhoneHolder
    }
    
    property set phoneHolder ($arg :  gw.web.merge.MergeContactsPhoneHolder) {
      setRequireValue("phoneHolder", 0, $arg)
    }
    
    property get retiredContact () : entity.ABContact {
      return getRequireValue("retiredContact", 0) as entity.ABContact
    }
    
    property set retiredContact ($arg :  entity.ABContact) {
      setRequireValue("retiredContact", 0, $arg)
    }
    
    
  }
  
  
}