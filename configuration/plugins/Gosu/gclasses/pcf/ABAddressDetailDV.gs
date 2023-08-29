package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ABAddressDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABAddressDetailDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($address :  Address) : void {
    __widgetOf(this, pcf.ABAddressDetailDV, SECTION_WIDGET_CLASS).setVariables(false, {$address})
  }
  
  function refreshVariables ($address :  Address) : void {
    __widgetOf(this, pcf.ABAddressDetailDV, SECTION_WIDGET_CLASS).setVariables(true, {$address})
  }
  
  
}