package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/util/GuidewireHomePageExitPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GuidewireHomePageExitPoint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GuidewireHomePageExitPoint, {}, 0)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestinationForLocation(pcf.GuidewireHomePageExitPoint, {}, 0).drilldown()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestinationForLocation(pcf.GuidewireHomePageExitPoint, {}, 0).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.GuidewireHomePageExitPoint, {}, 0).push()
  }
  
  
}