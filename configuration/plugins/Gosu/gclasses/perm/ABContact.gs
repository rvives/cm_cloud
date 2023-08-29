package perm

uses java.lang.Object
uses javax.annotation.processing.Generated

@Generated("security-config-app.xml;security-config-pl.xml;security-config.xml", "", "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
class ABContact {
  static function create (object :  Object) : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.CREATE.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function delete (object :  Object) : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.DELETE.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function edit (object :  Object) : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.EDIT.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function view (object :  Object) : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.VIEW.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static property get create () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.CREATE.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get createpreferred () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.CREATEPREFERRED.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get delete () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.DELETE.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get deletepreferred () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.DELETEPREFERRED.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get editpreferred () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.EDITPREFERRED.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get view () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.VIEW.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get viewmerge () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.VIEWMERGE.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get viewpending () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.VIEWPENDING.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get viewsearch () : boolean {
    return com.guidewire._generated.security.ABContactPermKeys.VIEWSEARCH.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  
}