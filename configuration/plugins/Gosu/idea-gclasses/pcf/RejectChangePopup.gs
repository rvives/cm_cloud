package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/RejectChangePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RejectChangePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (contactChange :  PendingContactChange) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RejectChangePopup, {contactChange}, 0)
  }
  
  static function push (contactChange :  PendingContactChange) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RejectChangePopup, {contactChange}, 0).push()
  }
  
  
}