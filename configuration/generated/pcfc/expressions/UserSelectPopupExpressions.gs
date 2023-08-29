package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/userselect/UserSelectPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSelectPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/userselect/UserSelectPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSelectPopup2ExpressionsImpl extends UserSelectPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at UserSelectPopup.pcf: line 21, column 48
    function initialValue_0 () : gw.api.admin.ABGroupTreeNode {
      return new gw.api.admin.ABGroupTreeNode()
    }
    
    property get group () : gw.api.admin.ABGroupTreeNode {
      return getVariableValue("group", 1) as gw.api.admin.ABGroupTreeNode
    }
    
    property set group ($arg :  gw.api.admin.ABGroupTreeNode) {
      setVariableValue("group", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/userselect/UserSelectPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSelectPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.UserSelectPopup {
      return super.CurrentLocation as pcf.UserSelectPopup
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/userselect/UserSelectPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSelectPopupPickerExpressionsImpl extends UserSelectPopup2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'canClickElement' attribute on TreeView (id=UserSelectPopupPicker) at UserSelectPopup.pcf: line 28, column 26
    function canClickElement_1 () : java.lang.Boolean {
      return element typeis User
    }
    
    // 'elementLabel' attribute on TreeView (id=UserSelectPopupPicker) at UserSelectPopup.pcf: line 28, column 26
    function elementLabel_2 () : java.lang.Object {
      return element
    }
    
    // 'elementName' attribute on TreeView (id=UserSelectPopupPicker) at UserSelectPopup.pcf: line 28, column 26
    function elementValueSetter_3 (__VALUE :  java.lang.Object) : void {
      element = __VALUE
    }
    
    // 'onClickElement' attribute on TreeView (id=UserSelectPopupPicker) at UserSelectPopup.pcf: line 28, column 26
    function onClickElement_4 () : void {
      CurrentLocation.pickValueAndCommit(element as User)
    }
    
    // 'value' attribute on TreeView (id=UserSelectPopupPicker) at UserSelectPopup.pcf: line 28, column 26
    function value_5 () : gw.api.tree.TreeNode {
      return group
    }
    
    property get element () : java.lang.Object {
      return getTreeViewValue(2) as java.lang.Object
    }
    
    property set element ($arg :  java.lang.Object) {
      setTreeViewValue(2, $arg)
    }
    
    
  }
  
  
}