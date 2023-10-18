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
@Table(name="productos")
@Getter
@Setter
public class Producto {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "producto_id", nullable = false)
  @JdbcTypeCode(SqlTypes.INTEGER)
  private Long id;
  private String nombre;
  private String imagen;
  private Double costo;
  private Double impuesto;
  private LocalDate fechaVencimiento;

  @ManyToOne
  @JoinColumn(name = "categoria_id")
  private Categoria categoria;
  @ManyToOne
  @JoinColumn(name = "proveedor_id")
  private Proveedor proveedor;
  @ManyToOne
  @JoinColumn(name = "marca_id")
  private Marca marca;
}
