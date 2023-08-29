package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ContactSearchProximityInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactSearchProximityInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/search/ContactSearchProximityInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactSearchProximityInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ContactSearchProximityInputSet.pcf: line 34, column 41
    function def_onEnter_11 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(new gw.api.address.SearchProximityAddressOwner(SearchCriteria.ProximitySearchCenter))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ContactSearchProximityInputSet.pcf: line 34, column 41
    function def_onEnter_13 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(new gw.api.address.SearchProximityAddressOwner(SearchCriteria.ProximitySearchCenter))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ContactSearchProximityInputSet.pcf: line 34, column 41
    function def_onEnter_9 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(new gw.api.address.SearchProximityAddressOwner(SearchCriteria.ProximitySearchCenter))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ContactSearchProximityInputSet.pcf: line 34, column 41
    function def_refreshVariables_10 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(new gw.api.address.SearchProximityAddressOwner(SearchCriteria.ProximitySearchCenter))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ContactSearchProximityInputSet.pcf: line 34, column 41
    function def_refreshVariables_12 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(new gw.api.address.SearchProximityAddressOwner(SearchCriteria.ProximitySearchCenter))
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at ContactSearchProximityInputSet.pcf: line 34, column 41
    function def_refreshVariables_14 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(new gw.api.address.SearchProximityAddressOwner(SearchCriteria.ProximitySearchCenter))
    }
    
    // 'value' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.ProximitySearchParameters = (__VALUE_TO_SET as entity.ProximitySearchParameters)
    }
    
    // 'initialValue' attribute on Variable at ContactSearchProximityInputSet.pcf: line 16, column 50
    function initialValue_0 () : entity.ProximitySearchParameters[] {
      return gw.util.Geocode.setDefaultSearchRange(proximitySearchPageHelper, SearchCriteria)
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at ContactSearchProximityInputSet.pcf: line 34, column 41
    function mode_15 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(SearchCriteria.ProximitySearchCenter.Country).PCFMode
    }
    
    // 'optionLabel' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function optionLabel_4 (VALUE :  entity.ProximitySearchParameters) : java.lang.String {
      return VALUE.getLabel()
    }
    
    // 'valueRange' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function valueRange_5 () : java.lang.Object {
      return pspRange
    }
    
    // 'value' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function valueRoot_3 () : java.lang.Object {
      return SearchCriteria
    }
    
    // 'value' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function value_1 () : entity.ProximitySearchParameters {
      return SearchCriteria.ProximitySearchParameters
    }
    
    // 'valueRange' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function verifyValueRangeIsAllowedType_6 ($$arg :  entity.ProximitySearchParameters[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.database.IQueryBeanResult<entity.ProximitySearchParameters>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProximitySearchType_Input) at ContactSearchProximityInputSet.pcf: line 29, column 53
    function verifyValueRange_7 () : void {
      var __valueRangeArg = pspRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get SearchCriteria () : ABContactSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as ABContactSearchCriteria
    }
    
    property set SearchCriteria ($arg :  ABContactSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    property get proximitySearchPageHelper () : gw.api.contact.ProximitySearchPageHelper {
      return getRequireValue("proximitySearchPageHelper", 0) as gw.api.contact.ProximitySearchPageHelper
    }
    
    property set proximitySearchPageHelper ($arg :  gw.api.contact.ProximitySearchPageHelper) {
      setRequireValue("proximitySearchPageHelper", 0, $arg)
    }
    
    property get pspRange () : entity.ProximitySearchParameters[] {
      return getVariableValue("pspRange", 0) as entity.ProximitySearchParameters[]
    }
    
    property set pspRange ($arg :  entity.ProximitySearchParameters[]) {
      setVariableValue("pspRange", 0, $arg)
    }
    
    
  }
  
  
}