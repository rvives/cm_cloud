package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyAdditionalInfoRowSet_ABAutoRepairShopExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyAdditionalInfoRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf: line 20, column 27
    function initialValue_0 () : ABCompany[] {
      return {contact, duplicate, merged}
    }
    
    // 'value' attribute on CellIterator (id=autoRepairLicense) at ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf: line 36, column 40
    function value_7 () : entity.ABCompany[] {
      return contacts
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
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABCompanyAdditionalInfoRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=autoRepairLicense_Cell) at ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf: line 40, column 69
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      (aContact as ABAutoRepairShop).AutoRepairLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=autoRepairLicense_Cell) at ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf: line 40, column 69
    function editable_1 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on TextCell (id=autoRepairLicense_Cell) at ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf: line 40, column 69
    function valueRoot_4 () : java.lang.Object {
      return (aContact as ABAutoRepairShop)
    }
    
    // 'value' attribute on TextCell (id=autoRepairLicense_Cell) at ABCompanyAdditionalInfoRowSet.ABAutoRepairShop.pcf: line 40, column 69
    function value_2 () : java.lang.String {
      return (aContact as ABAutoRepairShop).AutoRepairLicense
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  
}