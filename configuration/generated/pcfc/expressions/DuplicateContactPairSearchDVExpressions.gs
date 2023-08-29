package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateContactPairSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DuplicateContactPairSearchDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateContactPairSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DuplicateContactPairSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactPairSearchDV.pcf: line 42, column 41
    function def_onEnter_21 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at DuplicateContactPairSearchDV.pcf: line 42, column 41
    function def_refreshVariables_22 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on CheckBoxInput (id=LastRun_Input) at DuplicateContactPairSearchDV.pcf: line 32, column 41
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.LastRun = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=SearchDate_Input) at DuplicateContactPairSearchDV.pcf: line 38, column 44
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DuplicateContactPairSearchDV.pcf: line 16, column 38
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=MatchType_Input) at DuplicateContactPairSearchDV.pcf: line 25, column 81
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.MatchType = (__VALUE_TO_SET as gw.domain.contact.DuplicateContactSearchCriteria.MatchType)
    }
    
    // 'label' attribute on TextInput (id=Name_Input) at DuplicateContactPairSearchDV.pcf: line 16, column 38
    function label_0 () : java.lang.Object {
      return (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.Contacts.MergeContacts.Search.NamePhonetic") : DisplayKey.get("Web.Contacts.MergeContacts.Search.Name")
    }
    
    // 'valueRange' attribute on RangeInput (id=MatchType_Input) at DuplicateContactPairSearchDV.pcf: line 25, column 81
    function valueRange_9 () : java.lang.Object {
      return gw.domain.contact.DuplicateContactSearchCriteria.MatchType.AllValuesSorted
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DuplicateContactPairSearchDV.pcf: line 16, column 38
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DuplicateContactPairSearchDV.pcf: line 16, column 38
    function value_1 () : java.lang.String {
      return searchCriteria.Name
    }
    
    // 'value' attribute on CheckBoxInput (id=LastRun_Input) at DuplicateContactPairSearchDV.pcf: line 32, column 41
    function value_13 () : java.lang.Boolean {
      return searchCriteria.LastRun
    }
    
    // 'value' attribute on DateInput (id=SearchDate_Input) at DuplicateContactPairSearchDV.pcf: line 38, column 44
    function value_17 () : java.util.Date {
      return searchCriteria.SearchDate
    }
    
    // 'value' attribute on RangeInput (id=MatchType_Input) at DuplicateContactPairSearchDV.pcf: line 25, column 81
    function value_6 () : gw.domain.contact.DuplicateContactSearchCriteria.MatchType {
      return searchCriteria.MatchType
    }
    
    // 'valueRange' attribute on RangeInput (id=MatchType_Input) at DuplicateContactPairSearchDV.pcf: line 25, column 81
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.domain.contact.DuplicateContactSearchCriteria.MatchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MatchType_Input) at DuplicateContactPairSearchDV.pcf: line 25, column 81
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MatchType_Input) at DuplicateContactPairSearchDV.pcf: line 25, column 81
    function verifyValueRange_11 () : void {
      var __valueRangeArg = gw.domain.contact.DuplicateContactSearchCriteria.MatchType.AllValuesSorted
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    property get searchCriteria () : gw.domain.contact.DuplicateContactSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.domain.contact.DuplicateContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.domain.contact.DuplicateContactSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}