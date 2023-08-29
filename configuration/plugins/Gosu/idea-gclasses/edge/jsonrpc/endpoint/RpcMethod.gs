package edge.jsonrpc.endpoint

uses edge.aspects.validation.annotations.Context
uses edge.aspects.validation.context.ContextFactory
uses edge.aspects.validation.context.ContextPrecompiler
uses edge.exception.DtoValidationException
uses edge.jsonrpc.endpoint.validation.ArgumentValidator
uses edge.metadata.service.ElementMetadataUtil
uses edge.servlet.jsonrpc.Observability.IEdgeObservabilityConstants
uses edge.servlet.jsonrpc.Observability.ObservabilityHandler
uses gw.api.util.Logger
uses gw.lang.reflect.IMethodInfo
uses gw.lang.reflect.IType

/**
 * Definition of a RPC method that can be called.
 */
internal final class RpcMethod extends InvokableMethod {

  private static final var LOG = Logger.forCategory(RpcMethod.Type.QName)

  /** Instance to invoke methods on. */
  private var _instance : Object

  /** Method to invoke. */
  private var _method : IMethodInfo

  /** Validators for the arguments. */
  private var _validators : List<ArgumentValidator>

  /** Factory for the context. */
  private var _contextFactory : ContextFactory

  private var _observabilityHandler : ObservabilityHandler

  construct(i : Object, m : IMethodInfo, validators : List<ArgumentValidator>) {
    if (i == null) {
      throw new IllegalArgumentException("RPC object instance could not be null")
    }
    if (m == null) {
      throw new IllegalArgumentException("RPC method could not be null")
    }

    if (!m.OwnersType.isAssignableFrom(typeof(i))) {
      throw new IllegalArgumentException(
          "RPC method " + m.OwnersType.QName + "." + m.Name + " could not be applied to an instance of " + (typeof i).QName)
    }

    this._instance = i
    this._method = m
    final var argTypes = m.Parameters.toList().map(\ param -> param.Type)
    final var contextMetadata = m.Annotations
        .where( \ elt -> elt.Instance typeis Context)
        .map( \ elt -> (elt.Instance as Context).getState())
    this._contextFactory = ContextPrecompiler.fromMetadata(ElementMetadataUtil.fromObjects(contextMetadata.toArray()), argTypes.toTypedArray())

    this._validators = validators

    this._observabilityHandler = new ObservabilityHandler()
  }

  override internal function invoke(typedArgs : List<Object>) : Object {
    final var ctx = _contextFactory.createContext(null, typedArgs.toArray())
    final var messages = typedArgs.mapWithIndex( \ item, idx -> _validators.get(idx).validate(ctx, item)).flatten().toList()
    if (!messages.Empty) {
      LOG.error(messages.map(\x -> x.ArgumentName + ":" + x.Path + " -> " + x.Message).join("\n"))
      throw new DtoValidationException() {
        :Message = "Dto validation error",
        :Data =  messages
      }
    }

    return observedHandleCall(typedArgs)
  }

  override function getArgumentTypes(): List<IType> {
    return Arrays.asList(_method.Parameters.map( \ elt -> elt.FeatureType))
  }

  override function getMethodInfo() : IMethodInfo {
    return _method
  }

  private function observedHandleCall(typedArgs : List<Object>) : Object {
    if (_observabilityHandler.isEnabled()) {
      _observabilityHandler.addLogParam(IEdgeObservabilityConstants.LOG_METHOD, this._method.getDisplayName())
      _observabilityHandler.addReqParams(this._method, typedArgs)
      _observabilityHandler.addLogParam(IEdgeObservabilityConstants.LOG_THREAD, Thread.currentThread().getName())
      _observabilityHandler.addLogParam(IEdgeObservabilityConstants.LOG_THREAD_ID, Thread.currentThread().getId())
      _observabilityHandler.addLogParam(IEdgeObservabilityConstants.LOG_THREAD_PRIORITY, Thread.currentThread().getPriority())
      _observabilityHandler.beforeProcessStart()
    }

    var result = _method.CallHandler.handleCall(_instance, typedArgs.toArray())

    if (_observabilityHandler.isEnabled()) {
      _observabilityHandler.cleanLogParams()
      _observabilityHandler.addLogParam(IEdgeObservabilityConstants.LOG_METHOD, this._method.getDisplayName())
      _observabilityHandler.addResponse(result)
      _observabilityHandler.afterProcessComplete()
    }

    return result
  }
}
