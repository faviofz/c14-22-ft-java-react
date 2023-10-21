package com.c14g22.stockwise.service;

import com.c14g22.stockwise.dto.PedidoDto;
import com.c14g22.stockwise.model.Pedido;

import java.util.List;

public interface PedidoService {

    List<Pedido> obtenerPedidos();

    Pedido obtenerPedidoPorId(Long id);

    PedidoDto guardarPedido(PedidoDto pedidoDto);

    void actualizarPedido(Long id, PedidoDto pedidoDto);

    void eliminarPedido(Long id);
}

