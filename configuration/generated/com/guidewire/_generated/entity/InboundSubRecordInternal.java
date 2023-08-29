package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundSubRecord.eti;InboundSubRecord.eix;InboundSubRecord.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundSubRecordInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Gets the value of the Content field.
   * The content of the sub-record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContent();
  
  
  /**
   * Gets the value of the InboundRecord field.
   * The Inbound Record this sub-record is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundRecord getInboundRecord();
  
  
  public gw.pl.persistence.core.Key getInboundRecordID();
  
  
  /**
   * Gets the value of the LineNumber field.
   * The line number of the sub-record.
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
   * Sets the value of the LineNumber field.
   */
  public void setLineNumber(java.lang.Integer value);
  
  
  
}