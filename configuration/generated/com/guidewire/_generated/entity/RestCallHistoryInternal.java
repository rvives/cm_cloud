package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RestCallHistory.eti;RestCallHistory.eix;RestCallHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RestCallHistoryInternal extends com.guidewire._generated.entity.InboundHistoryInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.commons.profiler.ProfilerDataSourceInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RESTCALLHISTORYADDED_EVENT = "RestCallHistoryAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RESTCALLHISTORYCHANGED_EVENT = "RestCallHistoryChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RESTCALLHISTORYREMOVED_EVENT = "RestCallHistoryRemoved";
  
  /**
   * Gets the value of the HttpOperation field.
   * The http operation path and method.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHttpOperation();
  
  
  /**
   * Gets the value of the OperationName field.
   * The name of the handler operation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOperationName();
  
  
  /**
   * Gets the value of the ServerName field.
   * The name of the server receiving the request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getServerName();
  
  
  /**
   * Gets the value of the SwaggerApi field.
   * The Swagger api that contains this operations.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSwaggerApi();
  
  
  /**
   * Gets the value of the TraceabilityId field.
   * The traceability id of the request. The size is dependent on implementation of TraceabilityIDPlugin.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTraceabilityId();
  
  
  /**
   * Sets the value of the HttpOperation field.
   */
  public void setHttpOperation(java.lang.String value);
  
  
  /**
   * Sets the value of the OperationName field.
   */
  public void setOperationName(java.lang.String value);
  
  
  /**
   * Sets the value of the ServerName field.
   */
  public void setServerName(java.lang.String value);
  
  
  /**
   * Sets the value of the SwaggerApi field.
   */
  public void setSwaggerApi(java.lang.String value);
  
  
  /**
   * Sets the value of the TraceabilityId field.
   */
  public void setTraceabilityId(java.lang.String value);
  
  
  
}