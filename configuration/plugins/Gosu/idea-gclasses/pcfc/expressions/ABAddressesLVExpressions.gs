package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ABAddressesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABAddressesLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ABAddressesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABAddressesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RadioButtonCell (id=Primary_Cell) at ABAddressesLV.pcf: line 32, column 54
    function sortValue_0 (address :  entity.Address) : java.lang.Object {
      return address == contact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at ABAddressesLV.pcf: line 37, column 44
    function sortValue_1 (address :  entity.Address) : java.lang.Object {
      return address.AddressType
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at ABAddressesLV.pcf: line 41, column 40
    function sortValue_2 (address :  entity.Address) : java.lang.Object {
      return address.DisplayName
    }
    
    // 'toAdd' attribute on RowIterator at ABAddressesLV.pcf: line 23, column 36
    function toAdd_12 (address :  entity.Address) : void {
      contact.addAddress(address)
    }
    
    // 'toRemove' attribute on RowIterator at ABAddressesLV.pcf: line 23, column 36
    function toRemove_13 (address :  entity.Address) : void {
      contact.removeAddress(address)
    }
    
    // 'value' attribute on RowIterator at ABAddressesLV.pcf: line 23, column 36
    function value_14 () : entity.Address[] {
      return contact.AllAddresses
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ABAddressesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ABAddressesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=Primary_Cell) at ABAddressesLV.pcf: line 32, column 54
    function action_3 () : void {
      contact.makePrimaryAddress(address)
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at ABAddressesLV.pcf: line 37, column 44
    function valueRoot_7 () : java.lang.Object {
      return address
    }
    
    // 'value' attribute on RadioButtonCell (id=Primary_Cell) at ABAddressesLV.pcf: line 32, column 54
    function value_4 () : java.lang.Boolean {
      return address == contact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at ABAddressesLV.pcf: line 37, column 44
    function value_6 () : typekey.AddressType {
      return address.AddressType
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at ABAddressesLV.pcf: line 41, column 40
    function value_9 () : java.lang.String {
      return address.DisplayName
    }
    
    property get address () : entity.Address {
      return getIteratedValue(1) as entity.Address
    }
    
    
  }
  
  
}