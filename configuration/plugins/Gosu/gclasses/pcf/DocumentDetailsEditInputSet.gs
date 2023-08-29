package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DocumentDetailsEditInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($documentDetailsApplicationHelper :  gw.document.DocumentDetailsApplicationHelper) : void {
    __widgetOf(this, pcf.DocumentDetailsEditInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$documentDetailsApplicationHelper})
  }
  
  function refreshVariables ($documentDetailsApplicationHelper :  gw.document.DocumentDetailsApplicationHelper) : void {
    __widgetOf(this, pcf.DocumentDetailsEditInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$documentDetailsApplicationHelper})
  }
  
  
}