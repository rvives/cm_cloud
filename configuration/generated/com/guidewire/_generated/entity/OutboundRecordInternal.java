package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundRecord.eti;OutboundRecord.eix;OutboundRecord.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundRecordInternal extends com.guidewire._generated.entity.EditableInternal {
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
   * Gets the value of the Content field.
   * The content of the record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContent();
  
  
  /**
   * Gets the value of the CreateDate field.
   * The date and time that the record was created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateDate();
  
  
  /**
   * Gets the value of the ErrorMessage field.
   * A message describing any errors that may have occurred when processing this record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getErrorMessage();
  
  
  /**
   * Gets the value of the OutboundFile field.
   * The Outbound File this record was processed with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundFile getOutboundFile();
  
  
  public gw.pl.persistence.core.Key getOutboundFileID();
  
  
  /**
   * Gets the value of the PurgeDate field.
   * Date eligible to be purged, used by skipped records
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPurgeDate();
  
  
  /**
   * Gets the value of the Status field.
   * The status of the record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OutboundRecordStatus getStatus();
  
  
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
   * Sets the value of the Content field.
   */
  public void setContent(java.lang.String value);
  
  
  /**
   * Sets the value of the CreateDate field.
   */
  public void setCreateDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ErrorMessage field.
   */
  public void setErrorMessage(java.lang.String value);
  
  
  /**
   * Sets the value of the OutboundFile field.
   */
  public void setOutboundFile(entity.OutboundFile value);
  
  
  public void setOutboundFileID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PurgeDate field.
   */
  public void setPurgeDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.OutboundRecordStatus value);
  
  
  
}