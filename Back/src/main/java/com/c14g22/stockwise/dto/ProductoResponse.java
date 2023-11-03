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
    private String slogan;
    private String imagen;
    private Double costo;
    private Double impuesto;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fechaVencimiento;
    private Integer min;
    private Integer max;
    private Integer actual;
    private CategoriaResponse categoria;
    private ProveedorResponse proveedor;
    private MarcaResponse marca;


    public ProductoResponse(Producto producto) {
        this.id = producto.getId();
        this.nombre = producto.getNombre();
        this.slogan = producto.getSlogan();
        this.imagen = producto.getImagen();
        this.costo = producto.getCosto();
        this.impuesto = producto.getImpuesto();
        this.fechaVencimiento = producto.getFechaVencimiento();
        this.min = producto.getMin();
        this.max = producto.getMax();
        this.actual = producto.getActual();
        this.categoria = producto.getCategoria() != null ? new CategoriaResponse(producto.getCategoria()) : null;
        this.proveedor = producto.getProveedor() != null ? new ProveedorResponse(producto.getProveedor()) : null;
        this.marca = producto.getMarca() != null ? new MarcaResponse(producto.getMarca()) : null;
    }
}
