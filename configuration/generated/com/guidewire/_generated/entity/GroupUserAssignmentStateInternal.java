package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GroupUserAssignmentState.eti;GroupUserAssignmentState.eix;GroupUserAssignmentState.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GroupUserAssignmentStateInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.domain.assignment.GroupUserAssignmentStatePublicMethods, com.guidewire.pl.domain.assignment.impl.GroupUserAssignmentStateInternalMethods {
  /**
   * Gets the value of the ActivityLoad field.
   * The current load of the user for activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getActivityLoad();
  
  
  /**
   * Gets the value of the Group field.
   * @deprecated The associated group.   This property is deprecated for its misleading name, please use GroupAssignmentState property
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GroupAssignmentState getGroup();
  
  
  public gw.pl.persistence.core.Key getGroupID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the ReviewLoad field.
   * The current load of the user for assignment review activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getReviewLoad();
  
  
  /**
   * Gets the value of the User field.
   * The associated user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser();
  
  
  public gw.pl.persistence.core.Key getUserID();
  
  
  /**
   * Sets the value of the ActivityLoad field.
   */
  public void setActivityLoad(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Group field.
   * @deprecated The associated group.   This property is deprecated for its misleading name, please use GroupAssignmentState property
   */
  @java.lang.Deprecated
  public void setGroup(entity.GroupAssignmentState value);
  
  
  public void setGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the ReviewLoad field.
   */
  public void setReviewLoad(java.lang.Integer value);
  
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value);
  
  
  public void setUserID(gw.pl.persistence.core.Key value);
  
  
  
}