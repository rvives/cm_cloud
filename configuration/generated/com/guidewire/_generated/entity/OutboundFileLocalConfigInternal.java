package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundFileLocalConfig.eti;OutboundFileLocalConfig.eix;OutboundFileLocalConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundFileLocalConfigInternal extends com.guidewire._generated.entity.OutboundFileConfigInternal, com.guidewire.outboundfile.config.OutboundFileConfigMethods {
  /**
   * Gets the value of the PermanentDirectory field.
   * Valid file path to the permanent directory.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPermanentDirectory();
  
  
  /**
   * Sets the value of the PermanentDirectory field.
   */
  public void setPermanentDirectory(java.lang.String value);
  
  
  
}