package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/users/UserGroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserGroupsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserGroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserGroupsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_4 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_6 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_7 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'value' attribute on BooleanRadioCell (id=Member_Cell) at UserGroupsLV.pcf: line 38, column 37
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Member = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Manager_Cell) at UserGroupsLV.pcf: line 44, column 38
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Manager = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Group = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function valueRange_11 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function valueRoot_10 () : java.lang.Object {
      return GroupUser
    }
    
    // 'value' attribute on BooleanRadioCell (id=Member_Cell) at UserGroupsLV.pcf: line 38, column 37
    function value_17 () : java.lang.Boolean {
      return GroupUser.Member
    }
    
    // 'value' attribute on BooleanRadioCell (id=Manager_Cell) at UserGroupsLV.pcf: line 44, column 38
    function value_21 () : java.lang.Boolean {
      return GroupUser.Manager
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function value_8 () : entity.Group {
      return GroupUser.Group
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_12 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_13 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    property get GroupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserGroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserGroupsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function conversionExpression_3 (PickedValue :  Group) : entity.GroupUser {
      var GU : GroupUser; if(User == null or !PickedValue.isMember(User?.ID)){GU = new GroupUser(); PickedValue.addToUsers(GU)}; return GU
    }
    
    // 'pickLocation' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function pickLocation_25 () : void {
      OrganizationGroupTreePopup.push()
    }
    
    // 'sortBy' attribute on GroupCell (id=Group_Cell) at UserGroupsLV.pcf: line 32, column 36
    function sortValue_0 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Group.Name
    }
    
    // 'value' attribute on BooleanRadioCell (id=Member_Cell) at UserGroupsLV.pcf: line 38, column 37
    function sortValue_1 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Member
    }
    
    // 'value' attribute on BooleanRadioCell (id=Manager_Cell) at UserGroupsLV.pcf: line 44, column 38
    function sortValue_2 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Manager
    }
    
    // 'toAdd' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function toAdd_26 (GroupUser :  entity.GroupUser) : void {
      gw.api.admin.GroupUserUtil.add(User,GroupUser)
    }
    
    // 'toRemove' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function toRemove_27 (GroupUser :  entity.GroupUser) : void {
      gw.api.admin.GroupUserUtil.remove(User,GroupUser.Group)
    }
    
    // 'value' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function value_28 () : entity.GroupUser[] {
      return User.AllGroupUsersAsArray
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    
  }
  
  
}