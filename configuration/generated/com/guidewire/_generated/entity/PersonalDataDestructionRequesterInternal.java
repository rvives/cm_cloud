package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalDataDestructionRequester.eti;PersonalDataDestructionRequester.eix;PersonalDataDestructionRequester.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PersonalDataDestructionRequesterInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire.pl.domain.personaldata.PersonalDataDestructionRequesterPublicMethods {
  /**
   * Gets the value of the PersonalDataDestructionRequest field.
   * Personal data destruction request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalDataDestructionRequest getPersonalDataDestructionRequest();
  
  
  public gw.pl.persistence.core.Key getPersonalDataDestructionRequestID();
  
  
  /**
   * Gets the value of the RequesterID field.
   * The id of the person/company making the request to destroy personal data.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRequesterID();
  
  
  /**
   * Sets the value of the PersonalDataDestructionRequest field.
   */
  public void setPersonalDataDestructionRequest(entity.PersonalDataDestructionRequest value);
  
  
  public void setPersonalDataDestructionRequestID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RequesterID field.
   */
  public void setRequesterID(java.lang.String value);
  
  
  
}