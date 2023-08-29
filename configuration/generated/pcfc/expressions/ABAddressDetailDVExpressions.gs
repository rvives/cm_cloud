package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ABAddressDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABAddressDetailDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ABAddressDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABAddressDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ABAddressDetailDV.pcf: line 13, column 92
    function def_onEnter_0 (def :  pcf.AddressOwnerInputSet) : void {
      def.onEnter(new gw.api.address.SecondaryAddressOwner(address), true)
    }
    
    // 'def' attribute on InputSetRef at ABAddressDetailDV.pcf: line 13, column 92
    function def_refreshVariables_1 (def :  pcf.AddressOwnerInputSet) : void {
      def.refreshVariables(new gw.api.address.SecondaryAddressOwner(address), true)
    }
    
    // 'mode' attribute on InputSetRef at ABAddressDetailDV.pcf: line 13, column 92
    function mode_2 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(address.Country).PCFMode
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    
  }
  
  
}