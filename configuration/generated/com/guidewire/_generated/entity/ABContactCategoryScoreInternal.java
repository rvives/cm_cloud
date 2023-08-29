package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABContactCategoryScore.eti;ABContactCategoryScore.eix;ABContactCategoryScore.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABContactCategoryScoreInternal extends com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.domain.contact.CommonCategoryScore, gw.ab.addressbook.entity.ABContactCategoryScore {
  /**
   * Gets the value of the ABContact field.
   * Associated ABContact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the ReviewCategory field.
   * Category of this Score.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReviewCategory getReviewCategory();
  
  
  /**
   * Gets the value of the Score field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScore();
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the ReviewCategory field.
   */
  public void setReviewCategory(typekey.ReviewCategory value);
  
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.lang.Integer value);
  
  
  
}