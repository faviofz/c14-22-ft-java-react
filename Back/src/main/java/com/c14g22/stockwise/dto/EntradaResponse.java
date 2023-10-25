package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Entrada;
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
@AllArgsConstructor
@NoArgsConstructor
public class EntradaResponse {

    private Long id;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private LocalDate fecha;
    private Integer cantidad;
    private Producto producto;
    private Pedido pedido;

    public EntradaResponse(Entrada entrada) {
        this.id = entrada.getId();
        this.fecha = entrada.getFecha();
        this.cantidad = entrada.getCantidad();
        this.producto = entrada.getProducto();
        this.pedido = entrada.getPedido();
    }
}
