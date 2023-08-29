package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundChunk.eti;InboundChunk.eix;InboundChunk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundChunkInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Adds the given element to the InboundRecords array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInboundRecords(entity.InboundRecord element);
  
  
  /**
   * Gets the value of the InboundRecords field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundRecord[] getInboundRecords();
  
  
  /**
   * Gets the value of the Status field.
   * The status of Inbound Chunk
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InboundChunkStatus getStatus();
  
  
  /**
   * Removes the given element from the InboundRecords array. This is achieved by marking the element for removal.
   */
  public void removeFromInboundRecords(entity.InboundRecord element);
  
  
  /**
   * Removes the given element from the InboundRecords array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInboundRecords(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the InboundRecords field.
   */
  public void setInboundRecords(entity.InboundRecord[] value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.InboundChunkStatus value);
  
  
  
}