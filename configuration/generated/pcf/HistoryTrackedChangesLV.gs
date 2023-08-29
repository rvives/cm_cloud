package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/HistoryTrackedChangesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class HistoryTrackedChangesLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($history :  History) : void {
    __widgetOf(this, pcf.HistoryTrackedChangesLV, SECTION_WIDGET_CLASS).setVariables(false, {$history})
  }
  
  function refreshVariables ($history :  History) : void {
    __widgetOf(this, pcf.HistoryTrackedChangesLV, SECTION_WIDGET_CLASS).setVariables(true, {$history})
  }
  
  
}