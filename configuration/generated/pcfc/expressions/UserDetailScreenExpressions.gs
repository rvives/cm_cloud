package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=UserDetailScreen_DeleteButtonButton) at UserDetailScreen.pcf: line 32, column 103
    function action_6 () : void {
      gw.api.web.admin.UserUtil.delete(user); AdminForward.go()
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 47, column 38
    function def_onEnter_10 (def :  pcf.UserProfileDV) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 55, column 36
    function def_onEnter_13 (def :  pcf.UserRegionLV) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 40, column 44
    function def_onEnter_7 (def :  pcf.UserDetailDV) : void {
      def.onEnter(user, isNew)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 47, column 38
    function def_refreshVariables_11 (def :  pcf.UserProfileDV) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 55, column 36
    function def_refreshVariables_14 (def :  pcf.UserRegionLV) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on PanelRef at UserDetailScreen.pcf: line 40, column 44
    function def_refreshVariables_8 (def :  pcf.UserDetailDV) : void {
      def.refreshVariables(user, isNew)
    }
    
    // 'initialValue' attribute on Variable at UserDetailScreen.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return not user.Contact.Obfuscated or perm.System.editobfuscatedusercontact
    }
    
    // EditButtons at UserDetailScreen.pcf: line 21, column 66
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'editVisible' attribute on EditButtons at UserDetailScreen.pcf: line 21, column 66
    function visible_1 () : java.lang.Boolean {
      return notObfuscatedOrEditObfuscatedPermission
    }
    
    // 'visible' attribute on ToolbarButton (id=UserDetailScreen_DeleteButtonButton) at UserDetailScreen.pcf: line 32, column 103
    function visible_5 () : java.lang.Boolean {
      return user.SafeToDelete and perm.User.delete and notObfuscatedOrEditObfuscatedPermission
    }
    
    // 'visible' attribute on Card (id=BasicsCard) at UserDetailScreen.pcf: line 38, column 34
    function visible_9 () : java.lang.Boolean {
      return perm.User.view
    }
    
    property get isNew () : boolean {
      return getRequireValue("isNew", 0) as java.lang.Boolean
    }
    
    property set isNew ($arg :  boolean) {
      setRequireValue("isNew", 0, $arg)
    }
    
    property get notObfuscatedOrEditObfuscatedPermission () : boolean {
      return getVariableValue("notObfuscatedOrEditObfuscatedPermission", 0) as java.lang.Boolean
    }
    
    property set notObfuscatedOrEditObfuscatedPermission ($arg :  boolean) {
      setVariableValue("notObfuscatedOrEditObfuscatedPermission", 0, $arg)
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}