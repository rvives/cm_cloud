package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSearchResultsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 38, column 37
    function action_2 () : void {
      UserDetailPopup.push(user)
    }
    
    // 'action' attribute on TextCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 38, column 37
    function action_dest_3 () : pcf.api.Destination {
      return pcf.UserDetailPopup.createDestination(user)
    }
    
    // 'canPick' attribute on RowIterator at UserSearchResultsLV.pcf: line 28, column 71
    function canPick_13 () : java.lang.Boolean {
      return EnablePick and (not user.Contact.Obfuscated or perm.System.editobfuscatedusercontact)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at UserSearchResultsLV.pcf: line 28, column 71
    function checkBoxVisible_14 () : java.lang.Boolean {
      return EnableCheckbox
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 38, column 37
    function valueRoot_5 () : java.lang.Object {
      return user
    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at UserSearchResultsLV.pcf: line 42, column 45
    function valueRoot_8 () : java.lang.Object {
      return user.Credential
    }
    
    // 'value' attribute on TextCell (id=GroupName_Cell) at UserSearchResultsLV.pcf: line 49, column 62
    function value_10 () : java.util.Set<java.lang.Object> {
      return user.AllGroups
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 38, column 37
    function value_4 () : java.lang.String {
      return user.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at UserSearchResultsLV.pcf: line 42, column 45
    function value_7 () : java.lang.String {
      return user.Credential.UserName
    }
    
    property get user () : entity.User {
      return getIteratedValue(1) as entity.User
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/usersearch/UserSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on TextCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 38, column 37
    function sortValue_0 (user :  entity.User) : java.lang.Object {
      return user
    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at UserSearchResultsLV.pcf: line 42, column 45
    function sortValue_1 (user :  entity.User) : java.lang.Object {
      return user.Credential.UserName
    }
    
    // 'value' attribute on RowIterator at UserSearchResultsLV.pcf: line 28, column 71
    function value_16 () : gw.api.database.IQueryBeanResult<entity.User> {
      return searchResults
    }
    
    property get EnableCheckbox () : boolean {
      return getRequireValue("EnableCheckbox", 0) as java.lang.Boolean
    }
    
    property set EnableCheckbox ($arg :  boolean) {
      setRequireValue("EnableCheckbox", 0, $arg)
    }
    
    property get EnablePick () : boolean {
      return getRequireValue("EnablePick", 0) as java.lang.Boolean
    }
    
    property set EnablePick ($arg :  boolean) {
      setRequireValue("EnablePick", 0, $arg)
    }
    
    property get searchCriteria () : UserSearchCriteria {
      return getRequireValue("searchCriteria", 0) as UserSearchCriteria
    }
    
    property set searchCriteria ($arg :  UserSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<User> {
      return getRequireValue("searchResults", 0) as gw.api.database.IQueryBeanResult<User>
    }
    
    property set searchResults ($arg :  gw.api.database.IQueryBeanResult<User>) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  
}