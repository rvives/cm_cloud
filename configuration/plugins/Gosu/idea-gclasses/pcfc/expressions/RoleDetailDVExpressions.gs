package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RoleDetailDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RoleDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Permission_Cell) at RoleDetailDV.pcf: line 55, column 59
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      RolePrivilege.Permission = (__VALUE_TO_SET as typekey.SystemPermissionType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Permission_Cell) at RoleDetailDV.pcf: line 55, column 59
    function editable_13 () : java.lang.Boolean {
      return perm.RolePrivilege.edit
    }
    
    // Reflect at RoleDetailDV.pcf: line 61, column 44
    function reflectionValue_19 (TRIGGER_INDEX :  int, VALUE :  typekey.SystemPermissionType) : java.lang.Object {
      return VALUE.Code
    }
    
    // Reflect at RoleDetailDV.pcf: line 68, column 44
    function reflectionValue_23 (TRIGGER_INDEX :  int, VALUE :  typekey.SystemPermissionType) : java.lang.Object {
      return VALUE.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Permission_Cell) at RoleDetailDV.pcf: line 55, column 59
    function valueRoot_16 () : java.lang.Object {
      return RolePrivilege
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RoleDetailDV.pcf: line 59, column 55
    function valueRoot_21 () : java.lang.Object {
      return RolePrivilege.Permission
    }
    
    // 'value' attribute on TypeKeyCell (id=Permission_Cell) at RoleDetailDV.pcf: line 55, column 59
    function value_14 () : typekey.SystemPermissionType {
      return RolePrivilege.Permission
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RoleDetailDV.pcf: line 59, column 55
    function value_20 () : java.lang.String {
      return RolePrivilege.Permission.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RoleDetailDV.pcf: line 66, column 62
    function value_24 () : java.lang.String {
      return RolePrivilege.Permission.Description
    }
    
    property get RolePrivilege () : entity.RolePrivilege {
      return getIteratedValue(1) as entity.RolePrivilege
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RoleDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RoleDetailDV.pcf: line 18, column 28
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Role.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at RoleDetailDV.pcf: line 24, column 35
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Role.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'sortBy' attribute on TypeKeyCell (id=Permission_Cell) at RoleDetailDV.pcf: line 55, column 59
    function sortValue_10 (RolePrivilege :  entity.RolePrivilege) : java.lang.Object {
      return RolePrivilege.Permission
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at RoleDetailDV.pcf: line 59, column 55
    function sortValue_11 (RolePrivilege :  entity.RolePrivilege) : java.lang.Object {
      return RolePrivilege.Permission.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RoleDetailDV.pcf: line 66, column 62
    function sortValue_12 (RolePrivilege :  entity.RolePrivilege) : java.lang.Object {
      return RolePrivilege.Permission.Description
    }
    
    // 'toAdd' attribute on RowIterator at RoleDetailDV.pcf: line 44, column 48
    function toAdd_27 (RolePrivilege :  entity.RolePrivilege) : void {
      Role.addToPrivileges(RolePrivilege)
    }
    
    // 'toRemove' attribute on RowIterator at RoleDetailDV.pcf: line 44, column 48
    function toRemove_28 (RolePrivilege :  entity.RolePrivilege) : void {
      Role.removeFromPrivileges(RolePrivilege)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RoleDetailDV.pcf: line 18, column 28
    function valueRoot_2 () : java.lang.Object {
      return Role
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RoleDetailDV.pcf: line 18, column 28
    function value_0 () : java.lang.String {
      return Role.Name
    }
    
    // 'value' attribute on RowIterator at RoleDetailDV.pcf: line 44, column 48
    function value_29 () : entity.RolePrivilege[] {
      return Role.Privileges
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at RoleDetailDV.pcf: line 24, column 35
    function value_4 () : java.lang.String {
      return Role.Description
    }
    
    // 'addVisible' attribute on IteratorButtons at RoleDetailDV.pcf: line 32, column 56
    function visible_8 () : java.lang.Boolean {
      return perm.RolePrivilege.create
    }
    
    // 'removeVisible' attribute on IteratorButtons at RoleDetailDV.pcf: line 32, column 56
    function visible_9 () : java.lang.Boolean {
      return perm.RolePrivilege.delete
    }
    
    property get Role () : Role {
      return getRequireValue("Role", 0) as Role
    }
    
    property set Role ($arg :  Role) {
      setRequireValue("Role", 0, $arg)
    }
    
    
  }
  
  
}