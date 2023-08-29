package entity;

/**
 * RootInfo
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RootInfo.eti;RootInfo.eix;RootInfo.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface RootInfo extends entity.KeyableBean, com.guidewire.commons.metadata.internal.version.MetadataVersionProvider {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RootInfo> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RootInfo>("entity.RootInfo");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ArchiveDate", "ArchiveDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILURE_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("ArchiveFailure", "ArchiveFailureID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILUREDETAILS_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("ArchiveFailureDetails", "ArchiveFailureDetailsID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVESCHEMAINFO_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("ArchiveSchemaInfo", "ArchiveSchemaInfo");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ARCHIVESTATE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("ArchiveState", "ArchiveState");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEDENTITYPURGEDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ArchivedEntityPurgeDate", "ArchivedEntityPurgeDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEREASON_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ExcludeReason", "ExcludeReason");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEDFROMARCHIVE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ExcludedFromArchive", "ExcludedFromArchive");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PENDINGREINDEX_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PendingReindex", "PendingReindex");
  
  /**
   * This method will return true if this object can be restored at this time.  There are two possible reason why this
   * would be false.  1.  the object was not archived in the first place; 2.  The archive source is not currently available
   * @return true if okay to restore
   */
  public boolean canRestore();
  
  
  /**
   * Gets the value of the ArchiveDate field.
   * When archiving was attempted on the root. Null if we never attempted to archive it.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getArchiveDate();
  
  
  /**
   * Gets the value of the ArchiveFailure field.
   * Short version of the reason for a failure to archive
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArchiveFailure getArchiveFailure();
  
  
  /**
   * Gets the value of the ArchiveFailureDetails field.
   * Full details of archive failure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArchiveFailureDetails getArchiveFailureDetails();
  
  
  /**
   * Gets the value of the ArchiveSchemaInfo field.
   * Schema version at which the root was archived or null if it was not archived
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UpgradeDatamodelInfo getArchiveSchemaInfo();
  
  
  /**
   * Gets the value of the ArchiveState field.
   * The archive state of the graph
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ArchiveState getArchiveState();
  
  
  /**
   * Gets the value of the ArchivedEntityPurgeDate field.
   * Date when archived entity will be eligible for Purge
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getArchivedEntityPurgeDate();
  
  
  /**
   * Gets the value of the ExcludeReason field.
   * Reason for excluding or skipping the entity from archiving. If the ExcludeFromArchive bit is set, this gives the reason for excluding. Else, if this is not null, it is the reason for skipping.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExcludeReason();
  
  
  /**
   * Returns the publicID of the root entity.
   * <p>
   * PublicID values are automatically created during the commit, if not previously set. The format is random, meeting security requirements based on current industry standards. For example:
   * <ul>
   *   <li>pc:SYinDB2XTOgNZFs1NpxU8
   *   <li>pc:Sf8QS4N5RBS-h8_pj-Oy_
   *   <li>pc:SBwBzylneecSNr6_Ub4IO
   * </ul>
   * Your configuration code must not assume any particular format for PublicID values, in either the prefix or body portion of the string, or even assume the existence of a prefix. Do not make any assumptions at all about the content of a PublicID value, including expectations that values are sequential, numeric, or prefixed.
   * <p>
   * @return The external id of the root.
   */
  public java.lang.String getPublicIDOfRoot();
  
  
  /**
   * Gets the value of the ExcludedFromArchive field.
   * Indicate if this entity should be excluded from archiving
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExcludedFromArchive();
  
  
  /**
   * Gets the value of the PendingReindex field.
   * Indicate that the archived entity is pending for re-indexing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPendingReindex();
  
  
  /**
   * Report an issue that prevents this item from being archived. Usually called by a rule when it has determined that the item is not
   * ready to be archived yet. Unlike skipFromArchiving(), this method does not return immediately and subsequent rules are processed.
   * @param message The reason for skipping.
   */
  public void reportArchiveProblem(java.lang.String message);
  
  
  /**
   * Reset flag that marks the graph as excluded for archiving
   */
  public void resetToPreArchivedState();
  
  
  /**
   * Schedule this item for archival
   */
  public void scheduleForArchive();
  
  
  /**
   * Sets the value of the ArchivedEntityPurgeDate field.
   */
  public void setArchivedEntityPurgeDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PendingReindex field.
   */
  public void setPendingReindex(java.lang.Boolean value);
  
  
  /**
   * Sets the root public ID to the passed value.
   * <ul>
   *    <li>Do not change the publicID once it is exposed externally.</li>
   *    <li>The publicID must be unique.</li>
   *    <li>The publicID must not leak information.</li>
   *   </ul>
   * If you do not set the publicID manually, then it is automatically set upon commit.
   * @param value the value to be set as the publicID of the root entity.
   */
  public void setPublicIDOfRoot(java.lang.String value);
  
  
  /**
   * Skip archival of this item. Usually called by a rule when it has determined that the item is not ready to be archived yet.
   * Unlike reportArchiveProblem(), this method returns immediately and no more rules are processed.
   * @param message The reason for skipping.
   */
  public void skipFromArchiving(java.lang.String message);
  
  
  
}