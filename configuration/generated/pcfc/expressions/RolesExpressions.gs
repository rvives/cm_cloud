package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/Roles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RolesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/Roles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RolesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=Roles_AddRoleButton) at Roles.pcf: line 22, column 25
    function action_1 () : void {
      NewRole.go()
    }
    
    // 'action' attribute on ToolbarButton (id=Roles_AddRoleButton) at Roles.pcf: line 22, column 25
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewRole.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Roles_DeleteButton) at Roles.pcf: line 31, column 39
    function allCheckedRowsAction_4 (CheckedValues :  entity.Role[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.BaseAdminUtil.deleteRoles(CheckedValues)
    }
    
    // 'canVisit' attribute on Page (id=Roles) at Roles.pcf: line 8, column 57
    static function canVisit_7 () : java.lang.Boolean {
      return perm.Role.view
    }
    
    // 'def' attribute on PanelRef at Roles.pcf: line 34, column 34
    function def_onEnter_5 (def :  pcf.RolesLV) : void {
      def.onEnter(AllRoles)
    }
    
    // 'def' attribute on PanelRef at Roles.pcf: line 34, column 34
    function def_refreshVariables_6 (def :  pcf.RolesLV) : void {
      def.refreshVariables(AllRoles)
    }
    
    // 'initialValue' attribute on Variable at Roles.pcf: line 12, column 60
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Role> {
      return Role.finder.allOrderedByName()
    }
    
    // Page (id=Roles) at Roles.pcf: line 8, column 57
    static function parent_8 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=Roles_DeleteButton) at Roles.pcf: line 31, column 39
    function visible_3 () : java.lang.Boolean {
      return perm.Role.delete
    }
    
    property get AllRoles () : gw.api.database.IQueryBeanResult<Role> {
      return getVariableValue("AllRoles", 0) as gw.api.database.IQueryBeanResult<Role>
    }
    
    property set AllRoles ($arg :  gw.api.database.IQueryBeanResult<Role>) {
      setVariableValue("AllRoles", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.Roles {
      return super.CurrentLocation as pcf.Roles
    }
    
    
  }
  
  
}