package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/address/GlobalAddressInputSet.BigToSmall.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GlobalAddressInputSet_BigToSmallExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/address/GlobalAddressInputSet.BigToSmall.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GlobalAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function action_20 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'action' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 58, column 87
    function action_39 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'autoComplete' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function autoComplete_33 () : gw.api.contact.AutocompleteHandler {
      return pchandler
    }
    
    // 'available' attribute on TextInput (id=AddressLine1Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 104, column 95
    function available_103 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1KANJI)
    }
    
    // 'available' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 112, column 90
    function available_115 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'available' attribute on TextInput (id=AddressLine2Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 119, column 95
    function available_126 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2KANJI)
    }
    
    // 'available' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 58, column 87
    function available_35 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'available' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function available_53 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'available' attribute on TextInput (id=City_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 82, column 82
    function available_69 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'available' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 39, column 84
    function available_8 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'available' attribute on TextInput (id=CityKanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 89, column 87
    function available_80 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.CITYKANJI)
    }
    
    // 'available' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 97, column 90
    function available_90 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'value' attribute on TextInput (id=AddressLine1Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 104, column 95
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine1Kanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 112, column 90
    function defaultSetter_120 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 39, column 84
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.SelectedCountry = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on TextInput (id=AddressLine2Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 119, column 95
    function defaultSetter_130 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine2Kanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.PostalCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.State = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on TextInput (id=City_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 82, column 82
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=CityKanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 89, column 87
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.CityKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 97, column 90
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.AddressDelegate.AddressLine1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine1Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 104, column 95
    function editable_104 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1KANJI)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 112, column 90
    function editable_116 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine2Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 119, column 95
    function editable_127 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2KANJI)
    }
    
    // 'editable' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function editable_23 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'editable' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function editable_54 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'editable' attribute on TextInput (id=City_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 82, column 82
    function editable_70 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'editable' attribute on TextInput (id=CityKanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 89, column 87
    function editable_81 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.CITYKANJI)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 39, column 84
    function editable_9 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'editable' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 97, column 90
    function editable_91 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.BigToSmall.pcf: line 14, column 50
    function initialValue_0 () : gw.api.contact.AutocompleteHandler {
      return gw.api.contact.AddressAutocompleteHandler.createHandler("PostalCode","PostalCode,Country",true)
    }
    
    // 'initialValue' attribute on Variable at GlobalAddressInputSet.BigToSmall.pcf: line 21, column 33
    function initialValue_1 () : java.lang.Integer {
      if (addressOwner != null) addressOwner.InEditMode = CurrentLocation.InEditMode; return 0
    }
    
    // 'inputConversion' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function inputConversion_28 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.address.PostalCodeInputFormatter.convertPostalCode(VALUE, addressOwner.SelectedCountry)
    }
    
    // 'inputMask' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function inputMask_34 () : java.lang.String {
      return gw.api.contact.AddressAutocompleteUtil.getInputMask(addressOwner.AddressDelegate, "PostalCode")
    }
    
    // 'label' attribute on TextInput (id=AddressLine1Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 104, column 95
    function label_106 () : java.lang.Object {
      return addressOwner.AddressLine1Label
    }
    
    // 'label' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function label_21 () : java.lang.Object {
      return addressOwner.AutofillIconEnabled ? DisplayKey.get("AutoFill.Override") : ""
    }
    
    // 'label' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function label_26 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).PostalCodeLabel
    }
    
    // 'label' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 27, column 50
    function label_3 () : java.lang.Object {
      return addressOwner.AddressNameLabel
    }
    
    // 'label' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 97, column 90
    function label_93 () : java.lang.Object {
      return addressOwner.AddressLine1PhoneticLabel
    }
    
    // 'onChange' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 61, column 171
    function onChange_22 () : void {
      if (addressOwner.AutofillEnabled) gw.api.contact.AddressAutocompleteUtil.autofillAddress(addressOwner.AddressDelegate, "PostalCode", false)
    }
    
    // 'required' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 39, column 84
    function required_11 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'required' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 112, column 90
    function required_118 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'required' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function required_29 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'required' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function required_57 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'required' attribute on TextInput (id=City_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 82, column 82
    function required_72 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'required' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 97, column 90
    function required_94 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    // 'tooltip' attribute on AddressAutoFillInput (id=PostalCode_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 58, column 87
    function tooltip_41 () : java.lang.String {
      return addressOwner.AutofillIconEnabled ? DisplayKey.get("AutoFill.Override") : ""
    }
    
    // 'validationExpression' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function validationExpression_24 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "PostalCode", gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).PostalCodeLabel)
    }
    
    // 'validationExpression' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function validationExpression_55 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(addressOwner.AddressDelegate, "State")
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function valueRange_61 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.getStates(addressOwner.AddressDelegate.Country)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 39, column 84
    function valueRoot_14 () : java.lang.Object {
      return addressOwner
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function valueRoot_32 () : java.lang.Object {
      return addressOwner.AddressDelegate
    }
    
    // 'value' attribute on TextInput (id=AddressLine1Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 104, column 95
    function value_107 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine1Kanji
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 112, column 90
    function value_119 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine2
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 39, column 84
    function value_12 () : typekey.Country {
      return addressOwner.SelectedCountry
    }
    
    // 'value' attribute on TextInput (id=AddressLine2Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 119, column 95
    function value_129 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine2Kanji
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function value_30 () : java.lang.String {
      return addressOwner.AddressDelegate.PostalCode
    }
    
    // 'value' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 27, column 50
    function value_4 () : java.lang.String {
      return new gw.api.address.AddressFormatter().format(addressOwner.AddressDelegate, "\n")
    }
    
    // 'value' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function value_58 () : typekey.State {
      return addressOwner.AddressDelegate.State
    }
    
    // 'value' attribute on TextInput (id=City_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 82, column 82
    function value_73 () : java.lang.String {
      return addressOwner.AddressDelegate.City
    }
    
    // 'value' attribute on TextInput (id=CityKanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 89, column 87
    function value_83 () : java.lang.String {
      return addressOwner.AddressDelegate.CityKanji
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 97, column 90
    function value_95 () : java.lang.String {
      return addressOwner.AddressDelegate.AddressLine1
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function verifyValueRangeIsAllowedType_62 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function verifyValueRangeIsAllowedType_62 ($$arg :  typekey.State[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function verifyValueRange_63 () : void {
      var __valueRangeArg = gw.api.contact.AddressAutocompleteUtil.getStates(addressOwner.AddressDelegate.Country)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_62(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Country_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 39, column 84
    function visible_10 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.COUNTRY)
    }
    
    // 'visible' attribute on TextInput (id=AddressLine1Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 104, column 95
    function visible_105 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1KANJI)
    }
    
    // 'visible' attribute on TextInput (id=AddressLine2_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 112, column 90
    function visible_117 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2)
    }
    
    // 'visible' attribute on TextInput (id=AddressLine2Kanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 119, column 95
    function visible_128 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE2KANJI)
    }
    
    // 'visible' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function visible_19 () : java.lang.Boolean {
      return addressOwner.AutofillIconEnabled
    }
    
    // 'visible' attribute on TextInput (id=AddressSummary_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 27, column 50
    function visible_2 () : java.lang.Boolean {
      return addressOwner.ShowAddressSummary
    }
    
    // 'visible' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function visible_25 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.POSTALCODE)
    }
    
    // 'visible' attribute on RangeInput (id=State_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 74, column 83
    function visible_56 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.STATE)
    }
    
    // 'visible' attribute on TextInput (id=City_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 82, column 82
    function visible_71 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.CITY)
    }
    
    // 'visible' attribute on TextInput (id=CityKanji_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 89, column 87
    function visible_82 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.CITYKANJI)
    }
    
    // 'visible' attribute on TextInput (id=AddressLine1_Input) at GlobalAddressInputSet.BigToSmall.pcf: line 97, column 90
    function visible_92 () : java.lang.Boolean {
      return addressOwner.isVisible(gw.api.address.AddressOwnerFieldId.ADDRESSLINE1)
    }
    
    property get addressOwner () : gw.api.address.AddressOwner {
      return getRequireValue("addressOwner", 0) as gw.api.address.AddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.AddressOwner) {
      setRequireValue("addressOwner", 0, $arg)
    }
    
    property get pchandler () : gw.api.contact.AutocompleteHandler {
      return getVariableValue("pchandler", 0) as gw.api.contact.AutocompleteHandler
    }
    
    property set pchandler ($arg :  gw.api.contact.AutocompleteHandler) {
      setVariableValue("pchandler", 0, $arg)
    }
    
    property get saveEditMode () : java.lang.Integer {
      return getVariableValue("saveEditMode", 0) as java.lang.Integer
    }
    
    property set saveEditMode ($arg :  java.lang.Integer) {
      setVariableValue("saveEditMode", 0, $arg)
    }
    
    
  }
  
  
}