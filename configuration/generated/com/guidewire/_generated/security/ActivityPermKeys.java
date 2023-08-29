package com.guidewire._generated.security;

import com.guidewire.pl.domain.activity.ApproveActivityPermissionHandler;
import com.guidewire.pl.domain.activity.impl.ActivityAssignFromQueuePermissionHandler;
import com.guidewire.pl.domain.activity.impl.ActivityNextFromQueuePermissionHandler;
import com.guidewire.pl.domain.activity.impl.ActivityPickFromQueuePermissionHandler;
import com.guidewire.pl.domain.activity.impl.ActivityViewAllQueuesPermissionHandler;
import com.guidewire.pl.domain.activity.impl.ActivityViewQueuePermissionHandler;
import com.guidewire.pl.domain.activity.impl.EditActivityPermissionHandler;
import com.guidewire.pl.domain.assignment.impl.ActivityAssignmentPermissionHandler;
import com.guidewire.pl.system.security.ObjectPermissionKey;
import com.guidewire.pl.system.security.OptionalObjectPermissionKey;
import com.guidewire.pl.system.security.PermissionKey;
import com.guidewire.pl.system.security.StaticPermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class ActivityPermKeys {
  public static final OptionalObjectPermissionKey VIEW = new OptionalObjectPermissionKey("view", entity.Activity.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("actview").withDescription("Permission to view an activity").build());
  
  public static final ObjectPermissionKey EDIT = new ObjectPermissionKey("edit", entity.Activity.class.getSimpleName(), new EditActivityPermissionHandler());
  
  public static final OptionalObjectPermissionKey MAKEMANDATORY = new OptionalObjectPermissionKey("makemandatory", entity.Activity.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("actmakemand").withDescription("Permission to make activities mandatory").build());
  
  public static final ObjectPermissionKey ASSIGN = new ObjectPermissionKey("assign", entity.Activity.class.getSimpleName(), new ActivityAssignmentPermissionHandler());
  
  public static final ObjectPermissionKey APPROVE = new ObjectPermissionKey("approve", entity.Activity.class.getSimpleName(), new ApproveActivityPermissionHandler());
  
  public static final StaticPermissionKey APPROVEANY = new StaticPermissionKey("approveany", entity.Activity.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("actapproveany").withDescription("Permission to approve any approval activity").build());
  
  public static final StaticPermissionKey REVIEWASSIGNMENT = new StaticPermissionKey("reviewassignment", entity.Activity.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("actreviewassign").withDescription("Permission to complete assignment review activities").build());
  
  public static final OptionalObjectPermissionKey OWN = new OptionalObjectPermissionKey("own", entity.Activity.class.getSimpleName(), com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("actown").withDescription("Permission to own activities").build());
  
  public static final StaticPermissionKey NEXTFROMQUEUE = new StaticPermissionKey("nextfromqueue", entity.Activity.class.getSimpleName(), new ActivityNextFromQueuePermissionHandler());
  
  public static final StaticPermissionKey PICKFROMQUEUE = new StaticPermissionKey("pickfromqueue", entity.Activity.class.getSimpleName(), new ActivityPickFromQueuePermissionHandler());
  
  public static final StaticPermissionKey ASSIGNFROMQUEUE = new StaticPermissionKey("assignfromqueue", entity.Activity.class.getSimpleName(), new ActivityAssignFromQueuePermissionHandler());
  
  public static final StaticPermissionKey VIEWQUEUE = new StaticPermissionKey("viewqueue", entity.Activity.class.getSimpleName(), new ActivityViewQueuePermissionHandler());
  
  public static final StaticPermissionKey VIEWALLQUEUES = new StaticPermissionKey("viewallqueues", entity.Activity.class.getSimpleName(), new ActivityViewAllQueuesPermissionHandler());
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(VIEW);
    permissionKeys.add(EDIT);
    permissionKeys.add(MAKEMANDATORY);
    permissionKeys.add(ASSIGN);
    permissionKeys.add(APPROVE);
    permissionKeys.add(APPROVEANY);
    permissionKeys.add(REVIEWASSIGNMENT);
    permissionKeys.add(OWN);
    permissionKeys.add(NEXTFROMQUEUE);
    permissionKeys.add(PICKFROMQUEUE);
    permissionKeys.add(ASSIGNFROMQUEUE);
    permissionKeys.add(VIEWQUEUE);
    permissionKeys.add(VIEWALLQUEUES);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}