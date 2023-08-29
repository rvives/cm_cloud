package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ABContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactDetailPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ABContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (viewContact :  ABContact) : int {
      return 0
    }
    
    static function __constructorIndex (viewContact :  ABContact, selectDocumentsCard :  boolean) : int {
      return 1
    }
    
    // 'beforeCancel' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 13, column 78
    function beforeCancel_3 () : void {
      gw.api.web.contact.PendingContactChangeUtil.closeWorksheet()
    }
    
    // 'beforeCommit' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 13, column 78
    function beforeCommit_4 (pickedValue :  ABContact) : void {
      gw.api.web.contact.PendingContactChangeUtil.closeWorksheet()
    }
    
    // 'canEdit' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 13, column 78
    function canEdit_5 () : java.lang.Boolean {
      return perm.ABContact.edit(viewContact)
    }
    
    // 'canVisit' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 13, column 78
    static function canVisit_6 (selectDocumentsCard :  boolean, viewContact :  ABContact) : java.lang.Boolean {
      return perm.ABContact.view(viewContact)
    }
    
    // 'def' attribute on ScreenRef at ABContactDetailPopup.pcf: line 30, column 82
    function def_onEnter_1 (def :  pcf.ABContactDetailScreen) : void {
      def.onEnter(viewContact, true, true, selectDocumentsCard)
    }
    
    // 'def' attribute on ScreenRef at ABContactDetailPopup.pcf: line 30, column 82
    function def_refreshVariables_2 (def :  pcf.ABContactDetailScreen) : void {
      def.refreshVariables(viewContact, true, true, selectDocumentsCard)
    }
    
    // 'infoBar' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 13, column 78
    function infoBar_onEnter_7 (def :  pcf.ContactInfoBar) : void {
      def.onEnter(viewContact)
    }
    
    // 'infoBar' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 13, column 78
    function infoBar_refreshVariables_8 (def :  pcf.ContactInfoBar) : void {
      def.refreshVariables(viewContact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailPopup.pcf: line 28, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(viewContact)
    }
    
    // 'title' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 13, column 78
    static function title_9 (selectDocumentsCard :  boolean, viewContact :  ABContact) : java.lang.Object {
      return DisplayKey.get("Web.ContactDetail.Title", viewContact)
    }
    
    override property get CurrentLocation () : pcf.ABContactDetailPopup {
      return super.CurrentLocation as pcf.ABContactDetailPopup
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getVariableValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setVariableValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    property get selectDocumentsCard () : boolean {
      return getVariableValue("selectDocumentsCard", 0) as java.lang.Boolean
    }
    
    property set selectDocumentsCard ($arg :  boolean) {
      setVariableValue("selectDocumentsCard", 0, $arg)
    }
    
    property get viewContact () : ABContact {
      return getVariableValue("viewContact", 0) as ABContact
    }
    
    property set viewContact ($arg :  ABContact) {
      setVariableValue("viewContact", 0, $arg)
    }
    
    
  }
  
  
}