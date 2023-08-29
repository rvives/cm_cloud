package com.guidewire._generated.entity;

@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ABLegalVenue.eti;ABLegalVenue.eix;ABLegalVenue.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ABLegalVenueInternal extends com.guidewire._generated.entity.ABPlaceInternal, gw.ab.addressbook.entity.ABLegalVenue {
  /**
   * Gets the value of the VenueType field.
   * Type of court.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VenueType getVenueType();
  
  
  /**
   * Sets the value of the VenueType field.
   */
  public void setVenueType(typekey.VenueType value);
  
  
  
}