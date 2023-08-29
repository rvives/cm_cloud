package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      userRole.Role = (__VALUE_TO_SET as entity.Role)
    }
    
    // Reflect at UserDetailDV.pcf: line 61, column 38
    function reflectionValue_14 (TRIGGER_INDEX :  int, VALUE :  entity.Role) : java.lang.Object {
      return VALUE.Description
    }
    
    // 'valueRange' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function valueRange_10 () : java.lang.Object {
      return AllRoles
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserDetailDV.pcf: line 59, column 51
    function valueRoot_16 () : java.lang.Object {
      return userRole.Role
    }
    
    // 'value' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function valueRoot_9 () : java.lang.Object {
      return userRole
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserDetailDV.pcf: line 59, column 51
    function value_15 () : java.lang.String {
      return userRole.Role.Description
    }
    
    // 'value' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function value_7 () : entity.Role {
      return userRole.Role
    }
    
    // 'valueRange' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function verifyValueRangeIsAllowedType_11 ($$arg :  entity.Role[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.database.IQueryBeanResult<entity.Role>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function verifyValueRange_12 () : void {
      var __valueRangeArg = AllRoles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    property get userRole () : entity.UserRole {
      return getIteratedValue(1) as entity.UserRole
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at UserDetailDV.pcf: line 71, column 75
    function def_onEnter_21 (def :  pcf.UserGroupsLV) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on InputSetRef at UserDetailDV.pcf: line 26, column 123
    function def_onEnter_3 (def :  pcf.UserDetailInputSet) : void {
      def.onEnter(User,new gw.api.name.ABUserNameOwner(new gw.api.name.PersonNameDelegate(User.Contact)))
    }
    
    // 'def' attribute on ListViewInput at UserDetailDV.pcf: line 71, column 75
    function def_refreshVariables_22 (def :  pcf.UserGroupsLV) : void {
      def.refreshVariables(User)
    }
    
    // 'def' attribute on InputSetRef at UserDetailDV.pcf: line 26, column 123
    function def_refreshVariables_4 (def :  pcf.UserDetailInputSet) : void {
      def.refreshVariables(User,new gw.api.name.ABUserNameOwner(new gw.api.name.PersonNameDelegate(User.Contact)))
    }
    
    // 'initialValue' attribute on Variable at UserDetailDV.pcf: line 16, column 60
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Role> {
      return Role.finder.allOrderedByName()
    }
    
    // 'initialValue' attribute on Variable at UserDetailDV.pcf: line 20, column 27
    function initialValue_1 () : UserContact {
      return getContact()
    }
    
    // 'value' attribute on RangeCell (id=Role_Cell) at UserDetailDV.pcf: line 55, column 42
    function sortValue_5 (userRole :  entity.UserRole) : java.lang.Object {
      return userRole.Role
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserDetailDV.pcf: line 59, column 51
    function sortValue_6 (userRole :  entity.UserRole) : java.lang.Object {
      return userRole.Role.Description
    }
    
    // 'toAdd' attribute on RowIterator at UserDetailDV.pcf: line 45, column 43
    function toAdd_18 (userRole :  entity.UserRole) : void {
      User.addToRoles(userRole)
    }
    
    // 'toRemove' attribute on RowIterator at UserDetailDV.pcf: line 45, column 43
    function toRemove_19 (userRole :  entity.UserRole) : void {
      User.removeFromRoles(userRole)
    }
    
    // 'value' attribute on RowIterator at UserDetailDV.pcf: line 45, column 43
    function value_20 () : entity.UserRole[] {
      return User.Roles
    }
    
    // 'visible' attribute on Label at UserDetailDV.pcf: line 24, column 39
    function visible_2 () : java.lang.Boolean {
      return User.AccountLocked
    }
    
    property get AllRoles () : gw.api.database.IQueryBeanResult<Role> {
      return getVariableValue("AllRoles", 0) as gw.api.database.IQueryBeanResult<Role>
    }
    
    property set AllRoles ($arg :  gw.api.database.IQueryBeanResult<Role>) {
      setVariableValue("AllRoles", 0, $arg)
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    property get UserContact () : UserContact {
      return getVariableValue("UserContact", 0) as UserContact
    }
    
    property set UserContact ($arg :  UserContact) {
      setVariableValue("UserContact", 0, $arg)
    }
    
    property get isNew () : Boolean {
      return getRequireValue("isNew", 0) as Boolean
    }
    
    property set isNew ($arg :  Boolean) {
      setRequireValue("isNew", 0, $arg)
    }
    
    function getContact() : UserContact {
      if (User.Contact == null) {
        User.Contact = new UserContact()
      }
      return User.Contact
    }
    
    
  }
  
  
}