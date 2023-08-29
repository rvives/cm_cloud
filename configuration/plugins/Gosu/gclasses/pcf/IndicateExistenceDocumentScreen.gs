package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/IndicateExistenceDocumentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class IndicateExistenceDocumentScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($documentCMContext :  gw.document.DocumentCMContext, $document :  entity.Document) : void {
    __widgetOf(this, pcf.IndicateExistenceDocumentScreen, SECTION_WIDGET_CLASS).setVariables(false, {$documentCMContext, $document})
  }
  
  function refreshVariables ($documentCMContext :  gw.document.DocumentCMContext, $document :  entity.Document) : void {
    __widgetOf(this, pcf.IndicateExistenceDocumentScreen, SECTION_WIDGET_CLASS).setVariables(true, {$documentCMContext, $document})
  }
  
  
}