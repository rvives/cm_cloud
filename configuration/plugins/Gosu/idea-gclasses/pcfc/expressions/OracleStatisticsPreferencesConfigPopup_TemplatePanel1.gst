<% uses pcf.* %>
<% uses entity.* %>
<% uses typekey.* %>
<% uses gw.api.locale.DisplayKey %>
<%@ params(final PreferencesHelper : com.guidewire.pl.system.database.dbstatistics.oracle.OracleTableStatsPreferencesUIHelper, final __helper : gw.api.web.template.TemplatePanelHelper) %>
<% function printContent(strContent : String, escape : boolean) { __helper.printContent(strContent, escape) } %>
<div style="width:1040;height:500;overflow-x:scroll;overflow-y:scroll;font-family:monospace">
  <% printContent(PreferencesHelper.generateChangedConfig(),  false) %>
</div>