package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.bean.compare.ui.DiffDisplay
uses gw.api.bean.compare.ui.EntityDiffDisplay
uses gw.api.contact.pendingchanges.DiffDisplays
uses gw.api.web.contact.PendingContactChangeUtil
uses gw.plugin.contact.pendingchange.ABContactContactDiffDisplay
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChangesEditWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PendingChangesEditWorksheetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChangesEditWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactComparisonLVExpressionsImpl extends PendingChangesEditWorksheetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // RowTree (id=lv2) at PendingChangesEditWorksheet.pcf: line 37, column 24
    function containerLabel_10 (diff :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'initialValue' attribute on Variable at PendingChangesEditWorksheet.pcf: line 31, column 47
    function initialValue_1 () : gw.api.tree.RowTreeRootNode {
      return getRowTreeRoot()
    }
    
    // 'sortBy' attribute on TextCell (id=LabelField_Cell) at PendingChangesEditWorksheet.pcf: line 45, column 45
    function sortValue_2 (diff :  gw.api.bean.compare.ui.DiffDisplay) : java.lang.Object {
      return getSortBy(diff)
    }
    
    // 'value' attribute on RowTree (id=lv2) at PendingChangesEditWorksheet.pcf: line 37, column 24
    function value_9 () : java.lang.Object {
      return root
    }
    
    property get root () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("root", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set root ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("root", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChangesEditWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PendingChangesEditWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (diffDisplay :  gw.api.bean.compare.ui.DiffDisplay) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=PendingChangesEditWorksheet_CancelButton) at PendingChangesEditWorksheet.pcf: line 23, column 90
    function action_0 () : void {
      CurrentLocation.cancel()
    }
    
    override property get CurrentLocation () : pcf.PendingChangesEditWorksheet {
      return super.CurrentLocation as pcf.PendingChangesEditWorksheet
    }
    
    property get diffDisplay () : gw.api.bean.compare.ui.DiffDisplay {
      return getVariableValue("diffDisplay", 0) as gw.api.bean.compare.ui.DiffDisplay
    }
    
    property set diffDisplay ($arg :  gw.api.bean.compare.ui.DiffDisplay) {
      setVariableValue("diffDisplay", 0, $arg)
    }
    
    
    function getRowTreeRoot() : gw.api.tree.RowTreeRootNode {
      return new gw.api.tree.RowTreeRootNode({diffDisplay},
        \r ->(r typeis DiffDisplay) ? DiffDisplays.getVisibleChildren(r) : {}, DiffDisplays.getVisibleChildren(diffDisplay).HasElements ? 1 : 0)
    }
    
    function getSortBy (diff : DiffDisplay) : String {
      return ((diff typeis EntityDiffDisplay) ? "B:" : "A:") + diff.Label
    }
    
    function oldValue(diff : DiffDisplay) : String {
      if (diff typeis ABContactContactDiffDisplay) { // go fetch the NewValue regardless of type
        return diff.OldValue.elide(60)
      } else if (not DiffDisplays.getAllChildren(diff).Empty and (diff.Type==CHANGED or (diff.Type==UNCHANGED and DiffDisplays.hasDeepChanges(diff))))
        return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Changed")  // default display key is empty string
      else if ((diff.Type == REMOVED or diff.Type == MOVED_FROM))
        return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Check")
      else
        return diff.OldValue.elide(60)
    }
    
    function newValue(diff : DiffDisplay) : String {
      if (diff typeis ABContactContactDiffDisplay) { // go fetch the NewValue regardless of type
        return diff.NewValue.elide(60)
      } else if ((diff.Type == ADDED or diff.Type == MOVED_TO))
        return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Check")
      else if (diff.Type == REMOVED or diff.Type == MOVED_FROM)
        return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Removed")
      else
        return diff.NewValue.elide(60)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChangesEditWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends ContactComparisonLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=LabelField_Cell) at PendingChangesEditWorksheet.pcf: line 45, column 45
    function value_3 () : java.lang.String {
      return diff.Label.elide(80)
    }
    
    // 'value' attribute on TextCell (id=OldContactField_Cell) at PendingChangesEditWorksheet.pcf: line 50, column 39
    function value_5 () : java.lang.String {
      return oldValue(diff)
    }
    
    // 'value' attribute on TextCell (id=NewContactField_Cell) at PendingChangesEditWorksheet.pcf: line 55, column 39
    function value_7 () : java.lang.String {
      return newValue(diff)
    }
    
    property get diff () : gw.api.bean.compare.ui.DiffDisplay {
      return getIteratedValue(2) as gw.api.bean.compare.ui.DiffDisplay
    }
    
    
  }
  
  
}