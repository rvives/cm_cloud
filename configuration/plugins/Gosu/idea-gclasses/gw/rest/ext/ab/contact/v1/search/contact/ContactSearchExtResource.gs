package gw.rest.ext.ab.contact.v1.search.contact

uses gw.api.modules.rest.framework.v1.exceptions.LocalizedExceptionUtil
uses gw.api.util.TypeUtil
uses gw.rest.core.ab.contact.v1.search.contact.ContactSearchCoreResource

uses gw.rest.core.ab.contact.v1.JsonConstants.ContactSearch#CONTACT_SUB_TYPE

@Export
class ContactSearchExtResource extends ContactSearchCoreResource {

  override function hasMinimumSearchCriteria(contactSearchCriteria : ABContactSearchCriteria) : boolean {
    return super.hasMinimumSearchCriteria(contactSearchCriteria)
        || contactSearchCriteria.KeywordKanji.NotBlank
  }

  override function validateNameCriteria() {
    super.validateNameCriteria()
    var attributes = _data.Attributes
    var firstNameKanji = attributes.getString("firstNameKanji")
    var lastNameKanji = attributes.getString("lastNameKanji")
    var nameKanji = attributes.getString("nameKanji")
    var subtype = attributes.getTypekey(CONTACT_SUB_TYPE, typekey.ABContact)

    if (TypeUtil.isNominallyOrStructurallyAssignable(ABPerson.Type, subtype.EntityType) && nameKanji.NotBlank) {
      throw LocalizedExceptionUtil.badInput("Rest.Contact.V1.Search.ABPerson.InvalidProperty", {subtype.Code, getAllowedContactSubtypes({ABCompany, ABPlace})})
    } else if (TypeUtil.isNominallyOrStructurallyAssignable(ABCompany.Type, subtype.EntityType)
        && (firstNameKanji.NotBlank || lastNameKanji.NotBlank)) {
      throw LocalizedExceptionUtil.badInput("Rest.Contact.V1.Search.ABCompany.InvalidProperty", {subtype.Code, getAllowedContactSubtypes({ABPerson})})
    }
  }
}