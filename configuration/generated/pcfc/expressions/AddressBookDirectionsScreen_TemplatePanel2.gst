<% uses pcf.* %>
<% uses entity.* %>
<% uses typekey.* %>
<% uses gw.api.locale.DisplayKey %>
<%@ params(final mapURL : gw.api.contact.MapImageUrl) %>

          <iframe id = "mapFrame" src = "${mapURL.getMapImageUrl()}"
                        width = "800" height = "600" frameborder = "0">
	      <p></p> </iframe>
	  