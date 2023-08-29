package edge.aspects.validation.annotations

uses edge.metadata.annotation.IMetaFactory
uses edge.aspects.validation.dto.ValidationRuleDTO
uses edge.el.Expr
uses edge.aspects.validation.Validation
uses gw.api.util.DateUtil
uses java.util.Date

/**
* Validates that date portion of the property is less than the current date.
 */
class PastDate implements IMetaFactory {
  override function getState(): Object {
    return new ValidationRuleDTO(
      Expr.isNot(
        Expr.lessThan(
          Expr.call(DateUtil#trimToMidnight(Date),
              { Expr.call(DateUtil#currentDate(), {} ) }
          ),
          Expr.call(DateUtil#trimToMidnight(Date), { Validation.VALUE} )
        )
      ),
      Expr.translate("Edge.Web.Api.Model.PastDate",{})
    )
  }
}
