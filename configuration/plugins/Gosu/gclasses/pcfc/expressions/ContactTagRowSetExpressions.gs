package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactTagRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactTagRowSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactTagRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactTagRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=mergedContactCell_Cell) at ContactTagRowSet.pcf: line 38, column 73
    function action_6 () : void {
      ContactTagPopup.push(mergedContact)
    }
    
    // 'action' attribute on ButtonCell (id=mergedContactCell_Cell) at ContactTagRowSet.pcf: line 38, column 73
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ContactTagPopup.createDestination(mergedContact)
    }
    
    // 'initialValue' attribute on Variable at ContactTagRowSet.pcf: line 20, column 27
    function initialValue_0 () : ABContact[] {
      return {keptContact, retiredContact, mergedContact}
    }
    
    // 'initialValue' attribute on Variable at ContactTagRowSet.pcf: line 24, column 49
    function initialValue_1 () : gw.web.merge.MergeContactsWebUtil {
      return gw.web.merge.MergeContactsWebUtil.Instance
    }
    
    // 'value' attribute on TextCell (id=keptContactCell_Cell) at ContactTagRowSet.pcf: line 31, column 71
    function value_2 () : java.lang.String {
      return mergeContactsWebUtil.contactTagsDisplay(keptContact)
    }
    
    // 'value' attribute on TextCell (id=retiredContactCell_Cell) at ContactTagRowSet.pcf: line 34, column 74
    function value_4 () : java.lang.String {
      return mergeContactsWebUtil.contactTagsDisplay(retiredContact)
    }
    
    // 'value' attribute on ButtonCell (id=mergedContactCell_Cell) at ContactTagRowSet.pcf: line 38, column 73
    function value_8 () : java.lang.String {
      return mergeContactsWebUtil.contactTagsDisplay(mergedContact)
    }
    
    property get contacts () : ABContact[] {
      return getVariableValue("contacts", 0) as ABContact[]
    }
    
    property set contacts ($arg :  ABContact[]) {
      setVariableValue("contacts", 0, $arg)
    }
    
    property get keptContact () : ABContact {
      return getRequireValue("keptContact", 0) as ABContact
    }
    
    property set keptContact ($arg :  ABContact) {
      setRequireValue("keptContact", 0, $arg)
    }
    
    property get mergeContactsWebUtil () : gw.web.merge.MergeContactsWebUtil {
      return getVariableValue("mergeContactsWebUtil", 0) as gw.web.merge.MergeContactsWebUtil
    }
    
    property set mergeContactsWebUtil ($arg :  gw.web.merge.MergeContactsWebUtil) {
      setVariableValue("mergeContactsWebUtil", 0, $arg)
    }
    
    property get mergedContact () : ABContact {
      return getRequireValue("mergedContact", 0) as ABContact
    }
    
    property set mergedContact ($arg :  ABContact) {
      setRequireValue("mergedContact", 0, $arg)
    }
    
    property get retiredContact () : ABContact {
      return getRequireValue("retiredContact", 0) as ABContact
    }
    
    property set retiredContact ($arg :  ABContact) {
      setRequireValue("retiredContact", 0, $arg)
    }
    
    
  }
  
  
}