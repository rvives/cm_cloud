package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.CountryConfig
uses gw.api.util.PropertyDisplay
uses gw.api.bean.compare.ui.PropertyDiffDisplay
uses gw.api.bean.compare.ui.DiffDisplay
uses gw.api.bean.compare.ui.EntityDiffDisplay
uses gw.api.contact.pendingchanges.DiffDisplays
uses gw.plugin.contact.pendingchange.ABContactContactDiffDisplay
uses gw.plugin.contact.pendingchange.ABContactAddressDiffDisplay
@javax.annotation.processing.Generated("config/web/pcf/contacts/compare/ContactComparisonLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactComparisonLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/compare/ContactComparisonLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactComparisonLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // RowTree (id=lv2) at ContactComparisonLV.pcf: line 26, column 20
    function containerLabel_9 (diff :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'initialValue' attribute on Variable at ContactComparisonLV.pcf: line 20, column 43
    function initialValue_0 () : gw.api.tree.RowTreeRootNode {
      return getRowTreeRoot()
    }
    
    // 'sortBy' attribute on TextCell (id=LabelField_Cell) at ContactComparisonLV.pcf: line 34, column 42
    function sortValue_1 (diff :  gw.api.bean.compare.ui.DiffDisplay) : java.lang.Object {
      return getSortBy(diff)
    }
    
    // 'value' attribute on RowTree (id=lv2) at ContactComparisonLV.pcf: line 26, column 20
    function value_8 () : java.lang.Object {
      return root
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get pendingContactUpdate () : PendingContactUpdate {
      return getRequireValue("pendingContactUpdate", 0) as PendingContactUpdate
    }
    
    property set pendingContactUpdate ($arg :  PendingContactUpdate) {
      setRequireValue("pendingContactUpdate", 0, $arg)
    }
    
    property get root () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("root", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set root ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("root", 0, $arg)
    }
    
    property get updateDiffDisplay () : gw.api.bean.compare.ui.DiffDisplay {
      return getRequireValue("updateDiffDisplay", 0) as gw.api.bean.compare.ui.DiffDisplay
    }
    
    property set updateDiffDisplay ($arg :  gw.api.bean.compare.ui.DiffDisplay) {
      setRequireValue("updateDiffDisplay", 0, $arg)
    }
    
    
    function getRowTreeRoot() : gw.api.tree.RowTreeRootNode {
      if (pendingContactUpdate == null) {
        return null
      }
      return new gw.api.tree.RowTreeRootNode({updateDiffDisplay},
        \r ->(r typeis DiffDisplay) ? DiffDisplays.getVisibleChildren(r) : {}, DiffDisplays.getVisibleChildren(updateDiffDisplay).HasElements ? 1 : 0)
    }
    
    function getSortBy (diff : DiffDisplay) : String {
      return ((diff typeis EntityDiffDisplay) ? "B:" : "A:") + diff.Label
    }
    
    function oldValue(diff : DiffDisplay) : String {
      if (diff typeis ABContactContactDiffDisplay || diff typeis ABContactAddressDiffDisplay) { // go fetch the NewValue regardless of type
        return diff.OldValue.elide(60)
      } else if (not DiffDisplays.getAllChildren(diff).Empty and (diff.Type==CHANGED or (diff.Type==UNCHANGED and DiffDisplays.hasDeepChanges(diff))))
        return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Changed")  // default display key is empty string
      else if ((diff.Type == REMOVED or diff.Type == MOVED_FROM))
        return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Check")
      else
        return diff.OldValue.elide(60)
    }
    
    function newValue(diff : DiffDisplay) : String {
      if (diff typeis ABContactContactDiffDisplay || diff typeis ABContactAddressDiffDisplay) { // go fetch the NewValue regardless of type
        return diff.NewValue.elide(60)
      } else if ((diff.Type == ADDED or diff.Type == MOVED_TO))
        return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Check")
      else if (diff.Type == REMOVED or diff.Type == MOVED_FROM)
        return DisplayKey.get("Web.Contacts.PendingChanges.PendingUpdatesCard.Removed")
      else
        return diff.NewValue.elide(60)
    }
    
    function label(diff : DiffDisplay) : String {
      if (diff typeis PropertyDiffDisplay) {
        if (diff.Diff.PropertyInfo.OwnersType == entity.Address) {
          var propertyName = diff.Diff.PropertyInfo.getName()
          var cc = CountryConfig.getCountryConfig(contact.PrimaryAddress.Country);
          if (cc == null)
            return diff.Label
          if (propertyName == "State") {
            return cc.getStateLabel() ?: diff.Label;
          }
          if (propertyName == "PostalCode") {
            return cc.getPostalCodeLabel() ?: diff.Label;
          }
          if (propertyName == "City") {
            return cc.getCityLabel() ?: diff.Label;
          }
        }
      }
      return diff.Label
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/compare/ContactComparisonLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends ContactComparisonLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=LabelField_Cell) at ContactComparisonLV.pcf: line 34, column 42
    function value_2 () : java.lang.String {
      return label(diff).elide(80)
    }
    
    // 'value' attribute on TextCell (id=OldContactField_Cell) at ContactComparisonLV.pcf: line 39, column 35
    function value_4 () : java.lang.String {
      return oldValue(diff)
    }
    
    // 'value' attribute on TextCell (id=NewContactField_Cell) at ContactComparisonLV.pcf: line 44, column 35
    function value_6 () : java.lang.String {
      return newValue(diff)
    }
    
    property get diff () : gw.api.bean.compare.ui.DiffDisplay {
      return getIteratedValue(1) as gw.api.bean.compare.ui.DiffDisplay
    }
    
    
  }
  
  
}