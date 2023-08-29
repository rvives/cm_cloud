package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/groupsearch/GroupSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupSearchResultsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/groupsearch/GroupSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on GroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 23, column 26
    function sortValue_0 (Group :  entity.Group) : java.lang.Object {
      return Group.Name
    }
    
    // 'sortBy' attribute on GroupCell (id=ParentGroup_Cell) at GroupSearchResultsLV.pcf: line 28, column 33
    function sortValue_1 (Group :  entity.Group) : java.lang.Object {
      return Group.Parent.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at GroupSearchResultsLV.pcf: line 33, column 42
    function sortValue_2 (Group :  entity.Group) : java.lang.Object {
      return Group.GroupType
    }
    
    // 'value' attribute on RowIterator at GroupSearchResultsLV.pcf: line 15, column 72
    function value_32 () : gw.api.database.IQueryBeanResult<entity.Group> {
      return GroupList
    }
    
    property get GroupList () : gw.api.database.IQueryBeanResult<Group> {
      return getRequireValue("GroupList", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set GroupList ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setRequireValue("GroupList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/groupsearch/GroupSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 23, column 26
    function action_13 () : void {
      GroupDetailPopup.push(Group)
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_17 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_19 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 10, column 49
    function action_3 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 13, column 49
    function action_5 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 7, column 52
    function action_7 () : void {
      GroupDetailPopup.push(Group)
    }
    
    // 'action' attribute on GroupCell (id=Name_Cell) at GroupSearchResultsLV.pcf: line 23, column 26
    function action_dest_14 () : pcf.api.Destination {
      return pcf.GroupDetailPopup.createDestination(Group)
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_18 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_20 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_4 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_6 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 7, column 52
    function action_dest_8 () : pcf.api.Destination {
      return pcf.GroupDetailPopup.createDestination(Group)
    }
    
    // 'valueRange' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 7, column 52
    function valueRange_10 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function valueRoot_22 () : java.lang.Object {
      return Group
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function value_21 () : entity.Group {
      return Group.Parent
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at GroupSearchResultsLV.pcf: line 33, column 42
    function value_29 () : typekey.GroupType {
      return Group.GroupType
    }
    
    // 'value' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 7, column 52
    function value_9 () : entity.Group {
      return Group
    }
    
    // 'valueRange' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_11 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Name_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_12 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_25 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    property get Group () : entity.Group {
      return getIteratedValue(1) as entity.Group
    }
    
    
  }
  
  
}