package com.c14g22.stockwise.controller;

import com.c14g22.stockwise.model.Pedido;
import com.c14g22.stockwise.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @RequestMapping("/pedidos")
    public Iterable<Pedido> getAllPedidos() {
        return pedidoRepository.findAll();
    }

    @RequestMapping("/pedidos/{id}")
    public Pedido getEntradaById(@PathVariable Long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/pedidos")
    public Pedido createPedido(@RequestBody Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/pedidos/{id}")
    public Pedido updatePedido(@PathVariable Long id, @RequestBody Pedido pedido) {
        pedido.setId(id);
        return pedidoRepository.save(pedido);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/pedidos/{id}")
    public void deletePedido(@PathVariable Long id) {
        pedidoRepository.deleteById(id);
    }
}

