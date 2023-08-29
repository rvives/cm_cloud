package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Operable.eti;Operable.eix;Operable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OperableInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the DoNotProcess field.
   * GDPR requirement to restrict "processing"
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotProcess();
  
  
  /**
   * Sets the value of the DoNotProcess field.
   */
  public void setDoNotProcess(java.lang.Boolean value);
  
  
  
}