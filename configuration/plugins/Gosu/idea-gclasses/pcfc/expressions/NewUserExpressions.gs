package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/NewUser.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewUserExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/NewUser.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewUserExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewUser) at NewUser.pcf: line 14, column 65
    function afterCancel_3 () : void {
      Admin.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewUser) at NewUser.pcf: line 14, column 65
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewUser) at NewUser.pcf: line 14, column 65
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      UserDetailPage.go(user)
    }
    
    // 'canVisit' attribute on Page (id=NewUser) at NewUser.pcf: line 14, column 65
    static function canVisit_6 () : java.lang.Boolean {
      return perm.User.create
    }
    
    // 'def' attribute on ScreenRef at NewUser.pcf: line 22, column 43
    function def_onEnter_1 (def :  pcf.UserDetailScreen) : void {
      def.onEnter(user, true)
    }
    
    // 'def' attribute on ScreenRef at NewUser.pcf: line 22, column 43
    function def_refreshVariables_2 (def :  pcf.UserDetailScreen) : void {
      def.refreshVariables(user, true)
    }
    
    // 'initialValue' attribute on Variable at NewUser.pcf: line 20, column 20
    function initialValue_0 () : User {
      return new User()
    }
    
    // 'parent' attribute on Page (id=NewUser) at NewUser.pcf: line 14, column 65
    static function parent_7 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'startEditing' attribute on Page (id=NewUser) at NewUser.pcf: line 14, column 65
    function startEditing_8 () : void {
      user.Credential = new Credential(); user.Contact = new UserContact(); user.initPreferences()
    }
    
    override property get CurrentLocation () : pcf.NewUser {
      return super.CurrentLocation as pcf.NewUser
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}