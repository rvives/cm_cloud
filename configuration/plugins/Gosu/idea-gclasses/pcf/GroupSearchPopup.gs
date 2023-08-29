package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/groupsearch/GroupSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GroupSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GroupSearchPopup, {}, 0)
  }
  
  static function createDestination (RestrictedGroup :  Group) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GroupSearchPopup, {RestrictedGroup}, 1)
  }
  
  function pickValueAndCommit (value :  Group) : void {
    __widgetOf(this, pcf.GroupSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.GroupSearchPopup, {}, 0).push()
  }
  
  static function push (RestrictedGroup :  Group) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GroupSearchPopup, {RestrictedGroup}, 1).push()
  }
  
  
}