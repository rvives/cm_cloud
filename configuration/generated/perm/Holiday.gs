package perm

uses javax.annotation.processing.Generated

@Generated("security-config-app.xml;security-config-pl.xml;security-config.xml", "", "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
class Holiday {
  static property get create () : boolean {
    return com.guidewire._generated.security.HolidayPermKeys.CREATE.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get delete () : boolean {
    return com.guidewire._generated.security.HolidayPermKeys.DELETE.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get edit () : boolean {
    return com.guidewire._generated.security.HolidayPermKeys.EDIT.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get view () : boolean {
    return com.guidewire._generated.security.HolidayPermKeys.VIEW.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  
}