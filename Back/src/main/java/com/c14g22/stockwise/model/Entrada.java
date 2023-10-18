package com.c14g22.stockwise.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "entradas")
@Getter
@Setter
public class Entrada {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "entrada_id", nullable = false)
  @JdbcTypeCode(SqlTypes.INTEGER)
  private Long id;
  @Column(name = "fecha_entrada")
  private LocalDate fecha;
  private Integer cantidad;

  @ManyToOne
  @JoinColumn(name = "producto_id")
  private Producto producto;
  @ManyToOne
  @JoinColumn(name = "pedido_id")
  private Pedido pedido;
}
