package edge.servlet.jsonrpc.Observability

uses com.fasterxml.jackson.annotation.JsonInclude
uses com.fasterxml.jackson.databind.DeserializationFeature
uses com.fasterxml.jackson.databind.ObjectMapper
uses edge.servlet.jsonrpc.marshalling.GosuModule
uses gw.api.intentionallogging.IntentionalLoggingConfiguration
uses gw.api.observability.ObservabilityContext
uses gw.lang.reflect.IMethodInfo
uses gw.plugin.observability.ObservabilityPlugin
uses gw.plugin.Plugins
uses javax.servlet.http.HttpServletRequest
uses org.apache.commons.fileupload.disk.DiskFileItem
uses org.slf4j.Marker
uses org.slf4j.MarkerFactory
uses org.slf4j.MDC

class ObservabilityHandler {

  private var _logMarker : Marker
  private var _isEnabled : boolean
  private var _objectMapper : ObjectMapper
  private var _observability : ObservabilityPlugin
  private var _context : ObservabilityContext

  public construct() {
    _logMarker = MarkerFactory.getMarker(IEdgeObservabilityConstants.LOG_MARKER_PORTAL_REQUEST)
    _isEnabled = IntentionalLoggingConfiguration.getInstance().isEnabled(_logMarker)

    _objectMapper = new ObjectMapper()
    _objectMapper.registerModule(GosuModule.INSTANCE)
    _objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL)
    _objectMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)

    _observability = Plugins.get(ObservabilityPlugin)
    _context = new ObservabilityContext()
  }

  public function getObservability() : ObservabilityPlugin {
    return _observability
  }

  public function isEnabled() : boolean {
    return _isEnabled
  }

  public function addReqParams(methodInfo : IMethodInfo, paramsValues : List<Object>) {
    if (methodInfo != null and paramsValues != null) {
      var paramsNames = methodInfo.getParameters()
      for (param in paramsNames index i) {
        _context.withContext(param.getName(), getObjectJsonValue(paramsValues.get(i)))
      }
    }
  }

  public function addLogParam(key: String, value: Object) {
    _context.withContext(key, value)
  }

  public function addResponse(response: Object) {
    _context.withContext(IEdgeObservabilityConstants.LOG_TRACEABILITY_RESULT, getObjectJsonValue(response))
  }

  public function beforeProcessStart() {
    _observability.beforeProcessStart(_logMarker.getName(), _context)
  }

  public function afterProcessComplete() {
    _observability.afterProcessComplete(_logMarker.getName(), _context)
  }

  public function onProcessError(t: Throwable) {
    _observability.onProcessError(_logMarker.getName(), t, _context)
  }

  public function cleanLogParams() {
    _context = new ObservabilityContext()
  }

  public static function setMDCLogParamsFromRequest(req: HttpServletRequest) {
    for (param in IEdgeObservabilityConstants.B3_HEADERS) {
      setMDCLogParam(param, req.getHeader(param))
    }
  }

  public static function setMDCLogEdgePathFromRequest(path: String) {
    setMDCLogParam(IEdgeObservabilityConstants.LOG_ENDPOINT, path)
  }

  public static function setMDCLogParam(paramName: String, paramValue: String) {
    if (paramValue != null) {
      MDC.put(paramName, paramValue)
    }
  }

  private function getObjectJsonValue(rawParamValue: Object): String {
    if (!(rawParamValue typeis DiskFileItem)) {
      return _objectMapper.writeValueAsString(rawParamValue)
    }
      return (rawParamValue as DiskFileItem).getName()
  }
}
