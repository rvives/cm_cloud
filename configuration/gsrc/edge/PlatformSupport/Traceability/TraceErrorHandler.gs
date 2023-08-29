package edge.PlatformSupport.Traceability

uses edge.servlet.jsonrpc.Observability.IEdgeObservabilityConstants
uses gw.api.intentionallogging.IntentionalLogger
uses gw.api.intentionallogging.IntentionalLoggingConfiguration
uses org.slf4j.MarkerFactory
class TraceErrorHandler {

  public static function log(exception: Throwable) {
    var logMarker = MarkerFactory.getMarker(IEdgeObservabilityConstants.LOG_MARKER_PORTAL_REQUEST)
    var ILisEnabled = IntentionalLoggingConfiguration.getInstance().isEnabled(logMarker)
    if (ILisEnabled) {
      var IL = IntentionalLogger.from(EdgeTraceabilityCategory.APPLICATION)
      var traceHandler = new TraceHandler()
      traceHandler.addMarker(logMarker.getName())
      traceHandler.addLogTimestamp(new Date())
      traceHandler.addLogParam(IEdgeObservabilityConstants.LOG_LEVEL, IEdgeObservabilityConstants.LOG_LEVEL_ERROR)
      IL.logFail(logMarker, exception.toString(), traceHandler.getLogMessageParams())
    }
  }

}
