package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TrackedChange.eti;TrackedChange.eix;TrackedChange.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TrackedChangeInternal extends com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.VersionableInternal, gw.ab.history.entity.TrackedChange {
  /**
   * Gets the value of the DisplayKey field.
   * DisplayKey for Field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDisplayKey();
  
  
  /**
   * Gets the value of the Field field.
   * Field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getField();
  
  
  /**
   * Gets the value of the History field.
   * History
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.History getHistory();
  
  
  public gw.pl.persistence.core.Key getHistoryID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the NewValue field.
   * New value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNewValue();
  
  
  /**
   * Gets the value of the OldValue field.
   * Old value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOldValue();
  
  
  /**
   * Sets the value of the DisplayKey field.
   */
  public void setDisplayKey(java.lang.String value);
  
  
  /**
   * Sets the value of the Field field.
   */
  public void setField(java.lang.String value);
  
  
  /**
   * Sets the value of the History field.
   */
  public void setHistory(entity.History value);
  
  
  public void setHistoryID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the NewValue field.
   */
  public void setNewValue(java.lang.String value);
  
  
  /**
   * Sets the value of the OldValue field.
   */
  public void setOldValue(java.lang.String value);
  
  
  
}