package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/referencedata/RDMRecordSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RDMRecordSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (RDMDatasetSelectors :  gw.plugin.referencedata.RDMDatasetSelectors) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RDMRecordSearchPopup, {RDMDatasetSelectors}, 0)
  }
  
  function pickValueAndCommit (value :  java.lang.String) : void {
    __widgetOf(this, pcf.RDMRecordSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (RDMDatasetSelectors :  gw.plugin.referencedata.RDMDatasetSelectors) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RDMRecordSearchPopup, {RDMDatasetSelectors}, 0).push()
  }
  
  
}