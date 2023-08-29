package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactHistoryDetailScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactHistoryDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ContactHistoryDetailScreen.pcf: line 12, column 40
    function def_onEnter_0 (def :  pcf.ContactHistoryDV) : void {
      def.onEnter(history)
    }
    
    // 'def' attribute on PanelRef at ContactHistoryDetailScreen.pcf: line 15, column 53
    function def_onEnter_3 (def :  pcf.HistoryTrackedChangesLV) : void {
      def.onEnter(history)
    }
    
    // 'def' attribute on PanelRef at ContactHistoryDetailScreen.pcf: line 12, column 40
    function def_refreshVariables_1 (def :  pcf.ContactHistoryDV) : void {
      def.refreshVariables(history)
    }
    
    // 'def' attribute on PanelRef at ContactHistoryDetailScreen.pcf: line 15, column 53
    function def_refreshVariables_4 (def :  pcf.HistoryTrackedChangesLV) : void {
      def.refreshVariables(history)
    }
    
    // 'visible' attribute on PanelRef at ContactHistoryDetailScreen.pcf: line 15, column 53
    function visible_2 () : java.lang.Boolean {
      return history.TrackedChanges.Count > 0
    }
    
    property get history () : ContactHistory {
      return getRequireValue("history", 0) as ContactHistory
    }
    
    property set history ($arg :  ContactHistory) {
      setRequireValue("history", 0, $arg)
    }
    
    
  }
  
  
}