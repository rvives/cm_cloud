package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContactHistory.eti;ContactHistory.eix;ContactHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContactHistoryInternal extends com.guidewire._generated.entity.HistoryInternal, com.guidewire._generated.entity.ExtractableInternal, gw.ab.history.entity.ContactHistory {
  /**
   * Gets the value of the ABContact field.
   * The related account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the ExternalUpdateApp field.
   * Name of external application remotely updating the associated contact or related entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExternalUpdateApp();
  
  
  /**
   * Gets the value of the ExternalUpdateUser field.
   * Name of external user remotely updating the associated contact or related entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExternalUpdateUser();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ExternalUpdateApp field.
   */
  public void setExternalUpdateApp(java.lang.String value);
  
  
  /**
   * Sets the value of the ExternalUpdateUser field.
   */
  public void setExternalUpdateUser(java.lang.String value);
  
  
  
}