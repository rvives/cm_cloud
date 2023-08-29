package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/WorksetInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorksetInfoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/WorksetInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends WorksetInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WorksetInfo.pcf: line 16, column 45
    function initialValue_0 () : gw.api.config.ConfigWorkset {
      return com.guidewire.pl.system.dependency.PLDependencies.getLcmService().getActiveWorkset()
    }
    
    // 'value' attribute on TextInput (id=Identifier_Input) at WorksetInfo.pcf: line 25, column 43
    function valueRoot_2 () : java.lang.Object {
      return workset
    }
    
    // 'value' attribute on TextInput (id=Identifier_Input) at WorksetInfo.pcf: line 25, column 43
    function value_1 () : java.lang.String {
      return workset.worksetUid
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at WorksetInfo.pcf: line 40, column 43
    function value_10 () : java.lang.String {
      return workset.status
    }
    
    // 'value' attribute on DateInput (id=ActivationDate_Input) at WorksetInfo.pcf: line 46, column 56
    function value_13 () : java.util.Date {
      return workset.getActivationDateAsDate()
    }
    
    // 'value' attribute on TextInput (id=Type_Input) at WorksetInfo.pcf: line 51, column 43
    function value_15 () : java.lang.String {
      return String.valueOf(workset.type)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at WorksetInfo.pcf: line 30, column 43
    function value_4 () : java.lang.String {
      return workset.name
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at WorksetInfo.pcf: line 35, column 43
    function value_7 () : java.lang.String {
      return workset.description
    }
    
    // 'visible' attribute on DetailViewPanel (id=WorksetInfoDV) at WorksetInfo.pcf: line 19, column 47
    function visible_17 () : java.lang.Boolean {
      return !workset.isDefaultWorkset()
    }
    
    // 'visible' attribute on DetailViewPanel (id=NoWorksetDV) at WorksetInfo.pcf: line 56, column 46
    function visible_18 () : java.lang.Boolean {
      return workset.isDefaultWorkset()
    }
    
    property get workset () : gw.api.config.ConfigWorkset {
      return getVariableValue("workset", 1) as gw.api.config.ConfigWorkset
    }
    
    property set workset ($arg :  gw.api.config.ConfigWorkset) {
      setVariableValue("workset", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/WorksetInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorksetInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=WorksetInfo) at WorksetInfo.pcf: line 10, column 87
    static function canVisit_19 () : java.lang.Boolean {
      return com.guidewire.pl.system.dependency.PLDependencies.getLcmService().isEnabled()
    }
    
    // 'parent' attribute on Page (id=WorksetInfo) at WorksetInfo.pcf: line 10, column 87
    static function parent_20 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    override property get CurrentLocation () : pcf.WorksetInfo {
      return super.CurrentLocation as pcf.WorksetInfo
    }
    
    
  }
  
  
}