package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentGroupLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentGroupLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at AssignmentGroupLV.pcf: line 24, column 26
    function sortValue_0 (group :  entity.Group) : java.lang.Object {
      return group
    }
    
    // 'value' attribute on RowIterator at AssignmentGroupLV.pcf: line 18, column 72
    function value_27 () : gw.api.database.IQueryBeanResult<entity.Group> {
      return Groups
    }
    
    property get Groups () : gw.api.database.IQueryBeanResult<Group> {
      return getRequireValue("Groups", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set Groups ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setRequireValue("Groups", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AssignmentGroupLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_1 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_11 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_13 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_3 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_12 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_14 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_2 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_4 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'pickValue' attribute on RowIterator at AssignmentGroupLV.pcf: line 18, column 72
    function pickValue_26 () : gw.api.assignment.Assignee {
      return group
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function valueRange_6 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function valueRoot_16 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function value_15 () : entity.Group {
      return group.Parent
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at AssignmentGroupLV.pcf: line 35, column 44
    function value_23 () : entity.Organization {
      return group.Organization
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function value_5 () : entity.Group {
      return group
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_18 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_18 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_7 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_19 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_8 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get group () : entity.Group {
      return getIteratedValue(1) as entity.Group
    }
    
    
  }
  
  
}