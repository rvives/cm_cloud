package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyMergeDetailsRowSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABCompanyMergeDetailsRowSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($companies :  ABCompany[], $mergedCompany :  ABCompany, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABCompanyMergeDetailsRowSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$companies, $mergedCompany, $nameOwner})
  }
  
  function refreshVariables ($companies :  ABCompany[], $mergedCompany :  ABCompany, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABCompanyMergeDetailsRowSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$companies, $mergedCompany, $nameOwner})
  }
  
  
}