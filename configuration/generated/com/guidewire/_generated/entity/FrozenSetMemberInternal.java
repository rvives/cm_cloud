package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FrozenSetMember.eti;FrozenSetMember.eix;FrozenSetMember.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FrozenSetMemberInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods {
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet();
  
  
  public gw.pl.persistence.core.Key getFrozenSetID();
  
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value);
  
  
  public void setFrozenSetID(gw.pl.persistence.core.Key value);
  
  
  
}