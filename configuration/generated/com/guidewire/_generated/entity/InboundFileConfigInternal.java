package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundFileConfig.eti;InboundFileConfig.eix;InboundFileConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundFileConfigInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire.inboundfile.config.InboundFileConfigMethods {
  /**
   * Gets the value of the ChunkSize field.
   * Chunk size for processing records. 0 means that whole file must be processed by one queue)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getChunkSize();
  
  
  /**
   * Gets the value of the DaysTillPurge field.
   * The number of days to wait before purging inbound files. The value for this property should be between 90 and 730 (two years)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDaysTillPurge();
  
  
  /**
   * Gets the value of the FileHandlerClass field.
   * Fully qualified class name of the inbound file handler.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFileHandlerClass();
  
  
  /**
   * Gets the value of the Name field.
   * Name of the inbound file config.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InboundFileConfig getSubtype();
  
  
  /**
   * Sets the value of the ChunkSize field.
   */
  public void setChunkSize(java.lang.Integer value);
  
  
  /**
   * Sets the value of the DaysTillPurge field.
   */
  public void setDaysTillPurge(java.lang.Integer value);
  
  
  /**
   * Sets the value of the FileHandlerClass field.
   */
  public void setFileHandlerClass(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.InboundFileConfig value);
  
  
  
}