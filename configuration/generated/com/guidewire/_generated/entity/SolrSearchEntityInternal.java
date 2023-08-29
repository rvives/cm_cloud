package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "SolrSearchEntity.eti;SolrSearchEntity.eix;SolrSearchEntity.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface SolrSearchEntityInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the Rank field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRank();
  
  
  /**
   * Gets the value of the Score field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getScore();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SolrSearchEntity getSubtype();
  
  
  /**
   * Gets the value of the Urn field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUrn();
  
  
  /**
   * Sets the value of the Rank field.
   */
  public void setRank(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Score field.
   */
  public void setScore(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.SolrSearchEntity value);
  
  
  /**
   * Sets the value of the Urn field.
   */
  public void setUrn(java.lang.String value);
  
  
  
}