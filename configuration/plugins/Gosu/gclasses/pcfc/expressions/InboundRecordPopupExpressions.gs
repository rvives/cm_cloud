package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundRecordPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundRecordPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundRecordPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (bean :  KeyableBean) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=InboundRecordPopupSkipButton) at InboundRecordPopup.pcf: line 32, column 85
    function action_4 () : void {
      CurrentLocation.startEditing(); (bean as InboundRecord).Status = InboundRecordStatus.TC_SKIPPED; CurrentLocation.commit()
    }
    
    // 'available' attribute on ToolbarButton (id=InboundRecordPopupSkipButton) at InboundRecordPopup.pcf: line 32, column 85
    function available_2 () : java.lang.Boolean {
      return bean typeis InboundRecord and (bean as InboundRecord).Status == InboundRecordStatus.TC_ERROR
    }
    
    // 'beforeCommit' attribute on Popup (id=InboundRecordPopup) at InboundRecordPopup.pcf: line 10, column 163
    function beforeCommit_14 (pickedValue :  java.lang.Object) : void {
      updateChanges()
    }
    
    // 'canEdit' attribute on Popup (id=InboundRecordPopup) at InboundRecordPopup.pcf: line 10, column 163
    function canEdit_15 () : java.lang.Boolean {
      return perm.System.editinboundfiles
    }
    
    // 'canVisit' attribute on Popup (id=InboundRecordPopup) at InboundRecordPopup.pcf: line 10, column 163
    static function canVisit_16 (bean :  KeyableBean) : java.lang.Boolean {
      return perm.System.viewinboundfiles
    }
    
    // 'def' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function def_onEnter_11 (def :  pcf.InboundRecordDV_InboundSubRecordView) : void {
      def.onEnter(bean)
    }
    
    // 'def' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function def_onEnter_5 (def :  pcf.InboundRecordDV_InboundRecord) : void {
      def.onEnter(bean)
    }
    
    // 'def' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function def_onEnter_7 (def :  pcf.InboundRecordDV_InboundRecordView) : void {
      def.onEnter(bean)
    }
    
    // 'def' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function def_onEnter_9 (def :  pcf.InboundRecordDV_InboundSubRecord) : void {
      def.onEnter(bean)
    }
    
    // 'def' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function def_refreshVariables_10 (def :  pcf.InboundRecordDV_InboundSubRecord) : void {
      def.refreshVariables(bean)
    }
    
    // 'def' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function def_refreshVariables_12 (def :  pcf.InboundRecordDV_InboundSubRecordView) : void {
      def.refreshVariables(bean)
    }
    
    // 'def' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function def_refreshVariables_6 (def :  pcf.InboundRecordDV_InboundRecord) : void {
      def.refreshVariables(bean)
    }
    
    // 'def' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function def_refreshVariables_8 (def :  pcf.InboundRecordDV_InboundRecordView) : void {
      def.refreshVariables(bean)
    }
    
    // 'initialValue' attribute on Variable at InboundRecordPopup.pcf: line 19, column 23
    function initialValue_0 () : boolean {
      return bean typeis InboundRecord ? bean.isEditable() : (bean as InboundSubRecord).isEditable()
    }
    
    // EditButtons at InboundRecordPopup.pcf: line 25, column 25
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on PanelRef at InboundRecordPopup.pcf: line 23, column 48
    function mode_13 () : java.lang.Object {
      return bean.IntrinsicType.RelativeName
    }
    
    // 'title' attribute on Popup (id=InboundRecordPopup) at InboundRecordPopup.pcf: line 10, column 163
    static function title_17 (bean :  KeyableBean) : java.lang.Object {
      return bean typeis InboundRecord ? DisplayKey.get("InboundFile.Edit.Record.Title") : DisplayKey.get("InboundFile.Edit.Subrecord.Title") 
    }
    
    // 'visible' attribute on ToolbarButton (id=InboundRecordPopupSkipButton) at InboundRecordPopup.pcf: line 32, column 85
    function visible_3 () : java.lang.Boolean {
      return bean typeis InboundRecord and not CurrentLocation.InEditMode
    }
    
    override property get CurrentLocation () : pcf.InboundRecordPopup {
      return super.CurrentLocation as pcf.InboundRecordPopup
    }
    
    property get bean () : KeyableBean {
      return getVariableValue("bean", 0) as KeyableBean
    }
    
    property set bean ($arg :  KeyableBean) {
      setVariableValue("bean", 0, $arg)
    }
    
    property get editable () : boolean {
      return getVariableValue("editable", 0) as java.lang.Boolean
    }
    
    property set editable ($arg :  boolean) {
      setVariableValue("editable", 0, $arg)
    }
    
    
    function updateChanges() {
      if (bean.isFieldChanged("Content")) {
        if (bean typeis InboundRecord) {
          bean.Status = InboundRecordStatus.TC_PENDING
        }
    	else if(bean typeis InboundSubRecord) {
          bean.InboundRecord.Status = InboundRecordStatus.TC_PENDING
        }
      }
    }
        
    
    
  }
  
  
}