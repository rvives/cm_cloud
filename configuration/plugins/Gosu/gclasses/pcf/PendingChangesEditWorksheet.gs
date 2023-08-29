package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/PendingChangesEditWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PendingChangesEditWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (diffDisplay :  gw.api.bean.compare.ui.DiffDisplay) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PendingChangesEditWorksheet, {diffDisplay}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (diffDisplay :  gw.api.bean.compare.ui.DiffDisplay) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PendingChangesEditWorksheet, {diffDisplay}, 0).goInWorkspace()
  }
  
  static function push (diffDisplay :  gw.api.bean.compare.ui.DiffDisplay) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PendingChangesEditWorksheet, {diffDisplay}, 0).push()
  }
  
  
}