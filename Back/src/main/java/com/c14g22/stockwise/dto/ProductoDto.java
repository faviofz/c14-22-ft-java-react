package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Producto;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fechaVencimiento;

    public ProductoDto(Producto producto) {
        this.id = producto.getId();
        this.nombre = producto.getNombre();
        this.imagen = producto.getImagen();
        this.costo = producto.getCosto();
        this.impuesto = producto.getImpuesto();
        this.fechaVencimiento = producto.getFechaVencimiento();
    }
}
