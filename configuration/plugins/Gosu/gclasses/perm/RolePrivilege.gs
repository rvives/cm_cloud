package perm

uses javax.annotation.processing.Generated

@Generated("security-config-app.xml;security-config-pl.xml;security-config.xml", "", "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
class RolePrivilege {
  static property get create () : boolean {
    return com.guidewire._generated.security.RolePrivilegePermKeys.CREATE.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get delete () : boolean {
    return com.guidewire._generated.security.RolePrivilegePermKeys.DELETE.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get edit () : boolean {
    return com.guidewire._generated.security.RolePrivilegePermKeys.EDIT.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  
}