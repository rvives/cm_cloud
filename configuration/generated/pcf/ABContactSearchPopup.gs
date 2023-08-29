package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/addressbook/ABContactSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABContactSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ABContactSearchPopup, {}, 0)
  }
  
  static function createDestination (requiredContactType :  Type) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ABContactSearchPopup, {requiredContactType}, 1)
  }
  
  function pickValueAndCommit (value :  ABContact) : void {
    __widgetOf(this, pcf.ABContactSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearchPopup, {}, 0).push()
  }
  
  static function push (requiredContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearchPopup, {requiredContactType}, 1).push()
  }
  
  
}