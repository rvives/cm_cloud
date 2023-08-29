package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.IQueryBeanResult
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundFileExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundFileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (file :  InboundFileView) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=InboundFile) at InboundFile.pcf: line 11, column 122
    static function canVisit_86 (file :  InboundFileView) : java.lang.Boolean {
      return perm.System.viewinboundfiles
    }
    
    // 'parent' attribute on Page (id=InboundFile) at InboundFile.pcf: line 11, column 122
    static function parent_87 (file :  InboundFileView) : pcf.api.Destination {
      return pcf.InboundFileSearch.createDestination()
    }
    
    // 'title' attribute on Page (id=InboundFile) at InboundFile.pcf: line 11, column 122
    static function title_88 (file :  InboundFileView) : java.lang.Object {
      return DisplayKey.get("InboundFile.Search.Title", new java.io.File(file.InputLocation).NameSansExtension)
    }
    
    override property get CurrentLocation () : pcf.InboundFile {
      return super.CurrentLocation as pcf.InboundFile
    }
    
    property get file () : InboundFileView {
      return getVariableValue("file", 0) as InboundFileView
    }
    
    property set file ($arg :  InboundFileView) {
      setVariableValue("file", 0, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<InboundRecordView> {
      return getVariableValue("searchResults", 0) as gw.api.database.IQueryBeanResult<InboundRecordView>
    }
    
    property set searchResults ($arg :  gw.api.database.IQueryBeanResult<InboundRecordView>) {
      setVariableValue("searchResults", 0, $arg)
    }
    
          function makeResultsAvailable(result: IQueryBeanResult): IQueryBeanResult {
            searchResults = result as IQueryBeanResult<InboundRecordView>
            return result
          }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=InboundFileLVSubineNumber_Cell) at InboundFile.pcf: line 159, column 40
    function action_66 () : void {
      InboundRecordPopup.push(subrecord.InboundSubRecord)
    }
    
    // 'action' attribute on TextCell (id=InboundFileLVSubineNumber_Cell) at InboundFile.pcf: line 159, column 40
    function action_dest_67 () : pcf.api.Destination {
      return pcf.InboundRecordPopup.createDestination(subrecord.InboundSubRecord)
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVSubineNumber_Cell) at InboundFile.pcf: line 159, column 40
    function valueRoot_69 () : java.lang.Object {
      return subrecord
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVSubineNumber_Cell) at InboundFile.pcf: line 159, column 40
    function value_68 () : int {
      return subrecord.LineNumber
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVSubContent_Cell) at InboundFile.pcf: line 167, column 50
    function value_71 () : java.lang.String {
      return subrecord.Content
    }
    
    property get subrecord () : InboundSubRecordView {
      return getIteratedValue(3) as InboundSubRecordView
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=InboundFileLVLineNumber_Cell) at InboundFile.pcf: line 119, column 38
    function action_45 () : void {
      InboundRecordPopup.push(record.InboundRecord)
    }
    
    // 'action' attribute on TextCell (id=InboundFileLVLineNumber_Cell) at InboundFile.pcf: line 119, column 38
    function action_dest_46 () : pcf.api.Destination {
      return pcf.InboundRecordPopup.createDestination(record.InboundRecord)
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVLineNumber_Cell) at InboundFile.pcf: line 119, column 38
    function valueRoot_48 () : java.lang.Object {
      return record
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVLineNumber_Cell) at InboundFile.pcf: line 119, column 38
    function value_47 () : int {
      return record.LineNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=InboundFileLVStatus_Cell) at InboundFile.pcf: line 124, column 54
    function value_50 () : InboundRecordStatus {
      return record.Status
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVContent_Cell) at InboundFile.pcf: line 128, column 45
    function value_54 () : java.lang.String {
      return record.Content
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVErrorMessage_Cell) at InboundFile.pcf: line 133, column 41
    function value_57 () : String {
      return record.ErrorMessage
    }
    
    // 'value' attribute on DateCell (id=InboundFileLVLastModifiedDate_Cell) at InboundFile.pcf: line 139, column 48
    function value_60 () : java.util.Date {
      return record.UpdateTime
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVLastModifiedUser_Cell) at InboundFile.pcf: line 143, column 48
    function value_63 () : java.lang.String {
      return record.UpdateUser
    }
    
    // 'value' attribute on RowIterator at InboundFile.pcf: line 151, column 54
    function value_74 () : InboundSubRecordView[] {
      return record.SubRecordsArray().sortBy(\rec -> rec.LineNumber)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=InboundFileLVStatus_Cell) at InboundFile.pcf: line 124, column 54
    function verifyValueType_53 () : void {
      var __valueTypeArg : InboundRecordStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get record () : InboundRecordView {
      return getIteratedValue(2) as InboundRecordView
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends InboundFileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function def_onEnter_76 (def :  pcf.InboundRecordDV_InboundRecord) : void {
      def.onEnter(selectedRow)
    }
    
    // 'def' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function def_onEnter_78 (def :  pcf.InboundRecordDV_InboundRecordView) : void {
      def.onEnter(selectedRow)
    }
    
    // 'def' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function def_onEnter_80 (def :  pcf.InboundRecordDV_InboundSubRecord) : void {
      def.onEnter(selectedRow)
    }
    
    // 'def' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function def_onEnter_82 (def :  pcf.InboundRecordDV_InboundSubRecordView) : void {
      def.onEnter(selectedRow)
    }
    
    // 'def' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function def_refreshVariables_77 (def :  pcf.InboundRecordDV_InboundRecord) : void {
      def.refreshVariables(selectedRow)
    }
    
    // 'def' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function def_refreshVariables_79 (def :  pcf.InboundRecordDV_InboundRecordView) : void {
      def.refreshVariables(selectedRow)
    }
    
    // 'def' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function def_refreshVariables_81 (def :  pcf.InboundRecordDV_InboundSubRecord) : void {
      def.refreshVariables(selectedRow)
    }
    
    // 'def' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function def_refreshVariables_83 (def :  pcf.InboundRecordDV_InboundSubRecordView) : void {
      def.refreshVariables(selectedRow)
    }
    
    // 'mode' attribute on PanelRef at InboundFile.pcf: line 188, column 64
    function mode_84 () : java.lang.Object {
      return selectedRow.IntrinsicType.RelativeName
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVLineNumber_Cell) at InboundFile.pcf: line 119, column 38
    function sortValue_39 (record :  InboundRecordView) : java.lang.Object {
      return record.LineNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=InboundFileLVStatus_Cell) at InboundFile.pcf: line 124, column 54
    function sortValue_40 (record :  InboundRecordView) : java.lang.Object {
      return record.Status
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVContent_Cell) at InboundFile.pcf: line 128, column 45
    function sortValue_41 (record :  InboundRecordView) : java.lang.Object {
      return record.Content
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVErrorMessage_Cell) at InboundFile.pcf: line 133, column 41
    function sortValue_42 (record :  InboundRecordView) : java.lang.Object {
      return record.ErrorMessage
    }
    
    // 'value' attribute on DateCell (id=InboundFileLVLastModifiedDate_Cell) at InboundFile.pcf: line 139, column 48
    function sortValue_43 (record :  InboundRecordView) : java.lang.Object {
      return record.UpdateTime
    }
    
    // 'value' attribute on TextCell (id=InboundFileLVLastModifiedUser_Cell) at InboundFile.pcf: line 143, column 48
    function sortValue_44 (record :  InboundRecordView) : java.lang.Object {
      return record.UpdateUser
    }
    
    // 'title' attribute on Card (id=InboundFileRecordDetails) at InboundFile.pcf: line 185, column 176
    function title_85 () : java.lang.String {
      return selectedRow typeis InboundRecordView ? DisplayKey.get("InboundFile.RecordDetails") : DisplayKey.get("InboundFile.SubRecordDetails") 
    }
    
    // 'value' attribute on RowIterator (id=recordRowIterator) at InboundFile.pcf: line 110, column 87
    function value_75 () : gw.api.database.IQueryBeanResult<InboundRecordView> {
      return searchResults
    }
    
    property get selectedRow () : KeyableBean {
      return getCurrentSelection(1) as KeyableBean
    }
    
    property set selectedRow ($arg :  KeyableBean) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends InboundFileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at InboundFile.pcf: line 69, column 47
    function def_onEnter_22 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at InboundFile.pcf: line 69, column 47
    function def_refreshVariables_23 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVStartLineNumber_Input) at InboundFile.pcf: line 79, column 34
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.StartingLineNumber = (__VALUE_TO_SET as int)
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVEndingLineNumber_Input) at InboundFile.pcf: line 85, column 34
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.EndingLineNumber = (__VALUE_TO_SET as int)
    }
    
    // 'value' attribute on TypeKeyInput (id=InboundFileDVRecordStatus_Input) at InboundFile.pcf: line 91, column 50
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.Status = (__VALUE_TO_SET as InboundRecordStatus)
    }
    
    // 'searchCriteria' attribute on SearchPanel at InboundFile.pcf: line 29, column 87
    function searchCriteria_38 () : gw.inboundfile.pcf.InboundRecordSearchCriteria {
      return new gw.inboundfile.pcf.InboundRecordSearchCriteria(file)
    }
    
    // 'search' attribute on SearchPanel at InboundFile.pcf: line 29, column 87
    function search_37 () : java.lang.Object {
      return makeResultsAvailable(criteria.performSearch())
    }
    
    // 'value' attribute on TypeKeyInput (id=InboundFileDVFileStatus_Input) at InboundFile.pcf: line 36, column 46
    function valueRoot_1 () : java.lang.Object {
      return file
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVStartLineNumber_Input) at InboundFile.pcf: line 79, column 34
    function valueRoot_26 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on TypeKeyInput (id=InboundFileDVFileStatus_Input) at InboundFile.pcf: line 36, column 46
    function value_0 () : InboundFileStatus {
      return file.Status
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVArchiveLocation_Input) at InboundFile.pcf: line 51, column 35
    function value_10 () : String {
      return file.ArchiveLocation
    }
    
    // 'value' attribute on DateInput (id=InboundFileDVLoadDate_Input) at InboundFile.pcf: line 57, column 38
    function value_13 () : java.util.Date {
      return file.LoadDate
    }
    
    // 'value' attribute on DateInput (id=InboundFileDVPurgeDate_Input) at InboundFile.pcf: line 63, column 39
    function value_16 () : java.util.Date {
      return file.PurgeDate
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVErrorMessage_Input) at InboundFile.pcf: line 67, column 42
    function value_19 () : java.lang.String {
      return file.ErrorMessage
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVStartLineNumber_Input) at InboundFile.pcf: line 79, column 34
    function value_24 () : int {
      return criteria.StartingLineNumber
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVEndingLineNumber_Input) at InboundFile.pcf: line 85, column 34
    function value_28 () : int {
      return criteria.EndingLineNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=InboundFileDVRecordStatus_Input) at InboundFile.pcf: line 91, column 50
    function value_32 () : InboundRecordStatus {
      return criteria.Status
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVConfigName_Input) at InboundFile.pcf: line 41, column 35
    function value_4 () : String {
      return file.Config
    }
    
    // 'value' attribute on TextInput (id=InboundFileDVInputLocation_Input) at InboundFile.pcf: line 46, column 35
    function value_7 () : String {
      return file.InputLocation
    }
    
    // 'valueType' attribute on TypeKeyInput (id=InboundFileDVFileStatus_Input) at InboundFile.pcf: line 36, column 46
    function verifyValueType_3 () : void {
      var __valueTypeArg : InboundFileStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=InboundFileDVRecordStatus_Input) at InboundFile.pcf: line 91, column 50
    function verifyValueType_36 () : void {
      var __valueTypeArg : InboundRecordStatus
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get criteria () : gw.inboundfile.pcf.InboundRecordSearchCriteria {
      return getCriteriaValue(1) as gw.inboundfile.pcf.InboundRecordSearchCriteria
    }
    
    property set criteria ($arg :  gw.inboundfile.pcf.InboundRecordSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<InboundRecordView> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<InboundRecordView>
    }
    
    
  }
  
  
}