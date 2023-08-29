package typekey;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABResultType.tti;ABResultType.tix;ABResultType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class ABResultType implements gw.entity.TypeKey {
  /**
   * Failure Multiple Different Definitive Matches
   * The link failed because there were multiple definitive matches that were all different.
   */
  @java.lang.Deprecated
  public static final typekey.ABResultType TC_FAILED_MDDM = new typekey.ABResultType("failed_mddm");
  
  /**
   * Failure Not In Sync
   * The save failed because the contact is not in sync with the Address Book.
   */
  @java.lang.Deprecated
  public static final typekey.ABResultType TC_FAILED_NIS = new typekey.ABResultType("failed_nis");
  
  /**
   * Failure No Matches Exist
   * The link failed because no definitive match was found. No potential matches were found either.
   */
  public static final typekey.ABResultType TC_FAILED_NME = new typekey.ABResultType("failed_nme");
  
  /**
   * Failure Public ID Not Found
   * The save failed because no Address Book entry with the given public ID was found.
   */
  @java.lang.Deprecated
  public static final typekey.ABResultType TC_FAILED_PINF = new typekey.ABResultType("failed_pinf");
  
  /**
   * Failure Potential Matches Exist
   * The link failed because no definitive match was found, but potential matches exist.
   */
  public static final typekey.ABResultType TC_FAILED_PME = new typekey.ABResultType("failed_pme");
  
  /**
   * Failure Address Book Exception
   * An exception was thrown by the Address Book
   */
  public static final typekey.ABResultType TC_FAILED_SE = new typekey.ABResultType("failed_se");
  
  /**
   * Failure Unlinked Related Contacts
   * The save failed because the contact has unlinked related contacts.
   */
  @java.lang.Deprecated
  public static final typekey.ABResultType TC_FAILED_URC = new typekey.ABResultType("failed_urc");
  
  /**
   * Failure Validation Errors
   * The save failed becuase there were validation errors.
   */
  @java.lang.Deprecated
  public static final typekey.ABResultType TC_FAILED_VE = new typekey.ABResultType("failed_ve");
  
  /**
   * Success
   * Indicates a successful link with the Address Book.
   */
  public static final typekey.ABResultType TC_SUCCESS = new typekey.ABResultType("success");
  
  /**
   * Success Definitive Match Different
   * Indicates a successful link with the Address Book. However, the definitive match was different.
   */
  @java.lang.Deprecated
  public static final typekey.ABResultType TC_SUCCESS_DMD = new typekey.ABResultType("success_dmd");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.ABResultType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.ABResultType>("ABResultType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private ABResultType(java.lang.String code)  {
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
  public typekey.ABResultType get() {
    return this;
  }
  
  public static typekey.ABResultType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.ABResultType> getAllTypeKeys() {
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
  
  public static typekey.ABResultType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.ABResultType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.ABResultType[]{});
  }
  
  public static java.util.List<typekey.ABResultType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.ABResultType getValue() {
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
    com.guidewire._generated.typekey.ABResultTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.ABResultType>() {
      public void clearCache(typekey.ABResultType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.ABResultType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.ABResultType newInstance(java.lang.String code) {
        return new typekey.ABResultType(code);
      }
      
      
    });
  }
}