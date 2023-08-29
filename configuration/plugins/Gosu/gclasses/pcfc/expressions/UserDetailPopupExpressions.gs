package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/UserDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/UserDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (user :  User) : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=UserDetailPopup) at UserDetailPopup.pcf: line 9, column 80
    function canEdit_2 () : java.lang.Boolean {
      return perm.User.edit
    }
    
    // 'canVisit' attribute on Popup (id=UserDetailPopup) at UserDetailPopup.pcf: line 9, column 80
    static function canVisit_3 (user :  User) : java.lang.Boolean {
      return perm.User.view
    }
    
    // 'def' attribute on ScreenRef at UserDetailPopup.pcf: line 16, column 44
    function def_onEnter_0 (def :  pcf.UserDetailScreen) : void {
      def.onEnter(user, false)
    }
    
    // 'def' attribute on ScreenRef at UserDetailPopup.pcf: line 16, column 44
    function def_refreshVariables_1 (def :  pcf.UserDetailScreen) : void {
      def.refreshVariables(user, false)
    }
    
    // 'title' attribute on Popup (id=UserDetailPopup) at UserDetailPopup.pcf: line 9, column 80
    static function title_4 (user :  User) : java.lang.Object {
      return DisplayKey.get("Web.Admin.UserDetail", user.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.UserDetailPopup {
      return super.CurrentLocation as pcf.UserDetailPopup
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}