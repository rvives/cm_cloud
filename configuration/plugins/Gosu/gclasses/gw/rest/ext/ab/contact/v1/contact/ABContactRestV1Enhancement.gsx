package gw.rest.ext.ab.contact.v1.contact

uses gw.api.modules.rest.framework.v1.permission.RestPermissionUtil
uses gw.api.privacy.EncryptionMaskExpressions

@Export
enhancement ABContactRestV1Enhancement : ABContact {

  property get RestV1_MaskedTaxId() : String {
    //only show unmasked taxId field on responses if user/service has permission "restunmasktaxid"
    if (RestPermissionUtil.hasUnmaskedTaxIdPermission()) {
      return this.TaxID
    } else {
      return EncryptionMaskExpressions.maskTaxId(this.TaxID)
    }
  }
}