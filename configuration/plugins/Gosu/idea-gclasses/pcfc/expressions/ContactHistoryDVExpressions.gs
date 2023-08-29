package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactHistoryDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ContactHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactHistoryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 9, column 49
    function action_5 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 12, column 49
    function action_7 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 9, column 49
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 12, column 49
    function action_dest_8 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'valueRange' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 6, column 85
    function valueRange_12 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at ContactHistoryDV.pcf: line 16, column 41
    function valueRoot_1 () : java.lang.Object {
      return history
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at ContactHistoryDV.pcf: line 16, column 41
    function value_0 () : java.util.Date {
      return history.EventTimestamp
    }
    
    // 'value' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 6, column 85
    function value_10 () : entity.User {
      return history.User
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at ContactHistoryDV.pcf: line 31, column 48
    function value_20 () : typekey.CustomHistoryType {
      return history.CustomType
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ContactHistoryDV.pcf: line 35, column 38
    function value_23 () : java.lang.String {
      return history.Description
    }
    
    // 'value' attribute on TextInput (id=User_Input) at ContactHistoryDV.pcf: line 20, column 32
    function value_3 () : java.lang.String {
      return getUserName()
    }
    
    // 'valueRange' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_14 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'visible' attribute on UserInput (id=Reviewer_Input) at UserWidget.xml: line 6, column 85
    function visible_9 () : java.lang.Boolean {
      return history.ExternalUpdateUser != null
    }
    
    property get history () : ContactHistory {
      return getRequireValue("history", 0) as ContactHistory
    }
    
    property set history ($arg :  ContactHistory) {
      setRequireValue("history", 0, $arg)
    }
    
    function getUserName() : String {
      if (history.ExternalUpdateApp != null and history.ExternalUpdateUser != null) {
        return history.ExternalUpdateUser + " (" + history.ExternalUpdateApp.toUpperCase() + ")"
        
      } else if (history.ExternalUpdateUser != null) {
        return history.ExternalUpdateUser
          
      } else {
        return history.User.DisplayName
      }
    }
    
    
  }
  
  
}