package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/Attributes.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AttributesExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/usersandsecurity/Attributes.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AttributesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'parent' attribute on Page (id=Attributes) at Attributes.pcf: line 8, column 79
    static function parent_0 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    override property get CurrentLocation () : pcf.Attributes {
      return super.CurrentLocation as pcf.Attributes
    }
    
    
  }
  
  
}