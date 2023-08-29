package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveGraphInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchiveGraphInfoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveGraphInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchiveGraphInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ArchiveGraphInfo) at ArchiveGraphInfo.pcf: line 11, column 83
    static function canVisit_27 () : java.lang.Boolean {
      return not gw.api.web.tools.ArchiveGraphInfoPage.getGraphNames().isEmpty()
    }
    
    // Page (id=ArchiveGraphInfo) at ArchiveGraphInfo.pcf: line 11, column 83
    static function parent_28 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ArchiveGraphInfo {
      return super.CurrentLocation as pcf.ArchiveGraphInfo
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveGraphInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=warningMessage2_Cell) at ArchiveGraphInfo.pcf: line 132, column 34
    function value_19 () : java.lang.String {
      return warning2
    }
    
    property get warning2 () : String {
      return getIteratedValue(2) as String
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveGraphInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=warningMessage1_Cell) at ArchiveGraphInfo.pcf: line 110, column 34
    function value_15 () : java.lang.String {
      return warning1
    }
    
    property get warning1 () : String {
      return getIteratedValue(2) as String
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/ArchiveGraphInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends ArchiveGraphInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=download_Input) at ArchiveGraphInfo.pcf: line 52, column 50
    function action_10 () : void {
      gw.api.web.tools.ArchiveGraphInfoPage.download(selectedGraphName)
    }
    
    // 'value' attribute on RangeInput (id=GraphName_Input) at ArchiveGraphInfo.pcf: line 39, column 32
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedGraphName = (__VALUE_TO_SET as String)
    }
    
    // 'initialValue' attribute on Variable at ArchiveGraphInfo.pcf: line 16, column 36
    function initialValue_0 () : List<String> {
      return gw.api.web.tools.ArchiveGraphInfoPage.getGraphNames()
    }
    
    // 'initialValue' attribute on Variable at ArchiveGraphInfo.pcf: line 24, column 46
    function initialValue_1 () : java.util.List<String> {
      return (selectedGraphName != null) ? com.guidewire.pl.domain.archiving.DomainGraphIssues.validateNothingOutsideOfDomainGraphShouldPointToDomainGraph(selectedGraphName) : {}
    }
    
    // 'initialValue' attribute on Variable at ArchiveGraphInfo.pcf: line 29, column 46
    function initialValue_2 () : java.util.List<String> {
      return (selectedGraphName != null) ? com.guidewire.pl.domain.archiving.DomainGraphIssues.validateNullLinksCannotMakeNodeUnreachable(selectedGraphName) : {}
    }
    
    // 'valueRange' attribute on RangeInput (id=GraphName_Input) at ArchiveGraphInfo.pcf: line 39, column 32
    function valueRange_5 () : java.lang.Object {
      return graphNames
    }
    
    // 'value' attribute on TextAreaInput (id=graph1_Input) at ArchiveGraphInfo.pcf: line 84, column 132
    function value_12 () : java.lang.String {
      return com.guidewire.pl.domain.archiving.DomainGraphIssues.testOutputDomainGraphInDotFormat(selectedGraphName)
    }
    
    // 'value' attribute on RowIterator (id=warningLV1) at ArchiveGraphInfo.pcf: line 104, column 58
    function value_17 () : java.util.List<String> {
      return warnings1
    }
    
    // 'value' attribute on RowIterator (id=warningLV2) at ArchiveGraphInfo.pcf: line 126, column 58
    function value_21 () : java.util.List<String> {
      return warnings2
    }
    
    // 'value' attribute on TextAreaInput (id=EntityDiffText_Input) at ArchiveGraphInfo.pcf: line 151, column 132
    function value_24 () : java.lang.String {
      return com.guidewire.pl.web.pcf.DomainGraphInfoUIHelper.getEntitiesNotIncludedInDomainGraph(selectedGraphName)
    }
    
    // 'value' attribute on RangeInput (id=GraphName_Input) at ArchiveGraphInfo.pcf: line 39, column 32
    function value_3 () : String {
      return selectedGraphName
    }
    
    // 'valueRange' attribute on RangeInput (id=GraphName_Input) at ArchiveGraphInfo.pcf: line 39, column 32
    function verifyValueRangeIsAllowedType_6 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GraphName_Input) at ArchiveGraphInfo.pcf: line 39, column 32
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=GraphName_Input) at ArchiveGraphInfo.pcf: line 39, column 32
    function verifyValueRange_7 () : void {
      var __valueRangeArg = graphNames
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on PanelRef at ArchiveGraphInfo.pcf: line 94, column 40
    function visible_18 () : java.lang.Boolean {
      return !warnings1.Empty
    }
    
    // 'visible' attribute on PanelRef at ArchiveGraphInfo.pcf: line 116, column 40
    function visible_22 () : java.lang.Boolean {
      return !warnings2.Empty
    }
    
    // 'visible' attribute on ButtonInput (id=download_Input) at ArchiveGraphInfo.pcf: line 52, column 50
    function visible_9 () : java.lang.Boolean {
      return selectedGraphName != null
    }
    
    property get graphNames () : List<String> {
      return getVariableValue("graphNames", 1) as List<String>
    }
    
    property set graphNames ($arg :  List<String>) {
      setVariableValue("graphNames", 1, $arg)
    }
    
    property get selectedGraphName () : String {
      return getVariableValue("selectedGraphName", 1) as String
    }
    
    property set selectedGraphName ($arg :  String) {
      setVariableValue("selectedGraphName", 1, $arg)
    }
    
    property get warnings1 () : java.util.List<String> {
      return getVariableValue("warnings1", 1) as java.util.List<String>
    }
    
    property set warnings1 ($arg :  java.util.List<String>) {
      setVariableValue("warnings1", 1, $arg)
    }
    
    property get warnings2 () : java.util.List<String> {
      return getVariableValue("warnings2", 1) as java.util.List<String>
    }
    
    property set warnings2 ($arg :  java.util.List<String>) {
      setVariableValue("warnings2", 1, $arg)
    }
    
    
  }
  
  
}