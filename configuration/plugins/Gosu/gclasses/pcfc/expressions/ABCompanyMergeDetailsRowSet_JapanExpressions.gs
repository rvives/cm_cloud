package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyMergeDetailsRowSet_JapanExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyMergeDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=nameLabel_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 22, column 53
    function available_0 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'available' attribute on TextCell (id=nameLabelKanji_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 41, column 45
    function available_16 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.NAMEKANJI)
    }
    
    // 'value' attribute on TextCell (id=nameLabel_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 22, column 53
    function valueRoot_2 () : java.lang.Object {
      return nameOwner
    }
    
    // 'value' attribute on TextCell (id=nameLabel_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 22, column 53
    function value_1 () : java.lang.String {
      return nameOwner.ContactNamePhoneticLabel
    }
    
    // 'value' attribute on CellIterator (id=lastNamePhonetic) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 27, column 40
    function value_14 () : entity.ABCompany[] {
      return companies
    }
    
    // 'value' attribute on TextCell (id=nameLabelKanji_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 41, column 45
    function value_17 () : java.lang.String {
      return nameOwner.ContactNameLabel
    }
    
    // 'visible' attribute on Row at ABCompanyMergeDetailsRowSet.Japan.pcf: line 18, column 75
    function visible_15 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'visible' attribute on Row at ABCompanyMergeDetailsRowSet.Japan.pcf: line 37, column 77
    function visible_31 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.NAMEKANJI)
    }
    
    property get companies () : ABCompany[] {
      return getRequireValue("companies", 0) as ABCompany[]
    }
    
    property set companies ($arg :  ABCompany[]) {
      setRequireValue("companies", 0, $arg)
    }
    
    property get mergedCompany () : ABCompany {
      return getRequireValue("mergedCompany", 0) as ABCompany
    }
    
    property set mergedCompany ($arg :  ABCompany) {
      setRequireValue("mergedCompany", 0, $arg)
    }
    
    property get nameOwner () : gw.api.name.NameOwner {
      return getRequireValue("nameOwner", 0) as gw.api.name.NameOwner
    }
    
    property set nameOwner ($arg :  gw.api.name.NameOwner) {
      setRequireValue("nameOwner", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ABCompanyMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=nameKanji_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function available_21 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.NAMEKANJI)
    }
    
    // 'value' attribute on TextCell (id=nameKanji_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.NameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=nameKanji_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function editable_22 () : java.lang.Boolean {
      return aContact == mergedCompany && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.NAMEKANJI)
    }
    
    // 'required' attribute on TextCell (id=nameKanji_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function required_23 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.NAMEKANJI)
    }
    
    // 'value' attribute on TextCell (id=nameKanji_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function valueRoot_26 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=nameKanji_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function value_24 () : java.lang.String {
      return aContact.NameKanji
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABCompanyMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=name_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 33, column 34
    function available_5 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 33, column 34
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=name_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 33, column 34
    function editable_6 () : java.lang.Boolean {
      return aContact == mergedCompany && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'required' attribute on TextCell (id=name_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 33, column 34
    function required_7 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 33, column 34
    function valueRoot_10 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ABCompanyMergeDetailsRowSet.Japan.pcf: line 33, column 34
    function value_8 () : java.lang.String {
      return aContact.Name
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  
}