package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailsRowSet_ABPlaceExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/ContactDetailsRowSet.ABPlace.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailsRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef (id=tag) at ContactDetailsRowSet.ABPlace.pcf: line 57, column 17
    function def_onEnter_10 (def :  pcf.ContactTagRowSet) : void {
      def.onEnter(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 59, column 70
    function def_onEnter_12 (def :  pcf.NotesRowSet) : void {
      def.onEnter(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 61, column 89
    function def_onEnter_14 (def :  pcf.ContactInfoRowSet) : void {
      def.onEnter(keptContact, retiredContact, mergedContact, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 54, column 54
    function def_onEnter_5 (def :  pcf.ABPlaceMergeDetailsRowSet_Japan) : void {
      def.onEnter(places, mergedPlace, nameOwner)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 54, column 54
    function def_onEnter_7 (def :  pcf.ABPlaceMergeDetailsRowSet_default) : void {
      def.onEnter(places, mergedPlace, nameOwner)
    }
    
    // 'def' attribute on RowSetRef (id=tag) at ContactDetailsRowSet.ABPlace.pcf: line 57, column 17
    function def_refreshVariables_11 (def :  pcf.ContactTagRowSet) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 59, column 70
    function def_refreshVariables_13 (def :  pcf.NotesRowSet) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 61, column 89
    function def_refreshVariables_15 (def :  pcf.ContactInfoRowSet) : void {
      def.refreshVariables(keptContact, retiredContact, mergedContact, phoneHolder)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 54, column 54
    function def_refreshVariables_6 (def :  pcf.ABPlaceMergeDetailsRowSet_Japan) : void {
      def.refreshVariables(places, mergedPlace, nameOwner)
    }
    
    // 'def' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 54, column 54
    function def_refreshVariables_8 (def :  pcf.ABPlaceMergeDetailsRowSet_default) : void {
      def.refreshVariables(places, mergedPlace, nameOwner)
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPlace.pcf: line 27, column 23
    function initialValue_0 () : ABPlace {
      return keptContact as ABPlace
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPlace.pcf: line 31, column 23
    function initialValue_1 () : ABPlace {
      return retiredContact as ABPlace
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPlace.pcf: line 36, column 23
    function initialValue_2 () : ABPlace {
      return mergedContact as ABPlace
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPlace.pcf: line 40, column 25
    function initialValue_3 () : ABPlace[] {
      return {keptPlace, retiredPlace, mergedPlace}
    }
    
    // 'initialValue' attribute on Variable at ContactDetailsRowSet.ABPlace.pcf: line 44, column 37
    function initialValue_4 () : gw.api.name.NameOwner {
      return new gw.api.name.ContactNameOwner(new gw.api.name.ABContactNameDelegate(mergedPlace as ABPlace))
    }
    
    // 'mode' attribute on RowSetRef at ContactDetailsRowSet.ABPlace.pcf: line 54, column 54
    function mode_9 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    property get addressDataHolder () : gw.web.merge.MergeContactsAddressHolder {
      return getRequireValue("addressDataHolder", 0) as gw.web.merge.MergeContactsAddressHolder
    }
    
    property set addressDataHolder ($arg :  gw.web.merge.MergeContactsAddressHolder) {
      setRequireValue("addressDataHolder", 0, $arg)
    }
    
    property get keptContact () : entity.ABContact {
      return getRequireValue("keptContact", 0) as entity.ABContact
    }
    
    property set keptContact ($arg :  entity.ABContact) {
      setRequireValue("keptContact", 0, $arg)
    }
    
    property get keptPlace () : ABPlace {
      return getVariableValue("keptPlace", 0) as ABPlace
    }
    
    property set keptPlace ($arg :  ABPlace) {
      setVariableValue("keptPlace", 0, $arg)
    }
    
    property get mergedContact () : entity.ABContact {
      return getRequireValue("mergedContact", 0) as entity.ABContact
    }
    
    property set mergedContact ($arg :  entity.ABContact) {
      setRequireValue("mergedContact", 0, $arg)
    }
    
    property get mergedPlace () : ABPlace {
      return getVariableValue("mergedPlace", 0) as ABPlace
    }
    
    property set mergedPlace ($arg :  ABPlace) {
      setVariableValue("mergedPlace", 0, $arg)
    }
    
    property get nameOwner () : gw.api.name.NameOwner {
      return getVariableValue("nameOwner", 0) as gw.api.name.NameOwner
    }
    
    property set nameOwner ($arg :  gw.api.name.NameOwner) {
      setVariableValue("nameOwner", 0, $arg)
    }
    
    property get phoneHolder () : gw.web.merge.MergeContactsPhoneHolder {
      return getRequireValue("phoneHolder", 0) as gw.web.merge.MergeContactsPhoneHolder
    }
    
    property set phoneHolder ($arg :  gw.web.merge.MergeContactsPhoneHolder) {
      setRequireValue("phoneHolder", 0, $arg)
    }
    
    property get places () : ABPlace[] {
      return getVariableValue("places", 0) as ABPlace[]
    }
    
    property set places ($arg :  ABPlace[]) {
      setVariableValue("places", 0, $arg)
    }
    
    property get retiredContact () : entity.ABContact {
      return getRequireValue("retiredContact", 0) as entity.ABContact
    }
    
    property set retiredContact ($arg :  entity.ABContact) {
      setRequireValue("retiredContact", 0, $arg)
    }
    
    property get retiredPlace () : ABPlace {
      return getVariableValue("retiredPlace", 0) as ABPlace
    }
    
    property set retiredPlace ($arg :  ABPlace) {
      setVariableValue("retiredPlace", 0, $arg)
    }
    
    
  }
  
  
}