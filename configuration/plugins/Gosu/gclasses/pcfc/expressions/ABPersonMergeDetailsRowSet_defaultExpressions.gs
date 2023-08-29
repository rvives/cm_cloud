package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonMergeDetailsRowSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonMergeDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=lastNameLabel_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 22, column 42
    function available_0 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'available' attribute on TextCell (id=firstNameLabel_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 41, column 43
    function available_16 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'available' attribute on TextCell (id=middleNameLabel_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 60, column 80
    function available_32 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.MIDDLENAME)
    }
    
    // 'available' attribute on TextCell (id=prefixLabel_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 79, column 76
    function available_45 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.PREFIX)
    }
    
    // 'available' attribute on TextCell (id=suffixLabel_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 99, column 76
    function available_58 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.SUFFIX)
    }
    
    // 'value' attribute on TextCell (id=lastNameLabel_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 22, column 42
    function valueRoot_2 () : java.lang.Object {
      return nameOwner
    }
    
    // 'value' attribute on TextCell (id=lastNameLabel_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 22, column 42
    function value_1 () : java.lang.String {
      return nameOwner.LastNameLabel
    }
    
    // 'value' attribute on CellIterator (id=lastName) at ABPersonMergeDetailsRowSet.default.pcf: line 27, column 39
    function value_14 () : entity.ABPerson[] {
      return persons
    }
    
    // 'value' attribute on TextCell (id=firstNameLabel_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 41, column 43
    function value_17 () : java.lang.String {
      return nameOwner.FirstNameLabel
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.default.pcf: line 18, column 76
    function visible_15 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.default.pcf: line 37, column 77
    function visible_31 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.default.pcf: line 56, column 78
    function visible_44 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.MIDDLENAME)
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.default.pcf: line 75, column 74
    function visible_57 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.PREFIX)
    }
    
    // 'visible' attribute on Row at ABPersonMergeDetailsRowSet.default.pcf: line 95, column 74
    function visible_70 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.SUFFIX)
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
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 52, column 39
    function available_21 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'value' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 52, column 39
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.FirstName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 52, column 39
    function editable_22 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'required' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 52, column 39
    function required_23 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.FIRSTNAME)
    }
    
    // 'value' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 52, column 39
    function valueRoot_26 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=firstName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 52, column 39
    function value_24 () : java.lang.String {
      return aContact.FirstName
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=middleName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 71, column 40
    function available_34 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.MIDDLENAME)
    }
    
    // 'value' attribute on TextCell (id=middleName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 71, column 40
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.MiddleName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=middleName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 71, column 40
    function editable_35 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.MIDDLENAME)
    }
    
    // 'required' attribute on TextCell (id=middleName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 71, column 40
    function required_36 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.MIDDLENAME)
    }
    
    // 'value' attribute on TextCell (id=middleName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 71, column 40
    function valueRoot_39 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=middleName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 71, column 40
    function value_37 () : java.lang.String {
      return aContact.MiddleName
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TypeKeyCell (id=prefix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 91, column 43
    function available_47 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.PREFIX)
    }
    
    // 'value' attribute on TypeKeyCell (id=prefix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 91, column 43
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.Prefix = (__VALUE_TO_SET as typekey.NamePrefix)
    }
    
    // 'editable' attribute on TypeKeyCell (id=prefix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 91, column 43
    function editable_48 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.PREFIX)
    }
    
    // 'required' attribute on TypeKeyCell (id=prefix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 91, column 43
    function required_49 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.PREFIX)
    }
    
    // 'value' attribute on TypeKeyCell (id=prefix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 91, column 43
    function valueRoot_52 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TypeKeyCell (id=prefix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 91, column 43
    function value_50 () : typekey.NamePrefix {
      return aContact.Prefix
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TypeKeyCell (id=suffix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 111, column 43
    function available_60 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.SUFFIX)
    }
    
    // 'value' attribute on TypeKeyCell (id=suffix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 111, column 43
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.Suffix = (__VALUE_TO_SET as typekey.NameSuffix)
    }
    
    // 'editable' attribute on TypeKeyCell (id=suffix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 111, column 43
    function editable_61 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.SUFFIX)
    }
    
    // 'required' attribute on TypeKeyCell (id=suffix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 111, column 43
    function required_62 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.SUFFIX)
    }
    
    // 'value' attribute on TypeKeyCell (id=suffix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 111, column 43
    function valueRoot_65 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TypeKeyCell (id=suffix_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 111, column 43
    function value_63 () : typekey.NameSuffix {
      return aContact.Suffix
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABPersonMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=lastName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 33, column 38
    function available_5 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'value' attribute on TextCell (id=lastName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 33, column 38
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=lastName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 33, column 38
    function editable_6 () : java.lang.Boolean {
      return aContact == mergedPerson && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'required' attribute on TextCell (id=lastName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 33, column 38
    function required_7 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.LASTNAME)
    }
    
    // 'value' attribute on TextCell (id=lastName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 33, column 38
    function valueRoot_10 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=lastName_Cell) at ABPersonMergeDetailsRowSet.default.pcf: line 33, column 38
    function value_8 () : java.lang.String {
      return aContact.LastName
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  
}