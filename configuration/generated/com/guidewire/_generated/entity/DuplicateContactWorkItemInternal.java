package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DuplicateContactWorkItem.eti;DuplicateContactWorkItem.eix;DuplicateContactWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DuplicateContactWorkItemInternal extends com.guidewire._generated.entity.WorkItemInternal, com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the ABContact field.
   * ABContact to be evaluated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the BatchRun field.
   * The corresponding DuplicateContactBatchRun where this contact has been found.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DuplicateContactBatchRun getBatchRun();
  
  
  public gw.pl.persistence.core.Key getBatchRunID();
  
  
  /**
   * Gets the value of the NumberOfResults field.
   * The number of duplicates found.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumberOfResults();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BatchRun field.
   */
  public void setBatchRun(entity.DuplicateContactBatchRun value);
  
  
  public void setBatchRunID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NumberOfResults field.
   */
  public void setNumberOfResults(java.lang.Integer value);
  
  
  
}