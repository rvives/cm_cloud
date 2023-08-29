package entity;

/**
 * FrozenSetMember
 */
@javax.annotation.processing.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FrozenSetMember.eti;FrozenSetMember.eix;FrozenSetMember.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface FrozenSetMember extends entity.KeyableBean, com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.FrozenSetMember> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.FrozenSetMember>("entity.FrozenSetMember");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("FrozenSet", "FrozenSetID");
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet();
  
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value);
  
  
  
}