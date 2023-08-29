package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/NewContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewContactPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (ContactType :  Type, parentContact :  ABContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewContactPopup, {ContactType, parentContact}, 0)
  }
  
  function pickValueAndCommit (value :  ABContact) : void {
    __widgetOf(this, pcf.NewContactPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (ContactType :  Type, parentContact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewContactPopup, {ContactType, parentContact}, 0).push()
  }
  
  
}