package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/NewContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewContactExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/NewContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewContactExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (ContactType :  Type) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 100
    function afterCancel_5 () : void {
      ABContactSearch.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 100
    function afterCancel_dest_6 () : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 100
    function afterCommit_7 (TopLocation :  pcf.api.Location) : void {
      ContactDetail.go(contact)
    }
    
    // 'canVisit' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 100
    static function canVisit_8 (ContactType :  Type) : java.lang.Boolean {
      return perm.ABContact.create(ContactType) and ContactTagType.userHasCreatePermissionForAtLeastOneContactTagType()
    }
    
    // 'def' attribute on ScreenRef at NewContact.pcf: line 32, column 66
    function def_onEnter_3 (def :  pcf.ABContactDetailScreen) : void {
      def.onEnter(contact, false, false, false)
    }
    
    // 'def' attribute on ScreenRef at NewContact.pcf: line 32, column 66
    function def_refreshVariables_4 (def :  pcf.ABContactDetailScreen) : void {
      def.refreshVariables(contact, false, false, false)
    }
    
    // 'initialValue' attribute on Variable at NewContact.pcf: line 19, column 53
    function initialValue_0 () : gw.api.web.contact.NewABContactHelper {
      return new gw.api.web.contact.NewABContactHelper()
    }
    
    // 'initialValue' attribute on Variable at NewContact.pcf: line 26, column 25
    function initialValue_1 () : ABContact {
      return PageHelper.newABContact(ContactType)
    }
    
    // 'initialValue' attribute on Variable at NewContact.pcf: line 30, column 49
    function initialValue_2 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'parent' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 100
    static function parent_9 (ContactType :  Type) : pcf.api.Destination {
      return pcf.ABContacts.createDestination()
    }
    
    // 'title' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 100
    static function title_10 (ContactType :  Type) : java.lang.Object {
      return gw.api.contact.NewContactUtil.getDisplayKeyForContactSubtype(ContactType.RelativeName)
    }
    
    property get ContactType () : Type {
      return getVariableValue("ContactType", 0) as Type
    }
    
    property set ContactType ($arg :  Type) {
      setVariableValue("ContactType", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.NewContact {
      return super.CurrentLocation as pcf.NewContact
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
    
    
  }
  
  
}