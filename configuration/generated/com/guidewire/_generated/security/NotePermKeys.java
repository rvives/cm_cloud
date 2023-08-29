package com.guidewire._generated.security;

import com.guidewire.pl.system.security.ObjectPermissionKey;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import com.guidewire.pl.system.security.impl.NoteCreatePermissionHandler;
import com.guidewire.pl.system.security.impl.NoteDeletePermissionHandler.Wrap;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class NotePermKeys {
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.Note.class.getSimpleName(), new NoteCreatePermissionHandler());
  
  public static final ObjectPermissionKey VIEW = new ObjectPermissionKey("view", entity.Note.class.getSimpleName(), new com.guidewire.pl.system.security.impl.NoteViewPermissionHandler.Wrap());
  
  public static final ObjectPermissionKey EDIT = new ObjectPermissionKey("edit", entity.Note.class.getSimpleName(), new com.guidewire.pl.system.security.impl.NoteEditPermissionHandler.Wrap());
  
  public static final ObjectPermissionKey DELETE = new ObjectPermissionKey("delete", entity.Note.class.getSimpleName(), new Wrap());
  
  public static final ObjectPermissionKey EDITBODY = new ObjectPermissionKey("editbody", entity.Note.class.getSimpleName(), new com.guidewire.pl.system.security.impl.NoteEditBodyPermissionHandler.Wrap());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(CREATE);
    permissionKeys.add(VIEW);
    permissionKeys.add(EDIT);
    permissionKeys.add(DELETE);
    permissionKeys.add(EDITBODY);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}