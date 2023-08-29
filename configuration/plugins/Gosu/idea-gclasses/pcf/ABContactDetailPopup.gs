package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ABContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABContactDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (viewContact :  ABContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ABContactDetailPopup, {viewContact}, 0)
  }
  
  static function createDestination (viewContact :  ABContact, selectDocumentsCard :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ABContactDetailPopup, {viewContact, selectDocumentsCard}, 1)
  }
  
  function pickValueAndCommit (value :  ABContact) : void {
    __widgetOf(this, pcf.ABContactDetailPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (viewContact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactDetailPopup, {viewContact}, 0).push()
  }
  
  static function push (viewContact :  ABContact, selectDocumentsCard :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactDetailPopup, {viewContact, selectDocumentsCard}, 1).push()
  }
  
  
}