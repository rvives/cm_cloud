package typekey;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CustomHistoryType.tti;CustomHistoryType.tix;CustomHistoryType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class CustomHistoryType implements gw.entity.TypeKey {
  /**
   * Address Added
   * Address Added
   */
  public static final typekey.CustomHistoryType TC_ADDRESSADDED = new typekey.CustomHistoryType("addressadded");
  
  /**
   * Address Removed
   * Address Removed
   */
  public static final typekey.CustomHistoryType TC_ADDRESSREMOVED = new typekey.CustomHistoryType("addressremoved");
  
  /**
   * Address Updated
   * Address Updated
   */
  public static final typekey.CustomHistoryType TC_ADDRESSUPDATED = new typekey.CustomHistoryType("addressupdated");
  
  /**
   * Auto: No fault rating
   * Claim exception: Fault rating no set on auto claim
   */
  @java.lang.Deprecated
  public static final typekey.CustomHistoryType TC_A_N_F_R = new typekey.CustomHistoryType("a_n_f_r");
  
  /**
   * Contact Created
   * Contact Created
   */
  public static final typekey.CustomHistoryType TC_CONTACTCREATED = new typekey.CustomHistoryType("contactcreated");
  
  /**
   * Contact Merged (Kept)
   * Contact Merged (Kept)
   */
  public static final typekey.CustomHistoryType TC_CONTACTMERGEDKEPT = new typekey.CustomHistoryType("contactmergedkept");
  
  /**
   * Contact Merged (Retired)
   * Contact Merged (Retired)
   */
  public static final typekey.CustomHistoryType TC_CONTACTMERGEDRETIRED = new typekey.CustomHistoryType("contactmergedretired");
  
  /**
   * Contact Removed
   * Contact Removed
   */
  public static final typekey.CustomHistoryType TC_CONTACTREMOVED = new typekey.CustomHistoryType("contactremoved");
  
  /**
   * Data change
   * Data change
   */
  @java.lang.Deprecated
  public static final typekey.CustomHistoryType TC_DATACHANGE = new typekey.CustomHistoryType("DataChange");
  
  /**
   * Document Associated
   * A document was associated with the ABContact
   */
  public static final typekey.CustomHistoryType TC_DOCUMENTASSOCIATED = new typekey.CustomHistoryType("documentassociated");
  
  /**
   * Document Disassociated
   * A document was disassociated from the ABContact
   */
  public static final typekey.CustomHistoryType TC_DOCUMENTDISASSOCIATED = new typekey.CustomHistoryType("documentdisassociated");
  
  /**
   * Exported to Mainframe
   * Integration: New claim exported to mainframe
   */
  @java.lang.Deprecated
  public static final typekey.CustomHistoryType TC_EXPORT = new typekey.CustomHistoryType("Export");
  
  /**
   * Exposure with no reserves
   * Claim exception: No reserve set for exposure
   */
  @java.lang.Deprecated
  public static final typekey.CustomHistoryType TC_E_W_N_R = new typekey.CustomHistoryType("e_w_n_r");
  
  /**
   * Name Updated
   * Name Updated
   */
  public static final typekey.CustomHistoryType TC_NAMEUPDATED = new typekey.CustomHistoryType("nameupdated");
  
  /**
   * Pending Change Rejected
   * Pending Change Rejected
   */
  public static final typekey.CustomHistoryType TC_PENDINGCHANGEREJECTED = new typekey.CustomHistoryType("pendingchangerejected");
  
  /**
   * Pending Create Approved
   * Pending Create Approved
   */
  public static final typekey.CustomHistoryType TC_PENDINGCREATEAPPROVED = new typekey.CustomHistoryType("pendingcreateapproved");
  
  /**
   * Phone Number Added
   * Phone Number Added
   */
  public static final typekey.CustomHistoryType TC_PHONEADDED = new typekey.CustomHistoryType("phoneadded");
  
  /**
   * Phone Number Removed
   * Phone Number Removed
   */
  public static final typekey.CustomHistoryType TC_PHONEREMOVED = new typekey.CustomHistoryType("phoneremoved");
  
  /**
   * Phone Number Updated
   * Phone Number Updated
   */
  public static final typekey.CustomHistoryType TC_PHONEUPDATED = new typekey.CustomHistoryType("phoneupdated");
  
  /**
   * Primary Address Added
   * Primary Address Added
   */
  public static final typekey.CustomHistoryType TC_PRIMARYADDRESSADDED = new typekey.CustomHistoryType("primaryaddressadded");
  
  /**
   * Primary Address Changed
   * Primary Address Changed from One Address to Another
   */
  public static final typekey.CustomHistoryType TC_PRIMARYADDRESSCHANGED = new typekey.CustomHistoryType("primaryaddresschanged");
  
  /**
   * Primary Address Removed
   * Primary Address Removed
   */
  public static final typekey.CustomHistoryType TC_PRIMARYADDRESSREMOVED = new typekey.CustomHistoryType("primaryaddressremoved");
  
  /**
   * Primary Address Updated
   * Primary Address Updated
   */
  public static final typekey.CustomHistoryType TC_PRIMARYADDRESSUPDATED = new typekey.CustomHistoryType("primaryaddressupdated");
  
  /**
   * Primary Phone Type Changed
   * Primary Phone Type Changed
   */
  public static final typekey.CustomHistoryType TC_PRIMARYPHONECHANGED = new typekey.CustomHistoryType("primaryphonechanged");
  
  /**
   * Related Contact Added
   * Related Contact Added
   */
  public static final typekey.CustomHistoryType TC_RELATEDCONTACTADDED = new typekey.CustomHistoryType("relatedcontactadded");
  
  /**
   * Related Contact Removed
   * Related Contact Removed
   */
  public static final typekey.CustomHistoryType TC_RELATEDCONTACTREMOVED = new typekey.CustomHistoryType("relatedcontactremoved");
  
  /**
   * Related Contact Updated
   * Related Contact Updated
   */
  public static final typekey.CustomHistoryType TC_RELATEDCONTACTUPDATED = new typekey.CustomHistoryType("relatedcontactupdated");
  
  /**
   * Contact Subtype Changed
   * Contact Subtype Changed
   */
  public static final typekey.CustomHistoryType TC_SUBTYPECHANGED = new typekey.CustomHistoryType("subtypechanged");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.CustomHistoryType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.CustomHistoryType>("CustomHistoryType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private CustomHistoryType(java.lang.String code)  {
    _typeKeyImplManager  =  com.guidewire.commons.typelist.TypeKeyImplManager.newInstance(this, code);
  }
  
  public int compareTo(gw.entity.TypeKey arg0) {
    return _typeKeyImplManager.getTypeKeyImpl().compareTo(arg0);
  }
  
  /**
   * 
   * @deprecated Use this object instead.
   */
  @java.lang.Deprecated
  public typekey.CustomHistoryType get() {
    return this;
  }
  
  public static typekey.CustomHistoryType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.CustomHistoryType> getAllTypeKeys() {
    return TYPE.get().getTypeKeys(true);
  }
  
  /**
   * Returns the list of categories that this key belongs to
   * @return the categories that this key belongs to
   */
  public gw.entity.TypeKey[] getCategories() {
    return _typeKeyImplManager.getTypeKeyImpl().getCategories();
  }
  
  public java.lang.String getCode() {
    return _typeKeyImplManager.getCode();
  }
  
  /**
   * Returns the description for this typekey for the current locale.
   * @return the description for this typekey
   */
  public java.lang.String getDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription();
  }
  
  /**
   * Returns the description of this typekey for the given locale.
   * @param locale the locale to use to get the description
   * @return a description for this typekey for the given locale
   */
  public java.lang.String getDescription(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription(locale);
  }
  
  public java.lang.String getDisplayName() {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName();
  }
  
  /**
   * Returns the name of this typekey for the given locale.
   * @param locale 
   */
  public java.lang.String getDisplayName(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName(locale);
  }
  
  /**
   * Gets the entity type associated with this typekey, if any. Returns null if this is not a subtype typekey.
   */
  public gw.entity.IEntityType getEntityType() {
    return _typeKeyImplManager.getTypeKeyImpl().getEntityType();
  }
  
  /**
   * Returns the owning type for this key.
   * @return 
   */
  public gw.entity.ITypeList getIntrinsicType() {
    return _typeKeyImplManager.getTypeKeyImpl().getIntrinsicType();
  }
  
  /**
   * A string containing the typelist name.
   */
  public java.lang.String getListName() {
    return _typeKeyImplManager.getTypeKeyImpl().getListName();
  }
  
  /**
   * Returns the value of the "name" attribute for this typekey.
   * @return the name of this typekey
   * @deprecated Use {@link #getDisplayName()} or {@link #getUnlocalizedName()} instead, as appropriate.
   */
  @java.lang.Deprecated
  public java.lang.String getName() {
    return _typeKeyImplManager.getTypeKeyImpl().getName();
  }
  
  public int getOrdinal() {
    return _typeKeyImplManager.getTypeKeyImpl().getOrdinal();
  }
  
  /**
   * Returns the priority for this type key
   * @return the priority for this type key
   */
  public int getPriority() {
    return _typeKeyImplManager.getTypeKeyImpl().getPriority();
  }
  
  /**
   * Returns the sort order for this type key in the specified language.
   * @param locale 
   * @return the sort order for this type key
   */
  public int getSortOrder(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getSortOrder(locale);
  }
  
  public static typekey.CustomHistoryType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.CustomHistoryType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.CustomHistoryType[]{});
  }
  
  public static java.util.List<typekey.CustomHistoryType> getTypeKeys(boolean includeRetired) {
    return TYPE.get().getTypeKeys(includeRetired);
  }
  
  /**
   * Returns the (non-localized) description of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDescription()} instead.
   * @return the non-localized description of this typekey
   */
  public java.lang.String getUnlocalizedDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedDescription();
  }
  
  /**
   * Returns the (non-localized) name of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDisplayName()} instead. To get a unique string identifier for this typekey,
   * use {@link #getCode()} instead.
   * @return the non-localized name of this typekey
   */
  public java.lang.String getUnlocalizedName() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedName();
  }
  
  public typekey.CustomHistoryType getValue() {
    return this;
  }
  
  /**
   * Checks to see if this typekey has a category corresponding to the given
   * typekey.  For a match to be found, this typekey has to have a category
   * with the same typelist and code as the given typekey.
   * @param categoryToCheck 
   * @return 
   */
  public boolean hasCategory(gw.entity.TypeKey categoryToCheck) {
    return _typeKeyImplManager.getTypeKeyImpl().hasCategory(categoryToCheck);
  }
  
  /**
   * A boolean that indicates a type code is for internal use by Guidewire software. Internal type codes cannot be
   * removed or modified.
   */
  public boolean isInternal() {
    return _typeKeyImplManager.getTypeKeyImpl().isInternal();
  }
  
  /**
   * Returns true if this type key is retired.  Retired type keys will not show up in the UI.
   * @return true if this type key is retired false if not.
   */
  public boolean isRetired() {
    return _typeKeyImplManager.getTypeKeyImpl().isRetired();
  }
  
  private java.lang.Object readObject(java.io.ObjectInputStream in) throws java.io.InvalidObjectException {
    throw new java.io.InvalidObjectException("Proxy required");
  }
  
  public java.lang.String toString() {
    return getDisplayName();
  }
  
  private java.lang.Object writeReplace() {
    return new com.guidewire.commons.typelist.TypeKeySerializationProxy(this);
  }
  
  static {
    com.guidewire._generated.typekey.CustomHistoryTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.CustomHistoryType>() {
      public void clearCache(typekey.CustomHistoryType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.CustomHistoryType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.CustomHistoryType newInstance(java.lang.String code) {
        return new typekey.CustomHistoryType(code);
      }
      
      
    });
  }
}