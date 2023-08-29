package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupDetailPageExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Group :  Group) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=GroupDetailPage) at GroupDetailPage.pcf: line 10, column 82
    function canEdit_2 () : java.lang.Boolean {
      return perm.Group.edit
    }
    
    // 'canVisit' attribute on Page (id=GroupDetailPage) at GroupDetailPage.pcf: line 10, column 82
    static function canVisit_3 (Group :  Group) : java.lang.Boolean {
      return perm.Group.view
    }
    
    // 'def' attribute on ScreenRef at GroupDetailPage.pcf: line 17, column 39
    function def_onEnter_0 (def :  pcf.GroupDetailScreen) : void {
      def.onEnter(Group)
    }
    
    // 'def' attribute on ScreenRef at GroupDetailPage.pcf: line 17, column 39
    function def_refreshVariables_1 (def :  pcf.GroupDetailScreen) : void {
      def.refreshVariables(Group)
    }
    
    // 'parent' attribute on Page (id=GroupDetailPage) at GroupDetailPage.pcf: line 10, column 82
    static function parent_4 (Group :  Group) : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'title' attribute on Page (id=GroupDetailPage) at GroupDetailPage.pcf: line 10, column 82
    static function title_5 (Group :  Group) : java.lang.Object {
      return DisplayKey.get("Web.Admin.GroupDetail", Group.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.GroupDetailPage {
      return super.CurrentLocation as pcf.GroupDetailPage
    }
    
    property get Group () : Group {
      return getVariableValue("Group", 0) as Group
    }
    
    property set Group ($arg :  Group) {
      setVariableValue("Group", 0, $arg)
    }
    
    
  }
  
  
}