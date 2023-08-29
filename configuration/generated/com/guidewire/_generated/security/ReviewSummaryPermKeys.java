package com.guidewire._generated.security;

import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class ReviewSummaryPermKeys {
  public static final StaticPermissionKey VIEW = new StaticPermissionKey("view", entity.ReviewSummary.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("revsumviewdetail").withDescription("Permission view the Review Summary page to see the category scores for each summarized Review").build());
  
  public static final StaticPermissionKey LIST = new StaticPermissionKey("list", entity.ReviewSummary.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("revsumviewlist").withDescription("Permission to view the list of Reviews Summaries and the reviews tab on an ABContact").build());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(LIST);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}