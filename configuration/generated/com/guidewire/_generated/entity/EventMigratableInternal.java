package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EventMigratable.eti;EventMigratable.eix;EventMigratable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface EventMigratableInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire.events.domain.migration.EventMigratablePublicMethods, com.guidewire.events.domain.migration.impl.EventMigratableInternalMethods {
  /**
   * Gets the value of the AppEventSyncStatus field.
   * Indicates the synchronization status of the entity instance with respect to App Events. A null value means that it is unknown and essentially unsynchronized.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AppEventSyncStatus getAppEventSyncStatus();
  
  
  /**
   * Sets the value of the AppEventSyncStatus field.
   */
  public void setAppEventSyncStatus(typekey.AppEventSyncStatus value);
  
  
  
}