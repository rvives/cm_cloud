package entity;

/**
 * FlexistoreReference
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FlexistoreReference.eti;FlexistoreReference.eix;FlexistoreReference.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface FlexistoreReference extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.FlexistoreReference> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.FlexistoreReference>("entity.FlexistoreReference");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DOCUMENTID_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DocumentID", "DocumentID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POOLID_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PoolID", "PoolID");
  
  /**
   * Gets the value of the DocumentID field.
   * The ID of the Flexistore document.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentID();
  
  
  /**
   * Gets the value of the PoolID field.
   * The ID of the Flexistore pool.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPoolID();
  
  
  /**
   * Sets the value of the DocumentID field.
   */
  public void setDocumentID(java.lang.String value);
  
  
  /**
   * Sets the value of the PoolID field.
   */
  public void setPoolID(java.lang.String value);
  
  
  
}