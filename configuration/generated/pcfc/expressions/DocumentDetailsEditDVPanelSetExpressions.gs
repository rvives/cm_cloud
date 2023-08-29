package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditDVPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditDVPanelSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditDVPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditDVPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsEditDVPanelSet.pcf: line 18, column 102
    function def_onEnter_1 (def :  pcf.DocumentDetailsEditDV) : void {
      def.onEnter((documentPropertiesCMHelper.resetVisibility(true, true)))
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsEditDVPanelSet.pcf: line 18, column 102
    function def_refreshVariables_2 (def :  pcf.DocumentDetailsEditDV) : void {
      def.refreshVariables((documentPropertiesCMHelper.resetVisibility(true, true)))
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditDVPanelSet.pcf: line 17, column 98
    function initialValue_0 () : gw.document.DocumentPropertiesCMHelper {
      return documentDetailsApplicationHelper as gw.document.DocumentPropertiesCMHelper
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getRequireValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setRequireValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    property get documentPropertiesCMHelper () : gw.document.DocumentPropertiesCMHelper {
      return getVariableValue("documentPropertiesCMHelper", 0) as gw.document.DocumentPropertiesCMHelper
    }
    
    property set documentPropertiesCMHelper ($arg :  gw.document.DocumentPropertiesCMHelper) {
      setVariableValue("documentPropertiesCMHelper", 0, $arg)
    }
    
    property get fromTemplate () : boolean {
      return getRequireValue("fromTemplate", 0) as java.lang.Boolean
    }
    
    property set fromTemplate ($arg :  boolean) {
      setRequireValue("fromTemplate", 0, $arg)
    }
    
    
  }
  
  
}