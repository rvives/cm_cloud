package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactScoringWorkItem.eti;ABContactScoringWorkItem.eix;ABContactScoringWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactScoringWorkItemInternal extends com.guidewire._generated.entity.WorkItemInternal, com.guidewire._generated.entity.KeyableBeanInternal, gw.ab.addressbook.entity.ABContactScoringWorkItem {
  /**
   * Gets the value of the ABContact field.
   * ABContact to be scored.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  
}