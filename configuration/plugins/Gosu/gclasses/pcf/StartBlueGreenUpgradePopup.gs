package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/StartBlueGreenUpgradePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class StartBlueGreenUpgradePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Page :  gw.api.tools.UpgradeInfoPageHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.StartBlueGreenUpgradePopup, {Page}, 0)
  }
  
  static function push (Page :  gw.api.tools.UpgradeInfoPageHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StartBlueGreenUpgradePopup, {Page}, 0).push()
  }
  
  
}