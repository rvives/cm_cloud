<% uses pcf.* %>
<% uses entity.* %>
<% uses typekey.* %>
<% uses gw.api.locale.DisplayKey %>
<%@ params(final __helper : gw.api.web.template.TemplatePanelHelper) %>
<% function printContent(strContent : String, escape : boolean) { __helper.printContent(strContent, escape) } %>

          <iframe id="cognosFrame" name="cognosFrame" src="" scrolling="no" style="overflow: auto;width:100%;height:1050px"></iframe>
          <script>
            function createHiddenForm(path, params, target, id) {
              const form = document.createElement('form');
              form.action = path;
              form.target = target;
              form.method = 'post';
              form.id = id;

              for (var key in params) {
                const hiddenField = document.createElement('input');
  
                hiddenField.name = key;
                hiddenField.value = params[key];
                hiddenField.type = 'hidden';

                form.appendChild(hiddenField);
              }
              
              return form
            }
            
            var cognosFormId = 'hiddenCognosReportForm';
            var cognosForm = document.getElementById(cognosFormId);
            if (cognosForm == null) {
              const requestParams = {
                gwGatewayEndPointUrl: '<%printContent(gw.plugin.cognos.CognosPlugin.getGatewayEndPointUrl(), false)%>',
                gwDispatcherEndPointUrl: '<%printContent(gw.plugin.cognos.CognosPlugin.getDispatcherEndPointUrl(), false)%>',
                gwNamespace: '<%printContent(gw.plugin.Plugins.getParams("CognosPlugin").get("namespace"), false)%>',
                gwUser: '<%printContent(entity.User.util.CurrentUser.Credential.UserName, false)%>',
                gwPassword: '<%printContent(entity.User.util.CurrentUser.Credential.Password, false)%>',
                gwReportPath: '<%printContent(gw.plugin.Plugins.getParams("CognosPlugin").get("reportPath"), false)%>'
              };
              const path = '<%printContent(gw.plugin.cognos.CognosPlugin.getSetCognosCookiesUrl(), false)%>';
              const target = 'cognosFrame';
              
              cognosForm = createHiddenForm(path, requestParams, target, cognosFormId);
              var cognosFrame = document.getElementById('cognosFrame');
              cognosFrame.appendChild(cognosForm);
            }
            cognosForm.submit();

          </script>    
        
        