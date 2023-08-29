package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordDV.InboundRecordView.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundRecordDV_InboundRecordViewExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordDV.InboundRecordView.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundRecordDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=InboundRecordDVContent_Input) at InboundRecordDV.InboundRecordView.pcf: line 44, column 30
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      view.Content = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at InboundRecordDV.InboundRecordView.pcf: line 15, column 33
    function initialValue_0 () : InboundRecordView {
      return record as InboundRecordView
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLineNumber_Input) at InboundRecordDV.InboundRecordView.pcf: line 21, column 26
    function valueRoot_2 () : java.lang.Object {
      return view
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLineNumber_Input) at InboundRecordDV.InboundRecordView.pcf: line 21, column 26
    function value_1 () : int {
      return view.LineNumber
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLastModifiedUser_Input) at InboundRecordDV.InboundRecordView.pcf: line 34, column 34
    function value_11 () : java.lang.String {
      return view.UpdateUser
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVErrorMessage_Input) at InboundRecordDV.InboundRecordView.pcf: line 38, column 36
    function value_14 () : java.lang.String {
      return view.ErrorMessage
    }
    
    // 'value' attribute on TextAreaInput (id=InboundRecordDVContent_Input) at InboundRecordDV.InboundRecordView.pcf: line 44, column 30
    function value_17 () : java.lang.String {
      return view.Content
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVHandlerName_Input) at InboundRecordDV.InboundRecordView.pcf: line 25, column 30
    function value_4 () : java.lang.String {
      return view.Config
    }
    
    // 'value' attribute on TypeKeyInput (id=InboundRecordDVStatus_Input) at InboundRecordDV.InboundRecordView.pcf: line 30, column 42
    function value_7 () : InboundRecordStatus {
      return view.Status
    }
    
    // 'valueType' attribute on TypeKeyInput (id=InboundRecordDVStatus_Input) at InboundRecordDV.InboundRecordView.pcf: line 30, column 42
    function verifyValueType_10 () : void {
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
    
    property get view () : InboundRecordView {
      return getVariableValue("view", 0) as InboundRecordView
    }
    
    property set view ($arg :  InboundRecordView) {
      setVariableValue("view", 0, $arg)
    }
    
    
  }
  
  
}