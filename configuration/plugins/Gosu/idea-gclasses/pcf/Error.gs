package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/util/Error.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Error extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Message :  String, Exception :  String, StackTrace :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.Error, {Message, Exception, StackTrace}, 0)
  }
  
  static function drilldown (Message :  String, Exception :  String, StackTrace :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Error, {Message, Exception, StackTrace}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Message :  String, Exception :  String, StackTrace :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Error, {Message, Exception, StackTrace}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Message :  String, Exception :  String, StackTrace :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Error, {Message, Exception, StackTrace}, 0).goInMain()
  }
  
  static function printPage (Message :  String, Exception :  String, StackTrace :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Error, {Message, Exception, StackTrace}, 0).printPage()
  }
  
  static function push (Message :  String, Exception :  String, StackTrace :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.Error, {Message, Exception, StackTrace}, 0).push()
  }
  
  
}