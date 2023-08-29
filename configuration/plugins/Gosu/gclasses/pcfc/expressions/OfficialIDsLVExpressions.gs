package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/contacts/OfficialIDsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OfficialIDsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/contacts/OfficialIDsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OfficialIDsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonCell (id=OfficialIDValueEditButton_Cell) at OfficialIDsLV.pcf: line 53, column 53
    function action_23 () : void {
      officialID.OfficialIDValue = ""
    }
    
    // 'available' attribute on TextCell (id=officialIDValue_Cell) at OfficialIDsLV.pcf: line 47, column 47
    function available_13 () : java.lang.Boolean {
      return officialID.OfficialIDValue == null or not (officialID.isMaskable)
    }
    
    // 'available' attribute on ButtonCell (id=OfficialIDValueEditButton_Cell) at OfficialIDsLV.pcf: line 53, column 53
    function available_22 () : java.lang.Boolean {
      return officialID.isMaskable and officialID.OfficialIDValue != null
    }
    
    // 'value' attribute on TypeKeyCell (id=officialIDJurisdiction_Cell) at OfficialIDsLV.pcf: line 37, column 45
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      officialID.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TextCell (id=officialIDValue_Cell) at OfficialIDsLV.pcf: line 47, column 47
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      officialID.OfficialIDValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=officialIDType_Cell) at OfficialIDsLV.pcf: line 28, column 46
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      officialID.OfficialIDType = (__VALUE_TO_SET as typekey.OfficialIDType)
    }
    
    // 'inputMask' attribute on TextCell (id=officialIDValue_Cell) at OfficialIDsLV.pcf: line 47, column 47
    function inputMask_19 () : java.lang.String {
      return officialID.inputMaskIDValue()
    }
    
    // 'onChange' attribute on PostOnChange at OfficialIDsLV.pcf: line 30, column 51
    function onChange_4 () : void {
      officialID.resetIDValue()
    }
    
    // 'outputConversion' attribute on TextCell (id=officialIDValue_Cell) at OfficialIDsLV.pcf: line 47, column 47
    function outputConversion_14 (VALUE :  java.lang.String) : java.lang.String {
      return officialID.outputConversionIDValue(VALUE)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=officialIDValue_Cell) at OfficialIDsLV.pcf: line 47, column 47
    function requestValidationExpression_15 (VALUE :  java.lang.String) : java.lang.Object {
      return officialID.validateIDValueInput(VALUE)
    }
    
    // 'value' attribute on TypeKeyCell (id=officialIDType_Cell) at OfficialIDsLV.pcf: line 28, column 46
    function valueRoot_7 () : java.lang.Object {
      return officialID
    }
    
    // 'value' attribute on TextCell (id=officialIDValue_Cell) at OfficialIDsLV.pcf: line 47, column 47
    function value_16 () : java.lang.String {
      return officialID.OfficialIDValue
    }
    
    // 'value' attribute on TypeKeyCell (id=officialIDType_Cell) at OfficialIDsLV.pcf: line 28, column 46
    function value_5 () : typekey.OfficialIDType {
      return officialID.OfficialIDType
    }
    
    // 'value' attribute on TypeKeyCell (id=officialIDJurisdiction_Cell) at OfficialIDsLV.pcf: line 37, column 45
    function value_9 () : typekey.Jurisdiction {
      return officialID.State
    }
    
    // 'visible' attribute on ButtonCell (id=OfficialIDValueEditButton_Cell) at OfficialIDsLV.pcf: line 53, column 53
    function visible_25 () : java.lang.Boolean {
      return CurrentLocation.isInEditMode()
    }
    
    property get officialID () : entity.ABOfficialID {
      return getIteratedValue(1) as entity.ABOfficialID
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/contacts/OfficialIDsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OfficialIDsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=officialIDType_Cell) at OfficialIDsLV.pcf: line 28, column 46
    function sortValue_0 (officialID :  entity.ABOfficialID) : java.lang.Object {
      return officialID.OfficialIDType
    }
    
    // 'value' attribute on TypeKeyCell (id=officialIDJurisdiction_Cell) at OfficialIDsLV.pcf: line 37, column 45
    function sortValue_1 (officialID :  entity.ABOfficialID) : java.lang.Object {
      return officialID.State
    }
    
    // 'value' attribute on TextCell (id=officialIDValue_Cell) at OfficialIDsLV.pcf: line 47, column 47
    function sortValue_2 (officialID :  entity.ABOfficialID) : java.lang.Object {
      return officialID.OfficialIDValue
    }
    
    // 'toAdd' attribute on RowIterator at OfficialIDsLV.pcf: line 20, column 41
    function toAdd_26 (officialID :  entity.ABOfficialID) : void {
      Contact.addToABOfficialIDs(officialID)
    }
    
    // 'toRemove' attribute on RowIterator at OfficialIDsLV.pcf: line 20, column 41
    function toRemove_27 (officialID :  entity.ABOfficialID) : void {
      Contact.removeFromABOfficialIDs(officialID)
    }
    
    // 'value' attribute on RowIterator at OfficialIDsLV.pcf: line 20, column 41
    function value_28 () : entity.ABOfficialID[] {
      return Contact.ABOfficialIDs
    }
    
    // 'visible' attribute on ButtonCell (id=OfficialIDValueEditButton_Cell) at OfficialIDsLV.pcf: line 53, column 53
    function visible_3 () : java.lang.Boolean {
      return CurrentLocation.isInEditMode()
    }
    
    property get Contact () : ABContact {
      return getRequireValue("Contact", 0) as ABContact
    }
    
    property set Contact ($arg :  ABContact) {
      setRequireValue("Contact", 0, $arg)
    }
    
    
  }
  
  
}