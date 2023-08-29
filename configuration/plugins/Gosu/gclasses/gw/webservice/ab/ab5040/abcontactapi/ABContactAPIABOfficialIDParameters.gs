package gw.webservice.ab.ab5040.abcontactapi

// Make it @Export because it corresponds to the ABOfficialID entity
// which the customer may extend.
@Export
@gw.xml.ws.annotation.WsiExportable("http://guidewire.com/ab/ws/gw/webservice/ab/ab5040/abcontactapi/ABContactAPIABOfficialIDParameters")
final class ABContactAPIABOfficialIDParameters {

  public var OfficialIDValue : String
  public var OfficialIDType : typekey.OfficialIDType
  public var State : typekey.Jurisdiction
}