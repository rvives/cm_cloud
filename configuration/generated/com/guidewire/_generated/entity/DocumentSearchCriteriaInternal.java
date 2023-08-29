package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DocumentSearchCriteria.eti;DocumentSearchCriteria.eix;DocumentSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface DocumentSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.domain.document.DocumentSearchCriteriaPublicMethods, com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaInternalMethods, java.io.Serializable {
  /**
   * Adds the given element to the DocumentSecurityTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper element);
  
  
  /**
   * Gets the value of the ABContact field.
   * The ABContact the Document is linked to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the Author field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAuthor();
  
  
  /**
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the DocumentPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentPublicID();
  
  
  /**
   * Gets the value of the DocumentSecurityTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSecurityTypeSearchWrapper[] getDocumentSecurityTypes();
  
  
  /**
   * Gets the value of the Language field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage();
  
  
  /**
   * Gets the value of the NameOrID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameOrID();
  
  
  /**
   * Gets the value of the NotABContact field.
   * The ABContact the Document is not already linked to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getNotABContact();
  
  
  public gw.pl.persistence.core.Key getNotABContactID();
  
  
  /**
   * Gets the value of the Section field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentSection getSection();
  
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentStatusType getStatus();
  
  
  /**
   * Gets the value of the Type field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentType getType();
  
  
  /**
   * Gets the value of the IncludeObsoletes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludeObsoletes();
  
  
  /**
   * Gets the value of the Pending field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPending();
  
  
  /**
   * Removes the given element from the DocumentSecurityTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper element);
  
  
  /**
   * Removes the given element from the DocumentSecurityTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDocumentSecurityTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the DocumentPublicID field.
   */
  public void setDocumentPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the DocumentSecurityTypes field.
   */
  public void setDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper[] value);
  
  
  /**
   * Sets the value of the IncludeObsoletes field.
   */
  public void setIncludeObsoletes(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the NameOrID field.
   */
  public void setNameOrID(java.lang.String value);
  
  
  /**
   * Sets the value of the NotABContact field.
   */
  public void setNotABContact(entity.ABContact value);
  
  
  public void setNotABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Pending field.
   */
  public void setPending(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Section field.
   */
  public void setSection(typekey.DocumentSection value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.DocumentStatusType value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.DocumentType value);
  
  
  
}