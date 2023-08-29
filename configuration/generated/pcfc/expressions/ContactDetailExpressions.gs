package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ContactDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  ABContact) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 15, column 35
    function beforeCommit_3 (pickedValue :  java.lang.Object) : void {
      new gw.web.ABContactContactHelper(contact).checkForChangedElements()
    }
    
    // 'canEdit' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 15, column 35
    function canEdit_4 () : java.lang.Boolean {
      return perm.ABContact.edit(contact)
    }
    
    // 'canVisit' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 15, column 35
    static function canVisit_5 (contact :  ABContact) : java.lang.Boolean {
      return perm.ABContact.view(contact)
    }
    
    // 'def' attribute on ScreenRef at ContactDetail.pcf: line 26, column 66
    function def_onEnter_1 (def :  pcf.ABContactDetailScreen) : void {
      def.onEnter(contact, false, false, false)
    }
    
    // 'def' attribute on ScreenRef at ContactDetail.pcf: line 26, column 66
    function def_refreshVariables_2 (def :  pcf.ABContactDetailScreen) : void {
      def.refreshVariables(contact, false, false, false)
    }
    
    // 'handlesValidationIssue' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 15, column 35
    static function handlesValidationIssue_6 (contact :  ABContact, VALUE :  java.lang.Object) : java.lang.Boolean {
      return (VALUE typeis ABContact) and !VALUE.isNew()
    }
    
    // 'infoBar' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 15, column 35
    function infoBar_onEnter_7 (def :  pcf.ContactInfoBar) : void {
      def.onEnter(contact)
    }
    
    // 'infoBar' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 15, column 35
    function infoBar_refreshVariables_8 (def :  pcf.ContactInfoBar) : void {
      def.refreshVariables(contact)
    }
    
    // 'initialValue' attribute on Variable at ContactDetail.pcf: line 24, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'parent' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 15, column 35
    static function parent_9 (contact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    // 'title' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 15, column 35
    static function title_10 (contact :  ABContact) : java.lang.Object {
      return DisplayKey.get("Web.ContactDetail.Title", contact)
    }
    
    override property get CurrentLocation () : pcf.ContactDetail {
      return super.CurrentLocation as pcf.ContactDetail
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