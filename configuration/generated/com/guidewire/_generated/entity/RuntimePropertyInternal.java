package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RuntimeProperty.eti;RuntimeProperty.eix;RuntimeProperty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RuntimePropertyInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Gets the value of the Description field.
   * A description for this property
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Name field.
   * The name of this property
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the PropertyGroup field.
   * The group this property belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RuntimePropertyGroup getPropertyGroup();
  
  
  /**
   * Gets the value of the Value field.
   * The value for this property
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValue();
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the PropertyGroup field.
   */
  public void setPropertyGroup(typekey.RuntimePropertyGroup value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}