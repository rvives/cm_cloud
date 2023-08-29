package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupUsersLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupUsersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at GroupUsersLV.pcf: line 22, column 38
    function conversionExpression_4 (PickedValue :  User) : entity.GroupUser {
      var GU = new GroupUser(); GU.User = PickedValue; return GU
    }
    
    // 'pickLocation' attribute on RowIterator at GroupUsersLV.pcf: line 22, column 38
    function pickLocation_29 () : void {
      UserSearchPopup.push(Group.Organization)
    }
    
    // 'value' attribute on UserCell (id=GroupUsers_User_Cell) at GroupUsersLV.pcf: line 33, column 36
    function sortValue_0 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User
    }
    
    // 'value' attribute on BooleanRadioCell (id=GroupUsers_Member_Cell) at GroupUsersLV.pcf: line 39, column 37
    function sortValue_1 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Member
    }
    
    // 'value' attribute on BooleanRadioCell (id=GroupUsers_Manager_Cell) at GroupUsersLV.pcf: line 45, column 38
    function sortValue_2 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=ProximitySearchStatus_Cell) at GroupUsersLV.pcf: line 50, column 54
    function sortValue_3 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return gw.api.geocode.GeocodeScriptHelper.categorizeGeocodeStatus(GroupUser.User.Contact.PrimaryAddress.GeocodeStatus)
    }
    
    // 'toAdd' attribute on RowIterator at GroupUsersLV.pcf: line 22, column 38
    function toAdd_30 (GroupUser :  entity.GroupUser) : void {
      Group.addToUsers(GroupUser)
    }
    
    // 'toRemove' attribute on RowIterator at GroupUsersLV.pcf: line 22, column 38
    function toRemove_31 (GroupUser :  entity.GroupUser) : void {
      Group.removeFromUsers(GroupUser)
    }
    
    // 'value' attribute on RowIterator at GroupUsersLV.pcf: line 22, column 38
    function value_32 () : entity.GroupUser[] {
      return Group.Users
    }
    
    property get Group () : Group {
      return getRequireValue("Group", 0) as Group
    }
    
    property set Group ($arg :  Group) {
      setRequireValue("Group", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupUsersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 9, column 49
    function action_5 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 12, column 49
    function action_7 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_8 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'value' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.User = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on BooleanRadioCell (id=GroupUsers_Member_Cell) at GroupUsersLV.pcf: line 39, column 37
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Member = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=GroupUsers_Manager_Cell) at GroupUsersLV.pcf: line 45, column 38
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Manager = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on Row at GroupUsersLV.pcf: line 24, column 99
    function editable_28 () : java.lang.Boolean {
      return not GroupUser.User.Contact.Obfuscated or perm.System.editobfuscatedusercontact
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function valueRange_12 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function valueRoot_11 () : java.lang.Object {
      return GroupUser
    }
    
    // 'value' attribute on BooleanRadioCell (id=GroupUsers_Member_Cell) at GroupUsersLV.pcf: line 39, column 37
    function value_18 () : java.lang.Boolean {
      return GroupUser.Member
    }
    
    // 'value' attribute on BooleanRadioCell (id=GroupUsers_Manager_Cell) at GroupUsersLV.pcf: line 45, column 38
    function value_22 () : java.lang.Boolean {
      return GroupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=ProximitySearchStatus_Cell) at GroupUsersLV.pcf: line 50, column 54
    function value_26 () : typekey.ProximitySearchStatus {
      return gw.api.geocode.GeocodeScriptHelper.categorizeGeocodeStatus(GroupUser.User.Contact.PrimaryAddress.GeocodeStatus)
    }
    
    // 'value' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function value_9 () : entity.User {
      return GroupUser.User
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_14 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    property get GroupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  
}