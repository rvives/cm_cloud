package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/ArgumentRowSet.String.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArgumentRowSet_StringExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/ArgumentRowSet.String.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArgumentRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoComplete' attribute on TextCell (id=ArgValue_Cell) at ArgumentRowSet.String.pcf: line 19, column 28
    function autoComplete_6 () : gw.api.contact.AutocompleteHandler {
      return new gw.command.SimpleAutoCompleteHandler(arg.Suggestions)
    }
    
    // 'value' attribute on TextCell (id=ArgValue_Cell) at ArgumentRowSet.String.pcf: line 19, column 28
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      arg.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ArgName_Cell) at ArgumentRowSet.String.pcf: line 14, column 27
    function valueRoot_1 () : java.lang.Object {
      return arg
    }
    
    // 'value' attribute on TextCell (id=ArgName_Cell) at ArgumentRowSet.String.pcf: line 14, column 27
    function value_0 () : java.lang.String {
      return arg.Name
    }
    
    // 'value' attribute on TextCell (id=ArgValue_Cell) at ArgumentRowSet.String.pcf: line 19, column 28
    function value_3 () : java.lang.String {
      return arg.Value
    }
    
    property get arg () : gw.command.Argument {
      return getRequireValue("arg", 0) as gw.command.Argument
    }
    
    property set arg ($arg :  gw.command.Argument) {
      setRequireValue("arg", 0, $arg)
    }
    
    
  }
  
  
}