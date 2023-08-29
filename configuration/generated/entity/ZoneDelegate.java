package entity;

/**
 * ZoneDelegate
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ZoneDelegate.eti;ZoneDelegate.eix;ZoneDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface ZoneDelegate extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ZoneDelegate> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ZoneDelegate>("entity.ZoneDelegate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Code", "Code");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CODEDENORM_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CodeDenorm", "CodeDenorm");
  
  /**
   * Gets the value of the Code field.
   * The code for this zone, this is the value that should be used for lookups.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeDenorm();
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  
}