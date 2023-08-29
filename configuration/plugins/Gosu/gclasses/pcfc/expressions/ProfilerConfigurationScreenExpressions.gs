package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.web.color.GWColor
uses java.lang.NumberFormatException
uses java.util.function.Supplier
@javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerConfigurationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProfilerConfigurationScreenExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerConfigurationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProfilerConfigurationScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on BooleanRadioCell (id=IndividualStacks_Cell) at ProfilerConfigurationScreen.pcf: line 132, column 35
    function action_48 () : void {
      toggleIndividualStacks( profilerConfig )
    }
    
    // 'action' attribute on BooleanRadioCell (id=StackTraceTracking_Cell) at ProfilerConfigurationScreen.pcf: line 143, column 35
    function action_52 () : void {
      toggleStackTraceTracking( profilerConfig )
    }
    
    // 'action' attribute on BooleanRadioCell (id=QueryOptimizerTracing_Cell) at ProfilerConfigurationScreen.pcf: line 157, column 35
    function action_56 () : void {
      toggleQueryOptimizerTracing( profilerConfig )
    }
    
    // 'action' attribute on BooleanRadioCell (id=ExtendedQueryTracing_Cell) at ProfilerConfigurationScreen.pcf: line 170, column 35
    function action_62 () : void {
      toggleExtendedQueryTracing( profilerConfig )
    }
    
    // 'action' attribute on BooleanRadioCell (id=DiffDbmsCounters_Cell) at ProfilerConfigurationScreen.pcf: line 183, column 35
    function action_68 () : void {
      toggleDiffDbmsCounters( profilerConfig )
    }
    
    // 'action' attribute on MenuItem (id=ToggleStackTraceTracking) at ProfilerConfigurationScreen.pcf: line 197, column 285
    function action_76 () : void {
      toggleStackTraceTracking( profilerConfig )
    }
    
    // 'action' attribute on MenuItem (id=ToggleQueryOptimizerTracing) at ProfilerConfigurationScreen.pcf: line 202, column 100
    function action_79 () : void {
      toggleQueryOptimizerTracing( profilerConfig )
    }
    
    // 'action' attribute on MenuItem (id=ToggleDiffDbmsCounters) at ProfilerConfigurationScreen.pcf: line 207, column 98
    function action_82 () : void {
      toggleDiffDbmsCounters( profilerConfig )
    }
    
    // 'action' attribute on MenuItem (id=UpdateDbmsCounters) at ProfilerConfigurationScreen.pcf: line 214, column 141
    function action_85 () : void {
      setDbmsCounterThresholdMs(profilerConfig, getNewDbmsCounterThresholdMs())
    }
    
    // 'action' attribute on MenuItem (id=Delete) at ProfilerConfigurationScreen.pcf: line 219, column 86
    function action_89 () : void {
      disableProfilingFor( profilerConfig )
    }
    
    // 'available' attribute on BooleanRadioCell (id=IndividualStacks_Cell) at ProfilerConfigurationScreen.pcf: line 132, column 35
    function available_47 () : java.lang.Boolean {
      return profilerConfig typeis WQProfilerConfig
    }
    
    // 'available' attribute on BooleanRadioCell (id=QueryOptimizerTracing_Cell) at ProfilerConfigurationScreen.pcf: line 157, column 35
    function available_55 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isQueryOptimizerTracingAvailable()
    }
    
    // 'available' attribute on BooleanRadioCell (id=ExtendedQueryTracing_Cell) at ProfilerConfigurationScreen.pcf: line 170, column 35
    function available_61 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isExtendedQueryTracingAvailable()
    }
    
    // 'available' attribute on BooleanRadioCell (id=DiffDbmsCounters_Cell) at ProfilerConfigurationScreen.pcf: line 183, column 35
    function available_67 () : java.lang.Boolean {
      return gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=IndividualStacks_Cell) at ProfilerConfigurationScreen.pcf: line 132, column 35
    function iconColor_50 () : gw.api.web.color.GWColor {
      return getProfilerIconColor(profilerConfig typeis WQProfilerConfig, \ -> (profilerConfig as WQProfilerConfig).IndividualStacks == true )
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=StackTraceTracking_Cell) at ProfilerConfigurationScreen.pcf: line 143, column 35
    function iconColor_54 () : gw.api.web.color.GWColor {
      return getProfilerIconColor(true, \ -> profilerConfig.StackTraceTracking)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=QueryOptimizerTracing_Cell) at ProfilerConfigurationScreen.pcf: line 157, column 35
    function iconColor_59 () : gw.api.web.color.GWColor {
      return getProfilerIconColor(gw.api.profiler.ProfilerPageHelper.isQueryOptimizerTracingAvailable(), \ -> profilerConfig.QueryOptimizerTracing)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=ExtendedQueryTracing_Cell) at ProfilerConfigurationScreen.pcf: line 170, column 35
    function iconColor_65 () : gw.api.web.color.GWColor {
      return getProfilerIconColor(gw.api.profiler.ProfilerPageHelper.isExtendedQueryTracingAvailable(), \ -> profilerConfig.ExtendedQueryTracing)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=DiffDbmsCounters_Cell) at ProfilerConfigurationScreen.pcf: line 183, column 35
    function iconColor_71 () : gw.api.web.color.GWColor {
      return getProfilerIconColor(gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable(), \ -> profilerConfig.DiffDbmsCounters)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=QueryOptimizerTracing_Cell) at ProfilerConfigurationScreen.pcf: line 157, column 35
    function iconLabel_57 () : java.lang.String {
      return gw.api.profiler.ProfilerPageHelper.isQueryOptimizerTracingAvailable()?"":DisplayKey.get("Web.Profiler.NotSupportedByDatabase")
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=ExtendedQueryTracing_Cell) at ProfilerConfigurationScreen.pcf: line 170, column 35
    function iconLabel_63 () : java.lang.String {
      return gw.api.profiler.ProfilerPageHelper.isExtendedQueryTracingAvailable()?"":DisplayKey.get("Web.Profiler.NotSupportedByDatabase")
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=DiffDbmsCounters_Cell) at ProfilerConfigurationScreen.pcf: line 183, column 35
    function iconLabel_69 () : java.lang.String {
      return gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable()?"":DisplayKey.get("Web.Profiler.NotSupportedByDatabase")
    }
    
    // 'icon' attribute on BooleanRadioCell (id=IndividualStacks_Cell) at ProfilerConfigurationScreen.pcf: line 132, column 35
    function icon_49 () : java.lang.String {
      return getProfilerIcon(profilerConfig typeis WQProfilerConfig, \ -> (profilerConfig as WQProfilerConfig).IndividualStacks == true)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=StackTraceTracking_Cell) at ProfilerConfigurationScreen.pcf: line 143, column 35
    function icon_53 () : java.lang.String {
      return getProfilerIcon(true, \ -> profilerConfig.StackTraceTracking)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=QueryOptimizerTracing_Cell) at ProfilerConfigurationScreen.pcf: line 157, column 35
    function icon_58 () : java.lang.String {
      return getProfilerIcon(gw.api.profiler.ProfilerPageHelper.isQueryOptimizerTracingAvailable(), \ -> profilerConfig.QueryOptimizerTracing)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=ExtendedQueryTracing_Cell) at ProfilerConfigurationScreen.pcf: line 170, column 35
    function icon_64 () : java.lang.String {
      return getProfilerIcon(gw.api.profiler.ProfilerPageHelper.isExtendedQueryTracingAvailable(), \ -> profilerConfig.ExtendedQueryTracing)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=DiffDbmsCounters_Cell) at ProfilerConfigurationScreen.pcf: line 183, column 35
    function icon_70 () : java.lang.String {
      return getProfilerIcon(gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable(), \ -> profilerConfig.DiffDbmsCounters)
    }
    
    // 'label' attribute on MenuItem (id=ToggleStackTraceTracking) at ProfilerConfigurationScreen.pcf: line 197, column 285
    function label_77 () : java.lang.Object {
      return profilerConfig.StackTraceTracking?DisplayKey.get("Web.Profiler.Disable",  DisplayKey.get("Web.Profiler.StackTraceTracking") ):DisplayKey.get("Web.Profiler.Enable",  DisplayKey.get("Web.Profiler.StackTraceTracking") )
    }
    
    // 'label' attribute on MenuItem (id=ToggleQueryOptimizerTracing) at ProfilerConfigurationScreen.pcf: line 202, column 100
    function label_80 () : java.lang.Object {
      return profilerConfig.QueryOptimizerTracing?DisplayKey.get("Web.Profiler.Disable",  DisplayKey.get("Web.Profiler.QueryOptimizerTracing") ):DisplayKey.get("Web.Profiler.Enable",  DisplayKey.get("Web.Profiler.QueryOptimizerTracing") )
    }
    
    // 'label' attribute on MenuItem (id=ToggleDiffDbmsCounters) at ProfilerConfigurationScreen.pcf: line 207, column 98
    function label_83 () : java.lang.Object {
      return profilerConfig.DiffDbmsCounters?DisplayKey.get("Web.Profiler.Disable",  DisplayKey.get("Web.Profiler.DiffDbmsInstrumentationCounters") ):DisplayKey.get("Web.Profiler.Enable",  DisplayKey.get("Web.Profiler.DiffDbmsInstrumentationCounters") )
    }
    
    // 'label' attribute on MenuItem (id=UpdateDbmsCounters) at ProfilerConfigurationScreen.pcf: line 214, column 141
    function label_86 () : java.lang.Object {
      return DisplayKey.get("Web.Profiler.Edit", DisplayKey.get("Web.Profiler.DbmsInstrumentationCaptureThresholdMs"))
    }
    
    // 'promptDefault' attribute on MenuItem (id=UpdateDbmsCounters) at ProfilerConfigurationScreen.pcf: line 214, column 141
    function promptDefault_87 () : java.lang.String {
      return profilerConfig.DbmsCounterThresholdMs as String
    }
    
    // 'promptQuestion' attribute on MenuItem (id=UpdateDbmsCounters) at ProfilerConfigurationScreen.pcf: line 214, column 141
    function promptQuestion_88 () : java.lang.String {
      return DisplayKey.get("Web.Profiler.NewValue", DisplayKey.get("Web.Profiler.DbmsInstrumentationCaptureThresholdMs"))
    }
    
    // 'value' attribute on TextCell (id=EntryPointName_Cell) at ProfilerConfigurationScreen.pcf: line 120, column 52
    function valueRoot_45 () : java.lang.Object {
      return profilerConfig
    }
    
    // 'value' attribute on TextCell (id=EntryPointType_Cell) at ProfilerConfigurationScreen.pcf: line 113, column 72
    function value_42 () : java.lang.String {
      return getDisplayNameForType(profilerConfig.Subtype)
    }
    
    // 'value' attribute on TextCell (id=EntryPointName_Cell) at ProfilerConfigurationScreen.pcf: line 120, column 52
    function value_44 () : java.lang.String {
      return profilerConfig.EntryPoint
    }
    
    // 'value' attribute on TextCell (id=DbmsCounterThresholdMs_Cell) at ProfilerConfigurationScreen.pcf: line 190, column 35
    function value_74 () : java.lang.String {
      return profilerConfig.DiffDbmsCounters ? profilerConfig.DbmsCounterThresholdMs.toString() : ""
    }
    
    // 'visible' attribute on MenuItem (id=UpdateDbmsCounters) at ProfilerConfigurationScreen.pcf: line 214, column 141
    function visible_84 () : java.lang.Boolean {
      return profilerConfig.DiffDbmsCounters && gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable()
    }
    
    property get profilerConfig () : entity.ProfilerConfig {
      return getIteratedValue(1) as entity.ProfilerConfig
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/profiler/ProfilerConfigurationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProfilerConfigurationScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableMessageDestinationButton) at ProfilerConfigurationScreen.pcf: line 49, column 100
    function action_11 () : void {
      EnableMessageDestinationPopup.push(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableRestOperationButton) at ProfilerConfigurationScreen.pcf: line 53, column 95
    function action_13 () : void {
      EnableRestOperationPopup.push(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableWebServiceButton) at ProfilerConfigurationScreen.pcf: line 57, column 92
    function action_15 () : void {
      EnableWebServicePopup.push(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableStartablePluginButton) at ProfilerConfigurationScreen.pcf: line 61, column 97
    function action_17 () : void {
      EnableStartablePluginPopup.push(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableGosuServletButton) at ProfilerConfigurationScreen.pcf: line 65, column 93
    function action_19 () : void {
      EnableGosuServletPopup.push(enableAlertBar)
    }
    
    // 'action' attribute on AlertBar (id=RestartToTakeEffectAlert) at ProfilerConfigurationScreen.pcf: line 23, column 36
    function action_2 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=EnableJsonRpcButton) at ProfilerConfigurationScreen.pcf: line 70, column 98
    function action_21 () : void {
      gw.api.profiler.GosuProfilerPageHelper.enableProfilingFor( typekey.ProfilerConfig.TC_WSPROFILERCONFIG, gw.api.profiler.WebServiceProfiler.getEntryPointName( "edge.servlet.jsonrpc.JsonRpcServlet", "service" ) )
    }
    
    // 'action' attribute on AlertBar (id=ReadOnlyModeAlert) at ProfilerConfigurationScreen.pcf: line 28, column 59
    function action_4 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=EnableBatchProcessButton) at ProfilerConfigurationScreen.pcf: line 41, column 94
    function action_7 () : void {
      EnableBatchProcessPopup.push(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableWorkQueueButton) at ProfilerConfigurationScreen.pcf: line 45, column 91
    function action_9 () : void {
      EnableWorkQueuePopup.push(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableWorkQueueButton) at ProfilerConfigurationScreen.pcf: line 45, column 91
    function action_dest_10 () : pcf.api.Destination {
      return pcf.EnableWorkQueuePopup.createDestination(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableMessageDestinationButton) at ProfilerConfigurationScreen.pcf: line 49, column 100
    function action_dest_12 () : pcf.api.Destination {
      return pcf.EnableMessageDestinationPopup.createDestination(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableRestOperationButton) at ProfilerConfigurationScreen.pcf: line 53, column 95
    function action_dest_14 () : pcf.api.Destination {
      return pcf.EnableRestOperationPopup.createDestination(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableWebServiceButton) at ProfilerConfigurationScreen.pcf: line 57, column 92
    function action_dest_16 () : pcf.api.Destination {
      return pcf.EnableWebServicePopup.createDestination(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableStartablePluginButton) at ProfilerConfigurationScreen.pcf: line 61, column 97
    function action_dest_18 () : pcf.api.Destination {
      return pcf.EnableStartablePluginPopup.createDestination(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableGosuServletButton) at ProfilerConfigurationScreen.pcf: line 65, column 93
    function action_dest_20 () : pcf.api.Destination {
      return pcf.EnableGosuServletPopup.createDestination(enableAlertBar)
    }
    
    // 'action' attribute on ToolbarButton (id=EnableBatchProcessButton) at ProfilerConfigurationScreen.pcf: line 41, column 94
    function action_dest_8 () : pcf.api.Destination {
      return pcf.EnableBatchProcessPopup.createDestination(enableAlertBar)
    }
    
    // 'def' attribute on PanelRef at ProfilerConfigurationScreen.pcf: line 30, column 95
    function def_onEnter_5 (def :  pcf.EnableWebProfilerPanelSet) : void {
      def.onEnter(enableWebProfilingActions, disableWebProfilingActions)
    }
    
    // 'def' attribute on PanelRef at ProfilerConfigurationScreen.pcf: line 30, column 95
    function def_refreshVariables_6 (def :  pcf.EnableWebProfilerPanelSet) : void {
      def.refreshVariables(enableWebProfilingActions, disableWebProfilingActions)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 88, column 55
    function filter_22 () : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'filter' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 91, column 71
    function filter_23 () : gw.api.filters.IFilter {
      return new gw.api.profiler.ProfilerConfigTypeKeyFilter( TC_BPPROFILERCONFIG )
    }
    
    // 'filter' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 94, column 71
    function filter_25 () : gw.api.filters.IFilter {
      return new gw.api.profiler.ProfilerConfigTypeKeyFilter( TC_WQPROFILERCONFIG )
    }
    
    // 'filter' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 97, column 69
    function filter_27 () : gw.api.filters.IFilter {
      return new gw.api.profiler.ProfilerConfigTypeKeyFilter( TC_MDPROFILERCONFIG )
    }
    
    // 'filter' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 100, column 71
    function filter_29 () : gw.api.filters.IFilter {
      return new gw.api.profiler.ProfilerConfigTypeKeyFilter( TC_RESTPROFILERCONFIG )
    }
    
    // 'filter' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 103, column 71
    function filter_31 () : gw.api.filters.IFilter {
      return new gw.api.profiler.ProfilerConfigTypeKeyFilter( TC_WSPROFILERCONFIG )
    }
    
    // 'initialValue' attribute on Variable at ProfilerConfigurationScreen.pcf: line 18, column 25
    function initialValue_0 () : boolean[] {
      return new boolean[1]
    }
    
    // 'label' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 91, column 71
    function label_24 () : java.lang.Object {
      return getDisplayNameForType( TC_BPPROFILERCONFIG )
    }
    
    // 'label' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 94, column 71
    function label_26 () : java.lang.Object {
      return getDisplayNameForType( TC_WQPROFILERCONFIG )
    }
    
    // 'label' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 97, column 69
    function label_28 () : java.lang.Object {
      return getDisplayNameForType(TC_MDPROFILERCONFIG)
    }
    
    // 'label' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 100, column 71
    function label_30 () : java.lang.Object {
      return getDisplayNameForType(TC_RESTPROFILERCONFIG)
    }
    
    // 'label' attribute on ToolbarFilterOption at ProfilerConfigurationScreen.pcf: line 103, column 71
    function label_32 () : java.lang.Object {
      return getDisplayNameForType( TC_WSPROFILERCONFIG )
    }
    
    // 'sortBy' attribute on TextCell (id=EntryPointType_Cell) at ProfilerConfigurationScreen.pcf: line 113, column 72
    function sortValue_33 (profilerConfig :  entity.ProfilerConfig) : java.lang.Object {
      return profilerConfig.Subtype
    }
    
    // 'value' attribute on TextCell (id=EntryPointName_Cell) at ProfilerConfigurationScreen.pcf: line 120, column 52
    function sortValue_34 (profilerConfig :  entity.ProfilerConfig) : java.lang.Object {
      return profilerConfig.EntryPoint
    }
    
    // 'value' attribute on BooleanRadioCell (id=IndividualStacks_Cell) at ProfilerConfigurationScreen.pcf: line 132, column 35
    function sortValue_35 (profilerConfig :  entity.ProfilerConfig) : java.lang.Object {
      return true
    }
    
    // 'value' attribute on BooleanRadioCell (id=StackTraceTracking_Cell) at ProfilerConfigurationScreen.pcf: line 143, column 35
    function sortValue_36 (profilerConfig :  entity.ProfilerConfig) : java.lang.Object {
      return true
    }
    
    // 'value' attribute on BooleanRadioCell (id=QueryOptimizerTracing_Cell) at ProfilerConfigurationScreen.pcf: line 157, column 35
    function sortValue_37 (profilerConfig :  entity.ProfilerConfig) : java.lang.Object {
      return true
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExtendedQueryTracing_Cell) at ProfilerConfigurationScreen.pcf: line 170, column 35
    function sortValue_38 (profilerConfig :  entity.ProfilerConfig) : java.lang.Object {
      return true
    }
    
    // 'value' attribute on BooleanRadioCell (id=DiffDbmsCounters_Cell) at ProfilerConfigurationScreen.pcf: line 183, column 35
    function sortValue_39 (profilerConfig :  entity.ProfilerConfig) : java.lang.Object {
      return true
    }
    
    // 'sortBy' attribute on TextCell (id=DbmsCounterThresholdMs_Cell) at ProfilerConfigurationScreen.pcf: line 190, column 35
    function sortValue_41 (profilerConfig :  entity.ProfilerConfig) : java.lang.Object {
      return profilerConfig.DbmsCounterThresholdMs
    }
    
    // 'toRemove' attribute on RowIterator at ProfilerConfigurationScreen.pcf: line 83, column 87
    function toRemove_90 (profilerConfig :  entity.ProfilerConfig) : void {
      profilerConfig.remove()
    }
    
    // 'tooltip' attribute on TextCell (id=DbmsCounterThresholdMs_Cell) at ProfilerConfigurationScreen.pcf: line 190, column 35
    function tooltip_40 () : java.lang.String {
      return gw.api.profiler.ProfilerPageHelper.isDbmsCounterSnapshotAvailable()?"":DisplayKey.get("Web.Profiler.NotSupportedByDatabase")
    }
    
    // 'value' attribute on RowIterator at ProfilerConfigurationScreen.pcf: line 83, column 87
    function value_91 () : gw.api.database.IQueryBeanResult<entity.ProfilerConfig> {
      return gw.api.database.Query.make(ProfilerConfig).compare("ProfilerEnabled", Equals, true).select()
    }
    
    // 'visible' attribute on AlertBar (id=RestartToTakeEffectAlert) at ProfilerConfigurationScreen.pcf: line 23, column 36
    function visible_1 () : java.lang.Boolean {
      return enableAlertBar[0]
    }
    
    // 'visible' attribute on AlertBar (id=ReadOnlyModeAlert) at ProfilerConfigurationScreen.pcf: line 28, column 59
    function visible_3 () : java.lang.Boolean {
      return gw.api.system.server.ServerUtil.ReadOnly
    }
    
    property get disableWebProfilingActions () : block() {
      return getRequireValue("disableWebProfilingActions", 0) as block()
    }
    
    property set disableWebProfilingActions ($arg :  block()) {
      setRequireValue("disableWebProfilingActions", 0, $arg)
    }
    
    property get enableAlertBar () : boolean[] {
      return getVariableValue("enableAlertBar", 0) as boolean[]
    }
    
    property set enableAlertBar ($arg :  boolean[]) {
      setVariableValue("enableAlertBar", 0, $arg)
    }
    
    property get enableWebProfilingActions () : block() {
      return getRequireValue("enableWebProfilingActions", 0) as block()
    }
    
    property set enableWebProfilingActions ($arg :  block()) {
      setRequireValue("enableWebProfilingActions", 0, $arg)
    }
    
    // new line not reformated    
    
    
    function getDisplayNameForType(subtype : typekey.ProfilerConfig) : String {
      if (subtype == TC_BPPROFILERCONFIG) {
        return DisplayKey.get("Web.Profiler.BatchProcess")
      } else if (subtype == TC_WQPROFILERCONFIG) {
        return DisplayKey.get("Web.Profiler.WorkQueue")
      } else if (subtype == TC_WSPROFILERCONFIG) {
        return DisplayKey.get("Web.Profiler.WebService")
      } else if (subtype == TC_MDPROFILERCONFIG) {
        return DisplayKey.get("Web.Profiler.MessageDestination")
      } else if (subtype == TC_RESTPROFILERCONFIG) {
        return DisplayKey.get("Web.Profiler.RestOperation")
      } else {
        return subtype.DisplayName
      }
    }
    
    function enableProfilingFor(type : typekey.ProfilerConfig, entryPointName : String) : entity.ProfilerConfig {
      var profilerConfig : entity.ProfilerConfig
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
    
        profilerConfig = com.guidewire.pl.system.profiler.ProfilerConfiguration.getProfilerConfigOrCreateAllOffProfilerConfig(type, entryPointName)
        profilerConfig = bundle.add(profilerConfig)
        profilerConfig.ProfilerEnabled = true
      })
      return profilerConfig
    }
    
    function disableProfilingFor(profilerConfig : ProfilerConfig) {
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
        bundle.remove(profilerConfig)
      })
    }
    
    function toggleIndividualStacks(profilerConfig : ProfilerConfig) {
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
        var localProfilerConfig = bundle.add(profilerConfig) as WQProfilerConfig
        localProfilerConfig.IndividualStacks = !localProfilerConfig.IndividualStacks
      })
    }
    
    function toggleStackTraceTracking(profilerConfig : ProfilerConfig) {
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
        var localProfilerConfig = bundle.add(profilerConfig)
        localProfilerConfig.StackTraceTracking = !profilerConfig.StackTraceTracking
      })
    }
    
    function toggleQueryOptimizerTracing(profilerConfig : ProfilerConfig) {
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
        var localProfilerConfig = bundle.add(profilerConfig)
        localProfilerConfig.QueryOptimizerTracing = !profilerConfig.QueryOptimizerTracing
      })
    }
    
    function toggleExtendedQueryTracing(profilerConfig : ProfilerConfig) {
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
        var localProfilerConfig = bundle.add(profilerConfig)
        localProfilerConfig.ExtendedQueryTracing = !profilerConfig.ExtendedQueryTracing
      })
    }
    
    function setDbmsCounterThresholdMs(profilerConfig : ProfilerConfig, dbmsCounterThresholdMs : int) {
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
        var localProfilerConfig = bundle.add(profilerConfig)
        localProfilerConfig.DbmsCounterThresholdMs = dbmsCounterThresholdMs
      })
    }
    
    function getNewDbmsCounterThresholdMs() : int {
      try {
        return gw.api.web.WebUtil.getActionEventParameter().toInt()
      } catch (e : NumberFormatException) {
        throw new gw.api.util.DisplayableException(DisplayKey.get("Java.Validation.Number.NotAnInteger",
            DisplayKey.get("Web.Profiler.DbmsInstrumentationCaptureThresholdMs")), e)
      }
    }
    
    function toggleDiffDbmsCounters(profilerConfig : ProfilerConfig) {
      gw.transaction.Transaction.runWithNewBundle(\bundle -> {
        var localProfilerConfig = bundle.add(profilerConfig)
        localProfilerConfig.DiffDbmsCounters = !profilerConfig.DiffDbmsCounters
      })
    }
    
    function leavePopup() {
      gw.api.profiler.WebSessionProfilerPageHelper.disableProfiler()
    }
    
    function getProfilerIcon(enabled : boolean, value : Supplier<Boolean>) : String {
      if(!enabled) {
        return "circle";
      }
      return value.get() ? "circle_checkmark" : "circle_x";
    }
    
    function getProfilerIconColor(enabled : boolean, value : Supplier<Boolean>) : GWColor {
      if(!enabled) {
        return GWColor.THEME_ALERT_NEUTRAL;
      }
      return value.get() ? GWColor.THEME_ALERT_SUCCESS : GWColor.THEME_ALERT_ERROR;
    }
    
    
  }
  
  
}