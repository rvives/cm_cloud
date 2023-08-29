package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/ABContacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactsExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/search/ABContacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 15, column 21
    function action_0 () : void {
      pcf.ABContactSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 19, column 21
    function action_2 () : void {
      pcf.MergeContacts.go()
    }
    
    // 'location' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 23, column 21
    function action_4 () : void {
      pcf.PendingChanges.go()
    }
    
    // 'location' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 15, column 21
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 19, column 21
    function action_dest_3 () : pcf.api.Destination {
      return pcf.MergeContacts.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 23, column 21
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PendingChanges.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 9, column 61
    static function canVisit_7 () : java.lang.Boolean {
      return perm.ABContact.viewsearch
    }
    
    // LocationGroup (id=ABContacts) at ABContacts.pcf: line 9, column 61
    static function firstVisitableChildDestinationMethod_12 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ABContactSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.MergeContacts.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PendingChanges.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'label' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 23, column 21
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.PendingChanges", gw.api.desktop.DesktopCounts.getDesktopCounts().PendingContactChanges)
    }
    
    // 'menuActions' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 9, column 61
    function menuActions_onEnter_8 (def :  pcf.ContactsMenuActions) : void {
      def.onEnter()
    }
    
    // 'menuActions' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 9, column 61
    function menuActions_refreshVariables_9 (def :  pcf.ContactsMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'tabBar' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 9, column 61
    function tabBar_onEnter_10 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=ABContacts) at ABContacts.pcf: line 9, column 61
    function tabBar_refreshVariables_11 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.ABContacts {
      return super.CurrentLocation as pcf.ABContacts
    }
    
    
  }
  
  
}