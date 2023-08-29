package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/importexport/ImportWizard_ArrayDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ImportWizard_ArrayDiffPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (ArrayDifferences :  gw.api.admin.ImportDataArrayDifferences) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ImportWizard_ArrayDiffPopup, {ArrayDifferences}, 0)
  }
  
  static function push (ArrayDifferences :  gw.api.admin.ImportDataArrayDifferences) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ImportWizard_ArrayDiffPopup, {ArrayDifferences}, 0).push()
  }
  
  
}