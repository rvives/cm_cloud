package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "History.eti;History.eix;History.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HistoryInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.ab.domain.history.impl.HistoryCoreExtMethods {
  /**
   * Adds the given element to the TrackedChanges array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTrackedChanges(entity.TrackedChange element);
  
  
  /**
   * Gets the value of the CustomType field.
   * Customer-defined history event type. This is used to support rules that execute only once per claim.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CustomHistoryType getCustomType();
  
  
  /**
   * Gets the value of the Description field.
   * Description of the history event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the EventTimestamp field.
   * Timestamp when the event occurred.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEventTimestamp();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the RuleUID field.
   * The unique id of the rule that caused this history event to be created. Optional.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRuleUID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.History getSubtype();
  
  
  /**
   * Gets the value of the TrackedChanges field.
   * Tracked changes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TrackedChange[] getTrackedChanges();
  
  
  /**
   * Gets the value of the Type field.
   * Type of claim or exposure event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HistoryType getType();
  
  
  /**
   * Gets the value of the User field.
   * User who created this history event. Optional.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser();
  
  
  public gw.pl.persistence.core.Key getUserID();
  
  
  /**
   * Removes the given element from the TrackedChanges array. This is achieved by marking the element for removal.
   */
  public void removeFromTrackedChanges(entity.TrackedChange element);
  
  
  /**
   * Removes the given element from the TrackedChanges array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTrackedChanges(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CustomType field.
   */
  public void setCustomType(typekey.CustomHistoryType value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the EventTimestamp field.
   */
  public void setEventTimestamp(java.util.Date value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the RuleUID field.
   */
  public void setRuleUID(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.History value);
  
  
  /**
   * Sets the value of the TrackedChanges field.
   */
  public void setTrackedChanges(entity.TrackedChange[] value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.HistoryType value);
  
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value);
  
  
  public void setUserID(gw.pl.persistence.core.Key value);
  
  
  
}