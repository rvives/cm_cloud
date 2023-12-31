package entity;

/**
 * AddressBookLinkable
 * 
 *       This delegate indicates that this bean can be linked/synced with an external Address Book as a "child" entity of
 *       an AddressBookConvertable; entities implementing this interface must NOT have their own an AddressBookUID field, as this is now
 *       defined by this delegate.
 *     
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AddressBookLinkable.eti;AddressBookLinkable.eix;AddressBookLinkable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface AddressBookLinkable extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.AddressBookLinkable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.AddressBookLinkable>("entity.AddressBookLinkable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSBOOKUID_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("AddressBookUID", "AddressBookUID");
  
  /**
   * Gets the value of the AddressBookUID field.
   * The system uses this value when it is integrated with ContactManager and the related contact is linked.  In this case, the ID represents the ID of the corresponding entity in ContactManager. This value is null if the object is not linked.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressBookUID();
  
  
  /**
   * Sets the value of the AddressBookUID field.
   */
  public void setAddressBookUID(java.lang.String value);
  
  
  
}