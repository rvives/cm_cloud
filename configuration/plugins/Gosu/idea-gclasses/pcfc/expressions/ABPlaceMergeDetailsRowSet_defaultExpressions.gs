package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPlaceMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPlaceMergeDetailsRowSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPlaceMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPlaceMergeDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=nameLabel_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 22, column 45
    function available_0 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'value' attribute on TextCell (id=nameLabel_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 22, column 45
    function valueRoot_2 () : java.lang.Object {
      return nameOwner
    }
    
    // 'value' attribute on TextCell (id=nameLabel_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 22, column 45
    function value_1 () : java.lang.String {
      return nameOwner.ContactNameLabel
    }
    
    // 'value' attribute on CellIterator (id=name) at ABPlaceMergeDetailsRowSet.default.pcf: line 27, column 38
    function value_14 () : entity.ABPlace[] {
      return places
    }
    
    // 'visible' attribute on Row at ABPlaceMergeDetailsRowSet.default.pcf: line 18, column 75
    function visible_15 () : java.lang.Boolean {
      return nameOwner.isVisible(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    property get mergedPlace () : ABPlace {
      return getRequireValue("mergedPlace", 0) as ABPlace
    }
    
    property set mergedPlace ($arg :  ABPlace) {
      setRequireValue("mergedPlace", 0, $arg)
    }
    
    property get nameOwner () : gw.api.name.NameOwner {
      return getRequireValue("nameOwner", 0) as gw.api.name.NameOwner
    }
    
    property set nameOwner ($arg :  gw.api.name.NameOwner) {
      setRequireValue("nameOwner", 0, $arg)
    }
    
    property get places () : ABPlace[] {
      return getRequireValue("places", 0) as ABPlace[]
    }
    
    property set places ($arg :  ABPlace[]) {
      setRequireValue("places", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPlaceMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABPlaceMergeDetailsRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextCell (id=name_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 33, column 34
    function available_5 () : java.lang.Boolean {
      return nameOwner.isAvailable(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 33, column 34
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=name_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 33, column 34
    function editable_6 () : java.lang.Boolean {
      return aContact == mergedPlace && nameOwner.isEditable(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'required' attribute on TextCell (id=name_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 33, column 34
    function required_7 () : java.lang.Boolean {
      return nameOwner.isRequired(gw.api.name.NameOwnerFieldId.NP_NAME)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 33, column 34
    function valueRoot_10 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at ABPlaceMergeDetailsRowSet.default.pcf: line 33, column 34
    function value_8 () : java.lang.String {
      return aContact.Name
    }
    
    property get aContact () : entity.ABPlace {
      return getIteratedValue(1) as entity.ABPlace
    }
    
    
  }
  
  
}