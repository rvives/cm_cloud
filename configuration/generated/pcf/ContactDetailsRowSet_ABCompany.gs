package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABCompany.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactDetailsRowSet_ABCompany extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($keptContact :  entity.ABContact, $retiredContact :  entity.ABContact, $mergedContact :  entity.ABContact, $addressDataHolder :  gw.web.merge.MergeContactsAddressHolder, $phoneHolder :  gw.web.merge.MergeContactsPhoneHolder) : void {
    __widgetOf(this, pcf.ContactDetailsRowSet_ABCompany, SECTION_WIDGET_CLASS).setVariables(false, {$keptContact, $retiredContact, $mergedContact, $addressDataHolder, $phoneHolder})
  }
  
  function refreshVariables ($keptContact :  entity.ABContact, $retiredContact :  entity.ABContact, $mergedContact :  entity.ABContact, $addressDataHolder :  gw.web.merge.MergeContactsAddressHolder, $phoneHolder :  gw.web.merge.MergeContactsPhoneHolder) : void {
    __widgetOf(this, pcf.ContactDetailsRowSet_ABCompany, SECTION_WIDGET_CLASS).setVariables(true, {$keptContact, $retiredContact, $mergedContact, $addressDataHolder, $phoneHolder})
  }
  
  
}