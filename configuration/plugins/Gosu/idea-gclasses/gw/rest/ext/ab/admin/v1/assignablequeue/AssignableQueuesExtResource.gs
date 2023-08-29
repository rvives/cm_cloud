package gw.rest.ext.ab.admin.v1.assignablequeue

uses gw.rest.core.ab.admin.v1.assignablequeue.AssignableQueuesCoreResource
uses gw.rest.ext.ab.admin.v1.group.GroupExtResource

@Export
class AssignableQueuesExtResource extends AssignableQueuesCoreResource<GroupExtResource> {

}