package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPersonVendorRowSet_ABPersonVendorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPersonVendorRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ABPersonVendorRowSet.ABPersonVendor.pcf: line 20, column 26
    function initialValue_0 () : ABPerson[] {
      return {contact, duplicate, merged}
    }
    
    // 'value' attribute on CellIterator (id=preferredVendor) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 36, column 39
    function value_7 () : entity.ABPerson[] {
      return contacts
    }
    
    property get contact () : ABPerson {
      return getRequireValue("contact", 0) as ABPerson
    }
    
    property set contact ($arg :  ABPerson) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contacts () : ABPerson[] {
      return getVariableValue("contacts", 0) as ABPerson[]
    }
    
    property set contacts ($arg :  ABPerson[]) {
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
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ABPersonVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=w9Received_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 62, column 40
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.W9Received = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioCell (id=w9Received_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 62, column 40
    function editable_8 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on BooleanRadioCell (id=w9Received_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 62, column 40
    function valueRoot_11 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on BooleanRadioCell (id=w9Received_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 62, column 40
    function value_9 () : java.lang.Boolean {
      return aContact.W9Received
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ABPersonVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=w9ReceivedDate_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 77, column 44
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.W9ReceivedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateCell (id=w9ReceivedDate_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 77, column 44
    function editable_15 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on DateCell (id=w9ReceivedDate_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 77, column 44
    function valueRoot_18 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on DateCell (id=w9ReceivedDate_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 77, column 44
    function value_16 () : java.util.Date {
      return aContact.W9ReceivedDate
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ABPersonVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=w9ValidFrom_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 92, column 41
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.W9ValidFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateCell (id=w9ValidFrom_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 92, column 41
    function editable_22 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on DateCell (id=w9ValidFrom_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 92, column 41
    function valueRoot_25 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on DateCell (id=w9ValidFrom_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 92, column 41
    function value_23 () : java.util.Date {
      return aContact.W9ValidFrom
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ABPersonVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=w9ValidTo_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 107, column 39
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.W9ValidTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateCell (id=w9ValidTo_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 107, column 39
    function editable_29 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on DateCell (id=w9ValidTo_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 107, column 39
    function valueRoot_32 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on DateCell (id=w9ValidTo_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 107, column 39
    function value_30 () : java.util.Date {
      return aContact.W9ValidTo
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABPersonVendorRowSet.ABPersonVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABPersonVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=preferredVendor_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 40, column 59
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      (aContact as ABPersonVendor).Preferred = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioCell (id=preferredVendor_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 40, column 59
    function editable_1 () : java.lang.Boolean {
      return aContact == merged and perm.ABContact.createpreferred
    }
    
    // 'value' attribute on BooleanRadioCell (id=preferredVendor_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 40, column 59
    function valueRoot_4 () : java.lang.Object {
      return (aContact as ABPersonVendor)
    }
    
    // 'value' attribute on BooleanRadioCell (id=preferredVendor_Cell) at ABPersonVendorRowSet.ABPersonVendor.pcf: line 40, column 59
    function value_2 () : java.lang.Boolean {
      return (aContact as ABPersonVendor).Preferred
    }
    
    property get aContact () : entity.ABPerson {
      return getIteratedValue(1) as entity.ABPerson
    }
    
    
  }
  
  
}