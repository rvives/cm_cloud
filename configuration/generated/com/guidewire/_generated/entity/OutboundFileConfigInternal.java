package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundFileConfig.eti;OutboundFileConfig.eix;OutboundFileConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundFileConfigInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire.outboundfile.config.OutboundFileConfigMethods {
  /**
   * Gets the value of the DaysTillPurge field.
   * The number of days to wait before purging outbound files.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDaysTillPurge();
  
  
  /**
   * Gets the value of the Extension field.
   * Extension for the output file.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExtension();
  
  
  /**
   * Gets the value of the FileHandlerClass field.
   * Fully qualified class name of the outbound file handler.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFileHandlerClass();
  
  
  /**
   * Gets the value of the Name field.
   * Name of the outbound file handler source.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Prefix field.
   * Prefix used for the batch identifier and the output file name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrefix();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OutboundFileConfig getSubtype();
  
  
  /**
   * Gets the value of the TemporaryDirectory field.
   * Valid file path to the temporary directory.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTemporaryDirectory();
  
  
  /**
   * Sets the value of the DaysTillPurge field.
   */
  public void setDaysTillPurge(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Extension field.
   */
  public void setExtension(java.lang.String value);
  
  
  /**
   * Sets the value of the FileHandlerClass field.
   */
  public void setFileHandlerClass(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Prefix field.
   */
  public void setPrefix(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.OutboundFileConfig value);
  
  
  /**
   * Sets the value of the TemporaryDirectory field.
   */
  public void setTemporaryDirectory(java.lang.String value);
  
  
  
}