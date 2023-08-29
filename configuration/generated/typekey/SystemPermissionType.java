package typekey;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "SystemPermissionType.tti;SystemPermissionType.tix;SystemPermissionType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class SystemPermissionType implements gw.entity.TypeKey {
  /**
   * Create address book contacts
   * Permission to create a new contact in the address book
   */
  public static final typekey.SystemPermissionType TC_ABCREATE = new typekey.SystemPermissionType("abcreate");
  
  /**
   * Create address book preferred vendors
   * Permission to add a preferred vendor to the address book
   */
  public static final typekey.SystemPermissionType TC_ABCREATEPREF = new typekey.SystemPermissionType("abcreatepref");
  
  /**
   * Delete address book contacts
   * Permission to delete an existing contact in the address book
   */
  public static final typekey.SystemPermissionType TC_ABDELETE = new typekey.SystemPermissionType("abdelete");
  
  /**
   * Delete address book preferred vendors
   * Permission to delete an existing preferred vendor address book entry
   */
  public static final typekey.SystemPermissionType TC_ABDELETEPREF = new typekey.SystemPermissionType("abdeletepref");
  
  /**
   * Edit address book contacts
   * Permission to edit an existing contact in the address book
   */
  public static final typekey.SystemPermissionType TC_ABEDIT = new typekey.SystemPermissionType("abedit");
  
  /**
   * Edit address book preferred vendors
   * Permission to modify an existing preferred vendor address book entry
   */
  public static final typekey.SystemPermissionType TC_ABEDITPREF = new typekey.SystemPermissionType("abeditpref");
  
  /**
   * View address book contacts
   * Permission to view the details of contact entries in the address book
   */
  public static final typekey.SystemPermissionType TC_ABVIEW = new typekey.SystemPermissionType("abview");
  
  /**
   * View merge
   * Permission to view the merge pages
   */
  public static final typekey.SystemPermissionType TC_ABVIEWMERGE = new typekey.SystemPermissionType("abviewmerge");
  
  /**
   * View pending
   * Permission to view the pending changes page
   */
  public static final typekey.SystemPermissionType TC_ABVIEWPENDING = new typekey.SystemPermissionType("abviewpending");
  
  /**
   * View address book contact search pages
   * Permission to search contact entries in the address book
   */
  public static final typekey.SystemPermissionType TC_ABVIEWSEARCH = new typekey.SystemPermissionType("abviewsearch");
  
  /**
   * Approve any approval activity
   * Permission to approve any approval activity even if the activity is assigned to someone else; the approver is still subject to authority limit restrictions
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTAPPROVEANY = new typekey.SystemPermissionType("actapproveany");
  
  /**
   * Create activities
   * Permission to create new activities
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTCREATE = new typekey.SystemPermissionType("actcreate");
  
  /**
   * Edit unowned activities
   * Permission to modify (edit/skip/close) activities owned by other users
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTEDITUNOWNED = new typekey.SystemPermissionType("acteditunowned");
  
  /**
   * Make activities mandatory
   * Permission to set whether an activity is mandatory
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTMAKEMAND = new typekey.SystemPermissionType("actmakemand");
  
  /**
   * Own activity
   * Permission to own an activity and to see the Desktop Activities page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTOWN = new typekey.SystemPermissionType("actown");
  
  /**
   * Create activity pattern
   * Permission to create new activity patterns
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTPATCREATE = new typekey.SystemPermissionType("actpatcreate");
  
  /**
   * Delete activity pattern
   * Permission to delete activity patterns
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTPATDELETE = new typekey.SystemPermissionType("actpatdelete");
  
  /**
   * Edit activity pattern
   * Permission to edit activity patterns
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTPATEDIT = new typekey.SystemPermissionType("actpatedit");
  
  /**
   * View activity pattern
   * Permission to view the list of activity patterns or activity pattern details
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTPATVIEW = new typekey.SystemPermissionType("actpatview");
  
  /**
   * Assign activity from queue
   * Permission to assign an activity from a queue
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTQUEUEASSIGN = new typekey.SystemPermissionType("actqueueassign");
  
  /**
   * Get next activity from queue
   * Permission to get the next activity off of a queue
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTQUEUENEXT = new typekey.SystemPermissionType("actqueuenext");
  
  /**
   * Pick activity from queue
   * Permission to pick an activity from a queue
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTQUEUEPICK = new typekey.SystemPermissionType("actqueuepick");
  
  /**
   * Reassign owned activities
   * Permission to reassign your own activities
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTRAOWN = new typekey.SystemPermissionType("actraown");
  
  /**
   * Reassign unowned activities
   * Permission to reassign activities owned by other users
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTRAUNOWN = new typekey.SystemPermissionType("actraunown");
  
  /**
   * Review assignments
   * Permission to review and approve manually-approved assignables
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTREVIEWASSIGN = new typekey.SystemPermissionType("actreviewassign");
  
  /**
   * View activities
   * Permission to view activities
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTVIEW = new typekey.SystemPermissionType("actview");
  
  /**
   * View All activity queues
   * Permission to view all activity queues, even those in other security zones
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTVIEWALLQUEUES = new typekey.SystemPermissionType("actviewallqueues");
  
  /**
   * Execute Data Change
   * Permission to execute the data change.
   */
  public static final typekey.SystemPermissionType TC_ADMINDATACHANGEEXEC = new typekey.SystemPermissionType("admindatachangeexec");
  
  /**
   * View Data Change
   * Permission to view the data change page.
   */
  public static final typekey.SystemPermissionType TC_ADMINDATACHANGEVIEW = new typekey.SystemPermissionType("admindatachangeview");
  
  /**
   * View authority limit profiles
   * Permission to view authority limit profiles
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ALPVIEW = new typekey.SystemPermissionType("alpview");
  
  /**
   * Create contact with any tag
   * Permission to create a new contact regardless of which tag(s) it has
   */
  public static final typekey.SystemPermissionType TC_ANYTAGCREATE = new typekey.SystemPermissionType("anytagcreate");
  
  /**
   * Delete contact with any tag
   * Permission to delete a contact regardless of which tag(s) it has
   */
  public static final typekey.SystemPermissionType TC_ANYTAGDELETE = new typekey.SystemPermissionType("anytagdelete");
  
  /**
   * Edit contact with any tag
   * Permission to edit the details of a contact regardless of which tag(s) it has
   */
  public static final typekey.SystemPermissionType TC_ANYTAGEDIT = new typekey.SystemPermissionType("anytagedit");
  
  /**
   * View contact with any tag
   * Permission to view the details of a contact regardless of which tag(s) it has
   */
  public static final typekey.SystemPermissionType TC_ANYTAGVIEW = new typekey.SystemPermissionType("anytagview");
  
  /**
   * Archive objects
   * Permission to archive objects
   */
  public static final typekey.SystemPermissionType TC_ARCHIVE = new typekey.SystemPermissionType("archive");
  
  /**
   * Manage attributes
   * Permission to create, edit, or delete user attributes
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ATTRMANAGE = new typekey.SystemPermissionType("attrmanage");
  
  /**
   * View attributes
   * Permission to view the list of user attributes or attribute details
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ATTRVIEW = new typekey.SystemPermissionType("attrview");
  
  /**
   * Manage business week
   * Permission to create, edit, or delete business week
   */
  public static final typekey.SystemPermissionType TC_BUSWKMANAGE = new typekey.SystemPermissionType("buswkmanage");
  
  /**
   * View business week
   * Permission to view the list of business week
   */
  public static final typekey.SystemPermissionType TC_BUSWKVIEW = new typekey.SystemPermissionType("buswkview");
  
  /**
   * Change Contact Subtype
   * Permission to change contact subtype
   */
  public static final typekey.SystemPermissionType TC_CHANGECONTACTSUBTYPE = new typekey.SystemPermissionType("changecontactsubtype");
  
  /**
   * Client Application
   * Client Application (should not access via UI)
   */
  public static final typekey.SystemPermissionType TC_CLIENTAPP = new typekey.SystemPermissionType("clientapp");
  
  /**
   * Create local contacts
   * Permission to create a new local contact
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CTCCREATE = new typekey.SystemPermissionType("ctccreate");
  
  /**
   * Edit local contacts
   * Permission to edit an existing local contact
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CTCEDIT = new typekey.SystemPermissionType("ctcedit");
  
  /**
   * View local contacts
   * Permission to view and search local contact entries
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CTCVIEW = new typekey.SystemPermissionType("ctcview");
  
  /**
   * Always access debug tools
   * Permission to access debug tools, even when they are disabled by a configuration parameter
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_DEBUGTOOLS = new typekey.SystemPermissionType("debugtools");
  
  /**
   * Delete Runtime Properties
   * Permission to delete Runtime Properties
   */
  public static final typekey.SystemPermissionType TC_DELETEPROPERTIES = new typekey.SystemPermissionType("deleteproperties");
  
  /**
   * Create documents
   * Permission to add documents
   */
  public static final typekey.SystemPermissionType TC_DOCCREATE = new typekey.SystemPermissionType("doccreate");
  
  /**
   * Delete documents
   * Permission to remove documents
   */
  public static final typekey.SystemPermissionType TC_DOCDELETE = new typekey.SystemPermissionType("docdelete");
  
  /**
   * Edit documents
   * Permission to edit documents
   */
  public static final typekey.SystemPermissionType TC_DOCEDIT = new typekey.SystemPermissionType("docedit");
  
  /**
   * Modify all documents
   * Permission to edit or delete all documents, regardless of the permissions set on the individual documents
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_DOCMODIFYALL = new typekey.SystemPermissionType("docmodifyall");
  
  /**
   * View documents
   * Permission to view documents
   */
  public static final typekey.SystemPermissionType TC_DOCVIEW = new typekey.SystemPermissionType("docview");
  
  /**
   * View all documents
   * Permission to view all documents, regardless of the permissions set on the individual documents
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_DOCVIEWALL = new typekey.SystemPermissionType("docviewall");
  
  /**
   * Edit Inbound Files
   * Permission to edit inbound files and records
   */
  public static final typekey.SystemPermissionType TC_EDITINBOUNDFILES = new typekey.SystemPermissionType("editinboundfiles");
  
  /**
   * Edit obfuscated user contact
   * Permission to edit obfuscated user contacts
   */
  public static final typekey.SystemPermissionType TC_EDITOBFUSCATEDUSERCONTACT = new typekey.SystemPermissionType("editobfuscatedusercontact");
  
  /**
   * Edit Outbound Files
   * Permission to edit outbound files and records
   */
  public static final typekey.SystemPermissionType TC_EDITOUTBOUNDFILES = new typekey.SystemPermissionType("editoutboundfiles");
  
  /**
   * Edit Runtime Properties
   * Permission to edit Runtime Properties
   */
  public static final typekey.SystemPermissionType TC_EDITPROPERTIES = new typekey.SystemPermissionType("editproperties");
  
  /**
   * Event Data Access
   * (Obsolete): Events API authorization is now controlled by Role Authorizer
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_EVENTDATAACCESS = new typekey.SystemPermissionType("eventdataaccess");
  
  /**
   * View event messages
   * Permission to view the event messages page
   */
  public static final typekey.SystemPermissionType TC_EVENTMESSAGEVIEW = new typekey.SystemPermissionType("eventmessageview");
  
  /**
   * Event Schema Access
   * (Obsolete): Events API authorization is now controlled by Role Authorizer
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_EVENTSCHEMAACCESS = new typekey.SystemPermissionType("eventschemaaccess");
  
  /**
   * Export Runtime Properties
   * Permission to export Runtime Properties
   */
  public static final typekey.SystemPermissionType TC_EXPORTPROPERTIES = new typekey.SystemPermissionType("exportproperties");
  
  /**
   * Create groups
   * Permission to create groups
   */
  public static final typekey.SystemPermissionType TC_GROUPCREATE = new typekey.SystemPermissionType("groupcreate");
  
  /**
   * Delete groups
   * Permission to delete groups
   */
  public static final typekey.SystemPermissionType TC_GROUPDELETE = new typekey.SystemPermissionType("groupdelete");
  
  /**
   * Edit groups
   * Permission to edit groups
   */
  public static final typekey.SystemPermissionType TC_GROUPEDIT = new typekey.SystemPermissionType("groupedit");
  
  /**
   * View group tree
   * Permission to see the user/group tree on the Administration tab
   */
  public static final typekey.SystemPermissionType TC_GROUPTREEVIEW = new typekey.SystemPermissionType("grouptreeview");
  
  /**
   * View groups
   * Permission to view details of a group
   */
  public static final typekey.SystemPermissionType TC_GROUPVIEW = new typekey.SystemPermissionType("groupview");
  
  /**
   * Manage holidays
   * Permission to create, edit, and delete holidays
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_HOLIDAYMANAGE = new typekey.SystemPermissionType("holidaymanage");
  
  /**
   * View holidays
   * Permission to view a list of holidays or holiday details
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_HOLIDAYVIEW = new typekey.SystemPermissionType("holidayview");
  
  /**
   * Import Runtime Properties
   * Permission to import Runtime Properties
   */
  public static final typekey.SystemPermissionType TC_IMPORTPROPERTIES = new typekey.SystemPermissionType("importproperties");
  
  /**
   * Administer integration
   * Permission to administer integration events
   */
  public static final typekey.SystemPermissionType TC_INTEGADMIN = new typekey.SystemPermissionType("integadmin");
  
  /**
   * All internal tools
   * Permission to access all Internal Tools
   */
  public static final typekey.SystemPermissionType TC_INTERNALTOOLS = new typekey.SystemPermissionType("internaltools");
  
  /**
   * Print listviews
   * Permission to print listviews
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_LVPRINT = new typekey.SystemPermissionType("lvprint");
  
  /**
   * Manage load factors
   * Permission to modify the load factors on all users and groups
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_MANAGELDFCTRS = new typekey.SystemPermissionType("manageldfctrs");
  
  /**
   * Create notes
   * Permission to add notes
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_NOTECREATE = new typekey.SystemPermissionType("notecreate");
  
  /**
   * Delete notes
   * Permission to remove notes
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_NOTEDELETE = new typekey.SystemPermissionType("notedelete");
  
  /**
   * Edit note
   * Permission to edit the notes
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_NOTEEDIT = new typekey.SystemPermissionType("noteedit");
  
  /**
   * Edit note body
   * Permission to edit the body of notes
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_NOTEEDITBODY = new typekey.SystemPermissionType("noteeditbody");
  
  /**
   * View notes
   * Permission to view notes
   */
  public static final typekey.SystemPermissionType TC_NOTEVIEW = new typekey.SystemPermissionType("noteview");
  
  /**
   * Create organization
   * Permission to create an organization.
   */
  public static final typekey.SystemPermissionType TC_ORGCREATE = new typekey.SystemPermissionType("orgcreate");
  
  /**
   * Delete organization
   * Permission to delete an organization.
   */
  public static final typekey.SystemPermissionType TC_ORGDELETE = new typekey.SystemPermissionType("orgdelete");
  
  /**
   * Edit organization basic info
   * Permission to edit an organization's basic info.
   */
  public static final typekey.SystemPermissionType TC_ORGEDITBASIC = new typekey.SystemPermissionType("orgeditbasic");
  
  /**
   * Search for organization
   * Permission to search for organizations.
   */
  public static final typekey.SystemPermissionType TC_ORGSEARCH = new typekey.SystemPermissionType("orgsearch");
  
  /**
   * View organization basic info
   * Permission to view an organization's basic info.
   */
  public static final typekey.SystemPermissionType TC_ORGVIEWBASIC = new typekey.SystemPermissionType("orgviewbasic");
  
  /**
   * View and Edit Outbound Files
   * Permission to view and edit outbound files and records
   */
  public static final typekey.SystemPermissionType TC_OUTBOUNDFILES = new typekey.SystemPermissionType("outboundfiles");
  
  /**
   * Purge objects
   * Permission to purge objects from the database
   */
  public static final typekey.SystemPermissionType TC_PURGE = new typekey.SystemPermissionType("purge");
  
  /**
   * Manage regions
   * Permission to create, edit, and delete regions
   */
  public static final typekey.SystemPermissionType TC_REGIONMANAGE = new typekey.SystemPermissionType("regionmanage");
  
  /**
   * View regions
   * Permission to view the list of regions and region details
   */
  public static final typekey.SystemPermissionType TC_REGIONVIEW = new typekey.SystemPermissionType("regionview");
  
  /**
   * Administer reports
   * Administer report server settings
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REPORTING_ADMIN = new typekey.SystemPermissionType("reporting_admin");
  
  /**
   * View Report tab
   * Permission to view the Report tab, if the add-on reporting module is installed
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REPORTING_VIEW = new typekey.SystemPermissionType("reporting_view");
  
  /**
   * Request Contact Destruction
   * Permission to call the PersonalDataDestructionAPI to destroy contacts
   */
  public static final typekey.SystemPermissionType TC_REQUESTCONTACTDESTRUCTION = new typekey.SystemPermissionType("requestcontactdestruction");
  
  /**
   * REST unmask taxid
   * Permission to view unmasked taxid field values in REST API calls
   */
  public static final typekey.SystemPermissionType TC_RESTUNMASKTAXID = new typekey.SystemPermissionType("restunmasktaxid");
  
  /**
   * Resync message
   * Permission to resync message
   */
  public static final typekey.SystemPermissionType TC_RESYNCMESSAGE = new typekey.SystemPermissionType("resyncmessage");
  
  /**
   * Retry message
   * Permission to try to resend the failed message
   */
  public static final typekey.SystemPermissionType TC_RETRYMESSAGE = new typekey.SystemPermissionType("retrymessage");
  
  /**
   * View review summary details
   * Permission view the Review Summary page to see the category scores for each summarized Review
   */
  public static final typekey.SystemPermissionType TC_REVSUMVIEWDETAIL = new typekey.SystemPermissionType("revsumviewdetail");
  
  /**
   * View review summaries list
   * Permission to view the list of Reviews Summaries and the reviews tab on an ABContact
   */
  public static final typekey.SystemPermissionType TC_REVSUMVIEWLIST = new typekey.SystemPermissionType("revsumviewlist");
  
  /**
   * Manage roles
   * Permission to create, edit, or delete roles
   */
  public static final typekey.SystemPermissionType TC_ROLEMANAGE = new typekey.SystemPermissionType("rolemanage");
  
  /**
   * View roles
   * Permission to view the list of roles and role details
   */
  public static final typekey.SystemPermissionType TC_ROLEVIEW = new typekey.SystemPermissionType("roleview");
  
  /**
   * Administer rules
   * Permission to run Guidewire Studio or import rules
   */
  public static final typekey.SystemPermissionType TC_RULEADMIN = new typekey.SystemPermissionType("ruleadmin");
  
  /**
   * Manage script parameters
   * Permission to create, edit, or delete script parameters
   */
  public static final typekey.SystemPermissionType TC_SCRPRMMANAGE = new typekey.SystemPermissionType("scrprmmanage");
  
  /**
   * View script parameters
   * Permission to view the list of script parameters or details of an individual script parameter
   */
  public static final typekey.SystemPermissionType TC_SCRPRMVIEW = new typekey.SystemPermissionType("scrprmview");
  
  /**
   * Manage security zones
   * Permission to create, edit, and delete security zones
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SECZONEMANAGE = new typekey.SystemPermissionType("seczonemanage");
  
  /**
   * Skip message
   * Permission to skip the failed message
   */
  public static final typekey.SystemPermissionType TC_SKIPMESSAGE = new typekey.SystemPermissionType("skipmessage");
  
  /**
   * SOAP administration
   * Permission to use the SOAP APIs
   */
  public static final typekey.SystemPermissionType TC_SOAPADMIN = new typekey.SystemPermissionType("soapadmin");
  
  /**
   * Edit BatchProcess tools page
   * Permission to edit the BatchProcess Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSBATCHPROCESSEDIT = new typekey.SystemPermissionType("toolsBatchProcessedit");
  
  /**
   * View BatchProcess tools page
   * Permission to access the BatchProcess Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSBATCHPROCESSVIEW = new typekey.SystemPermissionType("toolsBatchProcessview");
  
  /**
   * View Cache Info page
   * Permission to view the CacheInfo Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSCACHEINFOVIEW = new typekey.SystemPermissionType("toolsCacheinfoview");
  
  /**
   * Edit Cluster tools page
   * Permission to edit the Cluster Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSCLUSTEREDIT = new typekey.SystemPermissionType("toolsClusteredit");
  
  /**
   * View Cluster tools page
   * Permission to access the Cluster Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSCLUSTERVIEW = new typekey.SystemPermissionType("toolsClusterview");
  
  /**
   * View Info tools page
   * Permission to access the Info Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSINFOVIEW = new typekey.SystemPermissionType("toolsInfoview");
  
  /**
   * Edit ManagementBeans tools page
   * Permission to edit the ManagementBeans presented on Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSJMXBEANSEDIT = new typekey.SystemPermissionType("toolsJMXBeansEdit");
  
  /**
   * View ManagementBeans tools page
   * Permission to access the ManagementBeans Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSJMXBEANSVIEW = new typekey.SystemPermissionType("toolsJMXBeansview");
  
  /**
   * Edit JProfiler tools page
   * Permission to edit the JProfiler Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSJPROFILEREDIT = new typekey.SystemPermissionType("toolsJProfileredit");
  
  /**
   * Edit Log tools page
   * Permission to edit the Log Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSLOGEDIT = new typekey.SystemPermissionType("toolsLogedit");
  
  /**
   * View Log tools page
   * Permission to access the Log Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSLOGVIEW = new typekey.SystemPermissionType("toolsLogview");
  
  /**
   * Edit StartablePlugin tools page
   * Permission to edit the StartablePlugin Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSPLUGINEDIT = new typekey.SystemPermissionType("toolsPluginedit");
  
  /**
   * View StartablePlugin tools page
   * Permission to access the StartablePlugin Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSPLUGINVIEW = new typekey.SystemPermissionType("toolsPluginview");
  
  /**
   * Edit Profiler tools page
   * Permission to edit the Profiler Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSPROFILEREDIT = new typekey.SystemPermissionType("toolsProfileredit");
  
  /**
   * View Profiler tools page
   * Permission to access the Profiler Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSPROFILERVIEW = new typekey.SystemPermissionType("toolsProfilerview");
  
  /**
   * Edit WorkQueue tools page
   * Permission to edit the WorkQueue Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSWORKQUEUEEDIT = new typekey.SystemPermissionType("toolsWorkQueueedit");
  
  /**
   * View WorkQueue tools page
   * Permission to access the WorkQueue Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSWORKQUEUEVIEW = new typekey.SystemPermissionType("toolsWorkQueueview");
  
  /**
   * Create users
   * Permission to create a new user
   */
  public static final typekey.SystemPermissionType TC_USERCREATE = new typekey.SystemPermissionType("usercreate");
  
  /**
   * Delete users
   * Permission to delete a user (Note: if a user has had any activity it's recommended to make them non-active rather than delete)
   */
  public static final typekey.SystemPermissionType TC_USERDELETE = new typekey.SystemPermissionType("userdelete");
  
  /**
   * Edit users
   * Permission to edit an existing user, except for roles, authority limits, or attributes
   */
  public static final typekey.SystemPermissionType TC_USEREDIT = new typekey.SystemPermissionType("useredit");
  
  /**
   * Edit user attributes
   * Permission to edit attributes for a user
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_USEREDITATTRS = new typekey.SystemPermissionType("usereditattrs");
  
  /**
   * Edit user language
   * Permission to edit language
   */
  public static final typekey.SystemPermissionType TC_USEREDITLANG = new typekey.SystemPermissionType("usereditlang");
  
  /**
   * Grant authority limits
   * Permission to grant or change an authority limit for a user
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_USERGRANTAUTH = new typekey.SystemPermissionType("usergrantauth");
  
  /**
   * Grant roles to users
   * Permission to grant or revoke roles
   */
  public static final typekey.SystemPermissionType TC_USERGRANTROLES = new typekey.SystemPermissionType("usergrantroles");
  
  /**
   * View user
   * Permission to view details of a user
   */
  public static final typekey.SystemPermissionType TC_USERVIEW = new typekey.SystemPermissionType("userview");
  
  /**
   * View all users
   * Permission to see users in all visible groups
   */
  public static final typekey.SystemPermissionType TC_USERVIEWALL = new typekey.SystemPermissionType("userviewall");
  
  /**
   * View activity calendar
   * Permission to view activity calendar of other users
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWACTCAL = new typekey.SystemPermissionType("viewactcal");
  
  /**
   * View Desktop
   * Permission to view the Desktop
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWDESKTOP = new typekey.SystemPermissionType("viewdesktop");
  
  /**
   * View Inbound Files
   * Permission to view inbound files and records
   */
  public static final typekey.SystemPermissionType TC_VIEWINBOUNDFILES = new typekey.SystemPermissionType("viewinboundfiles");
  
  /**
   * View Outbound Files
   * Permission to view outbound files and records
   */
  public static final typekey.SystemPermissionType TC_VIEWOUTBOUNDFILES = new typekey.SystemPermissionType("viewoutboundfiles");
  
  /**
   * View Runtime Properties screen
   * Permission to view Runtime Properties screen
   */
  public static final typekey.SystemPermissionType TC_VIEWPROPERTIES = new typekey.SystemPermissionType("viewproperties");
  
  /**
   * View Search
   * Permission to view the Search tab
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWSEARCH = new typekey.SystemPermissionType("viewsearch");
  
  /**
   * View Team
   * Permission to view the Team tab
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWTEAM = new typekey.SystemPermissionType("viewteam");
  
  /**
   * View global workload
   * Permission to view global workload statistics of other users
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWWORKLOAD = new typekey.SystemPermissionType("viewworkload");
  
  /**
   * Manage workflow
   * Permission to view the ManageWorkflow page
   */
  public static final typekey.SystemPermissionType TC_WORKFLOWMANAGE = new typekey.SystemPermissionType("workflowmanage");
  
  /**
   * View workflow
   * Permission to view the Workflow page
   */
  public static final typekey.SystemPermissionType TC_WORKFLOWVIEW = new typekey.SystemPermissionType("workflowview");
  
  /**
   * Add Data Change
   * Permission to add a data change gosu program.
   */
  public static final typekey.SystemPermissionType TC_WSDATACHANGEEDIT = new typekey.SystemPermissionType("wsdatachangeedit");
  
  /**
   * Manage admin zones
   * Permission to create, edit, or delete admin zones
   */
  public static final typekey.SystemPermissionType TC_ZONEMANAGE = new typekey.SystemPermissionType("zonemanage");
  
  /**
   * View admin zones
   * Permission to view the list of admin zones
   */
  public static final typekey.SystemPermissionType TC_ZONEVIEW = new typekey.SystemPermissionType("zoneview");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.SystemPermissionType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.SystemPermissionType>("SystemPermissionType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private SystemPermissionType(java.lang.String code)  {
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
  public typekey.SystemPermissionType get() {
    return this;
  }
  
  public static typekey.SystemPermissionType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.SystemPermissionType> getAllTypeKeys() {
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
  
  public static typekey.SystemPermissionType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.SystemPermissionType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.SystemPermissionType[]{});
  }
  
  public static java.util.List<typekey.SystemPermissionType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.SystemPermissionType getValue() {
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
    com.guidewire._generated.typekey.SystemPermissionTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.SystemPermissionType>() {
      public void clearCache(typekey.SystemPermissionType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.SystemPermissionType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.SystemPermissionType newInstance(java.lang.String code) {
        return new typekey.SystemPermissionType(code);
      }
      
      
    });
  }
}