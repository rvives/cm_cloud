package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/MBeanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MBeanLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/MBeanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ArrayValue_Cell) at MBeanLV.pcf: line 76, column 43
    function valueRoot_23 () : java.lang.Object {
      return Element
    }
    
    // 'value' attribute on TextCell (id=ArrayValueIdx_Cell) at MBeanLV.pcf: line 72, column 75
    function value_20 () : java.lang.String {
      return "     ${Attribute.Name}[${Element.First}]"
    }
    
    // 'value' attribute on TextCell (id=ArrayValue_Cell) at MBeanLV.pcf: line 76, column 43
    function value_22 () : java.lang.Object {
      return Element.Second
    }
    
    property get Element () : gw.util.Pair<java.lang.Integer, java.lang.Object> {
      return getIteratedValue(2) as gw.util.Pair<java.lang.Integer, java.lang.Object>
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/MBeanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MBeanLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SaveBtn) at MBeanLV.pcf: line 52, column 43
    function action_14 () : void {
      Attribute.commitChangedValue()
    }
    
    // 'action' attribute on Link (id=ResetBtn) at MBeanLV.pcf: line 59, column 43
    function action_17 () : void {
      Attribute.revertChangedValue()
    }
    
    // 'available' attribute on Link (id=SaveBtn) at MBeanLV.pcf: line 52, column 43
    function available_12 () : java.lang.Boolean {
      return Attribute.Changed
    }
    
    // 'value' attribute on TextCell (id=Value_Cell) at MBeanLV.pcf: line 42, column 40
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      Attribute.SimpleValue = __VALUE_TO_SET
    }
    
    // 'editable' attribute on TextCell (id=Value_Cell) at MBeanLV.pcf: line 42, column 40
    function editable_6 () : java.lang.Boolean {
      return Attribute.Editable
    }
    
    // 'value' attribute on TextCell (id=PropertyName_Cell) at MBeanLV.pcf: line 35, column 35
    function valueRoot_4 () : java.lang.Object {
      return Attribute
    }
    
    // 'value' attribute on RowIterator at MBeanLV.pcf: line 68, column 42
    function value_25 () : java.util.List<gw.util.Pair<java.lang.Integer, java.lang.Object>> {
      return Attribute.ArrayValue
    }
    
    // 'value' attribute on TextCell (id=PropertyName_Cell) at MBeanLV.pcf: line 35, column 35
    function value_3 () : java.lang.String {
      return Attribute.Name
    }
    
    // 'value' attribute on TextCell (id=Value_Cell) at MBeanLV.pcf: line 42, column 40
    function value_7 () : java.lang.Object {
      return Attribute.SimpleValue
    }
    
    // 'visible' attribute on RowIterator at MBeanLV.pcf: line 68, column 42
    function visible_19 () : java.lang.Boolean {
      return Attribute.IsArrayValue
    }
    
    property get Attribute () : gw.api.web.MBeanAttribute {
      return getIteratedValue(1) as gw.api.web.MBeanAttribute
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/MBeanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MBeanLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at MBeanLV.pcf: line 20, column 44
    function initialValue_0 () : gw.plugin.management.GWMBean {
      return GWMBeansData.getBeanByName(GWMBeanName)
    }
    
    // 'sortBy' attribute on IteratorSort at MBeanLV.pcf: line 29, column 24
    function sortBy_1 (Attribute :  gw.api.web.MBeanAttribute) : java.lang.Object {
      return Attribute.Name
    }
    
    // 'value' attribute on TextCell (id=PropertyName_Cell) at MBeanLV.pcf: line 35, column 35
    function sortValue_2 (Attribute :  gw.api.web.MBeanAttribute) : java.lang.Object {
      return Attribute.Name
    }
    
    // 'value' attribute on RowIterator at MBeanLV.pcf: line 26, column 47
    function value_26 () : gw.api.web.MBeanAttribute[] {
      return GWMBeansData.getBeanAttributes(GWMBeanName).map(\ attr -> new gw.api.web.MBeanAttribute(GWMBeansData, GWMBean, attr))
    }
    
    property get BeanCategory () : String {
      return getRequireValue("BeanCategory", 0) as String
    }
    
    property set BeanCategory ($arg :  String) {
      setRequireValue("BeanCategory", 0, $arg)
    }
    
    property get GWMBean () : gw.plugin.management.GWMBean {
      return getVariableValue("GWMBean", 0) as gw.plugin.management.GWMBean
    }
    
    property set GWMBean ($arg :  gw.plugin.management.GWMBean) {
      setVariableValue("GWMBean", 0, $arg)
    }
    
    property get GWMBeanName () : String {
      return getRequireValue("GWMBeanName", 0) as String
    }
    
    property set GWMBeanName ($arg :  String) {
      setRequireValue("GWMBeanName", 0, $arg)
    }
    
    property get GWMBeansData () : gw.api.tools.MBeansData {
      return getRequireValue("GWMBeansData", 0) as gw.api.tools.MBeansData
    }
    
    property set GWMBeansData ($arg :  gw.api.tools.MBeansData) {
      setRequireValue("GWMBeansData", 0, $arg)
    }
    
    
  }
  
  
}