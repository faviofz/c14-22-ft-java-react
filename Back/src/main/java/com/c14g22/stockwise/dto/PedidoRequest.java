package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Proveedor;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PedidoRequest {
    private String descripcion;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fecha;
    private Proveedor proveedor;

    @Override
    public String toString(){
        return "PedidoRequest{" +
                "descripcion='" + descripcion + '\'' +
                "fecha='" + fecha + '\'' +
                "proveedor='" + proveedor + '\'' +
                '}';
    }
}
