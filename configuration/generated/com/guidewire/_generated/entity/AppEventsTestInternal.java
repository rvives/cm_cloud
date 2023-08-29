package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AppEventsTest.eti;AppEventsTest.eix;AppEventsTest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AppEventsTestInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String APPEVENTSTEST_EVENT = "AppEventsTest";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String APPEVENTSTESTADDED_EVENT = "AppEventsTestAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String APPEVENTSTESTCHANGED_EVENT = "AppEventsTestChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String APPEVENTSTESTREMOVED_EVENT = "AppEventsTestRemoved";
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}