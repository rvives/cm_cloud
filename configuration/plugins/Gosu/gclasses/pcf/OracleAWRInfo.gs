package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/OracleAWRInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class OracleAWRInfo extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.OracleAWRInfo, {}, 0)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestinationForLocation(pcf.OracleAWRInfo, {}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go () : pcf.api.Location {
    return __newDestinationForLocation(pcf.OracleAWRInfo, {}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain () : pcf.api.Location {
    return __newDestinationForLocation(pcf.OracleAWRInfo, {}, 0).goInMain()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestinationForLocation(pcf.OracleAWRInfo, {}, 0).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.OracleAWRInfo, {}, 0).push()
  }
  
  
}