package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundFile.eti;OutboundFile.eix;OutboundFile.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundFileInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Gets the value of the BatchID field.
   * A unique batch ID.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBatchID();
  
  
  /**
   * Gets the value of the Config field.
   * The name of the outbound file config.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundFileConfig getConfig();
  
  
  public gw.pl.persistence.core.Key getConfigID();
  
  
  /**
   * Gets the value of the CreateDate field.
   * The date and time that the file was created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateDate();
  
  
  /**
   * Gets the value of the FileName field.
   * The full path name of the file.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFileName();
  
  
  /**
   * Gets the value of the PurgeDate field.
   * The date and time that the file is eligible to be purged.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPurgeDate();
  
  
  /**
   * Sets the value of the BatchID field.
   */
  public void setBatchID(java.lang.String value);
  
  
  /**
   * Sets the value of the Config field.
   */
  public void setConfig(entity.OutboundFileConfig value);
  
  
  public void setConfigID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CreateDate field.
   */
  public void setCreateDate(java.util.Date value);
  
  
  /**
   * Sets the value of the FileName field.
   */
  public void setFileName(java.lang.String value);
  
  
  /**
   * Sets the value of the PurgeDate field.
   */
  public void setPurgeDate(java.util.Date value);
  
  
  
}