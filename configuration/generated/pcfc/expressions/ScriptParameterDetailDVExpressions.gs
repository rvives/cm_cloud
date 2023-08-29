package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/scriptparameters/ScriptParameterDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScriptParameterDetailDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/scriptparameters/ScriptParameterDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScriptParameterDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 10, column 49
    function action_114 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 13, column 49
    function action_116 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 9, column 49
    function action_130 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 12, column 49
    function action_132 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_115 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_117 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 9, column 49
    function action_dest_131 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 12, column 49
    function action_dest_133 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'value' attribute on TextInput (id=PositiveintegerValue_Input) at ScriptParameterDetailDV.pcf: line 154, column 70
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.PositiveintegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=VarcharValue_Input) at ScriptParameterDetailDV.pcf: line 161, column 62
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.VarcharValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 7, column 52
    function defaultSetter_120 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.Group = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_136 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.User = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on DateInput (id=DatetimeValue_Input) at ScriptParameterDetailDV.pcf: line 37, column 63
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.DatetimeValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=IntegerValue_Input) at ScriptParameterDetailDV.pcf: line 184, column 62
    function defaultSetter_148 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.IntegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=DecimalValue_Input) at ScriptParameterDetailDV.pcf: line 44, column 62
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.DecimalValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=MoneyValue_Input) at ScriptParameterDetailDV.pcf: line 52, column 60
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.MoneyValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=NonnegativeintegerValue_Input) at ScriptParameterDetailDV.pcf: line 60, column 73
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.NonnegativeintegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=NonnegativemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 68, column 71
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.NonnegativemoneyValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=RiskValue_Input) at ScriptParameterDetailDV.pcf: line 76, column 59
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.RiskValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=PostalCodeValue_Input) at ScriptParameterDetailDV.pcf: line 83, column 65
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.PostalCodeValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=SpeedValue_Input) at ScriptParameterDetailDV.pcf: line 91, column 60
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.SpeedValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PhoneValue_Input) at ScriptParameterDetailDV.pcf: line 98, column 60
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.PhoneValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=YearValue_Input) at ScriptParameterDetailDV.pcf: line 106, column 59
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.YearValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PercentageValue_Input) at ScriptParameterDetailDV.pcf: line 114, column 65
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.PercentageValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BitValue_Input) at ScriptParameterDetailDV.pcf: line 30, column 58
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.BitValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PercentagedecValue_Input) at ScriptParameterDetailDV.pcf: line 122, column 68
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.PercentagedecValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=MonthlyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 130, column 71
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.MonthlyfrequencyValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=WeeklyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 138, column 70
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.WeeklyfrequencyValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PositivemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 146, column 68
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      ScriptParameter.PositivemoneyValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'valueRange' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_122 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'valueRange' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 6, column 85
    function valueRange_138 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ScriptParameterDetailDV.pcf: line 17, column 48
    function valueRoot_1 () : java.lang.Object {
      return ScriptParameter
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ScriptParameterDetailDV.pcf: line 17, column 48
    function value_0 () : java.lang.String {
      return ScriptParameter.ParameterName
    }
    
    // 'value' attribute on TextInput (id=PositiveintegerValue_Input) at ScriptParameterDetailDV.pcf: line 154, column 70
    function value_103 () : java.lang.Integer {
      return ScriptParameter.PositiveintegerValue
    }
    
    // 'value' attribute on TextInput (id=VarcharValue_Input) at ScriptParameterDetailDV.pcf: line 161, column 62
    function value_109 () : java.lang.String {
      return ScriptParameter.VarcharValue
    }
    
    // 'value' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 7, column 52
    function value_119 () : entity.Group {
      return ScriptParameter.Group
    }
    
    // 'value' attribute on DateInput (id=DatetimeValue_Input) at ScriptParameterDetailDV.pcf: line 37, column 63
    function value_13 () : java.util.Date {
      return ScriptParameter.DatetimeValue
    }
    
    // 'value' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 6, column 85
    function value_135 () : entity.User {
      return ScriptParameter.User
    }
    
    // 'value' attribute on TextInput (id=IntegerValue_Input) at ScriptParameterDetailDV.pcf: line 184, column 62
    function value_147 () : java.lang.Integer {
      return ScriptParameter.IntegerValue
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ScriptParameterDetailDV.pcf: line 189, column 46
    function value_152 () : java.lang.String {
      return ScriptParameter.Description
    }
    
    // 'value' attribute on TextInput (id=DecimalValue_Input) at ScriptParameterDetailDV.pcf: line 44, column 62
    function value_19 () : java.lang.String {
      return ScriptParameter.DecimalValue
    }
    
    // 'value' attribute on TextInput (id=MoneyValue_Input) at ScriptParameterDetailDV.pcf: line 52, column 60
    function value_25 () : java.math.BigDecimal {
      return ScriptParameter.MoneyValue
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at ScriptParameterDetailDV.pcf: line 23, column 50
    function value_3 () : typekey.ScriptParameterType {
      return ScriptParameter.ParameterType
    }
    
    // 'value' attribute on TextInput (id=NonnegativeintegerValue_Input) at ScriptParameterDetailDV.pcf: line 60, column 73
    function value_31 () : java.lang.Integer {
      return ScriptParameter.NonnegativeintegerValue
    }
    
    // 'value' attribute on TextInput (id=NonnegativemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 68, column 71
    function value_37 () : java.math.BigDecimal {
      return ScriptParameter.NonnegativemoneyValue
    }
    
    // 'value' attribute on TextInput (id=RiskValue_Input) at ScriptParameterDetailDV.pcf: line 76, column 59
    function value_43 () : java.math.BigDecimal {
      return ScriptParameter.RiskValue
    }
    
    // 'value' attribute on TextInput (id=PostalCodeValue_Input) at ScriptParameterDetailDV.pcf: line 83, column 65
    function value_49 () : java.lang.String {
      return ScriptParameter.PostalCodeValue
    }
    
    // 'value' attribute on TextInput (id=SpeedValue_Input) at ScriptParameterDetailDV.pcf: line 91, column 60
    function value_55 () : java.lang.Integer {
      return ScriptParameter.SpeedValue
    }
    
    // 'value' attribute on TextInput (id=PhoneValue_Input) at ScriptParameterDetailDV.pcf: line 98, column 60
    function value_61 () : java.lang.String {
      return ScriptParameter.PhoneValue
    }
    
    // 'value' attribute on TextInput (id=YearValue_Input) at ScriptParameterDetailDV.pcf: line 106, column 59
    function value_67 () : java.lang.Integer {
      return ScriptParameter.YearValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=BitValue_Input) at ScriptParameterDetailDV.pcf: line 30, column 58
    function value_7 () : java.lang.Boolean {
      return ScriptParameter.BitValue
    }
    
    // 'value' attribute on TextInput (id=PercentageValue_Input) at ScriptParameterDetailDV.pcf: line 114, column 65
    function value_73 () : java.lang.Integer {
      return ScriptParameter.PercentageValue
    }
    
    // 'value' attribute on TextInput (id=PercentagedecValue_Input) at ScriptParameterDetailDV.pcf: line 122, column 68
    function value_79 () : java.math.BigDecimal {
      return ScriptParameter.PercentagedecValue
    }
    
    // 'value' attribute on TextInput (id=MonthlyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 130, column 71
    function value_85 () : java.lang.Integer {
      return ScriptParameter.MonthlyfrequencyValue
    }
    
    // 'value' attribute on TextInput (id=WeeklyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 138, column 70
    function value_91 () : java.lang.Integer {
      return ScriptParameter.WeeklyfrequencyValue
    }
    
    // 'value' attribute on TextInput (id=PositivemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 146, column 68
    function value_97 () : java.math.BigDecimal {
      return ScriptParameter.PositivemoneyValue
    }
    
    // 'valueRange' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_123 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_123 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_123 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_139 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_139 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_139 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_124 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_123(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_140 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_139(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=PositiveintegerValue_Input) at ScriptParameterDetailDV.pcf: line 154, column 70
    function visible_102 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_POSITIVEINTEGER
    }
    
    // 'visible' attribute on TextInput (id=VarcharValue_Input) at ScriptParameterDetailDV.pcf: line 161, column 62
    function visible_108 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_VARCHAR
    }
    
    // 'visible' attribute on GroupInput (id=GroupValue_Input) at GroupWidget.xml: line 7, column 52
    function visible_118 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_GROUP
    }
    
    // 'visible' attribute on DateInput (id=DatetimeValue_Input) at ScriptParameterDetailDV.pcf: line 37, column 63
    function visible_12 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_DATETIME
    }
    
    // 'visible' attribute on UserInput (id=UserValue_Input) at UserWidget.xml: line 6, column 85
    function visible_134 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_USER
    }
    
    // 'visible' attribute on TextInput (id=IntegerValue_Input) at ScriptParameterDetailDV.pcf: line 184, column 62
    function visible_146 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_INTEGER
    }
    
    // 'visible' attribute on TextInput (id=DecimalValue_Input) at ScriptParameterDetailDV.pcf: line 44, column 62
    function visible_18 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_DECIMAL
    }
    
    // 'visible' attribute on TextInput (id=MoneyValue_Input) at ScriptParameterDetailDV.pcf: line 52, column 60
    function visible_24 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_MONEY
    }
    
    // 'visible' attribute on TextInput (id=NonnegativeintegerValue_Input) at ScriptParameterDetailDV.pcf: line 60, column 73
    function visible_30 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_NONNEGATIVEINTEGER
    }
    
    // 'visible' attribute on TextInput (id=NonnegativemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 68, column 71
    function visible_36 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_NONNEGATIVEMONEY
    }
    
    // 'visible' attribute on TextInput (id=RiskValue_Input) at ScriptParameterDetailDV.pcf: line 76, column 59
    function visible_42 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_RISK
    }
    
    // 'visible' attribute on TextInput (id=PostalCodeValue_Input) at ScriptParameterDetailDV.pcf: line 83, column 65
    function visible_48 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_POSTALCODE
    }
    
    // 'visible' attribute on TextInput (id=SpeedValue_Input) at ScriptParameterDetailDV.pcf: line 91, column 60
    function visible_54 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_SPEED
    }
    
    // 'visible' attribute on BooleanRadioInput (id=BitValue_Input) at ScriptParameterDetailDV.pcf: line 30, column 58
    function visible_6 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_BIT
    }
    
    // 'visible' attribute on TextInput (id=PhoneValue_Input) at ScriptParameterDetailDV.pcf: line 98, column 60
    function visible_60 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_PHONE
    }
    
    // 'visible' attribute on TextInput (id=YearValue_Input) at ScriptParameterDetailDV.pcf: line 106, column 59
    function visible_66 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_YEAR
    }
    
    // 'visible' attribute on TextInput (id=PercentageValue_Input) at ScriptParameterDetailDV.pcf: line 114, column 65
    function visible_72 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_PERCENTAGE
    }
    
    // 'visible' attribute on TextInput (id=PercentagedecValue_Input) at ScriptParameterDetailDV.pcf: line 122, column 68
    function visible_78 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_PERCENTAGEDEC
    }
    
    // 'visible' attribute on TextInput (id=MonthlyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 130, column 71
    function visible_84 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_MONTHLYFREQUENCY
    }
    
    // 'visible' attribute on TextInput (id=WeeklyfrequencyValue_Input) at ScriptParameterDetailDV.pcf: line 138, column 70
    function visible_90 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_WEEKLYFREQUENCY
    }
    
    // 'visible' attribute on TextInput (id=PositivemoneyValue_Input) at ScriptParameterDetailDV.pcf: line 146, column 68
    function visible_96 () : java.lang.Boolean {
      return ScriptParameter.ParameterType==TC_POSITIVEMONEY
    }
    
    property get ScriptParameter () : ScriptParameter {
      return getRequireValue("ScriptParameter", 0) as ScriptParameter
    }
    
    property set ScriptParameter ($arg :  ScriptParameter) {
      setRequireValue("ScriptParameter", 0, $arg)
    }
    
    
  }
  
  
}