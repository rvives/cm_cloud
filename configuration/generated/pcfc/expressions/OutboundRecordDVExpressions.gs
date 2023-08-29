package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundRecordDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OutboundRecordDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundRecordDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OutboundRecordDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=OutboundRecordDVContent_Input) at OutboundRecordDV.pcf: line 38, column 33
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      record.Content = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=OutboundRecordDVCreateDate_Input) at OutboundRecordDV.pcf: line 14, column 36
    function valueRoot_1 () : java.lang.Object {
      return record
    }
    
    // 'value' attribute on TextInput (id=OutboundRecordDVLastModifiedUser_Input) at OutboundRecordDV.pcf: line 28, column 48
    function valueRoot_11 () : java.lang.Object {
      return record.UpdateUser
    }
    
    // 'value' attribute on TypeKeyInput (id=OutboundRecordDVStatus_Input) at OutboundRecordDV.pcf: line 24, column 43
    function valueRoot_7 () : java.lang.Object {
      return (record as OutboundRecord)
    }
    
    // 'value' attribute on DateInput (id=OutboundRecordDVCreateDate_Input) at OutboundRecordDV.pcf: line 14, column 36
    function value_0 () : java.util.Date {
      return record.CreateDate
    }
    
    // 'value' attribute on TextInput (id=OutboundRecordDVLastModifiedUser_Input) at OutboundRecordDV.pcf: line 28, column 48
    function value_10 () : java.lang.String {
      return record.UpdateUser.DisplayName
    }
    
    // 'value' attribute on TextInput (id=OutboundRecordDVErrorMessage_Input) at OutboundRecordDV.pcf: line 32, column 38
    function value_13 () : java.lang.String {
      return record.ErrorMessage
    }
    
    // 'value' attribute on TextAreaInput (id=OutboundRecordDVContent_Input) at OutboundRecordDV.pcf: line 38, column 33
    function value_16 () : java.lang.String {
      return record.Content
    }
    
    // 'value' attribute on TextInput (id=OutboundRecordDVConfig_Input) at OutboundRecordDV.pcf: line 19, column 41
    function value_3 () : OutboundFileConfig {
      return record.Config
    }
    
    // 'value' attribute on TypeKeyInput (id=OutboundRecordDVStatus_Input) at OutboundRecordDV.pcf: line 24, column 43
    function value_6 () : OutboundRecordStatus {
      return (record as OutboundRecord).Status
    }
    
    // 'valueType' attribute on TypeKeyInput (id=OutboundRecordDVStatus_Input) at OutboundRecordDV.pcf: line 24, column 43
    function verifyValueType_9 () : void {
      var __valueTypeArg : OutboundRecordStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get record () : OutboundRecord {
      return getRequireValue("record", 0) as OutboundRecord
    }
    
    property set record ($arg :  OutboundRecord) {
      setRequireValue("record", 0, $arg)
    }
    
    
  }
  
  
}