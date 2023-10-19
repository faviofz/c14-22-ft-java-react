package com.c14g22.stockwise.repository;

import com.c14g22.stockwise.model.Pedido;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PedidoRepository extends CrudRepository<Pedido, Long> {


    Iterable<Pedido> findAll();

    // Obtiene un pedido por su ID
    Optional<Pedido> findById(Long id);

    // Crea un nuevo pedido
    Pedido save(Pedido pedido);

    // Actualiza un pedido existente
    Pedido update(Pedido pedido);

    // Elimina un pedido
    void deleteById(Long id);
}
