package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/RejectChangePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RejectChangePopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/pendingchanges/RejectChangePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RejectChangePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contactChange :  PendingContactChange) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at RejectChangePopup.pcf: line 21, column 101
    function action_0 () : void {
      gw.api.web.contact.PendingContactChangeUtil.rejectChange(contactChange, CurrentLocation)
    }
    
    // 'value' attribute on TypeKeyInput (id=RejectReason_Input) at RejectChangePopup.pcf: line 39, column 58
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      contactChange.Resolution = (__VALUE_TO_SET as typekey.ContactChangeResolution)
    }
    
    // 'value' attribute on TextAreaInput (id=RejectReasonText_Input) at RejectChangePopup.pcf: line 45, column 57
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      contactChange.ResolutionReasonText = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyInput (id=RejectReason_Input) at RejectChangePopup.pcf: line 39, column 58
    function filter_5 (VALUE :  typekey.ContactChangeResolution, VALUES :  typekey.ContactChangeResolution[]) : java.util.List<typekey.ContactChangeResolution> {
      return gw.web.PendingChangesWebUtil.rejectionResolutionFilter(VALUES)
    }
    
    // EditButtons at RejectChangePopup.pcf: line 24, column 34
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TypeKeyInput (id=RejectReason_Input) at RejectChangePopup.pcf: line 39, column 58
    function valueRoot_4 () : java.lang.Object {
      return contactChange
    }
    
    // 'value' attribute on TypeKeyInput (id=RejectReason_Input) at RejectChangePopup.pcf: line 39, column 58
    function value_2 () : typekey.ContactChangeResolution {
      return contactChange.Resolution
    }
    
    // 'value' attribute on TextAreaInput (id=RejectReasonText_Input) at RejectChangePopup.pcf: line 45, column 57
    function value_7 () : java.lang.String {
      return contactChange.ResolutionReasonText
    }
    
    override property get CurrentLocation () : pcf.RejectChangePopup {
      return super.CurrentLocation as pcf.RejectChangePopup
    }
    
    property get contactChange () : PendingContactChange {
      return getVariableValue("contactChange", 0) as PendingContactChange
    }
    
    property set contactChange ($arg :  PendingContactChange) {
      setVariableValue("contactChange", 0, $arg)
    }
    
    
  }
  
  
}