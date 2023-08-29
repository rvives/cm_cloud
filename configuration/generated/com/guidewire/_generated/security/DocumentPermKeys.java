package com.guidewire._generated.security;

import com.guidewire.pl.system.security.ObjectPermissionKey;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import com.guidewire.pl.system.security.impl.DocumentCreatePermissionHandler;
import com.guidewire.pl.system.security.impl.DocumentDeletePermissionHandler.Wrap;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class DocumentPermKeys {
  public static final StaticPermissionKey CREATE = new StaticPermissionKey("create", entity.Document.class.getSimpleName(), new DocumentCreatePermissionHandler());
  
  public static final ObjectPermissionKey VIEW = new ObjectPermissionKey("view", entity.Document.class.getSimpleName(), new com.guidewire.pl.system.security.impl.DocumentViewPermissionHandler.Wrap());
  
  public static final ObjectPermissionKey EDIT = new ObjectPermissionKey("edit", entity.Document.class.getSimpleName(), new com.guidewire.pl.system.security.impl.DocumentEditPermissionHandler.Wrap());
  
  public static final ObjectPermissionKey DELETE = new ObjectPermissionKey("delete", entity.Document.class.getSimpleName(), new Wrap());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(CREATE);
    permissionKeys.add(VIEW);
    permissionKeys.add(EDIT);
    permissionKeys.add(DELETE);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}