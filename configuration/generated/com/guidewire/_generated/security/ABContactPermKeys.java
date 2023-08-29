package com.guidewire._generated.security;

import com.guidewire.ab.domain.addressbook.impl.CustomDeleteABContactPermissionHandler;
import com.guidewire.ab.domain.addressbook.impl.CustomEditABContactPermissionHandler;
import com.guidewire.pl.domain.contact.security.CreateABContactPermissionHandler;
import com.guidewire.pl.domain.contact.security.ViewABContactPermissionHandler;
import com.guidewire.pl.system.security.ObjectPermissionKey;
import com.guidewire.pl.system.security.OptionalObjectPermissionKey;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class ABContactPermKeys {
  public static final OptionalObjectPermissionKey VIEW = new OptionalObjectPermissionKey("view", entity.ABContact.class.getSimpleName(), new ViewABContactPermissionHandler());
  
  public static final StaticPermissionKey VIEWSEARCH = new StaticPermissionKey("viewsearch", entity.ABContact.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("abviewsearch").withDescription("Permission to search contact entries in the address book").build());
  
  public static final StaticPermissionKey VIEWMERGE = new StaticPermissionKey("viewmerge", entity.ABContact.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("abviewmerge").withDescription("Permission to view the merge pages").build());
  
  public static final StaticPermissionKey VIEWPENDING = new StaticPermissionKey("viewpending", entity.ABContact.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("abviewpending").withDescription("Permission to view the pending changes page").build());
  
  public static final OptionalObjectPermissionKey CREATE = new OptionalObjectPermissionKey("create", entity.ABContact.class.getSimpleName(), new CreateABContactPermissionHandler());
  
  public static final StaticPermissionKey CREATEPREFERRED = new StaticPermissionKey("createpreferred", entity.ABContact.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("abcreatepref").withDescription("Permission to add a preferred vendor to the address book").build());
  
  public static final ObjectPermissionKey EDIT = new ObjectPermissionKey("edit", entity.ABContact.class.getSimpleName(), new CustomEditABContactPermissionHandler());
  
  public static final StaticPermissionKey EDITPREFERRED = new StaticPermissionKey("editpreferred", entity.ABContact.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("abeditpref").withDescription("Permission to modify a preferred vendor AB Contact or change an existing contact to be a preferred vendor").build());
  
  public static final OptionalObjectPermissionKey DELETE = new OptionalObjectPermissionKey("delete", entity.ABContact.class.getSimpleName(), new CustomDeleteABContactPermissionHandler());
  
  public static final StaticPermissionKey DELETEPREFERRED = new StaticPermissionKey("deletepreferred", entity.ABContact.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("abdeletepref").withDescription("Permission to delete a preferred vendor AB Contact").build());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(VIEWSEARCH);
    permissionKeys.add(VIEWMERGE);
    permissionKeys.add(VIEWPENDING);
    permissionKeys.add(CREATE);
    permissionKeys.add(CREATEPREFERRED);
    permissionKeys.add(EDIT);
    permissionKeys.add(EDITPREFERRED);
    permissionKeys.add(DELETE);
    permissionKeys.add(DELETEPREFERRED);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}