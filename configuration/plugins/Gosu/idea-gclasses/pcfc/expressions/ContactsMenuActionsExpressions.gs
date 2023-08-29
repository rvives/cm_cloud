package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactsMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactsMenuActionsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ContactsMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactsMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherPersonMenuItem) at ContactsMenuActions.pcf: line 14, column 77
    function action_0 () : void {
      NewContact.go(entity.ABPerson)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_DoctorMenuItem) at ContactsMenuActions.pcf: line 37, column 74
    function action_10 () : void {
      NewContact.go(entity.ABDoctor)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherCompanyMenuItem) at ContactsMenuActions.pcf: line 47, column 78
    function action_12 () : void {
      NewContact.go(entity.ABCompany)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherCompanyVendorMenuItem) at ContactsMenuActions.pcf: line 54, column 86
    function action_14 () : void {
      NewContact.go(entity.ABCompanyVendor)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_AutoRepairShopMenuItem) at ContactsMenuActions.pcf: line 58, column 82
    function action_16 () : void {
      NewContact.go(entity.ABAutoRepairShop)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_AutoTowingAgcyShopMenuItem) at ContactsMenuActions.pcf: line 62, column 82
    function action_18 () : void {
      NewContact.go(entity.ABAutoTowingAgcy)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_AdjudicatorMenuItem) at ContactsMenuActions.pcf: line 18, column 77
    function action_2 () : void {
      NewContact.go(entity.ABAdjudicator)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_LawFirmMenuItem) at ContactsMenuActions.pcf: line 66, column 75
    function action_20 () : void {
      NewContact.go(entity.ABLawFirm)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_MedicalCareOrgMenuItem) at ContactsMenuActions.pcf: line 70, column 82
    function action_22 () : void {
      NewContact.go(entity.ABMedicalCareOrg)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_PolicyCompanyMenuItem) at ContactsMenuActions.pcf: line 75, column 79
    function action_24 () : void {
      NewContact.go(entity.ABPolicyCompany)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_InsuranceCompanyMenuItem) at ContactsMenuActions.pcf: line 79, column 82
    function action_26 () : void {
      NewContact.go(entity.ABInsuranceCompany)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherPlaceMenuItem) at ContactsMenuActions.pcf: line 88, column 76
    function action_28 () : void {
      NewContact.go(entity.ABPlace)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_LegalVenueMenuItem) at ContactsMenuActions.pcf: line 92, column 76
    function action_30 () : void {
      NewContact.go(entity.ABLegalVenue)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_PolicyPersonMenuItem) at ContactsMenuActions.pcf: line 22, column 78
    function action_4 () : void {
      NewContact.go(entity.ABPolicyPerson)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherPersonVendorMenuItem) at ContactsMenuActions.pcf: line 29, column 85
    function action_6 () : void {
      NewContact.go(entity.ABPersonVendor)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_AttorneyMenuItem) at ContactsMenuActions.pcf: line 33, column 76
    function action_8 () : void {
      NewContact.go(entity.ABAttorney)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherPersonMenuItem) at ContactsMenuActions.pcf: line 14, column 77
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABPerson)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_DoctorMenuItem) at ContactsMenuActions.pcf: line 37, column 74
    function action_dest_11 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABDoctor)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherCompanyMenuItem) at ContactsMenuActions.pcf: line 47, column 78
    function action_dest_13 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABCompany)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherCompanyVendorMenuItem) at ContactsMenuActions.pcf: line 54, column 86
    function action_dest_15 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABCompanyVendor)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_AutoRepairShopMenuItem) at ContactsMenuActions.pcf: line 58, column 82
    function action_dest_17 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABAutoRepairShop)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_AutoTowingAgcyShopMenuItem) at ContactsMenuActions.pcf: line 62, column 82
    function action_dest_19 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABAutoTowingAgcy)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_LawFirmMenuItem) at ContactsMenuActions.pcf: line 66, column 75
    function action_dest_21 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABLawFirm)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_MedicalCareOrgMenuItem) at ContactsMenuActions.pcf: line 70, column 82
    function action_dest_23 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABMedicalCareOrg)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_PolicyCompanyMenuItem) at ContactsMenuActions.pcf: line 75, column 79
    function action_dest_25 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABPolicyCompany)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_InsuranceCompanyMenuItem) at ContactsMenuActions.pcf: line 79, column 82
    function action_dest_27 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABInsuranceCompany)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherPlaceMenuItem) at ContactsMenuActions.pcf: line 88, column 76
    function action_dest_29 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABPlace)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_AdjudicatorMenuItem) at ContactsMenuActions.pcf: line 18, column 77
    function action_dest_3 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABAdjudicator)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_LegalVenueMenuItem) at ContactsMenuActions.pcf: line 92, column 76
    function action_dest_31 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABLegalVenue)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_PolicyPersonMenuItem) at ContactsMenuActions.pcf: line 22, column 78
    function action_dest_5 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABPolicyPerson)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_OtherPersonVendorMenuItem) at ContactsMenuActions.pcf: line 29, column 85
    function action_dest_7 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABPersonVendor)
    }
    
    // 'action' attribute on MenuItem (id=ContactsMenuActions_AttorneyMenuItem) at ContactsMenuActions.pcf: line 33, column 76
    function action_dest_9 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(entity.ABAttorney)
    }
    
    
  }
  
  
}