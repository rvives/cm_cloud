package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/outboundfile/NewOutboundLocalConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewOutboundLocalConfigPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/NewOutboundLocalConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewOutboundLocalConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 1
    }
    
    static function __constructorIndex (outboundFileConfig :  OutboundFileLocalConfig) : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=ConfigPermanentDir_Input) at NewOutboundLocalConfigPopup.pcf: line 46, column 60
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.PermanentDirectory = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigPrefix_Input) at NewOutboundLocalConfigPopup.pcf: line 52, column 48
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Prefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigExtension_Input) at NewOutboundLocalConfigPopup.pcf: line 58, column 51
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Extension = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewOutboundLocalConfigPopup.pcf: line 66, column 58
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewOutboundLocalConfigPopup.pcf: line 73, column 44
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundLocalConfigPopup.pcf: line 34, column 46
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigTemporaryDir_Input) at NewOutboundLocalConfigPopup.pcf: line 40, column 60
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.TemporaryDirectory = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at NewOutboundLocalConfigPopup.pcf: line 17, column 39
    function initialValue_0 () : OutboundFileLocalConfig {
      return new OutboundFileLocalConfig()
    }
    
    // EditButtons at NewOutboundLocalConfigPopup.pcf: line 22, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on TextInput (id=HandlerClass_Input) at NewOutboundLocalConfigPopup.pcf: line 66, column 58
    function validationExpression_22 () : java.lang.Object {
      return gw.api.outboundfile.OutboundFileUtils.validateFileHandlerAndDisplayError(outboundFileConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundLocalConfigPopup.pcf: line 34, column 46
    function valueRoot_4 () : java.lang.Object {
      return outboundFileConfig
    }
    
    // 'value' attribute on TextInput (id=ConfigPermanentDir_Input) at NewOutboundLocalConfigPopup.pcf: line 46, column 60
    function value_10 () : java.lang.String {
      return outboundFileConfig.PermanentDirectory
    }
    
    // 'value' attribute on TextInput (id=ConfigPrefix_Input) at NewOutboundLocalConfigPopup.pcf: line 52, column 48
    function value_14 () : java.lang.String {
      return outboundFileConfig.Prefix
    }
    
    // 'value' attribute on TextInput (id=ConfigExtension_Input) at NewOutboundLocalConfigPopup.pcf: line 58, column 51
    function value_18 () : java.lang.String {
      return outboundFileConfig.Extension
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundLocalConfigPopup.pcf: line 34, column 46
    function value_2 () : java.lang.String {
      return outboundFileConfig.Name
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewOutboundLocalConfigPopup.pcf: line 66, column 58
    function value_23 () : java.lang.String {
      return outboundFileConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewOutboundLocalConfigPopup.pcf: line 73, column 44
    function value_28 () : java.lang.Integer {
      return outboundFileConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextInput (id=ConfigTemporaryDir_Input) at NewOutboundLocalConfigPopup.pcf: line 40, column 60
    function value_6 () : java.lang.String {
      return outboundFileConfig.TemporaryDirectory
    }
    
    override property get CurrentLocation () : pcf.NewOutboundLocalConfigPopup {
      return super.CurrentLocation as pcf.NewOutboundLocalConfigPopup
    }
    
    property get outboundFileConfig () : OutboundFileLocalConfig {
      return getVariableValue("outboundFileConfig", 0) as OutboundFileLocalConfig
    }
    
    property set outboundFileConfig ($arg :  OutboundFileLocalConfig) {
      setVariableValue("outboundFileConfig", 0, $arg)
    }
    
    
  }
  
  
}