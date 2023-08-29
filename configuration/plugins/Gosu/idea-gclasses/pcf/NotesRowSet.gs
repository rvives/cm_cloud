package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/NotesRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NotesRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contact :  ABContact, $duplicate :  ABContact, $merged :  ABContact) : void {
    __widgetOf(this, pcf.NotesRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$contact, $duplicate, $merged})
  }
  
  function refreshVariables ($contact :  ABContact, $duplicate :  ABContact, $merged :  ABContact) : void {
    __widgetOf(this, pcf.NotesRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$contact, $duplicate, $merged})
  }
  
  
}