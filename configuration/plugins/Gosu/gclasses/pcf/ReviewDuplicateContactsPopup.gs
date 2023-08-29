package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ReviewDuplicateContactsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ReviewDuplicateContactsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (wrappedDuplicateContactPair :  gw.web.merge.DuplicatePairWrapper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ReviewDuplicateContactsPopup, {wrappedDuplicateContactPair}, 0)
  }
  
  static function push (wrappedDuplicateContactPair :  gw.web.merge.DuplicatePairWrapper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ReviewDuplicateContactsPopup, {wrappedDuplicateContactPair}, 0).push()
  }
  
  
}