package entity;

/**
 * ABLinkable
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABLinkable.eti;ABLinkable.eix;ABLinkable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface ABLinkable extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ABLinkable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ABLinkable>("entity.ABLinkable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LINKID_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("LinkID", "LinkID");
  
  public void beforeInsert();
  
  
  /**
   * Return the external public ID
   */
  public java.lang.String getExternal_PublicID();
  
  
  /**
   * Return the external unique ID
   */
  public java.lang.String getExternal_UniqueID();
  
  
  /**
   * Gets the value of the LinkID field.
   * Represents the ID used by client applications to link with the Address Book.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLinkID();
  
  
  /**
   * Set the external public ID
   * @param value 
   */
  public void setExternal_PublicID(java.lang.String value);
  
  
  /**
   * Set the external unique ID
   * @param value 
   */
  public void setExternal_UniqueID(java.lang.String value);
  
  
  /**
   * Sets the value of the LinkID field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setLinkID(java.lang.String value);
  
  
  
}