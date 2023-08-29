package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentSearchInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentSearchInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentSearchInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchInputSet.pcf: line 37, column 55
    function def_onEnter_17 (def :  pcf.PLNameInputSet_Contact) : void {
      def.onEnter(new gw.api.name.UserSearchNameOwner(searchCriteria.UserCriteria.Contact))
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchInputSet.pcf: line 37, column 55
    function def_onEnter_19 (def :  pcf.PLNameInputSet_Person) : void {
      def.onEnter(new gw.api.name.UserSearchNameOwner(searchCriteria.UserCriteria.Contact))
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchInputSet.pcf: line 37, column 55
    function def_refreshVariables_18 (def :  pcf.PLNameInputSet_Contact) : void {
      def.refreshVariables(new gw.api.name.UserSearchNameOwner(searchCriteria.UserCriteria.Contact))
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchInputSet.pcf: line 37, column 55
    function def_refreshVariables_20 (def :  pcf.PLNameInputSet_Person) : void {
      def.refreshVariables(new gw.api.name.UserSearchNameOwner(searchCriteria.UserCriteria.Contact))
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignmentSearchInputSet.pcf: line 32, column 55
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.UserCriteria.Username = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchInputSet.pcf: line 43, column 56
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.GroupCriteria.GroupName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchInputSet.pcf: line 23, column 48
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchType = (__VALUE_TO_SET as typekey.AssignmentSearchType)
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaNameKanji_Input) at AssignmentSearchInputSet.pcf: line 49, column 124
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      (searchCriteria.GroupCriteria as GroupSearchCriteria).GroupNameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignmentSearchInputSet.pcf: line 55, column 56
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.QueueCriteria.QueueGroupName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupNameKanji_Input) at AssignmentSearchInputSet.pcf: line 61, column 124
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.QueueCriteria.QueueGroupNameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=QueueName_Input) at AssignmentSearchInputSet.pcf: line 67, column 56
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.QueueCriteria.QueueName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchInputSet.pcf: line 23, column 48
    function editable_1 () : java.lang.Boolean {
      return assignmentSearchTypes.length > 1
    }
    
    // 'label' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchInputSet.pcf: line 43, column 56
    function label_22 () : java.lang.Object {
      return gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP ? DisplayKey.get("Web.Assignment.Search.GroupNamePhonetic") : DisplayKey.get("Web.Assignment.Search.GroupName")
    }
    
    // 'label' attribute on TextInput (id=GroupName_Input) at AssignmentSearchInputSet.pcf: line 55, column 56
    function label_36 () : java.lang.Object {
      return (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.Assignment.Search.GroupNamePhonetic") : DisplayKey.get("Web.Assignment.Search.GroupName")
    }
    
    // 'onChange' attribute on PostOnChange at AssignmentSearchInputSet.pcf: line 25, column 72
    function onChange_0 () : void {
      if (searchResult != null) { searchResult.clear() }
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchInputSet.pcf: line 23, column 48
    function valueRange_5 () : java.lang.Object {
      return assignmentSearchTypes
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignmentSearchInputSet.pcf: line 32, column 55
    function valueRoot_13 () : java.lang.Object {
      return searchCriteria.UserCriteria
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchInputSet.pcf: line 43, column 56
    function valueRoot_25 () : java.lang.Object {
      return searchCriteria.GroupCriteria
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaNameKanji_Input) at AssignmentSearchInputSet.pcf: line 49, column 124
    function valueRoot_32 () : java.lang.Object {
      return (searchCriteria.GroupCriteria as GroupSearchCriteria)
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignmentSearchInputSet.pcf: line 55, column 56
    function valueRoot_39 () : java.lang.Object {
      return searchCriteria.QueueCriteria
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchInputSet.pcf: line 23, column 48
    function valueRoot_4 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignmentSearchInputSet.pcf: line 32, column 55
    function value_11 () : java.lang.String {
      return searchCriteria.UserCriteria.Username
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchInputSet.pcf: line 23, column 48
    function value_2 () : typekey.AssignmentSearchType {
      return searchCriteria.SearchType
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchInputSet.pcf: line 43, column 56
    function value_23 () : java.lang.String {
      return searchCriteria.GroupCriteria.GroupName
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaNameKanji_Input) at AssignmentSearchInputSet.pcf: line 49, column 124
    function value_30 () : java.lang.String {
      return (searchCriteria.GroupCriteria as GroupSearchCriteria).GroupNameKanji
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignmentSearchInputSet.pcf: line 55, column 56
    function value_37 () : java.lang.String {
      return searchCriteria.QueueCriteria.QueueGroupName
    }
    
    // 'value' attribute on TextInput (id=GroupNameKanji_Input) at AssignmentSearchInputSet.pcf: line 61, column 124
    function value_44 () : java.lang.String {
      return searchCriteria.QueueCriteria.QueueGroupNameKanji
    }
    
    // 'value' attribute on TextInput (id=QueueName_Input) at AssignmentSearchInputSet.pcf: line 67, column 56
    function value_50 () : java.lang.String {
      return searchCriteria.QueueCriteria.QueueName
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchInputSet.pcf: line 23, column 48
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchInputSet.pcf: line 23, column 48
    function verifyValueRangeIsAllowedType_6 ($$arg :  typekey.AssignmentSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchInputSet.pcf: line 23, column 48
    function verifyValueRange_7 () : void {
      var __valueRangeArg = assignmentSearchTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Username_Input) at AssignmentSearchInputSet.pcf: line 32, column 55
    function visible_10 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_USER
    }
    
    // 'visible' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchInputSet.pcf: line 43, column 56
    function visible_21 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_GROUP
    }
    
    // 'visible' attribute on TextInput (id=GroupCriteriaNameKanji_Input) at AssignmentSearchInputSet.pcf: line 49, column 124
    function visible_29 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_GROUP and gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP
    }
    
    // 'visible' attribute on TextInput (id=GroupName_Input) at AssignmentSearchInputSet.pcf: line 55, column 56
    function visible_35 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_QUEUE
    }
    
    // 'visible' attribute on TextInput (id=GroupNameKanji_Input) at AssignmentSearchInputSet.pcf: line 61, column 124
    function visible_43 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_QUEUE and gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP
    }
    
    property get assignmentSearchTypes () : AssignmentSearchType[] {
      return getRequireValue("assignmentSearchTypes", 0) as AssignmentSearchType[]
    }
    
    property set assignmentSearchTypes ($arg :  AssignmentSearchType[]) {
      setRequireValue("assignmentSearchTypes", 0, $arg)
    }
    
    property get searchCriteria () : gw.api.assignment.AssignmentSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.api.assignment.AssignmentSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.assignment.AssignmentSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchResult () : gw.api.assignment.AssignmentSearchResult {
      return getRequireValue("searchResult", 0) as gw.api.assignment.AssignmentSearchResult
    }
    
    property set searchResult ($arg :  gw.api.assignment.AssignmentSearchResult) {
      setRequireValue("searchResult", 0, $arg)
    }
    
    
  }
  
  
}