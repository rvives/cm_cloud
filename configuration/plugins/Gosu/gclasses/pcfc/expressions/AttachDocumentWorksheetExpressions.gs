package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/AttachDocumentWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AttachDocumentWorksheetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/AttachDocumentWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AttachDocumentWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  ABContact) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Worksheet (id=AttachDocumentWorksheet) at AttachDocumentWorksheet.pcf: line 12, column 97
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      documentCMContext.linkDocumentsToContact()
    }
    
    // 'def' attribute on ScreenRef at AttachDocumentWorksheet.pcf: line 25, column 54
    function def_onEnter_2 (def :  pcf.UploadDocumentScreen) : void {
      def.onEnter(documentCMContext)
    }
    
    // 'def' attribute on ScreenRef at AttachDocumentWorksheet.pcf: line 25, column 54
    function def_refreshVariables_3 (def :  pcf.UploadDocumentScreen) : void {
      def.refreshVariables(documentCMContext)
    }
    
    // 'initialValue' attribute on Variable at AttachDocumentWorksheet.pcf: line 23, column 45
    function initialValue_1 () : gw.document.DocumentCMContext {
      return new gw.document.DocumentCMContext(contact)
    }
    
    // 'location' attribute on Scope at AttachDocumentWorksheet.pcf: line 16, column 42
    function location_0 () : pcf.api.Destination {
      return pcf.ContactDetail.createDestination(contact)
    }
    
    override property get CurrentLocation () : pcf.AttachDocumentWorksheet {
      return super.CurrentLocation as pcf.AttachDocumentWorksheet
    }
    
    property get contact () : ABContact {
      return getVariableValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get documentCMContext () : gw.document.DocumentCMContext {
      return getVariableValue("documentCMContext", 0) as gw.document.DocumentCMContext
    }
    
    property set documentCMContext ($arg :  gw.document.DocumentCMContext) {
      setVariableValue("documentCMContext", 0, $arg)
    }
    
    
  }
  
  
}