package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ABContactSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABContactSearch extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ABContactSearch, {}, 0)
  }
  
  static function createDestination (requiredContactType :  Type) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ABContactSearch, {requiredContactType}, 1)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {}, 0).drilldown()
  }
  
  static function drilldown (requiredContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {requiredContactType}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go () : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (requiredContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {requiredContactType}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain () : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (requiredContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {requiredContactType}, 1).goInMain()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {}, 0).printPage()
  }
  
  static function printPage (requiredContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {requiredContactType}, 1).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {}, 0).push()
  }
  
  static function push (requiredContactType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ABContactSearch, {requiredContactType}, 1).push()
  }
  
  
}