package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EventDataStorage.eti;EventDataStorage.eix;EventDataStorage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface EventDataStorageInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the EventData field.
   * The data to be stored for the event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEventData();
  
  
  /**
   * Gets the value of the EventId field.
   * The identifier of the event with which this data is associated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEventId();
  
  
  /**
   * Sets the value of the EventData field.
   */
  public void setEventData(java.lang.String value);
  
  
  /**
   * Sets the value of the EventId field.
   */
  public void setEventId(java.lang.String value);
  
  
  
}