package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Note.eti;Note.eix;Note.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NoteInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pl.domain.note.NotePublicMethods, com.guidewire.pl.domain.note.impl.NoteInternalMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String NOTEADDED_EVENT = "NoteAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String NOTECHANGED_EVENT = "NoteChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String NOTEREMOVED_EVENT = "NoteRemoved";
  
  /**
   * Gets the value of the Activity field.
   * The activity associated with the note.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity getActivity();
  
  
  public gw.pl.persistence.core.Key getActivityID();
  
  
  /**
   * Gets the value of the Author field.
   * User who wrote the note.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAuthor();
  
  
  public gw.pl.persistence.core.Key getAuthorID();
  
  
  /**
   * Gets the value of the AuthoringDate field.
   * Date on which the note was originally authored.  If null, the CreateTime seves this purpose.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAuthoringDate();
  
  
  /**
   * Gets the value of the Body field.
   * Body of the note.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBody();
  
  
  /**
   * Gets the value of the Language field.
   * The language in which this note is created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the SecurityType field.
   * Type of note; used for access-restriction purposes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteSecurityType getSecurityType();
  
  
  /**
   * Gets the value of the Subject field.
   * Subject or summary of the note.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubject();
  
  
  /**
   * Gets the value of the Topic field.
   * Topic to which the note belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteTopicType getTopic();
  
  
  /**
   * Gets the value of the Confidential field.
   * Whether the note is confidential.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isConfidential();
  
  
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
   * Sets the value of the AuthoringDate field.
   */
  public void setAuthoringDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Body field.
   */
  public void setBody(java.lang.String value);
  
  
  /**
   * Sets the value of the Confidential field.
   */
  public void setConfidential(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the SecurityType field.
   */
  public void setSecurityType(typekey.NoteSecurityType value);
  
  
  /**
   * Sets the value of the Subject field.
   */
  public void setSubject(java.lang.String value);
  
  
  /**
   * Sets the value of the Topic field.
   */
  public void setTopic(typekey.NoteTopicType value);
  
  
  
}