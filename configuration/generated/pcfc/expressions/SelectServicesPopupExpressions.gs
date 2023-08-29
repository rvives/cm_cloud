package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/SelectServicesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SelectServicesPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/SelectServicesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends SelectServicesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowTree (id=SpecialistServiceTree) at SelectServicesPopup.pcf: line 53, column 24
    function checkBoxVisible_13 () : java.lang.Boolean {
      return service.Service.Leaf or service.ContactHasService
    }
    
    // 'fontColor' attribute on TextCell (id=ServiceLeaf_Cell) at SelectServicesPopup.pcf: line 61, column 45
    function fontColor_5 () : java.lang.Object {
      return service.Service.Active ? null : gw.api.web.color.GWColor.THEME_DISABLED 
    }
    
    // 'iconColor' attribute on Link (id=HasServiceWarning) at SelectServicesPopup.pcf: line 68, column 80
    function iconColor_12 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_WARNING
    }
    
    // 'value' attribute on TextCell (id=ServiceLeaf_Cell) at SelectServicesPopup.pcf: line 61, column 45
    function valueRoot_7 () : java.lang.Object {
      return service.Service
    }
    
    // 'value' attribute on TextCell (id=ServiceLeaf_Cell) at SelectServicesPopup.pcf: line 61, column 45
    function value_6 () : java.lang.String {
      return service.Service.Name
    }
    
    // 'fontColor' attribute on TextCell (id=ServiceLeaf_Cell) at SelectServicesPopup.pcf: line 61, column 45
    function verifyFontColorIsAllowedType_8 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ServiceLeaf_Cell) at SelectServicesPopup.pcf: line 61, column 45
    function verifyFontColorIsAllowedType_8 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ServiceLeaf_Cell) at SelectServicesPopup.pcf: line 61, column 45
    function verifyFontColor_9 () : void {
      var __fontColorArg = service.Service.Active ? null : gw.api.web.color.GWColor.THEME_DISABLED 
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_8(__fontColorArg)
    }
    
    // 'visible' attribute on Link (id=HasServiceWarning) at SelectServicesPopup.pcf: line 68, column 80
    function visible_11 () : java.lang.Boolean {
      return !service.Service.Leaf and service.ContactHasService
    }
    
    property get service () : gw.web.ContactDetailsVendorHelper.ServiceRow {
      return getIteratedValue(1) as gw.web.ContactDetailsVendorHelper.ServiceRow
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/SelectServicesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SelectServicesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  ABContact) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RemoveAll) at SelectServicesPopup.pcf: line 41, column 85
    function action_4 () : void {
      contact.SpecialistServices = new ArrayList<SpecialistService>(); CurrentLocation.commit()
    }
    
    // 'beforeCommit' attribute on Popup (id=SelectServicesPopup) at SelectServicesPopup.pcf: line 13, column 83
    function beforeCommit_17 (pickedValue :  java.util.Set<gw.web.ContactDetailsVendorHelper.ServiceRow>) : void {
      contact.SpecialistServices = pickedValue*.Service.toList()
    }
    
    // 'beforeValidate' attribute on Popup (id=SelectServicesPopup) at SelectServicesPopup.pcf: line 13, column 83
    function beforeValidate_18 (pickedValue :  java.util.Set<gw.web.ContactDetailsVendorHelper.ServiceRow>) : void {
      contactDetailsVendorHelper.validateServices(pickedValue*.Service)
    }
    
    // RowTree (id=SpecialistServiceTree) at SelectServicesPopup.pcf: line 53, column 24
    function containerLabel_16 (service :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'initialValue' attribute on Variable at SelectServicesPopup.pcf: line 22, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at SelectServicesPopup.pcf: line 26, column 43
    function initialValue_1 () : gw.api.tree.RowTreeRootNode {
      return new gw.api.tree.RowTreeRootNode(contactDetailsVendorHelper.getAllRows(), \ss ->  contactDetailsVendorHelper.getChildren(ss as gw.web.ContactDetailsVendorHelper.ServiceRow), \ss -> contactDetailsVendorHelper.getNumChildren(ss as gw.web.ContactDetailsVendorHelper.ServiceRow), \ss -> true)
    }
    
    // EditButtons at SelectServicesPopup.pcf: line 36, column 34
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on CheckedValuesToolbarButton (id=UpdateSpecialistServices) at SelectServicesPopup.pcf: line 33, column 46
    function pickValue_2 (CheckedValues :  gw.web.ContactDetailsVendorHelper.ServiceRow[]) : java.util.Set<gw.web.ContactDetailsVendorHelper.ServiceRow> {
      return CheckedValues.toSet()
    }
    
    // 'startChecked' attribute on RowTree (id=SpecialistServiceTree) at SelectServicesPopup.pcf: line 53, column 24
    function startChecked_15 (service :  gw.web.ContactDetailsVendorHelper.ServiceRow) : java.lang.Boolean {
      return service.ContactHasService
    }
    
    // 'value' attribute on RowTree (id=SpecialistServiceTree) at SelectServicesPopup.pcf: line 53, column 24
    function value_14 () : java.lang.Object {
      return root
    }
    
    override property get CurrentLocation () : pcf.SelectServicesPopup {
      return super.CurrentLocation as pcf.SelectServicesPopup
    }
    
    property get contact () : ABContact {
      return getVariableValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getVariableValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setVariableValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    property get root () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("root", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set root ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("root", 0, $arg)
    }
    
    
  }
  
  
}