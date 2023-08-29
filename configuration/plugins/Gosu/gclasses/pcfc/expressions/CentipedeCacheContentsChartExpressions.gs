package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/infopages/CentipedeCacheContentsChart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CentipedeCacheContentsChartExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/infopages/CentipedeCacheContentsChart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CentipedeCacheContentsChartExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'categoryLabel' attribute on DataSeries at CentipedeCacheContentsChart.pcf: line 18, column 29
    function categoryLabel_0 (value :  gw.util.Pair<java.lang.String, java.lang.Integer>) : java.lang.String {
      return value.First
    }
    
    // 'dataValues' attribute on DataSeries at CentipedeCacheContentsChart.pcf: line 18, column 29
    function dataValues_1 () : java.lang.Object {
      return contentsMap.Second
    }
    
    // 'label' attribute on ChartPanel (id=CentipedeCacheContentsChart) at CentipedeCacheContentsChart.pcf: line 10, column 17
    function label_3 () : java.lang.String {
      return gw.api.cache2.CacheInfoPageHelper.getCacheContentsLabel(contentsMap)
    }
    
    // 'value' attribute on DataSeries at CentipedeCacheContentsChart.pcf: line 18, column 29
    function value_2 (value :  gw.util.Pair<java.lang.String, java.lang.Integer>) : java.lang.Object {
      return value.Second
    }
    
    property get contentsMap () : gw.util.Pair<java.lang.Integer, java.util.ArrayList<gw.util.Pair<java.lang.String, java.lang.Integer>>> {
      return getRequireValue("contentsMap", 0) as gw.util.Pair<java.lang.Integer, java.util.ArrayList<gw.util.Pair<java.lang.String, java.lang.Integer>>>
    }
    
    property set contentsMap ($arg :  gw.util.Pair<java.lang.Integer, java.util.ArrayList<gw.util.Pair<java.lang.String, java.lang.Integer>>>) {
      setRequireValue("contentsMap", 0, $arg)
    }
    
    
  }
  
  
}