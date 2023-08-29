package edge.servlet.jsonrpc.marshalling

class GosuObservabilityModule extends GosuModule {

  static var _module_instance = new GosuObservabilityModule()
  static property get MODULE_INSTANCE(): GosuObservabilityModule {
    return _module_instance
  }

  protected construct() {
    super()
    super.setSerializerModifier(new GosuBeanObservabilitySerializerModifier())
  }
}
