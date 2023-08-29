package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/NewInboundS3ConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewInboundS3ConfigPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/NewInboundS3ConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewInboundS3ConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=NewInboundS3ConfigPopup) at NewInboundS3ConfigPopup.pcf: line 10, column 64
    function beforeCommit_21 (pickedValue :  java.lang.Object) : void {
      managedS3InboundConfigUtil.fillManagedValues(inboundFileConfig)
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewInboundS3ConfigPopup.pcf: line 52, column 57
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewInboundS3ConfigPopup.pcf: line 59, column 44
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundS3ConfigPopup.pcf: line 37, column 45
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigChunkSize_Input) at NewInboundS3ConfigPopup.pcf: line 44, column 44
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.ChunkSize = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'initialValue' attribute on Variable at NewInboundS3ConfigPopup.pcf: line 16, column 42
    function initialValue_0 () : entity.InboundS3FileConfig {
      return new InboundS3FileConfig()
    }
    
    // 'initialValue' attribute on Variable at NewInboundS3ConfigPopup.pcf: line 20, column 61
    function initialValue_1 () : gw.web.inboundfile.ManagedS3InboundConfigUtil {
      return new gw.web.inboundfile.ManagedS3InboundConfigUtil()
    }
    
    // EditButtons at NewInboundS3ConfigPopup.pcf: line 25, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on TextInput (id=HandlerClass_Input) at NewInboundS3ConfigPopup.pcf: line 52, column 57
    function validationExpression_11 () : java.lang.Object {
      return gw.inboundfile.InboundFileUtils.validateFileHandlerClass(inboundFileConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundS3ConfigPopup.pcf: line 37, column 45
    function valueRoot_5 () : java.lang.Object {
      return inboundFileConfig
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewInboundS3ConfigPopup.pcf: line 52, column 57
    function value_12 () : java.lang.String {
      return inboundFileConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewInboundS3ConfigPopup.pcf: line 59, column 44
    function value_17 () : java.lang.Integer {
      return inboundFileConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundS3ConfigPopup.pcf: line 37, column 45
    function value_3 () : java.lang.String {
      return inboundFileConfig.Name
    }
    
    // 'value' attribute on TextInput (id=ConfigChunkSize_Input) at NewInboundS3ConfigPopup.pcf: line 44, column 44
    function value_7 () : java.lang.Integer {
      return inboundFileConfig.ChunkSize
    }
    
    override property get CurrentLocation () : pcf.NewInboundS3ConfigPopup {
      return super.CurrentLocation as pcf.NewInboundS3ConfigPopup
    }
    
    property get inboundFileConfig () : entity.InboundS3FileConfig {
      return getVariableValue("inboundFileConfig", 0) as entity.InboundS3FileConfig
    }
    
    property set inboundFileConfig ($arg :  entity.InboundS3FileConfig) {
      setVariableValue("inboundFileConfig", 0, $arg)
    }
    
    property get managedS3InboundConfigUtil () : gw.web.inboundfile.ManagedS3InboundConfigUtil {
      return getVariableValue("managedS3InboundConfigUtil", 0) as gw.web.inboundfile.ManagedS3InboundConfigUtil
    }
    
    property set managedS3InboundConfigUtil ($arg :  gw.web.inboundfile.ManagedS3InboundConfigUtil) {
      setVariableValue("managedS3InboundConfigUtil", 0, $arg)
    }
    
    
  }
  
  
}