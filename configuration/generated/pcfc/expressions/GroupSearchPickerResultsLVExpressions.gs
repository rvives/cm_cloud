package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupSearchPickerResultsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupSearchPickerResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupSearchPickerResultsLV.pcf: line 31, column 26
    function sortValue_0 (group :  entity.Group) : java.lang.Object {
      return group.Name
    }
    
    // 'sortBy' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupSearchPickerResultsLV.pcf: line 36, column 33
    function sortValue_1 (group :  entity.Group) : java.lang.Object {
      return group.Parent.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Web_GroupSearchResults_Type_Cell) at GroupSearchPickerResultsLV.pcf: line 41, column 42
    function sortValue_2 (group :  entity.Group) : java.lang.Object {
      return group.GroupType
    }
    
    // 'value' attribute on TextCell (id=Web_GroupSearchResults_Relationship_Cell) at GroupSearchPickerResultsLV.pcf: line 45, column 52
    function sortValue_3 (group :  entity.Group) : java.lang.Object {
      return getRelationshipForGroups(group)
    }
    
    // 'value' attribute on RowIterator at GroupSearchPickerResultsLV.pcf: line 24, column 72
    function value_33 () : gw.api.database.IQueryBeanResult<entity.Group> {
      return groupList
    }
    
    property get groupList () : gw.api.database.IQueryBeanResult<Group> {
      return getRequireValue("groupList", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set groupList ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setRequireValue("groupList", 0, $arg)
    }
    
    property get restrictedGroup () : Group {
      return getRequireValue("restrictedGroup", 0) as Group
    }
    
    property set restrictedGroup ($arg :  Group) {
      setRequireValue("restrictedGroup", 0, $arg)
    }
    
    
    function getRelationshipForGroups(group : Group) : String {
      if (restrictedGroup != null) {
        if (group == restrictedGroup) {
          return DisplayKey.get("Web.GroupSearchResults.Relationship.Current");
        } else if (restrictedGroup.isAncestor(group)) {
          return DisplayKey.get("Web.GroupSearchResults.Relationship.ChildOfCurrent");
        }
      }
      return "";
    }
        
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupSearchPickerResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_14 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_16 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 10, column 49
    function action_4 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 13, column 49
    function action_6 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_15 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_17 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_7 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'canPick' attribute on RowIterator at GroupSearchPickerResultsLV.pcf: line 24, column 72
    function canPick_31 () : java.lang.Boolean {
      return restrictedGroup == null or (group != restrictedGroup and not restrictedGroup.isAncestor(group))
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 7, column 52
    function valueRange_9 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function valueRoot_19 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function value_18 () : entity.Group {
      return group.Parent
    }
    
    // 'value' attribute on TypeKeyCell (id=Web_GroupSearchResults_Type_Cell) at GroupSearchPickerResultsLV.pcf: line 41, column 42
    function value_26 () : typekey.GroupType {
      return group.GroupType
    }
    
    // 'value' attribute on TextCell (id=Web_GroupSearchResults_Relationship_Cell) at GroupSearchPickerResultsLV.pcf: line 45, column 52
    function value_29 () : java.lang.String {
      return getRelationshipForGroups(group)
    }
    
    // 'value' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 7, column 52
    function value_8 () : entity.Group {
      return group
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_10 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_Name_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_11 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupCell (id=Web_GroupSearchResults_ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_22 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    property get group () : entity.Group {
      return getIteratedValue(1) as entity.Group
    }
    
    
  }
  
  
}