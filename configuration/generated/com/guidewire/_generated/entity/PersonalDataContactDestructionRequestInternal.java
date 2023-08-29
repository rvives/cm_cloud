package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalDataContactDestructionRequest.eti;PersonalDataContactDestructionRequest.eix;PersonalDataContactDestructionRequest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PersonalDataContactDestructionRequestInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire.pl.domain.personaldata.PersonalDataContactDestructionRequestPublicMethods {
  /**
   * Gets the value of the ContactPublicID field.
   * The public ID of the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactPublicID();
  
  
  /**
   * Gets the value of the DestructionDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDestructionDate();
  
  
  /**
   * Gets the value of the PersonalDataDestructionRequest field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalDataDestructionRequest getPersonalDataDestructionRequest();
  
  
  public gw.pl.persistence.core.Key getPersonalDataDestructionRequestID();
  
  
  /**
   * Gets the value of the Status field.
   * The current status of the destruction request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContactDestructionStatus getStatus();
  
  
  /**
   * Sets the value of the ContactPublicID field.
   */
  public void setContactPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the DestructionDate field.
   */
  public void setDestructionDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PersonalDataDestructionRequest field.
   */
  public void setPersonalDataDestructionRequest(entity.PersonalDataDestructionRequest value);
  
  
  public void setPersonalDataDestructionRequestID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ContactDestructionStatus value);
  
  
  
}