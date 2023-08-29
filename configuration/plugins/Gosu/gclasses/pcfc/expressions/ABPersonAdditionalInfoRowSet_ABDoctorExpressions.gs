package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonAdditionalInfoRowSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonAdditionalInfoRowSet_ABDoctorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonAdditionalInfoRowSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonAdditionalInfoRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 20, column 33
    function initialValue_0 () : entity.ABPerson[] {
      return {contact, duplicate, merged}
    }
    
    // 'value' attribute on CellIterator (id=medicalLicense) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 36, column 39
    function value_7 () : entity.ABPerson[] {
      return contacts
    }
    
    property get contact () : ABPerson {
      return getRequireValue("contact", 0) as ABPerson
    }
    
    property set contact ($arg :  ABPerson) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contacts () : entity.ABPerson[] {
      return getVariableValue("contacts", 0) as entity.ABPerson[]
    }
    
    property set contacts ($arg :  entity.ABPerson[]) {
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
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonAdditionalInfoRowSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ABPersonAdditionalInfoRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=medicalSpecialty_Cell) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 56, column 46
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      (aContact as ABDoctor).DoctorSpecialty = (__VALUE_TO_SET as typekey.SpecialtyType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=medicalSpecialty_Cell) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 56, column 46
    function editable_8 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on TypeKeyCell (id=medicalSpecialty_Cell) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 56, column 46
    function valueRoot_11 () : java.lang.Object {
      return (aContact as ABDoctor)
    }
    
    // 'value' attribute on TypeKeyCell (id=medicalSpecialty_Cell) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 56, column 46
    function value_9 () : typekey.SpecialtyType {
      return (aContact as ABDoctor).DoctorSpecialty
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonAdditionalInfoRowSet.ABDoctor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABPersonAdditionalInfoRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=medicalLicense_Cell) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 40, column 58
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      (aContact as ABDoctor).MedicalLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=medicalLicense_Cell) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 40, column 58
    function editable_1 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on TextCell (id=medicalLicense_Cell) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 40, column 58
    function valueRoot_4 () : java.lang.Object {
      return (aContact as ABDoctor)
    }
    
    // 'value' attribute on TextCell (id=medicalLicense_Cell) at ABPersonAdditionalInfoRowSet.ABDoctor.pcf: line 40, column 58
    function value_2 () : java.lang.String {
      return (aContact as ABDoctor).MedicalLicense
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  
}