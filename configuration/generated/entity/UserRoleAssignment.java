package entity;

/**
 * UserRoleAssignment
 * User role assignment.
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserRoleAssignment.eti;UserRoleAssignment.eix;UserRoleAssignment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "UserRoleAssignment")
public class UserRoleAssignment extends com.guidewire.pl.persistence.code.BeanBase implements entity.UserRoleAssignmentDelegate, entity.Retireable, entity.EventAware {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.UserRoleAssignment> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.UserRoleAssignment>("entity.UserRoleAssignment");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Active");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ASSIGNEDBYUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AssignedByUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ASSIGNEDGROUP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AssignedGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ASSIGNEDQUEUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AssignedQueue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ASSIGNEDUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AssignedUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ASSIGNMENTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AssignmentDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ASSIGNMENTSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AssignmentStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLOSEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CloseDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMENTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Comments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PREVIOUSGROUP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PreviousGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PREVIOUSQUEUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PreviousQueue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PREVIOUSUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PreviousUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ROLE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Role");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.UserRoleAssignmentInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final java.lang.String ASSIGNMENTADDED_EVENT = com.guidewire.pl.domain.assignment.AssignablePublicMethods.ASSIGNMENTADDED_EVENT;
  
  public static final java.lang.String ASSIGNMENTCHANGED_EVENT = com.guidewire.pl.domain.assignment.AssignablePublicMethods.ASSIGNMENTCHANGED_EVENT;
  
  public static final java.lang.String ASSIGNMENTREMOVED_EVENT = com.guidewire.pl.domain.assignment.AssignablePublicMethods.ASSIGNMENTREMOVED_EVENT;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.api.domain.PublicCoreFinder<entity.KeyableBean> coreFinder = com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods.coreFinder;
  
  public static final java.lang.String USERROLEASSIGNMENTADDED_EVENT = "UserRoleAssignmentAdded";
  
  public static final java.lang.String USERROLEASSIGNMENTCHANGED_EVENT = "UserRoleAssignmentChanged";
  
  public static final java.lang.String USERROLEASSIGNMENTREMOVED_EVENT = "UserRoleAssignmentRemoved";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public UserRoleAssignment()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public UserRoleAssignment(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected UserRoleAssignment(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.UserRoleAssignmentInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.UserRoleAssignmentInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * Directly assigns the entity to the specified group and user by setting the assignedGroup and assignedUser fields.
   * If user or group is null returns false and nothing is done.
   * @param group The group to which the entity should be assigned
   * @param user The user to which the entity should be assigned
   * @return true if the assignment is successful
   */
  public boolean assign(entity.Group group, entity.User user) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assign(group, user);
  }
  
  /**
   * <p>
   * Invokes the Assignment Engine to assign the item to the specified group and user.  If userID is null,
   * the item will be assigned using the group's assignment rules.  If
   * userID is specified, assignment will be made directly to the group and
   * user.  If the engine cannot assign the item to the requested group/user,
   * it will throw an exception indicating the reason.
   * </p>
   * If a user is specified, caller is responsible for ensuring that the
   * user is a member of group.
   * </p>
   * Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
   * @param groupID The group to which the item should be assigned - must be
   *                specified.  If not known, use autoAssign(item) instead.
   * @param userID The user to which the item should be assigned; if null an
   *                appropriate user will be selected by group assignment rules.
   * @throws com.guidewire.pl.system.exception.IllegalAssignmentException if the user does not have permission
   * @throws com.guidewire.pl.system.exception.NoAssignmentFoundException if assignment could not be made
   * @deprecated Use autoAssign(Group, User) instead. Note that that method returns a boolean instead of throwing exceptions
   */
  public void assign(gw.pl.persistence.core.Key groupID, gw.pl.persistence.core.Key userID) throws com.guidewire.pl.system.exception.NoAssignmentFoundException, com.guidewire.pl.system.exception.IllegalAssignmentException {
    ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assign(groupID, userID);
  }
  
  /**
   * Assign the entity, which must be an Activity to the specified queue. (Currently, only Activities may be assigned
   * to Queues.) The current group is not a parameter - it is derived from the current
   * Assignment Engine state. As a result, this method may only be invoked from within an Assignment Rule.
   * <p/>
   * If there is no current group, nothing is done and a warning is logged. The queue must belong to the current group
   * or nothing is done.  Returns false if the assignable bean is not an activity.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param queue Queue to assign the activity to
   * @return true if the assignment is successful, false otherwise
   * @deprecated use assignActivityToQueue(AssignableQueue, Group) instead, since that method is more widely valid and
   *             is easier to understand because the group is explicit rather than implicit.
   */
  public boolean assignActivityToQueue(entity.AssignableQueue queue) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignActivityToQueue(queue);
  }
  
  /**
   * Assign this entity, which must be an Activity,  to the specified queue. The queue should belong to the specified group.
   * Returns false if the assignable bean is not an activity.
   * @param queue Queue to assign the activity to
   * @param group cannot be null
   * @return true if the assignment is successful
   */
  public boolean assignActivityToQueue(entity.AssignableQueue queue, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignActivityToQueue(queue, group);
  }
  
  /**
   * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
   * parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
   * see the preferred method for details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param attributeBasedAssignmentCriteria The criteria used to perform the search
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, Group)</code> instead
   */
  public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria);
  }
  
  /**
   * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
   * parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
   * see the preferred method for details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param attributeBasedAssignmentCriteria The criteria used to perform the search
   * @param includeSubGroups if true, searches  all the users in any subgroups of the current group, as well as those in
   *                         the current group. If false, only searches users in the current group
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, Group)</code> instead
   */
  public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria, includeSubGroups);
  }
  
  /**
   * Assigns an assignable item to a user who satisfies the constraints defined in the attributeBasedAssignmentCriteria
   * parameter. This is done by:
   * <p/>
   * 1) Find the set of users who are members of the supplied group, and optionally its subgroups, and who satisfy
   * the supplied attribute-based search criteria. (If the group parameter is null, then no group restriction applies)
   * 2) Select from the resulting set of users via the round-robin rotation mechanism. A separate round-robin state will
   * be maintained for each unique assignment criteria entity and group.
   * @param attributeBasedAssignmentCriteria the criteria to be satisfied by the selected user
   * @param includeSubGroups if true, searches  all the users in any subgroups of the group parameter as well as those in
   *                         that group. If false, only searches users in the group
   * @param group the group.
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria, includeSubGroups, group);
  }
  
  /**
   * Assigns the entity to the group requested.  If group is null, nothing is done.
   * @param group the group to which the entity should be assigned
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignGroup(entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroup(group);
  }
  
  /**
   * Uses the group type group selector to choose the next subgroup under the "current" group (retrieved from the
   * current state of the Assignment Engine) to receive the assignable. If there is no current group, the root group
   * from the Assignment Engine is used.
   * <p/>
   * This method will search breadth-first through the group tree, starting with the current group, and will
   * return the first group found with the approriate type.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param requiredGroupType A GroupType typecode; the assignment will be restricted to a group of this type. If null, then
   *                          no group will be found.
   * @return true if the assignment is successful, false otherwise
   * @deprecated This method of assignment is deemed useless, because it always returns the first group found with the
   *             required type. Use <code>assignGroupByRoundRobin()</code> instead, so that the assignment will be rotated among
   *             the matching groups.
   */
  public boolean assignGroupByGroupType(typekey.GroupType requiredGroupType) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByGroupType(requiredGroupType);
  }
  
  /**
   * Assigns this entity to a group based on region assignments. This is done in the following manner:
   * <p/>
   * Alternative signature; see <code>assignGroupByLocation(GroupType, Address, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param address An address to use for location-based assignment
   * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the current group
   *                           but also through all its subgroups.
   * @return true if the assignment is successful, false otherwise
   * @deprecated Use <code>assignGroupByLocation(GroupType, Address, boolean, Group)</code> insteaed, to make the recursion explicit.
   */
  public boolean assignGroupByLocation(typekey.GroupType groupType, entity.Address address, boolean directChildrenOnly) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByLocation(groupType, address, directChildrenOnly);
  }
  
  /**
   * Assigns this entity to a group based on region assignments. This is done in the following manner:
   * <p/>
   * 1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
   * would typically be the zip code)
   * 2) Search for the groups within the parameter group whose region assignment configuration includes that zip code.
   * 3) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
   * 4) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
   * 5) If more than one group is found, then round-robin among the resulting groups based on the zone which was used to
   * find the match.
   * <p/>
   * For example if we find no groups that match by zip but a few that match by county then
   * assignment will round robin through the ones that match by county and will ignore any others that match by state.
   * Matching is case-insensitive.
   * <p/>
   * Search is restricted to the sub-groups of the specified group and optionally all of its children. If there is no
   * specified group, then the root group is used. Note that starting from the root group is potentially costly in
   * performance time. If invoked from outside an Assignment Rule, this method will take no action and return false.
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param address An address to use for location-based assignment
   * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the parameter
   *                           group but also through all its subgroups.
   * @param parentGroup The group whose subgroups will be considered for assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignGroupByLocation(typekey.GroupType groupType, entity.Address address, boolean directChildrenOnly, entity.Group parentGroup) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByLocation(groupType, address, directChildrenOnly, parentGroup);
  }
  
  /**
   * Uses the round robin group selector to choose the next subgroup under the current group with the
   * appropriate type to be assigned to this entity.
   * <p/>
   * Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
   *                          then no group will be found
   * @return true if the assignment is successful, false otherwise
   * @deprecated Use <code>assignGroupByRoundRogin(GroupType, boolean, Group)</code> insteaed, to make the recursion explicit.
   */
  public boolean assignGroupByRoundRobin(typekey.GroupType requiredGroupType) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(requiredGroupType);
  }
  
  /**
   * Uses the round robin group selector to choose the next subgroup under the current group with the
   * appropriate type to be assigned to this entity.
   * <p/>
   * Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
   *                          then no group will be found
   * @param includeSubGroups If true, all the user
   * @return true if the assignment is successful, false otherwise
   * @deprecated Use <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> insteaed, to make the recursion explicit.
   */
  public boolean assignGroupByRoundRobin(typekey.GroupType requiredGroupType, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(requiredGroupType, includeSubGroups);
  }
  
  /**
   * Uses the round robin algorithm to choose the next group to receive the assignable.
   * <p/>
   * The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
   * taken into account, but each Group's load factor is used to determine relative assignment frequency; essentially, a
   * group with a lower load factor than the others' is periodically skipped.
   * <p/>
   * The round-robin rotation for each group type (and boolean value) is independent of the others, so only identical
   * calls will impact the user who is "next" in the rotation.
   * <p/>
   * If no group is specified, the root group will be used instead. Note that starting from the root group is
   * potentially costly in performance time.
   * <p/>
   * When group type is specified, the load factor is <b>NOT</b> used.
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter
   *                         group's immediate children but also through all its subgroups.
   * @param parentGroup The group whose subgroups will be considered for assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignGroupByRoundRobin(typekey.GroupType groupType, boolean includeSubGroups, entity.Group parentGroup) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(groupType, includeSubGroups, parentGroup);
  }
  
  /**
   * Uses the supplied dynamic assignment strategy implementation to find a group assignment for the current entity. See
   * {@link gw.api.assignment.DynamicGroupAssignmentStrategy} for more details on what that implementation should look like and how it
   * is used by the implementation of this method.
   * @param dynamicGroupAssignmentStrategy the {@link gw.api.assignment.DynamicGroupAssignmentStrategy} to be used to do the assignment
   * @param parentGroup The group to be used during the assignment (usually the parent group to which the entity is or should be assigned)
   * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignGroupDynamically(gw.api.assignment.DynamicGroupAssignmentStrategy dynamicGroupAssignmentStrategy, entity.Group parentGroup, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupDynamically(dynamicGroupAssignmentStrategy, parentGroup, includeSubGroups);
  }
  
  /**
   * Assigns the item to the creator of the supplied entity, and to one of the user's groups. If no group
   * is found for the user, uses the group based on the rule engine state (if available).
   * @param sourceEntity The entity to query for the id of the creator.
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignToCreator(entity.Editable sourceEntity) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToCreator(sourceEntity);
  }
  
  /**
   * Assigns this entity to the user who created the supplied entity, and to the first group in the user's list of member groups. In the
   * unlikely case that the user does not belong to any groups, then the entity will be assigned to the supplied
   * default group.
   * <p/>
   * If the supplied entity has not been persisted yet, and therefore has no recorded creator, then the current user will be
   * used instead.
   * @param sourceEntity The entity to query for the id of its creator.
   * @param defaultGroup The default group to use if the assigned user is not a member of any group.
   * @return true if the assignment is successful, false otherwise
   * @deprecated This signature is a little confusing, because the defaultGroup parameter should almost never be
   *             necessary, since in the current system a user almost never belongs to no groups. Use assignToCreator(EditableBean)
   *             instead
   */
  public boolean assignToCreator(entity.Editable sourceEntity, entity.Group defaultGroup) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToCreator(sourceEntity, defaultGroup);
  }
  
  /**
   * Another name for {@link #assignToQueue()}, making it more explicit that the activity will be assigned to the FNOL
   * queue. See that method for more details.
   * @return true if the assignment is successful, false otherwise
   * @deprecated use {@link #assignActivityToQueue(entity.AssignableQueue)} to assign an
   *             activity to a particular queue. Note that {@link entity.Group#getQueue(String)} can be used to find a
   *             named queue.
   */
  public boolean assignToFNOLQueue() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToFNOLQueue();
  }
  
  /**
   * Assigns this entity to the user and group to which the entity's "issue" is assigned. Which entity is used
   * to find the user and group is application-dependent. For example, in CC this will assign the entity to
   * the owner of the related exposure (if any) or claim. This method is currently only meaningful for CC.
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignToIssueOwner() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToIssueOwner();
  }
  
  /**
   * Assign an activity to the FNOL queue of items assigned to the "current" group (retrieved from the current state of
   * the Assignment Engine). If the entity to be assigned is not an activity nothing is done,
   * false is returned and a warning is logged.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @return true if the assignment is successful, false otherwise
   * @deprecated use {@link #assignActivityToQueue(entity.AssignableQueue)} to assign an
   *             activity to a particular queue. Note that {@link entity.Group#getQueue(String)} can be used to find a
   *             named queue.
   */
  public boolean assignToQueue() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToQueue();
  }
  
  /**
   * Assigns the entity to the user requested within the "current" group (retrieved from the current state of
   * the Assignment Engine).  If the user is null or is not a member of the current group, nothing is done and false is returned.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param user the user to be assigned
   * @return true if the assignment is successful
   * @deprecated depends on the Assignment Engine state; use <code>assign(Group, User)</code> instead
   */
  public boolean assignUser(entity.User user) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUser(user);
  }
  
  /**
   * Directly assigns the entity to the specified user and one of the groups the user belongs to.
   * <p/>
   * If the user does not have sufficient permission to accept the assignment, false is returned
   * @param user The user to which the entity should be assigned
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserAndDefaultGroup(entity.User user) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserAndDefaultGroup(user);
  }
  
  /**
   * Uses the location-based assigner to assign an Assignable based on a given address.
   * <p/>
   * Alternative signature; see <code>assignUserByLocation(Address, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param address An address to use for location-based assignment
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(Address, boolean, Group)</code> instead.
   */
  public boolean assignUserByLocation(entity.Address address) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address);
  }
  
  /**
   * Uses the location-based assigner to assign an Assignable based on a given address.
   * <p/>
   * Alternative signature; see <code>assignUserByLocation(Address, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param address An address to use for location-based assignment
   * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
   *                         current group.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(Address, boolean, Group)</code> instead.
   */
  public boolean assignUserByLocation(entity.Address address, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address, includeSubGroups);
  }
  
  /**
   * Assigns this entity to a user based on region assignments. This is done in the following manner:
   * <p/>
   * 1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
   * would typically be the zip code)
   * 2) Search for the users whose region assignment configuration includes that zip code.
   * 3) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
   * 4) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
   * 5) If more than one user is found, then round-robin among the resulting users based on the zone which was used to
   * find the match.
   * <p/>
   * For example if we find no users that match by zip but a few that match by county then
   * assignment will round robin through the ones that match by county and will ignore any others that match by state.
   * Matching is case-insensitive.
   * <p/>
   * Search is restricted to the users of the group (and optionally its subgroups). It is an error if there is no
   * group.
   * @param address An address to use for location-based assignment
   * @param includeSubGroups if true, then include users in any sub groups of the parameter group as well as users in
   *                         that group.
   * @param group the group whose users will be considered for the assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByLocation(entity.Address address, boolean includeSubGroups, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address, includeSubGroups, group);
  }
  
  /**
   * A combination of {@link #assignUserByLocation} and {@link #assignByUserAttributes} .
   * <p/>
   * Alternative signature; see <code>assignUserByLocationAndAttributes(Address, AttributeBasedAssignmentCriteria, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param address An address to use for location-based assignment
   * @param attributeBasedAssignmentCriteria the user attributes to match against
   * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
   *                         current group.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationAndAttributes(Address, AttributeBasedAssignmentCriteria, boolean, Group)</code> instead.
   */
  public boolean assignUserByLocationAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocationAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups);
  }
  
  /**
   * Assigns this entity to the user matching the attribute criteria whose region assignments contain the supplied location. This method
   * first finds the users in the supplied group (and, possibly, subgroups) who match the attribute criteria, and then
   * once that set is determined it applies the same algorithm used by {@link #assignUserByLocation}
   * to find a user whose region assignments contain the supplied location.
   * <p/>
   * If no users match the supplied criteria, then assignment will fail and false will be returned.
   * @param address An address to use for location-based assignment
   * @param attributeBasedAssignmentCriteria the user attributes to match against
   * @param includeSubGroups if true, then include users in any sub groups of the parameter  group as well as users in
   *                         that group.
   * @param group the group whose members should be considered for the assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByLocationAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocationAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups, group);
  }
  
  /**
   * Assigns a user within the "current" group (retrieved from the current state of
   * the Assignment Engine), rotating through the set of users in the group each time the method is called.
   * <p/>
   * Alternative signature; see <code>assignUserByRoundRobin(boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, Group)</code> instead
   */
  public boolean assignUserByRoundRobin() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin();
  }
  
  /**
   * Assigns a user within the "current" group (retrieved from the current state of
   * the Assignment Engine), rotating through the set of users in the group each time the method is called.
   * <p/>
   * Alternative signature; see <code>assignUserByRoundRobin(boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the current group
   *                         but also through all its subgroups.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, Group)</code> instead
   */
  public boolean assignUserByRoundRobin(boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin(includeSubGroups);
  }
  
  /**
   * Uses the round robin algorithm to choose the next user from the specified group or to receive the assignable.
   * <p/>
   * The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
   * taken into account, but each User's load factor is used to determine relative assignment frequency; essentially, a
   * user with a lower load factor than the others' is periodically skipped.
   * <p/>
   * The round-robin rotation for each group (and boolean value) is independent of the others, so only identical
   * calls will impact the user who is "next" in the rotation.
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter group
   *                         but also through all its subgroups.
   * @param group may not be null
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByRoundRobin(boolean includeSubGroups, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin(includeSubGroups, group);
  }
  
  /**
   * Uses the supplied dynamic assignment strategy implementation to find an assignment for the current entity. See
   * {@link gw.api.assignment.DynamicUserAssignmentStrategy} for more details on what that implementation should look like and how it
   * is used by the implementation of this method.
   * @param dynamicUserAssignmentStrategy the {@link gw.api.assignment.DynamicUserAssignmentStrategy} to be used to do the assignment
   * @param group The group to be used during the assignment (usually the group to which the entity is or should be assigned)
   * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserDynamically(gw.api.assignment.DynamicUserAssignmentStrategy dynamicUserAssignmentStrategy, entity.Group group, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserDynamically(dynamicUserAssignmentStrategy, group, includeSubGroups);
  }
  
  /**
   * Invokes the Assignment Engine, which will process the configured Assignment Rules to come up with an assignment
   * for the current entity.
   * <p/>
   * May not be invoked from within an Assignment Rule, since the Assignment Engine may not be invoked recursively. If invoked
   * from within an Assigment Rule, an error will be logged and false will be returned.
   * @return true if an assignment has been found, false otherwise
   */
  public boolean autoAssign() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).autoAssign();
  }
  
  /**
   * <p>
   * Invokes the Assignment Enging to assign the item to the specified group and user.
   * If userID is null, the item will be assigned using the group's assignment rules.
   * If userID is specified, assignment will be made directly to the group and
   * user.  If the engine cannot assign the item to the requested group/user,
   * it will throw an exception indicating the reason.
   * </p>
   * If a user is specified, caller is responsible for ensuring that the
   * user is a member of group.
   * </p>
   * Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
   * @param group The group to which the item should be assigned - must be
   *              specified.  If not known, use autoAssign(item) instead.
   * @param user The user to which the item should be assigned; if null an
   *              appropriate user will be selected by group assignment rules.
   * @return true if the assignment is successufl, false otherwise
   */
  public boolean autoAssign(entity.Group group, entity.User user) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).autoAssign(group, user);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Creates a AttributeBasedAssignmentCriteria instance, which is used to collect a set of user attributes on which to search for users.
   * The matchAll flag indicates whether each attribute must be satisfied (logical AND) or whether any attribute could
   * be satisfied (logical OR).
   * @return AttributeBasedAssignmentCriteria instance
   * @deprecated Use the constructor directly.  This method is no longer necessary, since a new AttributeBasedAssignmentCriteria entity can simply
   *             be created directly in Gosu and placed in the correct bundle.
   */
  public entity.AttributeBasedAssignmentCriteria createUserAttributes() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).createUserAttributes();
  }
  
  /**
   * Gets the value of the AssignedByUser field.
   * User who assigned this entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAssignedByUser() {
    return (entity.User)__getInternalInterface().getFieldValue(ASSIGNEDBYUSER_PROP.get());
  }
  
  /**
   * Gets the value of the AssignedGroup field.
   * Group to which this entity is assigned; null if none assigned
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getAssignedGroup() {
    return (entity.Group)__getInternalInterface().getFieldValue(ASSIGNEDGROUP_PROP.get());
  }
  
  /**
   * Gets the value of the AssignedQueue field.
   * Either the Queue to which this entity is assigned (if AssignmentStatus is 'assigned'), the Queue to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AssignableQueue getAssignedQueue() {
    return (entity.AssignableQueue)__getInternalInterface().getFieldValue(ASSIGNEDQUEUE_PROP.get());
  }
  
  /**
   * Gets the value of the AssignedUser field.
   * Either the User to which this entity is assigned (if AssignmentStatus is 'assigned'), the User to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAssignedUser() {
    return (entity.User)__getInternalInterface().getFieldValue(ASSIGNEDUSER_PROP.get());
  }
  
  /**
   * Gets the value of the AssignmentDate field.
   * Time when entity last assigned
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAssignmentDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ASSIGNMENTDATE_PROP.get());
  }
  
  /**
   * The role to which the user is assigned.
   * @deprecated use getRole()
   */
  public typekey.UserRole getAssignmentRole() {
    return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getAssignmentRole();
  }
  
  /**
   * Gets the value of the AssignmentStatus field.
   * Typelist describing assignment status.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AssignmentStatus getAssignmentStatus() {
    return (typekey.AssignmentStatus)__getInternalInterface().getFieldValue(ASSIGNMENTSTATUS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CloseDate field.
   * Date and time when this entity was closed. (Not applicable to all assignable entities)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCloseDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CLOSEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Comments field.
   * Comments about this role assignment.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getComments() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * This method exists to support the notion of "secondary" assignment in the Assignment Rules. "Secondary" assignments
   * generally represented by UserRoleAssignment entities, are assignments of "roles" to users, separated from the single
   * "primary" owner of the entity.
   * <p/>
   * It is generally desirable for Assignment rule writers to be able to re-use a single set of, say, Claim Assignment rules
   * for both primary and secondary assignments. This method allows rules to be written in the form of
   * <code>Claim.CurrentAssignment.assignXXX()</code> rather than <code>Claim.assignXXX()</code>. If the primary
   * assignment is being performed, then getCurrentAssignment() will return the entity itself (in this case, the Claim).
   * If a secondary assignment is being performed, then getCurrentAssignment() will return the UserRoleAssignment which
   * is current being operated upon.
   * <p/>
   * Obviously, if an entity does not support secondary assignment (i.e. does not implement the UserRoleOwner interface),
   * then rules do not need to use this method. Secondary assignments done outside of the Assignment Rules can simplay
   * call the assignXXX methods directly on the UserRoleAssignment entity themselves, and therefore also do not require
   * this method.
   * <p/>
   * Since this method is dependent on the Assignment Engine state, calling it outside of the Assignment Rules is illegal.
   * @return the Assignable entity being operated on by the Assignment Engine. May be either the current entity or
   *         a UserRoleAssignment entity relating to the current entity.
   */
  public entity.Assignable getCurrentAssignment() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).getCurrentAssignment();
  }
  
  /**
   * The group in which the user is assigned to the role.
   * @deprecated use getAssignedGroup()
   */
  public entity.Group getGroup() {
    return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getGroup();
  }
  
  /**
   * The group ID in which the user is assigned to the role.
   * @deprecated use getAssignedGroupID()
   */
  public gw.pl.persistence.core.Key getGroupID() {
    return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getGroupID();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
  }
  
  /**
   * Gets the value of the PreviousGroup field.
   * Group to which this entity was previously assigned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getPreviousGroup() {
    return (entity.Group)__getInternalInterface().getFieldValue(PREVIOUSGROUP_PROP.get());
  }
  
  /**
   * Gets the value of the PreviousQueue field.
   * Queue to which this entity was previously assigned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AssignableQueue getPreviousQueue() {
    return (entity.AssignableQueue)__getInternalInterface().getFieldValue(PREVIOUSQUEUE_PROP.get());
  }
  
  /**
   * Gets the value of the PreviousUser field.
   * User to which this entity was previously assigned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getPreviousUser() {
    return (entity.User)__getInternalInterface().getFieldValue(PREVIOUSUSER_PROP.get());
  }
  
  /**
   * The external ID for this entity.
   * <p>
   * PublicID values are automatically created during the commit, if not previously set. The format is random, meeting security requirements based on current industry standards. For example:
   * <ul>
   *   <li>pc:SYinDB2XTOgNZFs1NpxU8
   *   <li>pc:Sf8QS4N5RBS-h8_pj-Oy_
   *   <li>pc:SBwBzylneecSNr6_Ub4IO
   * </ul>
   * Your configuration code must not assume any particular format for PublicID values, in either the prefix or body portion of the string, or even assume the existence of a prefix. Do not make any assumptions at all about the content of a PublicID value, including expectations that values are sequential, numeric, or prefixed.
   * <p>
   * You can subclass and override {@link gw.transaction.AbstractBundleTransactionCallback#afterSetIds(gw.pl.persistence.core.Bundle)} if you need to see the value
   * in the same commit.
   *    <pre>{@code
   *  var note = new Note(bundle)
   *  bundle.addBundleTransactionCallback(new AbstractBundleTransactionCallback() {
   *     override function afterSetIds(b : Bundle) {
   *       log.info("Created Note " + note.PublicID)
   *     }
   *  })
   *  }</pre>
   * @return the external id.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the Role field.
   * The role to which the user is assigned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UserRole getRole() {
    return (typekey.UserRole)__getInternalInterface().getFieldValue(ROLE_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * The user assigned to the role.
   * @deprecated use getAssignedUser()
   */
  public entity.User getUser() {
    return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getUser();
  }
  
  /**
   * The user ID assigned to the role.
   * @deprecated use getAssignedUserID()
   */
  public gw.pl.persistence.core.Key getUserID() {
    return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getUserID();
  }
  
  /**
   * Gets the value of the Active field.
   * Indicates whether the user is active in this role assignment.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isActive() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ACTIVE_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Sets the value of the Active field.
   */
  public void setActive(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ACTIVE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AssignedByUser field.
   */
  public void setAssignedByUser(entity.User value) {
    __getInternalInterface().setFieldValue(ASSIGNEDBYUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AssignedGroup field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setAssignedGroup(entity.Group value) {
    ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedGroup(value);
  }
  
  /**
   * Sets the value of the AssignedQueue field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setAssignedQueue(entity.AssignableQueue value) {
    ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedQueue(value);
  }
  
  /**
   * Sets the value of the AssignedUser field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setAssignedUser(entity.User value) {
    ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedUser(value);
  }
  
  /**
   * Sets the value of the AssignmentDate field.
   */
  private void setAssignmentDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ASSIGNMENTDATE_PROP.get(), value);
  }
  
  /**
   * Set the role to which the user is assigned.
   * @param userRole 
   * @deprecated use setRole()
   */
  public void setAssignmentRole(typekey.UserRole userRole) {
    ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setAssignmentRole(userRole);
  }
  
  /**
   * Sets the value of the AssignmentStatus field.
   */
  private void setAssignmentStatus(typekey.AssignmentStatus value) {
    __getInternalInterface().setFieldValue(ASSIGNMENTSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CloseDate field.
   */
  public void setCloseDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CLOSEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Comments field.
   */
  public void setComments(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COMMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Set the group in which the user is assigned to the role.
   * @param value 
   * @deprecated use setAssignedGroup()
   */
  public void setGroup(entity.Group value) {
    ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setGroup(value);
  }
  
  /**
   * Set the group ID in which the user is assigned to the role.
   * @param value 
   * @deprecated use setAssignedGroupID()
   */
  public void setGroupID(gw.pl.persistence.core.Key value) {
    ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setGroupID(value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the PreviousGroup field.
   */
  private void setPreviousGroup(entity.Group value) {
    __getInternalInterface().setFieldValue(PREVIOUSGROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreviousQueue field.
   */
  private void setPreviousQueue(entity.AssignableQueue value) {
    __getInternalInterface().setFieldValue(PREVIOUSQUEUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreviousUser field.
   */
  private void setPreviousUser(entity.User value) {
    __getInternalInterface().setFieldValue(PREVIOUSUSER_PROP.get(), value);
  }
  
  /**
   * Sets the external id for this entity.
   * *  <ul>
   *    *   <li>Do not change the publicID once it is exposed externally.</li>
   *    *   <li>The publicID must be unique.</li>
   *    *   <li>The publicID must not leak information.</li>
   *    *  </ul>
   *    * If you do not set the publicID manually, then it is automatically set upon commit.
   *    * For increased security, the default value is random. If you manually set the value, ensure that it is similarly secure and unique.
   * @param id The value to be set as the publicID of this entity.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Role field.
   */
  public void setRole(typekey.UserRole value) {
    __getInternalInterface().setFieldValue(ROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Set the user assigned to the role.
   * @param value 
   * @deprecated use getAssignedUser()
   */
  public void setUser(entity.User value) {
    ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setUser(value);
  }
  
  /**
   * Set the user ID assigned to the role.
   * @param value 
   * @deprecated use setAssignedUserID()
   */
  public void setUserID(gw.pl.persistence.core.Key value) {
    ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setUserID(value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.UserRoleAssignmentInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.UserRoleAssignment.this.__getDelegateManager();
    }
    
    public void addEvent(com.guidewire.pl.system.entity.BeanEvent event) {
      ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).addEvent(event);
    }
    
    /**
     * Associates an event with the bean, which will be fired when the bean is
     * committed. A bean with an event is considered changed.
     * @param strEventId The event id.
     */
    public void addEvent(java.lang.String strEventId) {
      ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public entity.KeyableBean asKeyableBean() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).asKeyableBean();
    }
    
    /**
     * Directly assigns the entity to the specified group and user by setting the assignedGroup and assignedUser fields.
     * If user or group is null returns false and nothing is done.
     * @param group The group to which the entity should be assigned
     * @param user The user to which the entity should be assigned
     * @return true if the assignment is successful
     */
    public boolean assign(entity.Group group, entity.User user) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assign(group, user);
    }
    
    /**
     * <p>
     * Invokes the Assignment Engine to assign the item to the specified group and user.  If userID is null,
     * the item will be assigned using the group's assignment rules.  If
     * userID is specified, assignment will be made directly to the group and
     * user.  If the engine cannot assign the item to the requested group/user,
     * it will throw an exception indicating the reason.
     * </p>
     * If a user is specified, caller is responsible for ensuring that the
     * user is a member of group.
     * </p>
     * Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
     * @param groupID The group to which the item should be assigned - must be
     *                specified.  If not known, use autoAssign(item) instead.
     * @param userID The user to which the item should be assigned; if null an
     *                appropriate user will be selected by group assignment rules.
     * @throws com.guidewire.pl.system.exception.IllegalAssignmentException if the user does not have permission
     * @throws com.guidewire.pl.system.exception.NoAssignmentFoundException if assignment could not be made
     * @deprecated Use autoAssign(Group, User) instead. Note that that method returns a boolean instead of throwing exceptions
     */
    public void assign(gw.pl.persistence.core.Key groupID, gw.pl.persistence.core.Key userID) throws com.guidewire.pl.system.exception.NoAssignmentFoundException, com.guidewire.pl.system.exception.IllegalAssignmentException {
      ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assign(groupID, userID);
    }
    
    /**
     * Assign the entity, which must be an Activity to the specified queue. (Currently, only Activities may be assigned
     * to Queues.) The current group is not a parameter - it is derived from the current
     * Assignment Engine state. As a result, this method may only be invoked from within an Assignment Rule.
     * <p/>
     * If there is no current group, nothing is done and a warning is logged. The queue must belong to the current group
     * or nothing is done.  Returns false if the assignable bean is not an activity.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param queue Queue to assign the activity to
     * @return true if the assignment is successful, false otherwise
     * @deprecated use assignActivityToQueue(AssignableQueue, Group) instead, since that method is more widely valid and
     *             is easier to understand because the group is explicit rather than implicit.
     */
    public boolean assignActivityToQueue(entity.AssignableQueue queue) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignActivityToQueue(queue);
    }
    
    /**
     * Assign this entity, which must be an Activity,  to the specified queue. The queue should belong to the specified group.
     * Returns false if the assignable bean is not an activity.
     * @param queue Queue to assign the activity to
     * @param group cannot be null
     * @return true if the assignment is successful
     */
    public boolean assignActivityToQueue(entity.AssignableQueue queue, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignActivityToQueue(queue, group);
    }
    
    /**
     * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
     * parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
     * see the preferred method for details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param attributeBasedAssignmentCriteria The criteria used to perform the search
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, Group)</code> instead
     */
    public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria);
    }
    
    /**
     * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
     * parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
     * see the preferred method for details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param attributeBasedAssignmentCriteria The criteria used to perform the search
     * @param includeSubGroups if true, searches  all the users in any subgroups of the current group, as well as those in
     *                         the current group. If false, only searches users in the current group
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, Group)</code> instead
     */
    public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria, includeSubGroups);
    }
    
    /**
     * Assigns an assignable item to a user who satisfies the constraints defined in the attributeBasedAssignmentCriteria
     * parameter. This is done by:
     * <p/>
     * 1) Find the set of users who are members of the supplied group, and optionally its subgroups, and who satisfy
     * the supplied attribute-based search criteria. (If the group parameter is null, then no group restriction applies)
     * 2) Select from the resulting set of users via the round-robin rotation mechanism. A separate round-robin state will
     * be maintained for each unique assignment criteria entity and group.
     * @param attributeBasedAssignmentCriteria the criteria to be satisfied by the selected user
     * @param includeSubGroups if true, searches  all the users in any subgroups of the group parameter as well as those in
     *                         that group. If false, only searches users in the group
     * @param group the group.
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria, includeSubGroups, group);
    }
    
    /**
     * Assigns the entity to the group requested.  If group is null, nothing is done.
     * @param group the group to which the entity should be assigned
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignGroup(entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroup(group);
    }
    
    /**
     * Uses the group type group selector to choose the next subgroup under the "current" group (retrieved from the
     * current state of the Assignment Engine) to receive the assignable. If there is no current group, the root group
     * from the Assignment Engine is used.
     * <p/>
     * This method will search breadth-first through the group tree, starting with the current group, and will
     * return the first group found with the approriate type.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param requiredGroupType A GroupType typecode; the assignment will be restricted to a group of this type. If null, then
     *                          no group will be found.
     * @return true if the assignment is successful, false otherwise
     * @deprecated This method of assignment is deemed useless, because it always returns the first group found with the
     *             required type. Use <code>assignGroupByRoundRobin()</code> instead, so that the assignment will be rotated among
     *             the matching groups.
     */
    public boolean assignGroupByGroupType(typekey.GroupType requiredGroupType) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByGroupType(requiredGroupType);
    }
    
    /**
     * Assigns this entity to a group based on region assignments. This is done in the following manner:
     * <p/>
     * Alternative signature; see <code>assignGroupByLocation(GroupType, Address, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param groupType Only groups whose GroupType property matches this value will be considered
     * @param address An address to use for location-based assignment
     * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the current group
     *                           but also through all its subgroups.
     * @return true if the assignment is successful, false otherwise
     * @deprecated Use <code>assignGroupByLocation(GroupType, Address, boolean, Group)</code> insteaed, to make the recursion explicit.
     */
    public boolean assignGroupByLocation(typekey.GroupType groupType, entity.Address address, boolean directChildrenOnly) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByLocation(groupType, address, directChildrenOnly);
    }
    
    /**
     * Assigns this entity to a group based on region assignments. This is done in the following manner:
     * <p/>
     * 1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
     * would typically be the zip code)
     * 2) Search for the groups within the parameter group whose region assignment configuration includes that zip code.
     * 3) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
     * 4) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
     * 5) If more than one group is found, then round-robin among the resulting groups based on the zone which was used to
     * find the match.
     * <p/>
     * For example if we find no groups that match by zip but a few that match by county then
     * assignment will round robin through the ones that match by county and will ignore any others that match by state.
     * Matching is case-insensitive.
     * <p/>
     * Search is restricted to the sub-groups of the specified group and optionally all of its children. If there is no
     * specified group, then the root group is used. Note that starting from the root group is potentially costly in
     * performance time. If invoked from outside an Assignment Rule, this method will take no action and return false.
     * @param groupType Only groups whose GroupType property matches this value will be considered
     * @param address An address to use for location-based assignment
     * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the parameter
     *                           group but also through all its subgroups.
     * @param parentGroup The group whose subgroups will be considered for assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignGroupByLocation(typekey.GroupType groupType, entity.Address address, boolean directChildrenOnly, entity.Group parentGroup) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByLocation(groupType, address, directChildrenOnly, parentGroup);
    }
    
    /**
     * Uses the round robin group selector to choose the next subgroup under the current group with the
     * appropriate type to be assigned to this entity.
     * <p/>
     * Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
     *                          then no group will be found
     * @return true if the assignment is successful, false otherwise
     * @deprecated Use <code>assignGroupByRoundRogin(GroupType, boolean, Group)</code> insteaed, to make the recursion explicit.
     */
    public boolean assignGroupByRoundRobin(typekey.GroupType requiredGroupType) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(requiredGroupType);
    }
    
    /**
     * Uses the round robin group selector to choose the next subgroup under the current group with the
     * appropriate type to be assigned to this entity.
     * <p/>
     * Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
     *                          then no group will be found
     * @param includeSubGroups If true, all the user
     * @return true if the assignment is successful, false otherwise
     * @deprecated Use <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> insteaed, to make the recursion explicit.
     */
    public boolean assignGroupByRoundRobin(typekey.GroupType requiredGroupType, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(requiredGroupType, includeSubGroups);
    }
    
    /**
     * Uses the round robin algorithm to choose the next group to receive the assignable.
     * <p/>
     * The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
     * taken into account, but each Group's load factor is used to determine relative assignment frequency; essentially, a
     * group with a lower load factor than the others' is periodically skipped.
     * <p/>
     * The round-robin rotation for each group type (and boolean value) is independent of the others, so only identical
     * calls will impact the user who is "next" in the rotation.
     * <p/>
     * If no group is specified, the root group will be used instead. Note that starting from the root group is
     * potentially costly in performance time.
     * <p/>
     * When group type is specified, the load factor is <b>NOT</b> used.
     * @param groupType Only groups whose GroupType property matches this value will be considered
     * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter
     *                         group's immediate children but also through all its subgroups.
     * @param parentGroup The group whose subgroups will be considered for assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignGroupByRoundRobin(typekey.GroupType groupType, boolean includeSubGroups, entity.Group parentGroup) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(groupType, includeSubGroups, parentGroup);
    }
    
    /**
     * Uses the supplied dynamic assignment strategy implementation to find a group assignment for the current entity. See
     * {@link gw.api.assignment.DynamicGroupAssignmentStrategy} for more details on what that implementation should look like and how it
     * is used by the implementation of this method.
     * @param dynamicGroupAssignmentStrategy the {@link gw.api.assignment.DynamicGroupAssignmentStrategy} to be used to do the assignment
     * @param parentGroup The group to be used during the assignment (usually the parent group to which the entity is or should be assigned)
     * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignGroupDynamically(gw.api.assignment.DynamicGroupAssignmentStrategy dynamicGroupAssignmentStrategy, entity.Group parentGroup, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupDynamically(dynamicGroupAssignmentStrategy, parentGroup, includeSubGroups);
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    /**
     * Assigns the item to the creator of the supplied entity, and to one of the user's groups. If no group
     * is found for the user, uses the group based on the rule engine state (if available).
     * @param sourceEntity The entity to query for the id of the creator.
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignToCreator(entity.Editable sourceEntity) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToCreator(sourceEntity);
    }
    
    /**
     * Assigns this entity to the user who created the supplied entity, and to the first group in the user's list of member groups. In the
     * unlikely case that the user does not belong to any groups, then the entity will be assigned to the supplied
     * default group.
     * <p/>
     * If the supplied entity has not been persisted yet, and therefore has no recorded creator, then the current user will be
     * used instead.
     * @param sourceEntity The entity to query for the id of its creator.
     * @param defaultGroup The default group to use if the assigned user is not a member of any group.
     * @return true if the assignment is successful, false otherwise
     * @deprecated This signature is a little confusing, because the defaultGroup parameter should almost never be
     *             necessary, since in the current system a user almost never belongs to no groups. Use assignToCreator(EditableBean)
     *             instead
     */
    public boolean assignToCreator(entity.Editable sourceEntity, entity.Group defaultGroup) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToCreator(sourceEntity, defaultGroup);
    }
    
    /**
     * Another name for {@link #assignToQueue()}, making it more explicit that the activity will be assigned to the FNOL
     * queue. See that method for more details.
     * @return true if the assignment is successful, false otherwise
     * @deprecated use {@link #assignActivityToQueue(entity.AssignableQueue)} to assign an
     *             activity to a particular queue. Note that {@link entity.Group#getQueue(String)} can be used to find a
     *             named queue.
     */
    public boolean assignToFNOLQueue() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToFNOLQueue();
    }
    
    /**
     * Assigns this entity to the user and group to which the entity's "issue" is assigned. Which entity is used
     * to find the user and group is application-dependent. For example, in CC this will assign the entity to
     * the owner of the related exposure (if any) or claim. This method is currently only meaningful for CC.
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignToIssueOwner() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToIssueOwner();
    }
    
    /**
     * Assign an activity to the FNOL queue of items assigned to the "current" group (retrieved from the current state of
     * the Assignment Engine). If the entity to be assigned is not an activity nothing is done,
     * false is returned and a warning is logged.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @return true if the assignment is successful, false otherwise
     * @deprecated use {@link #assignActivityToQueue(entity.AssignableQueue)} to assign an
     *             activity to a particular queue. Note that {@link entity.Group#getQueue(String)} can be used to find a
     *             named queue.
     */
    public boolean assignToQueue() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToQueue();
    }
    
    public void assignToQueueInternal(entity.AssignableQueue queue) throws com.guidewire.pl.system.exception.NoAssignmentFoundException, com.guidewire.pl.system.exception.IllegalAssignmentException {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).assignToQueueInternal(queue);
    }
    
    /**
     * Assigns the entity to the user requested within the "current" group (retrieved from the current state of
     * the Assignment Engine).  If the user is null or is not a member of the current group, nothing is done and false is returned.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param user the user to be assigned
     * @return true if the assignment is successful
     * @deprecated depends on the Assignment Engine state; use <code>assign(Group, User)</code> instead
     */
    public boolean assignUser(entity.User user) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUser(user);
    }
    
    /**
     * Directly assigns the entity to the specified user and one of the groups the user belongs to.
     * <p/>
     * If the user does not have sufficient permission to accept the assignment, false is returned
     * @param user The user to which the entity should be assigned
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserAndDefaultGroup(entity.User user) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserAndDefaultGroup(user);
    }
    
    /**
     * Uses the location-based assigner to assign an Assignable based on a given address.
     * <p/>
     * Alternative signature; see <code>assignUserByLocation(Address, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param address An address to use for location-based assignment
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(Address, boolean, Group)</code> instead.
     */
    public boolean assignUserByLocation(entity.Address address) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address);
    }
    
    /**
     * Uses the location-based assigner to assign an Assignable based on a given address.
     * <p/>
     * Alternative signature; see <code>assignUserByLocation(Address, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param address An address to use for location-based assignment
     * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
     *                         current group.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(Address, boolean, Group)</code> instead.
     */
    public boolean assignUserByLocation(entity.Address address, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address, includeSubGroups);
    }
    
    /**
     * Assigns this entity to a user based on region assignments. This is done in the following manner:
     * <p/>
     * 1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
     * would typically be the zip code)
     * 2) Search for the users whose region assignment configuration includes that zip code.
     * 3) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
     * 4) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
     * 5) If more than one user is found, then round-robin among the resulting users based on the zone which was used to
     * find the match.
     * <p/>
     * For example if we find no users that match by zip but a few that match by county then
     * assignment will round robin through the ones that match by county and will ignore any others that match by state.
     * Matching is case-insensitive.
     * <p/>
     * Search is restricted to the users of the group (and optionally its subgroups). It is an error if there is no
     * group.
     * @param address An address to use for location-based assignment
     * @param includeSubGroups if true, then include users in any sub groups of the parameter group as well as users in
     *                         that group.
     * @param group the group whose users will be considered for the assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByLocation(entity.Address address, boolean includeSubGroups, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address, includeSubGroups, group);
    }
    
    /**
     * A combination of {@link #assignUserByLocation} and {@link #assignByUserAttributes} .
     * <p/>
     * Alternative signature; see <code>assignUserByLocationAndAttributes(Address, AttributeBasedAssignmentCriteria, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param address An address to use for location-based assignment
     * @param attributeBasedAssignmentCriteria the user attributes to match against
     * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
     *                         current group.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationAndAttributes(Address, AttributeBasedAssignmentCriteria, boolean, Group)</code> instead.
     */
    public boolean assignUserByLocationAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocationAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups);
    }
    
    /**
     * Assigns this entity to the user matching the attribute criteria whose region assignments contain the supplied location. This method
     * first finds the users in the supplied group (and, possibly, subgroups) who match the attribute criteria, and then
     * once that set is determined it applies the same algorithm used by {@link #assignUserByLocation}
     * to find a user whose region assignments contain the supplied location.
     * <p/>
     * If no users match the supplied criteria, then assignment will fail and false will be returned.
     * @param address An address to use for location-based assignment
     * @param attributeBasedAssignmentCriteria the user attributes to match against
     * @param includeSubGroups if true, then include users in any sub groups of the parameter  group as well as users in
     *                         that group.
     * @param group the group whose members should be considered for the assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByLocationAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocationAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups, group);
    }
    
    /**
     * Assigns a user within the "current" group (retrieved from the current state of
     * the Assignment Engine), rotating through the set of users in the group each time the method is called.
     * <p/>
     * Alternative signature; see <code>assignUserByRoundRobin(boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, Group)</code> instead
     */
    public boolean assignUserByRoundRobin() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin();
    }
    
    /**
     * Assigns a user within the "current" group (retrieved from the current state of
     * the Assignment Engine), rotating through the set of users in the group each time the method is called.
     * <p/>
     * Alternative signature; see <code>assignUserByRoundRobin(boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param includeSubGroups if this parameter is true the selector will round-robin not only through the current group
     *                         but also through all its subgroups.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, Group)</code> instead
     */
    public boolean assignUserByRoundRobin(boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin(includeSubGroups);
    }
    
    /**
     * Uses the round robin algorithm to choose the next user from the specified group or to receive the assignable.
     * <p/>
     * The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
     * taken into account, but each User's load factor is used to determine relative assignment frequency; essentially, a
     * user with a lower load factor than the others' is periodically skipped.
     * <p/>
     * The round-robin rotation for each group (and boolean value) is independent of the others, so only identical
     * calls will impact the user who is "next" in the rotation.
     * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter group
     *                         but also through all its subgroups.
     * @param group may not be null
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByRoundRobin(boolean includeSubGroups, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin(includeSubGroups, group);
    }
    
    /**
     * Uses the supplied dynamic assignment strategy implementation to find an assignment for the current entity. See
     * {@link gw.api.assignment.DynamicUserAssignmentStrategy} for more details on what that implementation should look like and how it
     * is used by the implementation of this method.
     * @param dynamicUserAssignmentStrategy the {@link gw.api.assignment.DynamicUserAssignmentStrategy} to be used to do the assignment
     * @param group The group to be used during the assignment (usually the group to which the entity is or should be assigned)
     * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserDynamically(gw.api.assignment.DynamicUserAssignmentStrategy dynamicUserAssignmentStrategy, entity.Group group, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserDynamically(dynamicUserAssignmentStrategy, group, includeSubGroups);
    }
    
    /**
     * Invokes the Assignment Engine, which will process the configured Assignment Rules to come up with an assignment
     * for the current entity.
     * <p/>
     * May not be invoked from within an Assignment Rule, since the Assignment Engine may not be invoked recursively. If invoked
     * from within an Assigment Rule, an error will be logged and false will be returned.
     * @return true if an assignment has been found, false otherwise
     */
    public boolean autoAssign() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).autoAssign();
    }
    
    /**
     * <p>
     * Invokes the Assignment Enging to assign the item to the specified group and user.
     * If userID is null, the item will be assigned using the group's assignment rules.
     * If userID is specified, assignment will be made directly to the group and
     * user.  If the engine cannot assign the item to the requested group/user,
     * it will throw an exception indicating the reason.
     * </p>
     * If a user is specified, caller is responsible for ensuring that the
     * user is a member of group.
     * </p>
     * Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
     * @param group The group to which the item should be assigned - must be
     *              specified.  If not known, use autoAssign(item) instead.
     * @param user The user to which the item should be assigned; if null an
     *              appropriate user will be selected by group assignment rules.
     * @return true if the assignment is successufl, false otherwise
     */
    public boolean autoAssign(entity.Group group, entity.User user) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).autoAssign(group, user);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public void copyPreviousAssignments(entity.Assignable source) {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).copyPreviousAssignments(source);
    }
    
    /**
     * Creates a AttributeBasedAssignmentCriteria instance, which is used to collect a set of user attributes on which to search for users.
     * The matchAll flag indicates whether each attribute must be satisfied (logical AND) or whether any attribute could
     * be satisfied (logical OR).
     * @return AttributeBasedAssignmentCriteria instance
     * @deprecated Use the constructor directly.  This method is no longer necessary, since a new AttributeBasedAssignmentCriteria entity can simply
     *             be created directly in Gosu and placed in the correct bundle.
     */
    public entity.AttributeBasedAssignmentCriteria createUserAttributes() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).createUserAttributes();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public void finishAssignment() {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).finishAssignment();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateAssignmentEvents() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).generateAssignmentEvents();
    }
    
    public java.util.List generateInsertEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateInsertEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List generateRemoveEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateRemoveEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List generateUpdateEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateUpdateEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the AssignedByUser field.
     * User who assigned this entity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getAssignedByUser() {
      return (entity.User)__getInternalInterface().getFieldValue(ASSIGNEDBYUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAssignedByUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ASSIGNEDBYUSER_PROP.get());
    }
    
    /**
     * Gets the value of the AssignedGroup field.
     * Group to which this entity is assigned; null if none assigned
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getAssignedGroup() {
      return (entity.Group)__getInternalInterface().getFieldValue(ASSIGNEDGROUP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAssignedGroupID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ASSIGNEDGROUP_PROP.get());
    }
    
    /**
     * Gets the value of the AssignedQueue field.
     * Either the Queue to which this entity is assigned (if AssignmentStatus is 'assigned'), the Queue to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AssignableQueue getAssignedQueue() {
      return (entity.AssignableQueue)__getInternalInterface().getFieldValue(ASSIGNEDQUEUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAssignedQueueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ASSIGNEDQUEUE_PROP.get());
    }
    
    /**
     * Gets the value of the AssignedUser field.
     * Either the User to which this entity is assigned (if AssignmentStatus is 'assigned'), the User to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getAssignedUser() {
      return (entity.User)__getInternalInterface().getFieldValue(ASSIGNEDUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAssignedUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ASSIGNEDUSER_PROP.get());
    }
    
    /**
     * Gets the value of the AssignmentDate field.
     * Time when entity last assigned
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAssignmentDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ASSIGNMENTDATE_PROP.get());
    }
    
    /**
     * The role to which the user is assigned.
     * @deprecated use getRole()
     */
    public typekey.UserRole getAssignmentRole() {
      return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getAssignmentRole();
    }
    
    /**
     * Gets the value of the AssignmentStatus field.
     * Typelist describing assignment status.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AssignmentStatus getAssignmentStatus() {
      return (typekey.AssignmentStatus)__getInternalInterface().getFieldValue(ASSIGNMENTSTATUS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CloseDate field.
     * Date and time when this entity was closed. (Not applicable to all assignable entities)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCloseDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CLOSEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Comments field.
     * Comments about this role assignment.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getComments() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMMENTS_PROP.get());
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * This method exists to support the notion of "secondary" assignment in the Assignment Rules. "Secondary" assignments
     * generally represented by UserRoleAssignment entities, are assignments of "roles" to users, separated from the single
     * "primary" owner of the entity.
     * <p/>
     * It is generally desirable for Assignment rule writers to be able to re-use a single set of, say, Claim Assignment rules
     * for both primary and secondary assignments. This method allows rules to be written in the form of
     * <code>Claim.CurrentAssignment.assignXXX()</code> rather than <code>Claim.assignXXX()</code>. If the primary
     * assignment is being performed, then getCurrentAssignment() will return the entity itself (in this case, the Claim).
     * If a secondary assignment is being performed, then getCurrentAssignment() will return the UserRoleAssignment which
     * is current being operated upon.
     * <p/>
     * Obviously, if an entity does not support secondary assignment (i.e. does not implement the UserRoleOwner interface),
     * then rules do not need to use this method. Secondary assignments done outside of the Assignment Rules can simplay
     * call the assignXXX methods directly on the UserRoleAssignment entity themselves, and therefore also do not require
     * this method.
     * <p/>
     * Since this method is dependent on the Assignment Engine state, calling it outside of the Assignment Rules is illegal.
     * @return the Assignable entity being operated on by the Assignment Engine. May be either the current entity or
     *         a UserRoleAssignment entity relating to the current entity.
     */
    public entity.Assignable getCurrentAssignment() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).getCurrentAssignment();
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * The group in which the user is assigned to the role.
     * @deprecated use getAssignedGroup()
     */
    public entity.Group getGroup() {
      return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getGroup();
    }
    
    public java.util.List<com.guidewire.pl.domain.assignment.impl.AssignmentStateHelper> getGroupAssignmentStateHelpers() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).getGroupAssignmentStateHelpers();
    }
    
    /**
     * The group ID in which the user is assigned to the role.
     * @deprecated use getAssignedGroupID()
     */
    public gw.pl.persistence.core.Key getGroupID() {
      return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getGroupID();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the LoadCommandID field.
     * LoadCommand for load where row was created. If not null this object was loaded via the loader.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getLoadCommandID() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
    }
    
    public gw.internal.ext.org.apache.commons.collections.BidiMap getPreviousAssignments() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).getPreviousAssignments();
    }
    
    /**
     * Gets the value of the PreviousGroup field.
     * Group to which this entity was previously assigned.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getPreviousGroup() {
      return (entity.Group)__getInternalInterface().getFieldValue(PREVIOUSGROUP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPreviousGroupID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PREVIOUSGROUP_PROP.get());
    }
    
    /**
     * Gets the value of the PreviousQueue field.
     * Queue to which this entity was previously assigned.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AssignableQueue getPreviousQueue() {
      return (entity.AssignableQueue)__getInternalInterface().getFieldValue(PREVIOUSQUEUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPreviousQueueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PREVIOUSQUEUE_PROP.get());
    }
    
    /**
     * Gets the value of the PreviousUser field.
     * User to which this entity was previously assigned.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getPreviousUser() {
      return (entity.User)__getInternalInterface().getFieldValue(PREVIOUSUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPreviousUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PREVIOUSUSER_PROP.get());
    }
    
    /**
     * The external ID for this entity.
     * <p>
     * PublicID values are automatically created during the commit, if not previously set. The format is random, meeting security requirements based on current industry standards. For example:
     * <ul>
     *   <li>pc:SYinDB2XTOgNZFs1NpxU8
     *   <li>pc:Sf8QS4N5RBS-h8_pj-Oy_
     *   <li>pc:SBwBzylneecSNr6_Ub4IO
     * </ul>
     * Your configuration code must not assume any particular format for PublicID values, in either the prefix or body portion of the string, or even assume the existence of a prefix. Do not make any assumptions at all about the content of a PublicID value, including expectations that values are sequential, numeric, or prefixed.
     * <p>
     * You can subclass and override {@link gw.transaction.AbstractBundleTransactionCallback#afterSetIds(gw.pl.persistence.core.Bundle)} if you need to see the value
     * in the same commit.
     *    <pre>{@code
     *  var note = new Note(bundle)
     *  bundle.addBundleTransactionCallback(new AbstractBundleTransactionCallback() {
     *     override function afterSetIds(b : Bundle) {
     *       log.info("Created Note " + note.PublicID)
     *     }
     *  })
     *  }</pre>
     * @return the external id.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the Role field.
     * The role to which the user is assigned.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.UserRole getRole() {
      return (typekey.UserRole)__getInternalInterface().getFieldValue(ROLE_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    /**
     * The user assigned to the role.
     * @deprecated use getAssignedUser()
     */
    public entity.User getUser() {
      return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getUser();
    }
    
    public java.util.List<com.guidewire.pl.domain.assignment.impl.AssignmentStateHelper> getUserAssignmentStateHelpers() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).getUserAssignmentStateHelpers();
    }
    
    /**
     * The user ID assigned to the role.
     * @deprecated use getAssignedUserID()
     */
    public gw.pl.persistence.core.Key getUserID() {
      return ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).getUserID();
    }
    
    public entity.KeyableBean getUserRoleOwner() {
      return ((com.guidewire.pl.domain.assignment.impl.UserRoleAssignmentDelegateInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.UserRoleAssignmentDelegateInternalMethods")).getUserRoleOwner();
    }
    
    public void handleAssignmentCommit() {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).handleAssignmentCommit();
    }
    
    public void handleAssignmentRollback() {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).handleAssignmentRollback();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the Active field.
     * Indicates whether the user is active in this role assignment.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isActive() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ACTIVE_PROP.get());
    }
    
    public boolean isAssignedToUser(gw.pl.persistence.core.Key userId) {
      return ((com.guidewire.pl.system.entity.PermissionAssignableCheck)__getDelegateManager().getImplementation("com.guidewire.pl.system.entity.PermissionAssignableCheck")).isAssignedToUser(userId);
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the Active field.
     */
    public void setActive(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ACTIVE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AssignedByUser field.
     */
    public void setAssignedByUser(entity.User value) {
      __getInternalInterface().setFieldValue(ASSIGNEDBYUSER_PROP.get(), value);
    }
    
    public void setAssignedByUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(ASSIGNEDBYUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AssignedGroup field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedGroup(entity.Group value) {
      ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedGroup(value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedGroupID(gw.pl.persistence.core.Key value) {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).setAssignedGroupID(value);
    }
    
    /**
     * Sets the value of the AssignedQueue field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedQueue(entity.AssignableQueue value) {
      ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedQueue(value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedQueueID(gw.pl.persistence.core.Key value) {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).setAssignedQueueID(value);
    }
    
    /**
     * Sets the value of the AssignedUser field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedUser(entity.User value) {
      ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedUser(value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedUserID(gw.pl.persistence.core.Key value) {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).setAssignedUserID(value);
    }
    
    /**
     * Sets the value of the AssignmentDate field.
     */
    public void setAssignmentDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ASSIGNMENTDATE_PROP.get(), value);
    }
    
    /**
     * Set the role to which the user is assigned.
     * @param userRole 
     * @deprecated use setRole()
     */
    public void setAssignmentRole(typekey.UserRole userRole) {
      ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setAssignmentRole(userRole);
    }
    
    /**
     * Sets the value of the AssignmentStatus field.
     */
    public void setAssignmentStatus(typekey.AssignmentStatus value) {
      __getInternalInterface().setFieldValue(ASSIGNMENTSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CloseDate field.
     */
    public void setCloseDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(CLOSEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Comments field.
     */
    public void setComments(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COMMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Set the group in which the user is assigned to the role.
     * @param value 
     * @deprecated use setAssignedGroup()
     */
    public void setGroup(entity.Group value) {
      ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setGroup(value);
    }
    
    /**
     * Set the group ID in which the user is assigned to the role.
     * @param value 
     * @deprecated use setAssignedGroupID()
     */
    public void setGroupID(gw.pl.persistence.core.Key value) {
      ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setGroupID(value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LoadCommandID field.
     */
    public void setLoadCommandID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the PreviousGroup field.
     */
    public void setPreviousGroup(entity.Group value) {
      __getInternalInterface().setFieldValue(PREVIOUSGROUP_PROP.get(), value);
    }
    
    public void setPreviousGroupID(gw.pl.persistence.core.Key value) {
      setFieldValue(PREVIOUSGROUP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreviousQueue field.
     */
    public void setPreviousQueue(entity.AssignableQueue value) {
      __getInternalInterface().setFieldValue(PREVIOUSQUEUE_PROP.get(), value);
    }
    
    public void setPreviousQueueID(gw.pl.persistence.core.Key value) {
      setFieldValue(PREVIOUSQUEUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreviousUser field.
     */
    public void setPreviousUser(entity.User value) {
      __getInternalInterface().setFieldValue(PREVIOUSUSER_PROP.get(), value);
    }
    
    public void setPreviousUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(PREVIOUSUSER_PROP.get(), value);
    }
    
    /**
     * Sets the external id for this entity.
     * *  <ul>
     *    *   <li>Do not change the publicID once it is exposed externally.</li>
     *    *   <li>The publicID must be unique.</li>
     *    *   <li>The publicID must not leak information.</li>
     *    *  </ul>
     *    * If you do not set the publicID manually, then it is automatically set upon commit.
     *    * For increased security, the default value is random. If you manually set the value, ensure that it is similarly secure and unique.
     * @param id The value to be set as the publicID of this entity.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Role field.
     */
    public void setRole(typekey.UserRole value) {
      __getInternalInterface().setFieldValue(ROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Set the user assigned to the role.
     * @param value 
     * @deprecated use getAssignedUser()
     */
    public void setUser(entity.User value) {
      ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setUser(value);
    }
    
    /**
     * Set the user ID assigned to the role.
     * @param value 
     * @deprecated use setAssignedUserID()
     */
    public void setUserID(gw.pl.persistence.core.Key value) {
      ((com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods")).setUserID(value);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.assignment.AssignablePublicMethods", "com.guidewire.pl.domain.assignment.impl.AssignableImpl");
    config.put("com.guidewire.pl.domain.assignment.UserRoleAssignmentDelegatePublicMethods", "com.guidewire.pl.domain.assignment.impl.UserRoleAssignmentDelegateImpl");
    config.put("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods", "com.guidewire.pl.domain.assignment.impl.AssignableImpl");
    config.put("com.guidewire.pl.domain.assignment.impl.UserRoleAssignmentDelegateInternalMethods", "com.guidewire.pl.domain.assignment.impl.UserRoleAssignmentDelegateImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.entity.PermissionAssignableCheck", "com.guidewire.pl.domain.assignment.impl.AssignableImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.UserRoleAssignment.class, config);
    com.guidewire._generated.entity.UserRoleAssignmentInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.UserRoleAssignment, com.guidewire._generated.entity.UserRoleAssignmentInternal>() {
      public java.lang.Object getImplementation(entity.UserRoleAssignment bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.UserRoleAssignmentInternal getInternalInterface(entity.UserRoleAssignment bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.UserRoleAssignment newEmptyInstance() {
        return new entity.UserRoleAssignment((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}