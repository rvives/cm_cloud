package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/NewContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewContactPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/NewContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewContactPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ContactType :  Type, parentContact :  ABContact) : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=NewContactPopup) at NewContactPopup.pcf: line 11, column 100
    static function canVisit_5 (ContactType :  Type, parentContact :  ABContact) : java.lang.Boolean {
      return perm.ABContact.create(ContactType) and ContactTagType.userHasCreatePermissionForAtLeastOneContactTagType()
    }
    
    // 'def' attribute on ScreenRef at NewContactPopup.pcf: line 33, column 65
    function def_onEnter_3 (def :  pcf.ABContactDetailScreen) : void {
      def.onEnter(contact, true, false, false)
    }
    
    // 'def' attribute on ScreenRef at NewContactPopup.pcf: line 33, column 65
    function def_refreshVariables_4 (def :  pcf.ABContactDetailScreen) : void {
      def.refreshVariables(contact, true, false, false)
    }
    
    // 'initialValue' attribute on Variable at NewContactPopup.pcf: line 17, column 53
    function initialValue_0 () : gw.api.web.contact.NewABContactHelper {
      return new gw.api.web.contact.NewABContactHelper()
    }
    
    // 'initialValue' attribute on Variable at NewContactPopup.pcf: line 27, column 25
    function initialValue_1 () : ABContact {
      return PageHelper.newABContact(ContactType)
    }
    
    // 'initialValue' attribute on Variable at NewContactPopup.pcf: line 31, column 49
    function initialValue_2 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'title' attribute on Popup (id=NewContactPopup) at NewContactPopup.pcf: line 11, column 100
    static function title_6 (ContactType :  Type, parentContact :  ABContact) : java.lang.Object {
      return gw.api.contact.NewContactUtil.getDisplayKeyForContactSubtype(ContactType.RelativeName)
    }
    
    property get ContactType () : Type {
      return getVariableValue("ContactType", 0) as Type
    }
    
    property set ContactType ($arg :  Type) {
      setVariableValue("ContactType", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.NewContactPopup {
      return super.CurrentLocation as pcf.NewContactPopup
    }
    
    property get PageHelper () : gw.api.web.contact.NewABContactHelper {
      return getVariableValue("PageHelper", 0) as gw.api.web.contact.NewABContactHelper
    }
    
    property set PageHelper ($arg :  gw.api.web.contact.NewABContactHelper) {
      setVariableValue("PageHelper", 0, $arg)
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
    
    property get parentContact () : ABContact {
      return getVariableValue("parentContact", 0) as ABContact
    }
    
    property set parentContact ($arg :  ABContact) {
      setVariableValue("parentContact", 0, $arg)
    }
    
    
  }
  
  
}