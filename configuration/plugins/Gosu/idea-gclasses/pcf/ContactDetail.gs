package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (contact :  ABContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ContactDetail, {contact}, 0)
  }
  
  static function drilldown (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactDetail, {contact}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactDetail, {contact}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactDetail, {contact}, 0).goInMain()
  }
  
  static function printPage (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactDetail, {contact}, 0).printPage()
  }
  
  static function push (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactDetail, {contact}, 0).push()
  }
  
  
}