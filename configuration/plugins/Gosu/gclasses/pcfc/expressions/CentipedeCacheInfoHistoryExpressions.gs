package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/CentipedeCacheInfoHistory.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CentipedeCacheInfoHistoryExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/CentipedeCacheInfoHistory.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CentipedeCacheInfoHistoryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at CentipedeCacheInfoHistory.pcf: line 20, column 63
    function action_1 () : void {
      pageHelper.reload()
    }
    
    // 'canVisit' attribute on Page (id=CentipedeCacheInfoHistory) at CentipedeCacheInfoHistory.pcf: line 10, column 101
    static function canVisit_42 () : java.lang.Boolean {
      return gw.api.cache2.CacheInfoPageHelper.INSTANCE.NumDaysOfRollupData > 0
    }
    
    // 'dataValues' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 44, column 44
    function dataValues_2 () : java.lang.Object {
      return pageHelper.TodayRollupSnapshot
    }
    
    // 'dataValues' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 50, column 44
    function dataValues_5 () : java.lang.Object {
      return pageHelper.LastWeekRollupSnapshot
    }
    
    // 'initialValue' attribute on Variable at CentipedeCacheInfoHistory.pcf: line 14, column 49
    function initialValue_0 () : gw.api.cache2.CacheInfoPageHelper {
      return gw.api.cache2.CacheInfoPageHelper.INSTANCE
    }
    
    // 'label' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 76, column 44
    function label_11 () : java.lang.String {
      return DisplayKey.get("Web.InternalTools.InfoPages.CacheInfo.TodayRollup") + " (" + DisplayKey.get("Web.InternalTools.InfoPages.CacheInfo.NumHits") + ")"
    }
    
    // 'label' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 82, column 44
    function label_15 () : java.lang.String {
      return DisplayKey.get("Web.InternalTools.InfoPages.CacheInfo.TodayRollup") + " (" + DisplayKey.get("Web.InternalTools.InfoPages.CacheInfo.NumMisses") + ")"
    }
    
    // 'label' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 88, column 44
    function label_19 () : java.lang.String {
      return pageHelper.getLastWeekLabel() + " (" + DisplayKey.get("Web.InternalTools.InfoPages.CacheInfo.NumHits") + ")"
    }
    
    // 'label' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 94, column 44
    function label_23 () : java.lang.String {
      return pageHelper.getLastWeekLabel() + " (" + DisplayKey.get("Web.InternalTools.InfoPages.CacheInfo.NumMisses") + ")"
    }
    
    // 'label' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 50, column 44
    function label_6 () : java.lang.String {
      return pageHelper.getLastWeekLabel()
    }
    
    // 'lowerBound' attribute on RangeAxis at CentipedeCacheInfoHistory.pcf: line 70, column 37
    function lowerBound_9 () : java.lang.Double {
      return 0
    }
    
    // Page (id=CentipedeCacheInfoHistory) at CentipedeCacheInfoHistory.pcf: line 10, column 101
    static function parent_43 () : pcf.api.Destination {
      return pcf.CentipedeCacheInfoLG.createDestination()
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 76, column 44
    function value_12 (value :  com.guidewire.pl.system.cache2.CacheStatisticsRollupSnapshotData) : java.lang.Object {
      return value.AverageNumHits
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 82, column 44
    function value_16 (value :  com.guidewire.pl.system.cache2.CacheStatisticsRollupSnapshotData) : java.lang.Object {
      return value.AverageNumMisses
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 120, column 44
    function value_28 (value :  com.guidewire.pl.system.cache2.CacheStatisticsRollupSnapshotData) : java.lang.Object {
      return value.AverageNumMisses + value.AverageNumHits == 0 ? 0 : (value.AverageNumMisses * 100) / (value.AverageNumMisses + value.AverageNumHits)
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 44, column 44
    function value_3 (value :  com.guidewire.pl.system.cache2.CacheStatisticsRollupSnapshotData) : java.lang.Object {
      return value.AverageSpaceRetained / 1024
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 152, column 44
    function value_36 (value :  com.guidewire.pl.system.cache2.CacheStatisticsRollupSnapshotData) : java.lang.Object {
      return value.AverageNumMissesWhenCacheFull
    }
    
    // 'xValue' attribute on DataSeries at CentipedeCacheInfoHistory.pcf: line 44, column 44
    function xValue_4 (value :  com.guidewire.pl.system.cache2.CacheStatisticsRollupSnapshotData) : java.lang.Object {
      return value.SliceTimestamp
    }
    
    override property get CurrentLocation () : pcf.CentipedeCacheInfoHistory {
      return super.CurrentLocation as pcf.CentipedeCacheInfoHistory
    }
    
    property get pageHelper () : gw.api.cache2.CacheInfoPageHelper {
      return getVariableValue("pageHelper", 0) as gw.api.cache2.CacheInfoPageHelper
    }
    
    property set pageHelper ($arg :  gw.api.cache2.CacheInfoPageHelper) {
      setVariableValue("pageHelper", 0, $arg)
    }
    
    
  }
  
  
}