package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/JProfiler.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class JProfiler extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.JProfiler, {}, 0)
  }
  
  static function createDestination (Result :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.JProfiler, {Result}, 1)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {}, 0).drilldown()
  }
  
  static function drilldown (Result :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {Result}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go () : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Result :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {Result}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain () : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Result :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {Result}, 1).goInMain()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {}, 0).printPage()
  }
  
  static function printPage (Result :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {Result}, 1).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {}, 0).push()
  }
  
  static function push (Result :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.JProfiler, {Result}, 1).push()
  }
  
  
}