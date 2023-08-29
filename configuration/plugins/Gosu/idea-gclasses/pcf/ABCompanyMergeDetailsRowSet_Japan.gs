package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ABCompanyMergeDetailsRowSet.Japan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ABCompanyMergeDetailsRowSet_Japan extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($companies :  ABCompany[], $mergedCompany :  ABCompany, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABCompanyMergeDetailsRowSet_Japan, SECTION_WIDGET_CLASS).setVariables(false, {$companies, $mergedCompany, $nameOwner})
  }
  
  function refreshVariables ($companies :  ABCompany[], $mergedCompany :  ABCompany, $nameOwner :  gw.api.name.NameOwner) : void {
    __widgetOf(this, pcf.ABCompanyMergeDetailsRowSet_Japan, SECTION_WIDGET_CLASS).setVariables(true, {$companies, $mergedCompany, $nameOwner})
  }
  
  
}