package com.guidewire._generated.security;

import com.guidewire.pl.system.security.PermissionKey;
import gw.entity.IEntityType;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.processing.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class PermKeyAccess {
  public static Map<IEntityType,List<PermissionKey>> getAllPermissionKeys() {
    Map<IEntityType,List<PermissionKey>> allPermissionKeys = new HashMap<>();
    allPermissionKeys.put(entity.ABContact.TYPE.get(), ABContactPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Activity.TYPE.get(), ActivityPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.ActivityPattern.TYPE.get(), ActivityPatternPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Attribute.TYPE.get(), AttributePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.AttributeUser.TYPE.get(), AttributeUserPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.BusinessWeek.TYPE.get(), BusinessWeekPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Contact.TYPE.get(), ContactPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Credential.TYPE.get(), CredentialPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Document.TYPE.get(), DocumentPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Group.TYPE.get(), GroupPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.GroupRegion.TYPE.get(), GroupRegionPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.GroupUser.TYPE.get(), GroupUserPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Holiday.TYPE.get(), HolidayPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Note.TYPE.get(), NotePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Region.TYPE.get(), RegionPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.ReviewSummary.TYPE.get(), ReviewSummaryPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.Role.TYPE.get(), RolePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.RolePrivilege.TYPE.get(), RolePrivilegePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.ScriptParameter.TYPE.get(), ScriptParameterPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.SecurityZone.TYPE.get(), SecurityZonePermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.User.TYPE.get(), UserPermKeys.getPermissionKeys());
    allPermissionKeys.put(entity.UserRole.TYPE.get(), UserRolePermKeys.getPermissionKeys());
    return java.util.Collections.unmodifiableMap(allPermissionKeys);
  }
  
  
}