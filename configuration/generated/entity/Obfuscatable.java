package entity;

/**
 * Obfuscatable
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Obfuscatable.eti;Obfuscatable.eix;Obfuscatable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Obfuscatable extends entity.KeyableBean, gw.api.obfuscation.ObfuscatablePublicMethods, gw.api.obfuscation.Obfuscator {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Obfuscatable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Obfuscatable>("entity.Obfuscatable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OBFUSCATEDINTERNAL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ObfuscatedInternal", "ObfuscatedInternal");
  
  /**
   * Gets the value of the ObfuscatedInternal field.
   * Flag to let us know if the bean has been obfuscated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isObfuscatedInternal();
  
  
  
}