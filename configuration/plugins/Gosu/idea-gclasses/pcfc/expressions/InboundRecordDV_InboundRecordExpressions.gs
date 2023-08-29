package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordDV.InboundRecord.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundRecordDV_InboundRecordExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordDV.InboundRecord.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundRecordDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=InboundRecordDVContent_Input) at InboundRecordDV.InboundRecord.pcf: line 39, column 51
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      (record as InboundRecord).Content = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLineNumber_Input) at InboundRecordDV.InboundRecord.pcf: line 16, column 26
    function valueRoot_1 () : java.lang.Object {
      return (record as InboundRecord)
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLastModifiedUser_Input) at InboundRecordDV.InboundRecord.pcf: line 29, column 67
    function valueRoot_11 () : java.lang.Object {
      return (record as InboundRecord).UpdateUser
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLineNumber_Input) at InboundRecordDV.InboundRecord.pcf: line 16, column 26
    function value_0 () : int {
      return (record as InboundRecord).LineNumber
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLastModifiedUser_Input) at InboundRecordDV.InboundRecord.pcf: line 29, column 67
    function value_10 () : java.lang.String {
      return (record as InboundRecord).UpdateUser.DisplayName
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVErrorMessage_Input) at InboundRecordDV.InboundRecord.pcf: line 33, column 57
    function value_13 () : java.lang.String {
      return (record as InboundRecord).ErrorMessage
    }
    
    // 'value' attribute on TextAreaInput (id=InboundRecordDVContent_Input) at InboundRecordDV.InboundRecord.pcf: line 39, column 51
    function value_16 () : java.lang.String {
      return (record as InboundRecord).Content
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVHandlerName_Input) at InboundRecordDV.InboundRecord.pcf: line 20, column 51
    function value_3 () : java.lang.String {
      return (record as InboundRecord).Config
    }
    
    // 'value' attribute on TypeKeyInput (id=InboundRecordDVStatus_Input) at InboundRecordDV.InboundRecord.pcf: line 25, column 42
    function value_6 () : InboundRecordStatus {
      return (record as InboundRecord).Status
    }
    
    // 'valueType' attribute on TypeKeyInput (id=InboundRecordDVStatus_Input) at InboundRecordDV.InboundRecord.pcf: line 25, column 42
    function verifyValueType_9 () : void {
      var __valueTypeArg : InboundRecordStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get record () : KeyableBean {
      return getRequireValue("record", 0) as KeyableBean
    }
    
    property set record ($arg :  KeyableBean) {
      setRequireValue("record", 0, $arg)
    }
    
    
  }
  
  
}