package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/HistoryTrackedChangesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HistoryTrackedChangesLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/HistoryTrackedChangesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HistoryTrackedChangesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Field_Cell) at HistoryTrackedChangesLV.pcf: line 21, column 47
    function sortValue_0 (trackedChange :  entity.TrackedChange) : java.lang.Object {
      return trackedChange.ChangedField
    }
    
    // 'value' attribute on TextCell (id=OldValue_Cell) at HistoryTrackedChangesLV.pcf: line 26, column 87
    function sortValue_1 (trackedChange :  entity.TrackedChange) : java.lang.Object {
      return trackedChange.OldValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at HistoryTrackedChangesLV.pcf: line 30, column 43
    function sortValue_3 (trackedChange :  entity.TrackedChange) : java.lang.Object {
      return trackedChange.NewValue
    }
    
    // 'value' attribute on RowIterator at HistoryTrackedChangesLV.pcf: line 14, column 42
    function value_14 () : entity.TrackedChange[] {
      return history.TrackedChanges
    }
    
    // 'visible' attribute on TextCell (id=OldValue_Cell) at HistoryTrackedChangesLV.pcf: line 26, column 87
    function visible_2 () : java.lang.Boolean {
      return history.CustomType != CustomHistoryType.TC_PENDINGCHANGEREJECTED
    }
    
    property get history () : History {
      return getRequireValue("history", 0) as History
    }
    
    property set history ($arg :  History) {
      setRequireValue("history", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/HistoryTrackedChangesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HistoryTrackedChangesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Field_Cell) at HistoryTrackedChangesLV.pcf: line 21, column 47
    function valueRoot_5 () : java.lang.Object {
      return trackedChange
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at HistoryTrackedChangesLV.pcf: line 30, column 43
    function value_11 () : java.lang.String {
      return trackedChange.NewValue
    }
    
    // 'value' attribute on TextCell (id=Field_Cell) at HistoryTrackedChangesLV.pcf: line 21, column 47
    function value_4 () : java.lang.String {
      return trackedChange.ChangedField
    }
    
    // 'value' attribute on TextCell (id=OldValue_Cell) at HistoryTrackedChangesLV.pcf: line 26, column 87
    function value_7 () : java.lang.String {
      return trackedChange.OldValue
    }
    
    // 'visible' attribute on TextCell (id=OldValue_Cell) at HistoryTrackedChangesLV.pcf: line 26, column 87
    function visible_9 () : java.lang.Boolean {
      return history.CustomType != CustomHistoryType.TC_PENDINGCHANGEREJECTED
    }
    
    property get trackedChange () : entity.TrackedChange {
      return getIteratedValue(1) as entity.TrackedChange
    }
    
    
  }
  
  
}