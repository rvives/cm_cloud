package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/datachange/DataChangePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DataChangePageExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/datachange/DataChangePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DataChangePageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=DataChangePage) at DataChangePage.pcf: line 10, column 62
    static function canVisit_60 () : java.lang.Boolean {
      return perm.User.ViewDataChange
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DataChangePage.pcf: line 21, column 140
    function filters_0 () : gw.api.filters.IFilter[] {
      return new gw.api.filters.TypeKeyFilterSet( DataChange.Type.TypeInfo.getProperty("Status")).getFilterOptions()
    }
    
    // 'parent' attribute on Page (id=DataChangePage) at DataChangePage.pcf: line 10, column 62
    static function parent_61 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DataChangePage {
      return super.CurrentLocation as pcf.DataChangePage
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/datachange/DataChangePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 9, column 49
    function action_17 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 12, column 49
    function action_19 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 9, column 49
    function action_32 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 12, column 49
    function action_34 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_18 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_20 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_33 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_35 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'valueRange' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 6, column 85
    function valueRange_23 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TextCell (id=reference_Cell) at DataChangePage.pcf: line 40, column 60
    function valueRoot_9 () : java.lang.Object {
      return dataChangeRow
    }
    
    // 'value' attribute on TextCell (id=desc_Cell) at DataChangePage.pcf: line 44, column 54
    function value_11 () : java.lang.String {
      return dataChangeRow.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=status_Cell) at DataChangePage.pcf: line 49, column 57
    function value_14 () : typekey.DataChangeStatus {
      return dataChangeRow.Status
    }
    
    // 'value' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 6, column 85
    function value_21 () : entity.User {
      return dataChangeRow.CreateUser
    }
    
    // 'value' attribute on DateCell (id=createDate_Cell) at DataChangePage.pcf: line 60, column 53
    function value_29 () : java.util.Date {
      return dataChangeRow.CreateDate
    }
    
    // 'value' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 6, column 85
    function value_36 () : entity.User {
      return dataChangeRow.ExecuteUser
    }
    
    // 'value' attribute on DateCell (id=execDate_Cell) at DataChangePage.pcf: line 71, column 54
    function value_44 () : java.util.Date {
      return dataChangeRow.ExecuteDate
    }
    
    // 'value' attribute on TextCell (id=reference_Cell) at DataChangePage.pcf: line 40, column 60
    function value_8 () : java.lang.String {
      return dataChangeRow.ExternalReference
    }
    
    // 'valueRange' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_39 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_39 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=createUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_25 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserCell (id=execUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_40 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_39(__valueRangeArg)
    }
    
    property get dataChangeRow () : entity.DataChange {
      return getIteratedValue(2) as entity.DataChange
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/tools/datachange/DataChangePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends DataChangePageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=DiscardToolbarButton) at DataChangePage.pcf: line 87, column 93
    function action_49 () : void {
      dataChange.discardImmediate()
    }
    
    // 'action' attribute on ToolbarButton (id=ExecuteToolbarButton) at DataChangePage.pcf: line 92, column 93
    function action_51 () : void {
      dataChange.execute()
    }
    
    // 'available' attribute on ToolbarButton (id=DiscardToolbarButton) at DataChangePage.pcf: line 87, column 93
    function available_48 () : java.lang.Boolean {
      return dataChange.Status == TC_OPEN
    }
    
    // 'value' attribute on TextCell (id=reference_Cell) at DataChangePage.pcf: line 40, column 60
    function sortValue_1 (dataChangeRow :  entity.DataChange) : java.lang.Object {
      return dataChangeRow.ExternalReference
    }
    
    // 'value' attribute on TextCell (id=desc_Cell) at DataChangePage.pcf: line 44, column 54
    function sortValue_2 (dataChangeRow :  entity.DataChange) : java.lang.Object {
      return dataChangeRow.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=status_Cell) at DataChangePage.pcf: line 49, column 57
    function sortValue_3 (dataChangeRow :  entity.DataChange) : java.lang.Object {
      return dataChangeRow.Status
    }
    
    // 'value' attribute on UserCell (id=createUser_Cell) at DataChangePage.pcf: line 54, column 44
    function sortValue_4 (dataChangeRow :  entity.DataChange) : java.lang.Object {
      return dataChangeRow.CreateUser
    }
    
    // 'value' attribute on DateCell (id=createDate_Cell) at DataChangePage.pcf: line 60, column 53
    function sortValue_5 (dataChangeRow :  entity.DataChange) : java.lang.Object {
      return dataChangeRow.CreateDate
    }
    
    // 'value' attribute on UserCell (id=execUser_Cell) at DataChangePage.pcf: line 65, column 44
    function sortValue_6 (dataChangeRow :  entity.DataChange) : java.lang.Object {
      return dataChangeRow.ExecuteUser
    }
    
    // 'value' attribute on DateCell (id=execDate_Cell) at DataChangePage.pcf: line 71, column 54
    function sortValue_7 (dataChangeRow :  entity.DataChange) : java.lang.Object {
      return dataChangeRow.ExecuteDate
    }
    
    // 'title' attribute on Card (id=details) at DataChangePage.pcf: line 78, column 52
    function title_59 () : java.lang.String {
      return dataChange.ExternalReference
    }
    
    // 'value' attribute on TextAreaInput (id=gosu_Input) at DataChangePage.pcf: line 102, column 48
    function valueRoot_54 () : java.lang.Object {
      return dataChange
    }
    
    // 'value' attribute on RowIterator (id=dataChangeIterator) at DataChangePage.pcf: line 35, column 85
    function value_47 () : gw.api.database.IQueryBeanResult<entity.DataChange> {
      return gw.api.database.Query.make(entity.DataChange).select()
    }
    
    // 'value' attribute on TextAreaInput (id=gosu_Input) at DataChangePage.pcf: line 102, column 48
    function value_53 () : java.lang.String {
      return dataChange.Gosu
    }
    
    // 'value' attribute on TextAreaInput (id=result_Input) at DataChangePage.pcf: line 109, column 50
    function value_56 () : java.lang.String {
      return dataChange.Result
    }
    
    // 'visible' attribute on Toolbar at DataChangePage.pcf: line 82, column 57
    function visible_52 () : java.lang.Boolean {
      return perm.User.ExecuteDataChange
    }
    
    property get dataChange () : DataChange {
      return getCurrentSelection(1) as DataChange
    }
    
    property set dataChange ($arg :  DataChange) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}