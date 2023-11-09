package com.c14g22.stockwise.application.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductoRequest {
    @NonNull
    private String nombre;
    private String slogan;
    private String imagen;
    private Double costo;
    private Double impuesto;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fechaVencimiento;
    private String categoria;
    private String proveedor;
    private String marca;
    private Integer min;
    private Integer max;
    private Integer actual;
    @Override
    public String toString() {
        return "ProductoRequest{" +
            "nombre='" + nombre + '\'' +
            ", imagen='" + imagen + '\'' +
            ", costo=" + costo +
            ", impuesto=" + impuesto +
            ", fechaVencimiento=" + fechaVencimiento +
            ", categoria='" + categoria + '\'' +
            ", proveedor='" + proveedor + '\'' +
            ", marca='" + marca + '\'' +
            '}';
    }
}
