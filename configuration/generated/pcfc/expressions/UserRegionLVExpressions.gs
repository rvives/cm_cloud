package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/users/UserRegionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserRegionLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserRegionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserRegionLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserRegionLV.pcf: line 27, column 43
    function valueRoot_4 () : java.lang.Object {
      return userRegion.Region
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserRegionLV.pcf: line 27, column 43
    function value_3 () : java.lang.String {
      return userRegion.Region.Name
    }
    
    // 'value' attribute on TextCell (id=Zones_Cell) at UserRegionLV.pcf: line 31, column 44
    function value_6 () : java.lang.String {
      return userRegion.Region.Zones
    }
    
    property get userRegion () : entity.UserRegion {
      return getIteratedValue(1) as entity.UserRegion
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/users/UserRegionLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserRegionLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at UserRegionLV.pcf: line 22, column 39
    function conversionExpression_2 (PickedValue :  Region[]) : entity.UserRegion[] {
      return gw.api.admin.UserRegionUtil.createUserRegions(PickedValue, CurrentLocation)
    }
    
    // 'pickLocation' attribute on RowIterator at UserRegionLV.pcf: line 22, column 39
    function pickLocation_9 () : void {
      UserRegionPopup.push()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at UserRegionLV.pcf: line 27, column 43
    function sortValue_0 (userRegion :  entity.UserRegion) : java.lang.Object {
      return userRegion.Region.Name
    }
    
    // 'value' attribute on TextCell (id=Zones_Cell) at UserRegionLV.pcf: line 31, column 44
    function sortValue_1 (userRegion :  entity.UserRegion) : java.lang.Object {
      return userRegion.Region.Zones
    }
    
    // 'toAdd' attribute on RowIterator at UserRegionLV.pcf: line 22, column 39
    function toAdd_10 (userRegion :  entity.UserRegion) : void {
      user.addToRegions(userRegion)
    }
    
    // 'toRemove' attribute on RowIterator at UserRegionLV.pcf: line 22, column 39
    function toRemove_11 (userRegion :  entity.UserRegion) : void {
      user.removeFromRegions(userRegion)
    }
    
    // 'value' attribute on RowIterator at UserRegionLV.pcf: line 22, column 39
    function value_12 () : entity.UserRegion[] {
      return user.Regions
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}