package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/businessweek/BusinessWeekDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BusinessWeekDetailDV_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/businessweek/BusinessWeekDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BusinessWeekDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BusinessWeekDetailDV.default.pcf: line 13, column 85
    function def_onEnter_0 (def :  pcf.ZonesInputSet) : void {
      def.onEnter(BusinessWeek, BusinessWeek.IntrinsicType.RelativeName)
    }
    
    // 'def' attribute on InputSetRef at BusinessWeekDetailDV.default.pcf: line 13, column 85
    function def_refreshVariables_1 (def :  pcf.ZonesInputSet) : void {
      def.refreshVariables(BusinessWeek, BusinessWeek.IntrinsicType.RelativeName)
    }
    
    property get BusinessWeek () : BusinessWeek {
      return getRequireValue("BusinessWeek", 0) as BusinessWeek
    }
    
    property set BusinessWeek ($arg :  BusinessWeek) {
      setRequireValue("BusinessWeek", 0, $arg)
    }
    
    
  }
  
  
}