package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/VendorServicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VendorServicesLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/VendorServicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VendorServicesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=contactHasServiceCheckbox_Cell) at VendorServicesLV.pcf: line 34, column 49
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      serviceRow.ContactHasService = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'useArchivedStyle' attribute on Row at VendorServicesLV.pcf: line 28, column 74
    function useArchivedStyle_15 () : java.lang.Boolean {
      return !serviceRow.Service.Active
    }
    
    // 'value' attribute on CheckBoxCell (id=contactHasServiceCheckbox_Cell) at VendorServicesLV.pcf: line 34, column 49
    function valueRoot_6 () : java.lang.Object {
      return serviceRow
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell1_Cell) at VendorServicesLV.pcf: line 42, column 53
    function value_10 () : java.lang.String {
      return serviceRow.getServiceNamePart(1)
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell2_Cell) at VendorServicesLV.pcf: line 46, column 53
    function value_12 () : java.lang.String {
      return serviceRow.getServiceNamePart(2)
    }
    
    // 'value' attribute on CheckBoxCell (id=contactHasServiceCheckbox_Cell) at VendorServicesLV.pcf: line 34, column 49
    function value_4 () : java.lang.Boolean {
      return serviceRow.ContactHasService
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell0_Cell) at VendorServicesLV.pcf: line 38, column 53
    function value_8 () : java.lang.String {
      return serviceRow.getServiceNamePart(0)
    }
    
    // 'visible' attribute on Row at VendorServicesLV.pcf: line 28, column 74
    function visible_14 () : java.lang.Boolean {
      return showInactiveService ? true : serviceRow.Service.Active
    }
    
    property get serviceRow () : gw.web.ContactDetailsVendorHelper.ServiceRow {
      return getIteratedValue(1) as gw.web.ContactDetailsVendorHelper.ServiceRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/VendorServicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VendorServicesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=contactHasServiceCheckbox_Cell) at VendorServicesLV.pcf: line 34, column 49
    function sortValue_0 (serviceRow :  gw.web.ContactDetailsVendorHelper.ServiceRow) : java.lang.Object {
      return serviceRow.ContactHasService
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell0_Cell) at VendorServicesLV.pcf: line 38, column 53
    function sortValue_1 (serviceRow :  gw.web.ContactDetailsVendorHelper.ServiceRow) : java.lang.Object {
      return serviceRow.getServiceNamePart(0)
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell1_Cell) at VendorServicesLV.pcf: line 42, column 53
    function sortValue_2 (serviceRow :  gw.web.ContactDetailsVendorHelper.ServiceRow) : java.lang.Object {
      return serviceRow.getServiceNamePart(1)
    }
    
    // 'value' attribute on TextCell (id=ServiceNameCell2_Cell) at VendorServicesLV.pcf: line 46, column 53
    function sortValue_3 (serviceRow :  gw.web.ContactDetailsVendorHelper.ServiceRow) : java.lang.Object {
      return serviceRow.getServiceNamePart(2)
    }
    
    // 'value' attribute on RowIterator at VendorServicesLV.pcf: line 23, column 86
    function value_16 () : java.util.List<gw.web.ContactDetailsVendorHelper.ServiceRow> {
      return contactDetailsVendorHelper.Rows
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getRequireValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setRequireValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    property get showInactiveService () : boolean {
      return getRequireValue("showInactiveService", 0) as java.lang.Boolean
    }
    
    property set showInactiveService ($arg :  boolean) {
      setRequireValue("showInactiveService", 0, $arg)
    }
    
    
  }
  
  
}