package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DestinationLeaseHistory.eti;DestinationLeaseHistory.eix;DestinationLeaseHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DestinationLeaseHistoryInternal extends com.guidewire._generated.entity.LeaseHistoryInternal, com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the LockingColumn field.
   * Meaningless column for locking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn();
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  
}