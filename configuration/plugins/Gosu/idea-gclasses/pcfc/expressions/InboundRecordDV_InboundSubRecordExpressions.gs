package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordDV.InboundSubRecord.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundRecordDV_InboundSubRecordExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordDV.InboundSubRecord.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundRecordDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=InboundRecordDVContent_Input) at InboundRecordDV.InboundSubRecord.pcf: line 22, column 58
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      (subrecord as InboundSubRecord).Content = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLineNumber_Input) at InboundRecordDV.InboundSubRecord.pcf: line 16, column 40
    function valueRoot_1 () : java.lang.Object {
      return (subrecord as InboundSubRecord)
    }
    
    // 'value' attribute on TextInput (id=InboundRecordDVLineNumber_Input) at InboundRecordDV.InboundSubRecord.pcf: line 16, column 40
    function value_0 () : java.lang.Integer {
      return (subrecord as InboundSubRecord).LineNumber
    }
    
    // 'value' attribute on TextAreaInput (id=InboundRecordDVContent_Input) at InboundRecordDV.InboundSubRecord.pcf: line 22, column 58
    function value_3 () : java.lang.String {
      return (subrecord as InboundSubRecord).Content
    }
    
    property get subrecord () : KeyableBean {
      return getRequireValue("subrecord", 0) as KeyableBean
    }
    
    property set subrecord ($arg :  KeyableBean) {
      setRequireValue("subrecord", 0, $arg)
    }
    
    
  }
  
  
}