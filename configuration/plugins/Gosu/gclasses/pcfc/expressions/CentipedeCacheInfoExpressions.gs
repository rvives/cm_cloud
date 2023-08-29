package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/CentipedeCacheInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CentipedeCacheInfoExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/CentipedeCacheInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CentipedeCacheInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at CentipedeCacheInfo.pcf: line 20, column 63
    function action_2 () : void {
      pageHelper.reload()
    }
    
    // 'action' attribute on ToolbarButton (id=DownloadButton) at CentipedeCacheInfo.pcf: line 25, column 105
    function action_3 () : void {
      pageHelper.download()
    }
    
    // 'action' attribute on ToolbarButton (id=ClearButton) at CentipedeCacheInfo.pcf: line 30, column 85
    function action_4 () : void {
      com.guidewire.pl.system.dependency.PLDependencies.getGlobalCache().flushCaches()
    }
    
    // 'categoryLabel' attribute on DataSeries at CentipedeCacheInfo.pcf: line 80, column 53
    function categoryLabel_19 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.String {
      return pageHelper.getCategoryLabel(value)
    }
    
    // 'categoryLabel' attribute on DualAxisDataSeries at CentipedeCacheInfo.pcf: line 89, column 43
    function categoryLabel_22 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return pageHelper.getCategoryLabel(value)
    }
    
    // 'dataValues' attribute on DataSeries at CentipedeCacheInfo.pcf: line 80, column 53
    function dataValues_20 () : java.lang.Object {
      return pageHelper.Snapshots
    }
    
    // 'def' attribute on PanelRef at CentipedeCacheInfo.pcf: line 224, column 93
    function def_onEnter_64 (def :  pcf.CentipedeAgeDistributionLargeChart) : void {
      def.onEnter(pageHelper, pageHelper.LatestSnapshot)
    }
    
    // 'def' attribute on PanelRef at CentipedeCacheInfo.pcf: line 231, column 79
    function def_onEnter_67 (def :  pcf.CentipedeCacheContentsChart) : void {
      def.onEnter(pageHelper.CombinedContentsMap)
    }
    
    // 'def' attribute on PanelRef at CentipedeCacheInfo.pcf: line 224, column 93
    function def_refreshVariables_65 (def :  pcf.CentipedeAgeDistributionLargeChart) : void {
      def.refreshVariables(pageHelper, pageHelper.LatestSnapshot)
    }
    
    // 'def' attribute on PanelRef at CentipedeCacheInfo.pcf: line 231, column 79
    function def_refreshVariables_68 (def :  pcf.CentipedeCacheContentsChart) : void {
      def.refreshVariables(pageHelper.CombinedContentsMap)
    }
    
    // 'value' attribute on TextInput (id=StaleTime_Input) at CentipedeCacheInfo.pcf: line 45, column 44
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      (com.guidewire.pl.system.dependency.PLDependencies.getGlobalCache() as com.guidewire.pl.system.cache2.GlobalCacheImpl).CacheStaleTimeMinutes = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=MaxCacheSpace_Input) at CentipedeCacheInfo.pcf: line 39, column 41
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      (com.guidewire.pl.system.dependency.PLDependencies.getGlobalCache() as com.guidewire.pl.system.cache2.GlobalCacheImpl).MaxCacheSpaceKB = (__VALUE_TO_SET as java.lang.Long)
    }
    
    // 'initialValue' attribute on Variable at CentipedeCacheInfo.pcf: line 13, column 49
    function initialValue_0 () : gw.api.cache2.CacheInfoPageHelper {
      return gw.api.cache2.CacheInfoPageHelper.INSTANCE
    }
    
    // EditButtons at CentipedeCacheInfo.pcf: line 16, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'lowerBound' attribute on DomainAxis at CentipedeCacheInfo.pcf: line 70, column 41
    function lowerBound_16 () : java.lang.Double {
      return - pageHelper.NumAges
    }
    
    // Page (id=CentipedeCacheInfo) at CentipedeCacheInfo.pcf: line 9, column 87
    static function parent_69 () : pcf.api.Destination {
      return pcf.CentipedeCacheInfoLG.createDestination()
    }
    
    // 'title' attribute on TitleBar at CentipedeCacheInfo.pcf: line 226, column 86
    function title_63 () : java.lang.String {
      return pageHelper.getAgeDistributionLabel(pageHelper.LatestSnapshot)
    }
    
    // 'title' attribute on TitleBar at CentipedeCacheInfo.pcf: line 233, column 112
    function title_66 () : java.lang.String {
      return gw.api.cache2.CacheInfoPageHelper.getCacheContentsLabel(pageHelper.CombinedContentsMap)
    }
    
    // 'upperBound' attribute on DomainAxis at CentipedeCacheInfo.pcf: line 70, column 41
    function upperBound_17 () : java.lang.Double {
      return 0
    }
    
    // 'value' attribute on DateInput (id=Timestamp_Input) at CentipedeCacheInfo.pcf: line 51, column 43
    function valueRoot_14 () : java.lang.Object {
      return pageHelper
    }
    
    // 'value' attribute on TextInput (id=MaxCacheSpace_Input) at CentipedeCacheInfo.pcf: line 39, column 41
    function valueRoot_7 () : java.lang.Object {
      return (com.guidewire.pl.system.dependency.PLDependencies.getGlobalCache() as com.guidewire.pl.system.cache2.GlobalCacheImpl)
    }
    
    // 'value' attribute on DateInput (id=Timestamp_Input) at CentipedeCacheInfo.pcf: line 51, column 43
    function value_13 () : java.util.Date {
      return pageHelper.Timestamp
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 80, column 53
    function value_21 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.SpaceRetained / 1024
    }
    
    // 'value' attribute on DualAxisDataSeries at CentipedeCacheInfo.pcf: line 89, column 43
    function value_25 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumInCache
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 118, column 42
    function value_31 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumMisses
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 124, column 83
    function value_34 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumMisses + value.NumHits /* To make it stacked */
    }
    
    // 'value' attribute on DualAxisDataSeries at CentipedeCacheInfo.pcf: line 132, column 129
    function value_38 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumHits + value.NumMisses == 0 ? 0 : (value.NumMisses * 100) / (value.NumHits + value.NumMisses)
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 164, column 69
    function value_44 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumMissesBecauseEvictedWhenCacheFull
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 170, column 65
    function value_47 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumMissesBecauseEvictedDueToReap
    }
    
    // 'value' attribute on TextInput (id=MaxCacheSpace_Input) at CentipedeCacheInfo.pcf: line 39, column 41
    function value_5 () : java.lang.Long {
      return (com.guidewire.pl.system.dependency.PLDependencies.getGlobalCache() as com.guidewire.pl.system.cache2.GlobalCacheImpl).MaxCacheSpaceKB
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 198, column 60
    function value_52 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumTimesNoneToEvictWhenFull
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 204, column 58
    function value_55 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumEvictsWithinActiveTime
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 210, column 56
    function value_58 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumEvictsDueToCacheFull
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfo.pcf: line 216, column 54
    function value_61 (value :  com.guidewire.pl.system.cache2.CacheStatisticsSnapshot) : java.lang.Object {
      return value.NumEvictsDueToReaping
    }
    
    // 'value' attribute on TextInput (id=StaleTime_Input) at CentipedeCacheInfo.pcf: line 45, column 44
    function value_9 () : java.lang.Integer {
      return (com.guidewire.pl.system.dependency.PLDependencies.getGlobalCache() as com.guidewire.pl.system.cache2.GlobalCacheImpl).CacheStaleTimeMinutes
    }
    
    // 'visible' attribute on PanelRow at CentipedeCacheInfo.pcf: line 138, column 83
    function visible_62 () : java.lang.Boolean {
      return gw.api.system.PLConfigParameters.GlobalCacheDetailedStats.Value
    }
    
    override property get CurrentLocation () : pcf.CentipedeCacheInfo {
      return super.CurrentLocation as pcf.CentipedeCacheInfo
    }
    
    property get pageHelper () : gw.api.cache2.CacheInfoPageHelper {
      return getVariableValue("pageHelper", 0) as gw.api.cache2.CacheInfoPageHelper
    }
    
    property set pageHelper ($arg :  gw.api.cache2.CacheInfoPageHelper) {
      setVariableValue("pageHelper", 0, $arg)
    }
    
    
  }
  
  
}