package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/businesssettings/ActivityPatterns.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityPatternsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/businesssettings/ActivityPatterns.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityPatternsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // Page (id=ActivityPatterns) at ActivityPatterns.pcf: line 7, column 85
    static function parent_0 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ActivityPatterns {
      return super.CurrentLocation as pcf.ActivityPatterns
    }
    
    
  }
  
  
}