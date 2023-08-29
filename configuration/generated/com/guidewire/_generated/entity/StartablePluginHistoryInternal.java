package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "StartablePluginHistory.eti;StartablePluginHistory.eix;StartablePluginHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface StartablePluginHistoryInternal extends com.guidewire._generated.entity.InboundHistoryInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.commons.profiler.ProfilerDataSourceInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String STARTABLEPLUGINHISTORYADDED_EVENT = "StartablePluginHistoryAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String STARTABLEPLUGINHISTORYCHANGED_EVENT = "StartablePluginHistoryChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String STARTABLEPLUGINHISTORYREMOVED_EVENT = "StartablePluginHistoryRemoved";
  
  /**
   * Gets the value of the PluginName field.
   * The name of the plugin.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPluginName();
  
  
  /**
   * Gets the value of the ServerId field.
   * Server Id.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getServerId();
  
  
  /**
   * Sets the value of the PluginName field.
   */
  public void setPluginName(java.lang.String value);
  
  
  /**
   * Sets the value of the ServerId field.
   */
  public void setServerId(java.lang.String value);
  
  
  
}