package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundFile.eti;InboundFile.eix;InboundFile.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundFileInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire.inboundfile.file.InboundFileMethods {
  /**
   * Gets the value of the ArchiveLocation field.
   * The full path name of the archived file.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getArchiveLocation();
  
  
  /**
   * Gets the value of the Checksum field.
   * The checksum of the file (used for duplicate detection).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChecksum();
  
  
  /**
   * Gets the value of the Config field.
   * The name of the inbound file config.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConfig();
  
  
  /**
   * Gets the value of the ErrorMessage field.
   * A message describing any errors that may have occurred when loading the file.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getErrorMessage();
  
  
  /**
   * Gets the value of the InputLocation field.
   * The full path name of the file that was loaded from the file system.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInputLocation();
  
  
  /**
   * Gets the value of the LoadDate field.
   * The date and time that the file was loaded.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLoadDate();
  
  
  /**
   * Gets the value of the PurgeDate field.
   * The date and time that the file is eligible to be purged.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPurgeDate();
  
  
  /**
   * Gets the value of the Status field.
   * The status of the inbound file.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InboundFileStatus getStatus();
  
  
  /**
   * Sets the value of the ArchiveLocation field.
   */
  public void setArchiveLocation(java.lang.String value);
  
  
  /**
   * Sets the value of the Checksum field.
   */
  public void setChecksum(java.lang.String value);
  
  
  /**
   * Sets the value of the Config field.
   */
  public void setConfig(java.lang.String value);
  
  
  /**
   * Sets the value of the ErrorMessage field.
   */
  public void setErrorMessage(java.lang.String value);
  
  
  /**
   * Sets the value of the InputLocation field.
   */
  public void setInputLocation(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadDate field.
   */
  public void setLoadDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PurgeDate field.
   */
  public void setPurgeDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.InboundFileStatus value);
  
  
  
}