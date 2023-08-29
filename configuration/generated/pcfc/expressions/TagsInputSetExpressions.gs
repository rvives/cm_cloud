package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/TagsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TagsInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/TagsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TagsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=Tags_Input) at TagsInputSet.pcf: line 29, column 44
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.TagTypes = (__VALUE_TO_SET as typekey.ContactTagType[])
    }
    
    // 'initialValue' attribute on Variable at TagsInputSet.pcf: line 13, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'onChange' attribute on PostOnChange at TagsInputSet.pcf: line 31, column 93
    function onChange_5 () : void {
      contactDetailsVendorHelper.fixInMemoryContactForVendorTagRequirements()
    }
    
    // 'valueRange' attribute on RangeInput (id=Tags_Input) at TagsInputSet.pcf: line 29, column 44
    function valueRange_10 () : java.lang.Object {
      return contact.New ? ContactTagType.getTypeKeys(false).where(\ ctt -> perm.ABContact.create(ctt)) : ContactTagType.getTypeKeys(false)
    }
    
    // 'value' attribute on RangeInput (id=Tags_Input) at TagsInputSet.pcf: line 29, column 44
    function valueRoot_9 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextInput (id=TagsNonEdit_Input) at TagsInputSet.pcf: line 18, column 46
    function value_2 () : java.lang.String {
      return contact.TagTypes.map(\ c -> c.DisplayName).sort().join(", ")
    }
    
    // 'value' attribute on RangeInput (id=Tags_Input) at TagsInputSet.pcf: line 29, column 44
    function value_7 () : typekey.ContactTagType[] {
      return contact.TagTypes
    }
    
    // 'valueRange' attribute on RangeInput (id=Tags_Input) at TagsInputSet.pcf: line 29, column 44
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Tags_Input) at TagsInputSet.pcf: line 29, column 44
    function verifyValueRangeIsAllowedType_11 ($$arg :  typekey.ContactTagType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Tags_Input) at TagsInputSet.pcf: line 29, column 44
    function verifyValueRange_12 () : void {
      var __valueRangeArg = contact.New ? ContactTagType.getTypeKeys(false).where(\ ctt -> perm.ABContact.create(ctt)) : ContactTagType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=TagsNonEdit_Input) at TagsInputSet.pcf: line 18, column 46
    function visible_1 () : java.lang.Boolean {
      return !CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on RangeInput (id=Tags_Input) at TagsInputSet.pcf: line 29, column 44
    function visible_6 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getVariableValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setVariableValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    
  }
  
  
}