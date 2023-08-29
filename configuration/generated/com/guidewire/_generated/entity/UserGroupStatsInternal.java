package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserGroupStats.eti;UserGroupStats.eix;UserGroupStats.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserGroupStatsInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the CalculateDate field.
   * Date when statistics were calculated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCalculateDate();
  
  
  /**
   * Gets the value of the Group field.
   * The given group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getGroup();
  
  
  public gw.pl.persistence.core.Key getGroupID();
  
  
  /**
   * Gets the value of the User field.
   * The given user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser();
  
  
  public gw.pl.persistence.core.Key getUserID();
  
  
  /**
   * Sets the value of the CalculateDate field.
   */
  public void setCalculateDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Group field.
   */
  public void setGroup(entity.Group value);
  
  
  public void setGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value);
  
  
  public void setUserID(gw.pl.persistence.core.Key value);
  
  
  
}