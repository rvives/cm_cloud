package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/AddressSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressSearchInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/search/AddressSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressSearchInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressSearchInputSet.pcf: line 16, column 41
    function def_onEnter_0 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(new gw.api.address.SearchAddressOwner(SearchCriteria.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressSearchInputSet.pcf: line 16, column 41
    function def_onEnter_2 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(new gw.api.address.SearchAddressOwner(SearchCriteria.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressSearchInputSet.pcf: line 16, column 41
    function def_onEnter_4 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(new gw.api.address.SearchAddressOwner(SearchCriteria.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressSearchInputSet.pcf: line 16, column 41
    function def_refreshVariables_1 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(new gw.api.address.SearchAddressOwner(SearchCriteria.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressSearchInputSet.pcf: line 16, column 41
    function def_refreshVariables_3 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(new gw.api.address.SearchAddressOwner(SearchCriteria.Address))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressSearchInputSet.pcf: line 16, column 41
    function def_refreshVariables_5 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(new gw.api.address.SearchAddressOwner(SearchCriteria.Address))
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at AddressSearchInputSet.pcf: line 16, column 41
    function mode_6 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(SearchCriteria.Address.Country).PCFMode
    }
    
    property get SearchCriteria () : ABContactSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as ABContactSearchCriteria
    }
    
    property set SearchCriteria ($arg :  ABContactSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}