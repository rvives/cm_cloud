package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AsyncApiRequest.eti;AsyncApiRequest.eix;AsyncApiRequest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AsyncApiRequestInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the RequestAcceptedTime field.
   * The timestamp for when the request was accepted for processing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRequestAcceptedTime();
  
  
  /**
   * Gets the value of the RequestCompletionTime field.
   * The timestamp for when processing for the request was completed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRequestCompletionTime();
  
  
  /**
   * Gets the value of the RequestID field.
   * The unique ID of this async request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRequestID();
  
  
  /**
   * Gets the value of the RequestMethod field.
   * The HTTP method of the associated API request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRequestMethod();
  
  
  /**
   * Gets the value of the RequestPath field.
   * The path the request was made to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRequestPath();
  
  
  /**
   * Gets the value of the RequestQueryString field.
   * The query string for the request, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRequestQueryString();
  
  
  /**
   * Gets the value of the RequestStartTime field.
   * The timestamp for when the processing of the request began
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRequestStartTime();
  
  
  /**
   * Gets the value of the ResponseBody field.
   * The bytes of the response body, if the request has completed and has a body
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.lang.Blob getResponseBody();
  
  
  /**
   * Gets the value of the ResponseHeaders field.
   * Headers returned with the response, stored as a JSON object mapping header names to arrays of values
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getResponseHeaders();
  
  
  /**
   * Gets the value of the ResponseStatus field.
   * The HTTP code of the response, if the request has been completed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getResponseStatus();
  
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AsyncApiRequestStatus getStatus();
  
  
  /**
   * Sets the value of the RequestAcceptedTime field.
   */
  public void setRequestAcceptedTime(java.util.Date value);
  
  
  /**
   * Sets the value of the RequestCompletionTime field.
   */
  public void setRequestCompletionTime(java.util.Date value);
  
  
  /**
   * Sets the value of the RequestID field.
   */
  public void setRequestID(java.lang.String value);
  
  
  /**
   * Sets the value of the RequestMethod field.
   */
  public void setRequestMethod(java.lang.String value);
  
  
  /**
   * Sets the value of the RequestPath field.
   */
  public void setRequestPath(java.lang.String value);
  
  
  /**
   * Sets the value of the RequestQueryString field.
   */
  public void setRequestQueryString(java.lang.String value);
  
  
  /**
   * Sets the value of the RequestStartTime field.
   */
  public void setRequestStartTime(java.util.Date value);
  
  
  /**
   * Sets the value of the ResponseBody field.
   */
  public void setResponseBody(gw.lang.Blob value);
  
  
  /**
   * Sets the value of the ResponseHeaders field.
   */
  public void setResponseHeaders(java.lang.String value);
  
  
  /**
   * Sets the value of the ResponseStatus field.
   */
  public void setResponseStatus(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.AsyncApiRequestStatus value);
  
  
  
}