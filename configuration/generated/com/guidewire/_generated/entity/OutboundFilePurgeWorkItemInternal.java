package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundFilePurgeWorkItem.eti;OutboundFilePurgeWorkItem.eix;OutboundFilePurgeWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundFilePurgeWorkItemInternal extends com.guidewire._generated.entity.WorkItemInternal, com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the OutboundFile field.
   * Reference to Outbound File.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundFile getOutboundFile();
  
  
  public gw.pl.persistence.core.Key getOutboundFileID();
  
  
  /**
   * Sets the value of the OutboundFile field.
   */
  public void setOutboundFile(entity.OutboundFile value);
  
  
  public void setOutboundFileID(gw.pl.persistence.core.Key value);
  
  
  
}