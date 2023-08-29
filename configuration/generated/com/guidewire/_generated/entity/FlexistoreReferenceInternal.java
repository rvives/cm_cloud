package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FlexistoreReference.eti;FlexistoreReference.eix;FlexistoreReference.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FlexistoreReferenceInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the DocumentID field.
   * The ID of the Flexistore document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentID();
  
  
  /**
   * Gets the value of the PoolID field.
   * The ID of the Flexistore pool.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPoolID();
  
  
  /**
   * Sets the value of the DocumentID field.
   */
  public void setDocumentID(java.lang.String value);
  
  
  /**
   * Sets the value of the PoolID field.
   */
  public void setPoolID(java.lang.String value);
  
  
  
}