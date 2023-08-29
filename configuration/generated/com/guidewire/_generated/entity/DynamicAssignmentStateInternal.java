package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DynamicAssignmentState.eti;DynamicAssignmentState.eix;DynamicAssignmentState.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DynamicAssignmentStateInternal extends com.guidewire._generated.entity.LastAssignedUserContainerBaseInternal, com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.LastAssignedUserContainerInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String DYNAMICASSIGNMENTSTATEADDED_EVENT = "DynamicAssignmentStateAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String DYNAMICASSIGNMENTSTATECHANGED_EVENT = "DynamicAssignmentStateChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String DYNAMICASSIGNMENTSTATEREMOVED_EVENT = "DynamicAssignmentStateRemoved";
  
  /**
   * Gets the value of the Fingerprint field.
   * The fingerprint this state is tracking.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFingerprint();
  
  
  /**
   * Gets the value of the LockingColumn field.
   * Meaningless column for locking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn();
  
  
  /**
   * Gets the value of the GroupOnly field.
   * Flag indicating whether the row represents a Group assignment only, or a Group and User assignment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isGroupOnly();
  
  
  /**
   * Sets the value of the Fingerprint field.
   */
  public void setFingerprint(java.lang.String value);
  
  
  /**
   * Sets the value of the GroupOnly field.
   */
  public void setGroupOnly(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  
}