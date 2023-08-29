package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/UserContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserContactDetailPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/UserContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserContactDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (User :  User) : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=UserContactDetailPopup) at UserContactDetailPopup.pcf: line 11, column 30
    function canEdit_2 () : java.lang.Boolean {
      return User.Contact != null and perm.Contact.editlocal(User.Contact)
    }
    
    // 'canVisit' attribute on Popup (id=UserContactDetailPopup) at UserContactDetailPopup.pcf: line 11, column 30
    static function canVisit_3 (User :  User) : java.lang.Boolean {
      return User.Contact != null and perm.Contact.viewlocal
    }
    
    // 'def' attribute on ScreenRef at UserContactDetailPopup.pcf: line 18, column 52
    function def_onEnter_0 (def :  pcf.UserContactDetailScreen) : void {
      def.onEnter(User.Contact)
    }
    
    // 'def' attribute on ScreenRef at UserContactDetailPopup.pcf: line 18, column 52
    function def_refreshVariables_1 (def :  pcf.UserContactDetailScreen) : void {
      def.refreshVariables(User.Contact)
    }
    
    // 'title' attribute on Popup (id=UserContactDetailPopup) at UserContactDetailPopup.pcf: line 11, column 30
    static function title_4 (User :  User) : java.lang.Object {
      return User.DisplayName
    }
    
    override property get CurrentLocation () : pcf.UserContactDetailPopup {
      return super.CurrentLocation as pcf.UserContactDetailPopup
    }
    
    property get User () : User {
      return getVariableValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setVariableValue("User", 0, $arg)
    }
    
    
  }
  
  
}