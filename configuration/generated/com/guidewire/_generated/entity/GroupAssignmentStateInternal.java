package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GroupAssignmentState.eti;GroupAssignmentState.eix;GroupAssignmentState.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GroupAssignmentStateInternal extends com.guidewire._generated.entity.LastAssignedUserContainerBaseInternal, com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.LastAssignedUserContainerInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String GROUPASSIGNMENTSTATEADDED_EVENT = "GroupAssignmentStateAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String GROUPASSIGNMENTSTATECHANGED_EVENT = "GroupAssignmentStateChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String GROUPASSIGNMENTSTATEREMOVED_EVENT = "GroupAssignmentStateRemoved";
  
  /**
   * Adds the given element to the Users array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUsers(entity.GroupUserAssignmentState element);
  
  
  /**
   * Gets the value of the ActivityLoad field.
   * The current load of the group for activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getActivityLoad();
  
  
  /**
   * Gets the value of the Group field.
   * The group this state is tracking.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getGroup();
  
  
  public gw.pl.persistence.core.Key getGroupID();
  
  
  /**
   * Gets the value of the GroupType field.
   * The group type this state is tracking.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GroupType getGroupType();
  
  
  /**
   * Gets the value of the LockingColumn field.
   * Meaningless column for locking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn();
  
  
  /**
   * Gets the value of the ReviewLoad field.
   * The current load of the group for assignment review activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getReviewLoad();
  
  
  /**
   * Gets the value of the Users field.
   * Users belonging to this group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GroupUserAssignmentState[] getUsers();
  
  
  /**
   * Gets the value of the IncludeSubGroups field.
   * Is this assignment state for just this group, or does it include the sub groups as well.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludeSubGroups();
  
  
  /**
   * Removes the given element from the Users array. This is achieved by marking the element for removal.
   */
  public void removeFromUsers(entity.GroupUserAssignmentState element);
  
  
  /**
   * Removes the given element from the Users array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUsers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ActivityLoad field.
   */
  public void setActivityLoad(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Group field.
   */
  public void setGroup(entity.Group value);
  
  
  public void setGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GroupType field.
   */
  public void setGroupType(typekey.GroupType value);
  
  
  /**
   * Sets the value of the IncludeSubGroups field.
   */
  public void setIncludeSubGroups(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ReviewLoad field.
   */
  public void setReviewLoad(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Users field.
   */
  public void setUsers(entity.GroupUserAssignmentState[] value);
  
  
  
}