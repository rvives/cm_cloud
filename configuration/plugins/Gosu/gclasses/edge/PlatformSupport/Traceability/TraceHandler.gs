package edge.PlatformSupport.Traceability

uses com.fasterxml.jackson.annotation.JsonInclude
uses com.fasterxml.jackson.databind.DeserializationFeature
uses com.fasterxml.jackson.databind.ObjectMapper
uses edge.servlet.jsonrpc.Observability.IEdgeObservabilityConstants
uses edge.servlet.jsonrpc.marshalling.GosuObservabilityModule
uses gw.lang.reflect.IMethodInfo
uses gw.pl.logging.LogMessageParams
uses java.text.SimpleDateFormat
uses javax.servlet.http.HttpServletRequest
uses org.slf4j.MDC

class TraceHandler {

  private var _logParams : HashMap<String, Object>
  private var _contextMap : HashMap<String, Object>
  private var _markersMap : HashMap<String, String>
  private var _objectMapper : ObjectMapper

  public construct() {
    _markersMap = new HashMap<String, String>()
    _logParams = new HashMap<String, Object>()
    _contextMap = new HashMap<String, Object>()
    _objectMapper = new ObjectMapper()
    _objectMapper.registerModule(GosuObservabilityModule.MODULE_INSTANCE)
    _objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL)
    _objectMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
  }

  public function addLogParams(methodInfo : IMethodInfo, paramsValues : List<Object>) {
    if (methodInfo != null and paramsValues != null) {
      var paramsNames = methodInfo.getParameters()
      for (param in paramsNames index i) {
        _contextMap.put(param.getName(), getObjectJsonValue(paramsValues.get(i)))
      }
    }
  }

  public function addLogParam(key: String, value: Object) {
    if (key != null) {
      _logParams.put(key, value)
    }
  }

  public function addLogTimestamp(date: Date) {
    if (date != null) {
      var sdf = new SimpleDateFormat(IEdgeObservabilityConstants.LOG_DATETIME_FORMAT)
      _logParams.put(IEdgeObservabilityConstants.LOG_TIMESTAMP, sdf.format(date))
    }
  }

  public function addMarker(marker: String) {
    _markersMap.put(IEdgeObservabilityConstants.LOG_MARKER_NAME, marker)
  }

  public function getLogMessageParams() : LogMessageParams {

    var logMessageParams = LogMessageParams.create()

    for (paramName in IEdgeObservabilityConstants.B3_HEADERS) {
      var paramValue = MDC.get(paramName)
      if (paramValue != null) {
        _contextMap.put(paramName, paramValue)
      }
    }

    for(key in _logParams.keySet()) {
      logMessageParams.put(key, _logParams.get(key))
    }

    logMessageParams.put(IEdgeObservabilityConstants.LOG_CONTEXT_MAP, _contextMap)
    logMessageParams.put(IEdgeObservabilityConstants.LOG_MARKER, _markersMap)

    return logMessageParams
  }

  private function getObjectJsonValue(rawParamValue: Object): String {
    return _objectMapper.writeValueAsString(rawParamValue)
  }

  public function addContextParam(key: String, value: Object) {
    _contextMap.put(key, getObjectJsonValue(value))
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

  public function clearContexMap() {
    _contextMap.clear()
  }
}
