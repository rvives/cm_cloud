package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/ArgumentRowSet.Generic.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ArgumentRowSet_Generic extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($arg :  gw.command.Argument) : void {
    __widgetOf(this, pcf.ArgumentRowSet_Generic, SECTION_WIDGET_CLASS).setVariables(false, {$arg})
  }
  
  function refreshVariables ($arg :  gw.command.Argument) : void {
    __widgetOf(this, pcf.ArgumentRowSet_Generic, SECTION_WIDGET_CLASS).setVariables(true, {$arg})
  }
  
  
}