package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/businessweek/BusinessWeekDayDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BusinessWeekDayDetailDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/businessweek/BusinessWeekDayDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BusinessWeekDayDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=BusinessWeekEndInput_Input) at BusinessWeekDayDetailDV.pcf: line 17, column 39
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.BusinessWeekEnd = (__VALUE_TO_SET as typekey.Weekdays)
    }
    
    // 'value' attribute on DateInput (id=ThursdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 161, column 53
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.ThursdayBusinessEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SundayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 34, column 48
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.SundayBusinessDay = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FridayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 169, column 48
    function defaultSetter_111 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.FridayBusinessDay = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=FridayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 179, column 51
    function defaultSetter_117 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.FridayBusinessStart = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=FridayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 188, column 51
    function defaultSetter_125 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.FridayBusinessEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SaturdayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 196, column 50
    function defaultSetter_131 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.SaturdayBusinessDay = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=SaturdayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 206, column 53
    function defaultSetter_137 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.SaturdayBusinessStart = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=SaturdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 215, column 53
    function defaultSetter_145 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.SaturdayBusinessEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=SundayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 44, column 51
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.SundayBusinessStart = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=SundayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 53, column 51
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.SundayBusinessEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=MondayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 61, column 48
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.MondayBusinessDay = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=MondayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 71, column 51
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.MondayBusinessStart = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=MondayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 80, column 51
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.MondayBusinessEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TuesdayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 88, column 49
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.TuesdayBusinessDay = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=TuesdayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 98, column 52
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.TuesdayBusinessStart = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=BusinessDayDemarcation_Input) at BusinessWeekDayDetailDV.pcf: line 26, column 54
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.BusinessDayDemarcation = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=TuesdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 107, column 52
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.TuesdayBusinessEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WednesdayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 115, column 51
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.WednesdayBusinessDay = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=WednesdayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 125, column 54
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.WednesdayBusinessStart = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=WednesdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 134, column 54
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.WednesdayBusinessEnd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ThursdayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 142, column 50
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.ThursdayBusinessDay = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=ThursdayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 152, column 53
    function defaultSetter_97 (__VALUE_TO_SET :  java.lang.Object) : void {
      businessWeek.ThursdayBusinessStart = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'validationExpression' attribute on DateInput (id=ThursdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 161, column 53
    function validationExpression_101 () : java.lang.Object {
      return businessWeek.validateThursdayStartAndEndTimes()
    }
    
    // 'validationExpression' attribute on DateInput (id=FridayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 188, column 51
    function validationExpression_121 () : java.lang.Object {
      return businessWeek.validateFridayStartAndEndTimes()
    }
    
    // 'validationExpression' attribute on DateInput (id=SaturdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 215, column 53
    function validationExpression_141 () : java.lang.Object {
      return businessWeek.validateSaturdayStartAndEndTimes()
    }
    
    // 'validationExpression' attribute on DateInput (id=SundayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 53, column 51
    function validationExpression_21 () : java.lang.Object {
      return businessWeek.validateSundayStartAndEndTimes()
    }
    
    // 'validationExpression' attribute on DateInput (id=BusinessDayDemarcation_Input) at BusinessWeekDayDetailDV.pcf: line 26, column 54
    function validationExpression_4 () : java.lang.Object {
      return businessWeek.validateBusinessDayDemarcation()
    }
    
    // 'validationExpression' attribute on DateInput (id=MondayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 80, column 51
    function validationExpression_41 () : java.lang.Object {
      return businessWeek.validateMondayStartAndEndTimes()
    }
    
    // 'validationExpression' attribute on DateInput (id=TuesdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 107, column 52
    function validationExpression_61 () : java.lang.Object {
      return businessWeek.validateTuesdayStartAndEndTimes()
    }
    
    // 'validationExpression' attribute on DateInput (id=WednesdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 134, column 54
    function validationExpression_81 () : java.lang.Object {
      return businessWeek.validateWednesdayStartAndEndTimes()
    }
    
    // 'value' attribute on TypeKeyInput (id=BusinessWeekEndInput_Input) at BusinessWeekDayDetailDV.pcf: line 17, column 39
    function valueRoot_2 () : java.lang.Object {
      return businessWeek
    }
    
    // 'value' attribute on TypeKeyInput (id=BusinessWeekEndInput_Input) at BusinessWeekDayDetailDV.pcf: line 17, column 39
    function value_0 () : typekey.Weekdays {
      return businessWeek.BusinessWeekEnd
    }
    
    // 'value' attribute on BooleanRadioInput (id=SundayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 34, column 48
    function value_10 () : java.lang.Boolean {
      return businessWeek.SundayBusinessDay
    }
    
    // 'value' attribute on DateInput (id=ThursdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 161, column 53
    function value_104 () : java.util.Date {
      return businessWeek.ThursdayBusinessEnd
    }
    
    // 'value' attribute on BooleanRadioInput (id=FridayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 169, column 48
    function value_110 () : java.lang.Boolean {
      return businessWeek.FridayBusinessDay
    }
    
    // 'value' attribute on DateInput (id=FridayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 179, column 51
    function value_116 () : java.util.Date {
      return businessWeek.FridayBusinessStart
    }
    
    // 'value' attribute on DateInput (id=FridayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 188, column 51
    function value_124 () : java.util.Date {
      return businessWeek.FridayBusinessEnd
    }
    
    // 'value' attribute on BooleanRadioInput (id=SaturdayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 196, column 50
    function value_130 () : java.lang.Boolean {
      return businessWeek.SaturdayBusinessDay
    }
    
    // 'value' attribute on DateInput (id=SaturdayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 206, column 53
    function value_136 () : java.util.Date {
      return businessWeek.SaturdayBusinessStart
    }
    
    // 'value' attribute on DateInput (id=SaturdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 215, column 53
    function value_144 () : java.util.Date {
      return businessWeek.SaturdayBusinessEnd
    }
    
    // 'value' attribute on DateInput (id=SundayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 44, column 51
    function value_16 () : java.util.Date {
      return businessWeek.SundayBusinessStart
    }
    
    // 'value' attribute on DateInput (id=SundayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 53, column 51
    function value_24 () : java.util.Date {
      return businessWeek.SundayBusinessEnd
    }
    
    // 'value' attribute on BooleanRadioInput (id=MondayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 61, column 48
    function value_30 () : java.lang.Boolean {
      return businessWeek.MondayBusinessDay
    }
    
    // 'value' attribute on DateInput (id=MondayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 71, column 51
    function value_36 () : java.util.Date {
      return businessWeek.MondayBusinessStart
    }
    
    // 'value' attribute on DateInput (id=MondayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 80, column 51
    function value_44 () : java.util.Date {
      return businessWeek.MondayBusinessEnd
    }
    
    // 'value' attribute on DateInput (id=BusinessDayDemarcation_Input) at BusinessWeekDayDetailDV.pcf: line 26, column 54
    function value_5 () : java.util.Date {
      return businessWeek.BusinessDayDemarcation
    }
    
    // 'value' attribute on BooleanRadioInput (id=TuesdayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 88, column 49
    function value_50 () : java.lang.Boolean {
      return businessWeek.TuesdayBusinessDay
    }
    
    // 'value' attribute on DateInput (id=TuesdayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 98, column 52
    function value_56 () : java.util.Date {
      return businessWeek.TuesdayBusinessStart
    }
    
    // 'value' attribute on DateInput (id=TuesdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 107, column 52
    function value_64 () : java.util.Date {
      return businessWeek.TuesdayBusinessEnd
    }
    
    // 'value' attribute on BooleanRadioInput (id=WednesdayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 115, column 51
    function value_70 () : java.lang.Boolean {
      return businessWeek.WednesdayBusinessDay
    }
    
    // 'value' attribute on DateInput (id=WednesdayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 125, column 54
    function value_76 () : java.util.Date {
      return businessWeek.WednesdayBusinessStart
    }
    
    // 'value' attribute on DateInput (id=WednesdayBusinessEnd_Input) at BusinessWeekDayDetailDV.pcf: line 134, column 54
    function value_84 () : java.util.Date {
      return businessWeek.WednesdayBusinessEnd
    }
    
    // 'value' attribute on BooleanRadioInput (id=ThursdayBusinessDay_Input) at BusinessWeekDayDetailDV.pcf: line 142, column 50
    function value_90 () : java.lang.Boolean {
      return businessWeek.ThursdayBusinessDay
    }
    
    // 'value' attribute on DateInput (id=ThursdayBusinessStart_Input) at BusinessWeekDayDetailDV.pcf: line 152, column 53
    function value_96 () : java.util.Date {
      return businessWeek.ThursdayBusinessStart
    }
    
    property get businessWeek () : BusinessWeek {
      return getRequireValue("businessWeek", 0) as BusinessWeek
    }
    
    property set businessWeek ($arg :  BusinessWeek) {
      setRequireValue("businessWeek", 0, $arg)
    }
    
    
  }
  
  
}