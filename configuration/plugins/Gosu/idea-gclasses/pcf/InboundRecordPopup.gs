package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class InboundRecordPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (bean :  KeyableBean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.InboundRecordPopup, {bean}, 0)
  }
  
  static function push (bean :  KeyableBean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.InboundRecordPopup, {bean}, 0).push()
  }
  
  
}