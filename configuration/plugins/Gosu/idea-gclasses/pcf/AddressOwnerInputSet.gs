package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/address/AddressOwnerInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressOwnerInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($addressOwner :  gw.api.address.AbstractAddressOwner, $isEditable :  boolean) : void {
    __widgetOf(this, pcf.AddressOwnerInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$addressOwner, $isEditable})
  }
  
  function refreshVariables ($addressOwner :  gw.api.address.AbstractAddressOwner, $isEditable :  boolean) : void {
    __widgetOf(this, pcf.AddressOwnerInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$addressOwner, $isEditable})
  }
  
  
}