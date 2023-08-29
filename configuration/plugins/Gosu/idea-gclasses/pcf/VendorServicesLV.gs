package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/VendorServicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class VendorServicesLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact, $contactDetailsVendorHelper :  gw.web.ContactDetailsVendorHelper, $showInactiveService :  boolean) : void {
    __widgetOf(this, pcf.VendorServicesLV, SECTION_WIDGET_CLASS).setVariables(false, {$contact, $contactDetailsVendorHelper, $showInactiveService})
  }
  
  function refreshVariables ($contact :  ABContact, $contactDetailsVendorHelper :  gw.web.ContactDetailsVendorHelper, $showInactiveService :  boolean) : void {
    __widgetOf(this, pcf.VendorServicesLV, SECTION_WIDGET_CLASS).setVariables(true, {$contact, $contactDetailsVendorHelper, $showInactiveService})
  }
  
  
}