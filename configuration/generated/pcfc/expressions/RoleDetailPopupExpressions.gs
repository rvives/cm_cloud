package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RoleDetailPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/roles/RoleDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RoleDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Role :  Role) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=RoleDetailPopup) at RoleDetailPopup.pcf: line 10, column 80
    function afterCancel_2 () : void {
      Roles.go()
    }
    
    // 'afterCancel' attribute on Popup (id=RoleDetailPopup) at RoleDetailPopup.pcf: line 10, column 80
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'canEdit' attribute on Popup (id=RoleDetailPopup) at RoleDetailPopup.pcf: line 10, column 80
    function canEdit_4 () : java.lang.Boolean {
      return perm.Role.edit
    }
    
    // 'canVisit' attribute on Popup (id=RoleDetailPopup) at RoleDetailPopup.pcf: line 10, column 80
    static function canVisit_5 (Role :  Role) : java.lang.Boolean {
      return perm.Role.view
    }
    
    // 'def' attribute on ScreenRef at RoleDetailPopup.pcf: line 17, column 37
    function def_onEnter_0 (def :  pcf.RoleDetailScreen) : void {
      def.onEnter(Role)
    }
    
    // 'def' attribute on ScreenRef at RoleDetailPopup.pcf: line 17, column 37
    function def_refreshVariables_1 (def :  pcf.RoleDetailScreen) : void {
      def.refreshVariables(Role)
    }
    
    // 'title' attribute on Popup (id=RoleDetailPopup) at RoleDetailPopup.pcf: line 10, column 80
    static function title_6 (Role :  Role) : java.lang.Object {
      return DisplayKey.get("Web.Admin.RoleDetail", Role.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.RoleDetailPopup {
      return super.CurrentLocation as pcf.RoleDetailPopup
    }
    
    property get Role () : Role {
      return getVariableValue("Role", 0) as Role
    }
    
    property set Role ($arg :  Role) {
      setVariableValue("Role", 0, $arg)
    }
    
    
  }
  
  
}