package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/roles/RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RolesLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/roles/RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RolesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 29, column 30
    function action_1 () : void {
      RoleDetailPopup.push(Role)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 29, column 30
    function action_dest_2 () : pcf.api.Destination {
      return pcf.RoleDetailPopup.createDestination(Role)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 29, column 30
    function valueRoot_4 () : java.lang.Object {
      return Role
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 29, column 30
    function value_3 () : java.lang.String {
      return Role.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RolesLV.pcf: line 35, column 37
    function value_6 () : java.lang.String {
      return Role.Description
    }
    
    property get Role () : entity.Role {
      return getIteratedValue(1) as entity.Role
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/roles/RolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RolesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RolesLV.pcf: line 29, column 30
    function sortValue_0 (Role :  entity.Role) : java.lang.Object {
      return Role.Name
    }
    
    // 'value' attribute on RowIterator at RolesLV.pcf: line 20, column 71
    function value_9 () : gw.api.database.IQueryBeanResult<entity.Role> {
      return Roles
    }
    
    property get Roles () : gw.api.database.IQueryBeanResult<Role> {
      return getRequireValue("Roles", 0) as gw.api.database.IQueryBeanResult<Role>
    }
    
    property set Roles ($arg :  gw.api.database.IQueryBeanResult<Role>) {
      setRequireValue("Roles", 0, $arg)
    }
    
    
  }
  
  
}