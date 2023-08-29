package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserRoleAssignment.eti;UserRoleAssignment.eix;UserRoleAssignment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserRoleAssignmentInternal extends com.guidewire._generated.entity.UserRoleAssignmentDelegateInternal, com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String USERROLEASSIGNMENTADDED_EVENT = "UserRoleAssignmentAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String USERROLEASSIGNMENTCHANGED_EVENT = "UserRoleAssignmentChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String USERROLEASSIGNMENTREMOVED_EVENT = "UserRoleAssignmentRemoved";
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}