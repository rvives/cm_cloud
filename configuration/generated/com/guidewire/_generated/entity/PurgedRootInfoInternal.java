package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PurgedRootInfo.eti;PurgedRootInfo.eix;PurgedRootInfo.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PurgedRootInfoInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PURGEDROOTINFOADDED_EVENT = "PurgedRootInfoAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PURGEDROOTINFOCHANGED_EVENT = "PurgedRootInfoChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PURGEDROOTINFOREMOVED_EVENT = "PurgedRootInfoRemoved";
  
  /**
   * Gets the value of the PurgeDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPurgeDate();
  
  
  /**
   * Gets the value of the PurgeType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PurgeType getPurgeType();
  
  
  /**
   * Gets the value of the PurgedEntityPublicID field.
   * The PublicID of the purged entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPurgedEntityPublicID();
  
  
  /**
   * Gets the value of the PurgedEntityType field.
   * The name of the type of the purged entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPurgedEntityType();
  
  
  /**
   * Sets the value of the PurgeDate field.
   */
  public void setPurgeDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PurgeType field.
   */
  public void setPurgeType(typekey.PurgeType value);
  
  
  /**
   * Sets the value of the PurgedEntityPublicID field.
   */
  public void setPurgedEntityPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the PurgedEntityType field.
   */
  public void setPurgedEntityType(java.lang.String value);
  
  
  
}