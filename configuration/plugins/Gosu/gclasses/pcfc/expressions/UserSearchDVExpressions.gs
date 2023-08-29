package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSearchDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UserSearchDV.pcf: line 53, column 56
    function def_onEnter_35 (def :  pcf.AdminUserSearchInputSet) : void {
      def.onEnter(SearchCriteria)
    }
    
    // 'def' attribute on InputSetRef at UserSearchDV.pcf: line 57, column 41
    function def_onEnter_37 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at UserSearchDV.pcf: line 53, column 56
    function def_refreshVariables_36 (def :  pcf.AdminUserSearchInputSet) : void {
      def.refreshVariables(SearchCriteria)
    }
    
    // 'def' attribute on InputSetRef at UserSearchDV.pcf: line 57, column 41
    function def_refreshVariables_38 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserSearchDV.pcf: line 15, column 42
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.Username = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=FirstNameKanji_Input) at UserSearchDV.pcf: line 26, column 84
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.Contact.FirstNameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at UserSearchDV.pcf: line 31, column 49
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.Contact.Keyword = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LastNameKanji_Input) at UserSearchDV.pcf: line 37, column 84
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.Contact.KeywordKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 47, column 34
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.Role = (__VALUE_TO_SET as entity.Role)
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at UserSearchDV.pcf: line 20, column 51
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.Contact.FirstName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextInput (id=LastName_Input) at UserSearchDV.pcf: line 31, column 49
    function label_16 () : java.lang.Object {
      return (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.UserSearch.LastNamePhonetic") : DisplayKey.get("Web.UserSearch.LastName")
    }
    
    // 'label' attribute on TextInput (id=FirstName_Input) at UserSearchDV.pcf: line 20, column 51
    function label_4 () : java.lang.Object {
      return (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.UserSearch.FirstNamePhonetic") : DisplayKey.get("Web.UserSearch.FirstName")
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 47, column 34
    function valueRange_31 () : java.lang.Object {
      return SearchCriteria.getAllRoles()
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserSearchDV.pcf: line 15, column 42
    function valueRoot_2 () : java.lang.Object {
      return SearchCriteria
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at UserSearchDV.pcf: line 20, column 51
    function valueRoot_7 () : java.lang.Object {
      return SearchCriteria.Contact
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserSearchDV.pcf: line 15, column 42
    function value_0 () : java.lang.String {
      return SearchCriteria.Username
    }
    
    // 'value' attribute on TextInput (id=FirstNameKanji_Input) at UserSearchDV.pcf: line 26, column 84
    function value_11 () : java.lang.String {
      return SearchCriteria.Contact.FirstNameKanji
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at UserSearchDV.pcf: line 31, column 49
    function value_17 () : java.lang.String {
      return SearchCriteria.Contact.Keyword
    }
    
    // 'value' attribute on TextInput (id=LastNameKanji_Input) at UserSearchDV.pcf: line 37, column 84
    function value_23 () : java.lang.String {
      return SearchCriteria.Contact.KeywordKanji
    }
    
    // 'value' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 47, column 34
    function value_28 () : entity.Role {
      return SearchCriteria.Role
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at UserSearchDV.pcf: line 20, column 51
    function value_5 () : java.lang.String {
      return SearchCriteria.Contact.FirstName
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 47, column 34
    function verifyValueRangeIsAllowedType_32 ($$arg :  entity.Role[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 47, column 34
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.api.database.IQueryBeanResult<entity.Role>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 47, column 34
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Role_Input) at UserSearchDV.pcf: line 47, column 34
    function verifyValueRange_33 () : void {
      var __valueRangeArg = SearchCriteria.getAllRoles()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=FirstNameKanji_Input) at UserSearchDV.pcf: line 26, column 84
    function visible_10 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP
    }
    
    property get SearchCriteria () : UserSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as UserSearchCriteria
    }
    
    property set SearchCriteria ($arg :  UserSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}