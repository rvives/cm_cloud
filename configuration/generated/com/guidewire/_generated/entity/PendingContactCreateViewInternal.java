package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingContactCreateView.eti;PendingContactCreateView.eix;PendingContactCreateView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingContactCreateViewInternal extends com.guidewire._generated.entity.PendingContactChangeViewInternal, com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the ABContactID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the ABContactSubtype field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ABContact getABContactSubtype();
  
  
  /**
   * Gets the value of the PendingContactCreate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PendingContactCreate getPendingContactCreate();
  
  
  public gw.pl.persistence.core.Key getPendingContactCreateID();
  
  
  /**
   * Sets the value of the ABContactID field.
   */
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ABContactSubtype field.
   */
  public void setABContactSubtype(typekey.ABContact value);
  
  
  /**
   * Sets the value of the PendingContactCreate field.
   */
  public void setPendingContactCreate(entity.PendingContactCreate value);
  
  
  public void setPendingContactCreateID(gw.pl.persistence.core.Key value);
  
  
  
}