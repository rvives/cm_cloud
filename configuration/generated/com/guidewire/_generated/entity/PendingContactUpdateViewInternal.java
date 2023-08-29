package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingContactUpdateView.eti;PendingContactUpdateView.eix;PendingContactUpdateView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingContactUpdateViewInternal extends com.guidewire._generated.entity.PendingContactChangeViewInternal, com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the PendingContactUpdate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PendingContactUpdate getPendingContactUpdate();
  
  
  public gw.pl.persistence.core.Key getPendingContactUpdateID();
  
  
  /**
   * Sets the value of the PendingContactUpdate field.
   */
  public void setPendingContactUpdate(entity.PendingContactUpdate value);
  
  
  public void setPendingContactUpdateID(gw.pl.persistence.core.Key value);
  
  
  
}