package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/WorkQueueWorkItemsLV.Archive.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class WorkQueueWorkItemsLV_Archive extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Helper :  gw.api.web.tools.WorkQueueInfoPage, $Queue :  gw.api.web.tools.WorkQueueDisplayInfo) : void {
    __widgetOf(this, pcf.WorkQueueWorkItemsLV_Archive, SECTION_WIDGET_CLASS).setVariables(false, {$Helper, $Queue})
  }
  
  function refreshVariables ($Helper :  gw.api.web.tools.WorkQueueInfoPage, $Queue :  gw.api.web.tools.WorkQueueDisplayInfo) : void {
    __widgetOf(this, pcf.WorkQueueWorkItemsLV_Archive, SECTION_WIDGET_CLASS).setVariables(true, {$Helper, $Queue})
  }
  
  
}