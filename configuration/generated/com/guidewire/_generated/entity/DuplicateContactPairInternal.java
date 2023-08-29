package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DuplicateContactPair.eti;DuplicateContactPair.eix;DuplicateContactPair.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DuplicateContactPairInternal extends com.guidewire._generated.entity.VersionableInternal, gw.ab.contact.entity.DuplicateContactPair {
  /**
   * Gets the value of the BatchRun field.
   * The corresponding batch run where this contact was found.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DuplicateContactBatchRun getBatchRun();
  
  
  public gw.pl.persistence.core.Key getBatchRunID();
  
  
  /**
   * Gets the value of the Contact field.
   * The original contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getContact();
  
  
  public gw.pl.persistence.core.Key getContactID();
  
  
  /**
   * Gets the value of the ContactPairCrossPID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactPairCrossPID();
  
  
  /**
   * Gets the value of the DuplicateContact field.
   * The found duplicate contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getDuplicateContact();
  
  
  public gw.pl.persistence.core.Key getDuplicateContactID();
  
  
  /**
   * Gets the value of the DuplicateContactPairCrossPID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDuplicateContactPairCrossPID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Exact field.
   * Flag indicating the found duplicate is an exact match.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExact();
  
  
  /**
   * Sets the value of the BatchRun field.
   */
  public void setBatchRun(entity.DuplicateContactBatchRun value);
  
  
  public void setBatchRunID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.ABContact value);
  
  
  public void setContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ContactPairCrossPID field.
   */
  public void setContactPairCrossPID(java.lang.String value);
  
  
  /**
   * Sets the value of the DuplicateContact field.
   */
  public void setDuplicateContact(entity.ABContact value);
  
  
  public void setDuplicateContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DuplicateContactPairCrossPID field.
   */
  public void setDuplicateContactPairCrossPID(java.lang.String value);
  
  
  /**
   * Sets the value of the Exact field.
   */
  public void setExact(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}