package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/RuntimeEnvironmentInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuntimeEnvironmentInfoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/RuntimeEnvironmentInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=systemproperties_key_Cell) at RuntimeEnvironmentInfo.pcf: line 79, column 51
    function valueRoot_13 () : java.lang.Object {
      return entry
    }
    
    // 'value' attribute on TextCell (id=systemproperties_key_Cell) at RuntimeEnvironmentInfo.pcf: line 79, column 51
    function value_12 () : java.lang.Object {
      return entry.Key
    }
    
    // 'value' attribute on TextCell (id=systemproperties_value_Cell) at RuntimeEnvironmentInfo.pcf: line 85, column 34
    function value_15 () : java.lang.Object {
      return entry.Value
    }
    
    property get entry () : java.util.Map.Entry<java.lang.Object, java.lang.Object> {
      return getIteratedValue(2) as java.util.Map.Entry<java.lang.Object, java.lang.Object>
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/RuntimeEnvironmentInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EnvironmentVars_key_Cell) at RuntimeEnvironmentInfo.pcf: line 109, column 42
    function valueRoot_22 () : java.lang.Object {
      return entry
    }
    
    // 'value' attribute on TextCell (id=EnvironmentVars_key_Cell) at RuntimeEnvironmentInfo.pcf: line 109, column 42
    function value_21 () : java.lang.String {
      return entry.First
    }
    
    // 'value' attribute on TextCell (id=EnvironmentVars_value_Cell) at RuntimeEnvironmentInfo.pcf: line 114, column 34
    function value_24 () : java.lang.String {
      return entry.Second
    }
    
    property get entry () : gw.util.Pair<String, String> {
      return getIteratedValue(2) as gw.util.Pair<String, String>
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/RuntimeEnvironmentInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=versionproperties_key_Cell) at RuntimeEnvironmentInfo.pcf: line 49, column 51
    function value_5 () : java.lang.Object {
      return key
    }
    
    // 'value' attribute on TextCell (id=versionproperties_value_Cell) at RuntimeEnvironmentInfo.pcf: line 54, column 51
    function value_7 () : java.lang.Object {
      return PageHelper.getVersionPropertyValue(key as String)
    }
    
    property get key () : java.lang.Object {
      return getIteratedValue(2) as java.lang.Object
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/RuntimeEnvironmentInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuntimeEnvironmentInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'parent' attribute on Page (id=RuntimeEnvironmentInfo) at RuntimeEnvironmentInfo.pcf: line 9, column 97
    static function parent_30 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    override property get CurrentLocation () : pcf.RuntimeEnvironmentInfo {
      return super.CurrentLocation as pcf.RuntimeEnvironmentInfo
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/RuntimeEnvironmentInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends RuntimeEnvironmentInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=RuntimeEnvironmentInfo_Download) at RuntimeEnvironmentInfo.pcf: line 25, column 64
    function action_2 () : void {
      PageHelper.download()
    }
    
    // 'initialValue' attribute on Variable at RuntimeEnvironmentInfo.pcf: line 14, column 63
    function initialValue_0 () : gw.api.tools.RuntimeEnvironmentInfoPageHelper {
      return new gw.api.tools.RuntimeEnvironmentInfoPageHelper()
    }
    
    // 'initialValue' attribute on Variable at RuntimeEnvironmentInfo.pcf: line 18, column 34
    function initialValue_1 () : java.lang.String {
      return PageHelper.SystemInfo
    }
    
    // 'value' attribute on TextCell (id=systemproperties_key_Cell) at RuntimeEnvironmentInfo.pcf: line 79, column 51
    function sortValue_10 (entry :  java.util.Map.Entry<java.lang.Object, java.lang.Object>) : java.lang.Object {
      return entry.Key
    }
    
    // 'value' attribute on TextCell (id=systemproperties_value_Cell) at RuntimeEnvironmentInfo.pcf: line 85, column 34
    function sortValue_11 (entry :  java.util.Map.Entry<java.lang.Object, java.lang.Object>) : java.lang.Object {
      return entry.Value
    }
    
    // 'value' attribute on TextCell (id=EnvironmentVars_key_Cell) at RuntimeEnvironmentInfo.pcf: line 109, column 42
    function sortValue_19 (entry :  gw.util.Pair<String, String>) : java.lang.Object {
      return entry.First
    }
    
    // 'value' attribute on TextCell (id=EnvironmentVars_value_Cell) at RuntimeEnvironmentInfo.pcf: line 114, column 34
    function sortValue_20 (entry :  gw.util.Pair<String, String>) : java.lang.Object {
      return entry.Second
    }
    
    // 'value' attribute on TextCell (id=versionproperties_key_Cell) at RuntimeEnvironmentInfo.pcf: line 49, column 51
    function sortValue_3 (key :  java.lang.Object) : java.lang.Object {
      return key
    }
    
    // 'value' attribute on TextCell (id=versionproperties_value_Cell) at RuntimeEnvironmentInfo.pcf: line 54, column 51
    function sortValue_4 (key :  java.lang.Object) : java.lang.Object {
      return PageHelper.getVersionPropertyValue(key as String)
    }
    
    // 'value' attribute on RowIterator (id=systemproperties) at RuntimeEnvironmentInfo.pcf: line 72, column 93
    function value_18 () : java.util.Map.Entry<java.lang.Object, java.lang.Object>[] {
      return java.lang.System.getProperties().entrySet().toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=EnvironmentVars) at RuntimeEnvironmentInfo.pcf: line 103, column 86
    function value_27 () : java.util.List<gw.util.Pair<String, String>> {
      return PageHelper.EnvVars
    }
    
    // 'value' attribute on TextAreaInput (id=SystemDetailsTextBox_Input) at RuntimeEnvironmentInfo.pcf: line 124, column 36
    function value_28 () : java.lang.String {
      return systemDetails
    }
    
    // 'value' attribute on RowIterator (id=versionproperties) at RuntimeEnvironmentInfo.pcf: line 42, column 48
    function value_9 () : java.lang.Object[] {
      return PageHelper.getVersionPropertyKeys()
    }
    
    property get PageHelper () : gw.api.tools.RuntimeEnvironmentInfoPageHelper {
      return getVariableValue("PageHelper", 1) as gw.api.tools.RuntimeEnvironmentInfoPageHelper
    }
    
    property set PageHelper ($arg :  gw.api.tools.RuntimeEnvironmentInfoPageHelper) {
      setVariableValue("PageHelper", 1, $arg)
    }
    
    property get systemDetails () : java.lang.String {
      return getVariableValue("systemDetails", 1) as java.lang.String
    }
    
    property set systemDetails ($arg :  java.lang.String) {
      setVariableValue("systemDetails", 1, $arg)
    }
    
    
  }
  
  
}