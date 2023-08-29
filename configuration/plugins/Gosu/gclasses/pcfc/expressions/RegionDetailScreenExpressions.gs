package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/regions/RegionDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionDetailScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/regions/RegionDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RegionDetailScreen.pcf: line 42, column 44
    function def_onEnter_11 (def :  pcf.RegionDetailDV_default) : void {
      def.onEnter(Region)
    }
    
    // 'def' attribute on PanelRef at RegionDetailScreen.pcf: line 44, column 124
    function def_onEnter_13 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(Region, { "Name"}, { DisplayKey.get("Web.Admin.RegionDetailDV.Name") })
    }
    
    // 'def' attribute on PanelRef at RegionDetailScreen.pcf: line 42, column 44
    function def_refreshVariables_12 (def :  pcf.RegionDetailDV_default) : void {
      def.refreshVariables(Region)
    }
    
    // 'def' attribute on PanelRef at RegionDetailScreen.pcf: line 44, column 124
    function def_refreshVariables_14 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(Region, { "Name"}, { DisplayKey.get("Web.Admin.RegionDetailDV.Name") })
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RegionDetailScreen.pcf: line 31, column 34
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Region.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on PanelRef at RegionDetailScreen.pcf: line 42, column 44
    function editable_10 () : java.lang.Boolean {
      return perm.Region.edit(Region)
    }
    
    // EditButtons at RegionDetailScreen.pcf: line 12, column 101
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RegionDetailScreen.pcf: line 31, column 34
    function valueRoot_5 () : java.lang.Object {
      return Region
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RegionDetailScreen.pcf: line 31, column 34
    function value_3 () : java.lang.String {
      return Region.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Zones_Input) at RegionDetailScreen.pcf: line 36, column 35
    function value_7 () : java.lang.String {
      return Region.Zones
    }
    
    // 'editVisible' attribute on EditButtons at RegionDetailScreen.pcf: line 12, column 101
    function visible_0 () : java.lang.Boolean {
      return gw.api.admin.BaseAdminUtil.getRegionZoneTypesForDefaultCountry().length != 0
    }
    
    // 'visible' attribute on Verbatim at RegionDetailScreen.pcf: line 17, column 95
    function visible_2 () : java.lang.Boolean {
      return gw.api.admin.BaseAdminUtil.getRegionZoneTypesForDefaultCountry().length == 0
    }
    
    property get Region () : Region {
      return getRequireValue("Region", 0) as Region
    }
    
    property set Region ($arg :  Region) {
      setRequireValue("Region", 0, $arg)
    }
    
    
  }
  
  
}