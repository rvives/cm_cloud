package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserUIPreferences.eti;UserUIPreferences.eix;UserUIPreferences.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserUIPreferencesInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the UIPreferences field.
   * A JSON field storing this User's UI Preferences
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.lang.Blob getUIPreferences();
  
  
  /**
   * Gets the value of the User field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser();
  
  
  public gw.pl.persistence.core.Key getUserID();
  
  
  /**
   * Sets the value of the UIPreferences field.
   */
  public void setUIPreferences(gw.lang.Blob value);
  
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value);
  
  
  public void setUserID(gw.pl.persistence.core.Key value);
  
  
  
}