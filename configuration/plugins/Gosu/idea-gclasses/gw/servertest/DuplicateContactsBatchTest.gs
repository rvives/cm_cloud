package gw.servertest

uses gw.api.databuilder.ABPersonBuilder
uses gw.api.databuilder.AddressBuilder
uses gw.api.databuilder.UniqueKeyGenerator
uses gw.api.test.ABServerTestClassBase
uses gw.api.util.DateUtil
uses gw.batchprocess.BatchProcessTestUtil
uses gw.domain.contact.DuplicateContactPairFinder
uses gw.domain.contact.DuplicateContactSearchCriteria
uses gw.suites.ABExampleServerSuite
uses gw.testharness.v3.Suites
uses gw.workqueue.WorkQueueTestUtil

@Export
@Suites(ABExampleServerSuite.NAME)
class DuplicateContactsBatchTest extends ABServerTestClassBase {

  function testDuplicateContactsBatch() {
    var uniqueID = UniqueKeyGenerator.get().nextInteger()
    var firstName = "Person${uniqueID}"
    var lastName = "Contact${uniqueID}"
    var addressLine1 = "${uniqueID} Test Lane"
    var homePhoneNumber = "4155551212"
    var homePhoneCountry = PhoneCountryCode.TC_US
    var dateOfBirth = DateUtil.currentDate().addYears(-32);

    var firstDuplicate : ABPerson = new ABPersonBuilder()
        .withFirstName(firstName)
        .withLastName(lastName)
        .withTaxID()
        .withTags({ContactTagType.TC_CLAIMPARTY})
        .withDateOfBirth(dateOfBirth)
        .withHomePhone(homePhoneNumber)
        .withHomePhoneCountry(homePhoneCountry)
        .withPrimaryAddress(new AddressBuilder().withAddressLine1(addressLine1)).create()
    var secondDuplicate : ABPerson = new ABPersonBuilder()
        .withFirstName(firstName)
        .withLastName(lastName)
        .withTaxID(firstDuplicate.TaxID)
        .withTags({ContactTagType.TC_CLAIMPARTY})
        .withDateOfBirth(dateOfBirth)
        .withHomePhone(homePhoneNumber)
        .withHomePhoneCountry(homePhoneCountry)
        .withPrimaryAddress(new AddressBuilder().withAddressLine1(addressLine1)).createAndCommit()
    Logger.info("Created Duplicate Contacts: ${firstName} ${lastName}")

    BatchProcessTestUtil.startAndWaitUntilWorkFinishedEndToEnd(BatchProcessType.TC_DUPLICATECONTACTS, 10000, null)
    WorkQueueTestUtil.restartWorkersAndWaitUntilWorkFinishedThenStop(BatchProcessType.TC_DUPLICATECONTACTS)

    var criteria = new DuplicateContactSearchCriteria()
    criteria.Name = firstDuplicate.LastName
    criteria.LastRun = true
    criteria.MatchType = DuplicateContactSearchCriteria.MatchType.ALL
    var duplicateContactPairs = DuplicateContactPairFinder.findDuplicateContactPairs(criteria).single()
    assertThat({duplicateContactPairs.Contact, duplicateContactPairs.DuplicateContact}.sort()).isEqualTo({firstDuplicate, secondDuplicate}.sort())
  }

}