package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupDetailDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/groups/GroupDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 10, column 49
    function action_29 () : void {
      GroupSearchPopup.push(Group)
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 13, column 49
    function action_31 () : void {
      OrganizationGroupTreePopup.push(Group.makeOrganizationSelection(), Group)
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function action_34 () : void {
      GroupDetailPopup.push(Group.Parent)
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupDetailDV.pcf: line 47, column 41
    function action_43 () : void {
      GroupDetailPopup.push(Group.Parent)
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 9, column 49
    function action_49 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 12, column 49
    function action_51 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function action_53 () : void {
      UserDetailPopup.push(Group.Supervisor)
    }
    
    // 'action' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 10, column 49
    function action_6 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at GroupDetailDV.pcf: line 55, column 34
    function action_61 () : void {
      UserDetailPopup.push(Group.Supervisor)
    }
    
    // 'action' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 13, column 49
    function action_8 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_30 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination(Group)
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_32 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination(Group.makeOrganizationSelection(), Group)
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function action_dest_35 () : pcf.api.Destination {
      return pcf.GroupDetailPopup.createDestination(Group.Parent)
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupDetailDV.pcf: line 47, column 41
    function action_dest_44 () : pcf.api.Destination {
      return pcf.GroupDetailPopup.createDestination(Group.Parent)
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 9, column 49
    function action_dest_50 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 12, column 49
    function action_dest_52 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function action_dest_54 () : pcf.api.Destination {
      return pcf.UserDetailPopup.createDestination(Group.Supervisor)
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at GroupDetailDV.pcf: line 55, column 34
    function action_dest_62 () : pcf.api.Destination {
      return pcf.UserDetailPopup.createDestination(Group.Supervisor)
    }
    
    // 'action' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_7 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_9 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'def' attribute on ListViewInput (id=GroupUsersLV) at GroupDetailDV.pcf: line 60, column 81
    function def_onEnter_66 (def :  pcf.GroupUsersLV) : void {
      def.onEnter(Group)
    }
    
    // 'def' attribute on ListViewInput (id=GroupUsersLV) at GroupDetailDV.pcf: line 60, column 81
    function def_refreshVariables_67 (def :  pcf.GroupUsersLV) : void {
      def.refreshVariables(Group)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at GroupDetailDV.pcf: line 17, column 29
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=NameKanji_Input) at GroupDetailDV.pcf: line 30, column 84
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.NameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at GroupDetailDV.pcf: line 37, column 40
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.GroupType = (__VALUE_TO_SET as typekey.GroupType)
    }
    
    // 'value' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.Parent = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.Supervisor = (__VALUE_TO_SET as entity.User)
    }
    
    // 'label' attribute on TextInput (id=Name_Input) at GroupDetailDV.pcf: line 17, column 29
    function label_0 () : java.lang.Object {
      return (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.Admin.GroupDetail.BasicDV.NamePhonetic") : DisplayKey.get("Web.Admin.GroupDetail.BasicDV.Name")
    }
    
    // 'valueRange' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_12 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function valueRange_58 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at GroupDetailDV.pcf: line 17, column 29
    function valueRoot_3 () : java.lang.Object {
      return Group
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at GroupDetailDV.pcf: line 17, column 29
    function value_1 () : java.lang.String {
      return Group.Name
    }
    
    // 'value' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 7, column 52
    function value_11 () : entity.Group {
      return Group
    }
    
    // 'value' attribute on TextInput (id=NameKanji_Input) at GroupDetailDV.pcf: line 30, column 84
    function value_20 () : java.lang.String {
      return Group.NameKanji
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at GroupDetailDV.pcf: line 37, column 40
    function value_25 () : typekey.GroupType {
      return Group.GroupType
    }
    
    // 'value' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function value_36 () : entity.Group {
      return Group.Parent
    }
    
    // 'value' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function value_55 () : entity.User {
      return Group.Supervisor
    }
    
    // 'valueRange' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_13 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_40 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_40 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_40 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_59 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_59 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_59 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_14 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_41 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_40(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_60 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_59(__valueRangeArg)
    }
    
    // 'visible' attribute on GroupInput (id=NameReadOnly_Input) at GroupWidget.xml: line 7, column 52
    function visible_10 () : java.lang.Boolean {
      return not gw.api.util.LocationUtil.isCurrentLocationEditable()
    }
    
    // 'visible' attribute on TextInput (id=NameKanji_Input) at GroupDetailDV.pcf: line 30, column 84
    function visible_19 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP
    }
    
    // 'visible' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function visible_33 () : java.lang.Boolean {
      return Group.Parent != null
    }
    
    property get Group () : Group {
      return getRequireValue("Group", 0) as Group
    }
    
    property set Group ($arg :  Group) {
      setRequireValue("Group", 0, $arg)
    }
    
    
  }
  
  
}