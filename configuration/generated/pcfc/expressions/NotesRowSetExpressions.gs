package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/NotesRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NotesRowSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/NotesRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NotesRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaCell (id=notes_Cell) at NotesRowSet.pcf: line 40, column 35
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextAreaCell (id=notes_Cell) at NotesRowSet.pcf: line 40, column 35
    function editable_1 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on TextAreaCell (id=notes_Cell) at NotesRowSet.pcf: line 40, column 35
    function valueRoot_4 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on TextAreaCell (id=notes_Cell) at NotesRowSet.pcf: line 40, column 35
    function value_2 () : java.lang.String {
      return aContact.Notes
    }
    
    property get aContact () : entity.ABContact {
      return getIteratedValue(1) as entity.ABContact
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/NotesRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NotesRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at NotesRowSet.pcf: line 19, column 27
    function initialValue_0 () : ABContact[] {
      return {contact, duplicate, merged}
    }
    
    // 'value' attribute on CellIterator (id=workPhone) at NotesRowSet.pcf: line 35, column 40
    function value_7 () : entity.ABContact[] {
      return contacts
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contacts () : ABContact[] {
      return getVariableValue("contacts", 0) as ABContact[]
    }
    
    property set contacts ($arg :  ABContact[]) {
      setVariableValue("contacts", 0, $arg)
    }
    
    property get duplicate () : ABContact {
      return getRequireValue("duplicate", 0) as ABContact
    }
    
    property set duplicate ($arg :  ABContact) {
      setRequireValue("duplicate", 0, $arg)
    }
    
    property get merged () : ABContact {
      return getRequireValue("merged", 0) as ABContact
    }
    
    property set merged ($arg :  ABContact) {
      setRequireValue("merged", 0, $arg)
    }
    
    
  }
  
  
}