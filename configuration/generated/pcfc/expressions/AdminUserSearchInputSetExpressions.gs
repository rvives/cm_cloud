package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/AdminUserSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminUserSearchInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/search/AdminUserSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminUserSearchInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AdminUserSearchInputSet.pcf: line 16, column 41
    function def_onEnter_0 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(new gw.api.address.SearchAddressOwner(SearchCriteria.Contact.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AdminUserSearchInputSet.pcf: line 16, column 41
    function def_onEnter_2 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(new gw.api.address.SearchAddressOwner(SearchCriteria.Contact.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AdminUserSearchInputSet.pcf: line 16, column 41
    function def_onEnter_4 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(new gw.api.address.SearchAddressOwner(SearchCriteria.Contact.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AdminUserSearchInputSet.pcf: line 16, column 41
    function def_refreshVariables_1 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(new gw.api.address.SearchAddressOwner(SearchCriteria.Contact.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AdminUserSearchInputSet.pcf: line 16, column 41
    function def_refreshVariables_3 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(new gw.api.address.SearchAddressOwner(SearchCriteria.Contact.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AdminUserSearchInputSet.pcf: line 16, column 41
    function def_refreshVariables_5 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(new gw.api.address.SearchAddressOwner(SearchCriteria.Contact.Address))
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at AdminUserSearchInputSet.pcf: line 16, column 41
    function mode_6 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(SearchCriteria.Contact.Address.Country).PCFMode
    }
    
    property get SearchCriteria () : UserSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as UserSearchCriteria
    }
    
    property set SearchCriteria ($arg :  UserSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}