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
@Table(name = "salidas")
@Getter
@Setter
public class Salida {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "salida_id", nullable = false)
  @JdbcTypeCode(SqlTypes.INTEGER)
  private Long id;
  @Column(name = "fecha_salida")
  private LocalDate fecha;
  private String motivo;
  @ManyToOne
  @JoinColumn(name = "producto_id")
  private Producto producto;
}
