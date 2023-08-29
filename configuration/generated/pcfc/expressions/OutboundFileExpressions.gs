package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.IQueryBeanResult
@javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OutboundFileExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OutboundFileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=OutboundFileLVCreateDate_Cell) at OutboundFile.pcf: line 94, column 48
    function valueRoot_30 () : java.lang.Object {
      return record
    }
    
    // 'value' attribute on DateCell (id=OutboundFileLVCreateDate_Cell) at OutboundFile.pcf: line 94, column 48
    function value_29 () : java.util.Date {
      return record.CreateDate
    }
    
    // 'value' attribute on TextCell (id=OutboundFileLVContent_Cell) at OutboundFile.pcf: line 98, column 45
    function value_32 () : java.lang.String {
      return record.Content
    }
    
    property get record () : OutboundRecord {
      return getIteratedValue(1) as OutboundRecord
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OutboundFileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (file :  OutboundFile) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=OutboundFile) at OutboundFile.pcf: line 11, column 87
    static function canVisit_36 (file :  OutboundFile) : java.lang.Boolean {
      return perm.System.viewoutboundfiles
    }
    
    // 'parent' attribute on Page (id=OutboundFile) at OutboundFile.pcf: line 11, column 87
    static function parent_37 (file :  OutboundFile) : pcf.api.Destination {
      return pcf.OutboundFileSearch.createDestination()
    }
    
    // 'value' attribute on DateCell (id=OutboundFileLVCreateDate_Cell) at OutboundFile.pcf: line 94, column 48
    function sortValue_27 (record :  OutboundRecord) : java.lang.Object {
      return record.CreateDate
    }
    
    // 'value' attribute on TextCell (id=OutboundFileLVContent_Cell) at OutboundFile.pcf: line 98, column 45
    function sortValue_28 (record :  OutboundRecord) : java.lang.Object {
      return record.Content
    }
    
    // 'title' attribute on Page (id=OutboundFile) at OutboundFile.pcf: line 11, column 87
    static function title_38 (file :  OutboundFile) : java.lang.Object {
      return DisplayKey.get("OutboundFile.Search.Title", file.getFileName())
    }
    
    // 'value' attribute on RowIterator (id=recordRowIterator) at OutboundFile.pcf: line 88, column 84
    function value_35 () : gw.api.database.IQueryBeanResult<OutboundRecord> {
      return searchResults
    }
    
    override property get CurrentLocation () : pcf.OutboundFile {
      return super.CurrentLocation as pcf.OutboundFile
    }
    
    property get file () : OutboundFile {
      return getVariableValue("file", 0) as OutboundFile
    }
    
    property set file ($arg :  OutboundFile) {
      setVariableValue("file", 0, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<OutboundRecord> {
      return getVariableValue("searchResults", 0) as gw.api.database.IQueryBeanResult<OutboundRecord>
    }
    
    property set searchResults ($arg :  gw.api.database.IQueryBeanResult<OutboundRecord>) {
      setVariableValue("searchResults", 0, $arg)
    }
    
          function makeResultsAvailable(result: IQueryBeanResult): IQueryBeanResult {
            searchResults = result as IQueryBeanResult<OutboundRecord>
            return result
          }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends OutboundFileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at OutboundFile.pcf: line 59, column 47
    function def_onEnter_15 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at OutboundFile.pcf: line 59, column 47
    function def_refreshVariables_16 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on DateInput (id=OutboundFileDVStartingDate_Input) at OutboundFile.pcf: line 68, column 45
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=OutboundFileDVEndingLineNumber_Input) at OutboundFile.pcf: line 73, column 43
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'searchCriteria' attribute on SearchPanel at OutboundFile.pcf: line 29, column 84
    function searchCriteria_26 () : com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria {
      return new com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria(){:File = file, :Status = OutboundRecordStatus.TC_PROCESSED}
    }
    
    // 'search' attribute on SearchPanel at OutboundFile.pcf: line 29, column 84
    function search_25 () : java.lang.Object {
      return makeResultsAvailable(criteria.search())
    }
    
    // 'value' attribute on TextInput (id=OutboundFileDVConfig_Input) at OutboundFile.pcf: line 36, column 47
    function valueRoot_1 () : java.lang.Object {
      return file
    }
    
    // 'value' attribute on DateInput (id=OutboundFileDVStartingDate_Input) at OutboundFile.pcf: line 68, column 45
    function valueRoot_19 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on TextInput (id=OutboundFileDVConfig_Input) at OutboundFile.pcf: line 36, column 47
    function value_0 () : OutboundFileConfig {
      return file.Config
    }
    
    // 'value' attribute on TextInput (id=OutboundFileDVBatchID_Input) at OutboundFile.pcf: line 57, column 37
    function value_12 () : java.lang.String {
      return file.BatchID
    }
    
    // 'value' attribute on DateInput (id=OutboundFileDVStartingDate_Input) at OutboundFile.pcf: line 68, column 45
    function value_17 () : java.util.Date {
      return criteria.StartDate
    }
    
    // 'value' attribute on DateInput (id=OutboundFileDVEndingLineNumber_Input) at OutboundFile.pcf: line 73, column 43
    function value_21 () : java.util.Date {
      return criteria.EndDate
    }
    
    // 'value' attribute on TextInput (id=OutboundFileDVFileName_Input) at OutboundFile.pcf: line 41, column 35
    function value_3 () : String {
      return file.FileName
    }
    
    // 'value' attribute on DateInput (id=OutboundFileDVCreateDate_Input) at OutboundFile.pcf: line 47, column 40
    function value_6 () : java.util.Date {
      return file.CreateDate
    }
    
    // 'value' attribute on DateInput (id=OutboundFileDVPurgeDate_Input) at OutboundFile.pcf: line 53, column 39
    function value_9 () : java.util.Date {
      return file.PurgeDate
    }
    
    property get criteria () : com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria {
      return getCriteriaValue(1) as com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria
    }
    
    property set criteria ($arg :  com.guidewire.outboundfile.pcf.OutboundRecordSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<OutboundRecord> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<OutboundRecord>
    }
    
    
  }
  
  
}