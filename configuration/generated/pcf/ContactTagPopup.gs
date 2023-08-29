package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactTagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactTagPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (contact :  ABContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ContactTagPopup, {contact}, 0)
  }
  
  static function push (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactTagPopup, {contact}, 0).push()
  }
  
  
}