package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/AddressDataRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressDataRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($addressData :  gw.web.merge.MergeContactsAddressHolder.AddressData[], $duplicateAddressEntries :  gw.web.merge.MergeContactsAddressHolder.DuplicateAddressEntry[]) : void {
    __widgetOf(this, pcf.AddressDataRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$addressData, $duplicateAddressEntries})
  }
  
  function refreshVariables ($addressData :  gw.web.merge.MergeContactsAddressHolder.AddressData[], $duplicateAddressEntries :  gw.web.merge.MergeContactsAddressHolder.DuplicateAddressEntry[]) : void {
    __widgetOf(this, pcf.AddressDataRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$addressData, $duplicateAddressEntries})
  }
  
  
}