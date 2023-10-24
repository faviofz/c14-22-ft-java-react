package com.c14g22.stockwise.repository;

import com.c14g22.stockwise.model.Proveedor;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProveedorRepository extends JpaRepository<Proveedor, Long> {

  Optional<Proveedor> findByNombre(String proveedor);
}
