package entity;

/**
 * HistoryEventContainer
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HistoryEventContainer.eti;HistoryEventContainer.eix;HistoryEventContainer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface HistoryEventContainer extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.HistoryEventContainer> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.HistoryEventContainer>("entity.HistoryEventContainer");
  
  /**
   * This method is meant to be called directly from gosu to generate history events.
   * @param type type of this history event
   * @param description a text description for this history event
   * @return newly created History event
   */
  public entity.History addHistory(typekey.CustomHistoryType type, java.lang.String description);
  
  
  
}