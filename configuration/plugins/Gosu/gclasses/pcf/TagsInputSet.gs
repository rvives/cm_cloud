package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/TagsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TagsInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact) : void {
    __widgetOf(this, pcf.TagsInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$contact})
  }
  
  function refreshVariables ($contact :  ABContact) : void {
    __widgetOf(this, pcf.TagsInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$contact})
  }
  
  
}