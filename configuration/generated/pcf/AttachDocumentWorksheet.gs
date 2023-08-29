package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/AttachDocumentWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AttachDocumentWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (contact :  ABContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AttachDocumentWorksheet, {contact}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AttachDocumentWorksheet, {contact}, 0).goInWorkspace()
  }
  
  static function push (contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AttachDocumentWorksheet, {contact}, 0).push()
  }
  
  
}