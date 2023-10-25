package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Pedido;
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
public class EntradaRequest {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fecha;
    private Integer cantidad;
    private Producto producto;
    private Pedido pedido;


    @Override
    public String toString() {
        return "EntradaRequest{" +
                "fecha='" + fecha + '\'' +
                ", cantidad='" + cantidad + '\'' +
                ", producto='" + producto + '\'' +
                ", pedido='" + pedido + '\'' +
                '}';


    }
}
