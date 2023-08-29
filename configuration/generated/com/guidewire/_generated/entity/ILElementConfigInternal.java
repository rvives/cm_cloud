package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ILElementConfig.eti;ILElementConfig.eix;ILElementConfig.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ILElementConfigInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the Identifier field.
   * Identifier of the Element
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIdentifier();
  
  
  /**
   * Gets the value of the Type field.
   * The type of the Intentional Logging Element
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ILElementType getType();
  
  
  /**
   * Gets the value of the Enabled field.
   * The field indicating if logging elements is enabled or disabled.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEnabled();
  
  
  /**
   * Sets the value of the Enabled field.
   */
  public void setEnabled(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Identifier field.
   */
  public void setIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.ILElementType value);
  
  
  
}