package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/organizationselect/OrganizationGroupTreePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class OrganizationGroupTreePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.OrganizationGroupTreePopup, {}, 0)
  }
  
  static function createDestination (OrganizationSelection :  OrganizationSelection) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.OrganizationGroupTreePopup, {OrganizationSelection}, 1)
  }
  
  static function createDestination (OrganizationSelection :  OrganizationSelection, RestrictedGroup :  Group) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.OrganizationGroupTreePopup, {OrganizationSelection, RestrictedGroup}, 2)
  }
  
  function pickValueAndCommit (value :  Group) : void {
    __widgetOf(this, pcf.OrganizationGroupTreePopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.OrganizationGroupTreePopup, {}, 0).push()
  }
  
  static function push (OrganizationSelection :  OrganizationSelection) : pcf.api.Location {
    return __newDestinationForLocation(pcf.OrganizationGroupTreePopup, {OrganizationSelection}, 1).push()
  }
  
  static function push (OrganizationSelection :  OrganizationSelection, RestrictedGroup :  Group) : pcf.api.Location {
    return __newDestinationForLocation(pcf.OrganizationGroupTreePopup, {OrganizationSelection, RestrictedGroup}, 2).push()
  }
  
  
}