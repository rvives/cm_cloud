package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ZoneDelegate.eti;ZoneDelegate.eix;ZoneDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ZoneDelegateInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the Code field.
   * The code for this zone, this is the value that should be used for lookups.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the CodeDenorm field.
   * denorm field for Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeDenorm();
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CodeDenorm field.
   */
  public void setCodeDenorm(java.lang.String value);
  
  
  
}