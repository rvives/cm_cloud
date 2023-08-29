package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/address/AddressOwnerInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressOwnerInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/address/AddressOwnerInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressOwnerInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerInputSet.pcf: line 19, column 41
    function def_onEnter_0 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerInputSet.pcf: line 19, column 41
    function def_onEnter_2 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerInputSet.pcf: line 19, column 41
    function def_onEnter_4 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerInputSet.pcf: line 19, column 41
    function def_refreshVariables_1 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerInputSet.pcf: line 19, column 41
    function def_refreshVariables_3 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerInputSet.pcf: line 19, column 41
    function def_refreshVariables_5 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'value' attribute on TypeKeyInput (id=Address_AddressType_Input) at AddressOwnerInputSet.pcf: line 27, column 104
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Input) at AddressOwnerInputSet.pcf: line 34, column 104
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=Address_ValidUntil_Input) at AddressOwnerInputSet.pcf: line 42, column 103
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address.ValidUntil = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Address_AddressType_Input) at AddressOwnerInputSet.pcf: line 27, column 104
    function editable_7 () : java.lang.Boolean {
      return isEditable
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerInputSet.pcf: line 19, column 41
    function mode_6 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).PCFMode
    }
    
    // 'required' attribute on TextInput (id=Address_Description_Input) at AddressOwnerInputSet.pcf: line 34, column 104
    function required_18 () : java.lang.Boolean {
      return addressOwner.RequiredFields.contains(gw.api.address.ABAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'required' attribute on DateInput (id=Address_ValidUntil_Input) at AddressOwnerInputSet.pcf: line 42, column 103
    function required_27 () : java.lang.Boolean {
      return addressOwner.RequiredFields.contains(gw.api.address.ABAddressOwnerFieldId.VALIDUNTIL)
    }
    
    // 'required' attribute on TypeKeyInput (id=Address_AddressType_Input) at AddressOwnerInputSet.pcf: line 27, column 104
    function required_9 () : java.lang.Boolean {
      return addressOwner.RequiredFields.contains(gw.api.address.ABAddressOwnerFieldId.ADDRESSTYPE)
    }
    
    // 'value' attribute on TypeKeyInput (id=Address_AddressType_Input) at AddressOwnerInputSet.pcf: line 27, column 104
    function valueRoot_12 () : java.lang.Object {
      return addressOwner.Address
    }
    
    // 'value' attribute on TypeKeyInput (id=Address_AddressType_Input) at AddressOwnerInputSet.pcf: line 27, column 104
    function value_10 () : typekey.AddressType {
      return addressOwner.Address.AddressType
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Input) at AddressOwnerInputSet.pcf: line 34, column 104
    function value_19 () : java.lang.String {
      return addressOwner.Address.Description
    }
    
    // 'value' attribute on DateInput (id=Address_ValidUntil_Input) at AddressOwnerInputSet.pcf: line 42, column 103
    function value_28 () : java.util.Date {
      return addressOwner.Address.ValidUntil
    }
    
    // 'visible' attribute on TextInput (id=Address_Description_Input) at AddressOwnerInputSet.pcf: line 34, column 104
    function visible_17 () : java.lang.Boolean {
      return !addressOwner.HiddenFields.contains(gw.api.address.ABAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'visible' attribute on DateInput (id=Address_ValidUntil_Input) at AddressOwnerInputSet.pcf: line 42, column 103
    function visible_26 () : java.lang.Boolean {
      return !addressOwner.HiddenFields.contains(gw.api.address.ABAddressOwnerFieldId.VALIDUNTIL)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Address_AddressType_Input) at AddressOwnerInputSet.pcf: line 27, column 104
    function visible_8 () : java.lang.Boolean {
      return !addressOwner.HiddenFields.contains(gw.api.address.ABAddressOwnerFieldId.ADDRESSTYPE)
    }
    
    property get addressOwner () : gw.api.address.AbstractAddressOwner {
      return getRequireValue("addressOwner", 0) as gw.api.address.AbstractAddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.AbstractAddressOwner) {
      setRequireValue("addressOwner", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    
  }
  
  
}