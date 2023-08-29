package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundFileView.eti;InboundFileView.eix;InboundFileView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundFileViewInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the ArchiveLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getArchiveLocation();
  
  
  /**
   * Gets the value of the Checksum field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChecksum();
  
  
  /**
   * Gets the value of the Config field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConfig();
  
  
  /**
   * Gets the value of the ErrorMessage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getErrorMessage();
  
  
  /**
   * Gets the value of the InboundFile field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundFile getInboundFile();
  
  
  public gw.pl.persistence.core.Key getInboundFileID();
  
  
  /**
   * Gets the value of the InputLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInputLocation();
  
  
  /**
   * Gets the value of the LoadDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLoadDate();
  
  
  /**
   * Gets the value of the PurgeDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPurgeDate();
  
  
  /**
   * Gets the value of the Status field.
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
   * Sets the value of the InboundFile field.
   */
  public void setInboundFile(entity.InboundFile value);
  
  
  public void setInboundFileID(gw.pl.persistence.core.Key value);
  
  
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