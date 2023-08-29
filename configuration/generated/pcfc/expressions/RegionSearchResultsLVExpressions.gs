package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/regionsearch/RegionSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionSearchResultsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/regionsearch/RegionSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RegionSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RegionSearchResultsLV.pcf: line 38, column 25
    function action_1 () : void {
      RegionDetail.go(Region)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at RegionSearchResultsLV.pcf: line 38, column 25
    function action_dest_2 () : pcf.api.Destination {
      return pcf.RegionDetail.createDestination(Region)
    }
    
    // 'canPick' attribute on RowIterator at RegionSearchResultsLV.pcf: line 29, column 73
    function canPick_9 () : java.lang.Boolean {
      return EnablePick
    }
    
    // 'checkBoxVisible' attribute on RowIterator at RegionSearchResultsLV.pcf: line 29, column 73
    function checkBoxVisible_10 () : java.lang.Boolean {
      return EnableCheckbox
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RegionSearchResultsLV.pcf: line 38, column 25
    function valueRoot_4 () : java.lang.Object {
      return Region
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RegionSearchResultsLV.pcf: line 38, column 25
    function value_3 () : java.lang.String {
      return Region.Name
    }
    
    // 'value' attribute on TextCell (id=Zones_Cell) at RegionSearchResultsLV.pcf: line 44, column 33
    function value_6 () : java.lang.String {
      return Region.Zones
    }
    
    property get Region () : entity.Region {
      return getIteratedValue(1) as entity.Region
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/regionsearch/RegionSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at RegionSearchResultsLV.pcf: line 38, column 25
    function sortValue_0 (Region :  entity.Region) : java.lang.Object {
      return Region.Name
    }
    
    // 'value' attribute on RowIterator at RegionSearchResultsLV.pcf: line 29, column 73
    function value_11 () : gw.api.database.IQueryBeanResult<entity.Region> {
      return SearchResult
    }
    
    property get EnableCheckbox () : boolean {
      return getRequireValue("EnableCheckbox", 0) as java.lang.Boolean
    }
    
    property set EnableCheckbox ($arg :  boolean) {
      setRequireValue("EnableCheckbox", 0, $arg)
    }
    
    property get EnablePick () : boolean {
      return getRequireValue("EnablePick", 0) as java.lang.Boolean
    }
    
    property set EnablePick ($arg :  boolean) {
      setRequireValue("EnablePick", 0, $arg)
    }
    
    property get SearchResult () : gw.api.database.IQueryBeanResult<Region> {
      return getRequireValue("SearchResult", 0) as gw.api.database.IQueryBeanResult<Region>
    }
    
    property set SearchResult ($arg :  gw.api.database.IQueryBeanResult<Region>) {
      setRequireValue("SearchResult", 0, $arg)
    }
    
    
  }
  
  
}