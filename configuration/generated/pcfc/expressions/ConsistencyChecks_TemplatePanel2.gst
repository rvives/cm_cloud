<% uses pcf.* %>
<% uses entity.* %>
<% uses typekey.* %>
<% uses gw.api.locale.DisplayKey %>
<%@ params(final cCheck : gw.api.database.ConsistencyCheck, final __helper : gw.api.web.template.TemplatePanelHelper) %>
<% function printContent(strContent : String, escape : boolean) { __helper.printContent(strContent, escape) } %>
<div style="width:1040;height:500;overflow-x:scroll;overflow-y:scroll;">
  <% printContent(com.guidewire.pl.perfdownload.platform.analyzer.sql.SQLPrettyPrinterFactory.getSQLPrettyPrinter().printText(cCheck.QueryToIdentifyRows, true), false) %>
</div>

        