package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalDataDestructionRequest.eti;PersonalDataDestructionRequest.eix;PersonalDataDestructionRequest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PersonalDataDestructionRequestInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire.pl.domain.personaldata.PersonalDataDestructionRequestPublicMethods {
  /**
   * Adds the given element to the PersonalDataContactDestructionRequests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPersonalDataContactDestructionRequests(entity.PersonalDataContactDestructionRequest element);
  
  
  /**
   * Adds the given element to the PersonalDataDestructionRequesters array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPersonalDataDestructionRequesters(entity.PersonalDataDestructionRequester element);
  
  
  /**
   * Gets the value of the AddressBookUID field.
   * Represents the ID of the associated object in Address Book.  Null if the object is not linked to Address Book.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressBookUID();
  
  
  /**
   * Gets the value of the PersonalDataContactDestructionRequests field.
   * The related contacts to the ABUID, only used in CC
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalDataContactDestructionRequest[] getPersonalDataContactDestructionRequests();
  
  
  /**
   * Gets the value of the PersonalDataDestructionRequesters field.
   * List of requesters for the destruction on a particular contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalDataDestructionRequester[] getPersonalDataDestructionRequesters();
  
  
  /**
   * Gets the value of the RequestersNotified field.
   * all requesters have been notified
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRequestersNotified();
  
  
  /**
   * Removes the given element from the PersonalDataContactDestructionRequests array. This is achieved by marking the element for removal.
   */
  public void removeFromPersonalDataContactDestructionRequests(entity.PersonalDataContactDestructionRequest element);
  
  
  /**
   * Removes the given element from the PersonalDataContactDestructionRequests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPersonalDataContactDestructionRequests(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PersonalDataDestructionRequesters array. This is achieved by marking the element for removal.
   */
  public void removeFromPersonalDataDestructionRequesters(entity.PersonalDataDestructionRequester element);
  
  
  /**
   * Removes the given element from the PersonalDataDestructionRequesters array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPersonalDataDestructionRequesters(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AddressBookUID field.
   */
  public void setAddressBookUID(java.lang.String value);
  
  
  /**
   * Sets the value of the PersonalDataContactDestructionRequests field.
   */
  public void setPersonalDataContactDestructionRequests(entity.PersonalDataContactDestructionRequest[] value);
  
  
  /**
   * Sets the value of the PersonalDataDestructionRequesters field.
   */
  public void setPersonalDataDestructionRequesters(entity.PersonalDataDestructionRequester[] value);
  
  
  /**
   * Sets the value of the RequestersNotified field.
   */
  public void setRequestersNotified(java.lang.Boolean value);
  
  
  
}