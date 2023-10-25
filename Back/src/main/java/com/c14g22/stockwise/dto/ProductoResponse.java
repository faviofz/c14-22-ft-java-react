package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Marca;
import com.c14g22.stockwise.model.Producto;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductoResponse {

    private Long id;
    private String nombre;
    private String imagen;
    private Double costo;
    private Double impuesto;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fechaVencimiento;
    private CategoriaDto categoria;
    private ProveedorDto proveedor;
    private MarcaDto marca;

    public ProductoResponse(Producto producto) {
        this.id = producto.getId();
        this.nombre = producto.getNombre();
        this.imagen = producto.getImagen();
        this.costo = producto.getCosto();
        this.impuesto = producto.getImpuesto();
        this.fechaVencimiento = producto.getFechaVencimiento();
        this.categoria = producto.getCategoria() != null ? new CategoriaDto(producto.getCategoria()) : null;
        this.proveedor = producto.getProveedor() != null ? new ProveedorDto(producto.getProveedor()) : null;
        this.marca = producto.getMarca() != null ? new MarcaDto(producto.getMarca()) : null;
    }
}
