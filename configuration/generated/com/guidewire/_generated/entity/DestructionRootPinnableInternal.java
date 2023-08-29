package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DestructionRootPinnable.eti;DestructionRootPinnable.eix;DestructionRootPinnable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DestructionRootPinnableInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the DoNotDestroy field.
   * If set then the entity should not be destroyed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotDestroy();
  
  
  /**
   * Sets the value of the DoNotDestroy field.
   */
  public void setDoNotDestroy(java.lang.Boolean value);
  
  
  
}