package gw.api.databuilder

uses entity.ABOfficialID

@Export
class ABOfficialIDBuilder extends DataBuilder<ABOfficialID, ABOfficialIDBuilder> {

  construct() {
    super(ABOfficialID)
  }

  function withOfficialType() : ABOfficialIDBuilder {
    return withOfficialType(OfficialIDType.TC_BUREAUID)
  }

  function withOfficialType(name : OfficialIDType) : ABOfficialIDBuilder {
    set(ABOfficialID.Type.TypeInfo.getProperty("OfficialIDType"), name)
    return this
  }

  function withOfficialValue() : ABOfficialIDBuilder {
    return withOfficialValue(UniqueKeyGenerator.get().nextID())
  }

  function withOfficialValue(name : String) : ABOfficialIDBuilder {
    set(ABOfficialID.Type.TypeInfo.getProperty("OfficialIDValue"), name)
    return this
  }

  function withJurisdiction(juri : Jurisdiction) : ABOfficialIDBuilder {
    set(ABOfficialID.Type.TypeInfo.getProperty("State"), juri)
    return this
  }

  function withJurisdiction() : ABOfficialIDBuilder {
    return withJurisdiction(Jurisdiction.TC_AB)
  }
}