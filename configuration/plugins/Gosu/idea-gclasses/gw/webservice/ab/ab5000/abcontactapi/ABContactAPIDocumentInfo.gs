package gw.webservice.ab.ab5000.abcontactapi

uses gw.webservice.ab.ab5000.abcontactapi.IABContactAPIDocumentInfo

/**
 * This is the ABContactAPI representation of a Document linked to a ABContact
 *
 * Make @Export because it corresponds to the Document entity which
 * the customer may extend.
 */
@Export
@gw.xml.ws.annotation.WsiExportable( "http://guidewire.com/ab/ws/gw/webservice/ab/ab5000/abcontactapi/ABContactAPIDocumentInfo" )
final class ABContactAPIDocumentInfo implements IABContactAPIDocumentInfo {

  public var MimeType           : String
  public var URL                : String
  public var DocUID             : String
  public var DMS                : Boolean
  public var Inbound            : Boolean
  public var Obsolete           : Boolean
  public var PendingDocUID      : String
  public var Name               : String
  public var Description        : String
  public var Status             : DocumentStatusType
  public var Author             : String
  public var Type               : DocumentType
  public var SecurityType       : DocumentSecurityType
  public var Section            : DocumentSection
  public var Language           : LanguageType
  public var DateCreated        : Date
  public var DateModified       : Date
  public var DocumentIdentifier : String
  public var Recipient          : String

  construct() {}

  construct(document : Document) {
    this.MimeType = document.MimeType
    this.URL = document.getUrl()
    this.DocUID = document.DocUID
    this.DMS = document.DMS
    this.Inbound = document.Inbound
    this.Obsolete = document.Obsolete
    this.PendingDocUID = document.PendingDocUID
    this.Name = document.Name
    this.Description = document.Description
    this.Status = document.Status
    this.Author = document.Author
    this.Type = document.Type
    this.SecurityType = document.SecurityType
    this.Section = document.Section
    this.Language = document.Language
    this.DateCreated = document.DateCreated
    this.DateModified = document.DateModified
    this.DocumentIdentifier = document.DocumentIdentifier
    this.Recipient = document.Recipient
  }
}