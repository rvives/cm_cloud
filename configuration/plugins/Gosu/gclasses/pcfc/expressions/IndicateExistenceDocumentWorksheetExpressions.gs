package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/IndicateExistenceDocumentWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IndicateExistenceDocumentWorksheetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/IndicateExistenceDocumentWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IndicateExistenceDocumentWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  ABContact) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Worksheet (id=IndicateExistenceDocumentWorksheet) at IndicateExistenceDocumentWorksheet.pcf: line 13, column 99
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      documentCMContext.linkDocumentsToContact()
    }
    
    // 'beforeCommit' attribute on Worksheet (id=IndicateExistenceDocumentWorksheet) at IndicateExistenceDocumentWorksheet.pcf: line 13, column 99
    function beforeCommit_7 (pickedValue :  java.lang.Object) : void {
      document.DateModified = Date.CurrentDate
    }
    
    // 'def' attribute on ScreenRef at IndicateExistenceDocumentWorksheet.pcf: line 31, column 75
    function def_onEnter_4 (def :  pcf.IndicateExistenceDocumentScreen) : void {
      def.onEnter(documentCMContext, document)
    }
    
    // 'def' attribute on ScreenRef at IndicateExistenceDocumentWorksheet.pcf: line 31, column 75
    function def_refreshVariables_5 (def :  pcf.IndicateExistenceDocumentScreen) : void {
      def.refreshVariables(documentCMContext, document)
    }
    
    // 'initialValue' attribute on Variable at IndicateExistenceDocumentWorksheet.pcf: line 21, column 25
    function initialValue_1 () : ABContact {
      return contact
    }
    
    // 'initialValue' attribute on Variable at IndicateExistenceDocumentWorksheet.pcf: line 25, column 45
    function initialValue_2 () : gw.document.DocumentCMContext {
      return new gw.document.DocumentCMContext(contact)
    }
    
    // 'initialValue' attribute on Variable at IndicateExistenceDocumentWorksheet.pcf: line 29, column 31
    function initialValue_3 () : entity.Document {
      return documentCMContext.initDocumentExistence()
    }
    
    // 'location' attribute on Scope at IndicateExistenceDocumentWorksheet.pcf: line 17, column 42
    function location_0 () : pcf.api.Destination {
      return pcf.ContactDetail.createDestination(contact)
    }
    
    override property get CurrentLocation () : pcf.IndicateExistenceDocumentWorksheet {
      return super.CurrentLocation as pcf.IndicateExistenceDocumentWorksheet
    }
    
    property get contact () : ABContact {
      return getVariableValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get document () : entity.Document {
      return getVariableValue("document", 0) as entity.Document
    }
    
    property set document ($arg :  entity.Document) {
      setVariableValue("document", 0, $arg)
    }
    
    property get documentCMContext () : gw.document.DocumentCMContext {
      return getVariableValue("documentCMContext", 0) as gw.document.DocumentCMContext
    }
    
    property set documentCMContext ($arg :  gw.document.DocumentCMContext) {
      setVariableValue("documentCMContext", 0, $arg)
    }
    
    
  }
  
  
}