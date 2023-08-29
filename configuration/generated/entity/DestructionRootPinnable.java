package entity;

/**
 * DestructionRootPinnable
 * This delegate is currently only attached to purge roots. At some later date we may want to allow for
 *     Pinnable-s that are not also purge roots.
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DestructionRootPinnable.eti;DestructionRootPinnable.eix;DestructionRootPinnable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface DestructionRootPinnable extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.DestructionRootPinnable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.DestructionRootPinnable>("entity.DestructionRootPinnable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOTDESTROY_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DoNotDestroy", "DoNotDestroy");
  
  /**
   * Gets the value of the DoNotDestroy field.
   * If set then the entity should not be destroyed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotDestroy();
  
  
  
}