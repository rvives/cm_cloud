package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/EFTDataRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EFTDataRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($eftData :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection[], $wrappedDuplicateContactPair :  gw.web.merge.DuplicatePairWrapper) : void {
    __widgetOf(this, pcf.EFTDataRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$eftData, $wrappedDuplicateContactPair})
  }
  
  function refreshVariables ($eftData :  gw.web.merge.MergeContactsEFTDataHolder.DataSelection[], $wrappedDuplicateContactPair :  gw.web.merge.DuplicatePairWrapper) : void {
    __widgetOf(this, pcf.EFTDataRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$eftData, $wrappedDuplicateContactPair})
  }
  
  
}