package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GroupDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Group :  Group) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GroupDetailPopup, {Group}, 0)
  }
  
  static function push (Group :  Group) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GroupDetailPopup, {Group}, 0).push()
  }
  
  
}