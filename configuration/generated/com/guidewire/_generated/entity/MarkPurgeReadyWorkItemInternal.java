package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MarkPurgeReadyWorkItem.eti;MarkPurgeReadyWorkItem.eix;MarkPurgeReadyWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MarkPurgeReadyWorkItemInternal extends com.guidewire._generated.entity.WorkItemInternal, com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the Item field.
   * Soft foreign key to the item to be processed for marking PurgeReady.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getItem();
  
  
  /**
   * Sets the value of the Item field.
   */
  public void setItem(java.lang.Long value);
  
  
  
}