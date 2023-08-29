package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailPageExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (user :  User) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    function canEdit_2 () : java.lang.Boolean {
      return perm.User.edit
    }
    
    // 'canVisit' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    static function canVisit_3 (user :  User) : java.lang.Boolean {
      return perm.User.view
    }
    
    // 'def' attribute on ScreenRef at UserDetailPage.pcf: line 17, column 44
    function def_onEnter_0 (def :  pcf.UserDetailScreen) : void {
      def.onEnter(user, false)
    }
    
    // 'def' attribute on ScreenRef at UserDetailPage.pcf: line 17, column 44
    function def_refreshVariables_1 (def :  pcf.UserDetailScreen) : void {
      def.refreshVariables(user, false)
    }
    
    // 'parent' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    static function parent_4 (user :  User) : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'title' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    static function title_5 (user :  User) : java.lang.Object {
      return DisplayKey.get("Web.Admin.UserDetail", user.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.UserDetailPage {
      return super.CurrentLocation as pcf.UserDetailPage
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}