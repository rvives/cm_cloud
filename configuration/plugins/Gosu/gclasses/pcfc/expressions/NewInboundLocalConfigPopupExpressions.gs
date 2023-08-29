package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/NewInboundLocalConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewInboundLocalConfigPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/NewInboundLocalConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewInboundLocalConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=ConfigArchiveDir_Input) at NewInboundLocalConfigPopup.pcf: line 44, column 52
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.ArchivePath = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigChunkSize_Input) at NewInboundLocalConfigPopup.pcf: line 51, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.ChunkSize = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewInboundLocalConfigPopup.pcf: line 59, column 57
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewInboundLocalConfigPopup.pcf: line 66, column 44
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundLocalConfigPopup.pcf: line 32, column 45
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigInputDir_Input) at NewInboundLocalConfigPopup.pcf: line 38, column 50
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      inboundFileConfig.InputPath = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at NewInboundLocalConfigPopup.pcf: line 15, column 45
    function initialValue_0 () : entity.InboundLocalFileConfig {
      return new InboundLocalFileConfig()
    }
    
    // EditButtons at NewInboundLocalConfigPopup.pcf: line 20, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on TextInput (id=HandlerClass_Input) at NewInboundLocalConfigPopup.pcf: line 59, column 57
    function validationExpression_18 () : java.lang.Object {
      return gw.api.inboundfile.InboundFileUtils.validateFileHandlerClassNoThrow(inboundFileConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundLocalConfigPopup.pcf: line 32, column 45
    function valueRoot_4 () : java.lang.Object {
      return inboundFileConfig
    }
    
    // 'value' attribute on TextInput (id=ConfigArchiveDir_Input) at NewInboundLocalConfigPopup.pcf: line 44, column 52
    function value_10 () : java.lang.String {
      return inboundFileConfig.ArchivePath
    }
    
    // 'value' attribute on TextInput (id=ConfigChunkSize_Input) at NewInboundLocalConfigPopup.pcf: line 51, column 44
    function value_14 () : java.lang.Integer {
      return inboundFileConfig.ChunkSize
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewInboundLocalConfigPopup.pcf: line 59, column 57
    function value_19 () : java.lang.String {
      return inboundFileConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewInboundLocalConfigPopup.pcf: line 32, column 45
    function value_2 () : java.lang.String {
      return inboundFileConfig.Name
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewInboundLocalConfigPopup.pcf: line 66, column 44
    function value_24 () : java.lang.Integer {
      return inboundFileConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextInput (id=ConfigInputDir_Input) at NewInboundLocalConfigPopup.pcf: line 38, column 50
    function value_6 () : java.lang.String {
      return inboundFileConfig.InputPath
    }
    
    override property get CurrentLocation () : pcf.NewInboundLocalConfigPopup {
      return super.CurrentLocation as pcf.NewInboundLocalConfigPopup
    }
    
    property get inboundFileConfig () : entity.InboundLocalFileConfig {
      return getVariableValue("inboundFileConfig", 0) as entity.InboundLocalFileConfig
    }
    
    property set inboundFileConfig ($arg :  entity.InboundLocalFileConfig) {
      setVariableValue("inboundFileConfig", 0, $arg)
    }
    
    
  }
  
  
}