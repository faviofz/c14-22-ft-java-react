package com.c14g22.stockwise.dto;

import com.c14g22.stockwise.model.Pedido;
import com.c14g22.stockwise.model.Proveedor;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class PedidoResponse {

    private final Long id;
    private final String descripcion;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private final LocalDate fecha;
    private final Proveedor proveedor;

    public PedidoResponse(Pedido pediodo) {
        this.id = pediodo.getId();
        this.descripcion = pediodo.getDescripcion();
        this.fecha = pediodo.getFecha();
        this.proveedor = pediodo.getProveedor();
    }
}
