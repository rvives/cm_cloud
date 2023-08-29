package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/messaging/MessagingDestinationControlList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MessagingDestinationControlListExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/messaging/MessagingDestinationControlList.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MessagingDestinationControlListExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=MessagingDestinationControlList_RestartMessagingEngineButton) at MessagingDestinationControlList.pcf: line 41, column 27
    function action_3 () : void {
      gw.api.admin.MessagingUtil.restartMessageEngine()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MessagingDestinationControlList_SuspendButton) at MessagingDestinationControlList.pcf: line 20, column 27
    function allCheckedRowsAction_0 (CheckedValues :  gw.api.admin.MessageDestinationInfo[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.MessagingUtil.suspendDestinations(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MessagingDestinationControlList_ResumeButton) at MessagingDestinationControlList.pcf: line 27, column 27
    function allCheckedRowsAction_1 (CheckedValues :  gw.api.admin.MessageDestinationInfo[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.MessagingUtil.resumeDestinations(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MessagingDestinationControlList_RestartButton) at MessagingDestinationControlList.pcf: line 34, column 27
    function allCheckedRowsAction_2 (CheckedValues :  gw.api.admin.MessageDestinationInfo[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.MessagingUtil.restartDestinations(CheckedValues, 0)
    }
    
    // 'canVisit' attribute on Page (id=MessagingDestinationControlList) at MessagingDestinationControlList.pcf: line 9, column 84
    static function canVisit_6 () : java.lang.Boolean {
      return perm.System.integadmin or perm.System.eventmessageview
    }
    
    // 'def' attribute on PanelRef at MessagingDestinationControlList.pcf: line 13, column 48
    function def_onEnter_4 (def :  pcf.MessagingDestinationsControlLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at MessagingDestinationControlList.pcf: line 13, column 48
    function def_refreshVariables_5 (def :  pcf.MessagingDestinationsControlLV) : void {
      def.refreshVariables()
    }
    
    // 'parent' attribute on Page (id=MessagingDestinationControlList) at MessagingDestinationControlList.pcf: line 9, column 84
    static function parent_7 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.MessagingDestinationControlList {
      return super.CurrentLocation as pcf.MessagingDestinationControlList
    }
    
    
  }
  
  
}