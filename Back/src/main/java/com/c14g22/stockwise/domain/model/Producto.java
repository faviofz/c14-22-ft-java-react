package com.c14g22.stockwise.domain.model;

import com.c14g22.stockwise.application.request.ProductoRequest;
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
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "productos")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Producto {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "producto_id", nullable = false)
  @JdbcTypeCode(SqlTypes.INTEGER)
  private Long id;
  @Column(nullable = false)
  private String nombre;
  @Column(nullable = false, unique = true)
  private String slogan;
  private String imagen;
  private Double costo;
  private Double impuesto;
  private LocalDate fechaVencimiento;
  private Integer min;
  private Integer max;
  private Integer actual = 0;

  @ManyToOne(targetEntity = Categoria.class)
  @JoinColumn(name = "categoria_id")
  private Categoria categoria;
  @ManyToOne(targetEntity = Proveedor.class)
  @JoinColumn(name = "proveedor_id")
  private Proveedor proveedor;
  @ManyToOne(targetEntity = Marca.class)
  @JoinColumn(name = "marca_id")
  private Marca marca;

  public Producto(ProductoRequest productoRequest) {
    this.nombre = productoRequest.getNombre();
    this.slogan = productoRequest.getSlogan() != null ? productoRequest.getSlogan()
        : this.toSlogan(this.nombre);
    this.imagen = productoRequest.getImagen();
    this.costo = productoRequest.getCosto();
    this.impuesto = productoRequest.getImpuesto();
    this.fechaVencimiento = productoRequest.getFechaVencimiento();
    this.min = productoRequest.getMin();
    this.max = productoRequest.getMax();
    this.actual = productoRequest.getActual();
  }

  private String toSlogan(String s) {
    return s.toLowerCase().replace(" ", "-");
  }
}
