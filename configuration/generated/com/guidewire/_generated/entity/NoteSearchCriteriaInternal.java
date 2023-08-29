package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NoteSearchCriteria.eti;NoteSearchCriteria.eix;NoteSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NoteSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, java.io.Serializable {
  /**
   * Gets the value of the Activity field.
   * Activity note is assigned to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity getActivity();
  
  
  public gw.pl.persistence.core.Key getActivityID();
  
  
  /**
   * Gets the value of the Author field.
   * Note author
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAuthor();
  
  
  public gw.pl.persistence.core.Key getAuthorID();
  
  
  /**
   * Gets the value of the Language field.
   * Language search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage();
  
  
  /**
   * Gets the value of the SortBy field.
   * Options to sort the list of notes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SortByRange getSortBy();
  
  
  /**
   * Gets the value of the Text field.
   * Text search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getText();
  
  
  /**
   * Gets the value of the Topic field.
   * Topic search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteTopicType getTopic();
  
  
  /**
   * Sets the value of the Activity field.
   */
  public void setActivity(entity.Activity value);
  
  
  public void setActivityID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(entity.User value);
  
  
  public void setAuthorID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the SortBy field.
   */
  public void setSortBy(typekey.SortByRange value);
  
  
  /**
   * Sets the value of the Text field.
   */
  public void setText(java.lang.String value);
  
  
  /**
   * Sets the value of the Topic field.
   */
  public void setTopic(typekey.NoteTopicType value);
  
  
  
}