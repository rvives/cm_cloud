package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Address.eti;Address.eix;Address.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AddressInternal extends com.guidewire._generated.entity.AddressAutofillableInternal, com.guidewire._generated.entity.AddressBookLinkableInternal, com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ValidatableInternal, com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.HistoryEventContainerInternal, com.guidewire._generated.entity.ObfuscatableInternal, com.guidewire.ab.domain.addressbook.impl.ABLinkableInternal, com.guidewire.ab.domain.contact.impl.AddressCoreExtMethods, com.guidewire.pl.domain.contact.AddressPublicMethods, com.guidewire.pl.domain.contact.impl.AddressInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.ab.history.entity.HistoryEventContainer, gw.api.obfuscation.Obfuscator {
  /**
   * Adds the given element to the ABContactAddressArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToABContactAddressArray(entity.ABContactAddress element);
  
  
  /**
   * Adds the given element to the ABContactArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToABContactArray(entity.ABContact element);
  
  
  /**
   * Adds the given element to the History array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHistory(entity.ContactAddressHistory element);
  
  
  /**
   * Gets the value of the ABContact field.
   * The associated ABContact, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  /**
   * Gets the value of the ABContactAddress field.
   * The associated ABContactAddress, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactAddress getABContactAddress();
  
  
  /**
   * Gets the value of the ABContactAddressArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContactAddress[] getABContactAddressArray();
  
  
  public gw.pl.persistence.core.Key getABContactAddressID();
  
  
  /**
   * Gets the value of the ABContactArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact[] getABContactArray();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the AddressType field.
   * Type of this address record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AddressType getAddressType();
  
  
  /**
   * Gets the value of the Description field.
   * Additional description of mailing address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the GeocodeStatus field.
   * Enum giving the status of the latitude and longitude data.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GeocodeStatus getGeocodeStatus();
  
  
  /**
   * Gets the value of the History field.
   * History entries on this address
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContactAddressHistory[] getHistory();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the ReplacingAddressLinkID field.
   * Represents the LinkID of the address that replaced this address in the event of a merge.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReplacingAddressLinkID();
  
  
  /**
   * Gets the value of the SpatialPoint field.
   * Latitude and longitude of this address, represented as an instance of SpatialPoint.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.database.spatial.SpatialPoint getSpatialPoint();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Address getSubtype();
  
  
  /**
   * Gets the value of the ValidUntil field.
   * Latest date that this address is valid.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getValidUntil();
  
  
  /**
   * Gets the value of the BatchGeocode field.
   * Boolean field to mark an address to be geocoded (if needed) by the batch geocoding work queue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBatchGeocode();
  
  
  /**
   * Removes the given element from the ABContactAddressArray array. This is achieved by marking the element for removal.
   */
  public void removeFromABContactAddressArray(entity.ABContactAddress element);
  
  
  /**
   * Removes the given element from the ABContactAddressArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromABContactAddressArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ABContactArray array. This is achieved by marking the element for removal.
   */
  public void removeFromABContactArray(entity.ABContact element);
  
  
  /**
   * Removes the given element from the ABContactArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromABContactArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the History array. This is achieved by marking the element for removal.
   */
  public void removeFromHistory(entity.ContactAddressHistory element);
  
  
  /**
   * Removes the given element from the History array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHistory(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  /**
   * Sets the value of the ABContactAddress field.
   */
  public void setABContactAddress(entity.ABContactAddress value);
  
  
  /**
   * Sets the value of the ABContactAddressArray field.
   */
  public void setABContactAddressArray(entity.ABContactAddress[] value);
  
  
  public void setABContactAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ABContactArray field.
   */
  public void setABContactArray(entity.ABContact[] value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AddressType field.
   */
  public void setAddressType(typekey.AddressType value);
  
  
  /**
   * Sets the value of the BatchGeocode field.
   */
  public void setBatchGeocode(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the GeocodeStatus field.
   */
  public void setGeocodeStatus(typekey.GeocodeStatus value);
  
  
  /**
   * Sets the value of the History field.
   */
  public void setHistory(entity.ContactAddressHistory[] value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the ReplacingAddressLinkID field.
   */
  public void setReplacingAddressLinkID(java.lang.String value);
  
  
  /**
   * Sets the value of the SpatialPoint field.
   */
  public void setSpatialPoint(gw.api.database.spatial.SpatialPoint value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.Address value);
  
  
  /**
   * Sets the value of the ValidUntil field.
   */
  public void setValidUntil(java.util.Date value);
  
  
  
}