package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyAdditionalInfoRowSet_ABMedicalCareOrgExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyAdditionalInfoRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf: line 20, column 27
    function initialValue_0 () : ABCompany[] {
      return {contact, duplicate, merged}
    }
    
    // 'value' attribute on CellIterator (id=medicalSpecialty) at ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf: line 36, column 40
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
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABCompanyAdditionalInfoRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=medicalSpecialty_Cell) at ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf: line 41, column 46
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      (aContact as ABMedicalCareOrg).MedicalOrgSpecialty = (__VALUE_TO_SET as typekey.SpecialtyType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=medicalSpecialty_Cell) at ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf: line 41, column 46
    function editable_1 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on TypeKeyCell (id=medicalSpecialty_Cell) at ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf: line 41, column 46
    function valueRoot_4 () : java.lang.Object {
      return (aContact as ABMedicalCareOrg)
    }
    
    // 'value' attribute on TypeKeyCell (id=medicalSpecialty_Cell) at ABCompanyAdditionalInfoRowSet.ABMedicalCareOrg.pcf: line 41, column 46
    function value_2 () : typekey.SpecialtyType {
      return (aContact as ABMedicalCareOrg).MedicalOrgSpecialty
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  
}