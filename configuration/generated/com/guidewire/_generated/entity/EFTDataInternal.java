package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EFTData.eti;EFTData.eix;EFTData.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface EFTDataInternal extends com.guidewire._generated.entity.EFTDataDelegateInternal, com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.RetireableInternal, com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods {
  /**
   * Gets the value of the Contact field.
   * Contact this EFT record relates to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getContact();
  
  
  public gw.pl.persistence.core.Key getContactID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.ABContact value);
  
  
  public void setContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  
}