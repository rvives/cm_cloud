package edge.capabilities.vendor

uses edge.PlatformSupport.Bundle
uses edge.capabilities.vendor.dto.ProximitySearchCriteriaDTO
uses edge.capabilities.vendor.dto.ProximitySearchResultsDTO
uses edge.doc.ApidocAvailableSince
uses edge.doc.ApidocMethodDescription
uses edge.jsonrpc.annotation.JsonRpcMethod
uses edge.jsonrpc.AbstractRpcHandler
uses edge.di.annotations.InjectableNode

class VendorHandler extends AbstractRpcHandler {

  private var _proximitySearchPlugin : IProximitySearchPlugin

  @InjectableNode
  construct(proximitySearchPlugin : IProximitySearchPlugin) {

    this._proximitySearchPlugin = proximitySearchPlugin
  }

  @JsonRpcMethod
  @ApidocMethodDescription("Search for a vendor in the proximity.")
  @ApidocAvailableSince("6.0")
  public function proximitySearch(searchCriteria: ProximitySearchCriteriaDTO) : ProximitySearchResultsDTO {
    return _proximitySearchPlugin.search(searchCriteria)
  }
}
