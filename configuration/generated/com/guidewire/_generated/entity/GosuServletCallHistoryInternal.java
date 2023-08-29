package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GosuServletCallHistory.eti;GosuServletCallHistory.eix;GosuServletCallHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GosuServletCallHistoryInternal extends com.guidewire._generated.entity.InboundHistoryInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.commons.profiler.ProfilerDataSourceInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String GOSUSERVLETCALLHISTORYADDED_EVENT = "GosuServletCallHistoryAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String GOSUSERVLETCALLHISTORYCHANGED_EVENT = "GosuServletCallHistoryChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String GOSUSERVLETCALLHISTORYREMOVED_EVENT = "GosuServletCallHistoryRemoved";
  
  /**
   * Gets the value of the GosuServletType field.
   * The name of the Gosu servlet.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGosuServletType();
  
  
  /**
   * Gets the value of the ServerName field.
   * The name of the server receiving the request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getServerName();
  
  
  /**
   * Sets the value of the GosuServletType field.
   */
  public void setGosuServletType(java.lang.String value);
  
  
  /**
   * Sets the value of the ServerName field.
   */
  public void setServerName(java.lang.String value);
  
  
  
}