package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Categoria;
import com.c14g22.stockwise.model.Marca;
import com.c14g22.stockwise.model.Producto;
import com.c14g22.stockwise.model.Proveedor;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductoDto {
  private Long id;
  private String nombre;
  private String imagen;
  private Double costo;
  private Double impuesto;
  @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
  private LocalDate fechaVencimiento;

  public ProductoDto(Producto producto){
    this.id = producto.getId();
    this.nombre = producto.getNombre();
    this.imagen = producto.getImagen();
    this.costo = producto.getCosto();
    this.impuesto = producto.getImpuesto();
    this.fechaVencimiento = producto.getFechaVencimiento();
  }
}
