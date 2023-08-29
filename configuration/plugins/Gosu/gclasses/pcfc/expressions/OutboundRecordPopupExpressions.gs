package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundRecordPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OutboundRecordPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundRecordPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OutboundRecordPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (bean :  OutboundRecord) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=OutboundRecordPopupSkipButton) at OutboundRecordPopup.pcf: line 27, column 86
    function action_3 () : void {
      CurrentLocation.startEditing(); bean.Status = OutboundRecordStatus.TC_SKIPPED; bean.PurgeDate = gw.api.util.DateUtil.currentDate().addWeeks(1) CurrentLocation.commit()
    }
    
    // 'available' attribute on ToolbarButton (id=OutboundRecordPopupSkipButton) at OutboundRecordPopup.pcf: line 27, column 86
    function available_1 () : java.lang.Boolean {
      return (bean as OutboundRecord).Status == OutboundRecordStatus.TC_ERROR && perm.System.outboundfiles
    }
    
    // 'beforeCommit' attribute on Popup (id=OutboundRecordPopup) at OutboundRecordPopup.pcf: line 10, column 74
    function beforeCommit_7 (pickedValue :  java.lang.Object) : void {
      updateChanges()
    }
    
    // 'canEdit' attribute on Popup (id=OutboundRecordPopup) at OutboundRecordPopup.pcf: line 10, column 74
    function canEdit_8 () : java.lang.Boolean {
      return perm.System.editoutboundfiles
    }
    
    // 'canVisit' attribute on Popup (id=OutboundRecordPopup) at OutboundRecordPopup.pcf: line 10, column 74
    static function canVisit_9 (bean :  OutboundRecord) : java.lang.Boolean {
      return perm.System.viewoutboundfiles
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=OutboundRecordPopupSkipButton) at OutboundRecordPopup.pcf: line 27, column 86
    function confirmMessage_4 () : java.lang.String {
      return DisplayKey.get("OutboundRecord.Skip.ConfirmationMessage", gw.api.util.DateUtil.currentDate().addWeeks(1).formatDate(gw.i18n.DateTimeFormat.MEDIUM))
    }
    
    // 'def' attribute on PanelRef at OutboundRecordPopup.pcf: line 18, column 38
    function def_onEnter_5 (def :  pcf.OutboundRecordDV) : void {
      def.onEnter(bean)
    }
    
    // 'def' attribute on PanelRef at OutboundRecordPopup.pcf: line 18, column 38
    function def_refreshVariables_6 (def :  pcf.OutboundRecordDV) : void {
      def.refreshVariables(bean)
    }
    
    // EditButtons at OutboundRecordPopup.pcf: line 20, column 25
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'visible' attribute on ToolbarButton (id=OutboundRecordPopupSkipButton) at OutboundRecordPopup.pcf: line 27, column 86
    function visible_2 () : java.lang.Boolean {
      return bean typeis OutboundRecord and not CurrentLocation.InEditMode
    }
    
    override property get CurrentLocation () : pcf.OutboundRecordPopup {
      return super.CurrentLocation as pcf.OutboundRecordPopup
    }
    
    property get bean () : OutboundRecord {
      return getVariableValue("bean", 0) as OutboundRecord
    }
    
    property set bean ($arg :  OutboundRecord) {
      setVariableValue("bean", 0, $arg)
    }
    
    
        function updateChanges() {
          if (bean.isFieldChanged("Content")) {
              bean.Status = OutboundRecordStatus.TC_PENDING
            }
          }
        
    
    
  }
  
  
}