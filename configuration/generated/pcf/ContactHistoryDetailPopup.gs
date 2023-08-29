package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactHistoryDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (history :  ContactHistory) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ContactHistoryDetailPopup, {history}, 0)
  }
  
  static function push (history :  ContactHistory) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactHistoryDetailPopup, {history}, 0).push()
  }
  
  
}