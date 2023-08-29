package gw.webservice.ab.ab5040.abcontactapi

uses gw.webservice.ab.ab5040.abcontactapi.ABContactAPIRelatedContact
uses gw.webservice.ab.ab5040.abcontactapi.IABContactAPIRelatedContact
uses gw.webservice.ab.ab5040.abcontactapi.IRelatedContactInfoContainer

@Export
@gw.xml.ws.annotation.WsiExportable("http://guidewire.com/ab/ws/gw/webservice/ab/ab5040/abcontactapi/RelatedContactInfoContainer")
final class RelatedContactInfoContainer implements IRelatedContactInfoContainer {
  public var SourceRelatedContacts : gw.webservice.ab.ab5040.abcontactapi.ABContactAPIRelatedContact[]
  public var TargetRelatedContacts : gw.webservice.ab.ab5040.abcontactapi.ABContactAPIRelatedContact[]

  override function updateSourceRelatedContacts(value : List<gw.webservice.ab.ab5040.abcontactapi.IABContactAPIRelatedContact>) {
    SourceRelatedContacts = value.toArray(new gw.webservice.ab.ab5040.abcontactapi.ABContactAPIRelatedContact[value.size()])
  }

  override function updateTargetRelatedContacts(value : List<IABContactAPIRelatedContact>) {
    TargetRelatedContacts = value.toArray(new ABContactAPIRelatedContact[value.size()])
  }
}
