package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RoleUsersLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RoleUsersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function checkBoxVisible_4 () : java.lang.Boolean {
      return not User.Contact.Obfuscated or perm.System.editobfuscatedusercontact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RoleUsersLV.pcf: line 28, column 45
    function valueRoot_2 () : java.lang.Object {
      return User.Contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RoleUsersLV.pcf: line 28, column 45
    function value_1 () : java.lang.String {
      return User.Contact.DisplayName
    }
    
    property get User () : entity.User {
      return getIteratedValue(1) as entity.User
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RoleUsersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function pickLocation_5 () : void {
      UserSearchPopup.push(null)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RoleUsersLV.pcf: line 28, column 45
    function sortValue_0 (User :  entity.User) : java.lang.Object {
      return User.Contact.DisplayName
    }
    
    // 'toAdd' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function toAdd_6 (User :  entity.User) : void {
      Role.addRoleToUser(User)
    }
    
    // 'toRemove' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function toRemove_7 (User :  entity.User) : void {
      Role.removeRoleFromUser(User)
    }
    
    // 'value' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function value_8 () : entity.User[] {
      return Role.AllUsersArray
    }
    
    property get Role () : Role {
      return getRequireValue("Role", 0) as Role
    }
    
    property set Role ($arg :  Role) {
      setRequireValue("Role", 0, $arg)
    }
    
    
  }
  
  
}