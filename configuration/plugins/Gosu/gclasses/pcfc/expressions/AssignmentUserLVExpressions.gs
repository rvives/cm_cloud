package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentUserLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentUserLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at AssignmentUserLV.pcf: line 23, column 36
    function sortValue_0 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User
    }
    
    // 'value' attribute on RowIterator at AssignmentUserLV.pcf: line 16, column 76
    function value_29 () : gw.api.database.IQueryBeanResult<entity.GroupUser> {
      return GroupUsers
    }
    
    property get GroupUsers () : gw.api.database.IQueryBeanResult<GroupUser> {
      return getRequireValue("GroupUsers", 0) as gw.api.database.IQueryBeanResult<GroupUser>
    }
    
    property set GroupUsers ($arg :  gw.api.database.IQueryBeanResult<GroupUser>) {
      setRequireValue("GroupUsers", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AssignmentUserLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_16 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_18 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_4 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_6 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_17 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_19 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_7 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'pickValue' attribute on RowIterator at AssignmentUserLV.pcf: line 16, column 76
    function pickValue_28 () : gw.api.assignment.Assignee {
      return new gw.api.assignment.UserAssignee(GroupUser)
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function valueRange_10 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at AssignmentUserLV.pcf: line 23, column 36
    function valueRoot_2 () : java.lang.Object {
      return GroupUser
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function valueRoot_21 () : java.lang.Object {
      return GroupUser.Group
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at AssignmentUserLV.pcf: line 23, column 36
    function value_1 () : entity.User {
      return GroupUser.User
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function value_20 () : entity.Group {
      return GroupUser.Group.Parent
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function value_8 () : entity.Group {
      return GroupUser.Group
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_11 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_23 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_12 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_24 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    property get GroupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  
}