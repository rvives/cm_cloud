package entity;

/**
 * EventMigratable
 * A delegate that allows an entity to be synchronized to App Events
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EventMigratable.eti;EventMigratable.eix;EventMigratable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface EventMigratable extends entity.KeyableBean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.EventMigratable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.EventMigratable>("entity.EventMigratable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> APPEVENTSYNCSTATUS_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("AppEventSyncStatus", "AppEventSyncStatus");
  
  /**
   * Gets the value of the AppEventSyncStatus field.
   * Indicates the synchronization status of the entity instance with respect to App Events. A null value means that it is unknown and essentially unsynchronized.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AppEventSyncStatus getAppEventSyncStatus();
  
  
  public typekey.AppEventSyncStatus requestAppEventResync();
  
  
  public typekey.AppEventSyncStatus requestAppEventSync();
  
  
  
}