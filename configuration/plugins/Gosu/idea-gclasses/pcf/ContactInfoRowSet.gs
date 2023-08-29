package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactInfoRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactInfoRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact, $duplicate :  ABContact, $merged :  ABContact, $phoneHolder :  gw.web.merge.MergeContactsPhoneHolder) : void {
    __widgetOf(this, pcf.ContactInfoRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$contact, $duplicate, $merged, $phoneHolder})
  }
  
  function refreshVariables ($contact :  ABContact, $duplicate :  ABContact, $merged :  ABContact, $phoneHolder :  gw.web.merge.MergeContactsPhoneHolder) : void {
    __widgetOf(this, pcf.ContactInfoRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$contact, $duplicate, $merged, $phoneHolder})
  }
  
  
}