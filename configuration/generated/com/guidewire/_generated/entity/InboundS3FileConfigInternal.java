package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundS3FileConfig.eti;InboundS3FileConfig.eix;InboundS3FileConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundS3FileConfigInternal extends com.guidewire._generated.entity.InboundFileConfigInternal, com.guidewire.inboundfile.config.InboundFileConfigMethods {
  /**
   * Gets the value of the ArchiveS3Bucket field.
   * Amazon S3 bucket ARN address for archive.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getArchiveS3Bucket();
  
  
  /**
   * Gets the value of the ArchiveS3Prefix field.
   * The full path name inside Amazon S3 bucket.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getArchiveS3Prefix();
  
  
  /**
   * Gets the value of the InputS3Bucket field.
   * Amazon S3 bucket ARN address for input
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInputS3Bucket();
  
  
  /**
   * Gets the value of the InputS3Prefix field.
   * The full path name inside Amazon S3 bucket.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInputS3Prefix();
  
  
  /**
   * Gets the value of the ProfileName field.
   * Amazon S3 user profile for credentials
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProfileName();
  
  
  /**
   * Sets the value of the ArchiveS3Bucket field.
   */
  public void setArchiveS3Bucket(java.lang.String value);
  
  
  /**
   * Sets the value of the ArchiveS3Prefix field.
   */
  public void setArchiveS3Prefix(java.lang.String value);
  
  
  /**
   * Sets the value of the InputS3Bucket field.
   */
  public void setInputS3Bucket(java.lang.String value);
  
  
  /**
   * Sets the value of the InputS3Prefix field.
   */
  public void setInputS3Prefix(java.lang.String value);
  
  
  /**
   * Sets the value of the ProfileName field.
   */
  public void setProfileName(java.lang.String value);
  
  
  
}