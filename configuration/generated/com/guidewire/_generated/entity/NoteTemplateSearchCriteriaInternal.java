package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NoteTemplateSearchCriteria.eti;NoteTemplateSearchCriteria.eix;NoteTemplateSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NoteTemplateSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, java.io.Serializable {
  /**
   * Gets the value of the AvailableSymbols field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAvailableSymbols();
  
  
  /**
   * Gets the value of the Keywords field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKeywords();
  
  
  /**
   * Gets the value of the Language field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage();
  
  
  /**
   * Gets the value of the Topic field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteTopicType getTopic();
  
  
  /**
   * Gets the value of the Type field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteType getType();
  
  
  /**
   * Sets the value of the AvailableSymbols field.
   */
  public void setAvailableSymbols(java.lang.String value);
  
  
  /**
   * Sets the value of the Keywords field.
   */
  public void setKeywords(java.lang.String value);
  
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the Topic field.
   */
  public void setTopic(typekey.NoteTopicType value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.NoteType value);
  
  
  
}