package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingContactMatchWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PendingContactMatchWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (originalContact :  ABContact, matchResults :  gw.api.webservice.addressbook.contactapi.ABContactSearchResult) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PendingContactMatchWorksheet, {originalContact, matchResults}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (originalContact :  ABContact, matchResults :  gw.api.webservice.addressbook.contactapi.ABContactSearchResult) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PendingContactMatchWorksheet, {originalContact, matchResults}, 0).goInWorkspace()
  }
  
  static function push (originalContact :  ABContact, matchResults :  gw.api.webservice.addressbook.contactapi.ABContactSearchResult) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PendingContactMatchWorksheet, {originalContact, matchResults}, 0).push()
  }
  
  
}