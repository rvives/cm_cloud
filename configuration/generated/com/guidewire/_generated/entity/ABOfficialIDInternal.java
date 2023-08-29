package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABOfficialID.eti;ABOfficialID.eix;ABOfficialID.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABOfficialIDInternal extends com.guidewire._generated.entity.ObfuscatableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.RetireableInternal, com.guidewire.pl.domain.contact.OfficialIDBase, com.guidewire.pl.domain.contact.OfficialIDPublicMethods, gw.api.obfuscation.Obfuscator {
  /**
   * Gets the value of the ABContact field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the OfficialIDType field.
   * The type of this official id.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OfficialIDType getOfficialIDType();
  
  
  /**
   * Gets the value of the OfficialIDValue field.
   * This official id's value, such as a social security number or drivers' license number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOfficialIDValue();
  
  
  /**
   * Gets the value of the State field.
   * Jurisdiction.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ABOfficialID getSubtype();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the OfficialIDType field.
   */
  public void setOfficialIDType(typekey.OfficialIDType value);
  
  
  /**
   * Sets the value of the OfficialIDValue field.
   */
  public void setOfficialIDValue(java.lang.String value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.ABOfficialID value);
  
  
  
}