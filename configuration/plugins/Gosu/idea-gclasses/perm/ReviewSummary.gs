package perm

uses javax.annotation.processing.Generated

@Generated("security-config-app.xml;security-config-pl.xml;security-config.xml", "", "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
class ReviewSummary {
  static property get list () : boolean {
    return com.guidewire._generated.security.ReviewSummaryPermKeys.LIST.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  static property get view () : boolean {
    return com.guidewire._generated.security.ReviewSummaryPermKeys.VIEW.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  
}