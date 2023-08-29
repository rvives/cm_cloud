package edge.servlet

uses com.guidewire.pl.system.service.context.ServiceToken
uses edge.PlatformSupport.Locale
uses edge.PlatformSupport.Logger
uses edge.PlatformSupport.Reflection
uses edge.di.HandlerInfoLookup
uses gw.api.webservice.exception.LoginException
uses gw.api.webservice.login.LoginAPIHelper
uses gw.plugin.security.InvalidAuthenticationSourceData
uses gw.servlet.Servlet

uses javax.servlet.http.HttpServlet
uses javax.servlet.http.HttpServletRequest
uses javax.servlet.http.HttpServletResponse

@Servlet(\path: String -> path.matches("/edge/document(/.*)?"))
class DocumentDownloadServlet extends HttpServlet {

  final private static var LOGGER = new Logger(Reflection.getRelativeName(DocumentDownloadServlet))

  override function doGet(req: HttpServletRequest, resp: HttpServletResponse) {
    Locale.runWithLocale(EdgeServletUtil.retrieveRequestLocale(req), \-> {
      final var capSlash = req.PathInfo.indexOf("/", HandlerInfoLookup.DOC_PATH_PREFIX.length())
      if (capSlash < 0) {
        resp.sendError(404)
        return
      }
      final var hSlash = req.PathInfo.indexOf("/", capSlash + 1)
      if (hSlash < 0) {
        resp.sendError(404)
        return
      }
      final var path = req.PathInfo.substring(0, hSlash)
      final var handler = HandlerInfoLookup.Instance.DocumentDownloadHandlers.get(path)
      if (handler == null) {
        resp.sendError(404)
      } else {
        handler.doGet(req, resp)
      }
    })
  }

  override protected function service(req: HttpServletRequest, resp: HttpServletResponse) {
    try {
      LoginAPIHelper.login(req)
    } catch (e: LoginException) {
      LOGGER.logError(e)
      resp.sendError(401)
      return
    } catch (e: InvalidAuthenticationSourceData) {
      LOGGER.logError(e)
      resp.sendError(401)
      return
    }
    try {
      super.service(req, resp)
    } finally {
      req.Session.invalidate()
    }
  }

  override function doPost(req: HttpServletRequest, resp: HttpServletResponse) {
    resp.sendError(405)
  }
}
