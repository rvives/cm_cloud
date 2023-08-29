package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundSubRecordView.eti;InboundSubRecordView.eix;InboundSubRecordView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundSubRecordViewInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the Content field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContent();
  
  
  /**
   * Gets the value of the InboundRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundRecord getInboundRecord();
  
  
  public gw.pl.persistence.core.Key getInboundRecordID();
  
  
  /**
   * Gets the value of the InboundSubRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundSubRecord getInboundSubRecord();
  
  
  public gw.pl.persistence.core.Key getInboundSubRecordID();
  
  
  /**
   * Gets the value of the LineNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLineNumber();
  
  
  /**
   * Sets the value of the Content field.
   */
  public void setContent(java.lang.String value);
  
  
  /**
   * Sets the value of the InboundRecord field.
   */
  public void setInboundRecord(entity.InboundRecord value);
  
  
  public void setInboundRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InboundSubRecord field.
   */
  public void setInboundSubRecord(entity.InboundSubRecord value);
  
  
  public void setInboundSubRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LineNumber field.
   */
  public void setLineNumber(java.lang.Integer value);
  
  
  
}