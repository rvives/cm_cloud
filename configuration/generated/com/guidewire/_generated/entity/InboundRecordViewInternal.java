package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundRecordView.eti;InboundRecordView.eix;InboundRecordView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundRecordViewInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the Config field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConfig();
  
  
  /**
   * Gets the value of the Content field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContent();
  
  
  /**
   * Gets the value of the ErrorMessage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getErrorMessage();
  
  
  /**
   * Gets the value of the InboundFile field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundFile getInboundFile();
  
  
  public gw.pl.persistence.core.Key getInboundFileID();
  
  
  /**
   * Gets the value of the InboundRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundRecord getInboundRecord();
  
  
  public gw.pl.persistence.core.Key getInboundRecordID();
  
  
  /**
   * Gets the value of the LineNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLineNumber();
  
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InboundRecordStatus getStatus();
  
  
  /**
   * Gets the value of the UpdateTime field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime();
  
  
  /**
   * Gets the value of the UpdateUser field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUpdateUser();
  
  
  /**
   * Sets the value of the Config field.
   */
  public void setConfig(java.lang.String value);
  
  
  /**
   * Sets the value of the Content field.
   */
  public void setContent(java.lang.String value);
  
  
  /**
   * Sets the value of the ErrorMessage field.
   */
  public void setErrorMessage(java.lang.String value);
  
  
  /**
   * Sets the value of the InboundFile field.
   */
  public void setInboundFile(entity.InboundFile value);
  
  
  public void setInboundFileID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InboundRecord field.
   */
  public void setInboundRecord(entity.InboundRecord value);
  
  
  public void setInboundRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LineNumber field.
   */
  public void setLineNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.InboundRecordStatus value);
  
  
  /**
   * Sets the value of the UpdateTime field.
   */
  public void setUpdateTime(java.util.Date value);
  
  
  /**
   * Sets the value of the UpdateUser field.
   */
  public void setUpdateUser(java.lang.String value);
  
  
  
}