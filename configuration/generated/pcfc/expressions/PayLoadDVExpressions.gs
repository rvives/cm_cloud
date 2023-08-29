package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/messaging/PayLoadDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PayLoadDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/messaging/PayLoadDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PayLoadDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=Payload_Input) at PayLoadDV.pcf: line 23, column 34
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Message.Payload = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=Response_Input) at PayLoadDV.pcf: line 16, column 43
    function valueRoot_1 () : java.lang.Object {
      return Message
    }
    
    // 'value' attribute on TextAreaInput (id=Response_Input) at PayLoadDV.pcf: line 16, column 43
    function value_0 () : java.lang.String {
      return Message.ErrorDescription
    }
    
    // 'value' attribute on TextAreaInput (id=Payload_Input) at PayLoadDV.pcf: line 23, column 34
    function value_3 () : java.lang.String {
      return Message.Payload
    }
    
    property get Message () : Message {
      return getRequireValue("Message", 0) as Message
    }
    
    property set Message ($arg :  Message) {
      setRequireValue("Message", 0, $arg)
    }
    
    
  }
  
  
}