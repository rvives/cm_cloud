package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RoleDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Role :  Role) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RoleDetailPopup, {Role}, 0)
  }
  
  static function push (Role :  Role) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RoleDetailPopup, {Role}, 0).push()
  }
  
  
}