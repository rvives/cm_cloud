package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MergedContactPair.eti;MergedContactPair.eix;MergedContactPair.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MergedContactPairInternal extends com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.VersionableInternal, gw.ab.addressbook.entity.MergedContactPair {
  /**
   * Gets the value of the KeptContact field.
   * The contact kept during a merge.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getKeptContact();
  
  
  public gw.pl.persistence.core.Key getKeptContactID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the RetiredContact field.
   * The contact retired during a merge.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getRetiredContact();
  
  
  public gw.pl.persistence.core.Key getRetiredContactID();
  
  
  /**
   * Sets the value of the KeptContact field.
   */
  public void setKeptContact(entity.ABContact value);
  
  
  public void setKeptContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the RetiredContact field.
   */
  public void setRetiredContact(entity.ABContact value);
  
  
  public void setRetiredContactID(gw.pl.persistence.core.Key value);
  
  
  
}