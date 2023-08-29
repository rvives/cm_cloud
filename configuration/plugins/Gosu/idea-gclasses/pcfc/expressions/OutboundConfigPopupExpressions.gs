package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OutboundConfigPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends OutboundConfigScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ConfigPrefix_Cell) at OutboundConfigPopup.pcf: line 170, column 52
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.Prefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ConfigExtension_Cell) at OutboundConfigPopup.pcf: line 176, column 55
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.Extension = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ConfigHandlerClass_Cell) at OutboundConfigPopup.pcf: line 183, column 62
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ConfigDaysTillPurge_Cell) at OutboundConfigPopup.pcf: line 190, column 52
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'validationExpression' attribute on TextCell (id=ConfigHandlerClass_Cell) at OutboundConfigPopup.pcf: line 183, column 62
    function validationExpression_84 () : java.lang.Object {
      return com.guidewire.outboundfile.batch.file.OutboundFileUtils.validateFileHandlerAndDisplayError(outboundConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextCell (id=ConfigName_Cell) at OutboundConfigPopup.pcf: line 143, column 41
    function valueRoot_62 () : java.lang.Object {
      return outboundConfig
    }
    
    // 'value' attribute on TextCell (id=ConfigName_Cell) at OutboundConfigPopup.pcf: line 143, column 41
    function value_61 () : String {
      return outboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=ConfigProfile_Cell) at OutboundConfigPopup.pcf: line 149, column 41
    function value_64 () : String {
      return outboundConfig.ProfileName
    }
    
    // 'value' attribute on TextCell (id=ConfigTemporaryDir_Cell) at OutboundConfigPopup.pcf: line 154, column 64
    function value_67 () : java.lang.String {
      return outboundConfig.TemporaryDirectory
    }
    
    // 'value' attribute on TextCell (id=ConfigBucket_Cell) at OutboundConfigPopup.pcf: line 159, column 65
    function value_70 () : java.lang.String {
      return outboundConfig.DestinationS3Bucket
    }
    
    // 'value' attribute on TextCell (id=ConfigS3Prefix_Cell) at OutboundConfigPopup.pcf: line 164, column 65
    function value_73 () : java.lang.String {
      return outboundConfig.DestinationS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ConfigPrefix_Cell) at OutboundConfigPopup.pcf: line 170, column 52
    function value_76 () : java.lang.String {
      return outboundConfig.Prefix
    }
    
    // 'value' attribute on TextCell (id=ConfigExtension_Cell) at OutboundConfigPopup.pcf: line 176, column 55
    function value_80 () : java.lang.String {
      return outboundConfig.Extension
    }
    
    // 'value' attribute on TextCell (id=ConfigHandlerClass_Cell) at OutboundConfigPopup.pcf: line 183, column 62
    function value_85 () : java.lang.String {
      return outboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=ConfigDaysTillPurge_Cell) at OutboundConfigPopup.pcf: line 190, column 52
    function value_90 () : java.lang.Integer {
      return outboundConfig.DaysTillPurge
    }
    
    property get outboundConfig () : entity.OutboundFileS3Config {
      return getIteratedValue(2) as entity.OutboundFileS3Config
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OutboundConfigScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OutboundConfigPopup.pcf: line 62, column 41
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.Name = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TextCell (id=ConfigTemporaryDir_Cell) at OutboundConfigPopup.pcf: line 68, column 64
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.TemporaryDirectory = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ConfigPermanentDir_Cell) at OutboundConfigPopup.pcf: line 74, column 64
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.PermanentDirectory = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ConfigPrefix_Cell) at OutboundConfigPopup.pcf: line 80, column 52
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.Prefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ConfigExtension_Cell) at OutboundConfigPopup.pcf: line 86, column 55
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.Extension = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at OutboundConfigPopup.pcf: line 93, column 62
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at OutboundConfigPopup.pcf: line 100, column 52
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'validationExpression' attribute on TextCell (id=HandlerClass_Cell) at OutboundConfigPopup.pcf: line 93, column 62
    function validationExpression_35 () : java.lang.Object {
      return com.guidewire.outboundfile.batch.file.OutboundFileUtils.validateFileHandlerAndDisplayError(outboundConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OutboundConfigPopup.pcf: line 62, column 41
    function valueRoot_17 () : java.lang.Object {
      return outboundConfig
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OutboundConfigPopup.pcf: line 62, column 41
    function value_15 () : String {
      return outboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=ConfigTemporaryDir_Cell) at OutboundConfigPopup.pcf: line 68, column 64
    function value_19 () : java.lang.String {
      return outboundConfig.TemporaryDirectory
    }
    
    // 'value' attribute on TextCell (id=ConfigPermanentDir_Cell) at OutboundConfigPopup.pcf: line 74, column 64
    function value_23 () : java.lang.String {
      return outboundConfig.PermanentDirectory
    }
    
    // 'value' attribute on TextCell (id=ConfigPrefix_Cell) at OutboundConfigPopup.pcf: line 80, column 52
    function value_27 () : java.lang.String {
      return outboundConfig.Prefix
    }
    
    // 'value' attribute on TextCell (id=ConfigExtension_Cell) at OutboundConfigPopup.pcf: line 86, column 55
    function value_31 () : java.lang.String {
      return outboundConfig.Extension
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at OutboundConfigPopup.pcf: line 93, column 62
    function value_36 () : java.lang.String {
      return outboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at OutboundConfigPopup.pcf: line 100, column 52
    function value_41 () : java.lang.Integer {
      return outboundConfig.DaysTillPurge
    }
    
    property get outboundConfig () : entity.OutboundFileLocalConfig {
      return getIteratedValue(2) as entity.OutboundFileLocalConfig
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OutboundConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=OutboundConfigPopup) at OutboundConfigPopup.pcf: line 8, column 67
    function canEdit_95 () : java.lang.Boolean {
      return perm.System.editoutboundfiles
    }
    
    override property get CurrentLocation () : pcf.OutboundConfigPopup {
      return super.CurrentLocation as pcf.OutboundConfigPopup
    }
    
    function deleteConfigs(configs : OutboundFileConfig[]) : void {
          var bundle = gw.transaction.Transaction.newBundle()
          for (src in configs) {
            src = bundle.add(src)
            src.remove()
          }
          bundle.commit()
        }
        
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/outboundfile/OutboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OutboundConfigScreenExpressionsImpl extends OutboundConfigPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=OutboundConfigNewButton) at OutboundConfigPopup.pcf: line 35, column 58
    function action_3 () : void {
      NewOutboundLocalConfigPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=OutboundConfigNewButton) at OutboundConfigPopup.pcf: line 117, column 58
    function action_47 () : void {
      NewOutboundS3ConfigPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=OutboundConfigNewButton) at OutboundConfigPopup.pcf: line 35, column 58
    function action_dest_4 () : pcf.api.Destination {
      return pcf.NewOutboundLocalConfigPopup.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=OutboundConfigNewButton) at OutboundConfigPopup.pcf: line 117, column 58
    function action_dest_48 () : pcf.api.Destination {
      return pcf.NewOutboundS3ConfigPopup.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ConfigsDeleteButton) at OutboundConfigPopup.pcf: line 126, column 58
    function allCheckedRowsAction_51 (CheckedValues :  entity.OutboundFileS3Config[], CheckedValuesErrors :  java.util.Map) : void {
      deleteConfigs(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ConfigsDeleteButton) at OutboundConfigPopup.pcf: line 44, column 58
    function allCheckedRowsAction_7 (CheckedValues :  entity.OutboundFileLocalConfig[], CheckedValuesErrors :  java.util.Map) : void {
      deleteConfigs(CheckedValues)
    }
    
    // 'initialValue' attribute on Variable at OutboundConfigPopup.pcf: line 15, column 60
    function initialValue_0 () : List<entity.OutboundFileLocalConfig> {
      return gw.api.database.Query.make(OutboundFileLocalConfig).select().toList()
    }
    
    // 'initialValue' attribute on Variable at OutboundConfigPopup.pcf: line 20, column 57
    function initialValue_1 () : List<entity.OutboundFileS3Config> {
      return gw.api.database.Query.make(OutboundFileS3Config).select().toList()
    }
    
    // EditButtons at OutboundConfigPopup.pcf: line 37, column 40
    function label_5 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=ConfigPermanentDir_Cell) at OutboundConfigPopup.pcf: line 74, column 64
    function sortValue_10 (outboundConfig :  entity.OutboundFileLocalConfig) : java.lang.Object {
      return outboundConfig.PermanentDirectory
    }
    
    // 'value' attribute on TextCell (id=ConfigPrefix_Cell) at OutboundConfigPopup.pcf: line 80, column 52
    function sortValue_11 (outboundConfig :  entity.OutboundFileLocalConfig) : java.lang.Object {
      return outboundConfig.Prefix
    }
    
    // 'value' attribute on TextCell (id=ConfigExtension_Cell) at OutboundConfigPopup.pcf: line 86, column 55
    function sortValue_12 (outboundConfig :  entity.OutboundFileLocalConfig) : java.lang.Object {
      return outboundConfig.Extension
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at OutboundConfigPopup.pcf: line 93, column 62
    function sortValue_13 (outboundConfig :  entity.OutboundFileLocalConfig) : java.lang.Object {
      return outboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at OutboundConfigPopup.pcf: line 100, column 52
    function sortValue_14 (outboundConfig :  entity.OutboundFileLocalConfig) : java.lang.Object {
      return outboundConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextCell (id=ConfigName_Cell) at OutboundConfigPopup.pcf: line 143, column 41
    function sortValue_52 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=ConfigProfile_Cell) at OutboundConfigPopup.pcf: line 149, column 41
    function sortValue_53 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.ProfileName
    }
    
    // 'value' attribute on TextCell (id=ConfigTemporaryDir_Cell) at OutboundConfigPopup.pcf: line 154, column 64
    function sortValue_54 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.TemporaryDirectory
    }
    
    // 'value' attribute on TextCell (id=ConfigBucket_Cell) at OutboundConfigPopup.pcf: line 159, column 65
    function sortValue_55 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.DestinationS3Bucket
    }
    
    // 'value' attribute on TextCell (id=ConfigS3Prefix_Cell) at OutboundConfigPopup.pcf: line 164, column 65
    function sortValue_56 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.DestinationS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ConfigPrefix_Cell) at OutboundConfigPopup.pcf: line 170, column 52
    function sortValue_57 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.Prefix
    }
    
    // 'value' attribute on TextCell (id=ConfigExtension_Cell) at OutboundConfigPopup.pcf: line 176, column 55
    function sortValue_58 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.Extension
    }
    
    // 'value' attribute on TextCell (id=ConfigHandlerClass_Cell) at OutboundConfigPopup.pcf: line 183, column 62
    function sortValue_59 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=ConfigDaysTillPurge_Cell) at OutboundConfigPopup.pcf: line 190, column 52
    function sortValue_60 (outboundConfig :  entity.OutboundFileS3Config) : java.lang.Object {
      return outboundConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OutboundConfigPopup.pcf: line 62, column 41
    function sortValue_8 (outboundConfig :  entity.OutboundFileLocalConfig) : java.lang.Object {
      return outboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=ConfigTemporaryDir_Cell) at OutboundConfigPopup.pcf: line 68, column 64
    function sortValue_9 (outboundConfig :  entity.OutboundFileLocalConfig) : java.lang.Object {
      return outboundConfig.TemporaryDirectory
    }
    
    // 'value' attribute on RowIterator (id=LocalConfigsIterator) at OutboundConfigPopup.pcf: line 54, column 82
    function value_45 () : java.util.List<entity.OutboundFileLocalConfig> {
      return localConfigsList
    }
    
    // 'value' attribute on RowIterator (id=S3ConfigsIterator) at OutboundConfigPopup.pcf: line 136, column 79
    function value_94 () : java.util.List<entity.OutboundFileS3Config> {
      return s3ConfigList
    }
    
    // 'visible' attribute on ToolbarButton (id=OutboundConfigNewButton) at OutboundConfigPopup.pcf: line 35, column 58
    function visible_2 () : java.lang.Boolean {
      return perm.System.editoutboundfiles
    }
    
    property get localConfigsList () : List<entity.OutboundFileLocalConfig> {
      return getVariableValue("localConfigsList", 1) as List<entity.OutboundFileLocalConfig>
    }
    
    property set localConfigsList ($arg :  List<entity.OutboundFileLocalConfig>) {
      setVariableValue("localConfigsList", 1, $arg)
    }
    
    property get s3ConfigList () : List<entity.OutboundFileS3Config> {
      return getVariableValue("s3ConfigList", 1) as List<entity.OutboundFileS3Config>
    }
    
    property set s3ConfigList ($arg :  List<entity.OutboundFileS3Config>) {
      setVariableValue("s3ConfigList", 1, $arg)
    }
    
    
  }
  
  
}