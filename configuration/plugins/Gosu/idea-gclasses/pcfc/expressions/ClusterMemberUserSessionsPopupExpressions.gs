package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMemberUserSessionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClusterMemberUserSessionsPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMemberUserSessionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClusterMemberUserSessionsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (serverId :  String) : int {
      return 0
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MarkAsInactive) at ClusterMemberUserSessionsPopup.pcf: line 27, column 112
    function allCheckedRowsAction_2 (CheckedValues :  gw.api.system.cluster.UserSessionInfo[], CheckedValuesErrors :  java.util.Map) : void {
      data.markUserSessionsAsInactive(serverId, CheckedValues.toList())
    }
    
    // 'available' attribute on CheckedValuesToolbarButton (id=MarkAsInactive) at ClusterMemberUserSessionsPopup.pcf: line 27, column 112
    function available_1 () : java.lang.Boolean {
      return perm.User.EditCluster or perm.User.DevAllAccess
    }
    
    // 'canVisit' attribute on Popup (id=ClusterMemberUserSessionsPopup) at ClusterMemberUserSessionsPopup.pcf: line 9, column 106
    static function canVisit_23 (serverId :  String) : java.lang.Boolean {
      return perm.User.ViewCluster or perm.User.DevAllAccess
    }
    
    // 'initialValue' attribute on Variable at ClusterMemberUserSessionsPopup.pcf: line 18, column 47
    function initialValue_0 () : gw.api.tools.ClusterMembersData {
      return new gw.api.tools.ClusterMembersData()
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at ClusterMemberUserSessionsPopup.pcf: line 42, column 53
    function sortValue_3 (userSession :  gw.api.system.cluster.UserSessionInfo) : java.lang.Object {
      return userSession.User.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at ClusterMemberUserSessionsPopup.pcf: line 46, column 61
    function sortValue_4 (userSession :  gw.api.system.cluster.UserSessionInfo) : java.lang.Object {
      return userSession.User.Credential.UserName
    }
    
    // 'value' attribute on TextCell (id=Sessions_Cell) at ClusterMemberUserSessionsPopup.pcf: line 51, column 46
    function sortValue_5 (userSession :  gw.api.system.cluster.UserSessionInfo) : java.lang.Object {
      return userSession.SessionCount
    }
    
    // 'value' attribute on DateCell (id=LastActivity_Cell) at ClusterMemberUserSessionsPopup.pcf: line 57, column 49
    function sortValue_6 (userSession :  gw.api.system.cluster.UserSessionInfo) : java.lang.Object {
      return userSession.LastActivity
    }
    
    // 'value' attribute on TextCell (id=InactiveFor_Cell) at ClusterMemberUserSessionsPopup.pcf: line 61, column 152
    function sortValue_7 (userSession :  gw.api.system.cluster.UserSessionInfo) : java.lang.Object {
      return gw.api.web.tools.Duration.getDisplayString(java.lang.Math.max(java.util.Date.Now.Time - userSession.LastActivity.Time, 0)/1000)
    }
    
    // 'title' attribute on Popup (id=ClusterMemberUserSessionsPopup) at ClusterMemberUserSessionsPopup.pcf: line 9, column 106
    static function title_24 (serverId :  String) : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.ClusterMemberUserSessionsPopup.Title", serverId)
    }
    
    // 'value' attribute on RowIterator (id=Sessions) at ClusterMemberUserSessionsPopup.pcf: line 36, column 83
    function value_22 () : java.util.List<gw.api.system.cluster.UserSessionInfo> {
      return data.getActiveUserSessions(serverId)
    }
    
    override property get CurrentLocation () : pcf.ClusterMemberUserSessionsPopup {
      return super.CurrentLocation as pcf.ClusterMemberUserSessionsPopup
    }
    
    property get data () : gw.api.tools.ClusterMembersData {
      return getVariableValue("data", 0) as gw.api.tools.ClusterMembersData
    }
    
    property set data ($arg :  gw.api.tools.ClusterMembersData) {
      setVariableValue("data", 0, $arg)
    }
    
    property get serverId () : String {
      return getVariableValue("serverId", 0) as String
    }
    
    property set serverId ($arg :  String) {
      setVariableValue("serverId", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMemberUserSessionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClusterMemberUserSessionsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at ClusterMemberUserSessionsPopup.pcf: line 46, column 61
    function valueRoot_12 () : java.lang.Object {
      return userSession.User.Credential
    }
    
    // 'value' attribute on TextCell (id=Sessions_Cell) at ClusterMemberUserSessionsPopup.pcf: line 51, column 46
    function valueRoot_15 () : java.lang.Object {
      return userSession
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at ClusterMemberUserSessionsPopup.pcf: line 42, column 53
    function valueRoot_9 () : java.lang.Object {
      return userSession.User
    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at ClusterMemberUserSessionsPopup.pcf: line 46, column 61
    function value_11 () : java.lang.String {
      return userSession.User.Credential.UserName
    }
    
    // 'value' attribute on TextCell (id=Sessions_Cell) at ClusterMemberUserSessionsPopup.pcf: line 51, column 46
    function value_14 () : java.lang.Integer {
      return userSession.SessionCount
    }
    
    // 'value' attribute on DateCell (id=LastActivity_Cell) at ClusterMemberUserSessionsPopup.pcf: line 57, column 49
    function value_17 () : java.util.Date {
      return userSession.LastActivity
    }
    
    // 'value' attribute on TextCell (id=InactiveFor_Cell) at ClusterMemberUserSessionsPopup.pcf: line 61, column 152
    function value_20 () : java.lang.String {
      return gw.api.web.tools.Duration.getDisplayString(java.lang.Math.max(java.util.Date.Now.Time - userSession.LastActivity.Time, 0)/1000)
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at ClusterMemberUserSessionsPopup.pcf: line 42, column 53
    function value_8 () : java.lang.String {
      return userSession.User.DisplayName
    }
    
    property get userSession () : gw.api.system.cluster.UserSessionInfo {
      return getIteratedValue(1) as gw.api.system.cluster.UserSessionInfo
    }
    
    
  }
  
  
}