package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/document/DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentTemplateContextObjectIteratorInputSet_noticeofofferofmodoraltworkdwcad1013353pdfExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/document/DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentTemplateContextObjectIteratorInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on InputSet (id=DocumentTemplateContextObjectIteratorInputSet) at DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf: line 8, column 55
    function editable_7 () : java.lang.Boolean {
      return documentApplicationContext.DocumentCreationReadOnly
    }
    
    // 'value' attribute on InputIterator at DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf: line 20, column 72
    function value_6 () : gw.document.DocumentCreationInfo.DynamicWidgetInfo[] {
      return documentCreationInfo.getDynamicWidgetInformation()
    }
    
    property get documentApplicationContext () : gw.document.DocumentApplicationContext {
      return getRequireValue("documentApplicationContext", 0) as gw.document.DocumentApplicationContext
    }
    
    property set documentApplicationContext ($arg :  gw.document.DocumentApplicationContext) {
      setRequireValue("documentApplicationContext", 0, $arg)
    }
    
    property get documentCreationInfo () : gw.document.DocumentCreationInfo {
      return getRequireValue("documentCreationInfo", 0) as gw.document.DocumentCreationInfo
    }
    
    property set documentCreationInfo ($arg :  gw.document.DocumentCreationInfo) {
      setRequireValue("documentCreationInfo", 0, $arg)
    }
    
    
    function getMode(dynamicWidgetInfo : gw.document.DocumentCreationInfo.DynamicWidgetInfo) : String {
            return dynamicWidgetInfo.Type.toLowerCase();
          }
        
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/document/DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentTemplateContextObjectIteratorInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf: line 24, column 43
    function def_onEnter_0 (def :  pcf.DocumentTemplateContextObjectInputSet_default) : void {
      def.onEnter(documentApplicationContext, documentCreationInfo, DynamicWidgetInfo)
    }
    
    // 'def' attribute on InputSetRef at DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf: line 24, column 43
    function def_onEnter_2 (def :  pcf.DocumentTemplateContextObjectInputSet_string) : void {
      def.onEnter(documentApplicationContext, documentCreationInfo, DynamicWidgetInfo)
    }
    
    // 'def' attribute on InputSetRef at DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf: line 24, column 43
    function def_onEnter_4 (def :  pcf.DocumentTemplateContextObjectInputSet_text) : void {
      def.onEnter(documentApplicationContext, documentCreationInfo, DynamicWidgetInfo)
    }
    
    // 'def' attribute on InputSetRef at DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf: line 24, column 43
    function def_refreshVariables_1 (def :  pcf.DocumentTemplateContextObjectInputSet_default) : void {
      def.refreshVariables(documentApplicationContext, documentCreationInfo, DynamicWidgetInfo)
    }
    
    // 'def' attribute on InputSetRef at DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf: line 24, column 43
    function def_refreshVariables_3 (def :  pcf.DocumentTemplateContextObjectInputSet_string) : void {
      def.refreshVariables(documentApplicationContext, documentCreationInfo, DynamicWidgetInfo)
    }
    
    // 'def' attribute on InputSetRef at DocumentTemplateContextObjectIteratorInputSet.noticeofofferofmodoraltworkdwcad1013353pdf.pcf: line 24, column 43
    function def_refreshVariables_5 (def :  pcf.DocumentTemplateContextObjectInputSet_text) : void {
      def.refreshVariables(documentApplicationContext, documentCreationInfo, DynamicWidgetInfo)
    }
    
    property get DynamicWidgetInfo () : gw.document.DocumentCreationInfo.DynamicWidgetInfo {
      return getIteratedValue(1) as gw.document.DocumentCreationInfo.DynamicWidgetInfo
    }
    
    
  }
  
  
}