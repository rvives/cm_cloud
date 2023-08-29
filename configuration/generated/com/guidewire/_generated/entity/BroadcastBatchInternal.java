package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BroadcastBatch.eti;BroadcastBatch.eix;BroadcastBatch.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BroadcastBatchInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the ClusterId field.
   * Cluster ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClusterId();
  
  
  /**
   * Gets the value of the Messages field.
   * Serialized list of messages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.lang.Blob getMessages();
  
  
  /**
   * Gets the value of the SeqNo field.
   * Sequence ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getSeqNo();
  
  
  /**
   * Gets the value of the ServerId field.
   * Sender's serverID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getServerId();
  
  
  /**
   * Gets the value of the TimeInserted field.
   * Time batch inserted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTimeInserted();
  
  
  /**
   * Sets the value of the ClusterId field.
   */
  public void setClusterId(java.lang.String value);
  
  
  /**
   * Sets the value of the Messages field.
   */
  public void setMessages(gw.lang.Blob value);
  
  
  /**
   * Sets the value of the SeqNo field.
   */
  public void setSeqNo(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ServerId field.
   */
  public void setServerId(java.lang.String value);
  
  
  /**
   * Sets the value of the TimeInserted field.
   */
  public void setTimeInserted(java.util.Date value);
  
  
  
}