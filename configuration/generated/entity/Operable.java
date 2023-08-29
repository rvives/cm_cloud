package entity;

/**
 * Operable
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Operable.eti;Operable.eix;Operable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Operable extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Operable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Operable>("entity.Operable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOTPROCESS_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DoNotProcess", "DoNotProcess");
  
  /**
   * Gets the value of the DoNotProcess field.
   * GDPR requirement to restrict "processing"
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotProcess();
  
  
  /**
   * Sets the value of the DoNotProcess field.
   */
  public void setDoNotProcess(java.lang.Boolean value);
  
  
  
}