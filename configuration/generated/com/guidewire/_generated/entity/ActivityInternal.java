package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Activity.eti;Activity.eix;Activity.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ActivityInternal extends com.guidewire._generated.entity.ValidatableInternal, com.guidewire._generated.entity.AssignableInternal, com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pl.domain.activity.ActivityPublicMethods, com.guidewire.pl.domain.activity.impl.ActivityInternalMethods, com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACTIVITYADDED_EVENT = "ActivityAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACTIVITYCHANGED_EVENT = "ActivityChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACTIVITYREMOVED_EVENT = "ActivityRemoved";
  
  /**
   * Adds the given element to the RelatedactivityArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRelatedactivityArray(entity.Relatedactivity element);
  
  
  /**
   * Gets the value of the ActivityClass field.
   * The class of the activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ActivityClass getActivityClass();
  
  
  /**
   * Gets the value of the ActivityPattern field.
   * Pattern that created this activity. If it was not created from a pattern, then this is null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ActivityPattern getActivityPattern();
  
  
  public gw.pl.persistence.core.Key getActivityPatternID();
  
  
  /**
   * Gets the value of the ApprovalIssue field.
   * Reason approval is needed. This field should only be set for approval activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApprovalIssue();
  
  
  /**
   * Gets the value of the ApprovalRationale field.
   * Rationale for approving/rejecting the activity. This field should only be set for approval activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApprovalRationale();
  
  
  /**
   * Gets the value of the CloseUser field.
   * The user who closed this activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCloseUser();
  
  
  public gw.pl.persistence.core.Key getCloseUserID();
  
  
  /**
   * Gets the value of the Command field.
   * A Gosu command to execute for this activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCommand();
  
  
  /**
   * Gets the value of the Description field.
   * Description of the activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the DocumentTemplate field.
   * The id of an associated document template. The id and language gets passed to IDocumentTemplateSource to retrieve the DocumentTemplateDescriptor. This property should not be used by applications.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentTemplate();
  
  
  /**
   * Gets the value of the EmailTemplate field.
   * The id of an associated email template. The id gets passed to IEmailTemplateSource to retrieve the EmailTemplateDescriptor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmailTemplate();
  
  
  /**
   * Gets the value of the EndDate field.
   * Time the event is scheduled to terminate or null if the activity is not a scheduled event.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndDate();
  
  
  /**
   * Gets the value of the EscalationDate field.
   * When the activity will be escalated if it isn't yet completed; this is null if the activity is never escalated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEscalationDate();
  
  
  /**
   * Gets the value of the LastViewedDate field.
   * When this activity was last viewed by the assignee. If never viewed, this is null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastViewedDate();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the LogicalName field.
   * Logical name of the activity.  Used by the internal workflow engine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLogicalName();
  
  
  /**
   * Gets the value of the Priority field.
   * Priority of the activity with respect to other activities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Priority getPriority();
  
  
  /**
   * Gets the value of the RelatedActivity field.
   * For assignment review activities, points to the activity to be assigned.  Otherwise, this is null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity getRelatedActivity();
  
  
  public gw.pl.persistence.core.Key getRelatedActivityID();
  
  
  /**
   * Gets the value of the RelatedactivityArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Relatedactivity[] getRelatedactivityArray();
  
  
  /**
   * Gets the value of the ShortSubject field.
   * A very brief title for the activity e.g., displayable in a calendar; this is associated with its pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getShortSubject();
  
  
  /**
   * Gets the value of the Status field.
   * Status of the activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ActivityStatus getStatus();
  
  
  /**
   * Gets the value of the Subject field.
   * A brief title for the activity; this is associated with its pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubject();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Activity getSubtype();
  
  
  /**
   * Gets the value of the TargetDate field.
   * If this activity is a task, time by which a person should complete the task; if not completed by this time, the task is considered overdue. If this activity is an event, the time the event is scheduled to start.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTargetDate();
  
  
  /**
   * Gets the value of the Type field.
   * Type of the activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ActivityType getType();
  
  
  /**
   * Gets the value of the ValidationLevel field.
   * Validation level that this object passed (if any) before it was stored.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ValidationLevel getValidationLevel();
  
  
  /**
   * Gets the value of the Workflow field.
   * Optional pointer to the workflow this activity is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Workflow getWorkflow();
  
  
  public gw.pl.persistence.core.Key getWorkflowID();
  
  
  /**
   * Gets the value of the Approved field.
   * Whether the activity is approved. This is null if not relevant or undecided.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isApproved();
  
  
  /**
   * Gets the value of the AutoGenerated field.
   * @deprecated True if the activity was generated automatically; never fully implemented. Instead, customers can create an extension field and set it after creating an activity in a rule to indicate how the activity was created
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAutoGenerated();
  
  
  /**
   * Gets the value of the Escalated field.
   * True if the activity has been escalated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEscalated();
  
  
  /**
   * Gets the value of the ExternallyOwned field.
   * Whether the activity is externally owned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExternallyOwned();
  
  
  /**
   * Gets the value of the Mandatory field.
   * True if the activity must be completed and cannot be skipped.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMandatory();
  
  
  /**
   * Gets the value of the Recurring field.
   * Whether this activity is recurring.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRecurring();
  
  
  /**
   * Removes the given element from the RelatedactivityArray array. This is achieved by marking the element for removal.
   */
  public void removeFromRelatedactivityArray(entity.Relatedactivity element);
  
  
  /**
   * Removes the given element from the RelatedactivityArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRelatedactivityArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ActivityClass field.
   */
  public void setActivityClass(typekey.ActivityClass value);
  
  
  /**
   * Sets the value of the ActivityPattern field.
   */
  public void setActivityPattern(entity.ActivityPattern value);
  
  
  public void setActivityPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ApprovalIssue field.
   */
  public void setApprovalIssue(java.lang.String value);
  
  
  /**
   * Sets the value of the ApprovalRationale field.
   */
  public void setApprovalRationale(java.lang.String value);
  
  
  /**
   * Sets the value of the Approved field.
   */
  public void setApproved(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AutoGenerated field.
   * @deprecated True if the activity was generated automatically; never fully implemented. Instead, customers can create an extension field and set it after creating an activity in a rule to indicate how the activity was created
   */
  @java.lang.Deprecated
  public void setAutoGenerated(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CloseUser field.
   */
  public void setCloseUser(entity.User value);
  
  
  public void setCloseUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Command field.
   */
  public void setCommand(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the DocumentTemplate field.
   */
  public void setDocumentTemplate(java.lang.String value);
  
  
  /**
   * Sets the value of the EmailTemplate field.
   */
  public void setEmailTemplate(java.lang.String value);
  
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Escalated field.
   */
  public void setEscalated(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the EscalationDate field.
   */
  public void setEscalationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ExternallyOwned field.
   */
  public void setExternallyOwned(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LastViewedDate field.
   */
  public void setLastViewedDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the LogicalName field.
   */
  public void setLogicalName(java.lang.String value);
  
  
  /**
   * Sets the value of the Mandatory field.
   */
  public void setMandatory(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Priority field.
   */
  public void setPriority(typekey.Priority value);
  
  
  /**
   * Sets the value of the Recurring field.
   */
  public void setRecurring(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the RelatedActivity field.
   */
  public void setRelatedActivity(entity.Activity value);
  
  
  public void setRelatedActivityID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RelatedactivityArray field.
   */
  public void setRelatedactivityArray(entity.Relatedactivity[] value);
  
  
  /**
   * Sets the value of the ShortSubject field.
   */
  public void setShortSubject(java.lang.String value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ActivityStatus value);
  
  
  /**
   * Sets the value of the Subject field.
   */
  public void setSubject(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.Activity value);
  
  
  /**
   * Sets the value of the TargetDate field.
   */
  public void setTargetDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.ActivityType value);
  
  
  /**
   * Sets the value of the ValidationLevel field.
   */
  public void setValidationLevel(typekey.ValidationLevel value);
  
  
  /**
   * Sets the value of the Workflow field.
   */
  public void setWorkflow(entity.Workflow value);
  
  
  public void setWorkflowID(gw.pl.persistence.core.Key value);
  
  
  
}