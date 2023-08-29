package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/contacts/ReviewSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReviewSummaryPanelSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ReviewSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ReviewSummaryCardPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at ReviewSummaryPanelSet.pcf: line 130, column 61
    function valueRoot_54 () : java.lang.Object {
      return categoryScore
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at ReviewSummaryPanelSet.pcf: line 130, column 61
    function value_53 () : typekey.ReviewCategory {
      return categoryScore.ReviewCategory
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ReviewSummaryPanelSet.pcf: line 136, column 56
    function value_56 () : java.lang.Integer {
      return categoryScore.Score
    }
    
    property get categoryScore () : entity.ReviewSummaryCategoryScore {
      return getIteratedValue(2) as entity.ReviewSummaryCategoryScore
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ReviewSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ReviewSummaryCardPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ReviewType_Cell) at ReviewSummaryPanelSet.pcf: line 29, column 43
    function valueRoot_6 () : java.lang.Object {
      return reviewSummary
    }
    
    // 'value' attribute on TextCell (id=Claim_Cell) at ReviewSummaryPanelSet.pcf: line 37, column 50
    function value_11 () : java.lang.String {
      return reviewSummary.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ReviewSummaryPanelSet.pcf: line 42, column 46
    function value_14 () : java.lang.Integer {
      return reviewSummary.Score
    }
    
    // 'value' attribute on DateCell (id=LastUpdated_Cell) at ReviewSummaryPanelSet.pcf: line 47, column 49
    function value_17 () : java.util.Date {
      return reviewSummary.UpdateTime
    }
    
    // 'value' attribute on TextCell (id=ReviewType_Cell) at ReviewSummaryPanelSet.pcf: line 29, column 43
    function value_5 () : java.lang.String {
      return reviewSummary.Name
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at ReviewSummaryPanelSet.pcf: line 33, column 48
    function value_8 () : java.lang.String {
      return reviewSummary.RelatedTo
    }
    
    property get reviewSummary () : entity.ReviewSummary {
      return getIteratedValue(2) as entity.ReviewSummary
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ReviewSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReviewSummaryCardPanelExpressionsImpl extends ReviewSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=TextInput0_Input) at ReviewSummaryPanelSet.pcf: line 94, column 53
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedSummary.Subcontact = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ReviewType_Cell) at ReviewSummaryPanelSet.pcf: line 29, column 43
    function sortValue_0 (reviewSummary :  entity.ReviewSummary) : java.lang.Object {
      return reviewSummary.Name
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at ReviewSummaryPanelSet.pcf: line 33, column 48
    function sortValue_1 (reviewSummary :  entity.ReviewSummary) : java.lang.Object {
      return reviewSummary.RelatedTo
    }
    
    // 'value' attribute on TextCell (id=Claim_Cell) at ReviewSummaryPanelSet.pcf: line 37, column 50
    function sortValue_2 (reviewSummary :  entity.ReviewSummary) : java.lang.Object {
      return reviewSummary.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at ReviewSummaryPanelSet.pcf: line 42, column 46
    function sortValue_3 (reviewSummary :  entity.ReviewSummary) : java.lang.Object {
      return reviewSummary.Score
    }
    
    // 'value' attribute on DateCell (id=LastUpdated_Cell) at ReviewSummaryPanelSet.pcf: line 47, column 49
    function sortValue_4 (reviewSummary :  entity.ReviewSummary) : java.lang.Object {
      return reviewSummary.UpdateTime
    }
    
    // 'value' attribute on TextInput (id=ReviewType_Input) at ReviewSummaryPanelSet.pcf: line 64, column 47
    function valueRoot_23 () : java.lang.Object {
      return selectedSummary
    }
    
    // 'value' attribute on RowIterator at ReviewSummaryPanelSet.pcf: line 24, column 84
    function value_20 () : gw.api.database.IQueryBeanResult<entity.ReviewSummary> {
      return gw.api.contact.ABReviewUtil.getReviewSummaries(contact) as gw.api.database.IQueryBeanResult<ReviewSummary>
    }
    
    // 'value' attribute on TextInput (id=ReviewType_Input) at ReviewSummaryPanelSet.pcf: line 64, column 47
    function value_22 () : java.lang.String {
      return selectedSummary.Name
    }
    
    // 'value' attribute on TextInput (id=ReviewClaim_Input) at ReviewSummaryPanelSet.pcf: line 68, column 54
    function value_25 () : java.lang.String {
      return selectedSummary.ClaimNumber
    }
    
    // 'value' attribute on TextInput (id=ReviewRelatedTo_Input) at ReviewSummaryPanelSet.pcf: line 72, column 52
    function value_28 () : java.lang.String {
      return selectedSummary.RelatedTo
    }
    
    // 'value' attribute on TextInput (id=ReviewedBy_Input) at ReviewSummaryPanelSet.pcf: line 76, column 53
    function value_31 () : java.lang.String {
      return selectedSummary.ReviewedBy
    }
    
    // 'value' attribute on TextInput (id=ReviewScore_Input) at ReviewSummaryPanelSet.pcf: line 81, column 48
    function value_34 () : java.lang.Integer {
      return selectedSummary.Score
    }
    
    // 'value' attribute on TextInput (id=ReviewContact_Input) at ReviewSummaryPanelSet.pcf: line 89, column 47
    function value_37 () : entity.ABContact {
      return selectedSummary.ABContact
    }
    
    // 'value' attribute on TextInput (id=TextInput0_Input) at ReviewSummaryPanelSet.pcf: line 94, column 53
    function value_40 () : java.lang.String {
      return selectedSummary.Subcontact
    }
    
    // 'value' attribute on DateInput (id=ReviewServiceDate_Input) at ReviewSummaryPanelSet.pcf: line 98, column 54
    function value_44 () : java.util.Date {
      return selectedSummary.ServiceDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ReviewServiceType_Input) at ReviewSummaryPanelSet.pcf: line 103, column 56
    function value_47 () : typekey.ReviewServiceType {
      return selectedSummary.ServiceType
    }
    
    // 'value' attribute on TextAreaInput (id=ReviewComments_Input) at ReviewSummaryPanelSet.pcf: line 111, column 51
    function value_50 () : java.lang.String {
      return selectedSummary.Comments
    }
    
    // 'value' attribute on RowIterator at ReviewSummaryPanelSet.pcf: line 123, column 69
    function value_59 () : entity.ReviewSummaryCategoryScore[] {
      return selectedSummary.getSortedCategoryScores()
    }
    
    // 'visible' attribute on ListViewPanel (id=ReviewSummaryLV) at ReviewSummaryPanelSet.pcf: line 18, column 43
    function visible_21 () : java.lang.Boolean {
      return perm.ReviewSummary.list
    }
    
    // 'visible' attribute on Card (id=ReviewDetailCard) at ReviewSummaryPanelSet.pcf: line 55, column 45
    function visible_60 () : java.lang.Boolean {
      return perm.ReviewSummary.view
    }
    
    property get selectedSummary () : ReviewSummary {
      return getCurrentSelection(1) as ReviewSummary
    }
    
    property set selectedSummary ($arg :  ReviewSummary) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/contacts/ReviewSummaryPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReviewSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get contact () : ABContact {
      return getRequireValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}