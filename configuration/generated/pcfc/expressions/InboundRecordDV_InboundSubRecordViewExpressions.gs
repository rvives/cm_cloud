package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordDV.InboundSubRecordView.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundRecordDV_InboundSubRecordViewExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordDV.InboundSubRecordView.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundRecordDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=InboundRecordDVContent_Input) at InboundRecordDV.InboundSubRecordView.pcf: line 27, column 31
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      view.Content = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at InboundRecordDV.InboundSubRecordView.pcf: line 15, column 36
    function initialValue_0 () : InboundSubRecordView {
      return subrecord as InboundSubRecordView
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLineNumber_Input) at InboundRecordDV.InboundSubRecordView.pcf: line 21, column 40
    function valueRoot_2 () : java.lang.Object {
      return view
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLineNumber_Input) at InboundRecordDV.InboundSubRecordView.pcf: line 21, column 40
    function value_1 () : java.lang.Integer {
      return view.LineNumber
    }
    
    // 'value' attribute on TextAreaInput (id=InboundRecordDVContent_Input) at InboundRecordDV.InboundSubRecordView.pcf: line 27, column 31
    function value_4 () : java.lang.String {
      return view.Content
    }
    
    property get subrecord () : KeyableBean {
      return getRequireValue("subrecord", 0) as KeyableBean
    }
    
    property set subrecord ($arg :  KeyableBean) {
      setRequireValue("subrecord", 0, $arg)
    }
    
    property get view () : InboundSubRecordView {
      return getVariableValue("view", 0) as InboundSubRecordView
    }
    
    property set view ($arg :  InboundSubRecordView) {
      setVariableValue("view", 0, $arg)
    }
    
    
  }
  
  
}