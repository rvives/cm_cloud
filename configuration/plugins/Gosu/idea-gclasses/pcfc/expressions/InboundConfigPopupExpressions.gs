package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundConfigPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=InboundConfigPopup) at InboundConfigPopup.pcf: line 8, column 66
    function canEdit_89 () : java.lang.Boolean {
      return perm.System.editinboundfiles
    }
    
    override property get CurrentLocation () : pcf.InboundConfigPopup {
      return super.CurrentLocation as pcf.InboundConfigPopup
    }
    
    function deleteConfigs(configs : InboundFileConfig[]) : void {
          var bundle = gw.transaction.Transaction.newBundle()
          for (conf in configs) {
            conf = bundle.add(conf)
            conf.remove()
          }
          bundle.commit()
        }
        
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundConfigScreenExpressionsImpl extends InboundConfigPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=LocalConfigsNewButton) at InboundConfigPopup.pcf: line 35, column 57
    function action_3 () : void {
      NewInboundLocalConfigPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=S3ConfigsNewButton) at InboundConfigPopup.pcf: line 109, column 57
    function action_42 () : void {
      NewInboundS3ConfigPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=LocalConfigsNewButton) at InboundConfigPopup.pcf: line 35, column 57
    function action_dest_4 () : pcf.api.Destination {
      return pcf.NewInboundLocalConfigPopup.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=S3ConfigsNewButton) at InboundConfigPopup.pcf: line 109, column 57
    function action_dest_43 () : pcf.api.Destination {
      return pcf.NewInboundS3ConfigPopup.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=S3ConfigsDeleteButton) at InboundConfigPopup.pcf: line 119, column 57
    function allCheckedRowsAction_46 (CheckedValues :  entity.InboundS3FileConfig[], CheckedValuesErrors :  java.util.Map) : void {
      deleteConfigs(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=LocalConfigsDeleteButton) at InboundConfigPopup.pcf: line 45, column 57
    function allCheckedRowsAction_7 (CheckedValues :  entity.InboundLocalFileConfig[], CheckedValuesErrors :  java.util.Map) : void {
      deleteConfigs(CheckedValues)
    }
    
    // 'initialValue' attribute on Variable at InboundConfigPopup.pcf: line 15, column 56
    function initialValue_0 () : List<entity.InboundS3FileConfig> {
      return gw.api.database.Query.make(InboundS3FileConfig).select().toList()
    }
    
    // 'initialValue' attribute on Variable at InboundConfigPopup.pcf: line 20, column 59
    function initialValue_1 () : List<entity.InboundLocalFileConfig> {
      return gw.api.database.Query.make(InboundLocalFileConfig).select().toList()
    }
    
    // EditButtons (id=LocalEditButtons) at InboundConfigPopup.pcf: line 38, column 40
    function label_5 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=ArchiveDir_Cell) at InboundConfigPopup.pcf: line 74, column 61
    function sortValue_10 (localInboundConfig :  entity.InboundLocalFileConfig) : java.lang.Object {
      return localInboundConfig.ArchivePath
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 80, column 52
    function sortValue_11 (localInboundConfig :  entity.InboundLocalFileConfig) : java.lang.Object {
      return localInboundConfig.ChunkSize
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 86, column 66
    function sortValue_12 (localInboundConfig :  entity.InboundLocalFileConfig) : java.lang.Object {
      return localInboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 92, column 52
    function sortValue_13 (localInboundConfig :  entity.InboundLocalFileConfig) : java.lang.Object {
      return localInboundConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 136, column 41
    function sortValue_47 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=InputS3UserProfile_Cell) at InboundConfigPopup.pcf: line 142, column 58
    function sortValue_48 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.ProfileName
    }
    
    // 'value' attribute on TextCell (id=InputS3Bucket_Cell) at InboundConfigPopup.pcf: line 146, column 60
    function sortValue_49 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.InputS3Bucket
    }
    
    // 'value' attribute on TextCell (id=InputS3Prefix_Cell) at InboundConfigPopup.pcf: line 150, column 60
    function sortValue_50 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.InputS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ArchiveS3Bucket_Cell) at InboundConfigPopup.pcf: line 154, column 62
    function sortValue_51 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.ArchiveS3Bucket
    }
    
    // 'value' attribute on TextCell (id=ArchiveS3Prefix_Cell) at InboundConfigPopup.pcf: line 158, column 62
    function sortValue_52 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.ArchiveS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 164, column 52
    function sortValue_53 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.ChunkSize
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 170, column 63
    function sortValue_54 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 176, column 52
    function sortValue_55 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 63, column 41
    function sortValue_8 (localInboundConfig :  entity.InboundLocalFileConfig) : java.lang.Object {
      return localInboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=InputDir_Cell) at InboundConfigPopup.pcf: line 69, column 59
    function sortValue_9 (localInboundConfig :  entity.InboundLocalFileConfig) : java.lang.Object {
      return localInboundConfig.InputPath
    }
    
    // 'value' attribute on RowIterator (id=LocalConfigsIterator) at InboundConfigPopup.pcf: line 55, column 81
    function value_40 () : java.util.List<entity.InboundLocalFileConfig> {
      return localConfigsList
    }
    
    // 'value' attribute on RowIterator (id=S3ConfigsIterator) at InboundConfigPopup.pcf: line 129, column 78
    function value_88 () : java.util.List<entity.InboundS3FileConfig> {
      return s3ConfigsList
    }
    
    // 'visible' attribute on ToolbarButton (id=LocalConfigsNewButton) at InboundConfigPopup.pcf: line 35, column 57
    function visible_2 () : java.lang.Boolean {
      return perm.System.editinboundfiles
    }
    
    property get localConfigsList () : List<entity.InboundLocalFileConfig> {
      return getVariableValue("localConfigsList", 1) as List<entity.InboundLocalFileConfig>
    }
    
    property set localConfigsList ($arg :  List<entity.InboundLocalFileConfig>) {
      setVariableValue("localConfigsList", 1, $arg)
    }
    
    property get s3ConfigsList () : List<entity.InboundS3FileConfig> {
      return getVariableValue("s3ConfigsList", 1) as List<entity.InboundS3FileConfig>
    }
    
    property set s3ConfigsList ($arg :  List<entity.InboundS3FileConfig>) {
      setVariableValue("s3ConfigsList", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends InboundConfigScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 164, column 52
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      s3InboundConfig.ChunkSize = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 170, column 63
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      s3InboundConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 176, column 52
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      s3InboundConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'validationExpression' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 170, column 63
    function validationExpression_78 () : java.lang.Object {
      return gw.inboundfile.InboundFileUtils.validateFileHandlerClass(s3InboundConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 136, column 41
    function valueRoot_57 () : java.lang.Object {
      return s3InboundConfig
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 136, column 41
    function value_56 () : String {
      return s3InboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=InputS3UserProfile_Cell) at InboundConfigPopup.pcf: line 142, column 58
    function value_59 () : java.lang.String {
      return s3InboundConfig.ProfileName
    }
    
    // 'value' attribute on TextCell (id=InputS3Bucket_Cell) at InboundConfigPopup.pcf: line 146, column 60
    function value_62 () : java.lang.String {
      return s3InboundConfig.InputS3Bucket
    }
    
    // 'value' attribute on TextCell (id=InputS3Prefix_Cell) at InboundConfigPopup.pcf: line 150, column 60
    function value_65 () : java.lang.String {
      return s3InboundConfig.InputS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ArchiveS3Bucket_Cell) at InboundConfigPopup.pcf: line 154, column 62
    function value_68 () : java.lang.String {
      return s3InboundConfig.ArchiveS3Bucket
    }
    
    // 'value' attribute on TextCell (id=ArchiveS3Prefix_Cell) at InboundConfigPopup.pcf: line 158, column 62
    function value_71 () : java.lang.String {
      return s3InboundConfig.ArchiveS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 164, column 52
    function value_74 () : java.lang.Integer {
      return s3InboundConfig.ChunkSize
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 170, column 63
    function value_79 () : java.lang.String {
      return s3InboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 176, column 52
    function value_84 () : java.lang.Integer {
      return s3InboundConfig.DaysTillPurge
    }
    
    property get s3InboundConfig () : entity.InboundS3FileConfig {
      return getIteratedValue(2) as entity.InboundS3FileConfig
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends InboundConfigScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 63, column 41
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      localInboundConfig.Name = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TextCell (id=InputDir_Cell) at InboundConfigPopup.pcf: line 69, column 59
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      localInboundConfig.InputPath = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ArchiveDir_Cell) at InboundConfigPopup.pcf: line 74, column 61
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      localInboundConfig.ArchivePath = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 80, column 52
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      localInboundConfig.ChunkSize = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 86, column 66
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      localInboundConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 92, column 52
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      localInboundConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'validationExpression' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 86, column 66
    function validationExpression_30 () : java.lang.Object {
      return gw.inboundfile.InboundFileUtils.validateFileHandlerClass(localInboundConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 63, column 41
    function valueRoot_16 () : java.lang.Object {
      return localInboundConfig
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 63, column 41
    function value_14 () : String {
      return localInboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=InputDir_Cell) at InboundConfigPopup.pcf: line 69, column 59
    function value_18 () : java.lang.String {
      return localInboundConfig.InputPath
    }
    
    // 'value' attribute on TextCell (id=ArchiveDir_Cell) at InboundConfigPopup.pcf: line 74, column 61
    function value_22 () : java.lang.String {
      return localInboundConfig.ArchivePath
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 80, column 52
    function value_26 () : java.lang.Integer {
      return localInboundConfig.ChunkSize
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 86, column 66
    function value_31 () : java.lang.String {
      return localInboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 92, column 52
    function value_36 () : java.lang.Integer {
      return localInboundConfig.DaysTillPurge
    }
    
    property get localInboundConfig () : entity.InboundLocalFileConfig {
      return getIteratedValue(2) as entity.InboundLocalFileConfig
    }
    
    
  }
  
  
}