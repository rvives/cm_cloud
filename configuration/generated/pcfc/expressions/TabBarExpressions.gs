package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TabBarExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactsTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 15, column 21
    function action_0 () : void {
      pcf.ABContactSearch.go()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 19, column 21
    function action_2 () : void {
      pcf.MergeContacts.go()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 23, column 21
    function action_4 () : void {
      pcf.PendingChanges.go()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 15, column 21
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 19, column 21
    function action_dest_3 () : pcf.api.Destination {
      return pcf.MergeContacts.createDestination()
    }
    
    // 'location' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 23, column 21
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PendingChanges.createDestination()
    }
    
    // 'label' attribute on Tab (id=ContactsTab) at ABContacts.pcf: line 23, column 21
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Contacts.PendingChanges", gw.api.desktop.DesktopCounts.getDesktopCounts().PendingContactChanges)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=locales) at TabBar.pcf: line 59, column 29
    function action_20 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLocale(locale)
    }
    
    // 'available' attribute on MenuItem (id=locales) at TabBar.pcf: line 59, column 29
    function available_19 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLocale() != locale
    }
    
    // 'checked' attribute on MenuItem (id=locales) at TabBar.pcf: line 59, column 29
    function checked_22 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLocaleType() == locale
    }
    
    // 'label' attribute on MenuItem (id=locales) at TabBar.pcf: line 59, column 29
    function label_21 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLocaleLabel(locale)
    }
    
    property get locale () : typekey.LocaleType {
      return getIteratedValue(1) as typekey.LocaleType
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=langs) at TabBar.pcf: line 41, column 29
    function action_14 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLanguage(lang)
    }
    
    // 'available' attribute on MenuItem (id=langs) at TabBar.pcf: line 41, column 29
    function available_13 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLanguage() != lang
    }
    
    // 'checked' attribute on MenuItem (id=langs) at TabBar.pcf: line 41, column 29
    function checked_16 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLanguageType() == lang
    }
    
    // 'label' attribute on MenuItem (id=langs) at TabBar.pcf: line 41, column 29
    function label_15 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLanguageLabel(lang)
    }
    
    property get lang () : typekey.LanguageType {
      return getIteratedValue(1) as typekey.LanguageType
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TabBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 19, column 33
    function action_11 () : void {
      AdminForward.go()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 67, column 24
    function action_26 () : void {
      Help.push()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 75, column 61
    function action_28 () : void {
      UserPreferencesWorksheet.goInWorkspace()
    }
    
    // 'action' attribute on TabBarLogout (id=LogoutOAuthTabBarLink) at TabBar.pcf: line 96, column 59
    function action_34 () : void {
      Logout.push(gw.auth.AuthHelper.LogoutUrl)
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 100, column 26
    function action_37 () : void {
      ProfilerPopup.push()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 104, column 26
    function action_39 () : void {
      InternalTools.go()
    }
    
    // 'action' attribute on Tab (id=ContactsTab) at TabBar.pcf: line 13, column 44
    function action_8 () : void {
      ABContacts.go()
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 19, column 33
    function action_dest_12 () : pcf.api.Destination {
      return pcf.AdminForward.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 67, column 24
    function action_dest_27 () : pcf.api.Destination {
      return pcf.Help.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 75, column 61
    function action_dest_29 () : pcf.api.Destination {
      return pcf.UserPreferencesWorksheet.createDestination()
    }
    
    // 'action' attribute on TabBarLogout (id=LogoutOAuthTabBarLink) at TabBar.pcf: line 96, column 59
    function action_dest_35 () : pcf.api.Destination {
      return pcf.Logout.createDestination(gw.auth.AuthHelper.LogoutUrl)
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 100, column 26
    function action_dest_38 () : pcf.api.Destination {
      return pcf.ProfilerPopup.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 104, column 26
    function action_dest_40 () : pcf.api.Destination {
      return pcf.InternalTools.createDestination()
    }
    
    // 'action' attribute on Tab (id=ContactsTab) at TabBar.pcf: line 13, column 44
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ABContacts.createDestination()
    }
    
    // 'label' attribute on TabBarLogout (id=LogoutTabBarLink) at TabBar.pcf: line 90, column 58
    function label_32 () : java.lang.Object {
      return DisplayKey.get("Web.TabBar.Logout", entity.User.util.CurrentUser)
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_onEnter_41 (def :  pcf.SystemAlertBar) : void {
      def.onEnter()
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_refreshVariables_42 (def :  pcf.SystemAlertBar) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 33, column 46
    function value_17 () : typekey.LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 51, column 44
    function value_23 () : typekey.LocaleType[] {
      return gw.api.util.LocaleUtil.getAllLocales()?.toTypedArray()
    }
    
    // 'visible' attribute on Tab (id=AdminTab) at TabBar.pcf: line 19, column 33
    function visible_10 () : java.lang.Boolean {
      return perm.User.view
    }
    
    // 'visible' attribute on MenuItem (id=languageSwitcher) at TabBar.pcf: line 29, column 62
    function visible_18 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage()
    }
    
    // 'visible' attribute on MenuItem (id=localeSwitcher) at TabBar.pcf: line 47, column 60
    function visible_24 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=LanguageTabBarLink) at TabBar.pcf: line 25, column 104
    function visible_25 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage() || gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=ReloadPCFTabBarLink) at TabBar.pcf: line 84, column 57
    function visible_30 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isEnabled()
    }
    
    // 'visible' attribute on TabBarLogout (id=LogoutTabBarLink) at TabBar.pcf: line 90, column 58
    function visible_31 () : java.lang.Boolean {
      return gw.auth.AuthHelper.displayLoginFields()
    }
    
    // 'visible' attribute on TabBarLogout (id=LogoutOAuthTabBarLink) at TabBar.pcf: line 96, column 59
    function visible_33 () : java.lang.Boolean {
      return !gw.auth.AuthHelper.displayLoginFields()
    }
    
    // 'visible' attribute on Tab (id=ContactsTab) at TabBar.pcf: line 13, column 44
    function visible_7 () : java.lang.Boolean {
      return perm.ABContact.viewsearch
    }
    
    
  }
  
  
}