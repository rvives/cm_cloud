package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABCompanyVendorRowSet_ABCompanyVendorExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABCompanyVendorRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 20, column 27
    function initialValue_0 () : ABCompany[] {
      return {contact, duplicate, merged}
    }
    
    // 'value' attribute on CellIterator (id=preferredVendor) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 36, column 40
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
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ABCompanyVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=w9Received_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 62, column 40
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.W9Received = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioCell (id=w9Received_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 62, column 40
    function editable_8 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on BooleanRadioCell (id=w9Received_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 62, column 40
    function valueRoot_11 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on BooleanRadioCell (id=w9Received_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 62, column 40
    function value_9 () : java.lang.Boolean {
      return aContact.W9Received
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ABCompanyVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=w9ReceivedDate_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 77, column 44
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.W9ReceivedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateCell (id=w9ReceivedDate_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 77, column 44
    function editable_15 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on DateCell (id=w9ReceivedDate_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 77, column 44
    function valueRoot_18 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on DateCell (id=w9ReceivedDate_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 77, column 44
    function value_16 () : java.util.Date {
      return aContact.W9ReceivedDate
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ABCompanyVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=w9ValidFrom_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 92, column 41
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.W9ValidFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateCell (id=w9ValidFrom_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 92, column 41
    function editable_22 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on DateCell (id=w9ValidFrom_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 92, column 41
    function valueRoot_25 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on DateCell (id=w9ValidFrom_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 92, column 41
    function value_23 () : java.util.Date {
      return aContact.W9ValidFrom
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ABCompanyVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=w9ValidTo_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 107, column 39
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      aContact.W9ValidTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateCell (id=w9ValidTo_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 107, column 39
    function editable_29 () : java.lang.Boolean {
      return aContact == merged
    }
    
    // 'value' attribute on DateCell (id=w9ValidTo_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 107, column 39
    function valueRoot_32 () : java.lang.Object {
      return aContact
    }
    
    // 'value' attribute on DateCell (id=w9ValidTo_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 107, column 39
    function value_30 () : java.util.Date {
      return aContact.W9ValidTo
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyVendorRowSet.ABCompanyVendor.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABCompanyVendorRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=preferredVendor_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 40, column 60
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      (aContact as ABCompanyVendor).Preferred = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioCell (id=preferredVendor_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 40, column 60
    function editable_1 () : java.lang.Boolean {
      return aContact == merged and perm.ABContact.createpreferred
    }
    
    // 'value' attribute on BooleanRadioCell (id=preferredVendor_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 40, column 60
    function valueRoot_4 () : java.lang.Object {
      return (aContact as ABCompanyVendor)
    }
    
    // 'value' attribute on BooleanRadioCell (id=preferredVendor_Cell) at ABCompanyVendorRowSet.ABCompanyVendor.pcf: line 40, column 60
    function value_2 () : java.lang.Boolean {
      return (aContact as ABCompanyVendor).Preferred
    }
    
    property get aContact () : entity.ABCompany {
      return getIteratedValue(1) as entity.ABCompany
    }
    
    
  }
  
  
}