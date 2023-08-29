package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/SecurityZones.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SecurityZonesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/SecurityZones.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SecurityZonesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'parent' attribute on Page (id=SecurityZones) at SecurityZones.pcf: line 8, column 82
    static function parent_0 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    override property get CurrentLocation () : pcf.SecurityZones {
      return super.CurrentLocation as pcf.SecurityZones
    }
    
    
  }
  
  
}