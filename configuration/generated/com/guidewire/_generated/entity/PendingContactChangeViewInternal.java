package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingContactChangeView.eti;PendingContactChangeView.eix;PendingContactChangeView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingContactChangeViewInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the ABContact field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getABContact();
  
  
  /**
   * Gets the value of the ABContactName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getABContactName();
  
  
  /**
   * Gets the value of the RelatedTo field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRelatedTo();
  
  
  /**
   * Gets the value of the RequestingUser field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRequestingUser();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PendingContactChangeView getSubtype();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ABContactName field.
   */
  public void setABContactName(java.lang.String value);
  
  
  /**
   * Sets the value of the RelatedTo field.
   */
  public void setRelatedTo(java.lang.String value);
  
  
  /**
   * Sets the value of the RequestingUser field.
   */
  public void setRequestingUser(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.PendingContactChangeView value);
  
  
  
}