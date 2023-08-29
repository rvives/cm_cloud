package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DriversLicenseRowSet.NoLicenseState.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DriversLicenseRowSet_NoLicenseStateExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DriversLicenseRowSet.NoLicenseState.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DriversLicenseRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DriversLicenseRowSet.NoLicenseState.pcf: line 20, column 26
    function initialValue_0 () : ABPerson[] {
      return {keptPerson, retiredPerson, mergedPerson}
    }
    
    // 'value' attribute on CellIterator (id=driversLicenseNumber) at DriversLicenseRowSet.NoLicenseState.pcf: line 36, column 39
    function value_7 () : entity.ABPerson[] {
      return persons
    }
    
    property get keptPerson () : ABPerson {
      return getRequireValue("keptPerson", 0) as ABPerson
    }
    
    property set keptPerson ($arg :  ABPerson) {
      setRequireValue("keptPerson", 0, $arg)
    }
    
    property get mergedPerson () : ABPerson {
      return getRequireValue("mergedPerson", 0) as ABPerson
    }
    
    property set mergedPerson ($arg :  ABPerson) {
      setRequireValue("mergedPerson", 0, $arg)
    }
    
    property get persons () : ABPerson[] {
      return getVariableValue("persons", 0) as ABPerson[]
    }
    
    property set persons ($arg :  ABPerson[]) {
      setVariableValue("persons", 0, $arg)
    }
    
    property get retiredPerson () : ABPerson {
      return getRequireValue("retiredPerson", 0) as ABPerson
    }
    
    property set retiredPerson ($arg :  ABPerson) {
      setRequireValue("retiredPerson", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DriversLicenseRowSet.NoLicenseState.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DriversLicenseRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=driversLicenseNumber_Cell) at DriversLicenseRowSet.NoLicenseState.pcf: line 40, column 43
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=driversLicenseNumber_Cell) at DriversLicenseRowSet.NoLicenseState.pcf: line 40, column 43
    function editable_1 () : java.lang.Boolean {
      return aContact == mergedPerson
    }
    
    // 'value' attribute on TextCell (id=driversLicenseNumber_Cell) at DriversLicenseRowSet.NoLicenseState.pcf: line 40, column 43
    function valueRoot_4 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=driversLicenseNumber_Cell) at DriversLicenseRowSet.NoLicenseState.pcf: line 40, column 43
    function value_2 () : java.lang.String {
      return aContact.LicenseNumber
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  
}