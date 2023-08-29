package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateRelatedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DuplicateRelatedContactsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($wrappedContact :  gw.web.merge.ABContactWrapper, $relatedContacts :  gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData[]) : void {
    __widgetOf(this, pcf.DuplicateRelatedContactsLV, SECTION_WIDGET_CLASS).setVariables(false, {$wrappedContact, $relatedContacts})
  }
  
  function refreshVariables ($wrappedContact :  gw.web.merge.ABContactWrapper, $relatedContacts :  gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData[]) : void {
    __widgetOf(this, pcf.DuplicateRelatedContactsLV, SECTION_WIDGET_CLASS).setVariables(true, {$wrappedContact, $relatedContacts})
  }
  
  
}