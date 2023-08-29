package gw.api.data

uses gw.api.databuilder.AddressBuilder
uses gw.api.databuilder.CredentialBuilder
uses gw.api.databuilder.RoleBuilder
uses gw.api.databuilder.UserBuilder
uses gw.api.databuilder.UserContactBuilder

@Export
class UserProvider {

  private construct() {
  }

  public static function createPortalUser() : User {
    var puUser : User

    gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      var puRole = new RoleBuilder()
          .withNameAndPublicId("Portal User")
          .withPermission(TC_ABVIEW)
          .withPermission(TC_ANYTAGVIEW)
          .withPermission(TC_ABVIEWSEARCH)
          .create(bundle)

      puUser = new UserBuilder()
          .withCredential(new CredentialBuilder().withUserName("pu").withPassword("password"))
          .withRole(puRole)
          .withContact(new UserContactBuilder()
              .withName("Portal", "User")
              .withPrimaryAddress(new AddressBuilder()
                  .withAddressLine1("Maple Drive")
                  .withCity("San Mateo"))
              .withHomePhone(""))
          .create(bundle)
    })

    return puUser
  }
}
