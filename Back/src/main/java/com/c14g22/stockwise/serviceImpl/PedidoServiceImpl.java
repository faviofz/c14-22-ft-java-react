package com.c14g22.stockwise.serviceImpl;

import com.c14g22.stockwise.dto.PedidoDto;
import com.c14g22.stockwise.model.Pedido;
import com.c14g22.stockwise.repository.PedidoRepository;
import com.c14g22.stockwise.service.PedidoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoServiceImpl implements PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;


    @Override
    public List<Pedido> obtenerPedidos() {
        return pedidoRepository.findAll();
    }

    @Override
    public Pedido obtenerPedidoPorId(Long id) {
        return pedidoRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public PedidoDto guardarPedido(PedidoDto pedidoDto) {
        Pedido pedido = new Pedido(pedidoDto);
        return new PedidoDto(pedidoRepository.save(pedido));
    }

    @Override
    public void actualizarPedido(Long id, PedidoDto pedidoDto) {
        Pedido pedido = new Pedido(pedidoDto);
        pedidoRepository.save(pedido);
    }

    @Override
    public void eliminarPedido(Long id) {
        pedidoRepository.deleteById(id);
    }
}
