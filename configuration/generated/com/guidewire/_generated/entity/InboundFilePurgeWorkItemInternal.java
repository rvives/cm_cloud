package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundFilePurgeWorkItem.eti;InboundFilePurgeWorkItem.eix;InboundFilePurgeWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundFilePurgeWorkItemInternal extends com.guidewire._generated.entity.WorkItemInternal, com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the InboundFile field.
   * Reference to Inbound File.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundFile getInboundFile();
  
  
  public gw.pl.persistence.core.Key getInboundFileID();
  
  
  /**
   * Sets the value of the InboundFile field.
   */
  public void setInboundFile(entity.InboundFile value);
  
  
  public void setInboundFileID(gw.pl.persistence.core.Key value);
  
  
  
}