package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupDetailScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 20, column 38
    function def_onEnter_2 (def :  pcf.GroupDetailDV) : void {
      def.onEnter(Group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 24, column 274
    function def_onEnter_4 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(Group, { "Name" }, { (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.Admin.GroupDetail.BasicDV.NamePhonetic") : DisplayKey.get("Web.Admin.GroupDetail.BasicDV.Name") })
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 31, column 38
    function def_onEnter_6 (def :  pcf.GroupRegionLV) : void {
      def.onEnter(Group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 20, column 38
    function def_refreshVariables_3 (def :  pcf.GroupDetailDV) : void {
      def.refreshVariables(Group)
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 24, column 274
    function def_refreshVariables_5 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(Group, { "Name" }, { (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.Admin.GroupDetail.BasicDV.NamePhonetic") : DisplayKey.get("Web.Admin.GroupDetail.BasicDV.Name") })
    }
    
    // 'def' attribute on PanelRef at GroupDetailScreen.pcf: line 31, column 38
    function def_refreshVariables_7 (def :  pcf.GroupRegionLV) : void {
      def.refreshVariables(Group)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GroupDetailScreen.pcf: line 12, column 64
    function toolbarButtonSet_onEnter_0 (def :  pcf.GroupDetailToolbarButtonSet) : void {
      def.onEnter(Group)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GroupDetailScreen.pcf: line 12, column 64
    function toolbarButtonSet_refreshVariables_1 (def :  pcf.GroupDetailToolbarButtonSet) : void {
      def.refreshVariables(Group)
    }
    
    property get Group () : Group {
      return getRequireValue("Group", 0) as Group
    }
    
    property set Group ($arg :  Group) {
      setRequireValue("Group", 0, $arg)
    }
    
    
  }
  
  
}