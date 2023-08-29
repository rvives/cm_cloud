package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundLocalFileConfig.eti;InboundLocalFileConfig.eix;InboundLocalFileConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundLocalFileConfigInternal extends com.guidewire._generated.entity.InboundFileConfigInternal, com.guidewire.inboundfile.config.InboundFileConfigMethods {
  /**
   * Gets the value of the ArchiveDirectory field.
   * The full path name of the archived file.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getArchiveDirectory();
  
  
  /**
   * Gets the value of the InputDirectory field.
   * The full path name of the file that was loaded from the file system.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInputDirectory();
  
  
  /**
   * Sets the value of the ArchiveDirectory field.
   */
  public void setArchiveDirectory(java.lang.String value);
  
  
  /**
   * Sets the value of the InputDirectory field.
   */
  public void setInputDirectory(java.lang.String value);
  
  
  
}