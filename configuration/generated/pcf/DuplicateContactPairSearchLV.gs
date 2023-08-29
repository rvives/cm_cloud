package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateContactPairSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DuplicateContactPairSearchLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($duplicateContactPairs :  gw.api.database.IQueryBeanResult<DuplicateContactPair>) : void {
    __widgetOf(this, pcf.DuplicateContactPairSearchLV, SECTION_WIDGET_CLASS).setVariables(false, {$duplicateContactPairs})
  }
  
  function refreshVariables ($duplicateContactPairs :  gw.api.database.IQueryBeanResult<DuplicateContactPair>) : void {
    __widgetOf(this, pcf.DuplicateContactPairSearchLV, SECTION_WIDGET_CLASS).setVariables(true, {$duplicateContactPairs})
  }
  
  
}