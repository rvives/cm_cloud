package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ReviewSummaryCategoryScore.eti;ReviewSummaryCategoryScore.eix;ReviewSummaryCategoryScore.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ReviewSummaryCategoryScoreInternal extends com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.VersionableInternal, com.guidewire.pl.domain.contact.CommonCategoryScore, gw.ab.addressbook.entity.ReviewSummaryCategoryScore {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the ReviewCategory field.
   * Category of this QuestionSet.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReviewCategory getReviewCategory();
  
  
  /**
   * Gets the value of the ReviewSummary field.
   * Associated Review.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ReviewSummary getReviewSummary();
  
  
  public gw.pl.persistence.core.Key getReviewSummaryID();
  
  
  /**
   * Gets the value of the Score field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScore();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the ReviewCategory field.
   */
  public void setReviewCategory(typekey.ReviewCategory value);
  
  
  /**
   * Sets the value of the ReviewSummary field.
   */
  public void setReviewSummary(entity.ReviewSummary value);
  
  
  public void setReviewSummaryID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.lang.Integer value);
  
  
  
}