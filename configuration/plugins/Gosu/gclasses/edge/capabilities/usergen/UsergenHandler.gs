package edge.capabilities.usergen

uses edge.di.annotations.InjectableNode
uses edge.jsonrpc.AbstractRpcHandler
uses edge.jsonrpc.annotation.JsonRpcMethod
uses edge.jsonrpc.exception.JsonRpcSecurityException
uses gw.api.data.UserProvider
uses gw.api.system.PLConfigParameters

class UsergenHandler extends AbstractRpcHandler {

  @InjectableNode
  construct() {
  }

  @JsonRpcMethod
  public function generatePortalUser() {
    UserProvider.createPortalUser()
  }
}
