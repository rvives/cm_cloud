package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingContactChange.eti;PendingContactChange.eix;PendingContactChange.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PendingContactChangeInternal extends com.guidewire._generated.entity.ValidatableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.EditableInternal {
  /**
   * Gets the value of the ABContact field.
   * ABContact associated with this change.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the AppRootEntityDisplayName field.
   * The Display Name of the application root entity the contact being updated is referenced by.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAppRootEntityDisplayName();
  
  
  /**
   * Gets the value of the AppRootEntityID field.
   * The ID of the application root entity the contact being updated is referenced by.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAppRootEntityID();
  
  
  /**
   * Gets the value of the AppRootEntityType field.
   * The type of the application root entity the contact being updated is referenced by.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAppRootEntityType();
  
  
  /**
   * Gets the value of the AppUserDisplayName field.
   * The Display Name of the application user who made the update.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAppUserDisplayName();
  
  
  /**
   * Gets the value of the AppUserName field.
   * The username in the application of the user who made the update.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAppUserName();
  
  
  /**
   * Gets the value of the Application field.
   * The application the contact update came from.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApplication();
  
  
  /**
   * Gets the value of the ClientAppPublicID field.
   * Client application's PublicID for the contact being changed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClientAppPublicID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Resolution field.
   * Resolution state of this pending change
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactChangeResolution getResolution();
  
  
  /**
   * Gets the value of the ResolutionReasonText field.
   * Reason, if any, for the resolution
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getResolutionReasonText();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PendingContactChange getSubtype();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AppRootEntityDisplayName field.
   */
  public void setAppRootEntityDisplayName(java.lang.String value);
  
  
  /**
   * Sets the value of the AppRootEntityID field.
   */
  public void setAppRootEntityID(java.lang.String value);
  
  
  /**
   * Sets the value of the AppRootEntityType field.
   */
  public void setAppRootEntityType(java.lang.String value);
  
  
  /**
   * Sets the value of the AppUserDisplayName field.
   */
  public void setAppUserDisplayName(java.lang.String value);
  
  
  /**
   * Sets the value of the AppUserName field.
   */
  public void setAppUserName(java.lang.String value);
  
  
  /**
   * Sets the value of the Application field.
   */
  public void setApplication(java.lang.String value);
  
  
  /**
   * Sets the value of the ClientAppPublicID field.
   */
  public void setClientAppPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Resolution field.
   */
  public void setResolution(typekey.ContactChangeResolution value);
  
  
  /**
   * Sets the value of the ResolutionReasonText field.
   */
  public void setResolutionReasonText(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.PendingContactChange value);
  
  
  
}