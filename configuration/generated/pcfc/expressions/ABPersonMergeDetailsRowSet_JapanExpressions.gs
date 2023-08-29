package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonMergeDetailsRowSet_JapanExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonMergeDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=lastNamePhoneticLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 22, column 50
    function available_0 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'available' attribute on TextCell (id=firstNamePhoneticLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 41, column 51
    function available_16 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'available' attribute on TextCell (id=lastNameLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 60, column 42
    function available_32 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.LASTNAMEKANJI)
    }
    
    // 'available' attribute on TextCell (id=firstNameLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 79, column 43
    function available_48 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.FIRSTNAMEKANJI)
    }
    
    // 'value' attribute on TextCell (id=lastNamePhoneticLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 22, column 50
    function valueRoot_2 () : java.lang.Object {
      return nameOwner
    }
    
    // 'value' attribute on TextCell (id=lastNamePhoneticLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 22, column 50
    function value_1 () : java.lang.String {
      return nameOwner.LastNamePhoneticLabel
    }
    
    // 'value' attribute on CellIterator (id=lastNamePhonetic) at ABPersonMergeDetailsRowSet.Japan.pcf: line 27, column 39
    function value_14 () : entity.ABPerson[] {
      return persons
    }
    
    // 'value' attribute on TextCell (id=firstNamePhoneticLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 41, column 51
    function value_17 () : java.lang.String {
      return nameOwner.FirstNamePhoneticLabel
    }
    
    // 'value' attribute on TextCell (id=lastNameLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 60, column 42
    function value_33 () : java.lang.String {
      return nameOwner.LastNameLabel
    }
    
    // 'value' attribute on TextCell (id=firstNameLabel_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 79, column 43
    function value_49 () : java.lang.String {
      return nameOwner.FirstNameLabel
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.Japan.pcf: line 18, column 76
    function visible_15 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.Japan.pcf: line 37, column 77
    function visible_31 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.Japan.pcf: line 56, column 81
    function visible_47 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.LASTNAMEKANJI)
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.Japan.pcf: line 75, column 82
    function visible_63 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.FIRSTNAMEKANJI)
    }
    
    property get mergedPerson () : ABPerson {
      return getRequireValue("mergedPerson", 0) as ABPerson
    }
    
    property set mergedPerson ($arg :  ABPerson) {
      setRequireValue("mergedPerson", 0, $arg)
    }
    
    property get nameOwner () : gw.api.name.NameOwner {
      return getRequireValue("nameOwner", 0) as gw.api.name.NameOwner
    }
    
    property set nameOwner ($arg :  gw.api.name.NameOwner) {
      setRequireValue("nameOwner", 0, $arg)
    }
    
    property get persons () : ABPerson[] {
      return getRequireValue("persons", 0) as ABPerson[]
    }
    
    property set persons ($arg :  ABPerson[]) {
      setRequireValue("persons", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=firstNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function available_21 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'value' attribute on TextCell (id=firstNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.FirstName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=firstNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function editable_22 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'required' attribute on TextCell (id=firstNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function required_23 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'value' attribute on TextCell (id=firstNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function valueRoot_26 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=firstNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 52, column 39
    function value_24 () : java.lang.String {
      return aContact.FirstName
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 71, column 43
    function available_37 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.LASTNAMEKANJI)
    }
    
    // 'value' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 71, column 43
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.LastNameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 71, column 43
    function editable_38 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.LASTNAMEKANJI)
    }
    
    // 'required' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 71, column 43
    function required_39 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.LASTNAMEKANJI)
    }
    
    // 'value' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 71, column 43
    function valueRoot_42 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 71, column 43
    function value_40 () : java.lang.String {
      return aContact.LastNameKanji
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 90, column 44
    function available_53 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.FIRSTNAMEKANJI)
    }
    
    // 'value' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 90, column 44
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.FirstNameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 90, column 44
    function editable_54 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.FIRSTNAMEKANJI)
    }
    
    // 'required' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 90, column 44
    function required_55 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.FIRSTNAMEKANJI)
    }
    
    // 'value' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 90, column 44
    function valueRoot_58 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 90, column 44
    function value_56 () : java.lang.String {
      return aContact.FirstNameKanji
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 33, column 38
    function available_5 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'value' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 33, column 38
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 33, column 38
    function editable_6 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'required' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 33, column 38
    function required_7 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'value' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 33, column 38
    function valueRoot_10 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=lastNamePhonetic_Cell) at ABPersonMergeDetailsRowSet.Japan.pcf: line 33, column 38
    function value_8 () : java.lang.String {
      return aContact.LastName
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  
}