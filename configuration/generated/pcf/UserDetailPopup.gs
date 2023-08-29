package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/UserDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UserDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (user :  User) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.UserDetailPopup, {user}, 0)
  }
  
  static function push (user :  User) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UserDetailPopup, {user}, 0).push()
  }
  
  
}