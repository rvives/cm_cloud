package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/regions/RegionDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionDetailDV_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/regions/RegionDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RegionDetailDV.default.pcf: line 13, column 73
    function def_onEnter_0 (def :  pcf.ZonesInputSet) : void {
      def.onEnter(Region, Region.IntrinsicType.RelativeName)
    }
    
    // 'def' attribute on InputSetRef at RegionDetailDV.default.pcf: line 13, column 73
    function def_refreshVariables_1 (def :  pcf.ZonesInputSet) : void {
      def.refreshVariables(Region, Region.IntrinsicType.RelativeName)
    }
    
    property get Region () : Region {
      return getRequireValue("Region", 0) as Region
    }
    
    property set Region ($arg :  Region) {
      setRequireValue("Region", 0, $arg)
    }
    
    
  }
  
  
}