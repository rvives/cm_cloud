package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateRelatedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DuplicateRelatedContactsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateRelatedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DuplicateRelatedContactsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=Included_Cell) at DuplicateRelatedContactsLV.pcf: line 23, column 48
    function sortValue_0 (relatedContactData :  gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData) : java.lang.Object {
      return relatedContactData.Included
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DuplicateRelatedContactsLV.pcf: line 29, column 41
    function sortValue_1 (relatedContactData :  gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData) : java.lang.Object {
      return relatedContactData.ContactContact.getOtherContact(wrappedContact.WrappedContact)
    }
    
    // 'value' attribute on RangeCell (id=Relationship_Cell) at DuplicateRelatedContactsLV.pcf: line 37, column 47
    function sortValue_2 (relatedContactData :  gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData) : java.lang.Object {
      return new gw.web.ABContactContactLVWrapper(relatedContactData.ContactContact, wrappedContact.WrappedContact).BidiRel
    }
    
    // 'value' attribute on RowIterator at DuplicateRelatedContactsLV.pcf: line 17, column 87
    function value_16 () : gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData[] {
      return wrappedContact.WrappedContact == null ? null : relatedContacts
    }
    
    property get relatedContacts () : gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData[] {
      return getRequireValue("relatedContacts", 0) as gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData[]
    }
    
    property set relatedContacts ($arg :  gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData[]) {
      setRequireValue("relatedContacts", 0, $arg)
    }
    
    property get wrappedContact () : gw.web.merge.ABContactWrapper {
      return getRequireValue("wrappedContact", 0) as gw.web.merge.ABContactWrapper
    }
    
    property set wrappedContact ($arg :  gw.web.merge.ABContactWrapper) {
      setRequireValue("wrappedContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/merge/DuplicateRelatedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DuplicateRelatedContactsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at DuplicateRelatedContactsLV.pcf: line 29, column 41
    function action_7 () : void {
      gw.api.web.contact.ABContactUtil.viewContact(true, relatedContactData.ContactContact.getOtherContact(wrappedContact.WrappedContact), CurrentLocation)
    }
    
    // 'value' attribute on RangeCell (id=Relationship_Cell) at DuplicateRelatedContactsLV.pcf: line 37, column 47
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      new gw.web.ABContactContactLVWrapper(relatedContactData.ContactContact, wrappedContact.WrappedContact).BidiRel = (__VALUE_TO_SET as typekey.ContactBidiRel)
    }
    
    // 'value' attribute on CheckBoxCell (id=Included_Cell) at DuplicateRelatedContactsLV.pcf: line 23, column 48
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      relatedContactData.Included = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'valueRange' attribute on RangeCell (id=Relationship_Cell) at DuplicateRelatedContactsLV.pcf: line 37, column 47
    function valueRange_12 () : java.lang.Object {
      return wrappedContact.WrappedContact == null ? null : wrappedContact.WrappedContact.getPossibleBidiRelsToContact(relatedContactData.ContactContact.SrcABContact)
    }
    
    // 'value' attribute on CheckBoxCell (id=Included_Cell) at DuplicateRelatedContactsLV.pcf: line 23, column 48
    function valueRoot_5 () : java.lang.Object {
      return relatedContactData
    }
    
    // 'value' attribute on RangeCell (id=Relationship_Cell) at DuplicateRelatedContactsLV.pcf: line 37, column 47
    function value_10 () : typekey.ContactBidiRel {
      return new gw.web.ABContactContactLVWrapper(relatedContactData.ContactContact, wrappedContact.WrappedContact).BidiRel
    }
    
    // 'value' attribute on CheckBoxCell (id=Included_Cell) at DuplicateRelatedContactsLV.pcf: line 23, column 48
    function value_3 () : java.lang.Boolean {
      return relatedContactData.Included
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DuplicateRelatedContactsLV.pcf: line 29, column 41
    function value_8 () : entity.ABContact {
      return relatedContactData.ContactContact.getOtherContact(wrappedContact.WrappedContact)
    }
    
    // 'valueRange' attribute on RangeCell (id=Relationship_Cell) at DuplicateRelatedContactsLV.pcf: line 37, column 47
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Relationship_Cell) at DuplicateRelatedContactsLV.pcf: line 37, column 47
    function verifyValueRangeIsAllowedType_13 ($$arg :  typekey.ContactBidiRel[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Relationship_Cell) at DuplicateRelatedContactsLV.pcf: line 37, column 47
    function verifyValueRange_14 () : void {
      var __valueRangeArg = wrappedContact.WrappedContact == null ? null : wrappedContact.WrappedContact.getPossibleBidiRelsToContact(relatedContactData.ContactContact.SrcABContact)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    property get relatedContactData () : gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData {
      return getIteratedValue(1) as gw.web.merge.MergeContactsLinkedContactsHolder.RelatedContactData
    }
    
    
  }
  
  
}