package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/IndicateExistenceDocumentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IndicateExistenceDocumentScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/IndicateExistenceDocumentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IndicateExistenceDocumentScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'columns' attribute on Layout at IndicateExistenceDocumentScreen.pcf: line 19, column 23
    function columns_1 () : java.lang.Double {
      return 1
    }
    
    // 'def' attribute on InputSetRef at IndicateExistenceDocumentScreen.pcf: line 21, column 127
    function def_onEnter_2 (def :  pcf.DocumentDetailsEditInputSet) : void {
      def.onEnter(new gw.document.DocumentPropertiesCMHelper(document).resetVisibility(true, false))
    }
    
    // 'def' attribute on InputSetRef at IndicateExistenceDocumentScreen.pcf: line 21, column 127
    function def_refreshVariables_3 (def :  pcf.DocumentDetailsEditInputSet) : void {
      def.refreshVariables(new gw.document.DocumentPropertiesCMHelper(document).resetVisibility(true, false))
    }
    
    // EditButtons at IndicateExistenceDocumentScreen.pcf: line 14, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    property get document () : entity.Document {
      return getRequireValue("document", 0) as entity.Document
    }
    
    property set document ($arg :  entity.Document) {
      setRequireValue("document", 0, $arg)
    }
    
    property get documentCMContext () : gw.document.DocumentCMContext {
      return getRequireValue("documentCMContext", 0) as gw.document.DocumentCMContext
    }
    
    property set documentCMContext ($arg :  gw.document.DocumentCMContext) {
      setRequireValue("documentCMContext", 0, $arg)
    }
    
    
  }
  
  
}