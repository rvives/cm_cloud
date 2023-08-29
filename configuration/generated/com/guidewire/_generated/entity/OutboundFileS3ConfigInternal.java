package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundFileS3Config.eti;OutboundFileS3Config.eix;OutboundFileS3Config.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundFileS3ConfigInternal extends com.guidewire._generated.entity.OutboundFileConfigInternal, com.guidewire.outboundfile.config.OutboundFileConfigMethods {
  /**
   * Gets the value of the DestinationS3Bucket field.
   * Amazon S3 bucket ARN address for permanent destination
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDestinationS3Bucket();
  
  
  /**
   * Gets the value of the DestinationS3Prefix field.
   * The full path name inside Amazon S3 bucket for permanent destination.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDestinationS3Prefix();
  
  
  /**
   * Gets the value of the ProfileName field.
   * Amazon S3 user profile for credentials
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProfileName();
  
  
  /**
   * Sets the value of the DestinationS3Bucket field.
   */
  public void setDestinationS3Bucket(java.lang.String value);
  
  
  /**
   * Sets the value of the DestinationS3Prefix field.
   */
  public void setDestinationS3Prefix(java.lang.String value);
  
  
  /**
   * Sets the value of the ProfileName field.
   */
  public void setProfileName(java.lang.String value);
  
  
  
}