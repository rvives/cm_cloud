package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactHistoryDetailPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactHistoryDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (history :  ContactHistory) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at ContactHistoryDetailPopup.pcf: line 15, column 50
    function def_onEnter_0 (def :  pcf.ContactHistoryDetailScreen) : void {
      def.onEnter(history)
    }
    
    // 'def' attribute on ScreenRef at ContactHistoryDetailPopup.pcf: line 15, column 50
    function def_refreshVariables_1 (def :  pcf.ContactHistoryDetailScreen) : void {
      def.refreshVariables(history)
    }
    
    override property get CurrentLocation () : pcf.ContactHistoryDetailPopup {
      return super.CurrentLocation as pcf.ContactHistoryDetailPopup
    }
    
    property get history () : ContactHistory {
      return getVariableValue("history", 0) as ContactHistory
    }
    
    property set history ($arg :  ContactHistory) {
      setVariableValue("history", 0, $arg)
    }
    
    
  }
  
  
}