package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/SelectServicesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SelectServicesPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (contact :  ABContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.SelectServicesPopup, {contact}, 0)
  }
  
  function pickValueAndCommit (value :  java.util.Set<gw.web.ContactDetailsVendorHelper.ServiceRow>) : void {
    __widgetOf(this, pcf.SelectServicesPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SelectServicesPopup, {contact}, 0).push()
  }
  
  
}