package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/MBeansLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MBeansLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/MBeansLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MBeansLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=BeanName_Cell) at MBeansLV.pcf: line 24, column 37
    function action_1 () : void {
      MBean.go(BeanCategory, GWMBeansData, GWMBean.BeanName)
    }
    
    // 'action' attribute on TextCell (id=BeanName_Cell) at MBeansLV.pcf: line 24, column 37
    function action_dest_2 () : pcf.api.Destination {
      return pcf.MBean.createDestination(BeanCategory, GWMBeansData, GWMBean.BeanName)
    }
    
    // 'value' attribute on TextCell (id=BeanName_Cell) at MBeansLV.pcf: line 24, column 37
    function valueRoot_4 () : java.lang.Object {
      return GWMBean
    }
    
    // 'value' attribute on TextCell (id=BeanName_Cell) at MBeansLV.pcf: line 24, column 37
    function value_3 () : java.lang.String {
      return GWMBean.BeanName
    }
    
    property get GWMBean () : gw.plugin.management.GWMBean {
      return getIteratedValue(1) as gw.plugin.management.GWMBean
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/MBeansLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MBeansLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=BeanName_Cell) at MBeansLV.pcf: line 24, column 37
    function sortValue_0 (GWMBean :  gw.plugin.management.GWMBean) : java.lang.Object {
      return GWMBean.BeanName
    }
    
    // 'value' attribute on RowIterator at MBeansLV.pcf: line 18, column 50
    function value_6 () : gw.plugin.management.GWMBean[] {
      return GWMBeansData.getAllBeans(BeanCategory)
    }
    
    property get BeanCategory () : String {
      return getRequireValue("BeanCategory", 0) as String
    }
    
    property set BeanCategory ($arg :  String) {
      setRequireValue("BeanCategory", 0, $arg)
    }
    
    property get GWMBeansData () : gw.api.tools.MBeansData {
      return getRequireValue("GWMBeansData", 0) as gw.api.tools.MBeansData
    }
    
    property set GWMBeansData ($arg :  gw.api.tools.MBeansData) {
      setRequireValue("GWMBeansData", 0, $arg)
    }
    
    
  }
  
  
}