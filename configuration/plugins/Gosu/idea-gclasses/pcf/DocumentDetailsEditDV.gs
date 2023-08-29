package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DocumentDetailsEditDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($documentDetailsApplicationHelper :  gw.document.DocumentDetailsApplicationHelper) : void {
    __widgetOf(this, pcf.DocumentDetailsEditDV, SECTION_WIDGET_CLASS).setVariables(false, {$documentDetailsApplicationHelper})
  }
  
  function refreshVariables ($documentDetailsApplicationHelper :  gw.document.DocumentDetailsApplicationHelper) : void {
    __widgetOf(this, pcf.DocumentDetailsEditDV, SECTION_WIDGET_CLASS).setVariables(true, {$documentDetailsApplicationHelper})
  }
  
  
}