package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMembers.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClusterMembersExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMembers.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClusterMembersExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (Result :  String) : int {
      return 1
    }
    
    // 'action' attribute on ButtonInput (id=ClusterReconnect_Input) at ClusterMembers.pcf: line 91, column 95
    function action_25 () : void {
      Result = gw.api.tools.InternalToolsUtil.reconnectToCluster()
    }
    
    // 'action' attribute on ToolbarButton (id=DownloadReport) at ClusterMembers.pcf: line 41, column 64
    function action_3 () : void {
      ClusterMembersDownloadConfigurePopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=ShowUnusedRoles) at ClusterMembers.pcf: line 46, column 50
    function action_6 () : void {
      UnusedServerRolesPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=DownloadReport) at ClusterMembers.pcf: line 41, column 64
    function action_dest_4 () : pcf.api.Destination {
      return pcf.ClusterMembersDownloadConfigurePopup.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=ShowUnusedRoles) at ClusterMembers.pcf: line 46, column 50
    function action_dest_7 () : pcf.api.Destination {
      return pcf.UnusedServerRolesPopup.createDestination()
    }
    
    // 'available' attribute on ButtonInput (id=ClusterReconnect_Input) at ClusterMembers.pcf: line 91, column 95
    function available_24 () : java.lang.Boolean {
      return perm.User.EditCluster or perm.User.DevAllAccess
    }
    
    // 'canVisit' attribute on Page (id=ClusterMembers) at ClusterMembers.pcf: line 13, column 74
    static function canVisit_128 (Result :  String) : java.lang.Boolean {
      return perm.User.ViewCluster or perm.User.DevAllAccess
    }
    
    // 'initialValue' attribute on Variable at ClusterMembers.pcf: line 24, column 47
    function initialValue_0 () : gw.api.tools.ClusterMembersData {
      return new gw.api.tools.ClusterMembersData()
    }
    
    // 'initialValue' attribute on Variable at ClusterMembers.pcf: line 29, column 30
    function initialValue_1 () : java.util.Date {
      return gw.api.util.DateUtil.currentDate()
    }
    
    // 'initialValue' attribute on Variable at ClusterMembers.pcf: line 34, column 43
    function initialValue_2 () : java.util.Set<String> {
      return ClusterMembersData.UnusedServerRoles
    }
    
    // 'label' attribute on ToolbarButton (id=ShowUnusedRoles) at ClusterMembers.pcf: line 46, column 50
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.ClusterMembers.UnusedServerRoles", UnusedServerRoles.size())
    }
    
    // 'parent' attribute on Page (id=ClusterMembers) at ClusterMembers.pcf: line 13, column 74
    static function parent_129 (Result :  String) : pcf.api.Destination {
      return pcf.ClusterPages.createDestination()
    }
    
    // 'value' attribute on TextInput (id=Host_Input) at ClusterMembers.pcf: line 57, column 52
    function valueRoot_10 () : java.lang.Object {
      return ClusterMembersData
    }
    
    // 'value' attribute on TextInput (id=ClusterId_Input) at ClusterMembers.pcf: line 61, column 53
    function value_12 () : java.lang.String {
      return ClusterMembersData.ClusterId
    }
    
    // 'value' attribute on TextInput (id=ServerId_Input) at ClusterMembers.pcf: line 65, column 52
    function value_15 () : java.lang.String {
      return ClusterMembersData.ServerId
    }
    
    // 'value' attribute on TextInput (id=Uuid_Input) at ClusterMembers.pcf: line 69, column 48
    function value_18 () : java.lang.String {
      return ClusterMembersData.Uuid
    }
    
    // 'value' attribute on TextInput (id=ServerRoles_Input) at ClusterMembers.pcf: line 73, column 63
    function value_21 () : java.lang.String {
      return ClusterMembersData.ServerRolesAsString
    }
    
    // 'value' attribute on TextInput (id=Host_Input) at ClusterMembers.pcf: line 57, column 52
    function value_9 () : java.lang.String {
      return ClusterMembersData.HostName
    }
    
    // 'visible' attribute on ToolbarButton (id=ShowUnusedRoles) at ClusterMembers.pcf: line 46, column 50
    function visible_5 () : java.lang.Boolean {
      return not UnusedServerRoles.Empty
    }
    
    property get ClusterMembersData () : gw.api.tools.ClusterMembersData {
      return getVariableValue("ClusterMembersData", 0) as gw.api.tools.ClusterMembersData
    }
    
    property set ClusterMembersData ($arg :  gw.api.tools.ClusterMembersData) {
      setVariableValue("ClusterMembersData", 0, $arg)
    }
    
    property get CurrentDbTime () : java.util.Date {
      return getVariableValue("CurrentDbTime", 0) as java.util.Date
    }
    
    property set CurrentDbTime ($arg :  java.util.Date) {
      setVariableValue("CurrentDbTime", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClusterMembers {
      return super.CurrentLocation as pcf.ClusterMembers
    }
    
    property get Result () : String {
      return getVariableValue("Result", 0) as String
    }
    
    property set Result ($arg :  String) {
      setVariableValue("Result", 0, $arg)
    }
    
    property get UnusedServerRoles () : java.util.Set<String> {
      return getVariableValue("UnusedServerRoles", 0) as java.util.Set<String>
    }
    
    property set UnusedServerRoles ($arg :  java.util.Set<String>) {
      setVariableValue("UnusedServerRoles", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMembers.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClusterMembers.pcf: line 223, column 59
    function valueRoot_90 () : java.lang.Object {
      return Component.Type
    }
    
    // 'value' attribute on DateCell (id=StartTime_Cell) at ClusterMembers.pcf: line 233, column 50
    function valueRoot_95 () : java.lang.Object {
      return Component
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClusterMembers.pcf: line 223, column 59
    function value_89 () : java.lang.String {
      return Component.Type.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClusterMembers.pcf: line 227, column 65
    function value_92 () : java.lang.String {
      return Component.Name ?: Component.Code
    }
    
    // 'value' attribute on DateCell (id=StartTime_Cell) at ClusterMembers.pcf: line 233, column 50
    function value_94 () : java.util.Date {
      return Component.Started
    }
    
    // 'value' attribute on TextCell (id=FailoverState_Cell) at ClusterMembers.pcf: line 237, column 74
    function value_97 () : java.lang.String {
      return Component.State.getDisplayName(Component)
    }
    
    // 'value' attribute on DateCell (id=RetryFailover_Cell) at ClusterMembers.pcf: line 243, column 56
    function value_99 () : java.util.Date {
      return Component.RetryFailover
    }
    
    property get Component () : gw.api.system.cluster.ComponentInfo {
      return getIteratedValue(2) as gw.api.system.cluster.ComponentInfo
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMembers.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Host_Cell) at ClusterMembers.pcf: line 268, column 48
    function valueRoot_105 () : java.lang.Object {
      return Run
    }
    
    // 'value' attribute on TextCell (id=Host_Cell) at ClusterMembers.pcf: line 268, column 48
    function value_104 () : java.lang.String {
      return Run.LogicalName
    }
    
    // 'value' attribute on TextCell (id=ClusterId_Cell) at ClusterMembers.pcf: line 273, column 46
    function value_107 () : java.lang.String {
      return Run.ClusterId
    }
    
    // 'value' attribute on TextCell (id=Uuid_Cell) at ClusterMembers.pcf: line 278, column 41
    function value_110 () : java.lang.String {
      return Run.Uuid
    }
    
    // 'value' attribute on TextCell (id=Env_Cell) at ClusterMembers.pcf: line 283, column 40
    function value_113 () : java.lang.String {
      return Run.Env
    }
    
    // 'value' attribute on TextCell (id=RunLevel_Cell) at ClusterMembers.pcf: line 288, column 45
    function value_116 () : java.lang.String {
      return Run.RunLevel
    }
    
    // 'value' attribute on TextCell (id=ServerRoles_Cell) at ClusterMembers.pcf: line 294, column 36
    function value_119 () : java.lang.String {
      return ClusterMembersData.serverRolesToString(Run.ServerRoles)
    }
    
    // 'value' attribute on DateCell (id=ServerStarted_Cell) at ClusterMembers.pcf: line 302, column 50
    function value_121 () : java.util.Date {
      return Run.ServerStarted
    }
    
    // 'value' attribute on DateCell (id=LastUpdate_Cell) at ClusterMembers.pcf: line 309, column 54
    function value_124 () : java.util.Date {
      return Run.ConnectionStopped
    }
    
    property get Run () : entity.ClusterMemberData {
      return getIteratedValue(2) as entity.ClusterMemberData
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMembers.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=UserSessions_Cell) at ClusterMembers.pcf: line 129, column 50
    function actionAvailable_49 () : java.lang.Boolean {
      return Server.InCluster
    }
    
    // 'actionAvailable' attribute on TextCell (id=PlannedShutdown_Cell) at ClusterMembers.pcf: line 167, column 32
    function actionAvailable_66 () : java.lang.Boolean {
      return Server.InCluster and Server.Member.PlannedShutdownInitiated != null
    }
    
    // 'action' attribute on TextCell (id=UserSessions_Cell) at ClusterMembers.pcf: line 129, column 50
    function action_47 () : void {
      ClusterMemberUserSessionsPopup.push(Server.ServerId)
    }
    
    // 'action' attribute on TextCell (id=PlannedShutdown_Cell) at ClusterMembers.pcf: line 167, column 32
    function action_64 () : void {
      PlannedShutdownStatusPopup.push(Server.ServerId)
    }
    
    // 'action' attribute on Link (id=NodeFailed) at ClusterMembers.pcf: line 177, column 76
    function action_72 () : void {
      ClusterMembersData.nodeFailed(Server.ServerId)
    }
    
    // 'action' attribute on Link (id=StartPlannedShutdown) at ClusterMembers.pcf: line 184, column 100
    function action_76 () : void {
      PlannedShutdownPopup.push(Server.ServerId)
    }
    
    // 'action' attribute on Link (id=StopPlannedShutdown) at ClusterMembers.pcf: line 192, column 100
    function action_80 () : void {
      ClusterMembersData.cancelPlannedShutdown(Server.ServerId)
    }
    
    // 'action' attribute on TextCell (id=UserSessions_Cell) at ClusterMembers.pcf: line 129, column 50
    function action_dest_48 () : pcf.api.Destination {
      return pcf.ClusterMemberUserSessionsPopup.createDestination(Server.ServerId)
    }
    
    // 'action' attribute on TextCell (id=PlannedShutdown_Cell) at ClusterMembers.pcf: line 167, column 32
    function action_dest_65 () : pcf.api.Destination {
      return pcf.PlannedShutdownStatusPopup.createDestination(Server.ServerId)
    }
    
    // 'action' attribute on Link (id=StartPlannedShutdown) at ClusterMembers.pcf: line 184, column 100
    function action_dest_77 () : pcf.api.Destination {
      return pcf.PlannedShutdownPopup.createDestination(Server.ServerId)
    }
    
    // 'available' attribute on Link (id=NodeFailed) at ClusterMembers.pcf: line 177, column 76
    function available_70 () : java.lang.Boolean {
      return not Server.InCluster and not Server.Stopped and (perm.User.EditCluster or perm.User.DevAllAccess)
    }
    
    // 'available' attribute on Link (id=StartPlannedShutdown) at ClusterMembers.pcf: line 184, column 100
    function available_74 () : java.lang.Boolean {
      return Server.InCluster and Server.Member.PlannedShutdownInitiated == null and (perm.User.EditCluster or perm.User.DevAllAccess)
    }
    
    // 'available' attribute on Link (id=StopPlannedShutdown) at ClusterMembers.pcf: line 192, column 100
    function available_78 () : java.lang.Boolean {
      return Server.InCluster and Server.Member.PlannedShutdownInitiated != null and (perm.User.EditCluster or perm.User.DevAllAccess)
    }
    
    // 'confirmMessage' attribute on Link (id=NodeFailed) at ClusterMembers.pcf: line 177, column 76
    function confirmMessage_73 () : java.lang.String {
      return DisplayKey.get("Web.InternalTools.ClusterMembers.MembersLV.NodeFailed.Confirmation", Server.ServerId)
    }
    
    // 'confirmMessage' attribute on Link (id=StopPlannedShutdown) at ClusterMembers.pcf: line 192, column 100
    function confirmMessage_81 () : java.lang.String {
      return DisplayKey.get("Web.InternalTools.ClusterMembers.MembersLV.CancelPlannedShutdown.Confirmation", Server.ServerId)
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at ClusterMembers.pcf: line 114, column 44
    function valueRoot_39 () : java.lang.Object {
      return Server
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at ClusterMembers.pcf: line 114, column 44
    function value_38 () : java.lang.String {
      return Server.ServerId
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClusterMembers.pcf: line 118, column 51
    function value_41 () : java.lang.String {
      return Server.StatusLocalized
    }
    
    // 'value' attribute on TextCell (id=Host_Cell) at ClusterMembers.pcf: line 122, column 47
    function value_44 () : java.lang.String {
      return Server.LogicalName
    }
    
    // 'value' attribute on TextCell (id=UserSessions_Cell) at ClusterMembers.pcf: line 129, column 50
    function value_50 () : java.lang.Integer {
      return Server.InCluster ? Server.Member.UserSessions : null
    }
    
    // 'value' attribute on TextCell (id=RunLevel_Cell) at ClusterMembers.pcf: line 133, column 79
    function value_52 () : java.lang.String {
      return not Server.Stopped ? Server.Member.RunLevel : null
    }
    
    // 'value' attribute on TextCell (id=Build_Cell) at ClusterMembers.pcf: line 137, column 76
    function value_54 () : java.lang.String {
      return not Server.Stopped ? Server.Member.Build : null
    }
    
    // 'value' attribute on TextCell (id=ServerRoles_Cell) at ClusterMembers.pcf: line 142, column 32
    function value_56 () : java.lang.String {
      return not Server.Stopped ? Server.ServerRolesAsString : null
    }
    
    // 'value' attribute on DateCell (id=ServerStarted_Cell) at ClusterMembers.pcf: line 148, column 84
    function value_58 () : java.util.Date {
      return not Server.Stopped ? Server.Member.ServerStarted : null
    }
    
    // 'value' attribute on DateCell (id=ConnectionStarted_Cell) at ClusterMembers.pcf: line 154, column 88
    function value_60 () : java.util.Date {
      return not Server.Stopped ? Server.Member.ConnectionStarted : null
    }
    
    // 'value' attribute on DateCell (id=LastUpdate_Cell) at ClusterMembers.pcf: line 160, column 87
    function value_62 () : java.util.Date {
      return not Server.Stopped ? Server.Member.LastUpdateAsDate : null
    }
    
    // 'value' attribute on TextCell (id=PlannedShutdown_Cell) at ClusterMembers.pcf: line 167, column 32
    function value_67 () : java.lang.String {
      return Server.PlannedShutdownStatusLocalized
    }
    
    // 'visible' attribute on Link (id=NodeFailed) at ClusterMembers.pcf: line 177, column 76
    function visible_71 () : java.lang.Boolean {
      return not Server.InCluster and not Server.Stopped
    }
    
    // 'visible' attribute on Link (id=StartPlannedShutdown) at ClusterMembers.pcf: line 184, column 100
    function visible_75 () : java.lang.Boolean {
      return Server.InCluster and Server.Member.PlannedShutdownInitiated == null
    }
    
    property get Server () : gw.api.tools.ClusteredServer {
      return getIteratedValue(2) as gw.api.tools.ClusteredServer
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/cluster/ClusterMembers.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ClusterMembersExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ClusterMembers.pcf: line 217, column 98
    function filters_83 () : gw.api.filters.IFilter[] {
      return gw.api.tools.ClusterComponentFilters.TypeFilters.toTypedArray()
    }
    
    // 'value' attribute on DateCell (id=ServerStarted_Cell) at ClusterMembers.pcf: line 302, column 50
    function sortValue_103 (Run :  entity.ClusterMemberData) : java.lang.Object {
      return Run.ServerStarted
    }
    
    // 'value' attribute on TextCell (id=ServerId_Cell) at ClusterMembers.pcf: line 114, column 44
    function sortValue_27 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return Server.ServerId
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClusterMembers.pcf: line 118, column 51
    function sortValue_28 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return Server.StatusLocalized
    }
    
    // 'value' attribute on TextCell (id=Host_Cell) at ClusterMembers.pcf: line 122, column 47
    function sortValue_29 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return Server.LogicalName
    }
    
    // 'value' attribute on TextCell (id=UserSessions_Cell) at ClusterMembers.pcf: line 129, column 50
    function sortValue_30 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return Server.InCluster ? Server.Member.UserSessions : null
    }
    
    // 'value' attribute on TextCell (id=RunLevel_Cell) at ClusterMembers.pcf: line 133, column 79
    function sortValue_31 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return not Server.Stopped ? Server.Member.RunLevel : null
    }
    
    // 'value' attribute on TextCell (id=Build_Cell) at ClusterMembers.pcf: line 137, column 76
    function sortValue_32 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return not Server.Stopped ? Server.Member.Build : null
    }
    
    // 'value' attribute on TextCell (id=ServerRoles_Cell) at ClusterMembers.pcf: line 142, column 32
    function sortValue_33 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return not Server.Stopped ? Server.ServerRolesAsString : null
    }
    
    // 'value' attribute on DateCell (id=ServerStarted_Cell) at ClusterMembers.pcf: line 148, column 84
    function sortValue_34 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return not Server.Stopped ? Server.Member.ServerStarted : null
    }
    
    // 'value' attribute on DateCell (id=ConnectionStarted_Cell) at ClusterMembers.pcf: line 154, column 88
    function sortValue_35 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return not Server.Stopped ? Server.Member.ConnectionStarted : null
    }
    
    // 'value' attribute on DateCell (id=LastUpdate_Cell) at ClusterMembers.pcf: line 160, column 87
    function sortValue_36 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return not Server.Stopped ? Server.Member.LastUpdateAsDate : null
    }
    
    // 'value' attribute on TextCell (id=PlannedShutdown_Cell) at ClusterMembers.pcf: line 167, column 32
    function sortValue_37 (Server :  gw.api.tools.ClusteredServer) : java.lang.Object {
      return Server.PlannedShutdownStatusLocalized
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClusterMembers.pcf: line 223, column 59
    function sortValue_84 (Component :  gw.api.system.cluster.ComponentInfo) : java.lang.Object {
      return Component.Type.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClusterMembers.pcf: line 227, column 65
    function sortValue_85 (Component :  gw.api.system.cluster.ComponentInfo) : java.lang.Object {
      return Component.Name ?: Component.Code
    }
    
    // 'value' attribute on DateCell (id=StartTime_Cell) at ClusterMembers.pcf: line 233, column 50
    function sortValue_86 (Component :  gw.api.system.cluster.ComponentInfo) : java.lang.Object {
      return Component.Started
    }
    
    // 'value' attribute on TextCell (id=FailoverState_Cell) at ClusterMembers.pcf: line 237, column 74
    function sortValue_87 (Component :  gw.api.system.cluster.ComponentInfo) : java.lang.Object {
      return Component.State.getDisplayName(Component)
    }
    
    // 'value' attribute on DateCell (id=RetryFailover_Cell) at ClusterMembers.pcf: line 243, column 56
    function sortValue_88 (Component :  gw.api.system.cluster.ComponentInfo) : java.lang.Object {
      return Component.RetryFailover
    }
    
    // 'value' attribute on RowIterator at ClusterMembers.pcf: line 212, column 89
    function value_102 () : java.util.List<gw.api.system.cluster.ComponentInfo> {
      return gw.api.system.cluster.ClusterStateProvider.instance().getActiveComponents(SelectedServer.ServerId)
    }
    
    // 'value' attribute on RowIterator at ClusterMembers.pcf: line 262, column 96
    function value_127 () : gw.api.database.IQueryBeanResult<entity.ClusterMemberData> {
      return ClusterMembersData.getHistoryQuery(SelectedServer.ServerId).Processor as gw.api.database.IQueryBeanResult<ClusterMemberData>
    }
    
    // 'value' attribute on RowIterator at ClusterMembers.pcf: line 109, column 78
    function value_82 () : java.util.List<gw.api.tools.ClusteredServer> {
      return ClusterMembersData.AllServers
    }
    
    property get SelectedServer () : gw.api.tools.ClusteredServer {
      return getCurrentSelection(1) as gw.api.tools.ClusteredServer
    }
    
    property set SelectedServer ($arg :  gw.api.tools.ClusteredServer) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}