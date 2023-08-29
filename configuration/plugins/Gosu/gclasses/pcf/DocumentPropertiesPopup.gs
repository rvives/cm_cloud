package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/DocumentPropertiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DocumentPropertiesPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (document :  Document, contact :  ABContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DocumentPropertiesPopup, {document, contact}, 0)
  }
  
  static function createDestination (document :  Document, contact :  ABContact, editMetadata :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DocumentPropertiesPopup, {document, contact, editMetadata}, 1)
  }
  
  static function push (document :  Document, contact :  ABContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentPropertiesPopup, {document, contact}, 0).push()
  }
  
  static function push (document :  Document, contact :  ABContact, editMetadata :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentPropertiesPopup, {document, contact, editMetadata}, 1).push()
  }
  
  
}