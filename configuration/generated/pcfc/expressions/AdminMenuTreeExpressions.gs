package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminMenuTreeExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminMenuTree2ExpressionsImpl extends AdminMenuTreeExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'elementLabel' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 17, column 22
    function elementLabel_1 () : java.lang.Object {
      return element
    }
    
    // 'elementName' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 17, column 22
    function elementValueSetter_2 (__VALUE :  java.lang.Object) : void {
      element = __VALUE
    }
    
    // 'onClickElement' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 17, column 22
    function onClickElement_3 () : void {
      if(element typeis User) {UserDetailPage.go(element)} else if(element typeis Group) {GroupDetailPage.go(element)}
    }
    
    // 'value' attribute on TreeView (id=AdminMenuTree) at AdminMenuTree.pcf: line 17, column 22
    function value_4 () : gw.api.tree.TreeNode {
      return group
    }
    
    property get element () : java.lang.Object {
      return getTreeViewValue(1) as java.lang.Object
    }
    
    property set element ($arg :  java.lang.Object) {
      setTreeViewValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/AdminMenuTree.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminMenuTreeExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AdminMenuTree.pcf: line 11, column 44
    function initialValue_0 () : gw.api.admin.ABGroupTreeNode {
      return new gw.api.admin.ABGroupTreeNode()
    }
    
    property get group () : gw.api.admin.ABGroupTreeNode {
      return getVariableValue("group", 0) as gw.api.admin.ABGroupTreeNode
    }
    
    property set group ($arg :  gw.api.admin.ABGroupTreeNode) {
      setVariableValue("group", 0, $arg)
    }
    
    
  }
  
  
}