package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ReviewSummary.eti;ReviewSummary.eix;ReviewSummary.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ReviewSummaryInternal extends com.guidewire._generated.entity.ABLinkableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.RetireableInternal, gw.ab.addressbook.entity.ReviewSummary {
  /**
   * Adds the given element to the CategoryScores array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCategoryScores(entity.ReviewSummaryCategoryScore element);
  
  
  /**
   * Gets the value of the ABContact field.
   * Associated Contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ABContact getABContact();
  
  
  public gw.pl.persistence.core.Key getABContactID();
  
  
  /**
   * Gets the value of the CategoryScores field.
   * List of categories and their scores, associated with this Review.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ReviewSummaryCategoryScore[] getCategoryScores();
  
  
  /**
   * Gets the value of the ClaimCenterUID field.
   * The PublicID of the Review in ClaimCenter, intended as an cross-reference for informational purposes only.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimCenterUID();
  
  
  /**
   * Gets the value of the ClaimNumber field.
   * Claim Number associated with this review.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimNumber();
  
  
  /**
   * Gets the value of the Comments field.
   * Comments about the review.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getComments();
  
  
  /**
   * Gets the value of the Description field.
   * Description of the accident or loss.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Name field.
   * Short name of this review type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the RelatedTo field.
   * Associated part of a claim for this review type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRelatedTo();
  
  
  /**
   * Gets the value of the ReviewType field.
   * Name of the Review Type associated with this review.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReviewType();
  
  
  /**
   * Gets the value of the ReviewedBy field.
   * User who created the review
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReviewedBy();
  
  
  /**
   * Gets the value of the Score field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScore();
  
  
  /**
   * Gets the value of the ServiceDate field.
   * Date of the service being reviewed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getServiceDate();
  
  
  /**
   * Gets the value of the ServiceType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReviewServiceType getServiceType();
  
  
  /**
   * Gets the value of the Subcontact field.
   * Optionally associated sub-Contact (Service Person or similar).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubcontact();
  
  
  /**
   * Gets the value of the Tallied field.
   * Boolean field to mark a review as included in the total for the contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isTallied();
  
  
  /**
   * Removes the given element from the CategoryScores array. This is achieved by marking the element for removal.
   */
  public void removeFromCategoryScores(entity.ReviewSummaryCategoryScore element);
  
  
  /**
   * Removes the given element from the CategoryScores array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCategoryScores(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ABContact field.
   */
  public void setABContact(entity.ABContact value);
  
  
  public void setABContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CategoryScores field.
   */
  public void setCategoryScores(entity.ReviewSummaryCategoryScore[] value);
  
  
  /**
   * Sets the value of the ClaimCenterUID field.
   */
  public void setClaimCenterUID(java.lang.String value);
  
  
  /**
   * Sets the value of the ClaimNumber field.
   */
  public void setClaimNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Comments field.
   */
  public void setComments(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the RelatedTo field.
   */
  public void setRelatedTo(java.lang.String value);
  
  
  /**
   * Sets the value of the ReviewType field.
   */
  public void setReviewType(java.lang.String value);
  
  
  /**
   * Sets the value of the ReviewedBy field.
   */
  public void setReviewedBy(java.lang.String value);
  
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ServiceDate field.
   */
  public void setServiceDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ServiceType field.
   */
  public void setServiceType(typekey.ReviewServiceType value);
  
  
  /**
   * Sets the value of the Subcontact field.
   */
  public void setSubcontact(java.lang.String value);
  
  
  /**
   * Sets the value of the Tallied field.
   */
  public void setTallied(java.lang.Boolean value);
  
  
  
}