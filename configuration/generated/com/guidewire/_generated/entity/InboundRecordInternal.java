package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundRecord.eti;InboundRecord.eix;InboundRecord.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundRecordInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Adds the given element to the SubRecords array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSubRecords(entity.InboundSubRecord element);
  
  
  /**
   * Gets the value of the Config field.
   * The name of the inbound file config.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConfig();
  
  
  /**
   * Gets the value of the Content field.
   * The content of the record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContent();
  
  
  /**
   * Gets the value of the ErrorMessage field.
   * A message describing any errors that may have occurred when processing this record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getErrorMessage();
  
  
  /**
   * Gets the value of the InboundChunk field.
   * The Inbound Chunk storing this record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundChunk getInboundChunk();
  
  
  public gw.pl.persistence.core.Key getInboundChunkID();
  
  
  /**
   * Gets the value of the InboundFile field.
   * The Inbound File this record belongs to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundFile getInboundFile();
  
  
  public gw.pl.persistence.core.Key getInboundFileID();
  
  
  /**
   * Gets the value of the LineNumber field.
   * The line number of the record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLineNumber();
  
  
  /**
   * Gets the value of the Status field.
   * The status of the record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InboundRecordStatus getStatus();
  
  
  /**
   * Gets the value of the SubRecords field.
   * An array of sub-records for this record, containing additional processing information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundSubRecord[] getSubRecords();
  
  
  /**
   * Removes the given element from the SubRecords array. This is achieved by marking the element for removal.
   */
  public void removeFromSubRecords(entity.InboundSubRecord element);
  
  
  /**
   * Removes the given element from the SubRecords array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSubRecords(gw.pl.persistence.core.Key elementID);
  
  
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
   * Sets the value of the InboundChunk field.
   */
  public void setInboundChunk(entity.InboundChunk value);
  
  
  public void setInboundChunkID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InboundFile field.
   */
  public void setInboundFile(entity.InboundFile value);
  
  
  public void setInboundFileID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LineNumber field.
   */
  public void setLineNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.InboundRecordStatus value);
  
  
  /**
   * Sets the value of the SubRecords field.
   */
  public void setSubRecords(entity.InboundSubRecord[] value);
  
  
  
}