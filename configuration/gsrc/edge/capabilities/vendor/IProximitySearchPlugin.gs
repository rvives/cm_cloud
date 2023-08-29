package edge.capabilities.vendor

uses edge.capabilities.vendor.dto.ProximitySearchCriteriaDTO
uses edge.capabilities.vendor.dto.ProximitySearchResultsDTO

interface IProximitySearchPlugin {
  public function search(criteria: ProximitySearchCriteriaDTO) : ProximitySearchResultsDTO
}
