package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Categoria;
import com.c14g22.stockwise.model.Marca;
import com.c14g22.stockwise.model.Proveedor;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductoDto {
  private Long id;
  private String nombre;
  private String imagen;
  private Double costo;
  private Double impuesto;
  private LocalDate fechaVencimiento;
}
