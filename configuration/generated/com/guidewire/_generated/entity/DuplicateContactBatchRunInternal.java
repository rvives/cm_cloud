package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DuplicateContactBatchRun.eti;DuplicateContactBatchRun.eix;DuplicateContactBatchRun.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DuplicateContactBatchRunInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the LastRunTime field.
   * Date the batch process last ran.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastRunTime();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the LastRunTime field.
   */
  public void setLastRunTime(java.util.Date value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}