package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/NewContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewContact extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (ContactType :  Type) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewContact, {ContactType}, 0)
  }
  
  static function drilldown (ContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewContact, {ContactType}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (ContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewContact, {ContactType}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (ContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewContact, {ContactType}, 0).goInMain()
  }
  
  static function printPage (ContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewContact, {ContactType}, 0).printPage()
  }
  
  static function push (ContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewContact, {ContactType}, 0).push()
  }
  
  
}