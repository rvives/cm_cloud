<% uses pcf.* %>
<% uses entity.* %>
<% uses typekey.* %>
<% uses gw.api.locale.DisplayKey %>
<%@ params(final directions : gw.api.contact.DrivingDirections) %>

          <iframe id = "mapFrame" src = "${directions.getMapOverviewUrl().getMapImageUrl()}"
                        width = "800" height = "600" frameborder = "0">
	      <p></p> </iframe>
	  