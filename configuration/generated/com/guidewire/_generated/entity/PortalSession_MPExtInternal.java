package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PortalSession_MPExt.eti;PortalSession_MPExt.eix;PortalSession_MPExt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PortalSession_MPExtInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the foreignId field.
   * The identifying number of the entity this session is for, this will normally be PublicID but is not required to be
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getforeignId();
  
  
  /**
   * Gets the value of the issueDate field.
   * The date on which this session is issued.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getissueDate();
  
  
  /**
   * Gets the value of the sessionType field.
   * The type of entity this session is for
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getsessionType();
  
  
  /**
   * Gets the value of the sessionUUID field.
   * Session UUID for a particular entity type + key + user
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getsessionUUID();
  
  
  /**
   * Gets the value of the username field.
   * The username of the portal user this session is issued for.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getusername();
  
  
  /**
   * Sets the value of the foreignId field.
   */
  public void setforeignId(java.lang.String value);
  
  
  /**
   * Sets the value of the issueDate field.
   */
  public void setissueDate(java.util.Date value);
  
  
  /**
   * Sets the value of the sessionType field.
   */
  public void setsessionType(java.lang.String value);
  
  
  /**
   * Sets the value of the sessionUUID field.
   */
  public void setsessionUUID(java.lang.String value);
  
  
  /**
   * Sets the value of the username field.
   */
  public void setusername(java.lang.String value);
  
  
  
}