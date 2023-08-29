package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/document/DocumentDetailsEditDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'columns' attribute on Layout at DocumentDetailsEditDV.pcf: line 12, column 21
    function columns_0 () : java.lang.Double {
      return documentDetailsApplicationHelper.AllowFieldsSubset ? 2 : 1
    }
    
    // 'def' attribute on InputSetRef at DocumentDetailsEditDV.pcf: line 15, column 78
    function def_onEnter_1 (def :  pcf.DocumentDetailsEditInputSet) : void {
      def.onEnter(documentDetailsApplicationHelper)
    }
    
    // 'def' attribute on InputSetRef at DocumentDetailsEditDV.pcf: line 15, column 78
    function def_refreshVariables_2 (def :  pcf.DocumentDetailsEditInputSet) : void {
      def.refreshVariables(documentDetailsApplicationHelper)
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getRequireValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setRequireValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    
  }
  
  
}