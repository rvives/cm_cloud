package gw.webservice.ab.ab5040.abcontactapi

uses gw.webservice.ab.ab5040.abcontactapi.ABContactAPISearchResult
uses gw.webservice.ab.ab5040.abcontactapi.IABContactAPISearchResult
uses gw.webservice.ab.ab5040.abcontactapi.IABContactAPISearchResultContainer

@Export
@gw.xml.ws.annotation.WsiExportable( "http://guidewire.com/ab/ws/gw/webservice/ab/ab5040/abcontactapi/ABContactAPISearchResultContainer" )
final class ABContactAPISearchResultContainer implements IABContactAPISearchResultContainer {

  var _totalResults : Integer as TotalResults
  public var Results      : ABContactAPISearchResult[]

  override function updateResults(value: List<IABContactAPISearchResult>) {
    Results = value.toArray(new ABContactAPISearchResult[value.size()])
  }
}
