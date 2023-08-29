package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/outboundfile/NewOutboundS3ConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewOutboundS3ConfigPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/NewOutboundS3ConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewOutboundS3ConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 1
    }
    
    static function __constructorIndex (outboundFileConfig :  OutboundFileS3Config) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=NewOutboundS3ConfigPopup) at NewOutboundS3ConfigPopup.pcf: line 10, column 65
    function beforeCommit_25 (pickedValue :  java.lang.Object) : void {
      managedS3OutboundConfigUtil.fillManagedValues(outboundFileConfig)
    }
    
    // 'value' attribute on TextInput (id=ConfigExtension_Input) at NewOutboundS3ConfigPopup.pcf: line 51, column 51
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Extension = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewOutboundS3ConfigPopup.pcf: line 59, column 58
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewOutboundS3ConfigPopup.pcf: line 66, column 44
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundS3ConfigPopup.pcf: line 39, column 46
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigPrefix_Input) at NewOutboundS3ConfigPopup.pcf: line 45, column 48
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Prefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at NewOutboundS3ConfigPopup.pcf: line 18, column 36
    function initialValue_0 () : OutboundFileS3Config {
      return new OutboundFileS3Config()
    }
    
    // 'initialValue' attribute on Variable at NewOutboundS3ConfigPopup.pcf: line 22, column 63
    function initialValue_1 () : gw.web.outboundfile.ManagedS3OutboundConfigUtil {
      return new gw.web.outboundfile.ManagedS3OutboundConfigUtil()
    }
    
    // EditButtons at NewOutboundS3ConfigPopup.pcf: line 27, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on TextInput (id=HandlerClass_Input) at NewOutboundS3ConfigPopup.pcf: line 59, column 58
    function validationExpression_15 () : java.lang.Object {
      return com.guidewire.outboundfile.batch.file.OutboundFileUtils.validateFileHandlerAndDisplayError(outboundFileConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundS3ConfigPopup.pcf: line 39, column 46
    function valueRoot_5 () : java.lang.Object {
      return outboundFileConfig
    }
    
    // 'value' attribute on TextInput (id=ConfigExtension_Input) at NewOutboundS3ConfigPopup.pcf: line 51, column 51
    function value_11 () : java.lang.String {
      return outboundFileConfig.Extension
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewOutboundS3ConfigPopup.pcf: line 59, column 58
    function value_16 () : java.lang.String {
      return outboundFileConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewOutboundS3ConfigPopup.pcf: line 66, column 44
    function value_21 () : java.lang.Integer {
      return outboundFileConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundS3ConfigPopup.pcf: line 39, column 46
    function value_3 () : java.lang.String {
      return outboundFileConfig.Name
    }
    
    // 'value' attribute on TextInput (id=ConfigPrefix_Input) at NewOutboundS3ConfigPopup.pcf: line 45, column 48
    function value_7 () : java.lang.String {
      return outboundFileConfig.Prefix
    }
    
    override property get CurrentLocation () : pcf.NewOutboundS3ConfigPopup {
      return super.CurrentLocation as pcf.NewOutboundS3ConfigPopup
    }
    
    property get managedS3OutboundConfigUtil () : gw.web.outboundfile.ManagedS3OutboundConfigUtil {
      return getVariableValue("managedS3OutboundConfigUtil", 0) as gw.web.outboundfile.ManagedS3OutboundConfigUtil
    }
    
    property set managedS3OutboundConfigUtil ($arg :  gw.web.outboundfile.ManagedS3OutboundConfigUtil) {
      setVariableValue("managedS3OutboundConfigUtil", 0, $arg)
    }
    
    property get outboundFileConfig () : OutboundFileS3Config {
      return getVariableValue("outboundFileConfig", 0) as OutboundFileS3Config
    }
    
    property set outboundFileConfig ($arg :  OutboundFileS3Config) {
      setVariableValue("outboundFileConfig", 0, $arg)
    }
    
    
  }
  
  
}