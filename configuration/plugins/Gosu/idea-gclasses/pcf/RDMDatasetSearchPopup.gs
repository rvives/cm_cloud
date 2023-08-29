package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMDatasetSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RDMDatasetSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RDMDatasetSearchPopup, {}, 0)
  }
  
  function pickValueAndCommit (value :  java.lang.String) : void {
    __widgetOf(this, pcf.RDMDatasetSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.RDMDatasetSearchPopup, {}, 0).push()
  }
  
  
}