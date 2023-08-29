package gw.rest.ext.ab.common.v1.address.i18n

uses entity.Address

@Export
enhancement ABIntlAddressEnhancement : Address {
  /**
   * Handles setting CEDEX code and the flag.
   *
   * @param code The CEDEX code
   */
  property set CEDEXCode(code : String) {
    if (code != null) {
      this.CEDEXBureau = code
      this.CEDEX = true
    }
  }

  property get CEDEXCode() : String {
    return this.CEDEXBureau
  }
}