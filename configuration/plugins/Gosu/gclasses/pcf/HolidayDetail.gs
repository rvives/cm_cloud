package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/holidays/HolidayDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class HolidayDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Holiday :  Holiday) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.HolidayDetail, {Holiday}, 0)
  }
  
  static function drilldown (Holiday :  Holiday) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HolidayDetail, {Holiday}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Holiday :  Holiday) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HolidayDetail, {Holiday}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Holiday :  Holiday) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HolidayDetail, {Holiday}, 0).goInMain()
  }
  
  static function printPage (Holiday :  Holiday) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HolidayDetail, {Holiday}, 0).printPage()
  }
  
  static function push (Holiday :  Holiday) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HolidayDetail, {Holiday}, 0).push()
  }
  
  
}